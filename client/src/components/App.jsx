import React from 'react';
import '../styles/style.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert/dist/sweetalert.css';
import DevTools from '../containers/DevTools';

const App = props => (
  <div className="container-fluid">
    {props.children}
    {(process.env.NODE_ENV === 'development') ? (<DevTools/>) : (null)}
  </div>
);


export default App;
