import React from 'react'
import { useState } from 'react';
import axios from 'axios'

export default function CreatePost() {

    const [blogData, setBlogData] = useState({
        title:'',
        body:'',
        id:''
    })

    function handelClick(){
        axios({
            method: "post",
            url: "https://jsonplaceholder.typicode.com/posts",
            data: blogData,
            headers: { "Content-Type" : "application/json"},
          })
            .then(function (response) {
              //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });

    }
    
    // console.log(blogData)

    return (
        <div>
            <div className="container">
                <h1 className="text-center">Create Blog</h1>
                <hr />
                <div className="row">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">BLog Title</label>
                            <input type="text" className="form-control" onChange={(e) => setBlogData({ ...blogData, title: e.target.value })} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={(e) => setBlogData({ ...blogData, body: e.target.value })}></textarea>
                            <label >Blog</label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">user ID</label>
                            <input type="number" className="form-control" onChange={(e) => setBlogData({ ...blogData, id: e.target.value })} id="phone" />
                        </div>

                        <button type="submit" className="btn btn-primary"  onClick={handelClick}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
