"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

// ///////////////////////////////////////////////////////////////////////
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// ///////////////////////////////////////////////////////////////////////

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("Login Sucess!", response.data);
      router.push("/profile");
    } catch (error) {
      console.log("login failed!!!!", error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            onClick={onLogin}
            fullWidth
            variant="text"
            sx={{ mt: 3, mb: 2 }}
            className="text-red bg-red"
          >
            Login
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                Don`t have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
