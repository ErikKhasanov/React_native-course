import React, { useState } from 'react';
import Layout from './src/layout';
import Page1 from './src/pages/Page1';
import Page2 from './src/pages/Page2';
import Page3 from './src/pages/Page3';

const App = () => {
  const [activePage, setActivePage] = useState(2);
  switch (activePage) {
    case 0:
      return (
        <Layout activePage={activePage} setActivePage={setActivePage}>
          <Page1 />
        </Layout>
      );
    case 1:
      return (
        <Layout activePage={activePage} setActivePage={setActivePage}>
          <Page2 setActivePage={setActivePage} />
        </Layout>
      );
    case 2:
      return (
        <Layout activePage={activePage} setActivePage={setActivePage}>
          <Page3 />
        </Layout>
      );
    default:
  }
};

export default App;
