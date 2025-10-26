function ItemList(){
    const items =[
        {id :1 , name : 'APL'},
        {id:2 ,name :' banana'},
        {id :3 , name :'mango'},

    ];
return (
    <ul>
        {items.map(item =>(
            <li key ={item.id}>
                {item.name}     
            </li>
        ))}
    </ul>
) ;
}

export default ItemList;