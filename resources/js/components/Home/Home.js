import React, {Component} from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavHeader from '../Nav/Nav';
import Banner from '../Banner/Banner';
import SuMenh from '../SuMenh/SuMenh';
import Tintuc from '../Tintuc/Tintuc';
import Enrollment from '../enrollment/Enrollment';




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
        <SuMenh />
        <Tintuc />
        <Enrollment />
        <Footer/>
      </div>
      )
    }
  }
export default Home