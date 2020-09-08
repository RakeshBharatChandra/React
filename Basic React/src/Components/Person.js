import React from 'react'

function Person({persons}) {
    return (
        <div>
            <h2> I am {persons.Name}.  My age is {persons.Age}.  I am Good at {persons.Skill}</h2>
        </div>
    )
}

export default Person
