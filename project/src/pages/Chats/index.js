import React from 'react';
import {CreateCollectionForm} from "../../components/ChatItem";
import {CollectionList} from "../../components/ChatList";

export const CollectionsPage = (props) => {
  return (
    <div>
      <CreateCollectionForm/>
      <CollectionList list={[{id: '1', title: '1'}]}/>
    </div>
  );
};