import { useState } from "react"
import { useDispatch } from "react-redux";
import { addCustaxios} from "../axios/customersaxios";
import { setUser } from "../redux/actions/dataActioncustomers";


export const AddingCustomer=()=>{

    const[newcust,setnewcust]=useState({})
    const dispatch = useDispatch();
    const addcust=(e)=>{
      e.preventDefault();
      addCustaxios(newcust)
        .then((x)=>{dispatch(setUser(x.data),alert("נוספת בהצלחה"))})
        .catch((err)=>console.log(err)) 
    }
    return<div style={{direction:"rtl"}}>
  <h2>הצטרפו ללקוחות שלנו:</h2>
  <form className="container mt-3" onSubmit={addcust}>
    <div >
      <h4>הכנס את שימך:</h4>
      <input type="text" className="form-control"  placeholder="ישראל ישראלי" name="name" onBlur={(e)=>setnewcust({...newcust,name:e.target.value})}></input>
    </div>
    <div className="mb-3">                                                     
      <h4 for="pwd">הכנס סיסמה:</h4>
      <input type="password" class="form-control" id="pwd" placeholder="הכנס סיסמא" name="psw" onBlur={(e)=>setnewcust({...newcust,psw:e.target.value})}></input>
    </div>
    <h4 >פרטי תשלום</h4>
    <div className="mb-3"> 
                                                          
      <label > הכנס מספר כרטיס:</label>
      <input required type="text" class="form-control" name="number" onChange={(e)=>setnewcust({...newcust,number:e.target.value})} ></input>
    </div>
    <div className="mb-3">                                                     
      <label >שלוש ספרות בגב הכרטיס:</label>
      <input required type="text" class="form-control" name="EffectiveDate" onChange={(e)=>setnewcust({...newcust,EffectiveDate:e.target.value})} ></input>
    </div>
    <div className="mb-3">                                                     
      <label >תוקף הכרטיס:</label>
      <input required type="date" class="form-control"  name="posteriorDigits" onChange={(e)=>setnewcust({...newcust,posteriorDigits:e.target.value})} ></input>
    </div>
    
  
    <button type="submit" onClick={(e)=>addcust(e)} class="btn btn-primary">להרשמה</button>
  </form>
 </div> 
}