import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)`
  padding: 2rem;
`;

const StyledCard = styled(Card)`
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border-radius: 12px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const BackgroundBox = styled(Box)`
  background: linear-gradient(to right, #f0f4f8, #ffffff);
  min-height: 100vh;
  padding: 2rem 0;
`;

const PlanTitle = styled(Typography)`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const PlanDescription = styled(Typography)`
  color: #555;
`;

function WorkoutPlansPage() {
  return (
    <BackgroundBox>
      <StyledContainer maxWidth="md">
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Workout Plans
        </Typography>
        <Grid container spacing={3}>
          {workoutPlans.map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan.id}>
              <StyledCard>
                <CardContent>
                  <PlanTitle variant="h5">{plan.name}</PlanTitle>
                  <PlanDescription>{plan.description}</PlanDescription>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </BackgroundBox>
  );
}

const workoutPlans = [
  { id: 1, name: "Beginner Plan", description: "A great start for beginners." },
  {
    id: 2,
    name: "Advanced Plan",
    description: "For those who want to push their limits.",
  },
  {
    id: 3,
    name: "Weight Loss Plan",
    description: "Focused on burning calories and shedding pounds.",
  },
  {
    id: 4,
    name: "Muscle Gain Plan",
    description: "Designed to help you build muscle and strength.",
  },
  {
    id: 5,
    name: "Cardio Plan",
    description:
      "Improves cardiovascular fitness with intense cardio workouts.",
  },
  {
    id: 6,
    name: "Strength Training Plan",
    description: "Build overall strength with a variety of exercises.",
  },
  {
    id: 7,
    name: "Flexibility Plan",
    description: "Enhance flexibility and mobility with targeted stretches.",
  },
  {
    id: 8,
    name: "Full Body Plan",
    description: "A balanced plan that works all major muscle groups.",
  },
  {
    id: 9,
    name: "Home Workout Plan",
    description: "Workouts you can do with minimal equipment at home.",
  },
  {
    id: 10,
    name: "High-Intensity Interval Training (HIIT) Plan",
    description: "Short, intense bursts of exercise followed by rest periods.",
  },
  {
    id: 11,
    name: "Yoga Plan",
    description:
      "Focuses on balance, flexibility, and mindfulness through yoga.",
  },
  {
    id: 12,
    name: "Running Plan",
    description: "Structured running workouts to improve endurance and speed.",
  },
  {
    id: 13,
    name: "Post-Rehabilitation Plan",
    description: "Gentle workouts designed to help recover from injuries.",
  },
  {
    id: 14,
    name: "Sports-Specific Plan",
    description: "Tailored workouts to enhance performance in specific sports.",
  },
  {
    id: 15,
    name: "Prenatal Plan",
    description: "Safe and effective workouts for expecting mothers.",
  },
];

export default WorkoutPlansPage;
