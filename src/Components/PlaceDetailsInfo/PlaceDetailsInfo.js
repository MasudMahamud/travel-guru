import React from "react";
import "./PlaceDetailsInfo.css";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import From from "../From/From";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const PlaceDetailsInfo = (props) => {
  const { img, title, description, id } = props.item;
  const removePlace = props.removePlace;
  const classes = useStyles();
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img}
                  title={title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => removePlace(id)}
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                >
                  {" "}
                  Delete{" "}
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="col-md-6">
            <From props={props}></From>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceDetailsInfo;
