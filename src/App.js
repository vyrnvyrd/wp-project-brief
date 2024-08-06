import './App.css';
import Toolbar from './Components/Toolbar';
import DisplayOne from './Components/DisplayOne';
import DisplayTwo from './Components/DisplayTwo';
import DisplayThree from './Components/DisplayThree';
import DisplayFour from './Components/DisplayFour';
import DisplayFive from './Components/DisplayFive';
import DisplaySix from './Components/DisplaySix';
import DisplaySeven from './Components/DisplaySeven';

function App() {
  return (
    <div className="mb-10">
      <Toolbar />
      <DisplayOne />
      <div className="xl:px-[70px]">
        <DisplayTwo />
        <DisplayThree />
        <DisplayFour />
        <DisplayFive />
      </div>
      <div className="bg-[#F7F7F7] xl:px-[70px]">
        <DisplaySix />
      </div>
      <div className="py-[100px] flex justify-center">
        <DisplaySeven />
      </div>
    </div>
  );
}

export default App;
