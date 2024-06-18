
import './App.css';
import Home from '../src/Home/home';
import Board from '../src/Board/board';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Menu from './Menu';

function App() {
  return (
    <Router basename='/board-app'>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </Router>
  );
}

export default App;
