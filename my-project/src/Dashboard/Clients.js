import * as React from 'react';
import Layout from './Layout';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Clients() {
  const [rows, setRows] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const [newRow, setNewRow] = React.useState({ jobCount: '', ClientName: '', age: '' });

  const handleAdd = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setRows([...rows, { id: rows.length + 1, ...newRow }]);
    setNewRow({ jobCount: '', ClientName: '', age: '' });
    setOpen(false);
  };

  const handleEdit = (id, field, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewRow((prevRow) => ({
      ...prevRow,
      [name]: value,
    }));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'ClientName', headerName: 'Client Name', width: 150, editable: true },
    { field: 'jobCount', headerName: 'Job Count', width: 150, editable: true },
    { field: 'ClientIndustry', headerName: 'Client Industry', width: 150, editable: true },
    { field: 'ClientLocation', headerName: 'Client Location', width: 150, editable: true },
    { field: 'ClientStage', headerName: 'Client Stage', width: 150, editable: true },
    { field: 'ClientOwner', headerName: 'Client Owner', width: 150, editable: true },
    { field: 'ClientTeam', headerName: 'Client Team', width: 150, editable: true },
    { field: 'ClientCreatedDate', headerName: 'Client Created Date', width: 180, editable: true },
  ];

  return (
    <>
      <Layout />
      <AppBar position="static" sx={{ backgroundColor: '#f1f4f8', mt: "-45px" }}>
        <Toolbar variant="dense">
          <Typography sx={{ flexGrow: 1, textAlign: 'center', fontSize: '30px', fontWeight: 'bold', color: "black" }}>
            Clients
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ height: 400, width: '100%', paddingLeft: '30px', paddingRight: '30px',marginTop:"30px"}}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: '16px', fontSize: "12px" }}
          onClick={handleAdd}
        >
          <Typography style={{ fontSize: '12px', fontWeight: 'normal', textTransform: 'none', }}>
            + Create Activity
          </Typography>
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
          components={{
            NoRowsOverlay: () => (
              <div style={{ width: '100%', textAlign: 'center', padding: '30px' }}>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}> No clients found</div>
                <div style={{ fontSize: "14px" }}> No clients match the selected filters. Please modify the filters to try again.</div>
              </div>
            ),
          }}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Client</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="ClientName"
              label="Client Name"
              type="text"
              value={newRow.ClientName}
              onChange={handleChange}
              fullWidth
            />
            {/* Add other text fields for the additional columns here */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
