import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Page } from '../components/Page';
import {
    getLeague,
    setGame,
    changeLeague,
    clearLeagues,
} from '../actions/PageActions';

class PageContainer extends Component {
    render() {
        let { page } = this.props;
        let { setLeague } = this.props;
        let { setGame } = this.props;
        let { changeLeague } = this.props;
        let { clearLeagues } = this.props;
        return (
            <Page
                game={page.game}
                leagues={page.leagues}
                isFetching={page.isFetching}
                error={page.error}
                currentLeague={page.currentLeague}
                setLeague={setLeague}
                setGame={setGame}
                changeLeague={changeLeague}
                clearLeagues={clearLeagues}
            />
        );
    }
}

const mapStateToProps = store => {
    return {
        page: store.page,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setLeague: league => dispatch(getLeague(league)),
        setGame: game => dispatch(setGame(game)),
        changeLeague: league => dispatch(changeLeague(league)),
        clearLeagues: () => dispatch(clearLeagues()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageContainer);
