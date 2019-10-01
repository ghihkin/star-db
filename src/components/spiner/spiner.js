import React from 'react';

import './spider.css';

const Spiner = () =>{
    const divStyle = {
        width:'100%',
        height:'100%'
      };
    return(
        <div className="lds-css ng-scope">
    <div style={divStyle} className="lds-wedges">
    <div>
    <div>
    <div>

    </div>
    </div>
    <div>
    <div>

    </div>
    </div>
    <div>
    <div>

    </div>
    </div>
    <div>
    <div>

    </div>
    </div>
    </div>
    </div>
</div>
    )
}
export default Spiner;