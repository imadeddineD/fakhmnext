import getAbout from "@/actions/getAbout";
import getCategories from "@/actions/getCategories";
import getHome from "@/actions/getHome";
import getProducts from "@/actions/getProducts";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/Home";
import Products from "@/components/Products";
import Whats from "@/components/Whats";
import { db } from "@/lib/db";


export default async function Home() {

  const products = await getProducts()

  const categories = await getCategories()

  const home  = await getHome()

  const about = await getAbout()


  console.log(categories)



  return (
    <body className="">
      <Header/>
      <HomePage data={home}/>
      <About data={about}/>
      <Products products={products} categories={categories}/>
      <Contact/>
      <Whats/>
      <Footer/>
    </body> 
  );
}
