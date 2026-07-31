import '../../styles/index.css'
import '../../styles/item.css'
import backup from '../../assets/backup-image-item.jpeg'
const Item =  ({name}) => {
    return(
        <aside className="container-item">
            <div className='container-item-image'>
                <img className="item-image" src={backup} alt="An golden hour image with some explosion" />
            </div>
            <div className="container-item-content">
                <h3>{name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
            </div>
        </aside>
    );
}
export default Item;