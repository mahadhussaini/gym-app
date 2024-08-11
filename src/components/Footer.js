import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { styled } from "@mui/system";

const FooterContainer = styled(AppBar)(({ theme }) => ({
  marginTop: "auto",
  background: "linear-gradient(90deg, #1e88e5, #3f51b5)",
  padding: theme.spacing(3, 0),
}));

const FooterTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
  textAlign: "center",
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
}));

function Footer() {
  return (
    <FooterContainer position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <FooterTypography variant="h6" color="inherit">
                GymGo
              </FooterTypography>
              <Typography variant="body2" color="inherit" align="center">
                © 2024 Gym App, All Rights Reserved
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FooterTypography variant="h6" color="inherit">
                Follow Us
              </FooterTypography>
              <IconContainer>
                <IconButton
                  href="https://twitter.com"
                  color="inherit"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  href="https://facebook.com"
                  color="inherit"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  href="https://instagram.com"
                  color="inherit"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </IconButton>
              </IconContainer>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
