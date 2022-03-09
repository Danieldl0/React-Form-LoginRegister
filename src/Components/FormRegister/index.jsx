import {} from "../../Pages/Register/index";
import "./style.css";

export function FormRegister(props){
    return (

        <div className="loginregister-div-inputs">
            <label className="form-label"> {props.label} </label>
                <input className="form-control loginregister-input" {...props.register} type={props.type} maxLength={props.length} placeholder={props.placeholder} />
                <p>{props.erro}</p>
        </div>
    );
}