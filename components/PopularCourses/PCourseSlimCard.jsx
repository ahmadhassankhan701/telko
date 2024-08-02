import {
	Alarm,
	ArrowForward,
	RateReview,
	Star,
	StarOutline,
} from "@mui/icons-material";
import { Box, Avatar, Typography, Button } from "@mui/material";
const PCourseWideCard = ({
	image = "/heroCard2.png",
	avatar = "/avatar.png",
	title = "Course Title",
	rating = 4,
	number_of_ratings = 5,
	author = "Qasim",
	category = "MDCAT",
	cost = "Free",
}) => {
	return (
		<Box
			boxShadow={
				"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
			}
			sx={{
				height: 420,
				width: "100%",
				borderRadius: 5,
			}}
		>
			<Box position={"relative"}>
				<img
					src={image}
					alt="course"
					style={{
						width: "100%",
						height: 150,
						objectFit: "cover",
						borderTopLeftRadius: 10,
						borderTopRightRadius: 10,
					}}
				/>
				<Box
					position={"absolute"}
					bottom={8}
					right={2}
					bgcolor={"red"}
					color={"#fff"}
					px={2}
					py={1}
				>
					{cost == "Free" || cost == "free" ? cost : `Rs. ${cost}`}
				</Box>
			</Box>
			<Box
				sx={{
					padding: "15px 30px",
					width: "100%",
					height: "250px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<Box display={"flex"} gap={2} alignItems={"center"}>
					<Button
						variant="contained"
						size="small"
						sx={{
							bgcolor: "#FF3158",
							textTransform: "none",
							"&:hover": {
								bgcolor: "#FF3158",
							},
						}}
					>
						{category}
					</Button>
					<Box display={"flex"} color={"white"} gap={1} alignItems={"center"}>
						<Alarm sx={{ color: "#000" }} />
						<Typography color={"#000"} fontSize={14} fontWeight={"500"}>
							4 hours
						</Typography>
					</Box>
				</Box>
				<Typography
					component={"h2"}
					sx={{
						fontSize: 22,
						fontWeight: 600,
						color: "rgb(0, 25, 32)",
						mt: 2,
					}}
				>
					{title}
				</Typography>
				<Box
					display={"flex"}
					alignItems={"center"}
					gap={1}
					sx={{ cursor: "pointer", my: 2 }}
				>
					<Typography
						sx={{
							color: "rgb(74, 83, 85)",
							fontSize: 12,
							fontWeight: 400,
							cursor: "pointer",
							textTransform: "none",
						}}
					>
						{number_of_ratings} ratings
					</Typography>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<Star key={i+"-filled"} sx={{ color: "rgb(255, 164, 27)", fontSize: 14 }} />
						))
						.concat(
							Array(5 - rating)
								.fill()
								.map((_, i) => (
									<StarOutline
										key={i}
										sx={{ color: "rgb(255, 164, 27)", fontSize: 14 }}
									/>
								))
						)}
				</Box>
				<Box display={"flex"} gap={2}>
					<Box display={"flex"} alignItems={"center"} gap={1}>
						<Avatar src={avatar} sx={{ bgcolor: "transparent" }} />
					</Box>
					<Box>
						<Typography
							sx={{
								fontWeight: "700",
								fontSize: 16,
								paddingBottom: 1,
								color: "#000",
							}}
						>
							{author}
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default PCourseWideCard;
