import React, { useState } from "react";
import pagenotfound from "../../assets/404.png";
import { Box, Button, Input, TextField, Typography } from "@mui/material";
import Header from "../../components/Header";
 const Help = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div style={{ backgroundColor: "#cdcdcd", margin: 0 , padding: 0 }}>
      <Header />

      <Box sx={{ display: "flex",gap: 5, mt: 5, px: 3 }}>
      <Box sx={{ flex: 1 }}>
        <img src={pagenotfound} alt="Page Not Found" />
      </Box>
      <Box sx={{ flex: 1, textAlign: "center" , mt: 5 , ml :5}}>
        <Typography variant="h4" color="primary" gutterBottom fontWeight="bold">
          Ohhh.. We Don't Have Any Help For You
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          We also need some help from you
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Please Subscribe to us
        </Typography>
        <Box sx={{ p: 3, borderRadius: 4, boxShadow: 3, textAlign: "center" }}>
          <Typography variant="h6" color="primary" gutterBottom>
            Subscribe to Our Newsletter
          </Typography>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <TextField
              type="email"
              label="Enter your email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleSubscribe}>
              Subscribe
            </Button>
          </Box>
          {message && (
            <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
    </div>
  );
};

export default Help 