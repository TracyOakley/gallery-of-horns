import React from "react";
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      likes:0,
    };
  }

  handleClick = () => {
    this.props.showModal(this.props.image_url,this.props.description);
    this.setState({
      likes: this.state.likes + 1
    });
  };

  render(){
/*This is from the Main.js for each HornedBeast
      _id= {beast._id} 
      image_url= {beast.image_url} 
      title= {beast.title} 
      description= {beast.description} 
      keyword= {beast.keyword} 
      horns= {beast.horns}
*/

    return(
    <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img onClick = {this.handleClick} variant="top" src={this.props.image_url} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.description}
        </Card.Text>
        <p>❤️ {this.state.likes}</p>
      </Card.Body>
    </Card>
  
      {/* <h2>{this.props.title}</h2>
      <img 
      onClick = {this.handleClick}
      height = "300px" 
      width = "300px" 
      alt={this.props.description} 
      src={this.props.image_url}
      title = {this.props.title} />
      <p>{this.props.description} </p>
      <p>❤️ {this.state.likes}</p>
       */}
      </Col>
    );
  }
}

export default HornedBeast;
