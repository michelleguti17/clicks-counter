
import '../stylesheet/Button.css'
import React from 'react';
/*Luego hacer prueba de props con constante*/
function Button({text, isclickButton, clickManage}){
    return (
        <button className={isclickButton ? 'click' : 'restart'}
            onClick ={clickManage}>
            {text}
        </button>
    );
}

export default Button;