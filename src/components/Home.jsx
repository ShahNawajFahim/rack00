import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Multi Layer Smart Rack-6",
    price: 10,
    quantity: 0,
    selected: false,
  },
  {
    id: 2,
    name: "Multi Layer Smart Rack-5",
    price: 15,
    quantity: 0,
    selected: false,
  },
  {
    id: 3,
    name: "Multi Layer Smart Rack-4",
    price: 20,
    quantity: 0,
    selected: false,
  },
];

function Home() {
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [productName, setProductName] = useState("");
  const [subtotalPrice, setSubtotalPrice] = useState("");
  const [shippingPrice, setShippingPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  const [selectedShippingOption, setSelectedShippingOption] =
    useState("outsideDhaka");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const checkedColors = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    const selectedColors = Array.from(checkedColors).map(
      (checkbox) => checkbox.value
    );
    setSelectedColor(selectedColors);

    const productNames = cart.map((item) => item.name);
    setProductName(productNames.join(", "));

    const subtotal = calculateSubtotal();
    setSubtotalPrice(subtotal);
    const shipping = getSelectedShippingCost();
    setShippingPrice(shipping);
    const total = calculateTotal();
    setTotalPrice(total);

    const formData = {
      customerName,
      customerAddress,
      customerPhone,
      selectedColor: selectedColors.join(", "),
      productName: productNames.join(", "),
      subtotalPrice: subtotal,
      shippingPrice: shipping,
      totalPrice: total,
    };

    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      console.log("Order successful!");
      localStorage.setItem("formData", JSON.stringify(formData));
      window.location.href = "/order";
    }
  };

  const getSelectedShippingCost = () => {
    const shippingCosts = {
      outsideDhaka: 110.0,
      withinDhaka: 65.0,
    };

    return shippingCosts[selectedShippingOption] || 0;
  };

  const handleShippingOptionChange = (event) => {
    // Update the selectedShippingOption state when the user changes the shipping option
    setSelectedShippingOption(event.target.value);
  };

  const handleAddToCart = (product, change) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id && item.selected
        ? { ...item, quantity: Math.max(item.quantity + change, 0) }
        : item
    );

    const existingItem = updatedCart.find((item) => item.id === product.id);

    if (!existingItem && change > 0 && product.selected) {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  const handleCheckboxChange = (product, isChecked) => {
    if (isChecked) {
      handleAddToCart({ ...product, selected: true }, 1);
    } else {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + getSelectedShippingCost();
  };

  return (
    <div className="">
      {/* <<<header container start>>> */}

      <div className="bg-slate-900 p-8 rounded-e">
        <h1 className="text-4xl font-bold text-center text-white">
          Multi Layer Smart Rack
        </h1>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="carousel w-5/12">
            <div id="slide1" className="carousel-item relative w-full">
              <img src="/src/assets/image/slide1.webp" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src="/src/assets/image/slide2.webp" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src="/src/assets/image/slide3.webp" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src="/src/assets/image/slide4.webp" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div className="p-5 space-y-8 ">
            <div className="grid justify-items-center">
              <a
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-success"
                href="#selection-item"
              >
                অর্ডার করতে ক্লিক করুন
              </a>
            </div>
            <h1 className="text-3xl font-bold text-center">
              {" "}
              আমাদের পণ্যের বৈশিষ্ট্য
            </h1>
            <p className="text-xl font-bold ">► ইউনিক ও কমফোর্টেবল</p>
            <p className="text-xl font-bold ">► মাল্টিফাংশনাল,মজবুত ও টেকসই</p>
            <p className="text-xl font-bold ">
              ► খুব সহজে এক জায়গা থেকে অন্য যায়গায় স্থানান্তর করা যায়{" "}
            </p>
            <p className="text-xl font-bold ">► ঘরের সুন্দরয্য বাড়ায়</p>
            <p className="text-xl font-bold ">
              ► যেকোন পরিবেশে ব্যবহারের উপযুক্ত
            </p>
            <p className="text-xl font-bold ">
              ► কালারফুল হওয়ার কারনে ঘরের সুন্দরয্য বাড়িয়ে তুলে দিগুণ
            </p>
          </div>
        </div>
      </div>
      {/* <<<header container end>>> */}

      {/* <<<<seclection container>>>>   start  */}

      <div id="selection-item" className="m-4 lg:m-24 text-center">
        <h1 className="text-xl lg:text-2xl font-bold mb-4">
          পরিমাণ সিলেক্ট করুন
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="lg:hidden">Product</th>
                <th className="hidden lg:table-cell">Product</th>
                <th className="lg:text-center">Quantity</th>
                <th className="lg:text-center">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="flex items-center gap-2 ">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        onChange={(e) =>
                          handleCheckboxChange(product, e.target.checked)
                        }
                      />
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/src/assets/image/avatar.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <h2 className="">{product.name}</h2>
                      </div>
                    </div>
                  </td>
                  <td className="hidden "></td>
                  <td className="lg:text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleAddToCart(product, -1)}
                        className="px-2 py-1 bg-blue-500 text-white"
                        type="button"
                      >
                        -
                      </button>
                      <span>
                        {cart.find(
                          (item) => item.id === product.id && item.selected
                        )?.quantity || 0}
                      </span>
                      <button
                        onClick={() => handleAddToCart(product, 1)}
                        className="px-2 py-1 bg-blue-500 text-white"
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="lg:text-center">
                    <p>Price: {product.price}৳</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <<<<seclection container>>>>   end  */}

      <form onSubmit={handleSubmit}>
        <div className="lg:p-12  pt-1 bg-slate-900 ">
          <div className="lg:m-24 lg:flex ">
            {/* <<<biling container start>>> */}
            <div className="lg:w-6/12 text-white m-20">
              <h1 className="text-3xl font-bold mb-2 ">Billing details</h1>
              নাম :
              <label className="input input-bordered flex items-center gap-2 mt-2 mb-2">
                <input
                  required
                  type="text"
                  className="grow text-black"
                  placeholder="নাম"
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </label>
              ঠিকানা :
              <label className="input input-bordered flex items-center gap-2 mt-2 mb-2">
                <input
                  required
                  type="text"
                  className="grow text-black"
                  placeholder="ঠিকানা"
                  id="customerAddress"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                />
              </label>
              ফোন নম্বর :
              <label className="input input-bordered flex items-center gap-2 mt-2 mb-2">
                <input
                  required
                  type="text"
                  className="grow text-black"
                  placeholder="ফোন নম্বর"
                  id="customerPhone"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                />
              </label>
              কালার সিলেক্ট করুন:
              <div className="flex lg:gap-8">
                <label className="cursor-pointer label mt-2 mb-2">
                  <input
                    type="checkbox"
                    value="Sky Color"
                    className="checkbox checkbox-accent"
                  />
                  <span className="label-text text-white pl-2">Sky Color</span>
                </label>
                <label className="cursor-pointer label mt-2 mb-2">
                  <input
                    type="checkbox"
                    value="Orange Color"
                    className="checkbox checkbox-accent"
                  />
                  <span className="label-text text-white pl-2">
                    Orange Color
                  </span>
                </label>
                <label className="cursor-pointer label mt-2 mb-2">
                  <input
                    type="checkbox"
                    value="Green Color"
                    className="checkbox checkbox-accent"
                  />
                  <span className="label-text text-white pl-2">
                    Green Color
                  </span>
                </label>
              </div>
            </div>

            {/* <<<biling container end>>> */}

            {/* cart section start*/}

            <div className="card lg:w-fit w-full  bg-base-100 shadow-xl m-auto ">
              <div className="card-body items-center ">
                <h2 className="card-title font-bold">Your order</h2>

                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th></th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>
                            {item.price} x {item.quantity}
                          </td>
                          <td>{item.price * item.quantity}৳</td>
                        </tr>
                      ))}

                      <tr>
                        <th className="font-normal">Subtotal:</th>
                        <td>--</td>
                        <td>
                          <input
                            type="text"
                            // value={item.name}
                            onChange={() =>
                              setSubtotalPrice(calculateSubtotal())
                            }
                          />
                          {calculateSubtotal()}৳
                        </td>
                      </tr>
                      <tr>
                        <th className="font-normal">Shipping:</th>
                        <td>
                          <input
                            className="radio radio-accent"
                            type="radio"
                            name="shippingOption"
                            value="outsideDhaka"
                            checked={selectedShippingOption === "outsideDhaka"}
                            onChange={handleShippingOptionChange}
                          />
                          ঢাকার বাইরে:110.00৳
                        </td>
                        <td>
                          <input
                            type="radio"
                            name="shippingOption"
                            value="withinDhaka"
                            checked={selectedShippingOption === "withinDhaka"}
                            onChange={handleShippingOptionChange}
                            className="radio radio-accent"
                          />
                          ঢাকার মধ্যে:65.00৳
                        </td>
                      </tr>

                      <tr>
                        <th className="font-bold">Total:</th>
                        <td>--</td>
                        <td className="font-bold">{calculateTotal()}৳</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-actions">
                  <button className="btn btn-accent" type="submit">
                    অর্ডার কনফার্ম {calculateTotal()}৳
                  </button>
                </div>
              </div>
            </div>

            {/* <<<cart section end >>>> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
