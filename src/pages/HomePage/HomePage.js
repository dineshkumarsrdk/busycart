import { FilterSidebar } from "../../components/FilterSidebar/FilterSidebar";
import styles from './HomePage.module.css';

export function HomePage() {
    return(
        <div className={`${styles.homeContainer}`}> 
            <FilterSidebar />
        </div>
    );
}