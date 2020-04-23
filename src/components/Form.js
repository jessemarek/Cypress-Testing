import React from 'react'

const Form = props =>{
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors
    } = props

    return(
        <form className="container" onSubmit={onSubmit}>
            <h2>New User Form</h2>

            {/* Input for User Name */}
            <label htmlFor="name"> 
                Name<br></br>
                <input 
                    id="name" 
                    data-cy="name"
                    name="name" 
                    type="text" 
                    onChange={onInputChange}
                    value={values.name} 
                />
                {errors.name.length > 3 ? (<p className="error">{errors.name}</p>) : null}
            </label>

            {/* Input for User Email */}
            <label htmlFor="email"> 
                Email<br></br>
                <input 
                    id="email" 
                    data-cy="email"
                    name="email" 
                    type="email"
                    onChange={onInputChange} 
                    value={values.email} 
                />
                {errors.email.length > 0 ? (<p className="error">{errors.email}</p>) : null}
            </label>

            {/* Input for User Password */}
            <label htmlFor="password"> 
                Password<br></br>
                <input 
                    id="password" 
                    data-cy="password"
                    name="password" 
                    type="password"
                    onChange={onInputChange} 
                    value={values.password} 
                />
                {errors.password.length > 8 ? (<p className="error">{errors.password}</p>) : null}
            </label>

            {/* Dropdown for User's Role */}
            <label htmlFor="role"> 
                Role<br></br>
                <select 
                    id="role"
                    data-cy="role" 
                    name="role" 
                    onChange={onInputChange}
                    value={values.role}
                >
                    <option value="">-- Select a Role --</option>
                    <option value="front">Front End Dev</option>
                    <option value="back">Back End Dev</option>
                    <option value="data">Data Science</option>
                    <option value="ops">Dev Ops</option>
                    <option value="full">Full Stack Dev</option>
                </select>
                {errors.role.length > 0 ? (<p className="error">{errors.role}</p>) : null}
            </label>

            {/* Checkbox for User to agree to the ToS */}
            <label htmlFor="terms"> 
                <input 
                    id="terms" 
                    data-cy="terms"
                    name="terms" 
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.terms}
                /> Agree to <a href="/#" onClick={e => e.preventDefault()}>Terms of Service</a>
                {errors.terms ? (<p className="error">{errors.terms}</p>) : null}
            </label>

            {/* Submit the Form */}
            <button 
                data-cy="submit" 
                type="submit" 
                disabled={disabled}
            >Submit
            </button> 

        </form>
    )
}

export default Form