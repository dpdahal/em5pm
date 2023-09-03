import React from 'react'
import AdminHeader from '../layouts/AdminHeader'
import AdminAside from '../layouts/AdminAside'
import AdminFooter from '../layouts/AdminFooter'

function DashboardComponent() {
  return (
    <React.Fragment>
        <AdminHeader/>
        <AdminAside/>        
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </nav>
          </div>
          <section className="section dashboard">
            <div className="row">
            
            </div>
          </section>
        </main>
        <AdminFooter/>
      </React.Fragment>

  )
}

export default DashboardComponent