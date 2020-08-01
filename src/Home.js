import React from 'react'
import './Home.css';
import Game from './game';

export default () => (
  <div id="home">
    <div className="landing-title-box">
        <div className="landing-title">SOKDO</div>
    </div>  
    {/* <div className="landing-form-box">
        <form id="landing-form">
            <div className="landing-form-component">
                <input type="text" placeholder="enter name" className="landing-name" id="username" maxLength="16" autoFocus autoComplete="off" />
            </div>
            <div className="landing-form-component">
            <button className="landing-button" id="create">CREATE</button>
            <button className="landing-button" id="join" href="#popup2">JOIN</button>
            <a href="#popup2" class="landing-button">JOIN</a>
            </div>
        </form>
    </div> */}
    {/* <div id="popup2" class="overlay light">
        <a class="cancel" href="#"></a>
        <div class="popup">
            <h4>Enter Room Code</h4>
            <div class="content">
                <input id="submitted" type="checkbox" tabindex="-1">
                <form>
                    <input class="join-code-input" inputmode="numeric" min="0" max="9" maxlength="1" placeholder=" " id="n1" oninput="this.nextElementSibling.focus()" autofocus>
                    <input class="join-code-input" inputmode="numeric" maxlength="1" placeholder=" " oninput="this.nextElementSibling.focus()" id="n2">
                    <input class="join-code-input" inputmode="numeric" maxlength="1" placeholder=" " oninput="this.nextElementSibling.focus()" id="n3">
                    <input class="join-code-input" inputmode="numeric" maxlength="1" placeholder=" " oninput="this.nextElementSibling.focus()" id="n4">
                    <input type="number" min="0" max="9" maxlength="1" placeholder=" " oninput="this.nextElementSibling.focus()" id="n3">
                    <label class="submit" type="button" tabindex="0" for="submitted" onkeypress="document.getElementById('submitted').checked='true'"></label>
                    <span class="indicator"></span>
                </form>
            </div>
        </div>
    </div> */}
    <Game />
  </div>
);