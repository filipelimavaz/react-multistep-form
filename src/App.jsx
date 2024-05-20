import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft, faCircleRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import css from './app.module.css'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'

import { useForm } from './hooks/useForm.jsx'
import { useState } from 'react'

const formTemplate = {
  name: '',
  email: '',
  review: '',
  comment: ''
}

function App() {
  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value }
    })
  }

  const formComponents = [<UserForm data={data} updateFieldHandler={updateFieldHandler} />,
                          <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
                          <Thanks data={data} updateFieldHandler={updateFieldHandler} />]
                          
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)

  return (
    <div className={css.app}>
      <div className={css.header}>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className={css.form_container}>
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className={css.inputs_container}>
            {currentComponent}
          </div>
          <div className={css.actions}>
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <FontAwesomeIcon icon={faCircleLeft} />
                <span>Back</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Next</span>
                <FontAwesomeIcon icon={faCircleRight} />
              </button>
            ) : (
              <button type="submit">
                <span>Send</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
