import BackgroundVideo from "../../security_background.mp4"
import { Card } from "react-bootstrap"

const System = () => {
  return (
    <>
      <div>
        <video autoPlay loop muted
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
          <source src={BackgroundVideo} type='video/mp4'/>
        </video>
      </div>
      <div className='text-white mt-3' style={{padding: '40px'}}>
        <Card style={{backgroundColor: 'rgba(245, 245, 245, 0.2)'}}>
          <Card.Body>
            <div>
              <h1>
                About Expert System
              </h1>
              Add info about the expert system
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default System
