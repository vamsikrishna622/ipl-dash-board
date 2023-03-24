// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="first-part">
        <div>
          <p className="competing-team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="text-venue">{venue}</p>
          <p className="text-venue">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="line" />
      <div className="last-part">
        <div className="innings-container">
          <p className="upper-text">First Innings</p>
          <p className="lower-text">{firstInnings}</p>
          <p className="upper-text">Second Innings</p>
          <p className="lower-text">{secondInnings}</p>
          <p className="upper-text">Man of The Match</p>
          <p className="lower-text">{manOfTheMatch}</p>
          <p className="upper-text">Umpires</p>
          <p className="lower-text">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
