import './App.css';
import Homepage from './Homepage';
import Form from './Form';
import DVLogo from './DVLogo';
import CopyrightFooter from './CopyrightFooter';

function App() {
  return (
    <div className="app">
      {/* <Homepage/> */}
      <DVLogo/>
      <Form/>
      <CopyrightFooter/>
    </div>
  );
}

export default App;
