import React from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';
import './SinglePost.css'

export default function SinglePost(props) {
    const { id } = useParams()

    const [currBlog, setCurrBlog] = useState({})
    const [comments, setComments] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id[1]}`).then(
            res => {
                setCurrBlog(res.data)
            },
            // setCurrBlog(blogs[id[1]-1].title)
        )

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id[1]}/comments`).then(
            res => {
                setComments(res.data)
            },
            // setCurrBlog(blogs[id[1]-1].title)
        )
    }, [])
    console.log(comments)
    // console.log(blogs[id[1]-1])
    return (
        <div className="container  mt-5 parent">
            <h3 className="text-center display-5 m-5">{currBlog.title}</h3>

            <p className="display-6 ">{currBlog.body}</p>

            <div className="m-3">
                UserID :{currBlog.userId}
            </div>
            
            <p> <b><i>comments</i></b> </p>
            {
                comments.map((e) => {
                    return (
                        <div className="comment-card">
                            <p>{e.id}</p>
                            <p>{e.body}</p>
                            <p>Comment by:  <i>{e.name}</i>  Mail :<b> {e.email}</b> </p>

                        </div>
                    )
                })
            }

        </div>
    )
}
