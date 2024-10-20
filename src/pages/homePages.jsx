import { useEffect, useState } from "react";
import FooterLayout from "../components/layout/FooterLayout";
import NavbarLayout from "../components/layout/NavbarLayout";
import { getProducts } from "../services/getProduct";
import CardProduct from "../components/fragment/Card";
import Search from "../components/element/button/Searc";
import { data } from "autoprefixer";

const HomePage = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProduct(data);
    });
  }, []);

  useEffect(() => {
    if (search !== "") {
      const result = product.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase().trim())
      );
      // const filteredResult = result.toLowerCase().trim();
      // console.log("Cek Data Apakah huruf kecil", filteredResult);
      setSearchResult(result);
    } else {
      setSearchResult(product);
    }
  }, [product, search]);

  console.log(search);
  return (
    <>
      <NavbarLayout />
      <div className="className=flex bg-[rgb(47,51,73)] h-full">
        <div className="flex justify-end">
          <Search onChange={(e) => setSearch(e.target.value)}></Search>
        </div>

        <div className="flex flex-wrap ml-6 ">
          {searchResult.map((produc) => (
            <CardProduct key={produc.id}>
              <CardProduct.ImageContent image={produc.image} />
              <CardProduct.ContentText
                judul={produc.title}
                kategory1={produc.category}
                kategory2={produc.price}
              >
                {produc.description.substring(0, 100)} ...
              </CardProduct.ContentText>
            </CardProduct>
          ))}
        </div>
      </div>
      <FooterLayout />;
    </>
  );
};

export default HomePage;
