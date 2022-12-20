import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstName: false,
    isLastName: false,
  }

  onLastNameClick = () => {
    const {isLastName} = this.state
    this.setState({isLastName: !isLastName})
  }

  onFirstNameClick = () => {
    const {isFirstName} = this.state
    this.setState({isFirstName: !isFirstName})
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="app-container">
        <h1 className="main-heading">Show/Hide</h1>

        <div className="button-container">
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onFirstNameClick}
            >
              Show/Hide Firstname
            </button>
            {isFirstName && <p className="name-card">Joe</p>}
          </div>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onLastNameClick}
            >
              Show/Hide Lastname
            </button>
            {isLastName && <p className="name-card">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
