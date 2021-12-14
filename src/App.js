import { Link } from 'react-router-dom';


function App() {

  return (
    <div className="app">
      <h5>Press start button to start the quiz</h5>
      <Link to="/expert"><button className="btn btn-primary">Start Quiz</button></Link>
    </div>
  );
}

export default App;
