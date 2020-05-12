import React from "react";
import { Collection } from "../../model/components/collection";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

interface ShopState {
  collections: Collection[];
}

class ShopPage extends React.Component<{}, ShopState> {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    return (
      <div>
        {this.state.collections.map((collection) => {
          return (
            <CollectionPreview key={collection.id} collection={collection} />
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
