import React from 'react';
import PropTypes from 'prop-types';

export class Page extends React.Component {
    onClkBtn = e => {
        const { setLeague } = this.props;
        console.log(document.getElementsByClassName('league_input')[0].value);
        setLeague(document.getElementsByClassName('league_input')[0].value);
    };
    render() {
        const { game, league, isFetching, error } = this.props;
        return (
            <div className="ib page">
                <div />
                {/* Тут будет компонент GameSelect или что-то подобное */}
                <h3>Игра "{game}"</h3>
                <div>
                    <span>Введите название лиги</span>
                    <input className="league_input" type="text" />
                    <button onClick={this.onClkBtn}>Отправить запрос</button>
                </div>
                <div>
                    {/* Тут будет компонент LeagueSelect или что-то подобное*/}
                    {isFetching ? (
                        <p>Загрузка...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <p>Выбрана лига "{league}"</p>
                    )}
                </div>
            </div>
        );
    }
}

Page.propTypes = {
    game: PropTypes.string.isRequired,
    league: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    setLeague: PropTypes.func.isRequired,
};
