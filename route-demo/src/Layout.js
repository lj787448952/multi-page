import React from 'react';
import {Link} from 'react-router-dom';

const Layout=(props)=>{
    const StyleSheet={
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor:(props.location.pathname==="/first")?"#08D9D6":"#FF2E63"
    }
    return(

        <div style={StyleSheet}>
            
            <nav>
                <Link to="/second">Touch me fly to Page 2</Link><br/>
                <Link to="/first">Touch me fly to Page 1</Link><br/>
                <Link to="/Home">Touch me fly to Page index</Link>
            </nav>

            {props.children}
        </div>
        
    )
}
export default Layout;