import React from 'react';
import { Form, Button, Input, Modal, SelectPicker } from 'rsuite';

const selectData = ['Lecturers', 'Infrastructures', 'Management', 'Loan', 'Result', 'Security'].map(item => ({
  label: item,
  value: item
}));

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const ComplaintForm = () => {
  const [open, setOpen] = React.useState(false);
  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    password: '',
    textarea: ''
  });

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Modal open={open} onClose={handleClose} size="xs">
        <Modal.Header>
          <Modal.Title>Complaint Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onChange={setFormValue} formValue={formValue}>
            <Form.Group controlId="name-9">
              <Form.ControlLabel>Username</Form.ControlLabel>
              <Form.Control name="name" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="email-9">
              <Form.ControlLabel>Please state who you contacted and what transpired</Form.ControlLabel>
              <Form.Control name="email" type="email" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password-9">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control name="password" type="password" autoComplete="off" />
            </Form.Group>
            <Form.Group controlId="textarea-9">
              <Form.ControlLabel>Description</Form.ControlLabel>
              <Form.Control rows={5} name="textarea" accepter={Textarea} />
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Category</Form.ControlLabel>
              <Form.Control name="select" data={selectData} accepter={SelectPicker} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Confirm
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={handleOpen}>Complain</Button>
    </>
  );
};

export default ComplaintForm;
