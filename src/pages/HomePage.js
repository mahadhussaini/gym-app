import React from "react";
import { Container, Typography, Grid, Card, Box } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import GroupIcon from "@mui/icons-material/Group";
import { styled } from "@mui/system";

const HeroSection = styled(Box)`
  background-image: url(https://lh3.googleusercontent.com/fife/ALs6j_FbvWa9lfaxkkWLq7bSoxXZ7DcRZcWYv2YCrwQSSRrSih0tx_pK7wnbQ3SasyQ7QQM9nBUt4ZHGBq2dsWROtwqmYG6htYDLvBsVK2vLbzQFuxsJrkaLh_rgvN95DxFwTFOgQFqYIF7NgsvS1wJT8e0p7p_V07BciXoftUrRfgj1wQEnexRs5Ek76H8fZvxAiA3UnkUUfupHVn8bYXPDvJfx_k7z9cRRQ0pxb9NSNy_IYB9-9PTEFY-vqIYz78vFHPV7_ZD4wSQbrYxAXHisf5G0RTfrO3aL_1nvEGqGQArm2MuTC4g3KsgUYboA0iObolL281drqp4u91ehozfg4stc-UTp3nQUviWdxc646jIsupMhTQmVxwaTSYfcB67URHbpfF5uvcOcaPSUUeWMx87gkQzr42tLSK-QBsekNZ5Y-Fih1DVpOGB-s6QuFoJpywDTf_bZCQW1JVsrXt0XiMl5_aePq3VGPhS-QM8GyOqMXQGgsuP76p3G2khNCyt0TUw25jYkGgYTXnzsXCSEOw7UqwV6xkviI0hGNOxk6ZLqfxn_9DV1kXKNw6M4qGWecMIh2W4-7L0FepIkFOdusNc7qaoMHDjS6IXmZ1uUClG6y3l2l94DOrE7ox3EcbhHlcF-cK91_hwA9Yi0KZOzvBFlWRYkbb-T8-aQsAEML3beUewVYVw9LrnCuJ7DM8tj6mpalnRdoHUAs7porDgYbvoUyVURy0_N7qdAWZc_f0ySSKETwThMRqH8ra5MCT1hMWNTH3dQ5MZHs8-O93FZe6ssx3ba33NQtAqf5EhkR3nMlRdPhv9sBFU_O2nwt4qk-824DQe0zkzRtOPwOKotpWF94CZHOpcxtelP45yimOUkftotyAPcqRDeOs49xeoCYXTeFonZJsxZ_KwqOzo8KMg4I_jQ5hfTKdH_z9yHuv4GDrv3hyti5gyTt2YtIHFuss7I7TKDkaU2LAKq_ocpS0mhFQhpQ0BHpJVwO28Yr85qqYIifBsvSU1be7lVBJ5gjR1x7h4Q15X56Dm_XqLh5Gj43aG1oWBrMprNTF1tl8X5P-GGcZ8nbg1cOiCVx9w9gBs6cvjFb0mk6Ar8ub0pbrKJJBCdUQ6bbHas3N03bKlUjIEmp2W1Y5aZCGGG3RtV96s9_cUl5e4cQCW_zWqEFo_NFg86vquPUY98fKQhEas_FKn9Mwn1DBh9ocoNokOA8Zi6NLCrKOwgjHOPOQwrsmio4wEo_CwV7o2X-Ktryu13wHwt2wWT3zouLxF82GsMZonVqVi-h6nCf_xq_PL8a-s=s512);
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 6rem 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled(Box)`
  backdrop-filter: blur(8px);
  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  max-width: 600px;
  margin: auto;
  @media (max-width: 600px) {
    padding: 2rem;
  }
`;

const FeatureCard = styled(Card)`
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const IconStyle = styled(Box)`
  font-size: 3.5rem;
  color: #3f51b5;
  margin-bottom: 1rem;
`;

const CtaSection = styled(Container)`
  margin-top: 4rem;
  padding: 1rem 2rem;
  text-align: center;
`;

// const CtaButton = styled(Button)`
//   margin-top: 1.5rem;
//   padding: 1rem 2rem;
//   background-color: #ff4081;
//   color: #fff;
//   &:hover {
//     background-color: #ff79b0;
//   }
// `;

function HomePage() {
  return (
    <div>
      <HeroSection>
        <HeroContent>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Welcome to GymGo
          </Typography>
          <Typography variant="h5" paragraph sx={{ mb: 3 }}>
            Your journey to fitness starts here. Discover workout plans, track
            your progress, and join a community of fitness enthusiasts.
          </Typography>
          {/* <CtaButton variant="contained" size="large" href="/workout-plans">
            Get Started
          </CtaButton> */}
        </HeroContent>
      </HeroSection>

      <Container maxWidth="lg" style={{ marginTop: "4rem" }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          style={{ textAlign: "center", marginBottom: "2rem" }}
          sx={{ fontWeight: "bold" }}
        >
          Key Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <IconStyle>
                <FitnessCenterIcon fontSize="inherit" />
              </IconStyle>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Workout Plans
              </Typography>
              <Typography color="textSecondary">
                Explore a variety of workout plans tailored to your goals,
                whether you're a beginner or advanced.
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <IconStyle>
                <FastfoodIcon fontSize="inherit" />
              </IconStyle>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Nutrition Guides
              </Typography>
              <Typography color="textSecondary">
                Get personalized diet plans to complement your fitness routine
                and help you reach your goals.
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard>
              <IconStyle>
                <GroupIcon fontSize="inherit" />
              </IconStyle>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Community Support
              </Typography>
              <Typography color="textSecondary">
                Join a community of like-minded individuals, share your
                progress, and stay motivated.
              </Typography>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>

      <CtaSection maxWidth="md">
        {/* <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Ready to Transform Your Life?
        </Typography>
        <CtaButton variant="contained" size="large" href="/signup">
          Join Now
        </CtaButton> */}
      </CtaSection>
    </div>
  );
}

export default HomePage;
