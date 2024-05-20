import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown, faFaceGrimace, faFaceSmileBeam, faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import css from './components.module.css'

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className={css.review_form}>
        <div className={css.form_control}>
          <div className={css.score_container}>
            <label className={css.radio_container}>
              <input type="radio" value="unsatisfied" name="review" required 
              checked={data.review === "unsatisfied"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
              <FontAwesomeIcon icon={faFaceFrown} />
              <p>Unsatisfied</p>
            </label>
            <label className={css.radio_container}>
              <input type="radio" value="neutral" name="review" required 
              checked={data.review === "neutral"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
              <FontAwesomeIcon icon={faFaceGrimace} />
              <p>Could be better</p>
            </label>
            <label className={css.radio_container}>
              <input type="radio" value="satisfied" name="review" required 
              checked={data.review === "satisfied"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
              <FontAwesomeIcon icon={faFaceSmileBeam} />
              <p>Satisfied</p>
            </label>
            <label className={css.radio_container}>
              <input type="radio" value="very_satisfied" name="review" required 
              checked={data.review === "very_satisfied"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
              <FontAwesomeIcon icon={faFaceLaughBeam} />
              <p>Very Satisfied</p>
            </label>
          </div>
          <div className={css.form_control}>
            <label>
              <span>Comment:</span>
              <textarea name="comment" id="comment" placeholder='Tell me about your experience with us' value={data.comment || ""}
                onChange={(e) => updateFieldHandler("comment", e.target.value)}></textarea>
            </label>
          </div>
        </div>
    </div>
  )
}

export default ReviewForm