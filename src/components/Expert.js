import React, {useState} from 'react'
import Questions from './Questions'
import Button from 'react-bootstrap/Button'
import KB from './KB'


const Expert = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  // const [selectedOptions, setselectedOptions] = useState({})
  const [countSelectedOptions, setCountSelectedOptions] = useState(0)
  // const [userAnswers, setUserAnswers] = useState([])
  const [notFinished, setNotFinished] = useState(true)

  const showQuestion = () => {
    return (
      <>
        <div className='questionNumber'>
          <h3>
            Question {currentIndex + 1}<br/>
          </h3>
        </div>
        <p className='questionText'> 
          {Questions[currentIndex].question}<br/>
        </p>
      </>
    )
  }

  const showAnswers = () => {
    const optionsType = Questions[currentIndex].type

    if (optionsType === "radio") {
      return (showRadioOptions())
    }
    else if (optionsType === "checkbox") {
      return (showCheckboxOptions())
    }
  
  }

  const showRadioOptions = () => {
    return (
      <div> {
        Questions[currentIndex].options.map((option, index) => 
          <ul key={index}>
            <input 
              onClick={() => {
                setSelectedAnswer(index)
              }}
              checked={selectedAnswer === index}
              onChange={() => {}}
              type='radio'
            >
            </input>
            <label>{option.text}</label>
          </ul>)
        }
      </div>
    )
  }

  const showCheckboxOptions = () => {
    return (
      <div> {
        Questions[currentIndex].options.map((option) => 
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
    buttonName = (currentIndex + 1 < Questions.length) ?
      ("Next question") : ("Show result")

    if (Questions[currentIndex].type === 'radio') {
      return (
        <>
        <button 
          onClick={handleNextQuestion} 
          className="btn btn-primary"
          disabled={selectedAnswer === null}
        >
          {buttonName}
        </button>
        </>
      )
    } else if (Questions[currentIndex].type === 'checkbox') {
      return (
        <>
        <button 
          onClick={handleNextQuestion} 
          className="btn btn-primary"
          disabled={countSelectedOptions === 0}
        >
          {buttonName}
        </button>
        </>
      )
    }
    
  }

  const handleNextQuestion = () => {
    if (Questions[currentIndex].type === 'radio') {
      Questions[currentIndex].options[selectedAnswer].fact_value = true
      setSelectedAnswer(null)
    } else if (Questions[currentIndex].type === 'checkbox') {
      setCountSelectedOptions(0)
    }

    Questions[currentIndex].options.map((option) => 
      KB.facts[option.fact_key] = option.fact_value
    )
    // setUserAnswers([...userAnswers, selectedAnswer])
    // setSelectedAnswer(null)
    // setCountSelectedOptions(0)

    if (currentIndex + 1 < Questions.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setNotFinished(false)
    }
  }

  const restartExpertSystem = () => {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setNotFinished(true)
    setCountSelectedOptions(0)
  }

  const display = async () => {
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
        <Button onClick={display} variant="secondary">
          Restart expert system
        </Button>
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
              {key}: {value ? "true" : "false"} <br/>
              </div>
            ))
        }
        <br/>
        </div>
      </>
    )
  }
  

  return (
    <div className='quiz'>
      {notFinished ? (
        <div>
          {showQuestion()}
          {showAnswers()}
          {showNextButton()}
        </div>
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
