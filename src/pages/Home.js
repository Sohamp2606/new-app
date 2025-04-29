import { Link } from "react-router-dom"
import styles from "./home.module.css";


function Home() {
    return (
        <div className={styles.app}>
        <div className={styles.image}>
           
            <img src="homeimg.jpeg" alt="home" />
            
        </div>
        <Link to="inputform">formlink</Link>
        </div>
    )
}

export default Home
