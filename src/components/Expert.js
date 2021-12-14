import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Questions from './Questions'
import KB from './KB'


const Expert = () => {
  const [Qid, setQid] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [countSelectedOptions, setCountSelectedOptions] = useState(0)
  const [notFinished, setNotFinished] = useState(true)
  const [totalQuestions, setTotalQuestions] = useState(2)
  const [currentQuestion, setcurrentQuestion] = useState(1)

  const showQuestion = () => {
    return (
      <>
        <div>
          Question {currentQuestion}
        </div>
        <div className='questionText'> 
          {Questions[Qid].question}<br/>
        </div>
      </>
    )
  }

  const showAnswers = () => {
    const optionsType = Questions[Qid].type

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
        Questions[Qid].options.map((option, index) => 
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
        <label>{Questions[Qid].options[0].text}</label>{"\t"}
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
        Questions[Qid].options.map((option) => 
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
        <div>
          <input
            type='radio'
            onClick={() => setSelectedAnswer(true)}
            checked={selectedAnswer === true}
            onChange={() => {}}
            name='yes_no'
          >
          </input>
          <label>Yes</label>
        </div>
        <div>
          <input
            type='radio'
            onClick={() => setSelectedAnswer(false)}
            checked={selectedAnswer === false}
            onChange={() => {}}
            name='yes_no'
          >
          </input>
          <label>No</label>
        </div>
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
    const optionType = Questions[Qid].type

    buttonName = (currentQuestion < totalQuestions + 1) ?
      ("Next question") : ("Show result")

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
    const optionsType = Questions[Qid].type
    let options = Questions[Qid].options
    
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
      options.map((option) => 
        KB.facts[option.fact_key] = option.fact_value
    )

    if (Qid === 0) {
      if (selectedAnswer === 0) {
        setTotalQuestions(2)
        setQid(1)
      } else if (selectedAnswer === 1) {
          setTotalQuestions(5)
          setQid(4)
      } else {
          setcurrentQuestion(1)
          setQid(9)
      }
      setcurrentQuestion(2)
      return
    }

    setSelectedAnswer(null)

    if (currentQuestion < totalQuestions + 1) {
      setQid(Qid + 1)
      setcurrentQuestion(currentQuestion + 1)
    } else {
        setNotFinished(false)
    }
  }

  const restartExpertSystem = () => {
    setQid(0)
    setSelectedAnswer(null)
    setNotFinished(true)
    setCountSelectedOptions(0)
    setcurrentQuestion(1)
    KB.facts = {}
    Questions[0].options.map((option) => option.fact_value = false)
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

  const showResult = () => {
    return (
      <>
        <h2 className='result'>
        New facts added to KB: <br/>
        </h2>
        <div>
        {
          Object.entries(KB.facts)
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
          {showResult()}
        </>
      )
      }
      {showRestartButton()}
    </div>
  )
}

export default Expert
