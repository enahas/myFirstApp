//vamos a usar promesas para traernos estos productos del back
import Item from '../Item/Item';

const ItemList = ({ items }) =>{
    return(
        <ul>
        {items.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    )
}
export default ItemList