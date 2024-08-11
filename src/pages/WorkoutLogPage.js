import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  Alert,
} from "@mui/material";

function WorkoutLogPage() {
  const [exercise, setExercise] = useState("");
  const [log, setLog] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const addLogEntry = () => {
    if (exercise.trim() === "") {
      setSnackbarMessage("Please enter an exercise.");
      setOpenSnackbar(true);
      return;
    }
    // @ts-ignore
    setLog([...log, exercise]);
    setExercise("");
    setSnackbarMessage("Exercise added to log.");
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom align="center">
        Workout Log
      </Typography>
      <TextField
        label="Exercise"
        variant="outlined"
        fullWidth
        margin="normal"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        inputProps={{ "aria-label": "exercise" }}
        autoComplete="off"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={addLogEntry}
        style={{ marginTop: "1rem" }}
      >
        Add to Log
      </Button>
      <List style={{ marginTop: "1rem" }}>
        {log.map((entry, index) => (
          <ListItem key={index}>
            <ListItemText primary={entry} />
          </ListItem>
        ))}
      </List>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarMessage.includes("Please") ? "warning" : "success"}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default WorkoutLogPage;
