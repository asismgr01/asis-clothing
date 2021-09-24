import React from "react";
import './form-input.style.scss'

const FormInput = ({name,handleChange,value,type,label}) => (
    <div className="group">
        <input 
            className="form-input"
            onChange={handleChange}
            name={name}
            value={value}
            type={type}
            required
        />
        {
            label ?
            (<label className={
                `${value.length ? 'shrink' : ''} form-input-label`
            }>{label}</label>)
            :null
        }
    </div>
) 

export default FormInput