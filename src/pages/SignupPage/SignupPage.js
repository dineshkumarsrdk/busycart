import styles from './SignupPage.module.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export function SignupPage() {
    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <div class="mb-3">
                    <TextField id="email" size='small' name="email" label="Email" variant="outlined" />
                </div>
                <div class="mb-3">
                    <TextField id="password" size='small' name="password" label="Password" variant="outlined" />
                </div>
                <div class="mb-3">
                    <TextField id="confirmPassword" size='small' name="confirmPassword" label="Confirm Password" variant="outlined" />
                </div>
                <Button variant="contained">Signup</Button>
            </form>
        </div>
    );
}