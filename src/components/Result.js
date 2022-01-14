import Outcomes from "./Outcomes"

const Result = (all_facts) => {

  const findResults = () => {
    // find all the possible outcomes
    const final_results = Outcomes.filter((outcome) => {
      return (all_facts[outcome.id] === true)
    })  

    let conclusion = ""
    final_results.forEach((result) => {
      conclusion = conclusion + result.title + ': ' + result.text + '\n\n'
    })
    return conclusion
  }

  return (
    <div>
      {findResults().split('\n').map((str, id) => <p key={id}>{str}</p>)}
    </div>
  )
}

export default Result