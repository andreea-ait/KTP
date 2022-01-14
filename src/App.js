import { Link } from 'react-router-dom';
import Security from './security.mp4'

function App() {
return (
  <>
    <video 
      autoPlay 
      loop
      muted
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
    <div className="position-absolute top-50 start-50 translate-middle text-white">
      <h1>How safe is my home?</h1>
      <div className="position-absolute bottom--100 start-50 translate-middle-x">
        <Link to="/expert"><button className="btn btn-primary">Find out</button></Link>
      </div>
    </div>
  </>
);
}

export default App;
