import React, { Component } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

class FileUpload extends Component {
    state = {
        selectedFile: null,
    };

    onFileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
        });
    };

    onFileUpload = () => {
        if (!this.state.selectedFile) {
            alert("Please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        axios
            .post("https://jsonplaceholder.typicode.com/posts", formData)
            .then((response) => {
                console.log(response.data);
                alert("File uploaded successfully!");
            })
            .catch((error) => {
                console.error("Error uploading file: ", error);
                alert("Error uploading file. Please try again later.");
            });
    };

    deleteFile = () => {
        this.setState({
            selectedFile: null,
        });
    };

    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <Box sx={{ fontSize: '10px', marginTop: "10px" }} >
                    <Typography sx={{ fontSize: '15px', fontWeight: 'bold', }}>File Details:</Typography>
                    <Typography>
                        File Name: {this.state.selectedFile.name}
                    </Typography>
                    <Typography>
                        File Type: {this.state.selectedFile.type}
                    </Typography>
                    <Typography>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                        <Button onClick={this.deleteFile} >Delete File</Button>
                        <Button onClick={this.onFileUpload} >
                            Upload!
                        </Button>
                    </Box>

                </Box>
            );
        } else {
            return (
                <Typography>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </Typography>
            );
        }
    };

    handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        const file = event.dataTransfer.files[0];
        this.setState({
            selectedFile: file
        });
    };

    render() {
        return (
            <Box style={{ cursor: "pointer" }} onDrop={this.handleDrop} onDragOver={(e) => e.preventDefault()}>
                <input
                    type="file"
                    onChange={this.onFileChange}
                    style={{ width: "300px", border: "2px double black", cursor: "pointer" }}
                />
                {this.fileData()}
            </Box>
        );
    }
}

export default FileUpload;
