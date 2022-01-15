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
              Hello there!<br></br>
              <br></br>
              My name is SecuroKeck and I am here to make sure you are safe. Your security is my priority! But first, let’s get to know each other. <br></br>
              I am a Knowledge-Based system designed carefully and in close cooperation with a security expert that is the head of Valtech Trading (https://valtech-trading.ro/). <br></br>
              I offer an interactive question-answer dialogue that contains transparent and explicit reasoning steps. <br></br>
              In order to determine your home security level and to give you the best possible recommendations for your situation, I will ask you close-ended questions regarding your already existing home security and situation. Based on your answers, I will transmit your current situation and give you recommendations that could improve your security and, consequently, peace of mind.
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default System
