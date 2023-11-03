import { CartProvider } from "../../App";
import CartEmptyPage from "./CartEmptyPage";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import { useContext } from "react";

function CartPage() {
  const { count, cartProducts, dispatch } = useContext(CartProvider);

  return (
    <div className="flex flex-col gap-20">
      {count > 0 && <CartHeader count={count} />}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col p-8 gap-8 justify-center items-center">
          {count > 0 && cartProducts ? (
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
