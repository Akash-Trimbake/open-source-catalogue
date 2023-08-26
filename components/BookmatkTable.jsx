"use client";

import * as React from "react";
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
        p: 0.5,
        pb: 0,
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

export default function BookmarkTable({ dummydata }) {
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
    <Box sx={{ height: 400, width: 1 }}>
      <DataGrid
        rows={dummydata}
        columns={columns}
        {...initialState}
        components={{
          Toolbar: QuickSearchToolbar,
        }}
      />
    </Box>
  );
}
