import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Mylist from "./listitems";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: "relative",
    backgroundColor: "#2a3f54",
    color: "#cacdcd",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7),
    },
  },
  logoIcon: {
    display: "block",
    float: "left",
    flexGrow: 1,
  },
  closeIcon: {
    color: "#fff",
    flexGrow: 1,
  },
  uoh: {
    float: "right",
    flexGrow: 1,
    paddingLeft: 7,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
}));

const Drawers = ({ handleDrawerClose, open }) => {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <Image
          src="/uoh.png"
          alt="uoh logo"
          width={40}
          height={40}
          className={classes.logoIcon}
        />

        <h1 className={classes.uoh}>UOH</h1>

        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon className={classes.closeIcon} />
        </IconButton>
      </div>
      <Divider />
      <List>
        <Mylist />
      </List>
    </Drawer>
  );
};

export default Drawers;
