// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, starredAppointment} = props
  const {title, date, id, isFav} = appointmentDetails
  console.log(date.getMonth())
  const starImage = isFav
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const clickStar = () => {
    starredAppointment(id)
  }

  return (
    <li className="appointment-container">
      <div className="title-star-container">
        <p className="title-style">{title}</p>
        <img
          onClick={clickStar}
          className="star-image"
          alt="star"
          src={starImage}
        />
      </div>
      <p className="date-style">{format(date, 'dd MMMM yyyy, EEEE')}</p>
    </li>
  )
}

export default AppointmentItem
