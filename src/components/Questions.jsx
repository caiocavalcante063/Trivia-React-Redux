import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import './questions.css';
import Buttons from './Buttons';
import { scoreInfo, setTimer } from '../actions';
import gravatarImg from '../services/gravatarApi';

class Questions extends Component {
  constructor() {
    super();

    this.state = {
      order: 0,
      atualQuestion: 0,
      click: false,
      timer: 30,
      score: 0,
    };
    this.handleNextBtn = this.handleNextBtn.bind(this);
    this.shuffleButtons = this.shuffleButtons.bind(this);
    this.handleClickAnswer = this.handleClickAnswer.bind(this);
    this.scoreUpdate = this.scoreUpdate.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
  }

  componentDidMount() {
    const ONE_SECOND = 1000;
    this.shuffleButtons();
    this.timeOut = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer - 1 }));
    }, ONE_SECOND);
  }

  componentDidUpdate() {
    const { timer } = this.state;
    const { setTimerAction } = this.props;
    if (timer === 0) {
      clearInterval(this.timeOut);
      setTimerAction(timer);
    }
  }

  setDifficulty() {
    // Verifica dificuldade
    let questionDifficulty = 0;
    const THREE_DIFF = 3;
    const { questionResults } = this.props;
    const { atualQuestion } = this.state;
    const dif = questionResults.response[atualQuestion].difficulty;
    if (dif === 'easy') {
      questionDifficulty = 1;
    } else if (dif === 'medium') {
      questionDifficulty = 2;
    } else if (dif === 'hard') {
      questionDifficulty = THREE_DIFF;
    }
    return questionDifficulty;
  }

  shuffleButtons() {
    const ANSWERS_NUMBER = 4;
    const randomButton = Math.floor(Math.random() * ANSWERS_NUMBER);
    this.setState({
      order: randomButton,
    });
  }

  handleHanking() {
    const playerRanking = JSON.parse(localStorage.getItem('ranking'));
    const playerName = JSON.parse(localStorage.getItem('state')).player.name;
    const playerScore = JSON.parse(localStorage.getItem('state')).player.score;
    const playerPictureEmail = JSON
      .parse(localStorage.getItem('state')).player.gravatarEmail;
    const playerPicture = gravatarImg(playerPictureEmail);
    const userRanking = {
      name: playerName,
      score: playerScore,
      picture: playerPicture,
    };
    playerRanking.ranking = [...playerRanking.ranking, userRanking];
    localStorage.ranking = JSON.stringify(playerRanking);
  }

  historyFeedback() {

  }

  handleNextBtn() {
    const { atualQuestion } = this.state;

    const NUMBER_MAX = 4;
    const { history } = this.props;
    if (atualQuestion === NUMBER_MAX) {
      this.handleHanking();
      history.push('/feedback');
    }
    this.shuffleButtons();

    this.setState({
      atualQuestion: atualQuestion + 1,
      click: false,
      timer: 30,
    });

    // History.push para Feedback

    // Ativa o timer nas outras perguntas
    const ONE_SECOND = 1000;
    this.timeOut = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer - 1 }));
    }, ONE_SECOND);
  }

  async scoreUpdate() {
    const { score, timer } = this.state;
    const rightAnswerScore = 10;
    const { scoreActionInfo } = this.props;

    this.handleClickAnswer();
    const difficulty = this.setDifficulty();
    const multiplication = difficulty * timer;
    scoreActionInfo(score + rightAnswerScore + multiplication);
    this.setState({ score: score + rightAnswerScore + multiplication });
    const playerStorage = JSON.parse(localStorage.getItem('state'));
    // Refer??ncia ao c??digo do grupo 26 - espalhar valores na localStorage
    // https://github.com/tryber/sd-014-a-project-trivia-react-redux/blob/group-26-requisito-11/src/pages/Trivia.jsx
    playerStorage.player.score = score + rightAnswerScore + multiplication;
    playerStorage.player.assertions += 1;
    localStorage.state = JSON.stringify(playerStorage);
  }

  handleClickAnswer() {
    const { setTimerAction } = this.props;
    const { timer } = this.state;
    this.setState({ click: true });
    clearInterval(this.timeOut);
    setTimerAction(timer);
  }

  render() {
    const { questionResults, isFetching } = this.props;
    const { atualQuestion, order, click, timer } = this.state;
    if (isFetching) return <p>Loading</p>;
    return (
      <div>
        <section className="question-wrapper">
          <section className="questions">
            <h3 data-testid="question-category">
              {
                questionResults.response[atualQuestion].category
              }
            </h3>
            <p>{ timer }</p>
            <p data-testid="question-text">
              {
                questionResults.response[atualQuestion].question
              }
            </p>
          </section>
          <section className="questions">
            <Buttons
              order={ order }
              handleClickAnswer={ this.handleClickAnswer }
              scoreUpdate={ this.scoreUpdate }
              click={ click }
              atualQuestion={ atualQuestion }
              questionResults={ questionResults }
              handleNextBtn={ this.handleNextBtn }
              timer={ timer }
            />
          </section>
        </section>
      </div>
    );
  }
}

Questions.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  scoreActionInfo: PropTypes.func.isRequired,
  questionResults: PropTypes.shape({
    response: PropTypes.arrayOf().isRequired }).isRequired,
  setTimerAction: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setTimerAction: (timer) => (dispatch(setTimer(timer))),
  scoreActionInfo: (scoreNum) => dispatch(scoreInfo(scoreNum)),
});

const mapStateToProps = (state) => ({
  questionResults: state.questions.response,
  isFetching: state.questions.isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
