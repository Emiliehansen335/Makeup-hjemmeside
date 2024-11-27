
import SectionHeader from "../components/sectionHeader/SectionHeader";
import headerImg from "../assets/makeup-cosmetics.webp";
import PageHeader from "../components/pageHeader/PageHeader";
import Favorites from "../components/favorites/Favorites";
import MyFavorites from "../components/myFavorites/myFavorites";
import Newsletter from "../components/newsletter/Newsletter";
import styles from "./products.module.css"



const Home = () => {


    return (
      <div className="article">
        <PageHeader title="REVOLUTION" headerImg={headerImg} />
        <SectionHeader title="Product selection" />
        <div className={styles.container}>
          <Favorites />
        </div>
        <SectionHeader title="My favorites" />
        <MyFavorites />
        <SectionHeader title="Submit to newsletter" />
        <Newsletter />
      </div>
    );
};

export default Home;
