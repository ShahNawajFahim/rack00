import { useState } from "react";

const products = [
  { id: 1, name: 'Multi Layer Smart Rack-6', price: 10, quantity: 0, selected: false },
  { id: 2, name: 'Multi Layer Smart Rack-6', price: 15, quantity: 0, selected: false },
  { id: 3, name: 'Multi Layer Smart Rack-6', price: 20, quantity: 0, selected: false },
];

function Home() {
  const [cart, setCart] = useState([]);

  const [selectedShippingOption, setSelectedShippingOption] = useState('outsideDhaka');

  const getSelectedShippingCost = () => {
    const shippingCosts = {
      outsideDhaka: 110.00,
      withinDhaka: 65.00,
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
    return calculateSubtotal()+getSelectedShippingCost() ;
  };

  return (
    <div className="">

{/* <<<header container start>>> */}

<div className="bg-slate-900 p-8 rounded-e">
  <h1 className="text-4xl font-bold text-center text-white">Multi Layer Smart Rack</h1>
</div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">


  <div className="carousel w-5/12">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="/src/assets/image/slide1.webp" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/src/assets/image/slide2.webp" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/src/assets/image/slide3.webp" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/src/assets/image/slide4.webp" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    <div className="p-5 space-y-8 ">
    <div className="grid justify-items-center">
      <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-success" href="#selection-item">অর্ডার করতে ক্লিক করুন</a>
      </div>
      <h1 className="text-3xl font-bold text-center"> আমাদের পণ্যের বৈশিষ্ট্য</h1>
      <p className="text-xl font-bold ">► ইউনিক ও কমফোর্টেবল</p>
      <p className="text-xl font-bold ">► মাল্টিফাংশনাল,মজবুত ও টেকসই</p>
      <p className="text-xl font-bold ">► খুব সহজে এক জায়গা থেকে অন্য যায়গায় স্থানান্তর করা যায় </p>
      <p className="text-xl font-bold ">► ঘরের সুন্দরয্য বাড়ায়</p>
      <p className="text-xl font-bold ">► যেকোন পরিবেশে ব্যবহারের উপযুক্ত</p>
      <p className="text-xl font-bold ">► কালারফুল হওয়ার কারনে ঘরের সুন্দরয্য বাড়িয়ে তুলে দিগুণ</p>

    </div>
  </div>
</div>
{/* <<<header container end>>> */}



{/* <<<<seclection container>>>>   start  */}

      <div id="selection-item" className="m-24 text-center">
      <h1 className="text-2xl font-bold mb-4 ">পরিমাণ সিলেক্ট করুন</h1>
      <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr> 
        <div className="text-lg  flex flex-row gap-96 ml-48">
          <h3 className="">Product</h3>
          <h3>Quantity</h3>
          <h3>Price</h3>
        </div>
       
      </tr>
    </thead>
    <tbody>
 
      <tr>
     
        {products.map((product) => (
          <div key={product.id} className=" border p-3 gap-96 ">
            <label className="">
              <input
                type="checkbox" className="ml-12"
                onChange={(e) => handleCheckboxChange(product, e.target.checked)}
              />


        <td  >
          <div className="flex items-center gap-2 ml-5">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/src/assets/image/avatar.webp" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
            <h2 className="">{product.name}</h2>
            </div>
          </div>
        </td>              
            <td >
              <div className="flex items-center ml-72 pl-2">
                <button
                  onClick={() => handleAddToCart(product, -1)}
                  className="px-2 py-1 bg-blue-500 text-white"
                  type="button"
                >
                  -
                </button>
                <span className="mx-2">
                  {cart.find((item) => item.id === product.id && item.selected)?.quantity || 0}
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
         <td className="">
          <p className="ml-72 pl-14">Price: {product.price}৳</p>
        </td>
            </label>
          </div>
        ))}
    

        
       
      </tr>
    </tbody>
    
  </table>

</div>
      </div>
      </div>

{/* <<<<seclection container>>>>   end  */}


<div className="p-12 bg-slate-900">
  
<div className="m-24 flex ">

{/* <<<biling container start>>> */}
<div className="w-6/12 text-white">
  <h1 className="text-3xl font-bold mb-2">Billing details</h1>
নাম :
<label className="input input-bordered flex items-center gap-2 mt-2 mb-2">
  <input type="text" className="grow" placeholder="নাম" />
</label>
ঠিকানা :
<label className="input input-bordered flex items-center gap-2 mt-2 mb-2">
  <input type="text" className="grow" placeholder="ঠিকানা" />
</label>
ফোন নম্বর :
<label className="input input-bordered flex items-center gap-2 mt-2 mb-2">
  <input type="text" className="grow" placeholder="ফোন নম্বর" />
</label>

কালার সিলেক্ট করুন:


  <div className="flex gap-8">
  <label className="cursor-pointer label mt-2 mb-2">
    <input type="checkbox"  className="checkbox checkbox-accent" />
    <span className="label-text text-white pl-2">Sky Color</span>
  </label>
  <label className="cursor-pointer label mt-2 mb-2">
    <input type="checkbox"  className="checkbox checkbox-accent" />
    <span className="label-text text-white pl-2">Orange Color</span>
  </label>
  <label className="cursor-pointer label mt-2 mb-2">
    <input type="checkbox"  className="checkbox checkbox-accent" />
    <span className="label-text text-white pl-2">Green Color</span>
  </label>
  </div>


  



</div>


{/* <<<biling container end>>> */}

{/* cart section start*/}





      <div className="card w-fit bg-base-100 shadow-xl m-auto">
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
    <td>{item.price} x {item.quantity}</td>
    <td>{item.price * item.quantity}৳</td>
  </tr>
))}

      
      <tr>
        <th className="font-normal">Subtotal:</th>
        <td>--</td>
        <td>{calculateSubtotal()}৳</td>
      </tr>
      <tr>
        <th className="font-normal">Shipping:</th>
        <td><input className="radio radio-primary" 
          type="radio"
          name="shippingOption"
          value="outsideDhaka"
          checked={selectedShippingOption === 'outsideDhaka'}
          onChange={handleShippingOptionChange}  />ঢাকার বাইরে:110.00৳</td>
        <td>
          <input 
          type="radio"
          name="shippingOption"
          value="withinDhaka"
          checked={selectedShippingOption === 'withinDhaka'}
          onChange={handleShippingOptionChange} 
          className="radio radio-primary" />ঢাকার মধ্যে:65.00৳</td>
      </tr>
      
      <tr>
        <th className="font-bold">Total:</th>
        <td >--</td>
        <td className="font-bold">{calculateTotal()}৳</td>  
      </tr>
    </tbody>
  </table>
</div>
    <div className="card-actions">
      <button className="btn btn-accent">অর্ডার কনফার্ম {calculateTotal()}৳</button>
    </div>
  </div>
</div>


{/* <<<cart section end >>>> */}
</div>
</div>


    </div>
  );

  
}




export default Home;