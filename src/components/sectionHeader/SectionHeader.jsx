import styles from "./sectionHeader.module.css";

const SectionHeader = ({title}) => {
    return (
      <section>
        <h1>{title}</h1>
      </section>
    );
}

export default SectionHeader