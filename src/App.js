import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WorkoutPlansPage from "./pages/WorkoutPlansPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ExerciseLibraryPage from "./pages/ExerciseLibraryPage";
import WorkoutLogPage from "./pages/WorkoutLogPage";
import PrivateRoute from "./routes/PrivateRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/workout-plans" element={<WorkoutPlansPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route
                path="/exercise-library"
                element={
                  <PrivateRoute>
                    <ExerciseLibraryPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/workout-log"
                element={
                  <PrivateRoute>
                    <WorkoutLogPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
