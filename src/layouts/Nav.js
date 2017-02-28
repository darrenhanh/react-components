/**
 * Created by darren on 2017/2/28 0028.
 */
import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
            </nav>
        );
    }
}

export default Nav;
