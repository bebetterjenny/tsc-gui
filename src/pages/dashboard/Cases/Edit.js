import React from 'react';
import { styled } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import { IconChevronRight } from '@tabler/icons';
import { useNavigate, useLocation } from 'react-router';
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';

// styles
const StyledRoot = styled(MainCard)(({ theme }) => ({
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& .MuiCardContent-root': {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        '& .MuiPaper-root': {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            '& .form-container': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }
    },
}));

const Edit = () => {
    const location = useLocation();

    return (
        <StyledRoot>
            <Formik
                initialValues={{ taskId: '12313', tscAdministratorId: '21303', navigatorId: '314' }}
                validate={values => {
                    const errors = {};
                    if (!values.taskId) {
                        errors.taskId = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.taskId)
                    ) {
                        errors.taskId = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => {
                    console.log({errors, touched});
                    return <form onSubmit={handleSubmit}>
                        <TextField
                            label="Task ID"
                            value={values.taskId}
                            disabled={true}
                            error={!!errors.taskId && !!touched.taskId}
                            helperText={errors.taskId && touched.taskId && errors.taskId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <TextField
                            label="Admin ID"
                            value={values.tscAdministratorId}
                            disabled={true}
                            error={!!errors.tscAdministratorId && !!touched.tscAdministratorId}
                            helperText={errors.tscAdministratorId && touched.tscAdministratorId && errors.tscAdministratorId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <TextField
                            label="Navigator ID"
                            value={values.navigatorId}
                            disabled={true}
                            error={!!errors.navigatorId && !!touched.navigatorId}
                            helperText={errors.navigatorId && touched.navigatorId && errors.navigatorId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                }}
            </Formik>
        </StyledRoot>
    );
}

export default Edit;