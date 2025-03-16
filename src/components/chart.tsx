"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { Area } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { TrendingUp } from "lucide-react";
import { AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "January", revenue: 30473, orders: 20000 },
  { month: "February", revenue: 56209, orders: 35000 },
  { month: "March", revenue: 61214, orders: 40000 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#4D6CE1",
  },
  orders: {
    label: "Orders",
    color: "#B1505C",
  },
} satisfies ChartConfig;

export default function Chart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue & Orders Overview</CardTitle>
        <CardDescription>Monthly revenue and order statistics</CardDescription>
      </CardHeader>
      <CardContent className="w-full overflow-x-auto">
        <div className="min-w-[600px] md:min-w-full">
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 10,
                left: 10,
                right: 20,
                bottom: 10,
              }}
              height={140}
              width={undefined}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="orders"
                type="monotone"
                fill="#B1505C"
                fillOpacity={0.6}
                stroke="#B1505C"
                strokeWidth={2}
                stackId="a"
              />
              <Area
                dataKey="revenue"
                type="monotone"
                fill="#4D6CE1"
                fillOpacity={0.6}
                stroke="#4D6CE1"
                strokeWidth={2}
                stackId="a"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Revenue growth +12.4% this month{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - March 2025
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
