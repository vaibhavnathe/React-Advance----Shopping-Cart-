import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {add, remove} from "../redux/Slices/CartSlice"

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return(
    <div>

      <div className="flex ">

        <div>
          <img src={item.image}/>
        </div>

        <div className="flex flex-col">
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div className="flex justify-between">
            <p>{item.price}</p>
            <div
              onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CartItem;
