import * as React from 'react';
import Layout from './Layout';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Clients() {
  const [rows, setRows] = React.useState([
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  ]);

  const handleAdd = () => {
    const newRow = { id: rows.length + 1, lastName: '', firstName: '', age: '' };
    setRows([...rows, newRow]);
  };

  const handleDelete = (idToDelete) => {
    const updatedRows = rows.filter((row) => row.id !== idToDelete);
    setRows(updatedRows);
  };

  const handleEdit = (id, field, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130, editable: true },
    { field: 'lastName', headerName: 'Last name', width: 130, editable: true },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="delete"
            color="secondary"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' ,paddingLeft:"30px",paddingRight:"30px"}}>
      <Layout />
      <Typography sx={{ textAlign: 'center', marginBottom: '16px' }}>
        Clients
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: '16px' }}
        onClick={handleAdd}
      >
        + Add
      </Button>
     
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        pagination
        paginationMode="server"
        checkboxSelection
        disableSelectionOnClick
        autoHeight
        style={{ border: '1px solid #ccc', borderRadius: '5px' }}
        headerStyle={{ padding: '8px' }}
        onEditCellChangeCommitted={(editCellChangeParams) => {
          const { id, field, props } = editCellChangeParams;
          handleEdit(id, field, props.value);
        }}
      />
    </div>
  );
}
