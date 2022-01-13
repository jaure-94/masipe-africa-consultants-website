import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';
import { SwipeableDrawer } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';

// Change logo format to svg please
import logo from '../../assets/logo.png';

function ElevationScroll(props) {
  const { children } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    // ...theme.mixins.toolbar,
    marginBottom: '0em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '0em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '0em'
    }
  },
  appBarBackground: {
    backgroundColor: theme.palette.common.grey,
    opacity: 0.9,
    zIndex: theme.zIndex.modal + 1,
    width: '100%'
  },
  root: {
    flexGrow: 1,
  },
  logo: {
    height: '4em',
    [theme.breakpoints.down('md')]: {
      height: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '2em'
    }
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  tabContainer: {
    marginLeft: 'auto',
    marginRight: '22px'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '20px'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  button: {
    ...theme.typography.button,
    marginLeft: '10px'
  },
  drawer: {
    marginTop: '3.66em',
    backgroundColor: theme.palette.common.grey,
    opacity: 0.9,
    // filter: 'blur(1px)'
  },
  drawerIcon: {
    height: '35px',
    width: '35px'
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawerItem: {
    ...theme.typography.tab,
    textTransform: 'uppercase',
    opacity: 0.7
  },
  drawerItemSelected: {
    opacity: 1
  }
}));

const Header = props => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, newValue) => {
    props.setValue(newValue)
  }

  useEffect(() => {
    if (window.location.pathname === '/services' && props.value !== 0) {
      props.setValue(0)
    } else if (window.location.pathname === '/connect-with-us' && props.value !== 1) {
      props.setValue(2)
    } else if (window.location.pathname === '/insights' && props.value !== 2) {
      props.setValue(3)
    }
  }, [props.value, props]);

  const tabs = (
    <React.Fragment>
      <Tabs value={props.value} className={classes.tabContainer} onChange={handleChange}>
        <Tab className={classes.tab} disableRipple component={Link} to='/services' label='Services' />
        <Tab className={classes.tab} disableRipple component={Link} to='/connect-with-us' label='Connect With Us' />
        <Tab className={classes.tab} disableRipple component={Link} to='/insights' label='Insights' />
      </Tabs>
      {/* <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Button
        className={classes.button}
        variant="contained" 
        color="primary" 
        disableElevation>
        GO
      </Button> */}
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{paper: classes.drawer}}>
          <div className={classes.toolbarMargin} />
          <List disablePadding>
            <ListItem
              onClick={() => {setOpenDrawer(false); props.setValue(0)}}
              selected={props.value === 0}
              component={Link}
              to='/services'
              divider
              button>
                <ListItemText
                  disableTypography
                  className={
                    props.value === 0 ? [classes.drawerItem, classes.drawerItemSelected] :
                  classes.drawerItem}>
                  Services
                </ListItemText>
            </ListItem>
            <ListItem
              onClick={() => {setOpenDrawer(false); props.setValue(2)}}
              selected={props.value === 1}
              component={Link}
              to='/connect-with-us'
              divider
              button>
                <ListItemText
                  disableTypography
                  className={
                    props.value === 2 ? [classes.drawerItem, classes.drawerItemSelected] :
                  classes.drawerItem}>
                  Connect With Us
                </ListItemText>
            </ListItem>
            <ListItem
              onClick={() => {setOpenDrawer(false); props.setValue(3);}}
              selected={props.value === 2}
              component={Link}
              to='/insights'
              divider
              button>
                <ListItemText
                  disableTypography
                  className={
                    props.value === 3 ? [classes.drawerItem, classes.drawerItemSelected] :
                  classes.drawerItem}>
                  Insights
                </ListItemText>
            </ListItem>
          </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar
          position='fixed'
          className={classes.appBarBackground}>
          <Toolbar>
            <Button 
              component={Link} to='/'
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
              disableRipple>
              <img src={logo} alt='masipe africa logo' className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

export default Header;