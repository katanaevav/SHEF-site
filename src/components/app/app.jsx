import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from "../main/main/main.jsx";
import PageHeader from "../page-header/page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer/page-footer.jsx";

import {Screens} from "../../const.js"

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: Screens.MAIN_SCREEN,
    };

  }

  _renderApp() {
    const {currentPage} = this.state;

    switch (currentPage) {
      case Screens.ONLINE_COOKING_SCREEN:
        return (
          <React.Fragment>
            <PageHeader
              totalCost = {200}
            />
            <PageFooter />
          </React.Fragment>
        );

      case Screens.CATERING_SCREEN:
        return (
          <React.Fragment>
            <PageHeader
              totalCost = {300}
            />
            <PageFooter />
          </React.Fragment>
        );

      case Screens.FOODS_SCREEN:
        return (
          <React.Fragment>
            <PageHeader
              totalCost = {400}
            />
            <PageFooter />
          </React.Fragment>
        );

      case Screens.CART_SCREEN:
        return (
          <React.Fragment>
            <PageHeader
              totalCost = {500}
            />
            <PageFooter />
          </React.Fragment>
        );



      default:
        return (
          <React.Fragment>
            <PageHeader
              totalCost = {100}
            />
            <Main />
            <PageFooter />
          </React.Fragment>
        );
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          {/* <Route exact path="/sign-in">
            <PageSignIn />
          </Route> */}
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
