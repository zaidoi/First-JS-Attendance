//intilaixe the count as 0
//listen on the clicks of increment button
//increment the count variable when the button is clickd
//change the count-el in HTML reflects the new count
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let subwaycount=0
function increment() {
    subwaycount=subwaycount+1;//subwaycount+=1;
    countEl.innerText= subwaycount
}
// increment()
function decrement(){
    subwaycount=subwaycount-1
    countEl.textContent= subwaycount
}
function save(){
    let saveData=subwaycount+" - "
    saveEl.textContent+=saveData
    countEl.textContent=0
    subwaycount=0
    
}