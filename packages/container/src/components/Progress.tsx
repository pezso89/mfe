import { LinearProgress, useTheme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => {
  return createStyles({
    bar: {
      width: "100%",
      "& > * + *": {
        marginTop: useTheme().spacing(2),
      },
    },
  });
});

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
};
