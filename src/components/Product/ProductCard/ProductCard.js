import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 250, maxHeight: 370 }}>
      <CardMedia
        sx={{ height: 200, margin: 1 }}
        image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQbkO612ZwTWGLxHsrHVMjTYM9OPeHKPDwth8Bjmwmam7L8UIKIlhWEDm9LiWfECQ1D_CcKxaFRvU6dEEfWKVq8VAIOWj1bLI-YrnYudP3p&usqp=CAc"
        title="laptop"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Laptop
        </Typography>
        <Typography variant="body2">
          Price: ₹50,000
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' color='primary'>Add to cart</Button>
      </CardActions>
    </Card>
  );
}
