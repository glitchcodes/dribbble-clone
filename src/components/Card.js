function Card(props) {
    return (
        <div className="card mb-3">
            <img src={props.image} className="card-img-top" alt="..." width="100" height="300" />
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <p className="card-text w-100 mb-0 text-start">{props.name}</p>
                        <span>
                            <img src="/icons/heart.svg" width="15"/>
                            {props.likes}
                        </span>
                        <span className="ms-2">
                            <img src="/icons/eye.svg" width="15"/>
                            {props.views}
                        </span>
                    </div>
                </div>
        </div>
    );
}

export default Card;