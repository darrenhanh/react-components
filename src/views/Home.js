import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/style.less';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {activeIndex: 0};
    }

    handleChange(e) {
        this.setState({activeIndex: parseInt(e.target.value, 10)});
    }

    render() {
        const {activeIndex}=this.state
        return (
            <div>
                <div className={styles.operator}>
                    <div>Welcome!</div>
                    <span>切换 Tab：</span>
                    <select value={activeIndex} onChange={::this.handleChange}>
                        <option value="0">Tab 1</option>
                        <option value="1">Tab 2</option>
                        <option value="2">Tab 3</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Home;
