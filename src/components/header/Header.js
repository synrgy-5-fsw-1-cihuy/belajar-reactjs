import { useEffect, useState } from "react";

// Functional component
const Header = (props) => {
    // Hook State
    const [name, setName] = useState("Ilyas");
    const [age, setAge] = useState(0);

    // Effect Hook
    useEffect(() => {
        setName("Hasan");
    }, []);

    // Effect Hook
    useEffect(() => {
        setAge(10);
    }, []);

    return (
        <div>
            Header components is works!
            {/* Event Handling */}
            <button onClick={() => setName("Dila")}>Ganti pemeran</button>
            <button onClick={() => setAge(20)}>Umur {props.name}</button>
            <h2>Roni suka main air bersama {name}</h2>
            <h3>{props.name} sudah berumur {props.age}</h3>
            <h4>{props.person.name}</h4>
        </div>
    );
};

export default Header;