/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../styles/style.scss';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import Resume from './resume';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // render() {
  //   return (
  //     <Router>
  //       <div>
  //         <NavBar />
  //         <Switch>
  //           <Route exact path="/" component={Home} />
  //           <Route path="/home" component={Home} />
  //           {/* <Route component={FallBack} /> */}
  //         </Switch>
  //       </div>
  //     </Router>
  //   );
  // }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
