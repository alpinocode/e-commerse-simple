const NavbarLayout = () => {
  return (
    <nav className="flex justify-between bg-slate-800 h-20 flex-wrap">
      <div className="flex justify-start items-center ">
        <h1 className="text-2xl font-bold text-white mt-1 ml-10 ">PInos</h1>
      </div>
      <div className="flex justify-end gap-5 items-center text-white mr-4"></div>
    </nav>
  );
};

export default NavbarLayout;
