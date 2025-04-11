import MainBox from "./componets/MainBox";
import Navbar from "./componets/Navbar";
import "dotenv/config";

require("dotenv").config();

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <span>{process.env.API_KEY} + "hello"</span> */}
      <div className="mt-10">
        <MainBox />
      </div>
    </>
  );
}
