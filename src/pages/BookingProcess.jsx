import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/Styles/Booking/booking-process.css";
import SideSection from "../Components/Booking/SideSection";
import Booking from "../Components/Booking/Booking";
import Rules from "../Components/Booking/Rules";
import Contact from "../Components/Booking/Contact";

const BookingProcess = ({ v1, v2, v3, v4, v5, v6, event }) => {
	const [index, setIndex] = useState(0);
	const [ok, setOk] = useState(false);
	const [readyForRequest, setReadyForRequest] = useState(false);
	const [userData, setUserData] = useState({
		firstName : "",
		lastName : "",
		who_reserves : "Individual",
		profession : "",
		company : "",
		designation : "",
		dob : "",
		message : "",
	});
	useEffect(() => {
		if(userData.firstName !== "" && userData.lastName !== "" &&
			userData.who_reserves !== "" && userData.dob !== "" && userData.message !== "")
			setReadyForRequest(true);
	}, [userData])
	return (
		<>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				<div className="booking-content-wrapper">
					<div className="left-section">
						<div className="booking-process">
							<div className={`booking-item ${index === 0 ? "highlight" : ""}`}>
								BOOKING
							</div>
							<div className="filler">----------------</div>
							<div className={`booking-item ${index === 1 ? "highlight" : ""}`}>
								RULES
							</div>
							<div className="filler">----------------</div>
							<div className={`booking-item ${index === 2 ? "highlight" : ""}`}>
								CONTACT
							</div>
						</div>

						{index === 0 ? (
							<Booking v1={v1} v2={v2} v3={v3} v4={v4} v5={v5} />
						) : index === 1 ? (
							<Rules isOk={setOk} />
						) : (
							<Contact setReadyForRequest={setReadyForRequest} userData = {userData} setUserData = {setUserData} />
						)}
					</div>
					<SideSection
						index={index}
						setIndex={setIndex}
						ok={ok}
						setOk={setOk}
						v1={v1}
						v2={v2}
						v3={v3}
						v4={v4}
						v5={v5}
						v6={v6}
						readyForRequest={readyForRequest}
						setReadyForRequest={setReadyForRequest}
						userData = {userData}
						event = {event}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default BookingProcess;
