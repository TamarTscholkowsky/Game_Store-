import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteBuy } from "../redux/actions/dataActionBuy"
import { useEffect } from "react"

export const  Endshop = () => {
    let navigate=useNavigate()
    
    // let dispatch=useDispatch()
    // dispatch(deleteBuy())
    return<div>
        <h2 className="display-5">ההזמנה נוספה בהצלחה</h2>

        <button onClick={()=>navigate(`../PersonalArea`)}>למעבר לאיזור האישי</button>
    </div>
}