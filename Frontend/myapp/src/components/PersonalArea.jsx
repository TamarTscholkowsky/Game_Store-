
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadBuy } from "../redux/actions/dataActionBuy"
import { getById } from "../axios/gamesaxios"
import { DetailsOrder } from "./detailsOrder"
import { getByIdaxios, getOrdersByCustIdFromAxios } from "../axios/buyaxios"

export const PersonalArea = () => {
   let dispatch = useDispatch()
   let idCust = useSelector(x => x.dataCostumer.currentUser._id)
   let listO = useSelector(x => x.dataBuy.listOrder)
   let nameCust = useSelector(x => x.dataCostumer.currentUser.name)
   const [godetailsOrder, setGodetailsOrder] = useState({ statuse: false, id: null })

   useEffect(() => {
      if (idCust === listO.idCust) {
         if (listO == undefined || listO != null && listO.length === 0) {
            getOrdersByCustIdFromAxios(idCust)
               .then((x) => { dispatch(loadBuy(x.data)) })
               .catch((err) => console.log(err))
         }
      }
      else {
         getOrdersByCustIdFromAxios(idCust)
            .then((x) => { dispatch(loadBuy(x.data)) })
            .catch((err) => console.log(err))
         if (listO == undefined || listO != null && listO.length === 0) {
            getOrdersByCustIdFromAxios(idCust)
               .then((x) => { dispatch(loadBuy(x.data)) })
               .catch((err) => console.log(err))
         }
      }
   }, [])

   const funcdetail = (id) => {
      if (godetailsOrder.statuse == false)
         setGodetailsOrder({ statuse: true, id: id })
      else
         setGodetailsOrder({ statuse: false, id: id })
   }

   return <div >
      <h1>: איזור אישי</h1>
      <h4> {`${nameCust}`}:שלום ל </h4>
      <div>
         {listO.map((x, k) => (<div className="shadow-lg p-4 mb-4 bg-white" key={k}>
            <h4>{x._id} :'הזמנה מס</h4>
            <h5>{x.dateBuy} :תאריך הזמנה</h5>
            <button className="btn btn-outline-secondary" onClick={() => funcdetail(x._id)}>לפרטי הזמנה</button>
            {(godetailsOrder.statuse && x._id == godetailsOrder.id) && (<div className="d-flex justify-content-center bg-secondary mb-3" ><DetailsOrder list={x.arrgames} funcdetail={funcdetail} id={x._id}></DetailsOrder></div>)}
            <h6> {x.totalPrice}:לתשלום הסופי</h6>

         </div>))}
      </div>
      <h4>תודה שקנית אצלינו</h4>
   </div>
}

