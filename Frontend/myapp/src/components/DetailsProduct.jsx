import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loadGame } from "../redux/actions/dataActionGame";
import { getAllGame } from "../axios/gamesaxios";
import { addBuy } from "../redux/actions/dataActionBuy";

export const DetailsProduct = () => {

    const params = useParams()
     let dispatch=useDispatch()

    let listG = useSelector(x => x.dataGame.listGame)
    let listd = useDispatch()
    useEffect(() => {
        debugger
        if (listG != null && listG.length == 0) {
            getAllGame()
                .then((x) => listd(loadGame(x.data)))
                .catch((err) => console.log(err));

        }
    }, [])
    
    const r = listG.find(x => x._id === params.id)
    const funcaddTocart = () => {
        dispatch(addBuy(r))

      }
    return (<div className="shadow-lg p-4 mb-4 bg-white" style={{height:"10%"}}>
        {r ? (
            <div >
                <h1 className="container">{r.name_produst}</h1>
                <img src={`http://localhost:8080/${r.pic}`} alt={r.name_produst} />
               
                <h4 style={{padding:"3%"}} >{r._id} :קוד מוצר</h4>
                <h4 style={{padding:"3%"}} >{r.code_category} :קוד קטגוריה</h4>
                <h4 style={{padding:"3%"}} > {r.price} :מחיר </h4>
               
            </div>
        ) : (
            <p>המוצר לא נמצא</p>
        )}
 <button onClick={()=>funcaddTocart()} type="button" className="btn btn-primary btn-sm">הוספה לסל</button>

    </div>);
}