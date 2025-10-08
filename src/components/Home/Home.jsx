import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import LatestProduct from "./LatestProduct";
import MasalBanner from "./Banner";
import FeaturedCategories from "../Featured/FeaturedCategory";
import BestSellers from "../bestseller/BestSeller";

function Home() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [categories, setCategories] = React.useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URI}/products`);


      const data = await response.json();
      setProducts(data.products);


    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }
  console.log(`${import.meta.env.VITE_API_URI}/categories`);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URI}/categories`);
      // console.log(response);

      const data = await response.json();
      setCategories(data.categories);

      // console.log("Fetched categories:", data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <Layout>
      <MasalBanner />
      <LatestProduct products={products} loading={loading} />
      <FeaturedCategories categories={categories} loading={loading} />
      <BestSellers products={products} />
    </Layout>
  );
}

export default Home;
