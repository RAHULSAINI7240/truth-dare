import React, { useState } from "react";
import { Box, Button, Container, Divider, TextField, Typography, Link, IconButton, Stack, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { motion } from "framer-motion";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ background: "radial-gradient(circle, #1a1a2e, #16213e)",}}>
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
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
          <Box>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <Link href="/" style={{ color: "#f8f8f8", textDecoration: "none" }}>
                <IconButton size="small" sx={{ mr: 1, color: "#f8f8f8" }}>
                  <ArrowBackIcon />
                </IconButton>
              </Link>
              Return to the Shadows
            </Typography>

            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Join the Ghostly Realm
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

            <Box component="form" noValidate onSubmit={handleSubmit}>
              <TextField
                label="Ghost Name"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                InputLabelProps={{ style: { color: "#f8f8f8" } }}
                sx={{ input: { color: "#f8f8f8" } }}
                onChange={(e) => setUserName(e.target.value)}
              />
              <TextField
                label="Ethereal Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                InputLabelProps={{ style: { color: "#f8f8f8" } }}
                sx={{ input: { color: "#f8f8f8" } }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Secret Spell (Password)"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                InputLabelProps={{ style: { color: "#f8f8f8" } }}
                sx={{ input: { color: "#f8f8f8" } }}
                onChange={(e) => setPassword(e.target.value)}
              />

              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 3, py: 1.5, background: "#9c27b0" }}
                  type="submit"
                >
                  Summon Account
                </Button>
              </motion.div>

              <Typography variant="body2" mt={2} textAlign="left">
                Already haunting the realm? {" "}
                <Link href="/login" color="secondary" underline="hover">
                  Return to Login
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Container>
    </div>
  );
};

export default SignUp;