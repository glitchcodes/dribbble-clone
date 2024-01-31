import './Pill.css'

function Pill(props) {
    return (
        <li className="nav-item">
            <a className="nav-link">{ props.name }</a>
        </li>
    )
}

export default Pill