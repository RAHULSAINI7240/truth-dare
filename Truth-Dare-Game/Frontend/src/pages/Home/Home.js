import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Header from "../../components/Header";
import useTruthDareApi from "./../../apiHook/truthDare";
import { motion } from "framer-motion";
import {
  Paper,
  Tab,
  Tabs,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import "./Home.css";

const Home = () => {
  const [value, setValue] = useState("Popular 🎉");
  const [animations, setAnimations] = useState({
    fire: null,
    devil: null,
    heart: null,
  });

  const { truthQuestion, dareQuestion, fetchTruth, fetchDare } =
    useTruthDareApi();

  //   useEffect(() => {
  //     import("../../assets/fire.json").then((data) =>
  //       setAnimations((prev) => ({ ...prev, fire: data.default }))
  //     );
  //     import("../../assets/devil.json").then((data) =>
  //       setAnimations((prev) => ({ ...prev, devil: data.default }))
  //     );
  //     import("../../assets/heart.json").then((data) =>
  //       setAnimations((prev) => ({ ...prev, heart: data.default }))
  //     );
  //   }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const defaultOptions = (animationData) => ({
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  const getQuestion = () => {
    switch (value) {
      case "Extreme 😈":
        return "Why did you break up with your first girlfriend/boyfriend?";
      case "For Couple ❤️":
        return "Have you ever spread a false rumor on purpose?";
      case "Spicy 🔥":
        return "What's the wildest thing you've ever done?";
      default:
        return truthQuestion || dareQuestion;
    }
  };

  const cardData = [
    {
      image:
        "https://truthordare.app/sexy-truth-or-dare-questions/feature-image_hu12627907091025043492.jpg",
      text: "100+ Fun and Interesting Truth Questions to Ask In Any Party",
    },
    {
      image:
        "https://truthordare.app/dares-for-truth-or-dare/feature-image_hu11230387045407863222.jpg",
      text: "90+ Wild and Crazy Dares for Truth or Dare Over Text 🤙",
    },
    {
      image:
        "https://truthordare.app/dares-for-truth-or-dare-over-text/feature-image_hu4976790858436770202.jpg",
      text: "100+ Best Dares for Best Truth or Dare for Top-tier Fun 💪",
    },
    {
      image:
        "https://truthordare.app/truth-questions-to-ask/feature-image_hu6950662911841561652.jpg",
      text: "90+ Cool Truth or Dare Questions for A Wild Evening 🔥",
    },
  ];

  return (
    <div style={{margin: 0}}>
      <Header />
      <div className="background-container">
        {/* Tabs Section */}
        <Paper
          square
          sx={{
            flexGrow: 1,
            maxWidth: 500,
            backgroundColor: "transparent",
            color: "white",
            marginTop: "130px",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "none",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            TabIndicatorProps={{ style: { display: "none" } }}
            aria-label="icon label tabs example"
          >
            {[
              { label: "Popular 🎉", value: "Popular 🎉" },
              {
                label: "Extreme 😈",
                value: "Extreme 😈",
                animation: animations.devil,
              },
              {
                label: "For Couple ❤️",
                value: "For Couple ❤️",
                animation: animations.heart,
              },
              {
                label: "Spicy 🔥",
                value: "Spicy 🔥",
                animation: animations.fire,
              },
            ].map(({ label, value: val, animation }) => (
              <Tab
                key={val}
                label={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {label}
                    {animation && (
                      <Lottie
                        options={defaultOptions(animation)}
                        height={20}
                        width={20}
                      />
                    )}
                  </div>
                }
                value={val}
                sx={{
                  color: "white",
                  borderRadius: "20px",
                  textTransform: "none",
                  backgroundColor: value === val ? "white" : "#2c1032",
                  "&:hover": { backgroundColor: "white", color: "#2c1032" },
                  mx: 0.5,
                }}
              />
            ))}
          </Tabs>
        </Paper>

        {/* Question Display */}
        <div
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "20px",
            fontSize: "24px",
          }}
        >
          <h2>{getQuestion()}</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "70px",
              marginTop: "20px",
            }}
          >
            <button
              type="button"
              className="btn custom-btn truth"
              onClick={fetchTruth}
            >
              Truth
            </button>
            <button
              type="button"
              className="btn custom-btn dare"
              onClick={fetchDare}
            >
              Dare
            </button>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {cardData.map(({ image, text }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card sx={{ maxWidth: 290, position: "relative" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="440"
                  sx={{
                    transition:
                      "transform 0.5s ease-in-out, opacity 1.5s ease-in-out",
                    "&:hover": { transform: "scale(1.1)", opacity: 0.7 },
                  }}
                  image={image}
                  alt={`Image ${index + 1}`}
                />
                <div className="card-text">
                  <Typography variant="body2">{text}</Typography>
                </div>
              </CardActionArea>
            </Card>
          </motion.div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "70px",
          marginTop: "20px",
        }}
      >
        <button type="button" className="btn  browse" onClick={fetchTruth}>
          Browse all article
        </button>
      </div>

      <article className="article-custom">
        <Typography style={{ fontSize: "20px" }}>
          {" "}
          <b>Ready for a mix of humor and excitement?</b> There’s hardly a game
          more iconic than Truth or Dare!
        </Typography>
        <Typography style={{ fontSize: "20px" }}>
          {" "}
          Whether you’re looking to break the ice or make the bond stronger
          between friends, Truth or Dare has something for everyone. Get ready
          to dive into this age-old game that captivates players worldwide!
        </Typography>
        <h3>Play Truth or Dare online</h3>
        <Typography style={{ fontSize: "20px" }}>
          {" "}
          <b>
            In the market for a game that’s entertaining, unpredictable, and
            suspenseful?{" "}
          </b>
          You’ve come to the right place! Our Truth or Dare online game
          guarantees hours of laughter and unforgettable memories.
        </Typography>
        <Typography style={{ fontSize: "20px" }}>
          {" "}
          Forget about scrambling to think of questions and dares on the spot;
          our app has got you covered. Boasting over 1,000 questions and dares
          across various categories, you’ll never run out of fun and spicy
          challenges and questions.
        </Typography>
        <Typography style={{ fontSize: "20px" }}>
          And the best part? You can play it anytime, anywhere, with anyone!
          Simply download our free Truth or Dare app or play directly on our
          website!
        </Typography>
      </article>
    </div>
  );
};

export default Home;
