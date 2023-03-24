// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: '',
    recentMatches: [],
    gradient: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedLatestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const formattedRecentMatchDetails = data.recent_matches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    this.setState({
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: formattedLatestMatchDetails,
      recentMatches: formattedRecentMatchDetails,
      gradient: id,
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      gradient,
      isLoading,
    } = this.state

    return (
      <div className={`team-matches-container ${gradient}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-responsive-container">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="banner-image"
            />
            <h2 className="latest-matches-text">Latest Matches</h2>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="recent-matches-container">
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} recentMatchDetails={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
