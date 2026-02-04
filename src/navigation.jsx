import styles from './Button.module.css';

export function Home() {
    return (
        <div>
            <h1>Home Page</h1>

            <button 
            className={' ${styles.custombutton} ${styles.login}'}
            // onClick={handleALogin}
            >
                Admin Login
            </button>

            <button 
            className={' ${styles.custombutton} ${styles.login}'}
            // onClick={handleALogin}
            >
                Trainee Login
            </button>
        </div>

    );
}

export function Admin() {
    return <h1>Admin Page</h1>
}

export function Trainee() {
    return <h1>Trainee Page</h1>
}