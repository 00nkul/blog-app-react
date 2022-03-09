import React from 'react'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Home from './Home'
import SinglePost from './SinglePost'
import  CreatePost from './CreatePost'

function App() {

    return (
        <>  
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Home/>} ></Route>
                    <Route path="/createPost/*" element={<CreatePost/>} ></Route>
                    <Route path="/Posts/:id" element={<SinglePost/>} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App