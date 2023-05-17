import { http } from "../helpers/request"
import { ShowAlertToast } from "./ToastService";

export const AddSingleProductToCart = async (id) => {
    if (localStorage.getItem("user_id") === null || localStorage.getItem("user_id") === undefined) {
        ShowAlertToast("Please login!")
        return null;
    }
    const { data } = await http.post(`/cart/modify_add_single?user_id=${localStorage.getItem("user_id")}&product_id=${id}`);
    console.log(data);
    return data;
}
export const GetCurrentCartLine = async () => {
    if (localStorage.getItem("user_id") === null || localStorage.getItem("user_id") === undefined) {
        ShowAlertToast("Please login!")
        return null;
    }
    const { data } = await http.get(`/cart/get_current?user_id=${localStorage.getItem("user_id")}`);
    return data;
}
export const GetCartLinesByCartID = async (cart_id) => {
    if (localStorage.getItem("user_id") === null || localStorage.getItem("user_id") === undefined) {
        ShowAlertToast("Please login!")
        return null;
    }
    const { data } = await http.get(`/cart_lines/get?cart_id=${cart_id}`);
    return data;
}