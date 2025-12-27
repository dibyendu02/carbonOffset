// Dashboard mock data generator for realistic analytics

export interface DashboardMetrics {
  accountBalance: {
    current: number;
    previous: number;
    trend: number[];
    changePercent: number;
  };
  tokens: {
    available: number;
    used: number;
    total: number;
    trend: number[];
    monthlyPurchased: number[];
    monthlyUsed: number[];
    balance: number[];
  };
  emissions: {
    monthly: {
      electric: number[];
      animals: number[];
      heat: number[];
      vehicle: number[];
      air: number[];
      rail: number[];
      shipping: number[];
    };
    total: number[];
    categories: Record<string, number>;
  };
  offsets: {
    achieved: number;
    target: number;
    percentComplete: number;
  };
}

export const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * Generate realistic mock dashboard data
 */
export const generateMockData = (): DashboardMetrics => {
  // Generate realistic emission trends (decreasing over time)
  const electricData = [400, 380, 420, 410, 350, 340, 330, 320, 360, 370, 350, 330];
  const vehicleData = [500, 480, 520, 510, 450, 430, 420, 400, 440, 450, 430, 410];
  const airData = [200, 190, 250, 220, 200, 180, 150, 130, 180, 200, 180, 150];
  const heatData = [180, 170, 150, 120, 90, 60, 40, 40, 60, 100, 140, 160];
  const animalsData = [100, 100, 110, 110, 100, 100, 100, 100, 100, 100, 90, 90];
  const railData = [50, 55, 60, 58, 62, 65, 68, 70, 72, 75, 78, 80];
  const shippingData = [30, 28, 32, 35, 33, 30, 28, 25, 27, 30, 32, 35];

  // Calculate total emissions
  const totalEmissions = electricData.map((_, index) =>
    electricData[index] +
    vehicleData[index] +
    airData[index] +
    heatData[index] +
    animalsData[index] +
    railData[index] +
    shippingData[index]
  );

  // Token purchase and usage trends
  const tokenPurchased = [5, 4, 6, 5, 4, 3, 3, 2, 4, 4, 3, 2];
  const tokenUsed = [3, 4, 5, 4, 3, 3, 2, 2, 3, 3, 3, 2];

  // Calculate running balance
  const balance: number[] = [];
  let currentBalance = 450;
  tokenPurchased.forEach((purchased, index) => {
    currentBalance += purchased - tokenUsed[index];
    balance.push(currentBalance);
  });

  // Calculate total category emissions for pie chart
  const totalElectric = electricData.reduce((a, b) => a + b, 0);
  const totalVehicle = vehicleData.reduce((a, b) => a + b, 0);
  const totalAir = airData.reduce((a, b) => a + b, 0);
  const totalHeat = heatData.reduce((a, b) => a + b, 0);
  const totalAnimals = animalsData.reduce((a, b) => a + b, 0);
  const totalRail = railData.reduce((a, b) => a + b, 0);
  const totalShipping = shippingData.reduce((a, b) => a + b, 0);

  return {
    accountBalance: {
      current: balance[balance.length - 1] * 1.2, // Convert to dollars
      previous: balance[balance.length - 2] * 1.2,
      trend: balance.map((b) => b * 1.2),
      changePercent: 5.2,
    },
    tokens: {
      available: balance[balance.length - 1],
      used: tokenUsed.reduce((a, b) => a + b, 0),
      total: tokenPurchased.reduce((a, b) => a + b, 0),
      trend: balance,
      monthlyPurchased: tokenPurchased,
      monthlyUsed: tokenUsed,
      balance: balance,
    },
    emissions: {
      monthly: {
        electric: electricData,
        animals: animalsData,
        heat: heatData,
        vehicle: vehicleData,
        air: airData,
        rail: railData,
        shipping: shippingData,
      },
      total: totalEmissions,
      categories: {
        electric: totalElectric,
        vehicle: totalVehicle,
        air: totalAir,
        heat: totalHeat,
        animals: totalAnimals,
        rail: totalRail,
        shipping: totalShipping,
      },
    },
    offsets: {
      achieved: 35,
      target: 100,
      percentComplete: 35,
    },
  };
};

// Chart color palette
export const CHART_COLORS = {
  electric: "#3B82F6", // Blue
  animals: "#10B981", // Green
  heat: "#F59E0B", // Amber
  vehicle: "#EF4444", // Red
  air: "#8B5CF6", // Purple
  rail: "#06B6D4", // Cyan
  shipping: "#EC4899", // Pink
  primary: "#16c784",
  secondary: "#4BAF47",
  gradient: {
    primary: ["#16c784", "#4BAF47"],
    secondary: ["#1814F3", "#16DBCC"],
  },
};
