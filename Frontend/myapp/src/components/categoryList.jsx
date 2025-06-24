import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteCategoryaxios, getAllCategory } from "../axios/categoriesaxios"
import { deleteCategoryreducers, loadCategory } from "../redux/actions/dataActionCategory"
export const CategoryList=()=>{
  let listC=useSelector(x=>x.dataCategory.listCategory)
  debugger
  //משתנה שיכול לשפוך נתונים לרידקס
   let d=useDispatch()
  //בעת עלית הקומפוננטה לדום
  useEffect(()=>{
      debugger
      
  if(listC!=null && (listC.length==0||listC.length==1))
  {
          debugger
          //לך לשרת ותיטען לי את הנתונים
          // getAllCategory-פונקציה שכתבנו בקובץ categoryaxios.jsx
          getAllCategory()
          .then((x)=>d(loadCategory(x.data)))
          .catch((err)=>console.log(err))
  }
  },[])
const dispatch=useDispatch()
  const deletCategory=(id)=>{
    
  deleteCategoryaxios(id)
    .then((x)=>dispatch(deleteCategoryreducers(id)))
    .catch((err)=>console.log(err))
  }
  
    return (
    <div>
<h1>רשימת קטגוריות</h1>
{/* <div> */}
{/* <input type="text" onChange={()=>}></input></div> */}

<table className="table">
    <thead>
      <tr>
        <th>קוד</th>
        <th>שם</th>
      </tr>
    </thead>
    <tbody>
    {listC.map((x,k)=><tr key={k}>
        <td>{x._id}</td>
        <td>{x.name}</td>
        <td><button onClick={()=>deletCategory(x._id)}>מחיקה</button></td>
      </tr>)}
    </tbody>
  </table>
    </div>)
}