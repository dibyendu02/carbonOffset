import { ChartOptions } from "chart.js";

// Common chart options for consistency
export const commonChartOptions: ChartOptions<any> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        usePointStyle: true,
        padding: 15,
        font: {
          size: 11,
        },
      },
    },
    tooltip: {
      mode: "index",
      intersect: false,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      padding: 12,
      titleFont: {
        size: 13,
        weight: "bold",
      },
      bodyFont: {
        size: 12,
      },
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderWidth: 1,
    },
  },
};

/**
 * Create gradient for chart backgrounds
 */
export const createGradient = (
  ctx: CanvasRenderingContext2D,
  color: string,
  alpha: number = 0.5
): CanvasGradient => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, color + Math.round(alpha * 255).toString(16).padStart(2, "0"));
  gradient.addColorStop(1, color + "00"); // Fully transparent
  return gradient;
};

/**
 * Format large numbers with K/M suffixes
 */
export const formatNumber = (value: number): string => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + "M";
  }
  if (value >= 1000) {
    return (value / 1000).toFixed(1) + "K";
  }
  return value.toFixed(0);
};

/**
 * Calculate percentage change
 */
export const getPercentageChange = (current: number, previous: number): number => {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
};

/**
 * Get trend direction
 */
export const getTrendDirection = (trend: number): "up" | "down" | "stable" => {
  if (trend > 0.5) return "up";
  if (trend < -0.5) return "down";
  return "stable";
};

/**
 * Line chart options
 */
export const lineChartOptions: ChartOptions<"line"> = {
  ...commonChartOptions,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 11,
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
      },
      ticks: {
        font: {
          size: 11,
        },
        callback: function (value) {
          return formatNumber(value as number);
        },
      },
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
};

/**
 * Area chart options (line chart with fill)
 */
export const areaChartOptions: ChartOptions<"line"> = {
  ...lineChartOptions,
  elements: {
    line: {
      tension: 0.4, // Smooth curves
    },
  },
};

/**
 * Bar chart options
 */
export const barChartOptions: ChartOptions<"bar"> = {
  ...commonChartOptions,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 11,
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
      },
      ticks: {
        font: {
          size: 11,
        },
        callback: function (value) {
          return formatNumber(value as number);
        },
      },
    },
  },
};

/**
 * Stacked bar chart options
 */
export const stackedBarChartOptions: ChartOptions<"bar"> = {
  ...barChartOptions,
  scales: {
    ...barChartOptions.scales,
    x: {
      ...barChartOptions.scales!.x,
      stacked: true,
    },
    y: {
      ...barChartOptions.scales!.y,
      stacked: true,
    },
  },
};

/**
 * Doughnut chart options
 */
export const doughnutChartOptions: ChartOptions<"doughnut"> = {
  ...commonChartOptions,
  cutout: "70%",
  plugins: {
    ...commonChartOptions.plugins,
    legend: {
      position: "bottom" as const,
      labels: {
        usePointStyle: true,
        padding: 15,
        font: {
          size: 11,
        },
      },
    },
  },
};

/**
 * Sparkline options (minimal chart for KPI cards)
 */
export const sparklineOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  elements: {
    line: {
      borderWidth: 2,
      tension: 0.4,
    },
    point: {
      radius: 0,
    },
  },
};
