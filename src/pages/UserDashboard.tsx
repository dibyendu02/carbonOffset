import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../components/ui/card";

import { Link, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import TopUpWithdrawChart from "../components/TopUpWithdrawChart";
import CarbonOffsetChart from "../components/CarbonOffsetChart";
import MetricsCard from "../components/charts/MetricsCard";
import AreaChart from "../components/charts/AreaChart";
import StackedBarChart from "../components/charts/StackedBarChart";
import { generateMockData } from "../data/dashboardData";

export default function UserUpdates() {
  const navigate = useNavigate();
  const dashboardData = generateMockData();

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" to="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <Button
            onClick={() => {
              // dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <h1 className="font-bold text-2xl">Dashboard Overview</h1>

          {/* Enhanced KPI Cards with Sparklines */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <MetricsCard
              title="Account Balance"
              value={dashboardData.accountBalance.current}
              trend={dashboardData.accountBalance.changePercent}
              sparklineData={dashboardData.accountBalance.trend}
              format="currency"
              gradientFrom="#16c784"
              gradientTo="#0e8a54"
            />
            <MetricsCard
              title="Available Tokens"
              value={dashboardData.tokens.available}
              trend={0.5}
              sparklineData={dashboardData.tokens.balance}
              format="number"
              gradientFrom="#4BAF47"
              gradientTo="#16c784"
            />
            <MetricsCard
              title="Used Tokens"
              value={dashboardData.tokens.used}
              trend={-2.1}
              sparklineData={dashboardData.tokens.monthlyUsed}
              format="number"
              gradientFrom="#3B82F6"
              gradientTo="#1E40AF"
            />
            <MetricsCard
              title="CO2 Offset (tons)"
              value={dashboardData.emissions.total.reduce((a, b) => a + b, 0) / 1000}
              trend={3.8}
              sparklineData={dashboardData.emissions.total}
              format="decimal"
              gradientFrom="#10B981"
              gradientTo="#059669"
            />
          </div>

          {/* Charts Section - Emissions Trends and Category Breakdown */}
          <div className="grid gap-6 lg:grid-cols-2 mt-6">
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg font-bold">Emissions Trend (kg CO2)</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="h-[300px]">
                  <AreaChart
                    data={dashboardData.emissions.total}
                    label="Total Emissions"
                    color="#16c784"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg font-bold">Category Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="h-[300px]">
                  <StackedBarChart
                    data={dashboardData.emissions.monthly}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Original Charts - Token Activity and Offset Progress */}
          <div className="grid gap-6 lg:grid-cols-3 mt-6">
            <Card className="p-6 lg:col-span-2">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg font-bold">Token Activity</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <TopUpWithdrawChart />
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg font-bold text-center">Carbon Offset Progress</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0 flex flex-col items-center">
                <CarbonOffsetChart />
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    {dashboardData.offsets.achieved} / {dashboardData.offsets.target} tons offset
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {dashboardData.offsets.percentComplete}% Complete
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function Package2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
