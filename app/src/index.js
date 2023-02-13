import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id:0, message:'Hi,how are u?', likesCount: 12},
    {id:1, message:'Hi all', likesCount: 255},
    {id:1, message:'Ку бомжи', likesCount: 5},
    {id:1, message:'Ку бомжи', likesCount: 5},
    {id:1, message:'Ку бомжи', likesCount: 5},
    {id:1, message:'Ку бомжи', likesCount: 5},
    {id:1, message:'Ку бомжи', likesCount: 5}

]
let dialogs = [
    {id: 1, name: 'Petr'},
    {id: 2, name: 'Andrey'}
]
let messages = [
    {id:0, text:'Yo'},  
    {id:1, text:'Hello my friend'}
]


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
