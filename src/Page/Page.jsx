import React from 'react';
import '../assets/css/page.css'
import Time from '../date/date'


function Page() {
  const date = Time()
  return (
    <div>
    <div id="my-content">
    <div className="header-body d-flex justify-content-center ">
    <div className='container-fluid'>
    <div className='container mt-1'>
    <div className="row-mb-5">
    </div>
    <p style={{textAlign: "center" , fontSize: "25px" , fontFamily: "sans-serif"}}> Sistem Keamanan Motor</p>
    <p style={{textAlign: "center" , fontSize: "30px", fontFamily: "sans-serif"}}> SINGKEM </p>
    <h6 className="date" style={{textAlign: "center"}}>{date}</h6>

        <div className="row container-fluid">
        <div className="col-6">
        <h4 style={{fontSize: "20px"}}>Keamanan Motor</h4>
          <p> Mesin Motor  
          <label className='switch'>
          <input type={"checkbox"} id='accept' name='accept' value={"yes"}></input>
          <span className='slider round'></span>
          </label>
          </p>
          <p> Buzzer Motor  
          <label className='switch'>
          <input type={"checkbox"} id='accept' name='accept' value={"yes"}></input>
          <span className='slider round'></span>
          </label>
          </p>
        </div>
        <div className='col-6'>
        <h4 style={{fontSize: "20px"}}>Posisi Motor</h4>
        </div>
        </div>
        

        </div>

    </div>
        </div>
    
    
    </div>
    
  </div>
  
  

  )
  
}

export default Page;
