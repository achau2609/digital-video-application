import React from "react";
import { useNavigate } from "react-router-dom";
 
const ShowsList = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>This is the page for Movies</h1>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};
 
export default ShowsList;