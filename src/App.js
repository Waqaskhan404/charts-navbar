import './App.css';
import CardBarChart from './component/CardBarChart';
import CardLineChart from './component/CardLineChart';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CardLineChart/>
      {/* <br></br>
      <br></br>
      <CardBarChart/> */}
      
    </div>
  );
}

export default App;
