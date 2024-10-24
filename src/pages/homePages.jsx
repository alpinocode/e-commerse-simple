import { useEffect, useState } from "react";
import FooterLayout from "../components/layout/FooterLayout";
import NavbarLayout from "../components/layout/NavbarLayout";
import { getProducts } from "../services/getProduct";
import CardProduct from "../components/fragment/Card";
import Search from "../components/element/Searc";
import ProductList from "../components/element/ProductList";

// import ProductList from "../components/element/ProductList";

const HomePage = () => {
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProduct(data);
      setFilteredProducts(data);
    });
  }, []);

  const handleFilter = (
    selectedPrice,
    selectedCategory,
    selectedPopularity
  ) => {
    let filtered = product;

    if (selectedPrice) {
      filtered = filtered.filter(
        (prod) => prod.price === Number(selectedPrice)
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((prod) => prod.category === selectedCategory);
    }

    if (selectedPopularity) {
      filtered = filtered.filter(
        (prod) => prod.rating.rate === Number(selectedPopularity)
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    if (search !== "") {
      const result = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase().trim())
      );
      setSearchResult(result);
    } else {
      setSearchResult(filteredProducts);
    }
  }, [filteredProducts, search]);

  return (
    <>
      <NavbarLayout product={search} />
      <div className="className=flex bg-[rgb(47,51,73)] h-full">
        <div className="flex justify-between flex-wrap">
          <ProductList onFilter={handleFilter} />
          <div className="flex mt-10 ml-10 justify-end mr-20">
            <Search onChange={(e) => setSearch(e.target.value)}></Search>
          </div>
        </div>

        <div className="flex flex-wrap ml-6 ">
          {searchResult.map((produc) => (
            <CardProduct key={produc.id}>
              <CardProduct.ImageContent image={produc.image} />
              <CardProduct.ContentText
                judul={produc.title}
                kategory1={produc.category}
                kategory2={produc.price}
                id={produc.id}
                image={produc.image}
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
