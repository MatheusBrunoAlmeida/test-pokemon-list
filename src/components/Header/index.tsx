import styles from './styles.module.scss'

export function Header(){
    return(
        <>
            <div className={styles.container}>
                <img src="/images/logo.svg" alt="" />
                <h1>Pokédex</h1>
            </div>
        </>
    )
} 