import styles from './pageHeader.module.css'
const PageHeader = ({title, headerImg}) => {
    return (
        <header className={styles.header} 
        style={{backgroundImage: `url(${headerImg})`}}> 
            <h1>{title}</h1>
        </header>
    )
}

export default PageHeader;