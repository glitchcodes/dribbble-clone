function Card(props) {
  const likeIcon = props.is_liked ? (
    <img src="/icons/heart-liked.svg" width="15" />
  ) : (
    <img src="/icons/heart.svg" width="15" />
  );

  const isHotItem =
    props.views >= 500 ? (
      <span class="badge rounded-pill text-bg-warning position-absolute top-0 start-0 ms-2 mt-2">
        Hot
      </span>
    ) : null;

  return (
    <div className="card mb-3 position-relative">
      {isHotItem}
      <img
        src={props.image}
        className="card-img-top"
        alt="..."
        width="100"
        height="300"
      />
      <div className="card-body">
        <div className="d-flex align-items-center">
          <p className="card-text w-100 mb-0 text-start">{props.name}</p>
          <span>
            {likeIcon}
            {props.likes}
          </span>
          <span className="ms-2">
            <img src="/icons/eye.svg" width="15" />
            {props.views}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
