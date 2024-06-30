import React, { Component } from 'react';
import Question from './Components/Question';
import Score from './Components/Score';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            selectedOption: '',
            score: 0,
            qBank: [
                {
                    id: 1,
                    question: "What is JSX?",
                    options: [
                        "JavaScript XML",
                        "JavaScript Extension",
                        "JavaScript Syntax Extension",
                        "JavaScript XML Syntax"
                    ],
                    answer: "JavaScript XML Syntax"
                },
                {
                    id: 2,
                    question: "Which method in a React Component should you override to render elements to the DOM?",
                    options: [
                        "render()",
                        "componentDidMount()",
                        "componentWillMount()",
                        "getInitialState()"
                    ],
                    answer: "render()"
                },
                {
                    id: 3,
                    question: "What are props in React?",
                    options: [
                        "Methods defined in a React component",
                        "Variables passed to the component from outside",
                        "State of the component",
                        "Configuration settings of a component"
                    ],
                    answer: "Variables passed to the component from outside"
                },
                {
                    id: 4,
                    question: "What is the purpose of keys in React lists?",
                    options: [
                        "Keys are used for identifying which elements to re-render with minimal changes",
                        "Keys are used to specify the layout of components",
                        "Keys are used for conditional rendering in React",
                        "Keys are used for defining the state of components"
                    ],
                    answer: "Keys are used for identifying which elements to re-render with minimal changes"
                },
                {
                    id: 5,
                    question: "What is a state in React?",
                    options: [
                        "An internal data store (object) of a component",
                        "Props passed to the component",
                        "A method defined inside a React component",
                        "A static value that never changes"
                    ],
                    answer: "An internal data store (object) of a component"
                }
            ]
        };
    }

    handleOptionChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { qBank, currentQuestion, selectedOption, score } = this.state;
        const correctAnswer = qBank[currentQuestion].answer;

        if (selectedOption === correctAnswer) {
            this.setState((prevState) => ({
                score: prevState.score + 1
            }));
        }

        this.setState((prevState) => ({
            currentQuestion: prevState.currentQuestion + 1,
            selectedOption: ''
        }));
    };

    handleNextQuestion = () => {
        this.setState((prevState) => ({
            currentQuestion: prevState.currentQuestion + 1,
            selectedOption: ''
        }));
    };

    render() {
        const { qBank, currentQuestion, selectedOption, score } = this.state;
        const currentQuizItem = qBank[currentQuestion];

        return (
            <div className="App">
                <header className="app-header">
                    <div className="header-content">
                        <h1 className="app-title">Quiz App codewithmoty</h1>
                    </div>
                </header>
                <div className="main-content">
                    {currentQuestion < qBank.length ? (
                        <Question
                            question={currentQuizItem}
                            selectedOption={selectedOption}
                            onOptionChange={this.handleOptionChange}
                            onSubmit={this.handleSubmit}
                        />
                    ) : (
                        <Score score={score} onNextQuestion={this.handleNextQuestion} />
                    )}
                </div>
            </div>
        );
    }
}

export default App;
