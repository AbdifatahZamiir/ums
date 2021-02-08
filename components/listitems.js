import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import ImportContactsSharpIcon from "@material-ui/icons/ImportContactsSharp";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import CreateIcon from "@material-ui/icons/Create";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ReportIcon from "@material-ui/icons/Report";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import DialpadIcon from "@material-ui/icons/Dialpad";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiListItemIcon-root": {
      minWidth: "40px",
    },
    "& > *": {
      padding: 0,
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
  iconEx: {
    paddingRight: 0,
    color: "#fff",
    float: "right",
  },
  iconText: {
    "& .MuiTypography-body1": {
      fontSize: ".8rem",
      fontWeight: 600,
      // paddingRight: 30,
      float: "left",
    },
  },
  sumary: {
    display: "flex",
  },
  subitemtext: {
    "& .MuiTypography-body1": {
      fontSize: ".8rem",
      fontWeight: 400,
      cursor: "pointer",
      alignItems: "start",
      lineHeight: 1,
    },
  },
  subitems: {
    marginTop: "-1rem",
    display: "block",
    paddingLeft: "56px",
    paddingRight: "56px",
    "& .MuiListItem-gutters": {
      paddingLeft: 0,
    },
  },

  listitem: {
    display: "flex",
    width: "8rem",
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
            className={classes.sumary}
          >
            <ListItemIcon>
              <HomeSharpIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Departments" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button className={classes.listitem}>
              <ListItemText className={classes.subitemtext} primary="Add New" />
            </ListItem>
            <ListItem button className={classes.listitem}>
              <ListItemText
                className={classes.subitemtext}
                primary="All Departments"
              />
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
            className={classes.sumary}
          >
            <ListItemIcon>
              <ImportContactsSharpIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button className={classes.listitem}>
              <ListItemText primary="ff" className={classes.subitemtext} />
            </ListItem>
            <ListItem button className={classes.listitem}>
              <ListItemText primary="dfdfd" className={classes.subitemtext} />
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
            className={classes.sumary}
          >
            <ListItemIcon>
              <PeopleAltIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button className={classes.listitem}>
              <ListItemText
                primary="Dashboard"
                className={classes.subitemtext}
              />
            </ListItem>
            <ListItem button className={classes.listitem}>
              <ListItemText
                primary="Dashboard"
                className={classes.subitemtext}
              />
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
            className={classes.sumary}
          >
            <ListItemIcon>
              <CreateIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button className={classes.listitem}>
              <ListItemText primary="jdkjf" className={classes.subitemtext} />
            </ListItem>
            <ListItem button className={classes.listitem}>
              <ListItemText primary="fdafd" className={classes.subitemtext} />
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
            className={classes.sumary}
          >
            <ListItemIcon>
              <BorderColorIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button className={classes.listitem}>
              <ListItemText
                primary="uuuuuuuuu"
                className={classes.subitemtext}
              />
            </ListItem>
            <ListItem button className={classes.listitem}>
              <ListItemText
                primary="Dashboard"
                className={classes.subitemtext}
              />
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
            className={classes.sumary}
          >
            <ListItemIcon>
              <AssignmentIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button className={classes.listitem}>
              <ListItemText primary="hhhhh" className={classes.subitemtext} />
            </ListItem>
            <ListItem button className={classes.listitem}>
              <ListItemText
                primary="Dashboard"
                className={classes.subitemtext}
              />
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
            className={classes.sumary}
          >
            <ListItemIcon>
              <AccountBalanceWalletIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button className={classes.listitem}>
              <ListItemText primary="wwwww" className={classes.subitemtext} />
            </ListItem>
            <ListItem button className={classes.listitem}>
              <ListItemText
                primary="Dashboard"
                className={classes.subitemtext}
              />
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
            className={classes.sumary}
          >
            <ListItemIcon>
              <LocalAtmIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button className={classes.listitem}>
              <ListItemText primary="kkk" className={classes.subitemtext} />
            </ListItem>
            <ListItem button className={classes.listitem}>
              <ListItemText
                primary="Dashboard"
                className={classes.subitemtext}
              />
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
            className={classes.sumary}
          >
            <ListItemIcon>
              <ReportIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button className={classes.listitem}>
              <ListItemText primary="sss" className={classes.subitemtext} />
            </ListItem>
            <ListItem button className={classes.listitem}>
              <ListItemText
                primary="Dashboard"
                className={classes.subitemtext}
              />
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
            className={classes.sumary}
          >
            <ListItemIcon>
              <GroupAddIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.iconText} />
          </AccordionSummary>
          <AccordionDetails className={classes.subitems}>
            <ListItem button className={classes.listitem}>
              <ListItemText primary="swwww" className={classes.subitemtext} />
            </ListItem>
            <ListItem button className={classes.listitem}>
              <ListItemText
                primary="Dashboard"
                className={classes.subitemtext}
              />
            </ListItem>{" "}
          </AccordionDetails>
        </Accordion>
      </ListItem>
    </div>
  );
};

export default Mylist;
