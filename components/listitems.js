import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 5,
      paddingRight: 5,
    },
  },

  expanicon: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "#fff",
  },
  icon: {
    color: "#fff",
  },
  iconText: {
    "& .MuiTypography-body1": {
      fontSize: ".9rem",
      fontWeight: 600,
      paddingRight: 34,
    },
  },
  subitemtext: {
    "& .MuiTypography-body1": {
      fontSize: ".7rem",
      fontWeight: 600,
      cursor: "pointer",
      alignItems: "start",
      lineHeight: 0,
    },
  },
  subitems: {
    display: "block",
    paddingLeft: "56px",
    paddingRight: "56px",
  },
}));

const Mylist = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ListItem>
        <Accordion className={classes.expanicon}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ListItemIcon>
              <DashboardIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </AccordionDetails>
        </Accordion>
      </ListItem>
      <ListItem>
        <Accordion className={classes.expanicon}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ListItemIcon>
              <DashboardIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button>
              <ListItemText primary="ff" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="dfdfd" />
            </ListItem>
          </AccordionDetails>
        </Accordion>
      </ListItem>{" "}
      <ListItem>
        <Accordion className={classes.expanicon}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ListItemIcon>
              <DashboardIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>{" "}
          </AccordionDetails>
        </Accordion>
      </ListItem>
      <ListItem>
        <Accordion className={classes.expanicon}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ListItemIcon>
              <DashboardIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>{" "}
          </AccordionDetails>
        </Accordion>
      </ListItem>{" "}
      <ListItem>
        <Accordion className={classes.expanicon}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ListItemIcon>
              <DashboardIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>{" "}
          </AccordionDetails>
        </Accordion>
      </ListItem>{" "}
      <ListItem>
        <Accordion className={classes.expanicon}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ListItemIcon>
              <DashboardIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>{" "}
          </AccordionDetails>
        </Accordion>
      </ListItem>{" "}
      <ListItem>
        <Accordion className={classes.expanicon}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ListItemIcon>
              <DashboardIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>{" "}
          </AccordionDetails>
        </Accordion>
      </ListItem>{" "}
      <ListItem>
        <Accordion className={classes.expanicon}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ListItemIcon>
              <DashboardIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>{" "}
          </AccordionDetails>
        </Accordion>
      </ListItem>
    </div>
  );
};

export default Mylist;
