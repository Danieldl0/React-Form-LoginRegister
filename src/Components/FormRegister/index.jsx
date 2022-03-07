import {} from "../../Pages/Register/index";
import "./style.css";

export function FormRegister(props){
    return (

        <div className="campos_form">
            <label> {props.label} </label>
            <input {...props.register} type={props.type} maxLength={props.length} placeholder={props.placeholder} />
            <p className="msg_erro">{props.erro}</p>
        </div>
    );
}