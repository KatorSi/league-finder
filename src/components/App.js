import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from './User';
import { Page } from './Page';
import { getLeague, setGame } from '../actions/PageActions';
import './App.css';

class App extends Component {
    render() {
        let { page, user } = this.props;
        let { setLeague } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">League Finder</h1>
                </header>
                <User name={user.name} />
                <Page
                    game={page.game}
                    league={page.league}
                    isFetching={page.isFetching}
                    error={page.error}
                    setLeague={setLeague}
                />
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
        page: store.page,
    };
};

const mapDispatchToProps = dispatch => ({
    setLeague: league => dispatch(getLeague(league)),
    setGame: game => dispatch(setGame(game)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
