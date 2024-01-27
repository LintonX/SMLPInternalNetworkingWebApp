import './App.css';

import Layout from './components/Layout/Layout';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar>Im The Navbar</NavBar>
      <Layout></Layout>
    </div>
  );
}

export default App;
