import Header from './components/Header';
import Feed from './components/Feed';
import Content from './components/Content';
import './App.css';
import Overseers from './components/Overseers';

function App() {
  return (
    <div className="container">
      <div className="header"><Header /></div>
      <div className="section"><Feed /></div>
      <div className="overseers"><Overseers /></div>
      <div className="content"><Content /></div>
    </div>
  );
}

export default App;
