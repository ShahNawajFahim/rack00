const Order = () => {
  const formData = JSON.parse(localStorage.getItem("formData"));
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
            <h1 className="text-5xl">Thank you {formData.customerName}</h1>
          </div>
        </div>
        <div className="lg:mx-20 mt-5">
          <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl">Customer Information</h2>
              <p className="font-bold">Phone :</p>
              <p className="">{formData.customerPhone}</p>
              <p className="font-bold">Billing Address :</p>
              <p className="">{formData.customerAddress}</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl mt-3">
            <div className="card-body">
              <h2 className="card-title text-2xl">Order Details</h2>

              <div className="flex justify-between">
                <div className="flex">
                  <img
                    src="../assets/image/slide4.webp"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <span>{formData.productName}</span>
                </div>
                <span>{formData.subtotalPrice}</span>
              </div>
              <hr></hr>
              <div className="flex justify-between">
                <span className="">Subtotal :</span>
                <span>{formData.subtotalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="">Shipping :</span>
                <span>{formData.shippingPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="">Payment method :</span>
                <span>Cash on delivery</span>
              </div>

              <hr></hr>
              <div className="flex justify-between">
                <span className="font-bold">Total:</span>
                <span className="font-bold">{formData.totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
