import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      letterBoard: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Snowman</h1>
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

//Area for 7 blank spaces for game board.
//Area for snowMan images to display.
//New game button.
//Ability for word to be selected from wordList randomly once new game is started.
//Need 26 buttons. 1 for each letter in the alphabet.
//Buttons need to be functional on browser. onClick.
//When alphabet button is pressed check to see if it belongs in the word chosen.
//If alphabet letter does belong add it to the correct space.
//If alphabet button does not belong in word add a piece of the snowman image.
//Need to add an image per missed letter called.
//Once the 7 pieces of the snow man are displayed, or out of choices, game over.
