"use client";
import React, { useState } from "react";

import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Search() {
  const [chips, setChips] = useState([]);

  const handleChipChange = (event, value) => {
    setChips(value);
  };

  return (
    <div className="mt-10 w-8/12">
      <Autocomplete
        multiple
        id="chip-input"
        options={[]}
        freeSolo
        value={chips}
        onChange={handleChipChange}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <div key={option}>
              <Chip
                className="mx-1"
                variant="outlined"
                label={option}
                onDelete={() => {
                  const updatedChips = chips.filter((chip) => chip !== option);
                  setChips(updatedChips);
                }}
              />
            </div>
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Add Keywords"
            placeholder="Add Keywords"
          />
        )}
      />
      {/* <button
        onClick={() => {
          console.log("chips", chips);
        }}
      >
        show chips
      </button> */}
    </div>
  );
}
