"use client";

import React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridToolbarQuickFilter,
  GridLogicOperator,
} from "@mui/x-data-grid";

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 2,
        pb: 0.5,
      }}
    >
      <GridToolbarQuickFilter
        quickFilterParser={(searchInput) =>
          searchInput
            .split(",")
            .map((value) => value.trim())
            .filter((value) => value !== "")
        }
      />
    </Box>
  );
}

export default function BookmarkTable() {
  // Fetch data from local storage (replace this with your data retrieval logic)
  const data = JSON.parse(localStorage.getItem("bookmarkData")) || [];

  const columns = [
    { field: "title", headerName: "Title", flex: 1 },
    { field: "stars", headerName: "Stars", flex: 1 },
    { field: "forks", headerName: "Forks", flex: 1 },
    { field: "openIssues", headerName: "Open Issues", flex: 1 },
  ];

  const initialState = {
    filter: {
      filterModel: {
        items: [],
        quickFilterLogicOperator: GridLogicOperator.Or,
      },
    },
  };

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data.data?.bookmarks} // Use fetched data here
        columns={columns}
        {...initialState}
        components={{
          Toolbar: QuickSearchToolbar,
        }}
      />
    </Box>
  );
}
