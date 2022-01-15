import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import KB from './KB'
import Questions from './Questions';
import FactsButton from './FactsButton';
import Chaining from './Chaining';
import Result from './Result';
import Security from '../security_background.mp4'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const Expert = () => {
  const [questions, setQuestions] = useState([...Questions])
  const [kb, setKB] = useState(JSON.parse(JSON.stringify(KB)))
  const [factsFromAnswers, setFactsFromAnswers] = useState({})
  const [inferredFacts, setInferredFacts] = useState({})
  const [factsScores, setFactsScores] = useState({})

  const [index, setIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [countSelectedOptions, setCountSelectedOptions] = useState(0)
  const [notFinished, setNotFinished] = useState(true)
  const [currentQuestion, setcurrentQuestion] = useState(questions[0])
  const [final, setFinal] = useState(false)

  const [safety, setSafety] = useState(0)

  const pad = { paddingLeft: '50px' }
  const small = { fontSize: '15px', paddingLeft: '50px' }

  const showQuestion = () => {
    return (
      <>
        <div className='text-white mt-2' style={small}>
          Question {index + 1}
        </div>
        <div className='questionText text-white mt-2' style={pad}> 
          {currentQuestion.text}
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
      <div className='text-white mt-3' style={pad}> {
        currentQuestion.options.map((option, idx) => 
          <ul key={idx}>
            <input 
              onClick={() => {
                setSelectedAnswer(idx)
              }}
              checked={selectedAnswer === idx}
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
      <div className='text-white mt-3' style={pad}>
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
      <div style={pad}>
        <br/>
        <Button 
          onClick={handleNextQuestion} 
          className="primary"
          disabled={buttonDisabled}
        >
          {buttonName}
        </Button>
      </div>
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
      factsScores[options[0].fact_key] = options[0].score
    }

    Chaining(options, kb, factsFromAnswers, inferredFacts)

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
    setQuestions([...Questions])
    setSelectedAnswer(null)
    setNotFinished(true)
    setFinal(false)
    setIndex(0)
    setCountSelectedOptions(0)
    setKB(JSON.parse(JSON.stringify(KB)))
    setFactsFromAnswers({})
    setInferredFacts({})
    setFactsScores({})
    Questions[0].options[0].fact_value = false
    Questions[0].options[1].fact_value = false
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
      <div style={pad}>
        <br/>
        <Button 
          onClick={displayRestartAlert} 
          variant="secondary"
          size="sm"
        >
          Restart expert system
        </Button>
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
        <source src={Security} type='video/mp4'/>
      </video>
      {notFinished ? (
        <>
          <Card style={{backgroundColor: 'rgba(245, 245, 245, 0.2)'}}>
            <Card.Body>{showQuestion()}</Card.Body>
            <Card.Body>{showAnswers()}</Card.Body>
          </Card>
          {showNextButton()}
        </>
      ) : (
        <>
          <div className='text-white mt-3'>
            {/* Here comes the result */}
            {Result(kb.facts, safety)}
          </div>
        </>
      )
      }
      {FactsButton(factsFromAnswers, inferredFacts, safety, factsScores)}
      {showRestartButton()}
    </div>
  )
}

export default Expert
