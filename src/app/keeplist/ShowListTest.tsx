import React from "react";
import LikeList from "./LikeList";
import KeepList from "./KeepList";
interface CurrentCondition{
    condition:boolean;
}
const List:React.FC<CurrentCondition> = ({condition}) => {
    return(
        <div>
        {condition ? (
            <LikeList></LikeList>
        ) : (
            <KeepList></KeepList>
        )}
        </div>
    );
}
export default List;