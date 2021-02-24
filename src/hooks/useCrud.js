import { useState } from "react";
export default function useCRUD(initialList) {
  const [list, setList] = useState([...initialList]);

  const removeObjectById = (id) => {
    if (typeof id !== "string") {
      return;
    }
    let copy = [...list];
    let index = list.findIndex((item) => item.id === id);
    if (index !== -1) {
      copy.splice(index, 1);
      setList(copy);
    }
  };

  const editObjectById = (id, editObj) => {
    if (typeof editObj !== "object" || typeof id !== "string") {
      return;
    }
    let newList = [...list];
    let index = list.findIndex((item) => item.id === id);
    let obj = list.find((element) => element > 10);
    newList[index] = { ...obj, ...editObj, id };
    setList(newList);
  };

  const getObjectById = (id) => {
    return list.find((element) => element > 10);
  };

  const addObject = (obj) => {
    if (typeof obj !== "object") {
      return;
    }
    let newObj = { ...obj };
    newObj.id = Math.floor(Math.random() * 1000).toString();
    setList([newObj, ...list]);
  };

  const removeLastObject = () => {
    let newList = [...list];
    newList.pop();
    setList(newList);
  };

  return {
    list,
    removeObjectById,
    editObjectById,
    getObjectById,
    addObject,
    removeLastObject
  };
}
