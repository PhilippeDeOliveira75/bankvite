import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, User, Error, Layout } from '@pages/index.jsx'


function PublicRoutes () {

    return (

        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<User />} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>  

    )
}

export default PublicRoutes