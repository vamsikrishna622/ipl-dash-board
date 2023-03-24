// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamCardData: []}

  componentDidMount() {
    this.getMatchCardData()
  }

  getMatchCardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const teamCardData = data.teams
    const formattedData = teamCardData.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamCardData: formattedData, isLoading: false})
  }

  renderMatchCardData = () => {
    const {teamCardData} = this.state

    return (
      <ul className="list-item-container">
        {teamCardData.map(eachCard => (
          <TeamCard key={eachCard.id} cardDetails={eachCard} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <div className="responsive-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <div>
              <div className="ipl-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="ipl-logo"
                />
                <h1 className="dashboard-heading">IPL Dashboard</h1>
              </div>
              {this.renderMatchCardData()}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
