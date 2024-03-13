/* eslint-disable react/prop-types */
import { totalCredits } from "../../App";

const Cart = ({carts}) => {
    const creditCommon = carts.reduce((p, c) => p + c.credit, 0)
    return (
        <div className="bg-[#FFFFFF] p-6 rounded-xl">
            <div className="text-[#2F80ED] font-bold">Credit Hour Remaining {totalCredits - creditCommon} hr</div>

            <div className="divider"></div>

            <div>
            <h3 className="font-bold text-xl pb-4">Course Name</h3>
            <div>
                <ul className="text-[#1C1B1B99]">
                    {
                        carts.map((c) =><li key={c.id}>{c.name}</li>)
                    }
                </ul>
            </div>
            </div>

            <div className="divider"></div>

            <div className=" font-semibold text-[#1C1B1BCC]">Total Credit Hour : {creditCommon}</div>

            <div className="divider"></div>

            <div className="font-semibold text-[#1C1B1BCC]">Total Price : {carts.reduce((p,c) => p+c.price, 0)} USD</div>
        </div>
    );
};

export default Cart;