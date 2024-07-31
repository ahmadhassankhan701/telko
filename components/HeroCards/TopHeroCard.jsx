import { ArrowForward, ArrowForwardIosOutlined } from "@mui/icons-material";
import { Box, Avatar, Typography, Button } from "@mui/material";
const TopHeroCard = ({ image, title, subtitle }) => {
	return (
		<Box
			display={"flex"}
			gap={3}
			alignItems={"center"}
			borderRadius={5}
			padding={3}
			boxShadow={
				"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
			}
			height={130}
		>
			<Box>
				<Avatar
					src={image}
					sizes="large"
					sx={{
						bgcolor: "rgba(255, 70, 105, 0.08)",
						fontSize: 100,
						padding: 1,
						borderRadius: 2,
					}}
				/>
			</Box>
			<Box display={"flex"} flexDirection={"column"}>
				<Typography
					sx={{
						fontWeight: "700",
						fontSize: 20,
						lineHeight: 1.3,
						paddingBottom: 1,
						maxWidth: 175,
						color: "rgb(33,37,41)",
					}}
				>
					{title}
				</Typography>
				<Box
					display={"flex"}
					alignItems={"center"}
					gap={1}
					sx={{ cursor: "pointer" }}
				>
					<Typography
						sx={{
							color: "#4A5355",
							fontSize: 16,
							fontWeight: 600,
							cursor: "pointer",
							textTransform: "none",
						}}
					>
						{subtitle}
					</Typography>
					<ArrowForward sx={{ color: "#4A5355" }} />
				</Box>
			</Box>
		</Box>
	);
};

export default TopHeroCard;
