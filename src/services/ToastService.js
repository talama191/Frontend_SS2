import { toast } from "react-toastify";

export function ShowSuccessToast(keyword) {
    toast.success(keyword, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}
