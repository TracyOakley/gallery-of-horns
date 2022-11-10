import React from "react";
import HornedBeast from "./HornedBeast";
import "./Main.css"


class Main extends React.Component{
  render() {

    let beastArr = [];

    beastArr = this.props.data.map((beast)=>{ 
      return(
      <HornedBeast 
      showModal = {this.props.showModal}
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
