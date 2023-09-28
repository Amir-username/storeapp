import Categories from "./Categories/Categories";
import Header from "./Header";
import Products from "./Products/Products";
import SignUp from "./SignUp/SignUp";

function Main({categories}) {
  return (
    <div className="pt-44">
      <Header />
      <Categories categories={categories}/>
      <Products />
      <SignUp />
    </div>
  );
}

export default Main;
