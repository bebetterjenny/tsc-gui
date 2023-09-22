import React, { useCallback, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import Stack from '@mui/material/Stack';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';
import {
    GridRowsProp,
    GridRowModesModel,
    GridRowModes,
    DataGrid,
    GridColDef,
    GridToolbarContainer,
    GridActionsCellItem,
    GridEventListener,
    GridRowId,
    GridRowModel,
    GridRowEditStopReasons,
  } from '@mui/x-data-grid';
  import {
    randomCreatedDate,
    randomTraderName,
    randomId,
    randomArrayItem,
  } from '@mui/x-data-grid-generator';
import { mockCases } from './constants';

// styles
const StyledRoot = styled(MainCard)(({ theme }) => ({
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',

}));

const rows = mockCases;
// [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const Cases = () => {
    const navigate = useNavigate();

    const handleEditClick = useCallback((id) => () => {
        navigate(`edit/${id}`);
    }, [navigate]);

    const columns = useMemo(() => [
        { field: 'taskId', headerName: 'Case ID', flex: 1 },
        {
            field: 'tscAdministratorId',
            headerName: 'TSC Admin ID', 
            flex: 1,
        },
        {
            field: 'navigatorId',
            headerName: 'Navigator ID',
            flex: 1,
        },
        {
            field: 'taskProgressEnum',
            headerName: 'Progress',
            sortable: false,
            flex: 1,
            renderCell: (params) => {
                switch (params.value) {
                    case 'START':
                        return <Chip label={params.value} color="info" variant="outlined" />;
                    case 'IN_PROGRESS':
                        return <Chip label={params.value} color="primary" variant="outlined" />;
                    case 'COMPLETED':
                        return <Chip label={params.value} color="success" variant="outlined" />;
                    default:
                        return <Chip label={params.value} color="default" variant="outlined" />;
                }
            },
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            flex: 1,
            cellClassName: 'actions',
            getActions: ({ id }) => {


                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                ];
            },
        }
    ], [handleEditClick]);

    return (
        <StyledRoot>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                <Button variant="outlined"><RefreshIcon />Refresh</Button>
                <Button variant="outlined"><AddIcon />Add New</Button>
                <Button variant="outlined"><DownloadIcon />Export</Button>
            </Stack>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.taskId}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                // checkboxSelection
                disableRowSelectionOnClick
            />
        </StyledRoot>
    );
}

export default Cases;