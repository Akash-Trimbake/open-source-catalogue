"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

function valuetext(value) {
  return `${value}°C`;
}

export default function Sort() {
  const [stars, setStars] = useState([123450, 226322]);
  const [forks, setForks] = useState([20000, 226322]);
  const [language, setLanguage] = useState("");
  const [selectedSearchType, setSelectedSearchType] = useState("strict");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleStarChange = (event, newValue) => {
    setStars(newValue);
    // console.log(newValue);
  };

  const handleForkChange = (event, newValue) => {
    setForks(newValue);
    // console.log(newValue);
  };
  const handleSearchChange = (event) => {
    setSelectedSearchType(event.target.value);
  };

  function formatNumberToK(number) {
    if (number >= 1000) {
      const suffixes = ["", "k", "M", "B", "T"]; // Add more suffixes as needed
      const magnitude = Math.floor(Math.log10(number) / 3);
      const scaledNumber = number / Math.pow(1000, magnitude);
      return `${scaledNumber.toFixed(1)}${suffixes[magnitude]}`;
    }
    return number.toString();
  }

  return (
    <div className="flex flex-col w-8/12 ">
      <div className="flex flex-col sm:flex-row justify-between">
        <FormControl className="m-1 min-w-[50%]">
          <InputLabel id="demo-simple-select-helper-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={language}
            label="Language"
            onChange={handleLanguageChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Ten"}>Ten</MenuItem>
            <MenuItem value={"Twenty"}>Twenty</MenuItem>
            <MenuItem value={"Thirty"}>Thirty</MenuItem>
          </Select>
        </FormControl>
        {/* <button
          onClick={() => {
            console.log(language);
          }}
        >
          language
        </button> */}
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Search Type :
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={selectedSearchType}
            onChange={handleSearchChange}
          >
            <FormControlLabel
              value="strict"
              control={<Radio />}
              label="Strict Search"
            />
            <FormControlLabel
              value="lazy"
              control={<Radio />}
              label="Lazy Search"
            />
          </RadioGroup>
        </FormControl>
        {/* <button
          onClick={() => {
            console.log(selectedSearchType);
          }}
        >
          radio
        </button> */}
      </div>
      {/* //////////////////////////// */}
      <div className="flex flex-col sm:flex-row">
        <Box className="w-70 sm:w-96 mx-3 mt-12">
          <Typography variant="p" gutterBottom>
            Stars:
          </Typography>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={stars}
            onChange={handleStarChange}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => formatNumberToK(value)}
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
        <Box className="w-70 sm:w-96 mx-3 mt-12">
          <Typography variant="p" gutterBottom>
            forks:
          </Typography>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={forks}
            onChange={handleForkChange}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => formatNumberToK(value)}
            getAriaValueText={valuetext}
            max={126322} // Set the maximum range
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

      {/* /////////////// */}
    </div>
  );
}
