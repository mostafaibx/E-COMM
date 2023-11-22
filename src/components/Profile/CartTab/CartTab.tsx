import CartItem from "../../Cart/CartItem";

const CartTab = () => {
  return (
    <div className="lg:w-3/4 m-4 border-2 border-separate rounded-xl shadow-md flex flex-col justify-between">
      <div className="m-8 flex flex-col">
        <h1 className="m-8 text-4xl font-medium">Your Cart</h1>
        <CartItem />
      </div>
      <div className="flex justify-center my-2">
        <button className="mx-1 text-md font-medium text-white bg-green-500 hover:bg-green-800 transition-all py-4 px-6 rounded-full">
          Checkout
        </button>
        <button className="mx-1text-md font-medium text-white bg-green-500 hover:bg-green-800 transition-all py-4 px-6 rounded-full">
          Back Shopping
        </button>
      </div>
    </div>
  );
};

export default CartTab;
