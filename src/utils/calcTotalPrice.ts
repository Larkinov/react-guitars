import { CartItem } from "../redux/slices/cartSlice";

export const calcTotalPrice = (items : CartItem[]) => {
  return items.reduce((sum, obj) => obj.cost * obj.count + sum, 0);
};
