// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onSearchInput = event => {
    this.setState(prevState => ({
      count: event.target.value.length,
    }))
    console.log(event.target.value.length)
  }

  render() {
    const {count, searchInput} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <div className="img-container">
            <img
              className="img-cls"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
          <div className="letter-container">
            <h1 className="heading">Calculate the letters you enter</h1>
            <label className="phrase" htmlFor="phraseText">
              Enter the phrase
            </label>

            <input
              type="text"
              id="phraseText"
              value={searchInput}
              onChange={this.onSearchInput}
              placeholder="Enter the phrase"
              className="input-type"
            />

            <p className="no-of-letters">No.of letters: {count}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
