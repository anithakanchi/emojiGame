import './index.css'

const NavBar = props => {
  const {topScore, score} = props
  return (
    <div className="navbar-container">
      <div className="nav-left-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-heading">Emoji Game</h1>
      </div>
      <div className="nav-right-container">
        <p className="paragraph">Score:{score}</p>
        <p className="paragraph">Top Score:{topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
