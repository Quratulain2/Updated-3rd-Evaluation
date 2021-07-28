import React from 'react'
import { Component } from 'react';
import Button from '@material-ui/core/Button';
//import "./Create_acc.css";
import "./Login.css";


class Login extends Component{
render(){
    return(
        <div>
        <form className="container">
<div class="form-group">
 <h1 id="Login">Log In</h1>
 <br></br>
<label for="exampleInputEmail1" className="lab">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
{/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
</div>
<div class="form-group">
<label for="exampleInputPassword1" className="lab">Password</label>
<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
</div>
{/* <div class="form-check">
<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
<label class="form-check-label" for="exampleCheck1">Check me out</label>
</div> */}
       
        
{/* <button type="submit" class="btn btn-primary">Login</button> */}
    
<button class="btn btn primary" style={{padding: "14px 40px",width:"100%",backgroundColor:"rgb(43, 43, 148)",border:"none",fontSize:"20px",fontWeight:"bold",color:"white"}}>  Login
  </button>
  <a href="/signup" > Sign Up?</a> 
  

</form>

       </div>



   
    
    
    )
}
}
export default Login;
