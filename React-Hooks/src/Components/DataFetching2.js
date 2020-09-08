import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const initialstate={
    loading : true,
    error : '',
    post : {}
}

const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_SUCCESS' :
            return {
                loading : false,
                error : '',
                post : action.payload
            }
        case 'FETCH_FAIL' :
            return {
                loading : false,
                error : 'Something Went Wrong',
                post : {}
            }
        default :
            return state
    }
}

function DataFetching2() {
    const [state,dispatch] = useReducer(reducer,initialstate)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/9')
        .then(response =>{
            dispatch({type:'FETCH_SUCCESS',payload : response.data})
        })
        .catch(error => {
            dispatch({type:'FETCH_FAIL'})
        })
    },[])

    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.error ? state.error : null} 
        </div>
    )
}

export default DataFetching2
