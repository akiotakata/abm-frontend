import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Create from './components/vehicle/Create';
import Edit from './components/vehicle/Edit';
import List from './components/vehicle/List';

const App = () => {
  return (
    <Router>
      <Container className="mt-5">
        <Routes>
          <Route path="/vehicle/create" element={<Create />} />
          <Route path="/vehicle/edit/:id" element={<Edit />} />
          <Route exact path="/" element={<List />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
