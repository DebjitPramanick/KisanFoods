import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ userdata }) {
  const classes = useStyles();
  var data = JSON.parse(localStorage.getItem('user'));

  function setprofile(dataset) {
    localStorage.removeItem('product_details')

    localStorage.setItem('product_details', JSON.stringify(dataset))
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1508313880080-c4bef0730395?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cG90YXRvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="sample image"
        />
        <CardContent>
          <div className="d-flex justify-content-between">
            <div>
              <p style={{ font: '15px', color: '#131313' }}>
                Items
            <br></br>
                {userdata.products}
              </p>
            </div>
            <div>
              <p style={{ font: '20px', color: '#131313' }}>
                Seller Name
            <br></br>
                {userdata.name}
              </p>
            </div>
          </div>

          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" style={{ display: (data.userType) === 'Others' ? 'block' : 'none' }}>
          Take Job
        </Button>
        <Button size="small" color="primary" style={{ display: (data.userType) === 'Farmer' || (data.userType) === 'Others' || (data.userType) === 'Consumer' ? 'block' : 'none' }}>
          <Link onClick={setprofile(userdata)} to="/userprofile">Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
