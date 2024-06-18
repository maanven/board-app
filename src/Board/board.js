import React from "react";
import { NavLink,useSearchParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import '../Styles/index.css';

function Board(){
    const [searchParam] = useSearchParams(); 
    let n=parseInt(searchParam.get('n')); // to get the value of n from the url param
    const [chessArray,setChessArray]=useState([]);
    let i=0;

    //hook to create a 2D matrix array in order to render the chess board
    useEffect(()=>{
        const tempChess=[];
        while(i<n)
        {
            tempChess.push(Array.from({length: n}));
            i++;
        }
        setChessArray(tempChess);
    },[chessArray]);

    return(
        <>
        <div className="container-fluid">
            <div className="row topSpacing">
                <div className="col-md-1">
                    <NavLink to={'/'}><GoArrowLeft className="backIcon"/></NavLink>
                </div>
                <div className="col-md-10 centerContent">
                    {
                       chessArray.map((item,index) =>{
                        return(
                            <div className="initial" key={index}>
                                {item.map((item2,index2)=>{
                                    return(
                                        <div className={`box  ${ (index+index2) % 2 === 0 ? 'colored' : 'blank'}`} key={index2}>
                                            {item2}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                        
                       })
                    }
                </div>
                <div className="col-md-1">
                </div>
            </div>
        </div>
        </>
    );
}


export default Board;