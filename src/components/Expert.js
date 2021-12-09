import React, {useState} from 'react'
import Questions from './Questions'
import Button from 'react-bootstrap/Button'

const Expert = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [userAnswers, setUserAnswers] = useState([])
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
    if (Questions[currentIndex].type === "radio") 
      return (
        <div> {
          Questions[currentIndex].options.map((option) => 
            <ul key={option}>
              <input 
                onClick={() => {
                  setSelectedAnswer(option)
                }}
                checked={selectedAnswer === option}
                onChange={() => {}}
                type='radio'
              >
              </input>
              <label>{option}</label>
            </ul>)
          }
        </div>
      )
  }

  const showNextButton = () => {
    let buttonName = ""
    buttonName = (currentIndex + 1 < Questions.length) ?
      ("Next question") : ("Show result")
    return (
      <>
      <button 
        onClick={handleNextQuestion} 
        className="btn btn-primary"
        disabled={selectedAnswer===null}
      >
        {buttonName}
      </button>
      </>
    )
  }

  const handleNextQuestion = () => {
    setUserAnswers([...userAnswers, selectedAnswer])
    setSelectedAnswer(null)

    if (currentIndex + 1 < Questions.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setNotFinished(false)
    }
  }

  const restartExpertSystem = () => {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setUserAnswers([])
    setNotFinished(true)
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
          This is your result
        </h2>
        <div>
        {userAnswers.length} answers: 
        {userAnswers.map((answer) => 
          <li id={answer}>
            {answer}
          </li>)
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
          {/* {alert("finished")} */}
        </>
      )
      }
      {showRestartButton()}
    </div>
  )
}

export default Expert
