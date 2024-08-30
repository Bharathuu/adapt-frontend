import Header from './components/Header';
import SideBar from './components/SideBar';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';

import './App.css';

function App() {
 
  return (
    <div className="App">
      <Header/>
      <div className='app-content'>
      <SideBar/>
      <PieChart/>
      <LineChart/>
      </div>

    </div>
  );
}

export default App;
