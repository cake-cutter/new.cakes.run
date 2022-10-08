import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="rect-1 h-[80vh] w-full py-20">
        <Hero />
      </div>
    </>    
  );
};

export default Home;