import React from 'react';
import {ConfirmButton, Dialog, DialogContent, DialogFooter, DialogShadow} from "../FoodDialog/FoodDialog";

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}) {
    return openOrderDialog ? <>
        <DialogShadow/>
        <Dialog>
            <DialogContent>
                <h2> Your Order is on the way! </h2>
                <p>
                    You have been emailed confirmation of your order. Thanks for choosing Cuiisine.
                </p>
            </DialogContent>
            <DialogFooter>
                <ConfirmButton onClick={() => {
                    setOrders([]);
                    setOpenOrderDialog();
                }}>
                    I'm Still Hungry
                </ConfirmButton>
            </DialogFooter>
        </Dialog>
    </> : <div/>
}