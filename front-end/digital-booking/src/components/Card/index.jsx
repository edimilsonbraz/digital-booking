import styles from './styles.module.css';

export function Card({img, title, number}) {
    return (
        <div className={styles.card}>
            <div style={{ backgroundImage: `url(${img})` }}></div>
            <div>
                <h1>{title}</h1>
                <span>{number} hotéis</span>
            </div>
        </div>
    );
}
