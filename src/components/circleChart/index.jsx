import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { CHART_CIRCLE_A, CHART_CIRCLE_B } from "../../helpers/template";

const CircleReChart = () => {
	return (
		<ResponsiveContainer
			width={"100%"}
			height={300}
		>
			<PieChart
				width={400}
				height={400}
			>
				<Pie
					data={CHART_CIRCLE_A}
					dataKey="value"
					cx="50%"
					cy="50%"
					outerRadius={60}
					fill="#8884d8"
				/>
				<Pie
					data={CHART_CIRCLE_B}
					dataKey="value"
					cx="50%"
					cy="50%"
					innerRadius={70}
					outerRadius={90}
					fill="#82ca9d"
					label
				/>
			</PieChart>
		</ResponsiveContainer>
	);
};

export default CircleReChart;
