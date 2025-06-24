import { useState } from "react"
import { getbyNameAndPsw } from "../axios/customersaxios";
import { useDispatch, useSelector } from "react-redux";
import { setmanagement, setUser } from "../redux/actions/dataActioncustomers";
import { useNavigate } from "react-router-dom";

export const Login=()=>{
const[cust,setcust]=useState({})

const dispatch = useDispatch();
const n=useNavigate()
const check=(e)=>{
    debugger
    e.preventDefault();
    getbyNameAndPsw(cust.name,cust.psw)
          .then((x)=>
            {if((x.data)!=false){
              if(x.data.name==="מנהל"&&x.data.psw==="123"){
                dispatch(setmanagement(true))
                
              }
                alert("התחברת בהצלחה")
                 dispatch(setUser(x.data))
                
              n('../homePage')
            }
                else {
                alert("משתמש לא קיים")
                n('../addingCustomer')
              }
            })
          .catch((err)=>console.log(err)); 
}
let nav=useNavigate
return<form className="container">

  <h2>טופס התחברות</h2>
  <div className="toast show" style={{width:"100%",height:"50%", padding:"3%"}}>
  <div>
     <input className="form-control"  type="text" placeholder="הכנס את שימך" onBlur={(e)=>setcust({...cust,name:e.target.value})}></input>
  
     <input className="form-control" type="password" placeholder="הכנס סיסמה" onBlur={(e)=>setcust({...cust,psw:e.target.value})}></input>
      <div style={{padding:"20px"}}>
      <button  className="btn btn-outline-secondary" onClick={(e)=>check(e)}>התחבר</button>
      <button  className="btn btn-outline-secondary" onClick={()=>n("../addingCustomer")}>להרשמה</button>
    </div> 
    <div>
      </div> 
 </div>
 </div>
  </form>
  
}