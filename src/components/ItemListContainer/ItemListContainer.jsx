import './ItemListContainer.css'
import ItemList from './components/ItemList/ItemList';

const ItemListContainer = (props) =>{
    const [items, setItems] = useState([]);

    useEffect(() => {
      const list = [{ title: services }];
      
      const getItems = new Promise((resolve) => {
        setTimeout(() => {resolve(list);}, 2000);
      });
      getItems.then((res) => {
        setItems(res);
      });
    }, []);
  
    
    return(
        <div>
            <h1>{props.greetings}</h1>
            <ItemList items={items} />
        </div>
    )
}
export default ItemListContainer