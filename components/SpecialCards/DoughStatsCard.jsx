import { MenuBook } from "@mui/icons-material";
import { Avatar, Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

const DoughStatsCard = () => {
	return (
		<Box>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				flexWrap={"wrap"}
				gap={1}
			>
				<Avatar sx={{ width: 15, height: 15, bgcolor: "pink", p: 2 }}>
					<MenuBook />
				</Avatar>
				<Typography>Courses</Typography>
			</Box>
			<Box mt={2}>
				<Typography
					sx={{
						fontSize: "1.25rem",
					}}
				>
					26k
				</Typography>
				<LinearProgress color="inherit" variant="determinate" value={26} />
			</Box>
		</Box>
	);
};

export default DoughStatsCard;
