import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../form/Input';

const Create = () => {
  const navigate = useNavigate();

  const initialValues = {
    tipo_vehiculo: '',
    cantidad_ruedas: '',
    marca: '',
    modelo: '',
    patente: '',
    numero_chasis: '',
    kilometros: ''
  };

  const [vehicle, setVehicle] = useState(initialValues);

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setVehicle({ ...vehicle, [name]: value });
  };

  const createVehicle = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`http://localhost/api/vehicles`, vehicle);

      setVehicle(initialValues);

      navigate('/');
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <div>
      <h1>Crear Vehículo</h1>
      <Form onSubmit={createVehicle}>
        <Input
          name="tipo_vehiculo"
          label="Tipo de vehículo"
          value={vehicle.tipo_vehiculo}
          onChange={onInputChange}
        />
        <Input
          name="cantidad_ruedas"
          label="Cantidad de ruedas"
          value={vehicle.cantidad_ruedas}
          onChange={onInputChange}
        />
        <Input
          name="marca"
          label="Marca"
          value={vehicle.marca}
          onChange={onInputChange}
        />
        <Input
          name="modelo"
          label="Modelo"
          value={vehicle.modelo}
          onChange={onInputChange}
        />
        <Input
          name="patente"
          label="Patente"
          value={vehicle.patente}
          onChange={onInputChange}
        />
        <Input
          name="numero_chasis"
          label="Número de Chasis"
          value={vehicle.numero_chasis}
          onChange={onInputChange}
        />
        <Input
          name="kilometros"
          label="KMs recorridos"
          value={vehicle.kilometros}
          onChange={onInputChange}
        />

        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </div>
  );
};

export default Create;
