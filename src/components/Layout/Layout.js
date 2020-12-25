import React from "react";

const layout = (props) => {
    return ( 
        <React.Fragment>
            <div>Toolbar, navigation</div>
            <main>{props.children}</main>
        </React.Fragment>
     );
}
 
export default layout;