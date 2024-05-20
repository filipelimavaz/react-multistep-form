import React from 'react'
import css from './components.module.css'

const UserForm = ({ data, updateFieldHandler }) => {
  return (
    <div className={css.components}>
        <div className={css.form_control}>
            <label>
                <span>Name:</span>
                <input type="text" name="text" id="name" placeholder="Your name here" required value={data.name || ""} 
                onChange={(e) => updateFieldHandler("name", e.target.value)}/>
            </label>
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" id="email" placeholder="Your e-mail here" required value={data.email || ""}
                onChange={(e) => updateFieldHandler("email", e.target.value)}/>
            </label>
        </div>
    </div>
  )
}

export default UserForm