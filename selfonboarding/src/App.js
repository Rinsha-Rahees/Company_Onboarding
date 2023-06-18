import './App.css';
import Homepage from './Homepage';
import Form from './Form';
import DVLogo from './DVLogo';
import CopyrightFooter from './CopyrightFooter';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/registration' element={ [<DVLogo/>, <Form/>, <CopyrightFooter/>] } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
