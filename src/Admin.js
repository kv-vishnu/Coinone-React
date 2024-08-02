import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
function Admin() {
    const navigate = useNavigate();
    const username=useRef();
    const password= useRef();
    const getusername=localStorage.getItem("username");
    const getpassword=localStorage.getItem("password")
    const handleformsubmit=()=>{
        if(username.current.value=='coinone' && password.current.value=='zaq123'){
            localStorage.setItem("username","coinone");
            localStorage.setItem("password","zaq123");
            navigate('/dashboard');
        }else{
            navigate('/admin');
        }
        
    }
  return (
    
    
    <div class="row">
       
    
    {/* <!-- first coloumn --> */}
    <div class="col-lg-12">
        {/* <!-- middle --> */}
        {getusername && getpassword ? <Dashboard/>:
        <div class="container border  p-5" style={{marginTop:'165px'}}>
            <div style={{textAlign:'center'}}>
            <img class="  mb-4"  src='https://coinoneglobal.com/wp-content/themes/coinoneglobal-child/assets/images/header-logo.svg'></img>
            </div>
       {/* { */}
        
            <form action="" onSubmit={handleformsubmit}>
             
               
                
                <div class="mb-3">
                              <label class="form-label" for="">username</label>
                              <input class="form-control" type="text" ref={username} />
                          </div><div class="mb-3">
                                  <label class="form-label" for="">Password</label>
                                  <input class="form-control" type="password" ref={password} />
                              </div><div style={{ textAlign: 'center' }}>
                                  <button class="btn btn-primary">login</button>
                              </div>
                            

            </form>
{/* } */}
        </div>
}
    </div>


    
</div>


  )
}

export default Admin