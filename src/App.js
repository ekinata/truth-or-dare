import { useRef, useState } from 'react';
import './App.css';

function App() {

  const bottle = useRef();
  const soundIcon = useRef();
  const [lastdeg, setLastdeg] = useState();
  const [lastref, setLastref] = useState();

  const spin = () => {
    const audio = document.querySelector('audio');
    audio.currentTime = 0;
    audio.play();
    const deg = lastdeg ? lastdeg + 1440 + Math.floor(Math.random() * 360) : 1440 + Math.floor(Math.random() * 360);
    bottle.current.style.transition = 'all 5s ease-out';
    bottle.current.style.transform = `rotate(${deg}deg)`;
    bottle.current.style.transformOrigin = 'center';
    const kalan = lastdeg ? (deg-lastdeg+lastref) % 360 : deg % 360;

    console.log(kalan);

    if (kalan >= 0 && kalan < 90) {
      console.log('green');
    }
    else if (kalan >= 90 && kalan < 180) {
      console.log('blue');
    }
    else if (kalan >= 180 && kalan < 270) {
      console.log('red');
    }
    else if (kalan >= 270 && kalan < 360) {
      console.log('yellow');
    }

    setLastdeg(deg);
    setLastref(kalan);
  }

  const sound = () => {
    
    const audioSetting = soundIcon.current.classList.contains('fa-volume-high');

    if (audioSetting) {
      soundIcon.current.classList.remove('fa-volume-high');
      soundIcon.current.classList.remove('text-dark');
      soundIcon.current.classList.add('fa-volume-xmark');
      soundIcon.current.classList.add('text-danger');
      document.querySelector('audio').muted = true;
    }else{
      soundIcon.current.classList.remove('fa-volume-xmark');
      soundIcon.current.classList.remove('text-danger');
      soundIcon.current.classList.add('fa-volume-high');
      soundIcon.current.classList.add('text-dark');
      document.querySelector('audio').muted = false;
    }
  }

  return (
    <>
    <div className='con'>
      <div className='subcon'>
      <div className='yellow'></div>
      <div className='green'></div>
      </div>
      <div className='subcon'>
      <div className='red'></div>
      <div className='blue'></div>
      </div>
    </div>
    <div className='bottle' onClick={spin}>
      <img ref={bottle} className='bottleImg' src='/bottle.png' alt='bottle'/>
    </div>
      <i ref={soundIcon} onClick={sound} className="sound-icon fa-solid fa-volume-high"></i>
    <audio>
      <source src='/sound.mp3' type='audio/mpeg'/>
    </audio>
    </>
  );
}

export default App;
