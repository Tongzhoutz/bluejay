import React from 'react';
import classes from './Login.module.css';
import {Button, Input, Form, PasscodeInput, NumberKeyboard, Dialog} from 'antd-mobile';

const Login = () => {
    
    const [form] = Form.useForm();
    const onSubmit = () => {
        const values = form.getFieldsValue();
        Dialog.alert({
            content: JSON.stringify(values),
        })
    }
    
    const initialValues = {
        username2: 'hahaha',
        password2: '12345'
    };

    return (
        <div className={classes.login} >
            <Form form={form} layout="horizontal" mode="card" initialValues={initialValues}
                footer={
                    <Button block color='primary' onClick={onSubmit} size='large'>
                        Log In
                    </Button>}
            >
                <Form.Item label="Username" name="username2">
                    <Input placeholder="please input" type="text" clearable/>
                </Form.Item>
                <Form.Item label="Password" name="password2">
                    <Input placeholder="please input" type="passwowrd" clearable/>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;