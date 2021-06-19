import React from 'react';
import { shallow, mount } from 'enzyme';
import { render, fireEvent, act, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import SingleUserCard from './index';


describe('Component <SingleUserCard />', () => {

    describe('When render component', () => {

        it('should display "Not enough Data to display" when firstname props is not available', async () => {

            const {container} = render(
                <SingleUserCard
                    single_user={{
                        firstname: '',
                        middlename: 'Archineer',
                        lastname: 'Phet',
                        email: 'a@mail.com'
                    }}
                />
            )

            await waitFor(() => {

                expect(screen.getByText('Not enough data to display')).toBeInTheDocument()

            });

        })

        it('should display "Not enough Data to display" when lastname props is not available', async () => {

            const {container} = render(
                <SingleUserCard
                    single_user={{
                        firstname: 'Kham',
                        middlename: 'Archineer',
                        lastname: '',
                        email: 'a@mail.com'
                    }}
                />
            )

            await waitFor(() => {

                expect(screen.getByText('Not enough data to display')).toBeInTheDocument()

            });

        })

        it('should display "Not enough Data to display" when email props is not available', async () => {

            const {container} = render(
                <SingleUserCard
                    single_user={{
                        firstname: 'Kham',
                        middlename: 'Archineer',
                        lastname: 'Phet',
                        email: ''
                    }}
                />
            )

            await waitFor(() => {

                expect(screen.getByText('Not enough data to display')).toBeInTheDocument()

            });

        })

        it('should display “normally” even when middlename props is not available', async () => {

            const {container} = render(
                <SingleUserCard
                    single_user={{
                        firstname: 'Kham',
                        middlename: '',
                        lastname: 'Phet',
                        email: 'a@mail.com'
                    }}
                />
            )

            await waitFor(() => {

                expect(screen.getByText('Kham Phet')).toBeInTheDocument()

            });

        })

    })

})
