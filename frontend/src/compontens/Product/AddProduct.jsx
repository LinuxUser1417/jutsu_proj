import React, { useState, useEffect } from "react";
import vk from "../../img/vk.png";
import youtube from "../../img/youtube.png";
import plus from "../../img/plus.png";
import { Form } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useProduct } from "../Context/ProductContextProvider";

const AddProduct = () => {
  const { categories, getCategories, createProduct } = useProduct();

  useEffect(() => {
    getCategories();
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDeescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSave = () => {
    const newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("category", category);
    if (image) {
      newProduct.append("image", image);
    }
    createProduct(newProduct);
  };

  return <div></div>;
};

export default AddProduct;
