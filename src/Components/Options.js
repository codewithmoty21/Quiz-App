// Options.js
import React, { Component } from 'react';

class Options extends Component {
    render() {
        const { options, selectedOption, correctAnswer, showCorrectAnswer } = this.props;

        return (
            <div className='options'>
                {options.map((option, index) => {
                    const optionStyle = {
                        backgroundColor: showCorrectAnswer && option === correctAnswer ? 'lightblue' : '',
                        border: showCorrectAnswer && option === selectedOption && option !== correctAnswer ? '1px solid red' : '',
                    };

                    return (
                        <div key={index} className="form-check">
                            <input
                                type="radio"
                                name="option"
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => this.props.onOptionChange(option)}
                                className="form-check-input"
                            />
                            <label className="form-check-label" style={optionStyle}>{option}</label>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Options;
