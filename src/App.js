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
import snowman_7 from './snowmanImages/step_7.png'
import wordList from './wordList.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      secretWord: wordList[Math.floor(Math.random() * wordList.length)],
      lettersAlreadyChosen: [],
      snowMenNumber: 0,
      lettersChosenCorrectly: []
    }
  }

  // letterToShow = letter => {

  //   // return _ if we have not already chosen this letter
  //   // if (this.state.secretWord.split('').includes(letter)) {
  //   //   return letter
  //   // } else {
  //   //   return '_ '
  //   // }

  //   // returns the letter if we have already chosen this letter
  //   // if (this.state.lettersAlreadyChosen(letter)) {
  //   //   return letter
  //   // }
  // }
  letterClicked = event => {
    this.state.lettersAlreadyChosen.push(event.target.value)
    this.setState({
      lettersAlreadyChosen: this.state.lettersAlreadyChosen
    })
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
  render() {
    return (
      <div className="App">
        <h2>Snowman!</h2>

        <div className="snowmanImages">{this.snowmanImages()}</div>

        <div class="letterSpaces">
          {this.state.secretWord.split('').map(letter => {
            return (
              <span>
                {this.state.lettersAlreadyChosen.includes(letter)
                  ? letter
                  : '_ '}
              </span>
            )
          })}
          {/* <ul>
            <li>{this.letterToShow('s')}</li>
            <li>{this.letterToShow('c')}</li>
            <li>{this.letterToShow('r')}</li>
            <li>{this.letterToShow('o')}</li>
            <li>{this.letterToShow('t')}</li>
            <li>{this.letterToShow('a')}</li>
            <li>{this.letterToShow('l')}</li>
          </ul> */}
        </div>

        <div class="letterBoard">
          <button value="a" onClick={this.letterClicked}>
            a
          </button>
          <button value="b" onClick={this.letterClicked}>
            b
          </button>
          <button value="c" onClick={this.letterClicked}>
            c
          </button>
          <button value="d" onClick={this.letterClicked}>
            d
          </button>
          <button value="e" onClick={this.letterClicked}>
            e
          </button>
          <button value="f" onClick={this.letterClicked}>
            f
          </button>
          <button value="g" onClick={this.letterClicked}>
            g
          </button>
          <button value="h" onClick={this.letterClicked}>
            h
          </button>
          <button value="i" onClick={this.letterClicked}>
            i
          </button>
          <button value="j" onClick={this.letterClicked}>
            j
          </button>
          <button value="k" onClick={this.letterClicked}>
            k
          </button>
          <button value="l" onClick={this.letterClicked}>
            l
          </button>
          <button value="m" onClick={this.letterClicked}>
            m
          </button>
          <button value="n" onClick={this.letterClicked}>
            n
          </button>
          <button value="o" onClick={this.letterClicked}>
            o
          </button>
          <button value="p" onClick={this.letterClicked}>
            p
          </button>
          <button value="q" onClick={this.letterClicked}>
            q
          </button>
          <button value="r" onClick={this.letterClicked}>
            r
          </button>
          <button value="s" onClick={this.letterClicked}>
            s
          </button>
          <button value="t" onClick={this.letterClicked}>
            t
          </button>
          <button value="u" onClick={this.letterClicked}>
            u
          </button>
          <button value="v" onClick={this.letterClicked}>
            v
          </button>
          <button value="w" onClick={this.letterClicked}>
            w
          </button>
          <button value="x" onClick={this.letterClicked}>
            x
          </button>
          <button value="y" onClick={this.letterClicked}>
            y
          </button>
          <button value="z" onClick={this.letterClicked}>
            z
          </button>
        </div>
      </div>
    )
  }
}

export default App

//DONE. Need 26 buttons. 1 for each letter in the alphabet.
//DONE Area for 7 blank spaces for game board.
//Area for snowMan images to display.
//DONE Ability for word to be selected from wordList randomly once new game is started.
//DONE Buttons need to be functional on browser. onClick.
//DONE When alphabet button is pressed check to see if it belongs in the word chosen.
//DONE If alphabet letter does belong add it to the correct space.
//If alphabet button does not belong in word add a piece of the snowman image.
//Need to add an image per missed letter called.
//Once the 7 pieces of the snow man are displayed, or out of choices, game over.
//New game button.
