import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown, faFaceGrimace, faFaceSmileBeam, faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import css from './components.module.css'

const emojiData = {
  unsatisfied: <FontAwesomeIcon icon={faFaceFrown} />,
  neutral: <FontAwesomeIcon icon={faFaceGrimace} />,
  satisfied: <FontAwesomeIcon icon={faFaceSmileBeam} />,
  very_satisfied: <FontAwesomeIcon icon={faFaceLaughBeam} />
}

const Thanks = ({ data, updateFieldHandler }) => {
  return (
    <div className={css.thanks_container}>
        <h2>Almost there...</h2>
        <p>Your opinion is very important to us. Soon, you will receive a 10% discount coupon in your email.</p>
        <p>To finish your rating, click on Send button.</p>
        <h3>Here is a summary of your review {data.name}:</h3>
        <p className={css.review_data}>
          <span>Rating:</span>
          {emojiData[data.review]}
        </p>
        <p className={css.review_data}>
          <span>Comment:</span>
          {data.comment}
        </p>
    </div>
  )
}

export default Thanks