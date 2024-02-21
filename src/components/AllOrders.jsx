import { useEffect, useState } from "react";

const AllOrders = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/orders");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  return (
    <div className="grid gap-20 lg:grid-cols-3 md:grid-cols-2 lg:mx-40 md:mx-20 mx-10">
      {data
        .slice()
        .reverse()
        .map((order, index) => (
          <div key={order._id}>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    #{data.length - index} Order Details
                  </h2>
                  <p className="font-bold">
                    Customer name: {order.customerName}
                  </p>
                  <p className="font-bold">
                    Customer address: {order.customerAddress}
                  </p>
                  <p className="font-bold">
                    Customer phone: {order.customerPhone}
                  </p>
                  <p className="font-bold">
                    Selected color: {order.selectedColor}
                  </p>
                  <p className="font-bold">Product name: {order.productName}</p>
                  <p className="font-bold">
                    Subtotal price: {order.subtotalPrice}
                  </p>
                  <p className="font-bold">
                    Shipping price: {order.shippingPrice}
                  </p>
                  <p className="font-bold">Total price: {order.totalPrice}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllOrders;
