import React,{useState} from 'react'
import AdminHeader from '../layouts/AdminHeader'
import AdminAside from '../layouts/AdminAside'
import AdminFooter from '../layouts/AdminFooter'
import TextEditor from '../editor/TextEditor'



function CategortyComponents() {
  const [editor,setEditor]="";

  const inputChange=(e)=>{

  }
  return (
    <React.Fragment>
        <AdminHeader/>
        <AdminAside/>
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Manage Category</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">Category</li>
              </ol>
            </nav>
          </div>
          <section className="section dashboard">
            <div className="row">
            <TextEditor
            onChange={inputChange}            
            />
            </div>
          </section>
        </main>

        <AdminFooter/>
        
    </React.Fragment>
  )
}

export default CategortyComponents