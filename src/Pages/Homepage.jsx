import { Link } from "react-router-dom";
import bannerBg from "../../images/Homepage/bannerBg.png";
import NewRelease from "../layout/NewRelease";
import Trending from "../layout/Trending";
import TrendingData from "../components/TrendingData/TrendingData";
import NewReleaseData from "../components/NewReleaseData/NewReleaseData";

export default function Homepage() {
  return (
    <>
      <div className=" w-screen flex-col ">
        <img
          src={bannerBg}
          alt=""
          className=" mx-auto w-full min-w-[1609px] relative z-0 hover:invert"
        />
        <div className=" w-[1609px] mx-auto">
          <NewRelease />
          <Trending />

          <div className="flex justify-center mt-20 mb-[200px]">
            <Link to="/shops">
              <button className="bg-[#1A4242] text-sm text-white font-light w-[350px] h-[50px] rounded-lg shadow-lg shadow-[#CAFFDC]  hover:bg-teal-300 focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform active:bg-green-200 active:text-black">
                View all products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
// relative top-[-996px]
