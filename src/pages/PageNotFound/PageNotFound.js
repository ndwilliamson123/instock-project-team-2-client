import "./PageNotFound.scss";
import { Link } from "react-router-dom";

export default function PageNotFound() {
    return(
        <Link to='/' >
            <h1 className='not-found'>Sorry, but it looks like this page does not exist. Click this text to return to the Warehouses list.</h1>
        </Link>
    )
}