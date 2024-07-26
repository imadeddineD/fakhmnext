import coldcaffee from '../public/coldcaffee.webp'
import hotcaffee from "../public/hotcaffee.jpg"
import icekard from "../public/icekarkedieh.jpg"
import cold from "../public/coldv60.jpeg"
import coldest from "../public/coldestv60.jpeg"
import cokkies from "../public/cokkies.jpg"
import cheese from '../public/cheesmakloub.jpg'
import bodii from "../public/bodingmango.webp"
import traffle from '../public/traffelmango.jpg'


// const Products = () => {
//   return (
//     <section className="products container" id="products">
//          <div className="heading">
//              <h2>منتجاتنا الأكثر مبيعا</h2>
//              <p>يتطلب الأمر الكثير من الجهد والعمل الجاد في كل خطوة لصنع أفضل قهوة ممكنة، ونحن نعلم أن الأمر يتطلب الكثير من المثابرة للحفاظ على استمرارية شبكتك الخاصة.</p>
//          </div>

//          <h3>مشروبات</h3>
//           <div className="product-content">
//              <div className="product-box">
//                 <Image src={coldcaffee} alt=""/>
//                 <h2>قهوة اليوم بارد</h2>
//                 <div className="product-info">
//                     <span>14$</span>
//                 </div>
//              </div>
//              <div className="product-box">
//              {/* <FaRegHeart  className="bx bx-heart heart-icon"/> */}
//                 <Image src={hotcaffee} alt=""/>
//                 <h2>قهوة اليوم حار</h2>
//                 <div className="product-info">
//                     <span>14$</span>
//                     {/* <FaShoppingBag className="bx bx-shopping-bag"/> */}
//                 </div>
//              </div>
//              <div className="product-box">
//              {/* <FaRegHeart  className="bx bx-heart heart-icon"/> */}
//                 <Image src={icekard} alt=""/>
//                 <h2>ايس كركديه</h2>
//                 <div className="product-info">
//                     <span>14$</span>
//                     {/* <FaShoppingBag className="bx bx-shopping-bag"/> */}
//                 </div>
//              </div>
//              <div className="product-box">
//              {/* <FaRegHeart  className="bx bx-heart heart-icon"/> */}
//                 <Image src={cold} alt=""/>
//                 <h2>V60 حار</h2>
//                 <div className="product-info">
//                     <span>14$</span>
//                     {/* <FaShoppingBag className="bx bx-shopping-bag"/> */}
//                 </div>
//              </div>
//              <div className="product-box">
//              {/* <FaRegHeart  className="bx bx-heart heart-icon"/> */}
//                 <Image src={coldest} alt=""/>
//                 <h2>V60 بارد</h2>
//                 <div className="product-info">
//                     <span>14$</span>
//                     {/* <FaShoppingBag className="bx bx-shopping-bag"/> */}
//                 </div>
//              </div>
//           </div>


//          <h3>حلويات</h3>
//           <div className="product-content">
//              <div className="product-box">
//              {/* <FaRegHeart  className="bx bx-heart heart-icon"/> */}
//                 <Image src={cokkies} alt=""/>
//                 <h2>كوكيز</h2>
//                 <div className="product-info">
//                     <span>14$</span>
//                     {/* <FaShoppingBag className="bx bx-shopping-bag"/> */}
//                 </div>
//              </div>
//              <div className="product-box">
//              {/* <FaRegHeart  className="bx bx-heart heart-icon"/> */}
//                 <Image src={cheese} alt=""/>
//                 <h2>شييز المقلوب</h2>
//                 <div className="product-info">
//                     <span>14$</span>
//                     {/* <FaShoppingBag className="bx bx-shopping-bag"/> */}
//                 </div>
//              </div>
//              <div className="product-box">
//                 {/* <FaRegHeart  className="bx bx-heart heart-icon"/> */}
//                 <Image src={bodii} alt=""/>
//                 <h2>بودينغ مانجو</h2>
//                 <div className="product-info">
//                     <span>14$</span>
//                     {/* <FaShoppingBag className="bx bx-shopping-bag"/> */}
//                 </div>
//              </div>
//              <div className="product-box">
//                 {/* <FaRegHeart  className="bx bx-heart heart-icon"/> */}
//                 <Image src={traffle} alt=""/>
//                 <h2>ترافل مانجو</h2>
//                 <div className="product-info">
//                     <span>14$</span>
//                     {/* <FaShoppingBag className="bx bx-shopping-bag"/> */}
//                 </div>
//              </div>
            
//           </div>
//      </section>

//   )
// }

// export default Products

import Image from 'next/image'
import React from 'react'
import { FaRegHeart, FaShoppingBag } from 'react-icons/fa'

interface Product {
  id: string;
  label: string;
  price: number;
  imageUrl: string;
  categoryId: string;
}

interface Category {
  id: string;
  label: string;
}

interface ProductsProps {
  products: Product[];
  categories: Category[];
}

const Products: React.FC<ProductsProps> = ({ products, categories }) => {
  return (
    <section className="products container" id="products">
      <div className="heading">
        <h2>منتجاتنا الأكثر مبيعا</h2>
        <p>يتطلب الأمر الكثير من الجهد والعمل الجاد في كل خطوة لصنع أفضل قهوة ممكنة، ونحن نعلم أن الأمر يتطلب الكثير من المثابرة للحفاظ على استمرارية شبكتك الخاصة.</p>
      </div>

      {categories.map((category) => (
        <React.Fragment key={category.id}>
          <h3>{category.label}</h3>
          <div className="product-content">
            {products.filter(product => product.categoryId === category.id).map(product => (
              <div className="product-box" key={product.id}>
                <Image src={product.imageUrl} alt={product.label} width={200} height={200} />
                <h2>{product.label}</h2>
                <div className="product-info">
                  <span>{product.price}SAR</span>
                  {/* <FaRegHeart className="bx bx-heart heart-icon" />
                  <FaShoppingBag className="bx bx-shopping-bag" /> */}
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </section>
  );
}

export default Products;
