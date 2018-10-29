import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageContainer from '../containers/PageContainer';
import UserContainer from '../containers/UserContainer';
import Autosuggest from 'react-autosuggest';
import './App.css';

class App extends Component {
    onRecalculate = (val, reason) => {
        console.log(val);
        console.log(reason);
    };
    onClean = () => {
        console.log('onClean');
    };
    getSuggest = suggest => {
        console.log('suggest: ' + suggest);
        return suggest;
    };
    render() {
        const { leagues, game } = this.props.page;
        const inputProps = {
            placeholder: 'Type a programming language',
            value: game,
            onChange: val => {
                console.log('val: ' + val);
            },
        };
        console.log('<App /> render');
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">League Finder</h1>
                </header>
                <Autosuggest
                    suggestions={leagues}
                    onSuggestionsFetchRequested={this.onRecalculate}
                    onSuggestionsClearRequested={this.onClean}
                    getSuggestionValue={this.getSuggest}
                    renderSuggestion={suggest => <div>{suggest}</div>}
                    inputProps={inputProps}
                />
                {/* <UserContainer />
                <PageContainer /> */}
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        page: store.page,
    };
};

export default connect(mapStateToProps)(App);
