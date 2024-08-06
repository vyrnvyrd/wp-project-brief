import './App.css';
import { FaWhatsapp } from 'react-icons/fa';
import Toolbar from './Components/Toolbar';
import DisplayOne from './Components/DisplayOne';
import DisplayTwo from './Components/DisplayTwo';
import DisplayThree from './Components/DisplayThree';
import DisplayFour from './Components/DisplayFour';
import DisplayFive from './Components/DisplayFive';
import DisplaySix from './Components/DisplaySix';
import DisplaySeven from './Components/DisplaySeven';
import DisplayEight from './Components/DisplayEight';
import Bottom from './Components/Bottom';

function App() {
  return (
    <div>
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
      <div className="py-[80px] flex justify-center">
        <DisplaySeven />
      </div>
      <div className="hidden lg:flex justify-end pb-5 pr-5">
        <div className="cursor-pointer bg-[#009d1a] rounded-[100px] w-[80px] h-[80px] flex justify-center items-center">
          <FaWhatsapp className="text-[55px] text-white" />
        </div>
      </div>
      <DisplayEight />
      <Bottom />
    </div>
  );
}

export default App;
