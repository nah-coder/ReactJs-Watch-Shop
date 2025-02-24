import { Fragment } from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import {publicRoutes} from './routes'
import DefaultLayout from "./component/Layout/DefaultLayout/DefaultLayout";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route,index)=>{
              // const Layout = route.layout || DefaultLayout;
              let Layout = DefaultLayout
              if(route.layout){
                Layout= route.layout
              } else if(route.layout===null){
                Layout=Fragment
              }
              const Page = route.component
              return <Route key={index} path={route.path} element={<Layout><Page /></Layout> } />
            })
          }
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
