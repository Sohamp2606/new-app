
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./input.css";




function InputForm() {

  const [routeNo, setRouteNo] = useState('');
  const [fare, setFare] = useState('');
  const [ticketCount, setTicketCount] = useState('');
  const [routeName1, setRouteName1] = useState('');
  const [routeName2, setRouteName2] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketData = {routeNo, fare, routeName1, routeName2, ticketCount };
    localStorage.setItem('ticketData', JSON.stringify(ticketData));
    navigate('/ticket');
  }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h6>Kindly check details on PMPML app  green color </h6>

                <div className="top-div">
                    <div classname="small-inputs">
                        <label>Route No </label>
                        <select value={routeNo} onChange={(e) => setRouteNo(e.target.value) }>
                        <option value="">select</option>
                            <option value={"43A"}>43A</option>
                            <option value={"208"}>208</option>
                            <option value={"114"}>114</option>
                            <option value={"344"}>344</option>
                        </select>
                        <input type='text' value={routeNo} onChange={(e) => setRouteNo(e.target.value) } />
                    </div>

                    <div classname="small-inputs">
                        <label>Fare </label>
                        <select value={fare} onChange={(e) => setFare(e.target.value) }>
                        <option value="">select</option>
                            <option value={"5"}>5</option>
                            <option value={"10"}>10</option>
                            <option value={"15"}>15</option>
                            <option value={"20"}>20</option>
                            <option value={"25"}>25</option>
                            <option value={"30"}>30</option>
                        </select>
                        <input type='text' value={fare} onChange={(e) => setFare(e.target.value)} />
                    </div>
                </div>
                <div classname="inputs">
                    <label>Ticket Count </label>
                    <input type='text' value={ticketCount} onChange={(e) => setTicketCount(e.target.value)} />
                </div>

                <div classname="inputs">
                    <label>Pick Up Point </label>
                    <select value={routeName1} onChange={(e) => setRouteName1(e.target.value) }>
                    <option value="">select</option>
                        <option value={"Shivaji Chowk Hinjawadi"}>Shivaji Chowk</option>
                        <option value={"Radha Hotel"}>Radha Hotel</option>
                        <option value={"Kalamkar Vasti"}>Kalamkar Vasti</option>
                        <option value={"Sadanand Hotel"}>Sadanand Hotel</option>
                        <option value={"Hinjawadigaon"}>Hinjawadigaon</option>
                        <option value={"Tata Motors"}>Tata Motors</option>
                        <option value={"Simla Office"}>Simla Office</option>
                        <option value={"Baner Depot"}>Baner Depot</option>
                    </select>
                    <input type='text' value={routeName1} onChange={(e)=> setRouteName1(e.target.value)} />
                </div>

                <div classname="inputs">
                    <label>Drop Point</label>
                    <select value={routeName1} onChange={(e) => setRouteName2(e.target.value) }>
                    <option value="">select</option>
                        <option value={"Shivaji Chowk Hinjawadi"}>Shivaji Chowk</option>
                        <option value={"Radha Hotel"}>Radha Hotel</option>
                        <option value={"Kalamkar Vasti"}>Kalamkar Vasti</option>
                        <option value={"Sadanand Hotel"}>Sadanand Hotel</option>
                        <option value={"Hinjawadigaon"}>Hinjawadigaon</option>
                        <option value={"Tata Motors"}>Tata Motors</option>
                        <option value={"Simla Office"}>Simla Office</option>
                        <option value={"Katraj"}>Katraj</option>
                    </select>
                    <input type='text' value={routeName2} onChange={(e)=> setRouteName2(e.target.value)} />
                </div>

                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default InputForm

