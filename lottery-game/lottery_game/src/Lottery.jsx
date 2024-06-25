
import { useState } from "react";

import Ticket from "./Ticket";
import { genTicket,sum } from "./helper";
export default function Lottery({n,winningSum}){
    let [ticket,setTicket]=useState(genTicket(3));// this function coming from helper.js
    let isWinning=sum(ticket)===winningSum;
    let buyTicket=()=>{
    setTicket(genTicket(n));
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
           
            <button onClick={buyTicket}>By new Ticket</button>
            <h3>{isWinning && "Congrats you won"} </h3>
           
        </div>
    );
} 