import {} from "../../Pages/Register/index";
import "./style.css";

export function FormRegister(props){
    return (

        <div>
            <label> {props.label} </label>
            <input {...props.register} type={props.type} />
            <p className="msg_erro">{props.erro}</p>
        </div>
    );
}