import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyCuuLsWCe3__BSsGMlNUepwyBeGZSVpy1s';

// Create new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this components generated HTML and put it on the page( in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
