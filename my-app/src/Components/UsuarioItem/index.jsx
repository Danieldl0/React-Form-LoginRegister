export function UsuarioItem(props){
    return <tr>
        <td>{props.id_user}</td>
        <td>{props.first_name_user}</td>
        <td>{props.last_name_user}</td>
        <td>{props.email_user}</td>
    </tr>
}