import React, {useEffect, useState} from 'react'

import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.css'

import AddNewUserForm from './Components/User/AddNewUserForm';


const App = () => {

    const onFinish = (values) => {

        console.log('values: ', values);
        // fetch here

    }
    const onFinishFailed = (error) => {

    }
    
    return (
        <>
            {/* <Row justify="center">
                <Col xl={10} xs={22} style={{marginTop: 100}}>
                    <Card style={{width: '100%'}}>
                        <Row>
                            <Col span={24} style={{display: 'flex', justifyContent: 'center'}} >
                                <Typography.Title level={4}>Add new user</Typography.Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                
                                <AddNewUserForm/>

                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row> */}
            <div className="container" style={{height: '100%', paddingTop: '100px', paddingBottom: '100px'}}>
                <div className="columns">
                    <div className="column">
                        
                    </div>
                    <div className="column">
                        <h3>Add new user</h3>
                        <AddNewUserForm/>
                    </div>
                    <div className="column">
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
