import React, { Component } from "react";
import Header from './component/Header/Header';
import Blocks from './component/Blocks/Blocks';
import Input from './component/Inputs/Input.js';
import Draft from './component/draft/Draft';
import { BrowserRouter as  Router ,Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
         <Switch>
        <div className="global-wrap">
          <Header />
          
          <section className="common-blocks">
          <Route exact path="/">
            <div className="blocks-wrap">
            <Blocks className="com-blocks1 " value="Profit & Loss"/>
            <Blocks className="com-blocks2 " value="Profit & Loss"/>
            <Blocks className="com-blocks3 " value="others" />
            </div>
            <Input /> 
            </Route>
            <Route path="/Save draft">
              <Draft />
          </Route>
          </section>
        </div>
        </Switch>
        </Router>
    );
  }
};

export default App;
