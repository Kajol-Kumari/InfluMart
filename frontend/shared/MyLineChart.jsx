// LineChart.js
import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, View, Text, StyleSheet } from "react-native";
import { formatNumber } from "../helpers/GraphData";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#FFFFFF",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFFFFF",
  backgroundGradientToOpacity: 0,
  color: (opacity = 0.5) => `rgba(99, 112, 135, ${opacity})`,
  strokeWidth: 5, // thicker line
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  propsForBackgroundLines: {
    strokeDasharray: "", // This will remove the grid lines (no dash array)
    strokeWidth: 0, // Ensure no stroke width for background lines
  },
  hideLegend: true, // Hide legend if not needed
  decimalPlaces: 0, // Removes decimal places from values
  hideHorizontalGridLines: true,
  hideVerticalGridLines: true,
};

const MyLineChart = ({ tracking, data, title }) => {

  const chartData = {
    labels: tracking,
    datasets: [
      {
        data: data,
        color: (opacity = 1) => `rgba(99, 112, 135, ${opacity})`, // line color
        strokeWidth: 6, // thicker line
      },
    ],
  };

  return (
    <View>
      <LineChart
        data={chartData}
        width={450}
        height={220}
        formatYLabel={formatNumber}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
};


export default MyLineChart;
