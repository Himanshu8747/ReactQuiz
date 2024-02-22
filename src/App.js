import { useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Main  from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import WelcomeScreen from './components/WelcomeScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import Timer from './components/Timer';

const SECS_PER_QUESTION = 30;

const initialState = {
  questions:[],
  // loading , error , ready , active , finished
  status:'loading',
  index:0,
  answer:null,
  points:0,
  highscore:0,
  secondsRemaining:null,
}

function reducer(state,action){
  switch(action.type){
    case "dataRecieved":
      return{
        ...state,
        questions:action.payload,
        status:"ready"
      }
    case "dataFailed":
      return{
        ...state,
        status:"Error"
      }
    case "Start":
      return{
        ...state, status:"active",
        secondsRemaining:state.questions.length * SECS_PER_QUESTION
      }
    case "newAnswer":
      // getting the current question
      const question = state.questions.at(state.index);
      return{
        ...state,
        answer:action.payload,
        points:action.payload === question.correctOption 
        ? state.points + question.points 
        : state.points,
      }
    case "nextQuestion":
      return{
        ...state,
        index:state.index + 1,
        answer:null,
      }
    case "finish":
      return{
        ...state,
        status:"finished",
        highscore: state.points > state.highscore ? state.points : state.highscore, 
      }  
    case "restart":
      return{
        ...initialState,
        questions:state.questions,
        status:"ready",
      }
    case "tick":
      return{
        ...state,
        secondsRemaining:state.secondsRemaining - 1,
        status:state.secondsRemaining === 0 ? "finished" : state.status, 
      }  
    default:
      throw new Error("Action Unknown");
  }
}

function App() {

  const [ {questions,status,index,answer,points,highscore,secondsRemaining} ,dispatch] =useReducer(reducer,initialState); 
  useEffect(()=>{
    // fetch("http://localhost:8000/questions")
    fetch("https://12527099-0012-4b6b-93ae-79adad5eea43.mock.pstmn.io/quiz/questions")
    .then(res=>res.json())
    .then(data=>dispatch({type:"dataRecieved",payload:data}))
    .catch(err=>dispatch({type:"dataFailed"}));
  },[])

  const maxPoints = questions.reduce((prev,cur)=>prev+cur.points,0); 

  return (
    <div className="App">
      <Header/>
      <Main>
        {status === 'loading' && <Loader/>}
        {status === 'error' && <Error/>}
        {status === "ready" && <WelcomeScreen numberOfQuestions={questions.length} dispatch={dispatch}/>}
        {status === 'active' && 
          <>  
            <Progress index={index} numberOfQuestions={questions.length} points={points} maxPoints={maxPoints} answer={answer} />
            <Question questions={questions[index]} dispatch={dispatch} answer={answer}/>
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
              <NextButton answer={answer} dispatch={dispatch} numberOfQuestions={questions.length} index={index}/>
            </Footer>
          </>  
        }
        {status === 'finished' && <FinishScreen points={points} dispatch={dispatch} maxPoints={maxPoints} highscore={highscore}/>}
      </Main>
    </div> 
  );
}

export default App;
