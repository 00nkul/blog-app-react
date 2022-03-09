import React from 'react'
import './Home.css'
import {Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Post from './Post'

function App() {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            res => {
                setBlogs(res.data)
            }
        )
    }, [])

    return (
        <div className="main">
            <h1 className="text-center display-1 mb-3">✨ Blogs WebPage ✨</h1>

            {
                blogs.map((e) => {
                    return (
                        <Post {...e} />
                    )
                })

            }
            <Link to="/createPost" >
                <button className=' add-btn btn btn-success'>Create New Post</button>
            </Link>
        </div>
    )
}

export default App