import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Container, Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import Input from '../form/Input';

const List = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    await axios.get('http://localhost/api/vehicles').then(({ data }) => {
      setVehicles(data.data);
    });
  };

  const deleteVehicle = async (id) => {
    await axios
      .delete(`http://localhost/api/vehicles/${id}`)
      .then(() => {
        fetchVehicles();
      })
      .catch(({ response: { data } }) => {});
  };

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterVehicles = (event) => {
    event.preventDefault();

    if (searchTerm !== '') {
      const filteredVehicles = vehicles.filter((vehicle) => {
        const regex = new RegExp(searchTerm, 'i');
        return vehicle.marca.match(regex) || vehicle.modelo.match(regex);
      });

      setVehicles(filteredVehicles);
    } else {
      fetchVehicles();
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Listado de Vehículos</h1>
          <Form onSubmit={filterVehicles}>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                name="search"
                value={searchTerm}
                onChange={onInputChange}
              />
              <Button
                variant="outline-secondary"
                id="button-addon1"
                type="submit"
              >
                Buscar
              </Button>
            </InputGroup>
          </Form>
          <Link
            className="btn btn-primary mb-2 float-end"
            to={'/vehicle/create'}
          >
            Crear Producto
          </Link>
        </Col>
      </Row>
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>Tipo</th>
            <th>Ruedas</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Patente</th>
            <th>Nro Chasis</th>
            <th>Kilómetros</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.length > 0 &&
            vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td>{vehicle.id}</td>
                <td>{vehicle.tipo_vehiculo}</td>
                <td>{vehicle.cantidad_ruedas}</td>
                <td>{vehicle.marca}</td>
                <td>{vehicle.modelo}</td>
                <td>{vehicle.patente}</td>
                <td>{vehicle.numero_chasis}</td>
                <td>{vehicle.kilometros}</td>
                <td>
                  <Link
                    to={`/vehicle/edit/${vehicle.id}`}
                    className="btn btn-success me-2"
                  >
                    Editar
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => deleteVehicle(vehicle.id)}
                  >
                    Borrar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default List;
