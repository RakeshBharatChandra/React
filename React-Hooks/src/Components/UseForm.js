import React, { useState } from 'react'
import useInput from './useInput'

function UseForm() {
    //const [firstName,setFirstName] = useState('')
    //const [lastName,setLastName] = useState('')

    const [firstName,bindFirstName,resetFirstName] = useInput('')
    const [lastName,bindLastName,resetLastName] = useInput('')

    const SubmitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <div>
                    <label>FirstName:</label>
                    <input type='text' value={firstName}
                    //onChange={e => setFirstName(e.target.value)}
                    {...bindFirstName} />
                </div>
                <div>
                    <label>lastName:</label>
                    <input type='text' value={lastName}
                    //onChange={e => setLastName(e.target.value)}
                    {...bindLastName} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UseForm
