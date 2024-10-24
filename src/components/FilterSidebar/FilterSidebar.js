import RangeSlider from "../UI/RangeSlider/RangeSlider";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styles from './FilterSidebar.module.css';

export function FilterSidebar() {
    return (
        <div className={`${styles.filterContainer}`}>
            <h3>Filter</h3>
            <div className="fw-bold">Price range</div>
            <RangeSlider />
            <div className="fw-bold">Category</div>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Electronics" />
                <FormControlLabel control={<Checkbox />} label="Men's Clothing" />
                <FormControlLabel control={<Checkbox />} label="Women's Clothing" />
            </FormGroup>
        </div>
    );
}