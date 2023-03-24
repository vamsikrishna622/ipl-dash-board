// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const cardDetails = this.props

    const {name, teamImageUrl, id} = cardDetails.cardDetails

    return (
      <Link to={`/team-matches/${id}`} className="card-link">
        <li className="team-card-container">
          <img src={teamImageUrl} alt={name} className="team-card-image" />
          <p className="card-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
