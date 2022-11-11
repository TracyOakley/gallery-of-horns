import React from "react";
//import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SelectHorns extends React.Component{

handleSelect = (e) => {
  this.props.handleNumofHorns(e.target.value);
}

// handleSubmit = (e) => {
//   e.preventDefault();
//   this.handleSelect(e);
// }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
      <Form.Group 
      className="mb-3" 
      controlId="SelectNumofHorns"
      onChange={this.handleSelect}
      >
        <Form.Label>Select Number of Horns</Form.Label>
        <Form.Select id="FilterOption" aria-label="Default select example">
          <option value="">Any Number of Horns</option>
          <option value="1">One Horn</option>
          <option value="2">Two Horns</option>
          <option value="3">Three Horns</option>
          <option value="100">100 Horns</option>
        </Form.Select>
        <Form.Text className="text-muted">
          Choose from Gallery of Horn based on Number of Horns.
        </Form.Text>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> 
      */}

      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
    );
  }
}

export default SelectHorns;
