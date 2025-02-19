import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/Styles/bookingList.css";
import SyncfusionTable from "../Components/BookingListing/SyncFusionTable";
import { GoPrimitiveDot } from "react-icons/go";
import { useSelector } from "react-redux";
import { selectUserData } from "../redux/slices/userSlice";
import { locationRequest } from "../services/api";
import { useEffect } from "react";

const gridActionButton = (props) => (
	<Link
		to={props.row.to}
		style={{
			textDecoration: "none",
		}}>
		<Button
			variant="outlined"
			sx={{
				padding: "6px 10px",
				border: "1px solid #EA4235",
				color: "black",
				fontWeight: "600",
				borderRadius: "4px",
				marginTop: "10px",
			}}>
			Details
		</Button>
	</Link>
);

const gridBookingID = (props) => (
	<div
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			gap: "5px",
		}}>
		<GoPrimitiveDot color="#EA4235" />
		{props.row.BookingId}
	</div>
);

const gridBookingStatus = (props) => {
	let color;
	//console.log(props);
	if (props.row.Status === "Under Review") color = "#E8B500";
	else if (props.row.Status === "Approved") color = "#0079D7";
	else if (props.row.Status === "Cancelled") color = "#E20000";
	else if (props.row.Status === "Booked") color = "#19AF00";

	return (
		<div
			style={{
				textAlign: "center",
				color: color,
			}}>
			{props.row.Status}
		</div>
	);
};

const gridLocationId = (props) => (
	<div
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			gap: "5px",
		}}>
		<GoPrimitiveDot color="#EA4235" />
		{props.row.LocationId}
	</div>
);

const bookingGrid = [
	{
		headerName: "Booking ID",
		field: "BookingId",
		renderCell: gridBookingID,
		width: "300",
		headerAlign: "Center",
	},
	{
		headerName: "Status",
		field: "Status",
		renderCell: gridBookingStatus,
		width: "200",
		headerAlign: "Center",
	},
	{
		headerName: "Date",
		field: "Date",
		width: "180",
		headerAlign: "Center",
	},
	{
		headerName: "Time, Duration",
		field: "TimeDuration",
		width: "250",
		headerAlign: "Center",
	},
	{
		headerName: "Attendies",
		field: "Attendies",
		width: "150",
		headerAlign: "Center",
	},
	{
		headerName: "Total Amount",
		field: "TotalAmount",
		width: "140",
		headerAlign: "Center",
	},
	{
		headerName: "Action",
		renderCell: gridActionButton,
		field: "action",
		width: "120",
		headerAlign: "Center",
	},
];

const listingGrid = [
	{
		headerName: "LocationId",
		field: "LocationId",
		renderCell: gridLocationId,
		width: "200",
		headerAlign: "Center",
	},
	{
		headerName: "Status",
		field: "Status",
		renderCell: gridBookingStatus,
		width: "200",
		headerAlign: "Center",
	},
	{
		headerName: "Booking Request",
		field: "BookingRequest",
		width: "200",
		headerAlign: "Center",
	},
	{
		headerName: "Action",
		field: "action",
		width: "150",
		headerAlign: "Center",
	},
];

const BookingList = () => {
	const [active, setActive] = useState(0);
	const userData = useSelector(selectUserData);
	const [locrequests, setLocRequests] = useState([]); 
	useEffect(() => {
		 userData &&userData?.listedLocations.map(async loc => {
			try {
				const response = await locationRequest(loc?.location_id);
				const {requests} = response.data;
				setLocRequests([...locrequests, requests.length]);
			} catch (error) {
				console.log(error);
			}
		})
	}, [userData])
	
	const bookingData = userData?.portfolio.map((booking, index) => {
		const endTime =( Number(booking?.time.substr(0,2))+Number(booking?.duration_in_hours))%24;
		const date = new Date(booking?.timestamp?._seconds*1000)
		const yyyy = date.getFullYear();
		let mm = date.getMonth() + 1; // Months start at 0!
		let dd = date.getDate();

		if (dd && dd < 10) dd = '0' + dd;
		if (mm && mm < 10) mm = '0' + mm;

		const formattedDate = dd + '/' + mm + '/' + yyyy;
		return {
			id: index,
			action: gridActionButton,
			to: `/bookingdetails/${booking?.bookingId}`,
			BookingId: booking?.bookingId,
			Status: booking?.payment_status,
			Date: formattedDate,
			TimeDuration: booking?.time + " - " + endTime + booking?.time.substr(2) + ", " + booking?.duration_in_hours,
			Attendies: booking?.attendies,
			TotalAmount: booking?.total_amt,
		}
	})

	const listingData = userData?.listedLocations.map( (loc, index) => {
		return {
				action: gridActionButton,
		 		LocationId: loc?.location_id,
				Status: loc.verified,
		 		id: index,
		 		to: "/listdetails/" + loc.location_id,
				BookingRequest: `${locrequests?.at(index)} Requests`,
		}
	})
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				<div className="booking-list-header">
					<div
						className={active === 0 ? "chosen option" : "option"}
						onClick={() => {
							setActive(0);
						}}>
						Booking
					</div>
					<div
						className={active === 1 ? "chosen option" : "option"}
						onClick={() => {
							setActive(1);
						}}>
						Listing
					</div>
				</div>
				{active === 0 ? (
					<div
						style={{
							width: "90vw",
							margin: "40px auto",
							height: "80vh",
						}}>
						<SyncfusionTable UsersData={bookingData} UsersGrid={bookingGrid} />
					</div>
				) : (
					<div
						style={{
							width: "57vw",
							margin: "40px auto",
							height: "80vh",
						}}>
						<SyncfusionTable UsersData={listingData} UsersGrid={listingGrid} />
					</div>
				)}
			</div>

			<Footer />
		</div>
	);
};

export default BookingList;
