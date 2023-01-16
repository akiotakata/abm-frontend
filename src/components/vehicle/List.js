import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';

const List = () => {
  const [vehicles, setVehicles] = useState([]);

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
      .delete(`http://localhost/api/vehicle/${id}`)
      .then(({ data }) => {
        fetchVehicles();
      })
      .catch(({ response: { data } }) => {});
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Listado de Vehículos</h1>
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
