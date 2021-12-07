import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function App() {

  return (
    <div className="app">
      <h5>Press start button to start the quiz</h5>
      <Link to="/quiz"><Button className="btn btn-primary">Start Quiz</Button></Link>
    </div>
  );
}

export default App;
