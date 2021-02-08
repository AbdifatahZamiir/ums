import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: ".3rem 20px",
  },

  texticon: {
    fontSize: ".8rem",
    fontWeight: 500,
    textTransform: "none",
    paddingLeft: "5px",
  },
}));

const ITEM_HEIGHT = 48;

export default function LongMenu({ icon, title, items }) {
  console.log(items);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClick} className={classes.root}>
        {icon}
        <span className={classes.texticon}>{title}</span>
      </Button>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {items.map((item, i) => (
          <MenuItem onClick={handleClose} key={item.i}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
