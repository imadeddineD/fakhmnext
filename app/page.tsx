

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/Home";
import Products from "@/components/Products";
import Whats from "@/components/Whats";
import { db } from "@/lib/db";


export default async function Home() {

  const product = await db.product.findMany({
    orderBy: {
        createdAt: 'desc'
    }
});

  const categories = await db.categories.findMany({
    orderBy: {
        createdAt: 'desc'
    }
});

  const home = await db.home.findMany({
    orderBy: {
        createdAt: 'desc'
    }
});

  const about = await db.about.findMany({
    orderBy: {
        createdAt: 'desc'
    }
});

const formattedProducts : any = product.map((item) => ({
    id: item.id,
    label: item.name,
    price  : item.price ,
    imageUrl  : item.imageUrl ,
    categoryId : item.categoryId
}))

const formattedCategories : any = categories.map((item) => ({
    id: item.id,
    label: item.name,
}))

const formattedHome : any = home.map((item) => ({
    id: item.id,
    label: item.label,
    description: item.description,
    imageUrl: item.imageUrl,
}))

const formattedAbout : any = about.map((item) => ({
    id: item.id,
    imageUrl: item.imageUrl,
    description: item.description,
}))

console.log("this is the products : ")
console.log(formattedProducts)

console.log("this is the Categories : ")
console.log(formattedCategories)




  return (
    <body className="">
      <Header/>
      <HomePage data={formattedHome}/>
      <About data={formattedAbout}/>
      <Products 
      products={formattedProducts} categories={formattedCategories}
      />
      <Contact/>
      <Whats/>
      <Footer/>
    </body>
  );
}
