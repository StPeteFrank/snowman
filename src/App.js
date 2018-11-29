import React, { Component } from 'react'
import './App.css'
import snowman_0 from './snowmanImages/step_0.png'
import snowman_1 from './snowmanImages/step_1.png'
import snowman_2 from './snowmanImages/step_2.png'
import snowman_3 from './snowmanImages/step_3.png'
import snowman_4 from './snowmanImages/step_4.png'
import snowman_5 from './snowmanImages/step_5.png'
import snowman_6 from './snowmanImages/step_6.png'
import snowman_7 from './snowmanImages/step_7.png'
import wordList from './wordList.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.letterboard = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ]

    this.state = {
      secretWord: wordList[Math.floor(Math.random() * wordList.length)],
      lettersAlreadyChosen: [],
      snowMenNumber: 0,
      lettersChosenCorrectly: []
    }
  }

  //Guard clause below.
  letterClicked = event => {
    if (this.isLetterAlreadyChosen(event.target.value)) {
      return
    }

    this.state.lettersAlreadyChosen.push(event.target.value)
    this.setState({
      lettersAlreadyChosen: this.state.lettersAlreadyChosen
    }) //changing the state above

    console.log(this.state.secretWord)

    if (this.state.secretWord.split('').includes(event.target.value)) {
      this.state.lettersChosenCorrectly.push(event.target.value)
      this.setState({
        lettersChosenCorrectly: this.state.lettersChosenCorrectly,
        snowMenNumber: this.state.snowMenNumber + 1
      })

      console.log(this.state.snowMenNumber)
    }
  }
  //returns which snowman to return.
  snowmanImages = () => {
    if (this.state.snowMenNumber === 0) {
      return <img src={snowman_0} />
    } else if (this.state.snowMenNumber === 1) {
      return <img src={snowman_1} />
    } else if (this.state.snowMenNumber === 2) {
      return <img src={snowman_2} />
    } else if (this.state.snowMenNumber === 3) {
      return <img src={snowman_3} />
    } else if (this.state.snowMenNumber === 4) {
      return <img src={snowman_4} />
    } else if (this.state.snowMenNumber === 5) {
      return <img src={snowman_5} />
    } else if (this.state.snowMenNumber === 6) {
      return <img src={snowman_6} />
    } else if (this.state.snowMenNumber === 7) {
      return <img src={snowman_7} />
    }
  }

  isLetterAlreadyChosen = letter => {
    return this.state.lettersAlreadyChosen.includes(letter)
  }

  render() {
    return (
      <div className="App">
        <h2>Snowman</h2>

        <div className="snowmanImages">{this.snowmanImages()}</div>

        <div class="letterSpaces">
          {this.state.secretWord.split('').map((letter, index) => {
            return (
              <span key={index}>
                {this.state.lettersAlreadyChosen.includes(letter)
                  ? letter
                  : '_ '}
              </span>
            )
          })}
        </div>

        <div class="letterBoard">
          {this.letterboard.map((letter, index) => {
            return (
              <button
                key={index}
                value={letter}
                disabled={this.isLetterAlreadyChosen(letter)}
                onClick={this.letterClicked}
              >
                {letter.toUpperCase()}
              </button>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App

//DONE Need 26 buttons. 1 for each letter in the alphabet.
//DONE Area for 7 blank spaces for game board.
//DONE Area for snowMan images to display.
//DONE Ability for word to be selected from wordList randomly once new game is started.
//DONE Buttons need to be functional on browser. onClick.
//DONE When alphabet button is pressed check to see if it belongs in the word chosen.
//DONE If alphabet letter does belong add it to the correct space.

//Need array for alphabet
//Need snowman array
//DONE How to stop a single correct letter from completing snowman
//DONE Block player form pressing already chosen letter

//Go check out the css. Nothing fancy.
//Extract components.

//--Adventure and Epic--
//How do you lose the game?
//New game button.
//Once the 7 pieces of the snow man are displayed, or out of choices, game over.
