import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CHART_TEMPLATE } from "../../helpers/template";
import { Box, Button } from "@mui/material";
import dayjs from "dayjs";

const LineReChart = () => {
	const [category, setCategory] = useState("all");

	// Шаблоны данных
	const [dateTemplate, setDateTemplate] = useState(CHART_TEMPLATE);
	const [categoryTemplate, setCategoryTemplate] = useState("all");

	// Даты
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	// Изменение шаблона в зависимости от стартовой даты
	function handleChangeStartDate(date) {
		setStartDate(date);
		const arr = CHART_TEMPLATE.filter((item) => dayjs(date) <= dayjs(item.date));
		if (endDate) {
			const arrWithEnd = arr.filter((item) => dayjs(endDate) >= dayjs(item.date));
			return setDateTemplate(arrWithEnd);
		} else {
			setDateTemplate(arr);
		}
	}

	// Изменение шаблона в зависимости от конечной даты
	function handleChangeEndDate(date) {
		setEndDate(date);
		const arr = CHART_TEMPLATE.filter((item) => dayjs(date) >= dayjs(item.date));
		if (startDate) {
			const arrWithStart = arr.filter((item) => dayjs(startDate) <= dayjs(item.date));
			return setDateTemplate(arrWithStart);
		} else {
			setDateTemplate(arr);
		}
	}

	// Изменение шаблона в зависимости от категории
	function handleChangeCat(cat) {
		setCategory(cat);
		if (cat === "A") {
			const arr = dateTemplate.filter((item) => item.category === "A");
			setCategoryTemplate(arr);
		}
		if (cat === "B") {
			const arr = dateTemplate.filter((item) => item.category === "B");
			setCategoryTemplate(arr);
		}
	}

	return (
		<Box
			sx={{
				width: "100%",
				justifyItems: "center",
			}}
		>
			<Box py={2}>
				<DatePicker
					sx={{
						pr: 2,
					}}
					label="От"
					onChange={(newValue) => handleChangeStartDate(newValue)}
				/>
				<DatePicker
					label="До"
					onChange={(newValue) => handleChangeEndDate(newValue)}
				/>
			</Box>
			<Box>
				<Button onClick={() => handleChangeCat("A")}>category A</Button>
				<Button onClick={() => handleChangeCat("B")}>category B</Button>
				<Button onClick={() => handleChangeCat("all")}>all categories</Button>
			</Box>

			<Box
				sx={{
					width: "100%",
				}}
			>
				<ResponsiveContainer
					width={"100%"}
					height={300}
				>
					<LineChart
						width={500}
						height={300}
						data={category === "all" ? dateTemplate : categoryTemplate}
						margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray="3 3" />

						<Line
							type="monotone"
							dataKey="value"
							stroke="#8884d8"
						/>
						<XAxis dataKey="date" />
						<YAxis />
					</LineChart>
				</ResponsiveContainer>
			</Box>
		</Box>
	);
};
export default LineReChart;
