import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { add, deleteGame, getAllGame, updateGame } from "../axios/gamesaxios"
import { addgame, deletById, edit, loadGame } from "../redux/actions/dataActionGame"
import { addCategory, getAllCategory } from "../axios/categoriesaxios"
import { loadCategory } from "../redux/actions/dataActionCategory"
export const ListGames = () => {
  let listG = useSelector(x => x.dataGame.listGame)
  let listd = useDispatch()//הולך לאקשן ויכול לגשת לזה
  let listC = useSelector(x => x.dataCategory.listCategory)
  useEffect(() => {
    if (listG != null && listG.length == 0) {
      getAllGame()
        .then((x) => listd(loadGame(x.data)))//זה התוכן
        .catch((err) => console.log(err));
    }
    
    if (listC != null && listC.length == 0) {
      getAllCategory()
        .then((x) => dispatch(loadCategory(x.data)))
        .catch((err) => console.log(err));
    }
  }, [])

  const dispatch = useDispatch()
  const [addNewGame, setAddNewGame] = useState({
    name_produst: '',
    price: '',
    pic: '',
    code_category: '',
    amount: '',
    
  })
  const addGame = () => {
    add(addNewGame)
      .then((x) => { dispatch(addgame(x.data)) })
      .catch((err) => console.log(err))
    // setAddNewGame({})

  
  }
  const deletegame = (id) => {
    deleteGame(id)
      //המוצר נמחק אבל לא ברידקס והID לא נקלט
      .then(dispatch(deletById(id)), console.log("המוצר נמחק בהצלחה"))
      .catch((err) => console.log(err))
 
  }
  // const [addNewGame, setAddNewGame] = useState({})
 const[isEdit,setisEdit]=useState(false)
 //const[objisEdit,setobjisEdit]=useState({})
  const funcisEdit = (x) => {
    setisEdit(true)
    // name_produst:x.name_produst,code_category:x.code_category,price:x.price,pic:x.pic,amount:x.amount
    //setAddNewGame({...x})
    debugger
    setAddNewGame({...x})
    // ...addNewGame, name_produst: e.target.value 
    console.log("אני על מצב עדיכ") 
  }
  const funcsave=()=>{
    debugger
    updateGame(addNewGame._id,addNewGame)
    .then((x)=>{debugger; dispatch(edit(x.data,x.data._id));setAddNewGame({
      name_produst: '',
      price: '',
      pic: '',
      code_category: '',
      amount: '',
      
    })})
    .catch((err)=>console.log(err))
    
    setisEdit(false)
    // setAddNewGame({})
  }
  const funcselect=(nameCategory)=>{
    let category=listC.filter(x=>x.name===nameCategory)
    debugger
    setAddNewGame({...addNewGame,code_category:category[0]._id})
  }
  // const funcsave=()=>{
  //   if(objisEdit==true){
  //   
  //   setobjisEdit(false)}
  //   else{
  //     addGame()}
  // }

  debugger
  return <div>
    <h2>רשימת משחקים שבאתר</h2>
    <div>
      <input type="text" className="form-control form-control-lg" placeholder="הכנס שם מוצר" 
      onChange={(e) => setAddNewGame({ ...addNewGame, name_produst: e.target.value })}
      value={addNewGame.name_produst}></input>
      {/* <input type="text" className="form-control" placeholder="קטגוריה" 
      onChange={(e) => setAddNewGame({ ...addNewGame, code_category: e.target.value })}
      value={addNewGame.code_category}></input> */}

    <select  style={{width:"50%"}}className="form-select form-select-lg container" onChange={(e) =>funcselect(e.target.value)}>
    {listC.map((x, k) => (<option key={k}>{x.name}</option>))}
    </select>

      <input type="text" className="form-control" placeholder="הכנס מחיר מוצר" 
      value={addNewGame.price}
      onChange={(e) => setAddNewGame({ ...addNewGame, price: e.target.value })}></input>
      <input type="text" className="form-control" placeholder="הכנס תמונה"
      value={addNewGame.pic}
      onChange={(e) => setAddNewGame({ ...addNewGame, pic: e.target.value })}></input>
      <input type="number" className="form-control" placeholder="כמות במלאי" 
      value={addNewGame.amount}
      onChange={(e) => setAddNewGame({ ...addNewGame, amount: e.target.value })}></input>
      {(!isEdit)&& <button className="btn btn-secondary" onClick={() => addGame()}>הוסף</button>}
      {isEdit&&<button   className="btn btn-secondary" onClick={()=>funcsave()}>שמור</button>}
    </div>
    <table className="table table-striped">
  
      <thead>
        <tr>
          <th>קוד</th>
          <th>שם</th>
          <th>מחיר</th>
          <th>תמונה</th>
          <th>קוד קטגוריה</th>
          <th>כמות במלאי</th>
        </tr>
      </thead>

      <tbody>
        {listG.map((x, k) => (<tr key={k}>
            {/* //אם זה לא במצב של עריכה */}
            <td>{x._id}</td>
            <td>{x.name_produst}</td>
            <td>{x.price}</td>
            <td><img style={{ width: '45px' }} className="card-img-top" src={`http://localhost:8080/${x.pic}`} alt="Card image" /></td>
            <td>{x.code_category}</td>
            <td>{x.amount}</td>
            <td><button  className="btn btn-primary" onClick={() => funcisEdit(x)}>עדכון</button></td>
            <td><button className="btn btn-primary" onClick={() => deletegame(x._id)}>מחיקה</button></td>
          </tr>)
            // :(!isnotEdit)&&(x._id == isEditnow.id) ? (<tr key={k}>
            //   <td>{x._id}</td>
            //   <td><input type="text" placeholder={x.name_produst} onBlur={(e) => setAddNewGame({ ...addNewGame, name_produst: e.target.value })} /></td>
            //   <td><input type="number" placeholder={x.price} onBlur={(e) => setAddNewGame({ ...addNewGame, price: e.target.value })}></input></td>
            //   <td><input type="text" placeholder={x.pic} onBlur={(e) => setAddNewGame({ ...addNewGame, pic: e.target.value })}></input></td>
            //   <td><input type="number" placeholder={x.code_category} onBlur={(e) => setAddNewGame({ ...addNewGame, code_category: e.target.value })}></input></td>
            //   <td><input type="number" placeholder={x.amount} onBlur={(e) => setAddNewGame({ ...addNewGame, amount: e.target.value })}></input></td>
            //   <td><button onClick={() => addGame()}>שמירה</button></td>
            //   <td><button onClick={() => deletegame(x._id)}>מחיקה</button></td>
            // </tr>)
                // : null
            // )
            )
            }
      </tbody>
    </table>
  </div>
}