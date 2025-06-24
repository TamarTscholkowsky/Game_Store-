import { useEffect } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export const Nav = () => {
  let currentUser = useSelector(x => x.dataCostumer.currentUser)
 let ismanagement=useSelector(x=>x.dataCostumer.ismanagement)

  return (<div>
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <NavLink className="nav-link active" to={"/"}>דף בית</NavLink>
      </li>
      {!ismanagement&& <li className="nav-item">
        <NavLink className="nav-link " to={"cart"}>עגלה</NavLink>
      </li>}
      {ismanagement&& <li className="nav-item">
        <NavLink className="nav-link " to={"categoryList"}>קטגוריות</NavLink>
      </li>}
     {ismanagement &&<li className="nav-item">
        <NavLink className="nav-link" to={"listGames"}>משחקים</NavLink>
      </li>}
     {ismanagement&& <li className="nav-item">
        <NavLink className="nav-link" to={"addCategory"}>הוספת קטגוריה</NavLink>
      </li>}
      <li className="nav-item">
        <NavLink className="nav-link" to={"login"}>התחברות</NavLink>
      </li>
      {(currentUser.name!="מנהל"&&currentUser.name)&&<li className="nav-item">
        <NavLink className="nav-link" to={"personalArea"}>איזור אישי</NavLink>
      </li>}
      <li className="nav-item">
        <NavLink className="nav-link disabled " >{currentUser.name==null?"אינך מחובר":currentUser.name}</NavLink>
      </li>

    </ul>
  </div>)

}