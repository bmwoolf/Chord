import React from 'react';

export const Easteregg = () => {
    // const audio = new Audio(
    //   'https://iringtone.net/rington/file?id=8454&type=sound&name=mp3'
    // );
    // audio.play();
    const app = document.getElementById('app');
    app.classList.add('easter-egg');
    const colorGen = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    };
    setInterval(() => {
      const elements = document.querySelectorAll('*');
      for (let i = 0; i < elements.length; i += 1) {
        elements[i].style.backgroundColor = `${colorGen()}`;
        elements[i].style.color = `${colorGen()}`;
        elements[i].style.fill = `${colorGen()}`;
      }
    }, 100);
  };

  export default Easteregg;