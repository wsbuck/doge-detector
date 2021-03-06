import React from 'react';

import { DialogTitle, DialogActions } from '@material-ui/core';
import { DialogContent, DialogContentText } from '@material-ui/core';
import { Dialog, Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Info from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  bodyText: {
    color: 'white',
    '& a': {
      color: '#FFAB91',
    },
  },
}));

export default function InfoButton() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <IconButton
        color='secondary' aria-label='Information'
        onClick={handleClickOpen}
      >
        <Info />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Hello!</DialogTitle>
        <DialogContent>
          <DialogContentText 
            id='alert-dialog-description' 
            className={classes.bodyText}>
            This is made with tensorflow.js and React.
            The model is mobilenet retrained only on the dogs of ImageNet.
            The code for this project can be found <a href="https://github.com/wsbuck/doge-detector">here</a> and 
            the tensorflow model is <a href="https://github.com/wsbuck/DogeNetTFModel">here</a>.
            <br />
            <br />
            <b>The prediction is run entirely on your device! Your images are never sent
            to a server.</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}