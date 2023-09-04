
import Card1 from "./Card1.png"
import Card2 from "./Card2.png"
import Card3 from "./Card3.png"
import Card4 from "./Card4.png"
import Card5 from "./Card5.png"
import Card6 from "./Card6.png"
import CardBackground from "./Card Background.png"
import YesButton from "./YesButton.png"
import clickedYes from "./clickedYes.png"
import NoButton from "./NoButton.png"
import clickedNo from "./clickedNo.png"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import helpButton from "./helpButton.png"
let finalnumber = 0;
let i = 0;
let cards = [1,2,4,8,16,32];
let cardimg = [Card1, Card2, Card3, Card4, Card5, Card6];
let click1 = 0
let click2 = 0
let click3 = 0
let click4 = 0
let click5 = 0
let click6 = 0
let clickcalc = [click1,click2,click3,click4,click5,click6]
let yesbutton = ["Yes1","Yes2","Yes3","Yes4","Yes5","Yes6"]
let nobutton = ["No1", "No2", "No3", "No4", "No5", "No6"]
function displayCards (id,number,clickcalc) {
  if (clickcalc[number] == 0) {
    document.getElementById(id).src = (cardimg[number])
  }
  else if (clickcalc[number]%2 == 0) {
    document.getElementById(id).src = (cardimg[number])
  }
  else {
    document.getElementById(id).src = (CardBackground)
  }
  clickcalc[number]++
}
function handleclick (cards,cardnumber,yesbutton,nobutton){
  finalnumber += cards[cardnumber];
  document.getElementById(yesbutton[cardnumber]).src = (clickedYes)
  document.getElementById(nobutton[cardnumber]).src = (NoButton)
  console.log(finalnumber);
  return(finalnumber);
}
function returnfinal(finalnumber,yesbutton,nobutton){
  for (let i = 0; i < 6; i++){
    if (document.getElementById(nobutton[i]).src === (NoButton)) {
      if (document.getElementById(yesbutton[i]).src === (YesButton)) {
        document.getElementById("reveal").textContent = "OOPS! MAKE SURE YOU CHECKED ALL THE CARDS!!"
        return;
      }
    }
  }
  document.getElementById("reveal").textContent = "YOUR NUMBER IS: " + finalnumber + "!"
}
function noButton(nobutton,number,yesbutton,cards){
  document.getElementById(nobutton[number]).src= (clickedNo)
  if (document.getElementById(yesbutton[number]).src == (clickedYes)){
    document.getElementById(yesbutton[number]).src = (YesButton)
    finalnumber -= cards[number];
    console.log(finalnumber);
    return(finalnumber);
  }
}
export default function game (){
  return( 
    <div>
      <div className = "headerdiv">
        <span className = "header">Magic Cards</span>
      </div>
      <div>
        <div className = "div">
          <div class = "row">
            <button  className = "cards" onClick={() => displayCards("Card1",0,clickcalc)}><img className = "cardimg" src = {CardBackground} id = "Card1"/></button>
            <div>
              <button className = "YesorNo" onClick = {() => handleclick(cards,0,yesbutton,nobutton)}><img id = "Yes1" className = "notClicked" src = {YesButton}/></button>
              <button className = "YesorNo" onClick = {() => noButton(nobutton,0,yesbutton,cards)}><img id = "No1" className = "notClicked" src = {NoButton}/></button>
            </div>
          </div>
          <div class = "row">
            <button  className = "cards" onClick={() => displayCards("Card2",1,clickcalc)}><img className = "cardimg" src = {CardBackground} id = "Card2"/></button>
            <div>
              <button className = "YesorNo" onClick = {() => handleclick(cards,1,yesbutton,nobutton)}><img id = "Yes2" className = "notClicked" src = {YesButton}/></button>
              <button className = "YesorNo" onClick = {() => noButton(nobutton,1,yesbutton,cards)}><img id = "No2" className = "notClicked" src = {NoButton}/></button>
            </div>
          </div>
          <div class = "row">
            <button  className = "cards" onClick={() => displayCards("Card3",2,clickcalc)}><img className = "cardimg" src = {CardBackground} id = "Card3"/></button>
            <div>
              <button className = "YesorNo" onClick = {() => handleclick(cards,2,yesbutton,nobutton)}><img id = "Yes3" className = "notClicked" src = {YesButton}/></button>
              <button className = "YesorNo" onClick = {() => noButton(nobutton,2,yesbutton,cards)}><img id = "No3" className = "notClicked" src = {NoButton}/></button>
            </div>
          </div>
        </div>
        <div className = "div">
          <div class = "row">
            <button  className = "cards" onClick={() => displayCards("Card4",3,clickcalc)}><img className = "cardimg" src = {CardBackground} id = "Card4"/></button>
            <div>
              <button className = "YesorNo" onClick = {() => handleclick(cards,3,yesbutton,nobutton)}><img id = "Yes4" className = "notClicked" src = {YesButton}/></button>
              <button className = "YesorNo" onClick = {() => noButton(nobutton,3,yesbutton,cards)}><img id = "No4" className = "notClicked" src = {NoButton}/></button>
            </div>
          </div>
          <div class = "row">
            <button  className = "cards" onClick={() => displayCards("Card5",4,clickcalc)}><img className = "cardimg" src = {CardBackground} id = "Card5"/></button>
            <div>
              <button className = "YesorNo" onClick = {() => handleclick(cards,4,yesbutton,nobutton)}><img id = "Yes5" className = "notClicked" src = {YesButton}/></button>
              <button className = "YesorNo" onClick = {() => noButton(nobutton,4,yesbutton,cards)}><img id = "No5" className = "notClicked" src = {NoButton}/></button>
            </div>
          </div>
          <div class = "row">
            <button  className = "cards" onClick={() => displayCards("Card6",5,clickcalc)}><img className = "cardimg" src = {CardBackground} id = "Card6"/></button>
            <div>
              <button className = "YesorNo" onClick = {() => handleclick(cards,5,yesbutton,nobutton)}><img id = "Yes6" className = "notClicked" src = {YesButton}/></button>
              <button className = "YesorNo" onClick = {() => noButton(nobutton,5,yesbutton,cards)}><img id = "No6" className = "notClicked" src = {NoButton}/></button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className = "revealButton" onClick = {() => returnfinal(finalnumber,yesbutton,nobutton)}>REVEAL</button>
        <span className = "revealtext" id = "reveal"></span>
      </div>
      <div className = "container">
        <Popup trigger=
          {<button className = "helpbutt"><img src = {helpButton} className = "helpimg"/></button>}
                modal nested>
                  {
                    close => (
                        <div className='popup'>
                          <div className='content'>
                            <span className = "Header">INSTRUCTIONS</span>
                            <div>
                             <span>This is a game of Magic and Wizardry</span>
                            </div>
                            <div>
                             <span>Think of a number between 1 and 63</span>
                            </div>
                            <div>
                              <span>Click on the cards to view them. Click again to close.</span>
                            </div>
                            <div>
                              <span>If your number exists in the cards, click the yes button. Otherwise, click no.</span>
                            </div>
                            <div>
                              <span>Click Reveal when done!</span>
                            </div>
                          </div>
                        </div>
                    )
                }
        </Popup>
      </div>
    </div>
  )
}
