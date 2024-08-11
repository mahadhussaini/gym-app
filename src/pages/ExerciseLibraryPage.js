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

const exercises = [
  { id: 1, name: "Push-Up", category: "Chest" },
  { id: 2, name: "Squat", category: "Legs" },
  { id: 3, name: "Deadlift", category: "Back" },
  { id: 4, name: "Bench Press", category: "Chest" },
  { id: 5, name: "Overhead Press", category: "Shoulders" },
  { id: 6, name: "Pull-Up", category: "Back" },
  { id: 7, name: "Bicep Curl", category: "Arms" },
  { id: 8, name: "Tricep Dip", category: "Arms" },
  { id: 9, name: "Lunges", category: "Legs" },
  { id: 10, name: "Plank", category: "Core" },
  { id: 11, name: "Leg Raise", category: "Core" },
  { id: 12, name: "Russian Twist", category: "Core" },
  { id: 13, name: "Calf Raise", category: "Legs" },
  { id: 14, name: "Dumbbell Row", category: "Back" },
  { id: 15, name: "Arnold Press", category: "Shoulders" },
  { id: 16, name: "Chest Fly", category: "Chest" },
  { id: 17, name: "Leg Press", category: "Legs" },
  { id: 18, name: "Hammer Curl", category: "Arms" },
  { id: 19, name: "Skullcrusher", category: "Arms" },
  { id: 20, name: "Side Plank", category: "Core" },
  { id: 21, name: "Mountain Climbers", category: "Core" },
  { id: 22, name: "Burpees", category: "Full Body" },
  { id: 23, name: "Hip Thrust", category: "Glutes" },
  { id: 24, name: "Kettlebell Swing", category: "Full Body" },
];

const StyledCard = styled(Card)`
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border-radius: 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const BackgroundBox = styled(Box)`
  background: linear-gradient(to right, #ece9e6, #ffffff);
  min-height: 100vh;
  padding: 40px 0;
`;

function ExerciseLibraryPage() {
  return (
    <BackgroundBox>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Exercise Library
        </Typography>
        <Grid container spacing={4}>
          {exercises.map((exercise) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={exercise.id}>
              <StyledCard>
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    {exercise.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ color: "text.secondary" }}
                  >
                    {exercise.category}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </BackgroundBox>
  );
}

export default ExerciseLibraryPage;
