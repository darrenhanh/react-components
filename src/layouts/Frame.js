/**
 * Created by darren on 2017/2/28 0028.
 */
import React from 'react';
import Nav from './Nav';
import styles from '../styles/style.less';

class Frame extends React.Component {
    render() {
        return (
            <div className={styles.frame}>
                <div className={styles.header}>
                    <Nav />
                </div>
                <div className={styles.container}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Frame;
