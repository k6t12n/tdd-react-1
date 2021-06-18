import React from 'react';
import { shallow, mount } from 'enzyme';
import { render, fireEvent, act, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';


import { Form, Button } from 'antd'
import AddNewUserForm from './index';

const form_name_prefix = 'add_new_user_';

describe('Component <AddNewUserForm />', () => {

    describe('When render component', () => {

        it('should render Form.Item name firstname', () => {
            
            const wrapper = shallow(<AddNewUserForm />);

            expect(wrapper.find(Form.Item).filterWhere(item => {
                return item.prop('name') === 'firstname'
            })).toHaveLength(1);

        });

        it('should render Form.Item name middlename', () => {
            
            const wrapper = shallow(<AddNewUserForm />);

            expect(wrapper.find(Form.Item).filterWhere(item => {
                return item.prop('name') === 'middlename'
            })).toHaveLength(1);

        });

        it('should render Form.Item name lastname', () => {
            
            const wrapper = shallow(<AddNewUserForm />);
            
            expect(wrapper.find(Form.Item).filterWhere(item => {
                return item.prop('name') === 'lastname'
            })).toHaveLength(1);

        });

        it('should render Form.Item name email', () => {
            
            const wrapper = shallow(<AddNewUserForm />);

            expect(wrapper.find(Form.Item).filterWhere(item => {
                return item.prop('name') === 'email'
            })).toHaveLength(1);

        });

        it('should render Button htmlTyle=submit with name submit ', () => {
            
            const wrapper = shallow(<AddNewUserForm />);

            expect(wrapper.find(Button).filterWhere(item => {
                return item.prop('name') === 'submit' && item.prop('htmlType') === 'submit'
            })).toHaveLength(1);

        });

    });

    describe('When required Form.Item did not fill', () => {

        it('should display warning when did not fill Form.Item firstname', () => {

            Object.defineProperty(window, 'matchMedia', {
                writable: true,
                value: jest.fn().mockImplementation(query => ({
                    matches: false,
                    media: query,
                    onchange: null,
                    addListener: jest.fn(), // deprecated
                    removeListener: jest.fn(), // deprecated
                    addEventListener: jest.fn(),
                    removeEventListener: jest.fn(),
                    dispatchEvent: jest.fn(),
                })),
            });
            
            const handleOnSubmit = jest.fn((values) => {
                console.log('values: ', values);
            })

            const {container, getByRole, getByTestId, getByText} = render(<AddNewUserForm onFinish={handleOnSubmit} />);

            container.querySelector('form').onFinish = (values) => handleOnSubmit(values)

            fireEvent.change(
                getByRole('textbox', {name: 'Firstname'}),
                {
                    target: {value: 'K'}
                }
            )

            fireEvent.change(
                getByRole('textbox', {name: 'Middlename'}),
                {
                    target: {value: 'P'}
                }
            )

            fireEvent.change(
                getByRole('textbox', {name: 'Lastname'}),
                {
                    target: {value: 'M'}
                }
            )

            fireEvent.change(
                getByRole('textbox', {name: 'Email'}),
                {
                    target: {value: 'a@mail.com'}
                }
            )

            fireEvent.click(getByRole('button', {name: 'submit'}))

            expect(handleOnSubmit).toHaveBeenCalled()

        });
        
    })

})
