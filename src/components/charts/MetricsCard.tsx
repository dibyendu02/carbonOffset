import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import SparklineChart from "./SparklineChart";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { getTrendDirection } from "../../lib/chartUtils";

interface MetricsCardProps {
  title: string;
  value: number | string;
  trend?: number;
  sparklineData?: number[];
  format?: "currency" | "number" | "decimal";
  icon?: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  trend,
  sparklineData,
  format = "number",
  icon,
  gradientFrom = "#16c784",
  gradientTo = "#4BAF47",
}) => {
  const formatValue = (val: number | string): string => {
    if (typeof val === "string") return val;

    switch (format) {
      case "currency":
        return `$${val.toFixed(2)}`;
      case "decimal":
        return val.toFixed(2);
      case "number":
      default:
        return val.toLocaleString();
    }
  };

  const trendDirection = trend !== undefined ? getTrendDirection(trend) : null;
  const showTrend = trend !== undefined && trend !== 0;

  return (
    <Card
      className="shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-white">
          {title}
        </CardTitle>
        {icon && <div className="text-white opacity-75">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-white mb-2">
          {formatValue(value)}
        </div>

        {/* Trend indicator */}
        {showTrend && (
          <div className="flex items-center gap-2 mb-2">
            {trendDirection === "up" ? (
              <FaArrowUp className="text-white text-sm" />
            ) : trendDirection === "down" ? (
              <FaArrowDown className="text-white text-sm" />
            ) : null}
            <span className="text-sm text-white font-medium">
              {Math.abs(trend).toFixed(1)}%
            </span>
            <span className="text-xs text-white opacity-75">vs last month</span>
          </div>
        )}

        {/* Sparkline */}
        {sparklineData && sparklineData.length > 0 && (
          <div className="mt-3">
            <SparklineChart
              data={sparklineData}
              color="rgba(255, 255, 255, 0.8)"
              height={35}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
