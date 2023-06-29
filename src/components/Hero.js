import React, { useEffect, useState } from "react";
import "./Hero.css";

import { apiUrl, filterData1, filterdata2 } from "./data";
import Quests from "./Quests";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Spinner from "./Spinner";
const Hero = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  //fetch api data
  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      setProjects(output.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  //   const [nextUrl, setNexturl] = useState([]);
  //   const [prevUrl, setPrevUrl] = useState();

  //   const fetchData = async () => {
  //     setLoading(true);
  //     const res = await axios.get(url);
  //     // console.log(res.data.previous);

  //     setNexturl(res.data.next);
  //     setPrevUrl(res.data.previous);
  //     getProjects(res.data.results);
  //     setLoading(false);
  //     console.log(setProjects);
  //   };
  //   const getProjects = async (res) => {
  //     res.map(async (item) => {
  //       // console.log(item.id );

  //       const result = await axios.get(url);
  //       // console.log(result.data.results);

  //       setProjects((state) => {
  //         state = [...state, result];
  //         return state;
  //       });
  //     });
  //   };
  //   useEffect(() => {
  //     fetchData();
  //   }, [url]);
  return (
    <div className="hero">
      <div className="emptSpace"></div>
      <div>
        <Quests />
      </div>
      <div className="heroContent">
        <div>
          {/* getting data of navbar */}
          <Navbar filterData1={filterData1} filterData2={filterdata2} />
        </div>
        <div className="gap"></div>
        <div className="main">
          {/* Showing loading till content loads and passisng props  */}
          {loading ? <Spinner /> : <Cards projects={projects} />}
        </div>
      </div>
    </div>
  );
};

export default Hero;
