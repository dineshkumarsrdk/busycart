import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductContainer.module.css';

export function ProductContainer() {
    const arr=[1,2,3,4,5,6,7];
    return(
        <div className={`${styles.productContainer}`}>
            {arr.map(() => {
                return <ProductCard />
            })}
        </div>
    );
}