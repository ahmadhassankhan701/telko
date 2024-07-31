"use client";
import {
	Avatar,
	Box,
	Button,
	Grid,
	InputBase,
	styled,
	Typography,
} from "@mui/material";
import SideBar from "@/components/SideBar";
import StatsCard from "@/components/SpecialCards/StatsCard";
import {
	EditNoteOutlined,
	Logout,
	MenuBookOutlined,
	PlayCircleOutlineRounded,
	QuizOutlined,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
const Search = styled("div")(({ theme }) => ({
	backgroundColor: "#fff",
	borderRadius: 20,
	position: "relative",
	marginLeft: 0,
	boxShadow:
		"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "#A0AAB4",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "#A0AAB4",
	fontSize: 12,
	width: "100%",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));
import { DoughnutChart, StackedBarChart } from "@/components/Charts/AllCharts";
import DashboardLeftCard from "@/components/SpecialCards/DashboardLeftCard";
import DashboardRightCard from "@/components/SpecialCards/DashboardRightCard";
import DoughStatsCard from "@/components/SpecialCards/DoughStatsCard";
import LineChartComp from "@/components/Charts/LineChartComp";
const Dashboard = () => {
	return (
		<Box>
			<Box sx={{ mx: { xs: 1, lg: 10 }, mt: 10 }}>
				<SideBar active={"Dashboard"}>
					<Grid container spacing={1} mb={2}>
						<Grid item xs={12} sm={6}>
							<Typography
								sx={{
									fontSize: 28,
									fontWeight: "800",
									color: "#A6A6A6",
								}}
							>
								Dashboard
							</Typography>
							<Typography
								sx={{
									fontSize: 16,
									fontWeight: "800",
									color: "#A0AAB4",
								}}
							>
								Your Statistics
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box
								display={"flex"}
								alignItems={"center"}
								justifyContent={"flex-end"}
								width={"100%"}
							>
								<Search>
									<SearchIconWrapper>
										<SearchIcon fontSize="10px" />
									</SearchIconWrapper>
									<StyledInputBase
										placeholder="Search…"
										inputProps={{ "aria-label": "search" }}
									/>
								</Search>
								<Box
									display={"flex"}
									gap={2}
									alignItems={"center"}
									borderRadius={20}
									px={2}
									py={0.5}
								>
									<Logout sx={{ color: "#A0AAB4", fontSize: 20 }} />
									<Avatar
										alt="Remy Sharp"
										src="/images/favicon.png"
										sx={{ width: 30, height: 30, bgcolor: "pink" }}
									/>
								</Box>
							</Box>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={12} sm={6} lg={3}>
							<StatsCard
								icon={<MenuBookOutlined />}
								title={"courses"}
								figures={"50+"}
								color="red"
							/>
						</Grid>
						<Grid item xs={12} sm={6} lg={3}>
							<StatsCard
								icon={<QuizOutlined />}
								title={"quizzes"}
								figures={"500+"}
								color="green"
							/>
						</Grid>
						<Grid item xs={12} sm={6} lg={3}>
							<StatsCard
								icon={<PlayCircleOutlineRounded />}
								title={"videos"}
								figures={"50+"}
								color="blue"
							/>
						</Grid>
						<Grid item xs={12} sm={6} lg={3}>
							<StatsCard
								icon={<EditNoteOutlined />}
								title={"blogs"}
								figures={"150+"}
								color="orange"
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2} mt={2}>
						<Grid item xs={12} md={6}>
							<DashboardLeftCard />
						</Grid>
						<Grid item xs={12} md={6}>
							<DashboardRightCard />
						</Grid>
					</Grid>
					<Grid
						container
						spacing={2}
						mt={5}
						display={"flex"}
						justifyContent={"center"}
					>
						<Grid item xs={12} sm={6}>
							<Box
								sx={{
									backgroundColor: "#fff",
									borderRadius: 3,
									boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
									width: "100%",
									p: 2,
								}}
							>
								<StackedBarChart />
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box
								sx={{
									backgroundColor: "#fff",
									borderRadius: 3,
									boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
									width: "100%",
									p: 2,
								}}
							>
								<LineChartComp />
								<Typography
									sx={{
										fontSize: "1rem",
										fontWeight: "500",
										letterSpacing: "0.1em",
										color: "#A0AAB4",
										mt: 2,
									}}
								>
									Recent Stats
								</Typography>
								<Box
									display={"flex"}
									alignItems={"center"}
									justifyContent={"space-between"}
									mt={2}
								>
									<DoughStatsCard />
									<DoughStatsCard />
									<DoughStatsCard />
									<DoughStatsCard />
								</Box>
							</Box>
						</Grid>
					</Grid>
				</SideBar>
			</Box>
		</Box>
	);
};

export default Dashboard;
