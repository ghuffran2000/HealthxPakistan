"use client";

import Hero from "./components/hero";
import Users from "./components/users";
import About from "./components/about us";
import Solutions from "./components/our solutions";
import Team from "./components/our team";
import App from "./components/App";
import FAQ from "./components/FAQ";
import Partners from "./components/Partners";
import Blogs from "./components/Blogs";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div>
      <Hero/>

      <Users/>

      <About/>

      <Solutions/>

      <Team/>

      <App/>
      
      <FAQ/>

      <Partners/>

      <Blogs/>

      <Footer/>
      
    </div>
  );
}