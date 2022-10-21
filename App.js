import React, {useState} from 'react';

import Icon from './components/icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import {Card,CardBody,Container,Button,Col,Row } from 'reactstrap'

const itemArray = new Array(16).fill("empty");


const App = () => {
const [isCross, setIsCross] = useState(false)
const [winMessage, setWinMessage] = useState("")

const reloadGame = () => {
  setIsCross(false)
  setWinMessage("")
  itemArray.fill("empty",0,16)
}

const checkIsWinner = () => {
  if(itemArray[0] === itemArray[1] &&
    itemArray[0] === itemArray[2] &&
    itemArray[0] === itemArray[3] &&
    itemArray[0] !== "empty"
    ){
      setWinMessage(`${itemArray[0]} won`)
    }else if(
      itemArray[4] !== "empty" &&
      itemArray[4] === itemArray[5] &&
      itemArray[5] === itemArray[6] &&
      itemArray[6] === itemArray[7]
    ){
      setWinMessage(`${itemArray[4]} won`)
    }else if(
      itemArray[8] !== "empty" &&
      itemArray[8] === itemArray[9] &&
      itemArray[9] === itemArray[10] &&
      itemArray[10] === itemArray[11]
    ){
      setWinMessage(`${itemArray[8]} won`)
    }else if(
      itemArray[12] !== "empty" &&
      itemArray[12] === itemArray[13] &&
      itemArray[13] === itemArray[14] &&
      itemArray[14] === itemArray[15]
    ){
      setWinMessage(`${itemArray[12]} won`)
    }
    else if(
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[8] === itemArray[12]
    ){
      setWinMessage(`${itemArray[0]} won`)
    }else if(
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[5] &&
      itemArray[5] === itemArray[9] &&
      itemArray[9] === itemArray[13]
    ){
      setWinMessage(`${itemArray[1]} won`)
    }else if(
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[6] &&
      itemArray[6] === itemArray[10] &&
      itemArray[10] === itemArray[14]
    ){
      setWinMessage(`${itemArray[2]} won`)
    }else if(
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[7] &&
      itemArray[7] === itemArray[11] &&
      itemArray[11] === itemArray[15]
    ){
      setWinMessage(`${itemArray[3]} won`)
    }
    else if(
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[5] &&
      itemArray[5] === itemArray[10] &&
      itemArray[10] === itemArray[15]
    ){
      setWinMessage(`${itemArray[0]} won`)
    }else if(
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[6] &&
      itemArray[6] === itemArray[9] &&
      itemArray[9] === itemArray[12]
    ){
      setWinMessage(`${itemArray[3]} won`)
    }else if(
      itemArray[2] !== "empty" &&
      itemArray[2] ===itemArray[5] &&
      itemArray[5] === itemArray[8]
    ){
      setWinMessage(`${itemArray[2]} won`)
    }
    else if(
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[6] &&
      itemArray[6] === itemArray[11]

    ){
      setWinMessage(`${itemArray[1]} won`)
    }
}

const changeItem = itemNumber => {
  if (winMessage) {
    return toast(winMessage,{type:"success"})
  }
  if (itemArray[itemNumber] === "empty") {
    itemArray[itemNumber] =isCross ? "circle" : "cross"
    setIsCross(!isCross)
    }else{
    return toast("already filled",{type:"error"})
  }
  checkIsWinner();
}


  return (
   <Container className="p-5">
     <ToastContainer className="bottom-center"/>
     <Row>
       <Col md={6} className="offset-md-3">
         {winMessage ?(
           <div className='mb-2 mt-2'>
             <h1 className='text-primary text-uppercase text-center'>
               {winMessage}
               </h1>
               <Button 
               color='success'
               block
               onClick={reloadGame}
               > Reload The Game</Button>
           </div>
         ):(
           <h1 className='text-white text-center'>
             {isCross ? "cross" : "circle" } turns
           </h1>
         )}
         <div className='grid'>
           {itemArray.map((item,index)=>(
            <Card onClick={ () => changeItem(index)}>
              <CardBody className='box'>
                  <Icon name={item}/>
               </CardBody>
            </Card>
           ))}
         </div>
       </Col>
     </Row>
   </Container>
  );
}

export default App;
