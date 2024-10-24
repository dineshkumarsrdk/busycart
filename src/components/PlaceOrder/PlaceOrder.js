import styles from './PlaceOrder.module.css';
import { Button } from '@mui/material';

export function PlaceOrder() {
    return (
        <div className={`${styles.asideContainer}`}>
            <h3>Total Price: ₹2000</h3>
            <Button variant="contained">Place Order</Button>
        </div>
    );
}