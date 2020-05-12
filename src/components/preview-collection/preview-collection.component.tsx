import React from "react";
import "./preview-collection.styles.scss";
import { Collection } from "../../model/components/collection";
import CollectionItem from "../collection-item/collectionItem.Component";

type CollectionPreviewRoueProps = {
  collection: Collection;
};

const CollectionPreview: React.FC<CollectionPreviewRoueProps> = (props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.collection.title.toUpperCase()}</h1>
      <div className="preview">
        {props.collection.items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} collectionItem={item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
