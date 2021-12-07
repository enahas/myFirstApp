import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ items }) =>{
    return(
        <ul>
        {items?.map((item) => (
          <Item item={item} key={item.id}/>
        ))}
      </ul>
    )
}
export default ItemList