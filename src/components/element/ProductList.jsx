import { useEffect, useState } from "react";
import { getProducts } from "../../services/getProduct";

const ProductList = ({ onFilter }) => {
  const [price, setPrice] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [popularity, setPopularity] = useState([]);
  const [selectedPopularity, setSelectedPopularity] = useState("");

  useEffect(() => {
    getProducts((data) => {
      const uniquePrice = Array.from(new Set(data.map((prod) => prod.price)));
      const uniqueCategories = Array.from(
        new Set(data.map((prod) => prod.category))
      );
      const uniquePopularity = Array.from(
        new Set(data.map((prod) => prod.rating.rate))
      );

      setPrice(uniquePrice);
      setCategories(uniqueCategories);
      setPopularity(uniquePopularity);
    });
  }, []);

  useEffect(() => {
    // Panggil onFilter setiap kali ada perubahan pada filter
    onFilter(selectedPrice, selectedCategory, selectedPopularity);
  }, [selectedPrice, selectedCategory, selectedPopularity]);

  return (
    <div className="flex gap-10 justify-center mt-10 ml-10">
      <form action="">
        <label
          htmlFor="price-select"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Price
        </label>
        <select
          id="price-select"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-black rounded-lg"
        >
          <option value="">All Prices</option>
          {price.map((price, index) => (
            <option value={price} key={index}>
              {price}
            </option>
          ))}
        </select>
      </form>
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="category-select"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Category
        </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </form>

      <form className="max-w-sm mx-auto">
        <label
          htmlFor="popularity-select"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Popularity
        </label>
        <select
          id="popularity-select"
          value={selectedPopularity}
          onChange={(e) => setSelectedPopularity(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
        >
          <option value="">All Ratings</option>
          {popularity.map((pop, index) => (
            <option key={index} value={pop}>
              {pop}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default ProductList;
