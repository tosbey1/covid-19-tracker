import React from 'react';

import {Cards} from './components';
import styles from './App.module.css';
// curly braces because it's a named import
import {fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
    };
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }
    render () {
        const { data } = this.state; 
    
        return (
            //style.container makes sure that you're picking from a specific container
            <div className={styles.container}>
                <Cards data={data} />
            </div>
        )
    }
}

export default App;