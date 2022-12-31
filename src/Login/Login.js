import React from 'react';
import { Button, Input, Form, Dialog } from 'antd-mobile';
import classes from './Login.module.css';
import { loginService } from '../services/login';
const Login = () => {
    const [form] = Form.useForm();
    const onSubmit = async () => {
        const values = form.getFieldsValue();
        const res = await loginService(values.username, values.password);
        if (res && res.length > 0) {
            Dialog.alert({
              content: "Login successful!",
            });
            return;
        }
        Dialog.alert({
            content: "Login Failed!"
        });
    };

    const initialValues = {
        username: 'anonymous', 
        password: '12345',
    }

    return (
        <div className={classes.login}>
            <Form form={form} layout="horizontal" mode="card"
                  initialValues={initialValues} 
                  footer={
                    <Button block color='primary' onClick={onSubmit} size='large'>
                        Log In
                    </Button>}
            >
                <Form.Item label="Username" name="username">
                    <Input placeholder="please enter your username" type='text' clearable/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input placeholder="please enter your password" type='password' clearable/>
                </Form.Item>
            </Form>
        </div>

    )
}
export default Login;
