import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomeComponents from '../components/pages/home/HomeComponents'
import PageNotFound from '../components/pages/errors/PageNotFound'
import CategortyComponents from '../components/admin/pages/CategortyComponents'
import DashboardComponent from '../components/admin/pages/DashboardComponent'

function RoutersComponent() {
  return (
    <React.Fragment>
        <Routes>
            <Route path="/" element={<HomeComponents/>}/>           
            <Route path="dashboard">
                <Route path="/dashboard" element={<DashboardComponent/>}/>
                <Route path="category" element={<CategortyComponents/>}/>
                
            </Route>

           

            <Route path="*" element={<PageNotFound/>}/>

        </Routes>
    </React.Fragment>
  )
}

export default RoutersComponent