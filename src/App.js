import React, {useEffect, useState} from 'react'

import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.css'

import AddNewUserForm from './Components/User/AddNewUserForm';
import UserList from './Components/User/UserList/index';


const App = () => {
    
    return (
        <div className="container" style={{height: '100%', paddingTop: '100px', paddingBottom: '100px'}}>
            <div className="columns">
                <div className="column">
                    
                </div>
                <div className="column">
                    <h3>Add new user</h3>
                    <AddNewUserForm/>
                    <br />
                    <hr />
                    <br />
                    <h3>User List</h3>
                    <UserList />
                </div>
                <div className="column">
                    
                </div>
            </div>
        </div>
    );
};

export default App;

