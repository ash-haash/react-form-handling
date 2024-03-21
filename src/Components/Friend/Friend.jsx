import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const gift = useContext(AssetContext);

    return (
        <div>
            <h2>Friend</h2>
            <small>{gift}</small>
        </div>
    );
};

export default Friend;