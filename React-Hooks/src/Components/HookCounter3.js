import React,{useState} from 'react'

function HookCounter3() {
    const [name,setName]=useState({
        firstname : '',
        lastname : ''
    })
    return (
        <div>
            <form>
                {/* 
                    FirstName:<input type='text' value={name.firstname} onChange={e => setName({firstname:e.target.value})}/>
                    LastName : <input type='text' value={name.lastname} onChange={e => setName({lastname:e.target.value})}/>
                        <h2>FirstName is : {name.firstname}</h2>
                        <h2>Last is : {name.lastname}</h2>
                        <h2>{JSON.stringify(name)}</h2>
                */}
                FirstName:<input type='text' value={name.firstname} onChange={e => setName({...name,firstname:e.target.value})}/>
                LastName : <input type='text' value={name.lastname} onChange={e => setName({...name,lastname:e.target.value})}/>
                    <h2>FirstName is : {name.firstname}</h2>
                    <h2>Last is : {name.lastname}</h2>
                    <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounter3
