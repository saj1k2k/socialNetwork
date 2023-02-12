import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) =>{
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Petr
                </div>
                <div className={s.dialog}>
                    Vasya
                </div>
                <div className={s.dialog}>
                    Ivan
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>UYo</div>
                <div className={s.message}>hI, HOw r u</div>
                <div className={s.message}>Qq karaka</div>
            </div>
        </div>
    )
}


export default Dialogs;