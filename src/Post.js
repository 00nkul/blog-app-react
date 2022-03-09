import React from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import SinglePost from './SinglePost'
import './Post.css'


export default function Post(props) {

     let url =`/Posts/:${props.id}`
    return (
        <>
            <div className="container post-container" >
                <p>Posts by user: {props.userId}  Posts number: {props.id}</p>
                <h3>{props.title}</h3>

                <Link to={url} >
                    <button className='btn btn-light'>Read Full Post</button>
                </Link>
            </div>

        </>
    )
}
