// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: [], starredButton: false}

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeDate = event => {
    this.setState({date: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isFav: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  starredButtonClick = () => {
    this.setState(prevState => ({starredButton: !prevState.starredButton}))
  }

  starredAppointment = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (each.id === id) {
          return {...each, isFav: !each.isFav}
        }
        return {...each}
      }),
    }))
  }

  render() {
    const {appointmentsList, title, date, starredButton} = this.state
    const starredList = appointmentsList.filter(each => each.isFav === true)
    const filteredList = starredButton ? starredList : appointmentsList
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="add-appointment-container">
            <div className="add-appoint-text-container">
              <h1 className="head">Add Appointment</h1>
              <form>
                <div className="input-container">
                  <label htmlFor="title" className="label-text">
                    TITLE
                  </label>
                  <br />
                  <input
                    onChange={this.changeTitle}
                    className="input-width"
                    value={title}
                    placeholder="Title"
                    id="title"
                    type="text"
                  />
                </div>
                <div className="input-container">
                  <label className="label-text" htmlFor="date">
                    DATE
                  </label>
                  <br />
                  <input
                    onChange={this.changeDate}
                    className="input-width"
                    value={date}
                    type="date"
                    id="date"
                  />
                </div>
                <button
                  onClick={this.addAppointment}
                  className="button"
                  type="submit"
                >
                  Add
                </button>
              </form>
            </div>
            <img
              className="appointment-image"
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </div>
          <div className="starred-container">
            <h1 className="head">Appointments</h1>
            <button
              onClick={this.starredButtonClick}
              type="button"
              className="starred-button"
            >
              Starred
            </button>
          </div>
          <ul className="appointments-container">
            {filteredList.map(each => (
              <AppointmentItem
                key={each.id}
                starredAppointment={this.starredAppointment}
                appointmentDetails={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
