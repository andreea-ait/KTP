import { Card } from "react-bootstrap"
import Outcomes from "./Outcomes"

const Result = (all_facts, safety) => {

  const findResults = () => {
    // find all the possible outcomes
    const final_results = Outcomes.filter((outcome) => {
      return (all_facts[outcome.id] === true)
    })  

    // attach the title and text of each outcome to the string `conclusion`
    // to be displayed
    let conclusion = ""
    final_results.forEach((result) => {
      conclusion = conclusion + result.title + ': ' + result.text + '\n\n'
    })
    return conclusion
  }

  return (
    <div style={{padding: '40px'}}>
      <Card style={{backgroundColor: 'rgba(245, 245, 245, 0.2)'}}>
        <Card.Body>
          <h1>Result</h1>
          <h3>
            Overall home safety: {safety + "%"}
          </h3>
        </Card.Body>
        <Card.Body>
          {findResults().split('\n').map((str, id) => <p key={id}>{str}</p>)}
        </Card.Body>
      </Card>
    </div>
  )
}

export default Result