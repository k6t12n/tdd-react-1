import React, {useEffect, useState} from 'react'
import { Row, Col, Card, Typography, Form, Input, Button } from 'antd'
import 'antd/dist/antd.css';

const AddNewUserForm = (props) => {

    const onFinish = (values) => {

        props.onFinish(values)
        
        // fetch here

    }
    const onFinishFailed = (error) => {

    }
    
    return (
        <Form
            data-testid="add_new_user"
            layout="vertical"
            name='add_new_user'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Firstname"
                name="firstname"
                rules={[{ required: true, message: 'Please fill firstname' }]}
            >
                <Input 
                    type="text" 
                    placeholder="Firstname"
                />
            </Form.Item>
            <Form.Item
                label="Middlename"
                name="middlename"
            >
                <Input 
                    type="text" 
                    placeholder="Middlename"
                />
            </Form.Item>
            <Form.Item
                label="Lastname"
                name="lastname"
                rules={[{ required: true, message: 'Please fill lastname' }]}
            >
                <Input 
                    type="text" 
                    placeholder="Lastname"
                />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please fill email' }]}
            >
                <Input 
                    type="email" 
                    placeholder="Email"
                />
            </Form.Item>
            <Form.Item>
                <Button
                    htmlType="submit"
                    type="primary"
                    name='submit'
                    size="large"
                    style={{width: '100%'}}
                >
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddNewUserForm;
