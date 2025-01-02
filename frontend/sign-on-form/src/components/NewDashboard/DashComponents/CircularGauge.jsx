"use client"
/**
 * This file is responsble for the "Your Fit Score"
 * 
 */
import { TrendingUp } from 'lucide-react';
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card.tsx";
import { ChartContainer } from "@/components/ui/chart.tsx";
import { Progress } from "@/components/ui/progress.tsx";

export function CircularGauge({ score, feedBackLoaded, feedBackLoading, progress }) {
  const getColor = (score) => {
    if (score < 40) return "hsl(0, 100%, 50%)"; // Red for low scores
    if (score < 70) return "hsl(39, 100%, 50%)"; // Orange for medium scores
    return "hsl(120, 100%, 35%)"; // Green for high scores
  };

  const chartConfig = {
    score: {
      label: "Score",
      color: getColor(score),
    },
  };

  const chartData = [
    { name: "Score", score: score, fill: getColor(score) },
  ];

  return (
    <Card className="flex flex-col min-h-[300px]">
      <CardHeader className="pb-2">
        <CardTitle>Your Fit Score</CardTitle>
        <CardDescription className="mb-1">
          A score that shows how your resume compares to the job description.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pt-0 pb-0">
        {!feedBackLoaded && !feedBackLoading && (
          <div className="flex items-center justify-center h-full">
            <p>No data yet</p>
          </div>
        )}
        {feedBackLoading && (
          <div className="flex items-center justify-center h-full">
            <Progress value={progress} />
          </div>
        )}
        {feedBackLoaded && (
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <RadialBarChart
              data={chartData}
              startAngle={0}
              endAngle={180 + (score * 1.8)}
              innerRadius={80}
              outerRadius={110}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar 
                dataKey="score" 
                background 
                cornerRadius={10} 
                fill={getColor(score)}
              />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-4xl font-bold"
                          >
                            {score}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            out of 100
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        )}
      </CardContent>
      {feedBackLoaded && (
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            {score < 40 ? "Needs Improvement" : score < 70 ? "Looking Good" : "Excellent!"}
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            {score < 40
              ? "Take a look at the suggestions below to improve your score."
              : score < 70
              ? "You're on the right track. Check out some suggestions to make it even better."
              : "Great job! Your resume is well-matched to the job description."}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

