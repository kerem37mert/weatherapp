// Style
import "./Box.style.css";

const Box = ({title}) => {

    const inputChange = () => {
        
    }

    return(
        <div className="Box">
            <h1 className="title">{title}</h1>
            <div className="main">
                <input type="text"  placeholder="Bir şehir ismi giriniz..." onChange={inputChange} />
            </div>
        </div>
    );
}

export default Box;