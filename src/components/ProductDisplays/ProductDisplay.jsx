import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addProductToCart } = useContext(ShopContext);

  return (
    <>
      <div className="flex  mr-[120px] "></div>

      <div className=" flex justify-center gap-10 mb-[120px]">
        {/* imageList */}

        <div className="flex flex-col">
          <div className="flex justify-center border-[1px] border-gray-300 mb-2 w-[803px] h-[1006px] mt-[83px]">
            <img src={product.productImage1} alt="" />
          </div>
          <div className="flex gap-[14.5px] ">
            <div className=" w-[149px] h-[202px] border-[1px] border-gray-300 ">
              <img
                src={
                  product.productImage2
                    ? product.productImage2
                    : product.productImage1
                }
                alt=""
              />
            </div>
            <div className=" w-[149px] h-[202px] border-[1px] border-gray-300 ">
              <img
                src={
                  product.productImage3
                    ? product.productImage3
                    : product.productImage1
                }
                alt=""
              />
            </div>
            <div className=" w-[149px] h-[202px] border-[1px] border-gray-300 ">
              <img
                src={
                  product.productImage4
                    ? product.productImage4
                    : product.productImage1
                }
                alt=""
              />
            </div>
            <div className=" w-[149px] h-[202px] border-[1px] border-gray-300 ">
              <img
                src={
                  product.productImage5
                    ? product.productImage5
                    : product.productImage1
                }
                alt=""
              />
            </div>
            <div className=" w-[149px] h-[202px] border-[1px] border-gray-300 ">
              <img
                src={
                  product.productImage6
                    ? product.productImage6
                    : product.productImage1
                }
                alt=""
              />
            </div>
          </div>
        </div>
        {/* DESCRIPTION PART */}
        <div>
          <div className="flex justify-end my-4">
            <button className=" w-[200px] h-[50px] bg-teal-900 text-white font-thin rounded-xl hover:bg-teal-300  focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform active:bg-green-200 active:text-black">
              EDIT PRODUCT
            </button>
          </div>

          <div className=" w-[591px] h-[1218px] border-[1px] border-gray-300 pt-20 px-12 rounded-lg bg-gray-200 font-thin">
            <div className=" font-medium text-[25px]">
              {product.productName}
            </div>
            <div className=" text-[13px] text-gray-400 ">
              {product.gender}/{product.productType}
            </div>
            <div className=" text-[25px] mt-12">$ {product.price}</div>

            <div className=" m-auto w-[85%] h-[2px] bg-gray-300 my-3"></div>

            <div className=" min-h-[250px]">
              <big>Description</big>
              <li className=" text-sm mt-2">{product.description}</li>
            </div>
            <div className=" m-auto w-[85%] h-[2px] bg-gray-300 my-3"></div>

            <hr />
            <h1 className=" text-[20px] mb-5">Select Size</h1>
            <div>
              <div className=" flex gap-2 mb-5">
                <div>
                  <button className=" w-[50px] h-[50px] border-[2px] border-gray-300 flex justify-center items-center cursor-pointer focus:ring-4 focus:ring-green-200 focus:bg-green-100 active:scale-y-75 transition-transform">
                    S
                  </button>
                </div>
                <div>
                  <button className=" w-[50px] h-[50px] border-[2px] border-gray-300 flex justify-center items-center cursor-pointer focus:ring-4 focus:ring-green-200 focus:bg-green-100 active:scale-y-75 transition-transform">
                    M
                  </button>
                </div>
                <div>
                  <button className=" w-[50px] h-[50px] border-[2px] border-gray-300 flex justify-center items-center cursor-pointer focus:ring-4 focus:ring-green-200 focus:bg-green-100 active:scale-y-75 transition-transform">
                    L
                  </button>
                </div>
                <div>
                  <button className=" w-[50px] h-[50px] border-[2px] border-gray-300 flex justify-center items-center cursor-pointer focus:ring-4 focus:ring-green-200 focus:bg-green-100 active:scale-y-75 transition-transform">
                    XL
                  </button>
                </div>
                <div>
                  <button className=" w-[50px] h-[50px] border-[2px] border-gray-300 flex justify-center items-center cursor-pointer focus:ring-4 focus:ring-green-200 focus:bg-green-100 active:scale-y-75 transition-transform">
                    XXL
                  </button>
                </div>
              </div>
              <div className="flex jc">
                <button
                  onClick={() => {
                    addProductToCart(product.id);
                  }}
                  className="bg-[#1A4242] text-sm text-white font-light w-[350px] h-[50px] rounded-lg shadow-lg shadow-[#CAFFDC] mt-5  hover:bg-teal-300 focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform active:bg-green-200 active:text-black"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* details */}
      </div>
    </>
  );
};

export default ProductDisplay;
