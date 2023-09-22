import React from 'react';
import { styled } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import { IconChevronRight } from '@tabler/icons';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { mockOrganizations } from '../Default/chart-data/mock-organzations';
import {
    Avatar, Box, ButtonBase, CardHeader, Typography, Divider, FormHelperText, InputLabel,
    FormControl,
    FormControlLabel,
} from '@mui/material';
import user3 from 'assets/images/users/user3.jpeg';


// styles
const StyledRoot = styled(MainCard)(({ theme }) => ({
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',

}));

const Match = () => {

    return (
        <StyledRoot title="Match Services for the recipient">
            <Stack direction="row" spacing={2} sx={{ height: 'fit-content', width: '100%', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <MenuItem value={'4302'}>
                    <Avatar
                        src={user3}
                        sx={{ width: 45, height: 45 }}
                    />
                    <div style={{ marginLeft: 10 }}>
                        <div><Typography variant="subtitle1">Jenny Han</Typography></div>
                        <div><Typography variant="subtitle2">ID: 4303</Typography></div>
                    </div>
                </MenuItem>
                <FormControl sx={{ width: '70%' }}>
                    <Autocomplete
                        multiple
                        options={mockOrganizations}
                        getOptionLabel={(option) => option.orgName}
                        helperText="Select services"
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Serving Organizations"
                            />
                        )}
                    />
                    <FormHelperText>
                        Some organzations have overlap services, you can see the chart below.
                    </FormHelperText>
                </FormControl>
            </Stack>
            <Box
                sx={{
                    width: '100%',
                    flex: 1,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            />

        </StyledRoot>
    );
}

export default Match;