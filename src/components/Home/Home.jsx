import React from "react";
import Layout from "../Layout/Layout";
import LatestProduct from "./LatestProduct";
import MasalBanner from "./Banner";
import FeaturedCategories from "../Featured/FeaturedCategory";
import BestSellers from "../bestseller/BestSeller";

function Home() {
  return (
    <Layout>
      <MasalBanner />
      <LatestProduct />
      <FeaturedCategories />
      <BestSellers />
    </Layout>
  );
}

export default Home;
