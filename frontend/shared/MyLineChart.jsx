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
  strokeWidth: 5,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  propsForBackgroundLines: {
    strokeDasharray: "",
    strokeWidth: 0,
  },
  hideLegend: true,
  decimalPlaces: 0,
  hideHorizontalGridLines: true,
  hideVerticalGridLines: true,
};

const MyLineChart = ({ tracking, data, title }) => {

  const isValidData = (data) => {
    return data.every((point) => !isNaN(point));
  };

  const validatedData = data.map(point => 
    point !== undefined && point !== " " ? Number(point) : 0
  );

  if (!isValidData(validatedData)) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Data Not Available</Text>
      </View>
    );
  }

  const chartData = {
    labels: tracking,
    datasets: [
      {
        data: validatedData,
        color: (opacity = 1) => `rgba(99, 112, 135, ${opacity})`,
        strokeWidth: 6,
      },
    ],
  };

  return (
    <View>
      <LineChart
        data={chartData}
        width={screenWidth}
        height={220}
        formatYLabel={formatNumber}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 220,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default MyLineChart;
