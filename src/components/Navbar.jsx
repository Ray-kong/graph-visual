import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";

const pages = [
  "DFS",
  "BFS",
  "Djikstra's",
  "Bellman-Ford",
  "Ford-Fulkerson",
  "Prim's",
  "Kruskal's",
  "Connected Components",
  "Strongly Connected Components",
];

function Navbar() {
  return (
    <AppBar position="static">
      <Container className="bg-primary" maxWidth="3xl">
        <Toolbar disableGutters>
          <img className="px-4" src="public/vite.svg" />
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", sm: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Graph Algorithm Visualizer
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page}>
                <Link
                  to={page
                    .toLowerCase()
                    .replace("-", "")
                    .replace("'", "")
                    .replace(/\s+/g, "")}
                >
                  <Typography textAlign="center">{page}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Box>
          <div className="absolute top-4 right-4">
            <Box
              sx={{
                display: { xs: "flex flex-end", md: "none" },
              }}
            >
              <CgMenu className="flex-end" size={25} />
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
