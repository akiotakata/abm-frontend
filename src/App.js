import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Create from './components/vehicle/Create';
import Edit from './components/vehicle/Edit';
import List from './components/vehicle/List';

const App = () => {
  return (
    <Container>
      {/* <Create /> */}
      <List />
    </Container>
  );
};

export default App;
