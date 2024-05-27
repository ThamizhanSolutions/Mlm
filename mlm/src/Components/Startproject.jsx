import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../Assets/Css/Start.css";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import "../Assets/Css/Startproject.css";
import { IoClose } from "react-icons/io5";

let Startproject = (props) => {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {/* <Modal.Header closeButton> */}
                {/* </Modal.Header> */}
                <Modal.Body className='back'>
                    <div className='d-flex justify-content-end align-items-center'>
                        <button onClick={props.onHide} className='startProjectCloseButton'><IoClose /></button>
                    </div>
                    <h4 className='text-center startProjectTitle mb-4'>Start Project</h4>
                    <p className='text-center startProjectSubTitle'>
                        Please fill the below details to get a strategic plan and <br /> Payment Options
                    </p>
                    <form>
                        <TextField
                            id="input1"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            style={{ marginBottom: '10px'}}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                        borderRadius: '24px', // Add border radius here
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgb(233, 173, 3)',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'rgb(233, 173, 3)',
                                },
                            }}
                        />
                        <TextField
                            id="input2"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            style={{ marginBottom: '10px' }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                        borderRadius: '24px', // Add border radius here
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgb(233, 173, 3)',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'rgb(233, 173, 3)',
                                },
                            }}
                        />
                        <TextField
                            id="input3"
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            style={{ marginBottom: '10px' }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                        borderRadius: '24px', // Add border radius here
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgb(233, 173, 3)',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'rgb(233, 173, 3)',
                                },
                            }}
                        />
                        <TextField
                            id="input4"
                            label="Country Code"
                            variant="outlined"
                            fullWidth
                            style={{ marginBottom: '10px' }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                        borderRadius: '24px', // Add border radius here
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgb(233, 173, 3)',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'rgb(233, 173, 3)',
                                },
                            }}
                        />
                        <TextField
                            id="select"
                            select
                            label="Select Project"
                            variant="outlined"
                            fullWidth
                            style={{ marginBottom: '10px' }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                        borderRadius: '24px', // Add border radius here
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgb(233, 173, 3)',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'rgb(233, 173, 3)',
                                },
                            }}
                        >
                            <MenuItem value="Option 1">Binary Plan</MenuItem>
                            <MenuItem value="Option 2">Unilevel Plan</MenuItem>
                            <MenuItem value="Option 3">Matrix Plan</MenuItem>
                        </TextField>
                        <TextField
                            id="textarea"
                            label="Tell about your project"
                            multiline
                            rows={5}
                            variant="outlined"
                            fullWidth
                            style={{ marginBottom: '10px' }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                        borderRadius: '24px', // Add border radius here
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgb(233, 173, 3)',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'rgb(233, 173, 3)',
                                },
                            }}
                        />
                        <div className='d-flex justify-content-center'>
                            <button className='startPorjectSubmitButton m-2'>Submit</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Startproject;
