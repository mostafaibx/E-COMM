const CartItem = () => {
  const defImg =
    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";

  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between  border-2 border-separate rounded-xl shadow-md">
      <div className="flex">
        <div className="mr-4 flex justify-center items-center">
          <img src={defImg} alt="" />
        </div>
        <div className="w-full">
          <h1 className="text-lg md:text-3xl font-semibold">Item Name</h1>
          <div className="md:px-6 pt-3 flex md:flex-col justify-between ">
            <h1>Price: $400</h1>
            <h1>Qty: x3</h1>
          </div>
        </div>
      </div>
      <button className="sm:mx-4 sm:p-4 my-2 sm:my-0 p-1 bg-red-500 hover:bg-red-800">
        X
      </button>
    </div>
  );
};

export default CartItem;
