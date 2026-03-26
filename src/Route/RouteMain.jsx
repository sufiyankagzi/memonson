import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Components/Home'
const RouteMain = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default RouteMain