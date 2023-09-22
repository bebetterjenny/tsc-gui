import React from 'react';
import { styled } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import { IconChevronRight } from '@tabler/icons';
import { useNavigate, useLocation } from 'react-router';
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Upload from 'pages/batch/steps/Upload';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


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
        },
    },
    '& .upload-container': {
        height: 200,
        '& > .MuiBox-root': {
            borderRadius: 18,
            position: 'relative',
            '&::before': {
                content: '"DocuSign Consenus"',
                display: 'block',
                position: 'absolute',
                top: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#697586',
                fontSize: '0.875rem',
                fontWeight: 400,
            },
        }
    }
}));

const Edit = () => {
    const location = useLocation();

    return (
        <StyledRoot title="Create a New Case">
            <Formik
                initialValues={{ taskId: '12313', tscAdministratorId: '21303', navigatorId: '314', taskProgressEnum: "START" }}
                validate={values => {
                    const errors = {};
                    // if (!values.taskId) {
                    //     errors.taskId = 'Required';
                    // } else if (
                    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.taskId)
                    // ) {
                    //     errors.taskId = 'Invalid email address';
                    // }
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
                    console.log({ errors, touched });
                    return <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid xs={4}>
                                <TextField
                                    fullWidth
                                    label="Task ID"
                                    value={values.taskId}
                                    disabled={true}
                                    error={!!errors.taskId && !!touched.taskId}
                                    helperText={errors.taskId && touched.taskId && errors.taskId}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Grid>
                            <Grid xs={4}>
                                <TextField
                                    fullWidth
                                    label="Admin ID"
                                    value={values.tscAdministratorId}
                                    disabled={true}
                                    error={!!errors.tscAdministratorId && !!touched.tscAdministratorId}
                                    helperText={errors.tscAdministratorId && touched.tscAdministratorId && errors.tscAdministratorId}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Grid>
                            <Grid xs={4}>
                                <TextField
                                    fullWidth
                                    label="Navigator ID"
                                    value={values.navigatorId}
                                    disabled={true}
                                    error={!!errors.navigatorId && !!touched.navigatorId}
                                    helperText={errors.navigatorId && touched.navigatorId && errors.navigatorId}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl fullWidth>
                                    <InputLabel >Status</InputLabel>
                                    <Select
                                        label="Status"
                                        value={values.taskProgressEnum}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'START'}>Start</MenuItem>
                                        <MenuItem value={'IN_PROGRESS'}>In Progress</MenuItem>
                                        <MenuItem value={'COMPLETED'}>Completed</MenuItem>
                                    </Select>
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid xs={4}>
                                <LocalizationProvider fullWidth dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        fullWidth
                                        label="Appointment Date"
                                        value={values.date}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid xs={4}>
                                <LocalizationProvider fullWidth dateAdapter={AdapterDateFns}>
                                    <TimePicker
                                        fullWidth
                                        label="Appointment Time"
                                        value={values.time}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid xs={12} className="upload-container">
                                <Upload />
                            </Grid>
                        </Grid>
                        <Stack direction="row" spacing={2} sx={{ mt: 30, justifyContent: 'space-between' }}>
                            <Button variant="outlined">Reset</Button>
                            <Button variant="contained" type="submit" disabled={isSubmitting}>Submit</Button>
                        </Stack>
                    </form>
                }}
            </Formik>
        </StyledRoot>
    );
}

export default Edit;