const Order = () => {
  return (
    <div>
      <div className="lg:m-24">
        <div className="flex lg:ml-8">
          <div>
            <img
              src="../assets/image/right.jpg"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="">
            <h2 className="text-stone-500">Order#64765</h2>
            <h1 className="text-5xl">Thank you </h1>
          </div>
        </div>
        <div className="lg:mx-20 mt-5">
          <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl">Customer Information</h2>
              <p className="font-bold">Phone :</p>
              <p className="">Phone :</p>
              <p className="font-bold">Billing Address :</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl mt-3">
            <div className="card-body">
              <h2 className="card-title text-2xl">Order Details</h2>

              <img
                src="../assets/image/slide4.webp"
                style={{ width: "40px", height: "40px" }}
              />
              <p>fff</p>
              <hr></hr>
              <p className="">Subtotal :</p>
              <p className="">Shipping :</p>
              <p className="">Payment method :</p>
              <hr></hr>
              <p className="font-bold">Total:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
