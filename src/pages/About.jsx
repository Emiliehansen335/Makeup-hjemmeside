import styles from './products.module.css';
const About = () => {
  return (
    <div className={styles.container}>
      <article>
        <h1>About</h1>
        <ul>
          <li>
            Jeg synes det har været svært at fetche fra api’en og finde den
            rigtige kategori
          </li>
          <li>Jeg synes sorteringsdelen har været udfordrende</li>
          <li>Jeg synes det har været svært at bruge hooks</li>
          <li> Jeg vil gerne lære mere om hvordan man bruger hooks</li>
        </ul>
      </article>
    </div>
  );
};

export default About;
