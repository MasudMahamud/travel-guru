import React from 'react';
import { Link } from 'react-router-dom';
import './Place.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Card } from 'react-bootstrap';


const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 140,
    },
});

const style = {
    maxWidth: '350px',
    margin: '35px',


}

const Place = (props) => {
    const { title, description, img, } = props.item;
    const handleBook = props.handleBook;
    const classes = useStyles();

    return (
        <>
            <div style={{ display: "inline-block" }}>
                <Card style={style} className={classes.root}>
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
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link className="btn-book" to="/review">

                            <Button
                                onClick={() => handleBook(props.item)}
                                variant="contained" color="primary"> booking </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
        </>
    );
};

export default Place;

