import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import img1 from "../Assets/Images/property-1.jpeg";
import img2 from "../Assets/Images/property-2.jpeg";
import img3 from "../Assets/Images/property-3.jpeg";
import img4 from "../Assets/Images/property-4.jpeg";
import img5 from "../Assets/Images/property-5.jpeg";
import img6 from "../Assets/Images/property-6.jpeg";
import PropertyInfo from "../Components/PropertyInfo";

const Favorites = () => {
	const propertyDetails = [
		{
			image: img1,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
		},
		{
			image: img2,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
		},
		{
			image: img3,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
		},
		{
			image: img4,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
		},
		{
			image: img5,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
		},
		{
			image: img6,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
		},
		{
			image: img6,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
		},
		{
			image: img6,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
		},
	];
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				<div
					style={{
						width: "80%",
						margin: "10px auto",
					}}>
					<div className="property-list">
						{propertyDetails.map((item, index) => (
							<PropertyInfo
								item={item}
								index={index}
								isFav={true}
								favPage={true}
								key={index}
								handleClick={() => {
									console.log("clicked");
								}}
								border={false}
							/>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Favorites;
