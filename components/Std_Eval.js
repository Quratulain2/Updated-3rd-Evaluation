import { TableBody } from '@material-ui/core';
import React from 'react';
import Criteria_table from "./Criteria_table";

function Std_Eval() {
    function recordInsert(){
        alert('Record has been inserted');
 
    }
    
    return (
        <div>
            <form action="/insert_marks">
                <br></br>
            <h3 className="main_heading2" style={{textTransform:"uppercase",fontSize:"30px",
              color:"#0b1442",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Individual Assessment</h3>
            <br></br>
            <div class="text-center">
            <table >
              <tr ><td> <input type="text" class="form-control" placeholder="Project Title" className="mid_inp" readOnly></input></td>
                  <td> <input type="text" class="form-control"  placeholder="Student Roll No" className="mid_inp" required autofocus></input></td>
                  
                  </tr>
                  
              </table>
              </div>

              <Criteria_table c_no="1" PLO="11" />
               <Criteria_table c_no="2" PLO="11" />

               <div style={{float:"left",paddingLeft:"40%",paddingBottom:"2%"}}>
           <a  href="/insert_marks" style={{textDecoration:"none"}}>  
           <button 
           type="submit"  
           class="btn btn-primary" 
           id="marks_submit_btn" 
           onClick>
             Done</button>
           </a> 
                
                </div>
                       <div style={{float:"right",paddingRight:"40%"}}>
           <a  href="/std" style={{textDecoration:"none"}}> 
            <button 
            type="button" 
            class="btn btn-primary" 
            id="marks_submit_btn"
            onClick  >
                       Next</button>
                       </a> 
                
                       </div>
                       
           </form>
           
                       
                      
           
        </div>
    )
}

export default Std_Eval
