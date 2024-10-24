import { json } from "react-router-dom";
import Button from "../element/button";
import { useEffect, useRef, useState } from "react";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow my-2 justify-between mr-5 flex flex-col mt-10 mb-10 ml-4">
      {children}
    </div>
  );
};

const ImageContent = (props) => {
  const { image, title } = props;

  return (
    <div className="rounded-lg p-8 h-60 w-60 items-center">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover rounded-lg"
      />
    </div>
  );
};

const ContentText = (props) => {
  const { judul, children, kategory1, kategory2, id, image } = props;

  const cardRef = useRef([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("card")) || [];

    if (Array.isArray(storedData)) {
      cardRef.current = storedData;
    } else {
      console.error("Data tidak valid, menginisialisasi dengan array kosong.");
      cardRef.current = [];
    }
  }, []);
  const handleAddToCartRef = () => {
    const storedData = JSON.parse(localStorage.getItem("card")) || [];

    const existingProduct = storedData.find((prod) => prod.id === id);

    if (existingProduct) {
      existingProduct.qty++; // Jika produk sudah ada, tambah jumlah
    } else {
      storedData.push({
        id,
        title: judul,
        category: kategory1,
        price: kategory2,
        image: image, // Pastikan kamu menyimpan gambar juga
        qty: 1,
      });
    }

    // Simpan kembali data yang telah diperbarui ke localStorage
    localStorage.setItem("card", JSON.stringify(storedData));
  };
  return (
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{judul}</div>
      <p className="text-gray-700 text-base">{children}</p>
      <div className="px-6 pt-2 pb-2 justify-start flex text-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 justify-start flex justify-center">
          #{kategory1}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 justify-start flex w-20 h-8 justify-center">
          $. {kategory2}
        </span>
      </div>
      <div className="flex justify-end">
        <Button onClick={() => handleAddToCartRef()}>Card</Button>
      </div>
    </div>
  );
};

CardProduct.ImageContent = ImageContent;
CardProduct.ContentText = ContentText;
export default CardProduct;
