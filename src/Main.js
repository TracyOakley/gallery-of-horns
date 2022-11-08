import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import "./Main.css"

class Main extends React.Component{
  render() {
/*
"_id": 1,
    "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    "title": "UniWhal",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
*/
    let beastArr = [];

    beastArr = data.map((beast)=>{ 
      return(
      <HornedBeast 
      key= {beast._id} 
      image_url= {beast.image_url} 
      title= {beast.title} 
      description= {beast.description} 
      keyword= {beast.keyword} 
      horns= {beast.horns}
      />
    )
    });

    return (
      <main>
        {beastArr}
      </main>
    );
  }
}

export default Main;
