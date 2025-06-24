import { Route, Routes } from "react-router-dom"
import { ListGames } from "./listGames"
import { AddCategory } from "./addCategory";
import { CategoryList } from "./categoryList";
import { HomePage } from "./homePage";
import { DetailsProduct } from "./DetailsProduct";
import { Login } from "./login";
import { AddingCustomer } from "./addingCustomer";
import { Cart } from "./cart";
import { PersonalArea } from "./PersonalArea";

export const Routing = () => {
    return (<Routes>
        <Route path="listGames" element={<ListGames></ListGames>}></Route>
        <Route path="addCategory" element={<AddCategory></AddCategory>}></Route>
        <Route path="categoryList" element={<CategoryList></CategoryList>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="detailsProduct/:id" element={<DetailsProduct></DetailsProduct>}></Route>
        <Route path="addingCustomer" element={<AddingCustomer></AddingCustomer>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
        <Route path="personalArea" element={<PersonalArea></PersonalArea>}></Route>
    </Routes>);
};