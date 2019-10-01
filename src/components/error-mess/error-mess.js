import React from 'react';

import './error-mess.css';

const ErrorMess = () =>{
    return(
        <div className="error_mess">
            <span>BOOM!</span>
            <span>something has gone terribly wrong</span>
            <span>(but we already sent droids to fix it)</span>
        </div>
    );
};
export default ErrorMess;