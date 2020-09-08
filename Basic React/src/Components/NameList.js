import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Raki','Lalli','sony','Raki']
    const ListName = names.map((name,index) => <h2 key={index}>{index} {name} </h2>)
    const people = [
        {
            id : 1 ,
            Name : 'Raki' ,
            Age : 19 ,
            Skill : 'React'
        },
        {
            id : 2 ,
            Name : 'Lalli' ,
            Age : 23 ,
            Skill : 'Talking Shit'
        },
        {
            id : 3 ,
            Name : 'Sony' ,
            Age : 15 ,
            Skill : 'Cooking'
        },
    ]
const PersonList = people.map(persons => <Person key={persons.id} persons={persons}/> )
    return (
        <div>
            {/* <h2>{names[0]}</h2> */}
             {/* <h2>{names[1]}</h2> */}
              {/* <h2>{names[2]}</h2> */}

            {/* 

                  {
                      names.map(name => <h2> {name} </h2>) 
                  }
            
            */}

          {/* {ListName} */}
         {/* {PersonList} */}
         {/*  */} 
         {ListName}
         {PersonList} 
            
        </div>
    )
}

export default NameList
