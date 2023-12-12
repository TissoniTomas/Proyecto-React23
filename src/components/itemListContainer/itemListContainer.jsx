import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./itemListContainer.css";

const MainCardProducts = ({ imgCard, titleCard, textCard }) => {
  
 

  return (
    <Card className="divCard" style={{backgroundColor: "#6D6875"}}>
      <CardMedia className="imageCard" style={{backgroundColor:"white"}} component="img" alt="boca-titular" image={imgCard} />
      <CardContent>
        <h3 className="titleCard">{titleCard}</h3>
        <Typography variant="body2" color="text.secondary">
          {textCard}
        </Typography>
      </CardContent>
      <CardActions >
        <Button className="botonesCard" color="inherit" size="small">Ver mas</Button>
        <Button className="botonesCard" color="inherit" size="small">Añadir al Carrito</Button>
      </CardActions>
    </Card>
  );
};

export default MainCardProducts;

