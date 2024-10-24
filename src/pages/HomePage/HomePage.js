import { FilterSidebar } from "../../components/FilterSidebar/FilterSidebar";
import styles from './HomePage.module.css';
import { ProductContainer } from "../../components/Product/ProductContainer/ProductContainer";

export function HomePage() {
    return(
        <div className={`${styles.homeContainer}`}> 
            <FilterSidebar />
            <ProductContainer />
        </div>
    );
}