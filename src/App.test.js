import React from 'react';
import { shallow, mount } from 'enzyme';
import { render, fireEvent, act, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import AddNewUserForm from './Components/User/AddNewUserForm';
import UserList from './Components/User/UserList';


describe('Component <App />', () => {

    describe('When render component', () => {

        it('should render <AddNewUserForm />', () => {
            
            const wrapper = shallow(<App />);

            expect(wrapper.find(AddNewUserForm)).toHaveLength(1);

        });

    })

    describe('When render component', () => {

        it('should render <UserList />', () => {
            
            const wrapper = shallow(<App />);

            expect(wrapper.find(UserList)).toHaveLength(1);

        });

    })

})
