import styles from '../styles/Loader.module.css'
import {PuffLoader} from 'react-spinners'

const Loader = () => {
    return (
        <div className={styles.wrapper}>
         <PuffLoader
       color="#f93fcd"
       size={150}
       />
            {/* <div className={styles.loader}> */}

      </div>
        
     );
}

export default Loader;