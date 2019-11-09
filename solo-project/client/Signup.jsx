import React from 'react';

const Signup = (props) => {

    function Easteregg() {
        const audio = new Audio(
          'https://iringtone.net/rington/file?id=8454&type=sound&name=mp3'
        );
        audio.play();
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


    return (
        <React.Fragment>
        <div className="login-box">
            <div className="left-box">
                <h1 className="signup-title">Sign-up</h1>
                <div className="signup-form">
                    <input id="firstname" type="text" className="firstname" placeholder="Firstname" value={props.state.firstname} onChange={props.getFirstname}/>
                    <input type="text" className="lastname" placeholder="Lastname" value={props.state.lastname} onChange={props.getLastname}/>
                    <input type="text" className="username" placeholder="Username" value={props.state.username} onChange={props.getUsername}/>
                    <input type="password" className="password" placeholder="Password" value={props.state.password} onChange={props.getPassword}/>
                    <input type="submit" className="submit-button" value="submit" onClick={props.handleSubmit}/>
                </div>
            </div>
            <div className="right-box">
            <h1 className="signup-title2">Login</h1>
                <button className="social facebook" onClick={Easteregg}>Log in with Facebook</button>
                <input type="text" className="username" placeholder="Username" value={props.state.loginUsernameString} onChange={props.loginUsername}/>
                <input type="password" className="password" placeholder="Password" value={props.state.loginPasswordString} onChange={props.loginPassword}/>
                
            </div>
            <div className="or">OR</div>
        </div>
        </React.Fragment>
    );
};

export default Signup;