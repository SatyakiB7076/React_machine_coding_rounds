import { useState } from 'react'

import './App.css'

function App() {
  const [list1, setList1] = useState([
    {title:'item1',checked:false},
    {title:'item2',checked:false},
    {title:'item3',checked:false},
  ])
  const [list2, setList2] = useState([
    {title:'itemA',checked:false},
    {title:'itemB',checked:false},
    {title:'itemC',checked:false},
  ])

  const handleCheckBox=(idx)=>{
    const updatedList1=[...list1];
    updatedList1[idx].checked=!updatedList1[idx].checked;
    setList1(updatedList1);
  }
  const handleSwap=()=>{
    const updatedList1=[...list1];
    const updatedList2=[...list2];
    updatedList1.forEach((item,index)=>{
      if(item.checked){
        const temp=item.title;
item.title=updatedList2[index].title;
updatedList2[index].title=temp;
      }
      item.checked=false;
    })
    setList1(updatedList1);
    setList2(updatedList2);

  }

  return (
    <>
      <h1>Swaping List</h1>
      <div>
        <h2>List1</h2>
        <ul>
          <>
          {list1.map((item,idx)=>(
            <li>
          <input type="checkbox" checked={item.checked} onChange={()=>handleCheckBox(idx)} />
            {item.title}
            </li>
          ))}
          </>
        </ul>
        <h2>List2</h2>
        <ul>
          <>
          {list2.map((item,idx)=>(
            <li><input type="checkbox" checked={item.checked} />
              {item.title}</li>
          ))}
          </>
        </ul>
        
      </div>
      <button type="button" onClick={handleSwap}>Swap items</button>
    </>
  )
}

export default App
