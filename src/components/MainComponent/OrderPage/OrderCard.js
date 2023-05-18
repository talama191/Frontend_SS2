import { useEffect, useState } from "react";

function OrderCard(props) {
    const [ordered_date, setOrderedDate] = useState("");

    useEffect(() => {
        var t = props.ordered_at.split(/[- T+.:]/);
        var d = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]));
        console.log(d);
        setOrderedDate(d);
    }, []);
    return (
        <div class="card-body row ml-5 mr-5 mb-3 border rounded-4">
            <div >
                <div >
                    <h3>Order id: {props.cart_id}</h3>
                </div>
                <div>
                    <span>Ordered at: {ordered_date.toString()}</span>

                </div>
                {props.cart_status === 2 ? (
                    <div>
                        <span >Completed at: {props.completed_at}</span>
                    </div>
                ) : (<div></div>)}
                <div class="d-flex">
                    <h5>Total product: 5</h5>
                    <h5 class="ml-auto" >Total price: $5.00</h5>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <button tpye="button" class="btn btn-primary">Order Detail</button>
            </div>
        </div>
    )
}
export default OrderCard;