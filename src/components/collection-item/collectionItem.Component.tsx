import React from "react";
import { CollectionItem as CI } from "../../model/components/collectionItem";
import "./collectionItem.Styles.scss";

type CollectionItemProps = {
  collectionItem: CI;
};

const CollectionItem: React.FC<CollectionItemProps> = (props) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.collectionItem.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{props.collectionItem.name}</span>
        <span className="price">{props.collectionItem.price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
