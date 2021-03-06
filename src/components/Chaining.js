import React from 'react'

const Chaining = (options, kb, factsFromAnswers, inferredFacts) => {

  // add new facts to kb from answer
  const addFactsFromAnswers = () => {
    options.forEach((option) => {
      kb.facts[option.fact_key] = option.fact_value
      factsFromAnswers[option.fact_key] = option.fact_value
    })
  }

  const forwardChaining = () => {
    let stop = false
    while (!stop) {
      let new_rules = 0
      // loop over all rules
      kb.rules.forEach((rule) => {
        // loop over all premises in the rule
        let flag = 1
        rule.premises_keys.forEach((prem_key, idx) => {
          let prem_value = rule.premises_values[idx]
          // check premises
          if (kb.facts[prem_key] !== prem_value) {
            flag = 0
          }
        })
        // premises found
        if (flag === 1) {
          let key = rule.conclusion_key
          let value = rule.conclusion_value
          // check if conclusion is not already in kb
          if (kb.facts[key] !== value) {
            // new rule found
            new_rules = new_rules + 1
            kb.facts[key] = value
            inferredFacts[key] = value
          }
        }
      })
      // no new rules found, so stop
      if (new_rules === 0) {
        stop = true
      }
    }
  }
  return (
    <div>
      {addFactsFromAnswers()}
      {forwardChaining()}
    </div>
  )
}

export default Chaining
