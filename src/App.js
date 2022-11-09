
import './App.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import data from "./data.json";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isModalShowing: false,
      modalImage: '',
      modalDescription: ''
    };
  }

  showModal = (image, description) => {
    this.setState({
      isModalShowing: true,
      modalImage: image,
      modalDescription: description
    });
  }

  hideModal = () => {
    this.setState({
      isModalShowing: false
    });
  }

  render(){
    return (
      <>
      <Header />

      <SelectedBeast 
      isModalShowing={this.state.isModalShowing} 
      hideModal={this.hideModal} 
      modalImage={this.state.modalImage} modalDescription={this.state.modalDescription}
      />

      <Main data={data} showModal={this.showModal}/>
      <Footer />
      </>
    );
  }
}

export default App;
