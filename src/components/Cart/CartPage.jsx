import { CartProvider } from "../../App";
import CartEmptyPage from "./CartEmptyPage";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import { useContext } from "react";

function CartPage() {
  const { count, cartProducts, dispatch } = useContext(CartProvider);

  return (
    <div className="flex flex-col gap-20">
      <CartHeader count={cartProducts.length} />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col p-8 gap-8 justify-center items-center">
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => {
              return <CartItem product={product} key={product.id} />;
            })
          ) : (
            <CartEmptyPage />
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
