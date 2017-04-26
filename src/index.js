import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyCuuLsWCe3__BSsGMlNUepwyBeGZSVpy1s';
// const API_KEY = 'AIzaSyDz6x9yPDFa9pexY2zqRFJde0Bb4EK5_88';

// Create new component. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };
        // Use Youtube api to searh for videos with a term of 'surfboards'
        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) =>{
             this.setState({ videos });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take this components generated HTML and put it on the page( in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
