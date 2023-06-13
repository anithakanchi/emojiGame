// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji} = props
  const {emojiName, emojiUrl} = eachEmoji
  return (
    <li className="emoji-card-container">
      <button className="button" type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
