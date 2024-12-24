import React from "react";
import LineReChart from "../../components/lineChart";
import BarReChart from "../../components/barChart";
import CircleReChart from "../../components/circleChart";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const HomePage = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab
							label="Line charts"
							{...a11yProps(0)}
						/>
						<Tab
							label="Bar Chart"
							{...a11yProps(1)}
						/>
						<Tab
							label="Circle charts"
							{...a11yProps(2)}
						/>
					</Tabs>
				</Box>
				<CustomTabPanel
					value={value}
					index={0}
				>
					<LineReChart />
				</CustomTabPanel>
				<CustomTabPanel
					value={value}
					index={1}
				>
					<BarReChart />
				</CustomTabPanel>
				<CustomTabPanel
					value={value}
					index={2}
				>
					<CircleReChart />
				</CustomTabPanel>
			</Box>
		</div>
	);
};
export default HomePage;
