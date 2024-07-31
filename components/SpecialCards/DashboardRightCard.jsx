import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const DashboardRightCard = () => {
	return (
		<Grid
			container
			mt={2}
			spacing={{ xs: 0, md: 0, lg: 0 }}
			borderRadius={3}
			bgcolor={"#fff"}
			boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
			p={2}
			sx={{
				backgroundImage: "url(/dashboard_right_card.png)",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
		>
			<Grid
				item
				xs={12}
				display={"flex"}
				justifyContent={"center"}
				flexDirection={"column"}
				height={200}
			>
				<Box>
					<Typography
						sx={{
							fontSize: "1rem",
							fontWeight: "500",
							letterSpacing: "0.1em",
							color: "#fff",
						}}
					>
						Build by developers
					</Typography>
					<Typography
						sx={{
							fontSize: "1.25rem",
							fontWeight: "700",
							letterSpacing: "0em",
							color: "#fff",
						}}
					>
						Soft UI Dashboard
					</Typography>
					<Typography
						sx={{
							fontSize: "1rem",
							fontWeight: "400",
							letterSpacing: "0.01071em",
							color: "#fff",
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
		</Grid>
	);
};

export default DashboardRightCard;
