import React from "react";
const Card = ( {id, name, email} ) => {
    return(
        <div className="tc bg-grey dib br3 pa2 ma2 grow bw2 shadow-3 ">
            <img src={`https://robohash.org/${id}`} alt="my cyborg icon"></img>
            <div className="robotNameEamail">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
};
export default Card;