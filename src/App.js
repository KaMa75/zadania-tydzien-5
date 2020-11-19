import React from 'react';

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
  cancelBtn: 'No, thanks'
}


function App() {

  const dialog = (
    <Dialog>
      <DialogTitle>{modalContent.header}</DialogTitle>
      <DialogContent>{modalContent.content}</DialogContent>
      <DialogActions>
        <>
          <Button>
            {modalContent.cancelBtn}
          </Button>
          <Button>
          {modalContent.acceptBtn}
          </Button>
        </>
      </DialogActions>
    </Dialog>
  );

  return (
    <>
      <Button outlined>Otwórz dialog</Button>
      {dialog}
    </>
  );
}

export default App;
