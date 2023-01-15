import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const List = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    await axios.get('http://localhost/api/vehicles').then((response) => {
      setVehicles(response.data.data);
    });
  };
  return (
    <>
      <h1>Listado de Vehículos</h1>
      <Table striped bordered hover>
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
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default List;
