import React, { useState } from "react";
import "../Assets/Styles/photography.css";
import image from "../Assets/Images/photographyMainImage.png";
import Navbar from "../Components/Navbar";
import { MdExpandMore, MdDone } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";

import avatar from "../Assets/Images/testimonial-image-1.jpeg";

import Footer from "../Components/Footer";
import { Avatar, Button, TextField } from "@mui/material";
const Blog = () => {
	const [open, setOpen] = useState(false);
	const [liked, setLiked] = useState(false);
	let userComment = "";
	const clicked = () => {
		setOpen(!open);
	};

	const [commentData, setCommentData] = useState([
		{
			name: "John Doe",
			comment: "This is a comment",
			avatar: avatar,
		},
	]);

	return (
		<>
			<div>
				<Navbar extraNavId={"id-2"} />
				<div className="text-on-image-container">
					<img src={image} alt="background" className="bg-image darken" />
				</div>
				<div className="singleBlogContent">
					<h1>
						Blog Heading loremLorem ipsum dolor sit amet, consectetur adipiscing
						elit. Nam hendrerit nisi sed sollicitudin pellentesque.
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc loremLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc loremLorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit.
					</p>

					<p>
						Nam hendrerit nisi sed sollicitudin pellentesque. Nunc loremLorem
						ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
						nisi sed sollicitudin pellentesque. Nunc pLorem ipsum dolor sit
						amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc loremLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc loremLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque.
					</p>
					<p>
						Nunc loremLorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc loremLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc loremLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc loremLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit.
					</p>
					<p>
						Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc loremLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc loremLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc loremLorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc loremLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc loremLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc loremLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit.
					</p>
					<p>
						{" "}
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc loremLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc loremLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum
					</p>
				</div>

				<div className="reactions">
					<div>
						{liked === true ? (
							<AiTwotoneLike
								color="#ff6767"
								size="2rem"
								onClick={() => setLiked(false)}
							/>
						) : (
							<BiLike
								color="#ff6767"
								size="2rem"
								onClick={() => setLiked(true)}
							/>
						)}
					</div>
					<IoMdShareAlt color="#ff8787" size="2rem" />
				</div>

				<h1
					style={{
						width: "90%",
						margin: "10px auto",
					}}>
					Comments
				</h1>

				<div className="comments">
					<div className="userCommentSection">
						<div className="comment-header">
							<Avatar />
							<h3>User Name</h3>
						</div>
						<div className="comment-input-field">
							<TextField
								fullWidth
								placeholder="Your Comment"
								onChange={(e) => {
									userComment = e.target.value;
									console.log(userComment);
								}}
							/>
							<Button
								variant="contained"
								sx={{
									backgroundColor: "#ff6767",
									color: "white",
									padding: "10px 30px",
								}}
								onClick={() => {
									let val = {
										name: "User",
										comment: userComment,
										avatar: "",
									};
									setCommentData((prev) => [...prev, val]);
								}}>
								Submit
							</Button>
						</div>
					</div>

					{commentData.map((comment, ind) => (
						<div className="comment" key={ind}>
							<div className="comment-header">
								<Avatar src={comment.avatar} />
								<h3>{comment.name}</h3>
							</div>
							<div className="comment-body">
								<div>{comment.comment}</div>
							</div>
						</div>
					))}
				</div>

				<Footer />
			</div>
		</>
	);
};

export default Blog;
