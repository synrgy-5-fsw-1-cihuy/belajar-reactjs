import style from "./Content.module.css";

const Content = (props) => {
    return(
        <div>
            <p className={style["Content"]}>Content component is works!</p>
            {props.name} - {props.age}

        </div>
    );
};

export default Content;