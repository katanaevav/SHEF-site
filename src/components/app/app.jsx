import React from "react";

import Main from "../main/main/main.jsx";
import PageHeader from "../page-header/page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer/page-footer.jsx";

const App = (props) => {
  return (
    <React.Fragment>

      <PageHeader
        totalCost = {220}
      />

      <Main />

      <PageFooter />

    </React.Fragment>
  );
};

export default App;
