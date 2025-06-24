import { useState } from "react"
import { addCategory } from "../axios/categoriesaxios"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addCategoryreducer } from "../redux/actions/dataActionCategory"

export const AddCategory = () => {

    const [myexeption, setmyexeption] = useState(true)//האם תקין
    const [newCategory, setNewCategory] = useState({name:''})//האוביקט להוסיף

    const dispatch = useDispatch()
    const n = useNavigate()

    const checkname = () => {
        // e.preventDefault()
debugger
        setmyexeption(true)
       
        const str = newCategory.name
        let flag=true
        for (let i = 0; i < str.length; i++){
            if (!((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'א' && str[i] <= 'ת' )|| (str[i] <= 'Z' && str[i] >= 'A')||(str[i]==' '))){
                flag=false
                }}
                setmyexeption(flag)
           debugger
        // let regex = /^[A-Za-zא-ת]+$/;
        // setmyexeption(regex.test(cat))
  
        if (flag == true&&str.length!=0) {
             addCategory(newCategory)
                .then((x) => {
                  //  לא הוספתי לרדוסר כי אז זה מפיל את טעינת הקטגוריות
                    dispatch(addCategoryreducer(x.data))
                    // dispatch(addCategoryreducer(newCategory))
                    alert("הקטגוריה נוספה בהצלחה")
                    n('../categoryList')
                })
                .catch((err) => console.log(err))
        }
        else {
            if(str.length==0)
                setmyexeption("המילה ריקה אנא הכנס שם קטגוריה") 
            else
            setmyexeption("שם קטגוריה יכיל רק אותיות")

        }
    }

    return <div>
        <input type="text" placeholder="הכנס  קטגוריה"
            onChange={(e) => setNewCategory({name:e.target.value})} />

        {myexeption != true && <p className="alert alert-danger"> {myexeption}</p>}
        <br></br>
        <br></br>

        <button className="btn btn-primary" onClick={() => checkname()} >הוסף</button>
    </div>
}