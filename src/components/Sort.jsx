import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

function valuetext(value) {
  return `${value}°C`;
}

export default function Sort() {
  const [stars, setStars] = useState([20, 1550]);
  const [forks, setForks] = useState([2000, 9550]);

  const handleStarChange = (event, newValue) => {
    setStars(newValue);
    // console.log(newValue);
  };

  const handleForkChange = (event, newValue) => {
    setFork(newValue);
    // console.log(newValue);
  };

  return (
    <div className="flex justify-between items-center w-8/12">
      <Box sx={{ width: 300, margin: "10px 50px" }}>
        <Typography variant="p" gutterBottom>
          Stars:
        </Typography>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={stars}
          onChange={handleStarChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          max={226322} // Set the maximum range
        />
        <button
          onClick={() => {
            console.log(stars);
          }}
        >
          view count
        </button>
      </Box>
      <Box sx={{ width: 300, margin: "10px 50px" }}>
        <Typography variant="p" gutterBottom>
          forks:
        </Typography>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={forks}
          onChange={handleForkChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          max={226322} // Set the maximum range
        />
        <button
          onClick={() => {
            console.log(forks);
          }}
        >
          view count
        </button>
      </Box>
    </div>
  );
}
