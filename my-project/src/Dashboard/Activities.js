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

export default function Activities() {
  const [rows, setRows] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const [newRow, setNewRow] = React.useState({ 
    id: '', 
    Title: '', 
    Type: '', 
    RelatedTo: '', 
    Date: '', 
    Time: '', 
    Duration: '', 
    Assignees: '', 
    Attendees: '', 
    Creator: '', 
    CreatedDate: '' 
  });

  const handleAdd = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setRows([...rows, { ...newRow }]);
    setNewRow({ 
      id: '', 
      Title: '', 
      Type: '', 
      RelatedTo: '', 
      Date: '', 
      Time: '', 
      Duration: '', 
      Assignees: '', 
      Attendees: '', 
      Creator: '', 
      CreatedDate: '' 
    });
    setOpen(false);
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
    { field: 'Title', headerName: 'Title', width: 150, editable: true },
    { field: 'Type', headerName: 'Type', width: 150, editable: true },
    { field: 'RelatedTo', headerName: 'Related To', width: 150, editable: true },
    { field: 'Date', headerName: 'Date', width: 150, editable: true },
    { field: 'Time', headerName: 'Time', width: 150, editable: true },
    { field: 'Duration', headerName: 'Duration', width: 150, editable: true },
    { field: 'Assignees', headerName: 'Assignees', width: 150, editable: true },
    { field: 'Attendees', headerName: 'Attendees', width: 150, editable: true },
    { field: 'Creator', headerName: 'Creator', width: 150, editable: true },
    { field: 'CreatedDate', headerName: 'Created Date', width: 180, editable: true },
  ];

  return (
    <>
      <Layout />
      <AppBar position="static" sx={{ backgroundColor: '#f1f4f8', mt: "-45px" }}>
        <Toolbar variant="dense">
          <Typography sx={{ flexGrow: 1, textAlign: 'center', fontSize: '30px', fontWeight: 'bold', color: "black" }}>
          Activities
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
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Activity</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="Title"
              label="Title"
              type="text"
              value={newRow.Title}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="Type"
              label="Type"
              type="text"
              value={newRow.Type}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="RelatedTo"
              label="Related To"
              type="text"
              value={newRow.RelatedTo}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="Date"
              label="Date"
              type="text"
              value={newRow.Date}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="Time"
              label="Time"
              type="text"
              value={newRow.Time}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="Duration"
              label="Duration"
              type="text"
              value={newRow.Duration}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="Assignees"
              label="Assignees"
              type="text"
              value={newRow.Assignees}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="Attendees"
              label="Attendees"
              type="text"
              value={newRow.Attendees}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="Creator"
              label="Creator"
              type="text"
              value={newRow.Creator}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              name="CreatedDate"
              label="Created Date"
              type="text"
              value={newRow.CreatedDate}
              onChange={handleChange}
              fullWidth
            />
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
