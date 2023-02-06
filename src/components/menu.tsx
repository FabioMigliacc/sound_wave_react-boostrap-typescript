
import React from "react";

import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav>
            <ul>
                <li>
                    {/*el link reemplaza a un href */}
                    <Link to = {'/'}>Soundwave</Link>
                </li>
                <li>
                    <Link to = {'/Discover'}>Discover</Link>
                </li>
                 <li>
                    <Link to = {'/Join'}>Join</Link>
                </li>
                </ul>
        </nav>

    )
}