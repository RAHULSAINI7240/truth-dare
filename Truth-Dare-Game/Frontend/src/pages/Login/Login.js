import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
  Link,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        background: "radial-gradient(circle, #1a1a2e, #16213e)",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "radial-gradient(circle, #1a1a2e, #16213e)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <Paper
            elevation={10}
            sx={{
              p: 4,
              width: "100%",
              maxWidth: 400,
              textAlign: "center",
              borderRadius: 2,
              background: "#0f0f0f",
              color: "#f8f8f8",
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)",
            }}
          >
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <Link
                href="/"
                style={{ color: "#f8f8f8", textDecoration: "none" }}
              > 
                <IconButton size="small" sx={{ mr: 1, color: "#f8f8f8" }}>
                  <ArrowBackIcon/>
                </IconButton>
               </Link> 
              Go back
            </Typography>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Enter the Haunted Realm
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{ color: "#f8f8f8", borderColor: "#f8f8f8" }}
              >
                Google
              </Button>

              <Button
                variant="outlined"
                startIcon={<AppleIcon />}
                sx={{ color: "#f8f8f8", borderColor: "#f8f8f8" }}
              >
                Apple
              </Button>
            </Stack>

            <Divider sx={{ my: 3, backgroundColor: "#f8f8f8" }}>👻</Divider>

            <Box component="form" noValidate>
              <TextField
                label="Ghostly Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                InputLabelProps={{ style: { color: "#f8f8f8" } }}
                sx={{ input: { color: "#f8f8f8" }, borderColor: "#f8f8f8" }}
              />
              <TextField
                label="Secret Spell (Password)"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                InputLabelProps={{ style: { color: "#f8f8f8" } }}
                sx={{ input: { color: "#f8f8f8" }, borderColor: "#f8f8f8" }}
              />

              <Link
                href="#"
                variant="body2"
                sx={{
                  display: "block",
                  textAlign: "left",
                  mt: 1,
                  color: "#f8f8f8",
                }}
              >
                Forgot Your Spell?
              </Link>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 3, py: 1.5, background: "#9c27b0" }}
                >
                  Enter Now
                </Button>
              </motion.div>

              <Typography variant="body2" mt={2} textAlign="left">
                New to the realm?{" "}
                <Link href="/signup" color="secondary" underline="hover">
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </div>
  );
};

export default Login;
