import Form from 'react-bootstrap/Form';

const Input = ({ id, label }) => {
  return (
    <>
      <Form.Group className="mb-3" controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
    </>
  );
};

export default Input;
