import { CollectionItem } from "./collectionItem";

export interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItem[];
}
