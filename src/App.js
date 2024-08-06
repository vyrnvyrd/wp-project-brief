import './App.css';
import Toolbar from './Components/Toolbar';
import DisplayOne from './Components/DisplayOne';
import DisplayTwo from './Components/DisplayTwo';
import DisplayThree from './Components/DisplayThree';
import DisplayFour from './Components/DisplayFour';

function App() {
  return (
    <div className="mb-10">
      <Toolbar />
      <DisplayOne />
      <div className="xl:px-[70px]">
        <DisplayTwo />
        <DisplayThree />
        <DisplayFour />
      </div>
    </div>
  );
}

export default App;
