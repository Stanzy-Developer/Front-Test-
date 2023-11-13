import React from "react";
import Nav from "./component/Nav";
import Sidebar from "./component/Sidebar";
import UserTraffic from "./component/UserTraffic";
import UserLocation from "./component/UserLocation";
import ConverterRate from "./component/ConverterRate";
import WebsiteAnalytic from "./component/WebsiteAnalytic";
import "./index.css";

const Home = () => {
  return (
    <div className="px-10">
      <section>
        <Nav />
      </section>
      <section className="block md:flex justify-start items-center gap-[28px]">
        <Sidebar />
        <UserTraffic />
      </section>
      <section className="block md:flex items-center gap-[27px] mt-[28px]">
        <UserLocation />
        <ConverterRate />
        <WebsiteAnalytic />
      </section>
    </div>
  );
};

export default Home;
