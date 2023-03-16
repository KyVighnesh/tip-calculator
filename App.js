import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Output } from './Output';
import { Input } from './Input';
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">

      <div id='app-child'>

      <Header />

      <Input />

      <Footer />
      
    </div>


    </div>
  );
}

export default App;
