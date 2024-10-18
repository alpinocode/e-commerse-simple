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
    <div className="flex justify-start items-center ">
      <img
        src="/public/LOGOALPIN.png"
        alt="logo"
        width={50}
        height={25}
        className="ml-10 rounded-full"
      />
      <h1 className="text-2xl font-bold text-white mt-1 ml-5 text-black">
        PIN Ecommers
      </h1>
    </div>
  );
};

const LayerTwo = () => {
  return (
    <div className="flex justify-end gap-10 items-center text-white mr-20">
      <img
        src="/public/self-esteem.png"
        alt="likes products"
        width={50}
        height={25}
      />
      <img
        src="/public/shopping-cart.png"
        alt="product list"
        width={45}
        height={20}
      />
    </div>
  );
};

export default NavbarLayout;
