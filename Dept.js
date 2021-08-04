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
          <form className="container1" id="logform">
<div class="form-group">
 <h1 id="Login">Change Password</h1>
 <br></br>
<label for="exampleInputEmail1" className="lab">Current Password</label>
<input type="password" class="" id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder="Password" required/>

</div>
<div class="form-group">
<label for="exampleInputPassword1" className="lab">New Password</label>
<input type="password" class="" id="exampleInputPassword1" placeholder="Password" required/>
</div>
<div class="form-group">
<label for="exampleInputPassword1" className="lab">Re-enter New Password</label>
<input type="password" class="" id="exampleInputPassword1" placeholder="Password" required/>
</div>


{/* rgb(43, 43, 148) */}
    
<button class="btn btn primary"
 style={{padding: "14px 40px",
 width:"100%",
 backgroundColor:"rgb(43, 43, 148)",
 border:"none",fontSize:"20px",
 fontWeight:"bold",color:"white"}}>Done
  </button>
  <br></br>
<br></br>  
  
</form>

 
{/* <form className="container1">
<br></br>
  <div class="form-group" id="chg_pass">
    
      <h1 id="signUp">Change Password</h1>
      
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"  className="lab">Current Password</label>
    <input type="password" class="" id="exampleInputPassword1" placeholder="Current Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className="lab">New Password</label>
    <input type="password" class="" id="exampleInputPassword1" placeholder="New Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className="lab">Re-enter New Password</label>
    <input type="password" class="" id="exampleInputPassword1" placeholder="Re-enter New Password"/>
  </div>
  
  
  <button type="submit" style={{padding: "14px 40px",width:"100%",backgroundColor:"rgb(43, 43, 148)",border:"none",fontSize:"20px",fontWeight:"bold",color:"white"}}class="btn btn-primary">Save</button>
  <br></br>
  <br></br>
</form> */}
</div>
 
 
   
    
    
    )
}
}
export default Dept;