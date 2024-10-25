import styles from './SigninPage.module.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export function SigninPage() {
    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <div class="mb-3">
                    <TextField id="email" size='small' name="email" label="Email" variant="outlined" />
                </div>
                <div class="mb-3">
                    <TextField id="password" size="small" name="email" label="Password" variant="outlined" />
                </div>
                <Button variant="contained">Signin</Button>
            </form>
        </div>
    );
}