  
import React from 'react';
import {CreateCardForm} from "../../components/CreateMessageForm";
import {useParams} from "react-router-dom";
import {CardList} from "../../components/MessageList";


export const CardPage = (props) => {
  const {collectionId} = useParams();
  return (
    <div>
      <CreateCardForm collectionId={collectionId}/>
      <CardList collectionId={collectionId}/>
    </div>
  );
};