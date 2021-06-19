import React from 'react';
import { shallow, mount } from 'enzyme';
import { render, fireEvent, act, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import UserList from './index';


describe('Component <UserList />', () => {

    describe('When fetch data successfully', () => {

        beforeEach(() => {
            global.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve(
                    new Response(JSON.stringify({ 
                        status: 200,
                        data: [
                            {
                                id: 1,
                                firstname: 'Khamphet',
                                middlename: 'Archineer',
                                lastname: 'LPB',
                                email: 'a@mail.com'
                            },
                            {
                                id: 2,
                                firstname: 'Noy',
                                middlename: 'Archineer',
                                lastname: 'Khodtham',
                                email: 'noy@mail.com'
                            }
                        ]
                    }))
                );
            });
        });

        afterEach(() => {
            jest.restoreAllMocks()
        });


        it('should display 2 rows that received from mock fetch', async () => {

            const {container, getAllByTestId} = render(<UserList />)

            await waitFor(() => {

                expect(getAllByTestId('single_user_card').length).toBe(2)

            });

        })


    })

    describe('When fetch data successfully but got empty data', () => {

        beforeEach(() => {
            global.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve(
                    new Response(JSON.stringify({ 
                        status: 200,
                        data: [] // empty data
                    }))
                );
            });
        });

        afterEach(() => {
            jest.restoreAllMocks()
        });


        it('should display "No data found." message', async () => {

            await render(<UserList />)

            await waitFor(() => {

                expect(screen.getByText('No data found.')).toBeInTheDocument()

            });

        })


    })

    describe('When fetch data failed on catch error', () => {

        beforeEach(() => {
            global.fetch = jest.fn().mockImplementation(() => {
                return Promise.reject(new Response(JSON.stringify(null)));
            });
        })

        afterEach(() => {
            jest.restoreAllMocks()
        });


        it('should display "Error, cannot fetch." message', async () => {

            const {container, getAllByTestId} = render(<UserList />)

            await waitFor(() => {

                expect(screen.getByText('Error, cannot fetch.')).toBeInTheDocument()

            });

        })


    })

})
