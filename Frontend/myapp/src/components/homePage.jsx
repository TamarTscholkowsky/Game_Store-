import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllGame, getByCategoryId, getById } from "../axios/gamesaxios"
import { loadGame } from "../redux/actions/dataActionGame"
import { Link, useNavigate } from "react-router-dom"
import { getAllCategory } from "../axios/categoriesaxios"
import { loadCategory } from "../redux/actions/dataActionCategory"
import { addBuy } from "../redux/actions/dataActionBuy"
import { DetailsProduct } from "./DetailsProduct"

export const HomePage = () => {

  let dispatch = useDispatch()
let navigate=useNavigate()
let listC = useSelector(x => x.dataCategory.listCategory)
let gamee=useSelector(x => x.dataGame.listGame)

  const [gameDisplay, setgameDisplay] = useState([])
  
  useEffect(() => {
    if (gameDisplay.length == 0 &&gameDisplay!=null) {
      getAllGame()
        .then((x) =>{dispatch(loadGame(x.data)); setgameDisplay(x.data)})
        .catch((err) => console.log(err))
        debugger
    }
    if (listC != null && listC.length == 0) {
      getAllCategory()
        .then((x) => dispatch(loadCategory(x.data)))
        .catch((err) => console.log(err));
    }
   
  }, [])
  const selectfunc = (e) => {
    debugger
    if (e != "לכל המשחקים") {
      let categ = listC.find((x => x.name === e))
      getByCategoryId(categ._id)
        .then(((x) => {setgameDisplay(x.data) }))
        .catch((err) => console.log(err));
    }
    else {
      getAllGame()
        .then(x => { dispatch(loadGame(x.data)) })
        .catch((err) => console.log(err))
    }
  }
  const funcaddTocart = (x) => {
    dispatch(addBuy(x))
    debugger
  }
  // const addToCart = (id) => {///לתקן
  //   getById(id)
  //     .then((x) => dispatch(addBuy(x.data)))
  //     .catch((err) => console.log(err))
  //   debugger

  // }
  return <div>
    <h1>ברוכים הבאים לאתר</h1>
    <div className="mt-5 p-4 bg-dark text-white text-center">
    <select  style={{width:"50%"}}className="form-select form-select-lg container" onChange={(e) => selectfunc(e.target.value)}>
      <option onChange={(e) => selectfunc(e.target.value)}>כל המשחקים</option>
      {listC.map((x, k) => (<option key={k}>{x.name}</option>))}
    </select></div>
    <div  className="d-flex flex-wrap bg-light" >
    {gameDisplay.map((x, k) => (<div key={k} className="card" style={{width:"350px", margin:"3.5%"}}>

      {/* <img className="card-img-top" style={{width:"100%"}} src="http://localhost:8080/game1.png" alt="Card image" /> */}
      <div className="card-body">
        <h4 className="card-title">שם המוצר:{x.name_produst}</h4>
        <p className="card-text">מחיר:{x.price}</p>
        <div  className="bg-light p-5 text-center">
        <button type="button" className="btn btn-primary" onClick={()=>navigate(`../DetailsProduct/${x._id}`)}>פרטים נוספים</button>
        <button type="button" className="btn btn-primary" onClick={() => funcaddTocart(x)}>הוסף לסל</button>
      </div>
      </div>
      
    </div>))}
    </div>
  </div>
}







