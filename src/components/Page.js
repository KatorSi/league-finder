import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

export class Page extends React.Component {
    onClkBtn = e => {
        const { setLeague } = this.props;
        console.log(document.getElementsByClassName('league_input')[0].value);
        setLeague(document.getElementsByClassName('league_input')[0].value);
    };
    onInputChange = value => {
        const { changeLeague } = this.props;
        console.log(value);
        if (value.length >= 3) {
            changeLeague(value);
        }
    };
    onSuggestionsClearRequested = () => {};

    testChange = e => {
        const value = e.target.value;
        const { clearLeagues } = this.props;
        console.log(value);
        clearLeagues();
    };
    // TODO:
    // обработчик, который будет отсылать данные на бэк, если это нужно (много символов в поле)
    render() {
        const {
            game,
            leagues,
            isFetching,
            error,
            currentLeague,
            setLeague,
            clearLeagues,
        } = this.props;
        const inputProps = {
            placeholder: 'Type a programming language',
            value: currentLeague,
            onChange: this.onInputChange,
        };
        console.log('<Page /> render');
        return (
            <div className="ib page">
                <div />
                {/* Тут будет компонент GameSelect или что-то подобное */}
                <h3>Игра "{game}"</h3>
                <div>
                    <span>Введите название лиги</span>
                    <input type="text" onChange={this.testChange} />
                    <Autosuggest
                        getSuggestionValue={item => {
                            return item.value;
                        }}
                        suggestions={leagues}
                        value={currentLeague}
                        renderSuggestion={item => (
                            <div key={item.key}>{item.value}</div>
                        )}
                        onSuggestionsFetchRequested={this.onInputChange}
                        onSuggestionsClearRequested={clearLeagues}
                        onSelect={(val, item) => {
                            console.log(val);
                            setLeague(item.value);
                        }}
                        inputProps={inputProps}
                    />
                    {/* <input
                        onChange={e => this.onInputChange(e)}
                        className="league_input"
                        type="text"
                    /> */}
                    <button onClick={this.onClkBtn}>Отправить запрос</button>
                </div>
                <div>
                    {/* Тут будет компонент LeagueSelect или что-то подобное*/}
                    {isFetching ? (
                        <p>Загрузка...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <p>Выбрана лига {currentLeague}</p>
                    )}
                </div>
            </div>
        );
    }
}

Page.propTypes = {
    game: PropTypes.string.isRequired,
    leagues: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    setLeague: PropTypes.func.isRequired,
};
