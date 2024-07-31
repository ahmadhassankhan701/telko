import { Box, Typography, Grid, Container } from "@mui/material";
import PCourseWideCard from "./PCourseWideCard";
import PCourseSlimCard from "./PCourseSlimCard";

const PopularCourses = () => {
	return (
		<Box
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			flexDirection={"column"}
			mt={5}
		>
			<Typography
				component="h2"
				sx={{
					fontWeight: "800",
					fontSize: 36,
					lineHeight: 1.2,
					paddingBottom: 1,
					color: "#000",
					textAlign: "center",
				}}
			>
				Most Popular
				<span style={{ color: "#ff3158", marginLeft: 10 }}>Course</span>
			</Typography>
			<Typography
				sx={{
					fontWeight: "400",
					fontSize: 16,
					lineHeight: 1.5,
					paddingBottom: 1,
					color: "#4A5355",
					maxWidth: 650,
					mt: 1,
					textAlign: "center",
				}}
			>
				Architect client-centered total linkage for intuitive benefits.
				Dynamically restore before real-time partnerships total linkage for
				intuitive benefits .
			</Typography>
			<Container sx={{ mt: 5 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={6}>
						<PCourseWideCard
							image={"/popularCourseWideCard.jpg"}
							avatar="/avatar.png"
							title={"Book Library & Store"}
							subtitle={"View More"}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<PCourseSlimCard
							image={"/popularCourseCard1.jpg"}
							title={"10K+ Online Courses"}
							subtitle={"View More"}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<PCourseSlimCard
							image={"/popularCourseCard2.jpg"}
							title={"Expert Instructor"}
							subtitle={"View More"}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default PopularCourses;
