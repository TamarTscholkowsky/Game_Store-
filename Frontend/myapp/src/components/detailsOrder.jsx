export const DetailsOrder=(props)=>{
debugger
let x=props.list

    return<div>
   <table className="table table-bordered">
    <thead>
    <tr style={{padding:"5%"}}>
    <th>מחיר סה"כ</th>
    <th>כמות</th>
    <th>שם מוצר</th>
    </tr>
    </thead>
    
    <tbody>
    
   {/* // nameG:String,amount:Number,finalPrice:Number */}
     {props.list.map((x,k)=>(<tr key={k} style={{padding:"5%"}}>
        <td>{x.total}</td>
         <td>{x.amount}</td>
        <td>{x.name_produst}</td>
    </tr>))}
    </tbody>

   </table>
   <button  className="btn btn-secondary" onClick={()=>props.funcdetail(props.id)}>לסגירה</button>


    </div>
}