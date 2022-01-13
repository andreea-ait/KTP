import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import KB from './KB'
import Questions from './Questions';
import FactsButton from './FactsButton';
import Chaining from './Chaining';


const Expert = () => {
  const [questions, setQuestions] = useState([...Questions])
  const [kb, setKB] = useState(JSON.parse(JSON.stringify(KB)))
  const [factsFromAnswers, setFactsFromAnswers] = useState({})
  const [inferredFacts, setInferredFacts] = useState({})
  const [conclusionFacts, setConclusionFacts] = useState({})

  const [index, setIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [countSelectedOptions, setCountSelectedOptions] = useState(0)
  const [notFinished, setNotFinished] = useState(true)
  const [currentQuestion, setcurrentQuestion] = useState(questions[0])
  const [final, setFinal] = useState(false)

  const [safety, setSafety] = useState(0)

  const showQuestion = () => {
    return (
      <>
        <div className='text-white mt-2'>
          Question {index + 1}
        </div>
        <div className='questionText text-white mt-2'> 
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
      <div className='text-white mt-3'> {
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
      <div className='text-white mt-3'>
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
      <div className='text-white mt-3'> {
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
      <div className='text-white mt-3'>
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
      </div>
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

    if (options[0].score > 0 && selectedAnswer){
      setSafety(safety + options[0].score)
    }

    Chaining(options, kb, factsFromAnswers, inferredFacts, conclusionFacts)

    setSelectedAnswer(null)
    setcurrentQuestion(null)
    
    const idx = questions.indexOf(currentQuestion)
    questions.splice(idx, 1)

    if (questions.length < 1 || final) {
      setNotFinished(false)
      return
    }

    setNextQuestion()
    setIndex(index + 1)
  }

  const setNextQuestion = () => {
    // let foundNextQuestion = false
    let nextQuestion = null

    nextQuestion = questions.find((question) => {
      return (Object.keys(question.requirements).length === 0 && !question.final) || 
        (Object.entries(question.requirements).every(([req_key, req_value]) => (
          kb.facts[req_key] === req_value
        )))
    })
    if (nextQuestion === null) {
      setcurrentQuestion(questions.find((question) => 
        question.final
      ))
      setFinal(true)
    }
    else { 
      if (nextQuestion.final) {
        setFinal(true)
      }
      setcurrentQuestion(nextQuestion)
    }
  }

  const restartExpertSystem = () => {
    setSelectedAnswer(null)
    setNotFinished(true)
    setFinal(false)
    setIndex(0)
    setCountSelectedOptions(0)
    setKB(JSON.parse(JSON.stringify(KB)))
    setFactsFromAnswers({})
    setInferredFacts({})
    setConclusionFacts({})
    setQuestions([...Questions])
    setcurrentQuestion(Questions[0])
    setSafety(0)
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
        <button 
          onClick={displayRestartAlert} 
          className="btn btn-secondary"
        >
          Restart expert system
        </button>
      </div>
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
          <div className='text-white mt-3'>
            Here comes the result
          </div>
        </>
      )
      }
      {FactsButton(factsFromAnswers, inferredFacts, conclusionFacts, safety, kb.facts)}
      {showRestartButton()}
    </div>
  )
}

export default Expert
