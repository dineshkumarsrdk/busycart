import { PlaceOrder } from '../../components/PlaceOrder/PlaceOrder';
import { CartContainer } from '../../components/Cart/CartContainer/CartContainer';
import styles from './CartPage.module.css';

export function CartPage() {
    return (
        <div className={styles.cartContainer}>
            <PlaceOrder />
            <CartContainer />
        </div>
    );
}