import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Input from '../form/Input';

const Create = () => {
  return (
    <div>
      <h1>Crear Vehículo</h1>
      <Form>
        <Input id="vehicleType" label="Tipo de vehículo" />
        <Input id="wheels" label="Cantidad de ruedas" />
        <Input id="brand" label="Marca" />
        <Input id="model" label="Modelo" />
        <Input id="patent" label="Patente" />
        <Input id="chassisNumber" label="Número de Chasis" />
        <Input id="kilometers" label="KMs recorridos" />

        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </div>
  );
};

export default Create;
