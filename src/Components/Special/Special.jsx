import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({ asset }) => {
    const gift = useContext(AssetContext);

    return (
        <div>
            <h2>Special</h2>
            <small>{asset}</small>
            <br />
            <small>{gift}</small>
        </div>
    );
};

export default Special;