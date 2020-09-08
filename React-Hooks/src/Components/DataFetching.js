import React , {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    //const [posts,setPosts] = useState([])
    const [post,setPost] = useState({})
    const [id,setId] =  useState(1)
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)
    useEffect(() => {
        //axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[idFromButtonClick])         //[id])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <ul>
                <input type='text' value ={id} onChange={e => setId(e.target.value)}/>
                <button onClick={handleClick}>Fetch click</button>
                 <div>{post.title}</div>
                {/**
                 * {posts.map(post =>(
                        <li key={post.key}>{post.title}</li>
                    ))}
                 */}
                
            </ul>
        </div>
    )
}

export default DataFetching
