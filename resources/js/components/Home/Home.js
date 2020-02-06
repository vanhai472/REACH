import React, {Component} from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavHeader from '../Nav/Nav';
import Banner from '../Banner/Banner';
import Main from '../Main/Main';
import Enrollment from '../Enrollment/Enrollment';
import Tintuc from '../tintuc/tintuc';
import Paradigm from '../paradigm/Paradigm';
import Training from '../training-program/training-program';
import Create from '../all-form/formCreate/create';






class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }
  // check if user is authenticated and storing authentication data as states if true
  componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
    }
  }
render() {
    return (
      <div>
        <NavHeader />
        <Banner />
        <Create />
        <Main />
        <Tintuc />
      <Enrollment />
      <Paradigm />
      <Training />

        <Footer/>
      </div>
      )
    }
  }
export default Home