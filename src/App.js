import './App.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import SelectHorns from './SelectHorns';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isModalShowing: false,
      modalImage: '',
      modalDescription: '',
      hornsToDisplay: ''
    };
  }

  handleNumofHorns = (numOfHorns) => {
    this.setState({
      isModalShowing: this.state.isModalShowing,
      modalImage: this.state.modalImage,
      modalDescription: this.state.modalDescription,
      hornsToDisplay: numOfHorns
    });
    console.log(numOfHorns);

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

      <SelectHorns 
      handleNumofHorns={this.handleNumofHorns}
      />

      <SelectedBeast 
      isModalShowing={this.state.isModalShowing} 
      hideModal={this.hideModal} 
      modalImage={this.state.modalImage} modalDescription={this.state.modalDescription}
      />

      <Main 
      //data={data} 
      showModal={this.showModal}
      hornsToDisplay={this.state.hornsToDisplay}
      />
      <Footer />
      </>
    );
  }
}

export default App;
