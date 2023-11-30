import './App.css';
import clickLogo from './images/clickLogo.png';
import Counter from './componens/Counter';
import Button from './componens/Button';
import { useState } from 'react';


function App() {
    const [clicksNum, setclicksNum ]= useState(0);
    const clickManage = () => {
     setclicksNum(clicksNum + 1); 
    }
    const restart = () => {
      setclicksNum(0); 
    }
  return (
    <div className="App">
      <div className='logo-container'>
        <img
        className='logo'
        src={clickLogo}
        alt='Counter Logo'
        />
      </div>
      <div className='counter-container'>
        <Counter
        clicksNum={clicksNum}/>
        <Button
        text ='Click'
        isclickButton={true}
        clickManage = {clickManage}
        />
        <Button
        text ='Restart'
        isclickButton={false}
        clickManage = {restart}
        />
      </div>
    </div>
  );
}

export default App;
