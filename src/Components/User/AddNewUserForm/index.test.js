import React from 'react';
import { shallow, mount } from 'enzyme';
import { render, fireEvent, act, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import AddNewUserForm from './index';


describe('Component <AddNewUserForm />', () => {

    describe('When render component', () => {

        it('should render input name firstname', () => {
            
            const wrapper = shallow(<AddNewUserForm />);

            const form = wrapper.find('form#add_new_user_form')

            expect(form.find('input[name="firstname"]').length).toBe(1)

        });

        it('should render input name middlename', () => {
            
            const wrapper = shallow(<AddNewUserForm />);

            const form = wrapper.find('form#add_new_user_form')

            expect(form.find('input[name="middlename"]').length).toBe(1)

        });

        it('should render input name lastname', () => {
            
            const wrapper = shallow(<AddNewUserForm />);
            
            const form = wrapper.find('form#add_new_user_form')

            expect(form.find('input[name="lastname"]').length).toBe(1)

        });

        it('should render input name email', () => {
            
            const wrapper = shallow(<AddNewUserForm />);

            const form = wrapper.find('form#add_new_user_form')

            expect(form.find('input[name="email"]').length).toBe(1)

        });

        it('should render Button htmlTyle=submit with name submit ', () => {
            
            const wrapper = shallow(<AddNewUserForm />);

            const form = wrapper.find('form#add_new_user_form')

            expect(form.find('button[name="submit"]').length).toBe(1)

        });

    });

    describe('When required input did not fill', () => {

        it('should not submit when input firstname did not fill', async () => {

            const onCheckSubmit = jest.fn();
        
            const {container, getByRole} = render(<AddNewUserForm onCheckSubmit={onCheckSubmit} />);

            await act(async () => {
                fireEvent.change(
                    getByRole('textbox', {name: 'firstname'}),
                    {
                        target: {value: ''}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'middlename'}),
                    {
                        target: {value: 'P'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'lastname'}),
                    {
                        target: {value: 'M'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'email'}),
                    {
                        target: {value: 'a@mail.com'}
                    }
                )
            })

            fireEvent.click(getByRole('button', {name: 'submit'}))

            expect(onCheckSubmit).not.toBeCalled()
            
            expect(screen.getByText('Please fill firstname')).toBeInTheDocument()
            
        });

        it('should not submit when input lastname did not fill', async () => {

            const onCheckSubmit = jest.fn();
        
            const {container, getByRole} = render(<AddNewUserForm onCheckSubmit={onCheckSubmit} />);

            await act(async () => {
                fireEvent.change(
                    getByRole('textbox', {name: 'firstname'}),
                    {
                        target: {value: 'K'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'middlename'}),
                    {
                        target: {value: 'P'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'lastname'}),
                    {
                        target: {value: ''}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'email'}),
                    {
                        target: {value: 'a@mail.com'}
                    }
                )
            })

            fireEvent.click(getByRole('button', {name: 'submit'}))

            expect(onCheckSubmit).not.toBeCalled()
            
            expect(screen.getByText('Please fill lastname')).toBeInTheDocument()
            
        });

        it('should not submit when input email did not fill', async () => {

            const onCheckSubmit = jest.fn();
        
            const {container, getByRole} = render(<AddNewUserForm onCheckSubmit={onCheckSubmit} />);

            await act(async () => {
                fireEvent.change(
                    getByRole('textbox', {name: 'firstname'}),
                    {
                        target: {value: 'K'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'middlename'}),
                    {
                        target: {value: 'P'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'lastname'}),
                    {
                        target: {value: 'M'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'email'}),
                    {
                        target: {value: ''}
                    }
                )
            })

            fireEvent.click(getByRole('button', {name: 'submit'}))

            expect(onCheckSubmit).not.toBeCalled()
            
            expect(screen.getByText('Please fill email')).toBeInTheDocument()
            
        })
        
    })

    describe('When submit fetch POST successfully', () => {

        beforeEach(() => {
            global.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve(new Response(JSON.stringify({ status: 200 })));
            });
        });

        afterEach(() => {
            jest.restoreAllMocks()
        });


        it('should display success dialog', async () => {

            const onCheckSubmit = jest.fn();
        
            const {container, getByRole} = render(<AddNewUserForm onCheckSubmit={onCheckSubmit} />)

            await act(async () => {
                fireEvent.change(
                    getByRole('textbox', {name: 'firstname'}),
                    {
                        target: {value: 'K'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'middlename'}),
                    {
                        target: {value: 'P'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'lastname'}),
                    {
                        target: {value: 'M'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'email'}),
                    {
                        target: {value: 'a@mail.com'}
                    }
                )
            })

            fireEvent.click(getByRole('button', {name: 'submit'}))

            await waitFor(() => {
                expect(onCheckSubmit).toBeCalled()

                expect(screen.getByText('Add new user successfully')).toBeInTheDocument()
            });

            

        })

    })

    describe('When submit fetch POST result status is 400 - Bad Request', () => {

        beforeEach(() => {
            global.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve(new Response(JSON.stringify({ status: 400 })));
            });
        });

        afterEach(() => {
            jest.restoreAllMocks()
        });

        it('should display failed dialog with status message', async () => {

            const onCheckSubmit = jest.fn();
        
            const {container, getByRole} = render(<AddNewUserForm onCheckSubmit={onCheckSubmit} />)

            await act(async () => {
                fireEvent.change(
                    getByRole('textbox', {name: 'firstname'}),
                    {
                        target: {value: 'K'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'middlename'}),
                    {
                        target: {value: 'P'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'lastname'}),
                    {
                        target: {value: 'M'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'email'}),
                    {
                        target: {value: 'a@mail.com'}
                    }
                )
            })

            fireEvent.click(getByRole('button', {name: 'submit'}))

            await waitFor(() => {
                expect(onCheckSubmit).toBeCalled()

                expect(screen.getByText('Add new user failed - Bad Request')).toBeInTheDocument()
            });

        })

    })

    describe('When submit fetch POST result status is 401 - Unauthorized', () => {

        beforeEach(() => {
            global.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve(new Response(JSON.stringify({ status: 401 })));
            });
        });

        afterEach(() => {
            jest.restoreAllMocks()
        });

        it('should display failed dialog with status message', async () => {

            const onCheckSubmit = jest.fn();
        
            const {container, getByRole} = render(<AddNewUserForm onCheckSubmit={onCheckSubmit} />)

            await act(async () => {
                fireEvent.change(
                    getByRole('textbox', {name: 'firstname'}),
                    {
                        target: {value: 'K'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'middlename'}),
                    {
                        target: {value: 'P'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'lastname'}),
                    {
                        target: {value: 'M'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'email'}),
                    {
                        target: {value: 'a@mail.com'}
                    }
                )
            })

            fireEvent.click(getByRole('button', {name: 'submit'}))

            await waitFor(() => {
                expect(onCheckSubmit).toBeCalled()

                expect(screen.getByText('Add new user failed - Unauthorized')).toBeInTheDocument()
            });

        })

    })

    describe('When submit fetch POST result status is 500 - Internal Server Error', () => {

        beforeEach(() => {
            global.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve(new Response(JSON.stringify({ status: 500 })));
            });
        });

        afterEach(() => {
            jest.restoreAllMocks()
        });

        it('should display failed dialog with status message', async () => {

            const onCheckSubmit = jest.fn();
        
            const {container, getByRole} = render(<AddNewUserForm onCheckSubmit={onCheckSubmit} />)

            await act(async () => {
                fireEvent.change(
                    getByRole('textbox', {name: 'firstname'}),
                    {
                        target: {value: 'K'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'middlename'}),
                    {
                        target: {value: 'P'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'lastname'}),
                    {
                        target: {value: 'M'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'email'}),
                    {
                        target: {value: 'a@mail.com'}
                    }
                )
            })

            fireEvent.click(getByRole('button', {name: 'submit'}))

            await waitFor(() => {
                expect(onCheckSubmit).toBeCalled()

                expect(screen.getByText('Add new user failed - Internal Server Error')).toBeInTheDocument()
            });

        })

    })

    describe('When submit fetch POST catch error', () => {

        beforeEach(() => {
            global.fetch = jest.fn().mockImplementation(() => {
              return Promise.reject(new Response(JSON.stringify(null)));
            });
        });

        afterEach(() => {
            jest.restoreAllMocks()
        });

        it('should display failed dialog with status message', async () => {

            const onCheckSubmit = jest.fn();
        
            const {container, getByRole} = render(<AddNewUserForm onCheckSubmit={onCheckSubmit} />)

            await act(async () => {
                fireEvent.change(
                    getByRole('textbox', {name: 'firstname'}),
                    {
                        target: {value: 'K'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'middlename'}),
                    {
                        target: {value: 'P'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'lastname'}),
                    {
                        target: {value: 'M'}
                    }
                )
    
                fireEvent.change(
                    getByRole('textbox', {name: 'email'}),
                    {
                        target: {value: 'a@mail.com'}
                    }
                )
            })

            fireEvent.click(getByRole('button', {name: 'submit'}))

            await waitFor(() => {
                expect(onCheckSubmit).toBeCalled()

                expect(screen.getByText('Add new user failed - Error, try again later')).toBeInTheDocument()
            });

        })

    })


})
