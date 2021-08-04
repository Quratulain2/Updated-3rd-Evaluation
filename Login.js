import React from 'react'
import { Component } from 'react';
import Button from '@material-ui/core/Button';
//import "./Create_acc.css";
import "./Login.css";


class Login extends Component{
render(){
    return(
      // <div class="container" style={{backgroundColor:"black",height:"100%",width:"100%"}}>
        <div   >
        
          
        <form className="container" id="logform">
<div class="form-group">
 <h1 id="Login">Log In</h1>
 <br></br>
<label for="exampleInputEmail1" className="lab">Email address</label>
<input type="email" class="" id="exampleInputEmail1" style={{backkgroung:"transparent"}} aria-describedby="emailHelp" placeholder="Enter email" required/>

</div>
<div class="form-group">
<label for="exampleInputPassword1" className="lab">Password</label>
<input type="password" class="" id="exampleInputPassword1" placeholder="Password" required/>
</div>


{/* rgb(43, 43, 148) */}
    
<button class="btn btn primary" style={{padding: "14px 40px",width:"100%",backgroundColor:"rgb(43, 43, 148)",border:"none",fontSize:"20px",fontWeight:"bold",color:"white"}}>  Login
  </button>
  <a href="/logout" > Sign Up?</a>   

</form>


       </div>

      //  </div>

   
    
    
    )
}
}
export default Login;
