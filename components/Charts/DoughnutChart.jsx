import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const doughnutData = {
	labels: ["Courses", "Quizzes", "Videos", "Blogs"],
	datasets: [
		{
			label: "Stats",
			data: [5, 2, 5, 2],
			backgroundColor: [
				"rgb(0, 162, 0)",
				"rgb(255, 0, 0)",
				"gray",
				"rgb(255, 255, 0)",
			],
			hoverOffset: 4,
		},
	],
	cutout: "80%",
};
const DoughnutChart = () => {
	return <Doughnut data={doughnutData} />;
};
export default DoughnutChart;
