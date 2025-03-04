import React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import ToDoCards from "./ToDoCards";
import ProgressCards from "./ProgressCards";
import CompletedCards from "./CompletedCards";
import IgnoreCards from "./IgnoreCards";

const CardStyle: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{ pt: 4 }} spacing={4}>
        <Grid size={3}>
          <ToDoCards />
        </Grid>
        <Grid size={3}>
          <ProgressCards />
        </Grid>
        <Grid size={3}>
          <CompletedCards />
        </Grid>
        <Grid size={3}>
          <IgnoreCards />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardStyle;
