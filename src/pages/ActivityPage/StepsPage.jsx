import PageTitle from "@/components/PageTitle";
import React, { useEffect, useState } from "react";
import stepsData from "@/data/steps.json";

const StepsPage = () => {
  let totalSteps = 0;
  let dailySteps = []; // Array to hold the total steps per day
  let labels = []; // Array to hold the labels for the graph (e.g., dates)

  stepsData.bucket.forEach((bucket) => {
    let stepsPerDay = 0;
    bucket.dataset.forEach((dataset) => {
      dataset.point.forEach((point) => {
        stepsPerDay += point.value[0].intVal; // Assuming each `point` has a step count
      });
    });
    totalSteps += stepsPerDay;

    // Convert startTimeMillis to a readable date format for labels
    const date = new Date(
      parseInt(bucket.startTimeMillis)
    ).toLocaleDateString();
    labels.push(date);
    dailySteps.push(stepsPerDay);
  });

  console.log(totalSteps,dailySteps,labels)

  return (
    <div className="px-4 pb-44">
      <PageTitle title="Steps" />
    </div>
  );
};

export default StepsPage;
