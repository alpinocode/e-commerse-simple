const FooterLayout = () => {
  return (
    <footer className="flex flex-wrap justify-around items-center bg-blue-100 h-auto ">
      <LayerOne />
      <LayerTwo />
    </footer>
  );
};

const LayerOne = () => {
  return (
    <div className="flex justify-start">
      <img
        src="/public/images/LOGO_ALPIN.png"
        alt=""
        width={400}
        className="mt-2 bg-transparent"
      />
    </div>
  );
};

const LayerTwo = () => {
  return (
    <div className="ml-4 justify-end text-center items-center mt-10">
      <ComponentsOne />
      <ComponentsTwo />
    </div>
  );
};

const ComponentsOne = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mt-2">Welcome To Website Simple</h1>
      <h2 className="text-2xl font-bold mt-2">follow my social media</h2>
      <div className="mt-10 flex gap-10 ">
        <img src="/public/images/instagram.png" alt="instagram" width={100} />
        <img src="/public/images/github.png" alt="github" width={100} />
        <img src="/public/images/facebook.png" alt="facbook" width={100} />
      </div>
    </>
  );
};

const ComponentsTwo = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-10">
        Those who want to talk to
      </h2>
      <h2 className="text-3xl font-bold text-center mt-2">
        {" "}
        me can contact me.
      </h2>
      <div className="mt-5 flex gap-10 items-center ml-20 mb-10">
        <img src="/public/new.png" alt="gmail" width={100} />
        <img src="/public/images/whatsapp.png" alt="whatsapp" width={100} />
      </div>
    </>
  );
};

export default FooterLayout;
