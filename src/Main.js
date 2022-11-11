import React from "react";
import HornedBeast from "./HornedBeast";
import "./Main.css"
import data from "./data.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

let beastArr = data;

class Main extends React.Component{
  
  handleNumofHorns = (numOfHorn) => {

    let numOfHorns = parseInt(numOfHorn);
    let filteredArr = [];

    if (numOfHorns === 1) {
      filteredArr = beastArr.filter((b)=>b.horns===1);
      
    } else if (numOfHorns === 2) {
      filteredArr = beastArr.filter((b)=>b.horns===2);

    } else if (numOfHorns === 3) {
      filteredArr = beastArr.filter((b)=>b.horns===3);

    } else if (numOfHorns === 100) {
      filteredArr = beastArr.filter((b)=>b.horns===100);

    } else {
      filteredArr = beastArr;
    }
    return filteredArr;
  }


  render() {

    let newArr = [];
    
    newArr = this.handleNumofHorns(this.props.hornsToDisplay);
  
    let newerArr = newArr.map((beast)=>{ 
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
     <Container fluid>
      <Row>
        {newerArr}
      </Row>
     </Container>
    );
  }
}

export default Main;
