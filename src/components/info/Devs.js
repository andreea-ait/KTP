import BackgroundVideo from "../../security_background.mp4"
import { Card } from "react-bootstrap"

const Devs = () => {
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
                About us
              </h1>
              We are the parents of the SecuroCheck expert system. Our team is formed out of 3 Artificial Intelligence students currently in the third year at University of Groningen. <br></br>
              Andreea Tudor (a.tudor.3@student.rug.nl) - s4020960  <br></br>
              Andra Minculescu (a.c.minculescu@student.rug.nl) - s3993507  <br></br>
              Adrian Serbanescu (v.a.serbanescu@student.rug.nl) - s3944735
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Devs
