import Form from 'react-bootstrap/Form';

const Input = ({ name, label, value, onChange }) => {
  return (
    <>
      <Form.Group className="mb-3" controlId={name}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
      </Form.Group>
    </>
  );
};

export default Input;
