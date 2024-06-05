
import React from 'react';
function UI({state,regBtn,loginBtn,changeState}) {
  
  return (
    <main className="container">
      {state=="Register"?
        <div id='regUi' className="row justify-content-center">
          <div className="col-4 position-absolute top-50 start-50 translate-middle">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title my-3">Register</h5>
                <label className='mb-1'>Enter Your Name</label>
                <input id="fname" type="text" className='form-control' placeholder='Enter Full Name'/>
                <br />
                <label className='mb-1'>Email Address</label>
                <input id='emailid' type="text" className='form-control' placeholder='Enter Email Address'/>
                <br />
                <label className='mb-1'>Password</label>
                <input id='pass' type="password" className='form-control' placeholder='Enter Password'/>
                <br />
                <div className='d-flex justify-content-between align-items-center'>
                  <button className='btn btn-warning' onClick={regBtn}>Register</button>
                  <a href='#' className='nav-link text-primary' onClick={changeState}>Click Here to Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div id='loginUi' className="row justify-content-center">
          <div className="col-4 position-absolute top-50 start-50 translate-middle">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title my-3">Login</h5>
                <label className='mb-1'>Email Address</label>
                <input id='emailid' type="text" className='form-control' placeholder='Enter Email Address'/>
                <br />
                <label className='mb-1'>Password</label>
                <input id='pass' type="password" className='form-control' placeholder='Enter Password'/>
                <br />
                <div className='d-flex justify-content-between align-items-center'>
                  <button className='btn btn-primary' onClick={loginBtn}>Login</button>
                  <a href='#' className='nav-link text-primary' onClick={changeState}>Click Here to Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      

      
    </main>
  );
}

export default UI;
