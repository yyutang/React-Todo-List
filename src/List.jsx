
export default function List({items, deleteItem, clearItem, editItem}){

    if(items.length === 0){
        return (
            <p>No Todo Item now</p>
        )
    }

    return(
        <>
        <button 
        className="btn btn-outline-danger m-2"
        onClick={()=>clearItem()}>Clear Items</button>
        <ul className="list-group"> 
            {items.map((item) => {
                return (
                    <li 
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={item.id}>
                    <span>{item.text}</span>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-danger me-md-2" type="button" onClick={()=>deleteItem(item)}>Delete</button>
                    <button className="btn btn-warning" type="button" onClick={()=>editItem(item)}>Edit</button>
                    </div>
                </li>
                )
                
            })}
        </ul>
        </>
    )
}