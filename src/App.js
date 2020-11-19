import React, {useState} from 'react';

import Dialog from './components/Dialog';
import {DialogTitle, DialogContent, DialogActions} from './components/Dialog';
import Button from './components/Button';
import './App.css';

const modalContent = {
  header: 'Modal title',
  content: `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.`,
  acceptBtn: 'OK',
  cancelBtn: 'Cancel'
}

const snackbarMessages = {
  accepted: 'Zaakceptowano',
  cancelled: 'Anulowano'
}

const snackbarTime = 2;


function App() {

  const initSnackbar = {
    show: false,
    status: null
  };

  const [showModal, setModal] = useState(false);
  const [snackbar, setSnackbar] = useState(initSnackbar);

  const handleAcceptClick = () => {
    setModal(false);
    console.log('ok');
  }

  const handleCancelClick = () => {
    setModal(false);
    console.log('cancel');
  }

  const dialog = (
    <Dialog>
      <DialogTitle>{modalContent.header}</DialogTitle>
      <DialogContent>{modalContent.content}</DialogContent>
      <DialogActions>
        <>
          <Button
            onClick={handleCancelClick}
          >
            {modalContent.cancelBtn}
          </Button>
          <Button
            onClick={handleAcceptClick}
          >
          {modalContent.acceptBtn}
          </Button>
        </>
      </DialogActions>
    </Dialog>
  );

  return (
    <>
      {showModal ? dialog : <Button outlined onClick={()=>setModal(true)}>Otwórz dialog</Button>}
    </>
  );
}

export default App;
