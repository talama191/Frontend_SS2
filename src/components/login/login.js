import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from "react-router-dom";
import FromControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const Login = ({ handleChange }) => {

    const paperStyle = { padding: 20, height: '73vh', width: 360, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#00BCD4' }
    const btstyle = { margin: '8px 0' }
    const initialValues = {
        username: "",
        password: "",
        remember: false
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required('Required'),
        password: Yup.string().required("required")
    })
    const onSubmit = (values, props) => {
        console.log(props)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(true)
        }, 2000)
    }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>

                            <Field as={TextField} label='Username' name="username" placeholder="Enter username" fullWidth required
                                helperText={<ErrorMessage name="username" />} />
                            <Field as={TextField} label='Password' name="password" placeholder="Enter password" type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={FromControlLabel}
                                name="remember"
                                control={
                                    <Checkbox

                                        color='primary'
                                    />
                                }
                                label="Remember me"
                            />
                            <Button type='submit' color="primary"
                                variant='contained' style={btstyle} fullWidth
                                disabled={props.isSubmitting}>{props.isSubmitting ? "Loading" : "Sign in"}</Button>
                        </Form>
                    )}
                </Formik>
                <Typography>
                    <Link href="#">
                        Forgot password ?
                    </Link>
                </Typography>

                <Typography> Do you have an account ?
                    <Link to="/signup">
                        Sign up ?
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login