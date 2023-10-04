import { Outlet } from "react-router-dom";
import Categories from "./Categories/Categories";
import Header from "./Header";
import Products from "./Products/Products";
import SignUp from "./SignUp/SignUp";

function Main() {
  return (
    <div className="pt-44">
      <Header />
      <Categories />
      <Products />
      <SignUp />
    </div>
  );
}

export default Main;
