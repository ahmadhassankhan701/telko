import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const DashboardLeftCard = () => {
	return (
		<Grid
			container
			spacing={1}
			mt={2}
			borderRadius={3}
			bgcolor={"#fff"}
			boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
			p={2}
		>
			<Grid
				item
				xs={12}
				sm={7}
				display={"flex"}
				justifyContent={"space-between"}
				flexDirection={"column"}
			>
				<Box>
					<Typography
						sx={{
							fontSize: "1rem",
							fontWeight: "500",
							letterSpacing: "0.1em",
							color: "#A0AAB4",
						}}
					>
						Build by developers
					</Typography>
					<Typography
						sx={{
							fontSize: "1.25rem",
							fontWeight: "700",
							letterSpacing: "0em",
							color: "#A6A6A6",
						}}
					>
						Soft UI Dashboard
					</Typography>
					<Typography
						sx={{
							fontSize: "1rem",
							fontWeight: "400",
							letterSpacing: "0.01071em",
							color: "#A0AAB4",
						}}
					>
						From colors, cards, typography to complex elements, you will find
						the full documentation.
					</Typography>
				</Box>
				<Button
					variant="text"
					color="primary"
					style={{
						fontSize: "0.8rem",
						textTransform: "none",
						width: "110px",
						marginLeft: "-10px",
					}}
					endIcon={<ArrowForward />}
				>
					Read More
				</Button>
			</Grid>
			<Grid item xs={12} sm={5}>
				<img
					src="/dashboard_left_card.png"
					alt="Rocket"
					style={{
						width: "100%",
						height: "187px",
						borderRadius: "10px",
					}}
				/>
			</Grid>
		</Grid>
	);
};

export default DashboardLeftCard;
