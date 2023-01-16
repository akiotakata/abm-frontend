import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Input from '../form/Input';

const Edit = () => {
  const navigate = useNavigate();

  const { id } = useParams();

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

  useEffect(() => {
    fetchVehicle();
  }, []);

  const fetchVehicle = async () => {
    await axios.get(`http://localhost/api/vehicles/${id}`).then(({ data }) => {
      setVehicle(data.vehicle);
    });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setVehicle({ ...vehicle, [name]: value });
  };

  const updateVehicle = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost/api/vehicles/${id}`, vehicle);

      navigate('/');
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <div>
      <h1>Editar Vehículo</h1>
      <Form onSubmit={updateVehicle}>
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
        <input type="hidden" name="_method" value="PUT"></input>

        <Button variant="primary" type="submit">
          Actualizar
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
