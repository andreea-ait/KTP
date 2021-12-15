import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import KB from './KB'
import Questions from './Questions';
import { Button } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas'

// let factsFromAnswers = {}
// let inferredFacts = {}

const Expert = () => {
  const [questions, setQuestions] = useState([...Questions])
  const [kb, setKB] = useState(JSON.parse(JSON.stringify(KB)))

  const [factsFromAnswers, setFactsFromAnswers] = useState({})
  const [inferredFacts, setInferredFacts] = useState({})

  const [index, setIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [countSelectedOptions, setCountSelectedOptions] = useState(0)
  const [notFinished, setNotFinished] = useState(true)
  const [currentQuestion, setcurrentQuestion] = useState(questions[0])
  const [final, setFinal] = useState(false)
  const [showF, setShowF] = useState(false)

  const showQuestion = () => {
    return (
      <>
        <div>
          Question {index + 1}
        </div>
        <div className='questionText'> 
          {currentQuestion.text}<br/>
        </div>
      </>
    )
  }

  const showAnswers = () => {
    const optionsType = currentQuestion.type

    if (optionsType === "radio") {
      return (showRadioOptions())
    } else if (optionsType === "checkbox") {
        return (showCheckboxOptions())
    } else if (optionsType === "number") {
        return (showNumberOption())
    } else if (optionsType === "yes_no") {
        return (showYesNoOptions())
    }
  }

  const showRadioOptions = () => {
    return (
      <div> {
        currentQuestion.options.map((option, index) => 
          <ul key={index}>
            <input 
              onClick={() => {
                setSelectedAnswer(index)
              }}
              checked={selectedAnswer === index}
              onChange={() => {}}
              type='radio'
            />
            <label>{option.text}</label>
          </ul>)
        }
      </div>
    )
  }

  const showNumberOption = () => {
    return (
      <div>
        <label>{currentQuestion.options[0].text}</label>{"\t"}
        <input 
          type='number'
          min='1' 
          max='100'
          onChange={event => setSelectedAnswer(event.target.value)}
        />
      </div>
    )
  }

  const showCheckboxOptions = () => {
    return (
      <div> {
        currentQuestion.options.map((option) => 
          <div key={option.text}>
            <input 
              onClick={() => handleCheckboxOptions(option)}
              type='checkbox'
              // id={option}
              // name={option}
              // value={option}
            >
            </input>
            <label>{option.text}</label>
          </div>
        )
        }
      </div> 
    )
  }

  const showYesNoOptions = () => {
    return (
      <>
        <ul key='yes'>
          <input 
            type='radio'
            onClick={() => setSelectedAnswer(true)}
            checked={selectedAnswer === true}
            onChange={() => {}}
            name='yes_no'
          >
          </input>
          <label>Yes</label>
          {/* <br/><br/> */}
        </ul>
        <ul key='no'>
          <input key='no'
            type='radio'
            onClick={() => setSelectedAnswer(false)}
            checked={selectedAnswer === false}
            onChange={() => {}}
            name='yes_no'
          >
          </input>
          <label>No</label>
        </ul>
      </>
    )
  }

  const handleCheckboxOptions = (option) => {
    option.fact_value = !option.fact_value
    option.fact_value ? (
      setCountSelectedOptions(countSelectedOptions + 1)
    ) : (
      setCountSelectedOptions(countSelectedOptions - 1)
    )
  }

  const showNextButton = () => {
    let buttonName = ""
    let buttonDisabled = false
    const optionType = currentQuestion.type

    buttonName = (final) ?
      ("Show result") : ("Submit answer")

    if (optionType === 'radio' || optionType === 'yes_no') {
      buttonDisabled = (selectedAnswer === null)
    } else if (optionType === 'checkbox') {
      buttonDisabled = (countSelectedOptions === 0)
    } else if (optionType === 'number') {
      buttonDisabled = (
        selectedAnswer === null ||
        selectedAnswer < 1
      )
    }

    return (
      <>
        <br/>
        <button 
          onClick={handleNextQuestion} 
          className="btn btn-primary"
          disabled={buttonDisabled}
        >
          {buttonName}
        </button>
      </>
    )
  }

  const handleNextQuestion = () => {
    const optionsType = currentQuestion.type
    let options = currentQuestion.options
    
    if (optionsType === 'radio') {
      options[selectedAnswer].fact_value = true
    } else if (optionsType === 'checkbox') {
        setCountSelectedOptions(0)
    } else if (optionsType === 'number') {        
        options[0].fact_value = selectedAnswer
    } else if (optionsType === 'yes_no') {
        options[0].fact_value = selectedAnswer
    }

    // add new facts to the knowledge base
    options.forEach((option) => {
      kb.facts[option.fact_key] = option.fact_value
      factsFromAnswers[option.fact_key] = option.fact_value
    }
    )

    forwardChaining()

    setSelectedAnswer(null)
    setcurrentQuestion(null)
    
    const idx = questions.indexOf(currentQuestion)
    questions.splice(idx, 1)

    if (questions.length < 1 || final) {
      setNotFinished(false)
      return
    }

    let foundNextQuestion = false

    questions.map((question) => {
      if (Object.keys(question.requirements).length === 0 && 
          !question.final) {
        foundNextQuestion = true
        return (setcurrentQuestion(question))
      }

      Object.entries(question.requirements).map(([req_key, req_value]) => {
        if (kb.facts[req_key] === req_value) {
          foundNextQuestion = true
          return (setcurrentQuestion(question))
        }
        return ({})
      })
      return ({})
    })

    if (!foundNextQuestion) {
      setcurrentQuestion(questions.find((question) => question.final))
      setFinal(true)
    }
    setIndex(index + 1)
  }

  const forwardChaining = () => {
    let stop = false
    while (!stop) {
      let new_rules = 0
      // loop over all rules
      kb.rules.forEach((rule) => {
        // loop over all premises in the rule
        let flag = 1
        rule.premises_keys.forEach((key,idx) => {
          let value = rule.premises_values[idx]
          if (kb.facts[key] !== value) {
            flag = 0
          }
        })
        if (flag === 1) {
          let key = rule.conclusion_key
          let value = rule.conclusion_value
          if (kb.facts[key] !== value) {
            // new rule found
            new_rules = new_rules + 1
            kb.facts[key] = value
            inferredFacts[key] = value
          }
        }
      })
      if (new_rules === 0) {
        stop = true
      }
    }
  }

  const restartExpertSystem = () => {
    setSelectedAnswer(null)
    setNotFinished(true)
    setFinal(false)
    setIndex(0)
    setCountSelectedOptions(0)
    setShowF(false)
    setKB(JSON.parse(JSON.stringify(KB)))
    setFactsFromAnswers({})
    setInferredFacts({})
    setQuestions([...Questions])
    setcurrentQuestion(Questions[0])
  }

  const displayRestartAlert = async () => {
    if (notFinished === false) {
      restartExpertSystem()
    } else {
      const choice = window.confirm(
        'Are you sure you want to restart? All your answers will be lost.');
      if (choice) {
        restartExpertSystem()} 
      }
  };

  const showRestartButton = () => {
    return (
      <div>
        <br/>
        <button onClick={displayRestartAlert} className="btn btn-secondary">
          Restart expert system
        </button>
      </div>
    )
  }

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

  const showFactsButton = () => {
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

  // useEffect(() => {
  //   window.onbeforeunload = function() {
  //       return true;
  //   }
  //   return () => {
  //       window.onbeforeunload = null;
  //   }
  // }, [])

  const location = useLocation()
  useEffect(() => {
    restartExpertSystem()
  }, [location])


  return (
    <div className='quiz'>
      {notFinished ? (
        <>
          {showQuestion()}
          {showAnswers()}
          {showNextButton()}
        </>
      ) : (
        <>
          Here comes the result
        </>
      )
      }
      {showFactsButton()}
      {showRestartButton()}
    </div>
  )
}

export default Expert
