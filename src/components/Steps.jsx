import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import css from './components.module.css'

const Steps = ({ currentStep }) => {
    return (
        <div className={css.steps}>
            <div className={`${css.step} ${css.active}`}>
                <FontAwesomeIcon icon={faUser} className='icon'/>
                <p>Idenficiação</p>
            </div>
            <div className={`${css.step} ${currentStep >= 1 ? css.active : ''}`}>
                <FontAwesomeIcon icon={faStar} className='icon' />
                <p>Avaliação</p>
            </div>
            <div className={`${css.step} ${currentStep >= 2 ? css.active : ''}`}>
                <FontAwesomeIcon icon={faPaperPlane} className='icon' />
                <p>Envio</p>
            </div>
        </div>
    )
}

export default Steps