import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas'

const FactsButton = (factsFromAnswers, inferredFacts) => {
  const [showF, setShowF] = useState(false)

  const showFacts = () => {
    return (
      <>
       <h5 className='result'>
        New facts added to KB: <br/>
        </h5>
        <div>
        {
          Object.entries(factsFromAnswers)
            .map(([key,value]) => (
              <div key={key}>
              {key}: {"" + value} <br/>
              </div>
            ))
        }
        <br/>
        </div>

        <h5 className='result'>
        New facts inferred from the rules: <br/>
        </h5>
        <div>
        {
          Object.entries(inferredFacts)
            .map(([key,value]) => (
              <div key={key}>
              {key}: {"" + value} <br/>
              </div>
            ))
        }
        <br/>
        </div>
      </>
    )
  }

  return (
    <>
        <br/><br/>
        <Button variant="info" onClick={() => {setShowF(!showF)}}>
          Show Facts
        </Button>

        <Offcanvas 
          show={showF}
          onHide={() => setShowF(false)}
          placement='end'
          // name: 'Enable both scrolling & backdrop'
          scroll={true}
          backdrop={true}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Facts known so far</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {showFacts()}
          </Offcanvas.Body>
        </Offcanvas>
      </>
  )
}

export default FactsButton
