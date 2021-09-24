let itemLists = [];
const storage = (item) => {
  const getItem = getStorage();
  if (getItem) {
    itemLists = JSON.parse(getItem);
  }
  itemLists.push(item);
  setStorage(itemLists);
};

const getStorage = () => {
  const foods = localStorage.getItem("foods");
  return foods;
};

const setStorage = (foods) => {
  const stringified = JSON.stringify(foods);
  localStorage.setItem("foods", stringified);
};

const removeStorge = (item) => {
  const exist = getStorage();
  if (!exist) {
  } else {
    const orderedFood = JSON.parse(exist);
    const nweOrder = orderedFood.filter((food) => food.idMeal !== item.idMeal);

    // console.log(nweOrder, item);
    setStorage(nweOrder);
    return nweOrder;
  }
};

export { storage, getStorage, setStorage, removeStorge };
