import {  Navigate } from "react-router-dom";

function RutaProtegida( { proteger }) {
    let tokenAscceso = localStorage.getItem("token")
    return tokenAscceso ? proteger : <Navigate to="/" />
}

export default RutaProtegida