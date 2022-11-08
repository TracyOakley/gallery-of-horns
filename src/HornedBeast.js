import React from "react";

class HornedBeast extends React.Component{
  render(){
    return(
      <>
      <h2>{this.props.title}</h2>
      <img 
      height = "300px" 
      width = "300px" 
      alt={this.props.description} 
      src={this.props.imageURL}
      title = {this.props.title} />
      <p>{this.props.description} </p>
      </>
    );
  }
}

export default HornedBeast;
