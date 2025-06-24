import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteGame } from "../axios/gamesaxios"
import { additem, addOrder, deleteBuy, deletegame, lessitem } from "../redux/actions/dataActionBuy"
import { use } from "react"
import { useNavigate } from "react-router-dom"
import { addCart, addOrderaxios } from "../axios/buyaxios"

export const Cart = () => {
  const dispatch = useDispatch()
  let c = useSelector(x => x.dataBuy.listBuy)
  const [orderfinal, setorderfinal] = useState({ idCust: '', dateBuy: new Date().getDate(), arrgames: [], totalPrice: 0 })

  const [notnull, setnotnull] = useState(false)
  useEffect(() => {
    if (c.length != 0)
      setnotnull(true)
    if (idCust) {
      for (let i = 0; i < c.length; i++) {
        totalPrice += c[i].total;
       }
       setorderfinal({
        idCust: idCust,
        dateBuy: new Date().getDate() + ":" + (new Date().getMonth() + 1) + ":" + new Date().getFullYear(),
        arrgames: c,
        totalPrice:(totalPrice/2)
      });
    }
  }, [c]);

  const funcdelete = (x) => {
    dispatch(deletegame(x))
  }
  const funcadditem = (id) => {
    dispatch(additem(id))
  }
  const funcless = (x) => {
    dispatch(lessitem(x))
  }
  let idCust = useSelector(x => x.dataCostumer.currentUser._id)


  let time = new Date();
  let totalPrice = 0
  //const [orderfinal, setorderfinal] = useState({idCust: idCust, dateBuy: new Date().getDay, arrgames: c, totalPrice: totalPrice})
  //const [orderfinal, setorderfinal] = useState({idCust: '', dateBuy: new Date().getDay, arrgames: [], totalPrice: ''})

  //let navgite = useNavigate()
  ///////////////////////////////////////////////////////////
  // for (let i = 0; i < c.length; i++) {
  //   alert(totalPrice)
  //   totalPrice += c[i].total;
  // }
  let nav = useNavigate()
  // useEffect(() => {
  
  // }, []);
// c, idCust

  const ToBuy = () => {
    if (!idCust) {
      alert("אינך מחובר")
      nav("../login")
    }
    else {
      addOrderaxios(orderfinal)
        .then((x) => {
          dispatch(addOrder(x.data))
          console.log(orderfinal)
          setorderfinal({ idCust: "", dateBuy:"", arrgames: [], totalPrice: "" });
          nav("../PersonalArea")
          totalPrice = 0
        })
        .catch((err) => console.log(err));
    }
  }
  // setorderfinal({idCust: idCust, dateBuy: new Date().getDay, arrgames: c, totalPrice: totalPrice })
      // let butUpdate=useSelector(x=>x.dataBuy.listBuy)
      /////
      //let dispatch=useDispatch()
      //לבדוק האם עובר קומפוננטה
      //dispatch(deleteBuy())
      //alert(orderfinal.arrgames[0].name_produst)

      // navgite("../endshop")

  return <div className="container mt-3">
    <h1>העגלה שלך</h1>
    {!notnull && <h4>עגלה ריקה</h4>}
    {notnull && <table className="table table-bordered">
      <thead>
        <tr>
          <th>תמונה</th>
          <th>מחיר סופי</th>
          <th>כמות</th>
          {/* <th>קוד משחק</th> */}
          <th>מחיר</th>
          <th>שם</th>
          <th>קוד קטגוריה</th>
        </tr>
      </thead>
      <tbody>
        {c.map((x, k) => (<tr key={k}>
          <td><img style={{ width: "15%" }} src={`http://localhost:8080/${x.pic}`} ></img></td>


          <td>{x.total}</td>

          <td>{x.amount}</td>
          <td>{x.price}</td>
          {/* <td>{x.code_category}</td> */}

          <td>{x.name_produst}</td>
          <td>{x._id}</td>
          <td><button onClick={() => funcadditem(x._id)} className="btn btn-secondary me-2">+</button></td>
          <td><button className="btn btn-secondary me-2" onClick={() => funcless(x._id)}>-</button></td>
          <td><button type="button" class="btn btn-primary btn-lg" onClick={() => funcdelete(x._id)}>הסר</button></td></tr>))}
      </tbody>
    </table>}
    {notnull && <button className="btn btn-secondary me-2" onClick={() => ToBuy()}>לקניה</button>}
  </div>

}







// useEffect(() => { 
//   if (c.length !== 0)
//    setnotnull(true); 
//    if (idCust) { 
//     let totalPrice = 0;
//      for (let i = 0; i < c.length; i++) 
//       { totalPrice += c[i].total; } 
//      setorderfinal({ idCust: idCust, dateBuy: new Date().getDate() + ":" + (new Date().getMonth() + 1) + ":" + new Date().getFullYear(), 
//       arrgames: c,
//        totalPrice: 
//        totalPrice, }); 
//       } }, [c,