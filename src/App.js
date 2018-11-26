import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import snowman_0 from './snowmanImages/step_0.png'
import snowman_1 from './snowmanImages/step_1.png'
import snowman_2 from './snowmanImages/step_2.png'
import snowman_3 from './snowmanImages/step_3.png'
import snowman_4 from './snowmanImages/step_4.png'
import snowman_5 from './snowmanImages/step_5.png'
import snowman_6 from './snowmanImages/step_6.png'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      secretWord: 'snowman',
      lettersAlreadyChosen: ['s', 'o']
    }
  }

  letterToShow = letter => {
    // return _ if we have not already chosen this letter
    // if () {
    return '_'
    //}

    // returns the letter if we have already chosen this letter
    // if () {
    return letter
    // }
  }

  render() {
    return (
      <div className="App">
        <h1>Snowman</h1>

        <div class="snowmanImages">
          <img src={snowman_0} className="snowmen" />
        </div>
        <div class="letterSpaces">
          <ul>
            <li>{this.letterToShow('s')}</li>
            <li>{this.letterToShow('n')}</li>
            <li>{this.letterToShow('o')}</li>
            <li>{this.letterToShow('w')}</li>
            <li>{this.letterToShow('m')}</li>
            <li>{this.letterToShow('a')}</li>
            <li>{this.letterToShow('n')}</li>
          </ul>
        </div>

        <div class="letterBoard">
          <button class="A">A</button>
          <button class="B">B</button>
          <button class="C">C</button>
          <button class="D">D</button>
          <button class="E">E</button>
          <button class="F">F</button>
          <button class="G">G</button>
          <button class="H">H</button>
          <button class="I">I</button>
          <button class="J">J</button>
          <button class="K">K</button>
          <button class="L">L</button>
          <button class="M">M</button>
          <button class="N">N</button>
          <button class="O">O</button>
          <button class="P">P</button>
          <button class="Q">Q</button>
          <button class="R">R</button>
          <button class="S">S</button>
          <button class="T">T</button>
          <button class="U">U</button>
          <button class="V">V</button>
          <button class="W">W</button>
          <button class="X">X</button>
          <button class="Y">Y</button>
          <button class="Z">Z</button>
        </div>
      </div>
    )
  }
}

export default App

//DONE. Need 26 buttons. 1 for each letter in the alphabet.
//Area for 7 blank spaces for game board.
//Area for snowMan images to display.
//Ability for word to be selected from wordList randomly once new game is started.
//Buttons need to be functional on browser. onClick.
//When alphabet button is pressed check to see if it belongs in the word chosen.
//If alphabet letter does belong add it to the correct space.
//If alphabet button does not belong in word add a piece of the snowman image.
//Need to add an image per missed letter called.
//Once the 7 pieces of the snow man are displayed, or out of choices, game over.
//New game button.
