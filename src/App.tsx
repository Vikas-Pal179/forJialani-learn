import React from "react";
interface IObj {
  id: number;
  child: Array<Object>;
}
function App() {
  const ary = [1, 2];
  // const ids: any = [];
  const [ids, setId] = React.useState<any>([]);
  const obj: IObj = {
    id: 1,
    child: [{ id: 2, child: [] }],
  };
  // for (const item in obj) {
  //   console.log(item, " ", obj[item]);
  // }
  function displayIds() {
    if (obj.child) {
      let id = [];
      for (const item of obj.child) {
        const newItem: any = item;
        id.push({ parentId: obj.id, id: newItem.id });
        console.log(item, "item");
      }
      console.log(id, "id array");
      setId(id);
    }
  }
  React.useEffect(() => {
    displayIds();
  }, []);
  console.log(ids, "ids");
  return <>hello</>;
}

export default App;
