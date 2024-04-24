import './list.scss'
import { listData } from './../../lib/dummyData';
import Card from '../card/card';

function List() {
    
    console.log(listData);
    return (
        <div className='list'>
                    {
                        listData.map(item => (
                            <Card key={item.id} item={item}/>
                        ))
                
               
                    }
        </div>
    )
}

export default List