import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { stackedBarChartOptions } from "../../lib/chartUtils";
import { MONTH_LABELS, CHART_COLORS } from "../../data/dashboardData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface StackedBarChartProps {
  data: {
    electric?: number[];
    animals?: number[];
    heat?: number[];
    vehicle?: number[];
    air?: number[];
    rail?: number[];
    shipping?: number[];
  };
  labels?: string[];
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  labels = MONTH_LABELS,
}) => {
  const datasets = [];

  // Add datasets for each category
  if (data.electric) {
    datasets.push({
      label: "Electric",
      data: data.electric,
      backgroundColor: CHART_COLORS.electric,
      maxBarThickness: 40,
    });
  }

  if (data.vehicle) {
    datasets.push({
      label: "Vehicle",
      data: data.vehicle,
      backgroundColor: CHART_COLORS.vehicle,
      maxBarThickness: 40,
    });
  }

  if (data.air) {
    datasets.push({
      label: "Air Travel",
      data: data.air,
      backgroundColor: CHART_COLORS.air,
      maxBarThickness: 40,
    });
  }

  if (data.heat) {
    datasets.push({
      label: "Heat",
      data: data.heat,
      backgroundColor: CHART_COLORS.heat,
      maxBarThickness: 40,
    });
  }

  if (data.animals) {
    datasets.push({
      label: "Animals",
      data: data.animals,
      backgroundColor: CHART_COLORS.animals,
      maxBarThickness: 40,
    });
  }

  if (data.rail) {
    datasets.push({
      label: "Rail",
      data: data.rail,
      backgroundColor: CHART_COLORS.rail,
      maxBarThickness: 40,
    });
  }

  if (data.shipping) {
    datasets.push({
      label: "Shipping",
      data: data.shipping,
      backgroundColor: CHART_COLORS.shipping,
      maxBarThickness: 40,
    });
  }

  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Bar data={chartData} options={stackedBarChartOptions} />
    </div>
  );
};

export default StackedBarChart;
