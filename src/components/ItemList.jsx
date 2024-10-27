import React, { useState ,useEffect} from 'react'
import SelectedItem from './SelectedItem'

const ItemList = () => {
    const arr=["apple","banana","orange","grapes"]
    const [selectItem,setSelectItem]=useState(null)

    function hendleSelect(item){
        setSelectItem(item)
    }

    useEffect(() => {
        if (selectItem) {
          console.log(`select: ${selectItem}`);
        }
      }, [selectItem])
  return (
    <>
    <div>
            <h1>select an item</h1>
            {arr.map((item, index) => (
                <div key={index}>
                    <h1>{item}</h1>
                    <button onClick={()=>hendleSelect(item)}>select</button>
                </div>
           ))}
    </div>
    <SelectedItem item={selectItem}/>
    </>
  )
}

export default ItemList
