import '../App.css';
import styles from "./Styling.module.css";
const Styling=()=>{
    const Colour={
        color:"blue",
        fontSize:"20px",
    };
    return(
        <div className='container' > 
            <p>This Div Container class is From Bootstrap</p>

            <h1 style={Colour}>This is inline Styling Statement</h1>
            <p className='my-p'>This style is From App.css</p>
            <h2 className={styles.myh2}>This Style is From Styling.module.css File</h2>
        </div>
    )
}

export default Styling;