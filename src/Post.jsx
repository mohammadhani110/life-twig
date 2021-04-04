import React from 'react';
import { fade,makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from '@material-ui/icons/Create';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FavoriteBorder } from '@material-ui/icons';
import User from "./assets/img/avatar-1.png";
import Bg from "./assets/img/pic.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    maxWidth: 600,
    marginTop: 120,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  center:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center"
  },
    search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  viewComment:{
    display:"flex",
    justifyContent:"flex-end"
  }

}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
          // <Avatar alt="Remy Sharp" src={User}/>
          <img src={User} alt="User"/>

        }
        action={
            <div className={classes.center}>
                <Typography variant="body2" color="textSecondary" component="p">
                    Today
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    September 14, 2016
                </Typography>
            </div>
        }
        title="Simmon Bradely"
        // subheader="September 14, 2016"
      />
          
      <CardContent>
        <Typography variant="body2" color={"textSecondary"} component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={Bg}
        title="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon /> */}
          <FavoriteBorder />
        </IconButton>
        
        <div className={classes.search}>
              {/* <div className={classes.searchIcon}>
                <CreateIcon style={{color:"#707070"}}/>
              </div> */}
              <InputBase
                placeholder="Write comment..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
        </div>
        <div className={classes.viewComment}>
          <Typography variant="body2" color="textSecondary" component="p">
            View Comments
          </Typography>
        </div>
      </CardActions>
    
    </Card>
  );
}
