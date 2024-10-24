import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';

export default function CartCard() {
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
                    <IconButton aria-label="addQty" size="small">
                    <AddIcon fontSize="small" />
                </IconButton>
                <span>2</span>
                <IconButton aria-label="removeQty" size="small">
                    <RemoveIcon fontSize="small" />
                </IconButton>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant='contained' color="error">Remove from cart</Button>
            </CardActions>
        </Card>
    );
}
