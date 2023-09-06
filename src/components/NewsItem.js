import React  from "react";


const NewsItem=(props)=>  {
 
  let { title, description, urlToImage, url, author, publishedAt } = props;
  return (
   <div className="container">
    <div className="card-group vgr-cards">
     <div className="card">
      <div className="card-img-body">
       <img
        className="card-img"
        id="newsitemimage"
        src={
         !urlToImage
          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPmcA1M0WZJarqIpxFg3bIVnYRquJnzuFk5_CwaO-QQKwXvNdZ9j2eJkNPECOZw_CJ9Q&usqp=CAU"
          : urlToImage
        }
        alt="Card image cap"
       />
      </div>
      <div className="card-body">
       <h4 className="card-title">{title}</h4>
       <p className="card-text">{description}</p>
       <p id="authortext">
        {!author?"Unknown":author} on {new Date(publishedAt).toGMTString()}
       </p>
       <a href={url} target="__blank" className="btn btn-success">
        Click to Read
       </a>
      </div>
     </div>
    </div>
   </div>
  );
 
}

export default NewsItem;
