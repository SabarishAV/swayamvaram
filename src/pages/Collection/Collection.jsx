import "./Collection.css";

const Collection = () => {
  return (
    <div className="collection-main">
      <div className="top-collection">
        <div className="collection-left">
          <p className="collection-p">COLLECTION</p>
          <h3 className="collection-h3">Photo gallery</h3>
        </div>
        <div className="collection-right">
          <button className="see-all-button">See all</button>
        </div>
      </div>
      <div className="images-top">
        <div className="top-images">
          <img src="/mask-group@2x.png" alt="" />
        </div>
        <div className="top-images">
          <img src="/mask-group@2x.png" alt="" />
        </div>
        <div className="top-images">
          <img src="/mask-group@2x.png" alt="" />
        </div>
        <div className="top-images">
          <img src="/mask-group@2x.png" alt="" />
        </div>
      </div>
      <div className="images-bottom">
        <div className="bottom-images">
          <img src="/mask-group@2x.png" alt="" />
        </div>
        <div className="bottom-images">
          <img src="/mask-group@2x.png" alt="" />
        </div>
        <div className="bottom-images-3">
          <img src="/mask-group@2x.png" alt="" />
        </div>

      </div>
    </div>
  );
};

export default Collection;
