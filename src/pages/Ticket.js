
import { Link } from 'react-router-dom';

function Ticket() {

    // Function to format the date and time

  const date = new Date();

  // Array of month names
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Extracting date components
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear().toString().slice(-2); // Last two digits of the year

  // Extracting time components
  let hours = date.getHours();
  let hours2 = date.getHours();
  let minutes = (date.getMinutes())-8;
  let minutes2 = (date.getMinutes())+25;

  if(minutes2 > 60){
    hours2 += 1;
    minutes2 %= 60 ;
  }
  if(minutes < 0){
    minutes = 60+minutes;
    hours -= 1;
  }

  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Converting to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Hour '0' should be '12'
  hours2 = hours2 % 12;
  hours2 = hours2 ? hours2 : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes; // Adding leading zero to minutes if needed
  minutes2 = minutes2 < 10 ? '0' + minutes2 : minutes2;

  // Creating the final formatted date and time string
  const currentDate = `${day} ${month}, ${year} | ${hours}:${minutes} ${ampm}`;
  const validityDate = `${day} ${month}, ${year} | ${hours2}:${minutes2} ${ampm}`;

 const uniqueCode = `${year}${'0'+date.getMonth()}${day}${hours}${minutes}XUI5HI`

//  route info from local memory 
  const ticketData = JSON.parse(localStorage.getItem('ticketData') || {});
  const {routeNo, fare, routeName1, routeName2, ticketCount } = ticketData;

    return (
    <div className="app-container">
      <Link className='cross' to="/">&#x2715;</Link>
      <span className="all-tickets">All tickets</span>
      <div className="main-container">


        <div className="top-con">
          {/* <p>Pune Mahanagar Parivahan Mahamandal Ltd</p> */}
          <p>पुणे महानगर परिवहन महामंडळ लि</p>
        </div>

        <div className="details-con">
          <div className="route">
            <p className="title">Route</p>
            <p className="value_1">{routeNo || 208}</p>
          </div>

          <div className="ticket-qntity">
            <p className="title">Tickets Count</p>
            <p className="value_1">{ ticketCount || '1'}F</p>
          </div>

          <div className="ticket-fair">
            <p className="title">Fare</p>
            <p className="value_1">&#8377;{fare || 15}</p>
          </div>
        </div>

        <div className="route-info">
          <p className="route-name1">{ routeName1 || 'Shivaji Chowk Hinjewadi'}</p>
          <div className="arrow"> &#10141;</div>
          <p className="route-name2">{ routeName2 || 'Balewadi Phata'}</p>
        </div>

        <div className="line-container">
          <div className="half-circle left-circle"></div>

          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1">
            <g fill="none" stroke="#babfc3" strokeWidth="3">
              <line x1="0" y1="1" x2="100%" y2="2" strokeDasharray="4, 4" />
            </g>
          </svg>

          <div className="half-circle right-circle"></div>
        </div>


        <div className="booking-details">
          <div className="booking">
            <p className="title">Booking Time</p>
            <p className="time">{currentDate}</p>
            
          </div>

          <div className="validity">
          < p className="title">Validity Time</p>
          <p className="time">{validityDate}</p>
          </div>
        </div>

        <div >
         <p className="prime-code">{uniqueCode}</p>
        </div>

        <div className="line-container">
          
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1">
            <g fill="none" stroke="#babfc3" strokeWidth="3">
              <line x1="0" y1="1" x2="100%" y2="2" strokeDasharray="4, 4" />
            </g>
          </svg>

        </div>

      

        <div className="image">
          <img className="logo pulsate-fwd" src="pmpl_logo1.png" alt="hel"></img>
         
        </div>

        

        

      </div>

      <div className='timer-div'>
          <span className='timer-title'>Expires in </span>
          <span className='timer'> 00:00:02</span>
      </div>

    </div>
    )
}

export default Ticket
