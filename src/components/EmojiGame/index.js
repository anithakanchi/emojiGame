/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
  }

  render() {
    const {emojisList} = this.Props
    const {score, topScore} = this.state
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} />
        <ul className="un-list-container">
          {emojisList.map(eachEmoji => (
            <EmojiCard eachEmoji={eachEmoji} key={eachEmoji.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default EmojiGame
