import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CHART_TEMPLATE } from "../../helpers/template";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const BarReChart = () => {
	const [dataTemp, setDataTemp] = useState(null);

	useEffect(() => {
		let valueB = 0;
		let valueA = 0;

		// eslint-disable-next-line array-callback-return
		CHART_TEMPLATE.map((item) => {
			if (item.category === "A") {
				valueA = item.value + valueA;
			}
			if (item.category === "B") {
				valueB = item.value + valueB;
			}
		});

		setDataTemp([
			{
				category: "A",
				value: valueA,
			},
			{
				category: "B",
				value: valueB,
			},
		]);
	}, []);

	return (
		<Box
			sx={{
				width: "100%",
			}}
		>
			<ResponsiveContainer
				width={"100%"}
				height={300}
			>
				<BarChart
					width={400}
					height={400}
					data={dataTemp && dataTemp}
				>
					<XAxis dataKey="category" />
					<Bar
						dataKey="value"
						fill="#8884d8"
					/>
					<YAxis />
				</BarChart>
			</ResponsiveContainer>
		</Box>
	);
};

export default BarReChart;
