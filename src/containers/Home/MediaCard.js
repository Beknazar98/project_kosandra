import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { clientContext } from '../../contexts/ClientContext';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    backgroundSize: 'contain'
  }
});

export default function ImgMediaCard({ product }) {
  const classes = useStyles();
  const { addAndDeleteProductInCart, checkProductInCart } = useContext(clientContext)

  return (
    <div class="wrapper" className={classes.root}>
      <div class="cart" data-effect="zoom">

        <Link  to={`/product-detail/${product.id}`}>

            <button class="card__save  js-save" type="button">
              <i class="fa  fa-bookmark"></i>
            </button>
            <figure class="card__image">
              <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description" />
            </figure>
            <div class="card__header">
              <figure class="card__profile">
                <img src={product.image} alt="Short description" />
              </figure>
            </div>
            <div class="card__body">
              <h3 class="card__name">{product.title}</h3>
              <p class="card__job">цена & гарантия</p>
            </div>
            <div class="card__footer">
              <p class="">{product.price} $</p>
            </div>
        </Link>
          <Button variant="contained" color="primary">
            Buy
          </Button>
          <IconButton variant="contained" color={checkProductInCart(product.id) ? "secondary" : 'primary'} onClick={() => addAndDeleteProductInCart(product)}>
            <ShoppingCart />
          </IconButton>
      </div>

    </div>
  );
}
