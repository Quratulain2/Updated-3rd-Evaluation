import React from 'react'
import { Component } from 'react';
import "./Dept.css";

class Dept extends Component{
  
  // constructor(props){
  //   super(props);
  //   this.state={
  //     setClass:'topnav'
  //   }
  // }

 render(){

  
    return(
        <div className="content">
      
<form className="container1">
  <div class="form-group">
      <h1 id="signUp">Change Password</h1>
      {/* <br></br> */}
    {/* <label for="exampleInputEmail1" className="lab">Email address</label>
    <input type="email" class="form-control-plaintext" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"  className="lab">Current Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Current Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className="lab">New Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="New Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className="lab">Re-enter New Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter"/>
  </div>
  {/* <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  
  <button type="submit" style={{padding: "14px 40px",width:"100%",backgroundColor:"rgb(43, 43, 148)",border:"none",fontSize:"20px",fontWeight:"bold",color:"white"}}class="btn btn-primary">Save</button>
  <br></br>
</form>
</div>
 
 
   
    
    
    )
}
}
export default Dept;
