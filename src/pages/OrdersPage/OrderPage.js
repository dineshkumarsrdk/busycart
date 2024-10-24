import styles from './OrdersPage.module.css';
import SpanningTable from '../../components/UI/Table/Table';

export function OrdersPage() {
    return(
        <div className={styles.OrdersContainer}>
            <SpanningTable />
            <SpanningTable />
            <SpanningTable />
        </div>
    );
}