import './App.css';
import Toolbar from './Components/Toolbar';
import DisplayOne from './Components/DisplayOne';
import DisplayTwo from './Components/DisplayTwo';

function App() {
  return (
    <div>
      <Toolbar />
      <DisplayOne />
      <div className="xl:px-[70px]">
        <DisplayTwo />
      </div>
    </div>
  );
}

export default App;
