import { Link } from 'react-router-dom';


function App() {

  return (
    <div className="position-absolute top-50 start-50 translate-middle text-white">
      <h1>How safe is my home?</h1>
      <div className="position-absolute bottom--100 start-50 translate-middle-x">
        <Link to="/expert"><button className="btn btn-primary">Find out</button></Link>
    </div>
    </div>
  );
}

export default App;
