"use client";
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {getAllProducts} from '../../Api/api';
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

const allProducts = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchFiltered, setSearchFiltered] = useState(products);

    const fetchData = async () => {
      try {
        const data = await getAllProducts();
        console.log('Data:', data); 
        setProducts(data);
      } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
      }
    };
    
    useEffect(() => {
      fetchData();
    }, []);
    // useEffect (()=>{
    //     if(search === ""){
    //         setSearchFiltered(products);
    //     }else{
    //         const searchFiltered = products.filter((product)=>
    //         product.name.toLowerCase().includes(search.toLowerCase())
    //         );
    //         setSearchFiltered(searchFiltered);
    //     }
    // },[products, search]);
    // const handleChange = (event) =>{
    //     setSearch(event.target.value);
    // };

    // const handleClick = (event, id)=>{
    //     event.preventDefault();
    //     Navigation(`/details/${id}`)
    // }
  return (
    //   <div className="m-5 bg-white">
    //   {/* <Search value={search} onChange={handleChange} /> */}
    //   <Row xs={1} md={2} className="g-4">
    //     {searchFiltered.map((product) => (
    //       <Col key={product.codProd}>
    //         {/* <Card onClick={(e) => handleClick(e, product.codProd)}> */}
    //           <Card.Img
    //             variant="top"
    //             src={product.imageUrl[0].url}
    //             width={300}
    //             height={200}
    //           />
    //           <Card.Body>
    //             <Link>
    //               <Card.Title>{product.nombre}</Card.Title>
    //             </Link>
    //             <Card.Text>{product.precio}</Card.Text>
    //           </Card.Body>
    //         {/* </Card> */}
    //        </Col>
    //     ))}
    //   </Row>
    // </div>

    <div>
      {products && products.map((product) => (
        <div
          key={product.codProd}
          className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img
              src={product.imageUrl}
              className="h-full w-full object-cover"
              alt={product.nombre}
            />
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                {product.nombre}
              </p>
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                ${product.precio}
              </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              {product.description}
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>

    // <div>
    //   {products.map((product) => (
    //     <div
    //       key={product.codProd}
    //       className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
    //     >
    //       <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    //         <img
    //           src={product.imageUrl[0].url}
    //           className="h-full w-full object-cover"
    //           alt={product.nombre}
    //         />
    //       </div>
    //       <div className="p-6">
    //         <div className="mb-2 flex items-center justify-between">
    //           <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
    //             {product.nombre}
    //           </p>
    //           <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
    //             ${product.precio}
    //           </p>
    //         </div>
    //         <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
    //           {product.description}
    //         </p>
    //       </div>
    //       <div className="p-6 pt-0">
    //         <button
    //           className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    //           type="button"
    //         >
    //           Add to Cart
    //         </button>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}

export default allProducts
 