import { MenuBookOutlined } from "@mui/icons-material";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";

const StatsCard = ({ icon, title, figures, color = "red" }) => {
	return (
		<Box>
			<Box
				sx={{
					boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
					borderRadius: 3,
					bgcolor: "#fff",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					gap: 2,
					p: 1,
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						justifyContent: "center",
					}}
				>
					<Typography
						sx={{
							fontSize: 16,
							fontWeight: 700,
							color: "#A0AAB4",
						}}
					>
						{title}
					</Typography>
					<Typography
						sx={{
							fontSize: 24,
							fontWeight: 700,
							color: "#000",
						}}
					>
						{figures}
					</Typography>
				</Box>
				<Avatar sx={{ bgcolor: color, width: 50, height: 50, borderRadius: 3 }}>
					{icon}
				</Avatar>
			</Box>
		</Box>
	);
};

export default StatsCard;
