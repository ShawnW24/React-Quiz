import React from 'react';


const Questionaire = ({ 
    showAnswers,
    handleNextQuestion,
    handleAnswer, data: {question, correct_answer, answers},}) => {
    
    return (
    <div>
        <div className="d-flex justify-content-around col-6 mx-auto p-10">
        <h2 
            className='text-2xl'
            dangerouslySetInnerHTML={{ __html: question}}
        />
        </div>
        <div className='col-6 mx-auto grid grid-cols-2 gap-4 mt-1  '>
            {answers.map((answer, idx) => {
                const bgColor = showAnswers ?
                answer === correct_answer ? 'bg-success' : 'bg-danger' : 'bg-info'
                const textColor = showAnswers ?
                'text-white' : 'text-dark';
                return(
                    <button
                        key={idx}
                        className= {`${bgColor} ${textColor} p-4 rounded shadow`}
                        onClick={() => handleAnswer 
                        (answer)}
                        dangerouslySetInnerHTML={{__html: answer}}
                    />
                );
            })}
        </div>
        <br></br>
        <div >
            {showAnswers && (
                <button
                    onClick={handleNextQuestion}
                    className='col-2 btn btn-dark rounded shadow mx-auto '>
                    Next Question
                </button>

            )}
            
        </div>
    </div>

    
)};




export default Questionaire;  