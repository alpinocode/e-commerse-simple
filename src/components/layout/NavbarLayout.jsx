import { useEffect, useState } from "react";
import { getProducts } from "../../services/getProduct";

const NavbarLayout = () => {
  return (
    <nav className="flex justify-between bg-blue-100 h-20 flex-wrap">
      <LayerOne />
      <LayerTwo />
    </nav>
  );
};

const LayerOne = () => {
  return (
    <div className="flex justify-start items-center flex-wrap">
      <img
        src="/public/images/LOGO_ALPIN.png"
        alt="logo"
        width={50}
        height={25}
        className="ml-10 rounded-full mt-2"
      />
      <h1 className="text-2xl font-bold mt-1 ml-5 text-black">PIN Ecommers</h1>
    </div>
  );
};

const LayerTwo = (props) => {
  const [showCard, setShowCard] = useState(false); // State untuk mengatur visibilitas card
  const [cardProduct, setCardProduct] = useState([]); // Initial state as array

  // Fungsi untuk toggle visibilitas card
  const handleProduct = () => {
    setShowCard(!showCard);
  };

  // Load data dari localStorage saat pertama kali komponen di-render
  useEffect(() => {
    const storedCard = JSON.parse(localStorage.getItem("card")) || [];
    setCardProduct(storedCard); // Set ke state
  }, [cardProduct]);

  return (
    <>
      <div className="flex justify-end gap-10 items-center text-white mr-20">
        <img
          src="/public/images/shopping-cart.png"
          alt="product list"
          width={45}
          height={20}
          onClick={handleProduct}
          style={{ cursor: "pointer" }}
        />
      </div>

      {showCard && (
        <div className="mt-5 w-full flex justify-end">
          <div className="bg-white shadow-lg p-5 rounded w-96 text-black z-10 mr-10">
            <h2 className="text-xl font-bold mb-4">Keranjang</h2>
            {cardProduct.length > 0 ? (
              cardProduct.map((product) => (
                <div key={product.id} className="border-b pb-4 mb-4 flex">
                  <div className="w-16 h-16 mr-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-gray-500">{product.category}</p>
                    <div className="flex ">
                      <p className="">${product.price}</p>
                      <p className="ml-20">qty: {product.qty}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Keranjang kosong</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarLayout;
