import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"

const Dialogs = (props) =>{

    

    let dialogsElements = props.dialogs.map( d =>  <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messages.map( m => <Message message={m.text}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;