import React from 'react'
import { Outlet } from 'react-router'

import { Header, Footer } from '@components/index.jsx'


function Layout  ()  {

    return (

        <div className='Layout'>
            <Header />
            <Outlet />
            <Footer />
        </div>

    )

}

export default Layout