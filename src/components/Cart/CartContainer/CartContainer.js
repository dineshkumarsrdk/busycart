import CartCard from '../CartCard/CartCard';
import styles from './CartContainer.module.css';

export function CartContainer() {
    const arr=[1,2,3,4];
    return(
        <div className={`${styles.cartContainer}`}>
            {arr.map(() => {
                return <CartCard />
            })}
        </div>
    );
}