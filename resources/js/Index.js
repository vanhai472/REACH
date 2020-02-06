import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Main from './Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


class Index extends Component {

  render() {
    const styleObject = {backgroundColor: '#eeeeee'}

    
    return (
      
      <BrowserRouter>
      <div style={styleObject}>
        <Route component={Main} />
        </div>
      </BrowserRouter>

    );
  }
}
ReactDOM.render(<Index/>, document.getElementById('index'));