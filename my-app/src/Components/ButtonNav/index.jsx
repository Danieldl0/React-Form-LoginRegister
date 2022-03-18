import { Link } from 'react-router-dom';
import "./style.css";

export function ButtonNav(props) {
    return (
        <div className="loginregister-btn-nav">
            <p>{props.msg}</p>
            <Link to={props.link}> <button className="btn btn-outline-primary btn-sm">{props.link_name}</button> </Link>
        </div>
    );
}