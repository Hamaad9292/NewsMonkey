import React from "react";
const Newsitem =(props)=> {
  
    let { title, discrption, imageUrl, newsUrl, author, date, source } = props;
    return (
      <>
        <div className="card ">
          <img className="card-img-top" src={imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="position-absolute top-0  translate-middle badge rounded-pill bg-primary" style={{ left: "90%", zIndex: "1" }}>
              {source}

            </span>
            </h5>
            <p className="card-text">
              {discrption}
            </p>
            <p className="card-text"><small className="text-muted">By {!author ? "UnKnown" : author} at {new Date(date).toGMTString()}mins ago</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn " style={{ background: '#a915bd', color: 'white' }}>
              Read here
            </a>
          </div>
        </div>
      </>
    );
  }
export default Newsitem
