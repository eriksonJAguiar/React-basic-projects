import React, { Component } from 'react';
import Header from './components/Header';
import './style.css';
import Main from './pages/main';
import Routes from './routes';

const App = () => (
  <div className="App">
         <Header />
         <Routes />
      </div>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//          <Header />
//       </div>
//     );
//   }
// }

export default App;
