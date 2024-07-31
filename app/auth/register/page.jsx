"use client";
import { Box, Typography, Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import { Google } from "@mui/icons-material";
import {
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	updateProfile,
} from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";

const StyledTextField = styled(TextField)({
	"& label": {
		color: "#A0AAB4",
	},
	"& label.Mui-focused": {
		color: "#A0AAB4",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "#A0AAB4",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "#A0AAB4",
			color: "#A0AAB4",
		},
		"&:hover fieldset": {
			borderColor: "#A0AAB4",
			color: "#A0AAB4",
		},
		"&.Mui-focused fieldset": {
			borderColor: "#A0AAB4",
			color: "#A0AAB4",
		},
	},
});
const page = () => {
	const route = useRouter();
	const loaderImage = "/loader.gif";
	const googleProvider = new GoogleAuthProvider();
	const [details, setDetails] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);
	const handleChange = (name, val) => {
		setDetails({
			...details,
			[name]: val,
		});
	};
	const handleSubmit = async () => {
		if (
			details.name === "" ||
			details.email === "" ||
			details.password === ""
		) {
			toast.error("Please fill all the fields");
			return;
		}
		try {
			setLoading(true);
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				details.email,
				details.password
			);
			handleMailVerification(userCredential.user);
		} catch (error) {
			setLoading(false);
			if (error.code === "auth/email-already-in-use") {
				toast.error("Email already registered. Try using different email");
			} else {
				toast.error(error.message);
			}
			console.log(error);
		}
	};
	const handleMailVerification = async (users) => {
		try {
			await sendEmailVerification(auth.currentUser);
			updateProfile(auth.currentUser, {
				displayName: details.name,
			});
			let user = {
				name: details.name,
				email: details.email,
				image: "",
				createdAt: new Date(),
			};
			await setDoc(doc(db, "Students", users.uid), user);
			setLoading(false);
			toast.success(
				"Verification mail sent. Once verified then you can login!"
			);
			route.push("/auth");
		} catch (e) {
			setLoading(false);
			toast.error(e.message);
			console.log(e);
		}
	};
	const googleLogin = async () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const data = result.user;
				console.log(data);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
				toast.error(errorMessage);
				console.log(errorMessage);
				console.log(email);
				console.log(credential);
			});
	};
	return (
		<Box>
			<Box
				sx={{
					background: `url(/ResourcesTopBanner.png)`,
					backgroundColor: "#000000",
					backgroundSize: "cover",
					height: "50vh",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					pl: 10,
					justifyContent: "center",
				}}
			>
				<Box>
					<Typography
						sx={{
							fontSize: 48,
							fontWeight: 700,
							color: "#FFFFFF",
							mb: 1,
						}}
					>
						Register
					</Typography>
					<Typography
						sx={{
							fontSize: 25,
							fontWeight: 500,
							color: "#FFFFFF",
							mb: 1,
						}}
					>
						Join Us to get quality education
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					mt: 5,
				}}
			>
				{loading && (
					<Box
						sx={{
							position: "absolute",
							backgroundColor: "#212333",
							opacity: 0.7,
							zIndex: 999,
							width: "100%",
							height: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<img src={loaderImage} width={100} height={100} />
					</Box>
				)}
				<Grid
					container
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Grid
						item
						xs={12}
						sm={6}
						lg={4}
						border={"none"}
						padding={5}
						bgcolor={"#fff"}
						borderRadius={2}
						sx={{
							boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
						}}
						mx={1}
					>
						<Typography
							variant={"h5"}
							textAlign={"center"}
							mt={1}
							mb={5}
							fontWeight={"bold"}
							color={"#212333"}
						>
							Student Register
						</Typography>
						<StyledTextField
							id="outlined-basic"
							label="Your name"
							variant="outlined"
							fullWidth
							sx={{ my: 1 }}
							InputProps={{
								style: {
									color: "#A0AAB4",
								},
							}}
							onChange={(e) => handleChange("name", e.target.value)}
						/>
						<StyledTextField
							id="outlined-basic"
							label="Your email"
							variant="outlined"
							fullWidth
							sx={{ my: 1 }}
							InputProps={{
								style: {
									color: "#A0AAB4",
								},
							}}
							onChange={(e) => handleChange("email", e.target.value)}
						/>
						<StyledTextField
							id="outlined-basics"
							label="Password"
							variant="outlined"
							fullWidth
							sx={{
								my: 1,
							}}
							InputProps={{
								style: {
									color: "#A0AAB4",
								},
							}}
							onChange={(e) => handleChange("password", e.target.value)}
						/>
						<Button
							variant="contained"
							sx={{
								color: "#fff",
								backgroundColor: "#ff3158",
								my: 1,
								"&:hover": { backgroundColor: "#f50366" },
							}}
							fullWidth
							onClick={handleSubmit}
						>
							Submit
						</Button>
						<Typography textAlign={"center"}>OR</Typography>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
								marginTop: 5,
								marginBottom: 5,
								borderRadius: 2,
								height: 35,
								cursor: "pointer",
								backgroundColor: "white",
								color: "#d32f2f",
								border: "1px solid #d32f2f",
								"&:hover": {
									backgroundColor: "#d32f2f",
									color: "white",
								},
							}}
							onClick={googleLogin}
						>
							<Box
								width={"30%"}
								display={"flex"}
								justifyContent={"flex-start"}
								alignItems={"center"}
							>
								<Google sx={{ ml: 2, fontSize: 20 }} />
							</Box>
							<Box width={"70%"}>
								<Typography>Sign up with Google</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default page;
