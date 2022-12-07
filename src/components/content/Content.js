import style from "./Content.module.css";
import {
    Div, H1
} from "./StyledDiv.js";

const Content = (props) => {
    return(
        <div>
            {/* CSS Module */}
            <p className={style["Content"]}>Content component is works!</p>
            {props.name} - {props.age}
            <Div>
                Halo
                <H1>
                    Judul coba dulu
                </H1>
            </Div>

        </div>
    );
};

export default Content;