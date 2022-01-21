import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas'

const FactsButton = (factsFromAnswers, inferredFacts, safety, factsScores) => {
  const [showF, setShowF] = useState(false)

  const showFacts = () => {
    return (
      <>
       <h5 className='result'>
        Facts added directly to KB: <br/>
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
        Facts inferred from the rules: <br/>
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

        <h5 className='result'>
          Home safety:
        </h5>
        <div>
          {safety + "%"}
        </div>
        <br/>

        <h5 className='result'>
        Scores of the facts used for safety calculation: <br/>
        </h5>
        <div>
        {
          Object.entries(factsScores)
            .map(([key,value]) => (
              <div key={key}>
              {key}: {"" + value + "%"} <br/>
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
        <br/>
        <div style={{paddingLeft: '50px'}}>
        <Button variant="info" onClick={() => {setShowF(!showF)}}>
          Show Facts
        </Button>
        </div>

        <Offcanvas 
          show={showF}
          onHide={() => setShowF(false)}
          placement='end'
          scroll={true}
          backdrop={true}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><u><b>Facts Panel</b></u></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {showFacts()}
          </Offcanvas.Body>
        </Offcanvas>
      </>
  )
}

export default FactsButton
