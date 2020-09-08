import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching1() {
    const [error,setError]=useState('')
    const [post,setPost]=useState({})
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/9')
        .then(response =>{
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setError('Something Went Wrong')
        })
    },[])
    return (
        <div>
            {loading ? 'loading' : post.title}
            {error ? error : null} 
        </div>
    )
}

export default DataFetching1
