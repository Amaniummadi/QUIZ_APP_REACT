import React from 'react'


const Questionaire = ({handleAnswer,handleNextQuestion,showAnswer,data:{question,correct_answer,answers}}) => {

  
    return (
        <div>
           <div className="bg-white text-puple-800 p-5 m-2 rounded-lg shadow-md">
         <h2 className="text-2xl" dangerouslySetInnerHTML={{__html:question}}/>
             </div>
             <div className="mt-4 grid grid-cols-2 gap-6 ">
                 {answers.map((answer,id) => {
                   const bgColor= showAnswer ? (answer === correct_answer ? 'text-green-500' : 'text-red-500') : 'bg-white'
                     return (
                       <button key={id}
                       className={`bg-white  p-2  text-puple-800  font-semibold rounded shadow m-4  ${bgColor}`}
                       onClick={()=>handleAnswer(answer)}
                       dangerouslySetInnerHTML={{__html:answer}}/>
                 )
                 } )}

             </div>  
             {
                 showAnswer ?  <button className="bg-white  p-2 float-right text-puple-800  font-semibold rounded shadow m-4" onClick={handleNextQuestion}>NEXT</button> : ""
             }
            
        </div>
    )
}


export default Questionaire
