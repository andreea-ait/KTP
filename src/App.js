import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Security from './security.mp4'

// Home page
function App() {
return (
  <>
  {/* background */}
    <video 
      autoPlay loop muted
      style={{
        position: 'absolute',
        width: '100%',
        left: '50%',
        top: '50%',
        height: '100%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: '-1'
      }}
    >
      <source src={Security} type='video/mp4'/>
    </video>
    <Card style={{ height: '6rem', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <Card.Body>
        <div className="position-absolute top-50 start-50 translate-middle text-white">
          <h2>Is your home safe?</h2>
          <div className="position-absolute bottom--100 start-50 translate-middle-x">
            <br/><br/>
            <Link to="/expert"><button className="btn btn-primary">Find out</button></Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  </>
);
}

export default App;
