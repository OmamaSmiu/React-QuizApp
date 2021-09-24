import React from 'react';
import Question from './question/Question';
import Answer from './answer/Answer'
import './Quiz.css';

class Quiz extends React.Component {

    state = {
        quiestions: {
            1: "Who develop react.js _____________",
            2: "What is ReactJs ___________",
            3: "ReactJs cover ____________",
            4: "What are props into other components _________",
            5: "Everything in React is a __________",
            6: "What is state in react ____________ ",
            7: "What is used in ReactJs to increase performance ____________",
            8: "Default port where webpack-server will run ____________",
            9: "React component can return how many components ____________",
            10: "Who is the father of React.js __________"
        },
        answers: {
            1: {
                1: 'Apple',
                2: 'Facebook',
                3: 'Twitter',
                4: 'Google',
            },
            2: {
                1: 'Server side framework',
                2: 'A Library for building interaction interfaces',
                3: 'Client Side Framework',
                4: ' None of the above',
            },
            3: {
                1: 'User Interface layer in an application',
                2: 'Data layer in an application',
                3: 'Both A and B',
                4: 'None of the above',
            },
            4: {
                1: 'Injected',
                2: 'Both A and C',
                3: 'Method',
                4: 'Package',
            },
            5: {
                1: 'Component',
                2: 'Model',
                3: 'Method',
                4: 'None of the above',
            },
            6: {
                1: 'A prement storage',
                2: 'Internal storage of the component',
                3: 'Both A and B',
                4: 'None of the above',
            },
            7: {
                1: 'Both B and C',
                2: 'Original DOM',
                3: 'Virtual DOM',
                4: 'None of the above',
            },
            8: {
                1: '8080',
                2: '3333',
                3: '3030',
                4: '6020',
            },
            9: {
                1: 'one',
                2: 'multiple',
                3: 'two',
                4: 'three',
            },
            10: {
                1: 'Jordan mike',
                2: 'Jordan Walke',
                3: 'Nile',
                4: 'Nike John',
            }

        },
        correctAnswers: {
            1: '2',
            2: '2',
            3: '1',
            4: '3',
            5: '3',
            6: '2',
            7: '3',
            8: '1',
            9: '2',
            10: '2'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }
    nextStep = step => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        })
    }
    render() {
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return (
            <div className="Content">
            {step <= Object.keys(quiestions).length ? 
                (<>
                    <Question
                        question={quiestions[step]}
                    />
                    <Answer
                        answer={answers[step]}
                        step={step}
                        checkAnswer={this.checkAnswer}
                        correctAnswer={correctAnswer}
                        clickedAnswer={clickedAnswer}
                    />
                    <button
                    className="NextStep"
                    disabled={
                        clickedAnswer && Object.keys(quiestions).length >= step
                        ? false : true
                    }
                    onClick={() => this.nextStep(step)}>Next</button>
                </>) : (
                    <div className="finalPage">
                        <h1>You have completed the quiz!</h1>
                        <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                        <p>Thank you!</p>
                    </div>
                )
            }
        </div>

        )
    }
}
export default Quiz