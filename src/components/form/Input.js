import Form from 'react-bootstrap/Form';

const Input = ({ name, label, onChange }) => {
  return (
    <>
      <Form.Group className="mb-3" controlId={name}>
        <Form.Label>{label}</Form.Label>
        <Form.Control type="text" name={name} onChange={onChange} />
      </Form.Group>
    </>
  );
};

export default Input;
