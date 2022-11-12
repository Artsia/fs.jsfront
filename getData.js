
/*global console , document*/ 
/*eslint-disable no-console*/

/**Retreieve data from input tag when button is clicked */
function retrieveData(){

    const inputTag = document.getElementById('data').textContent;

    const btn = document.querySelector('button');

    //add event listener

    btn.addEventListener('click', ()=>{
        alert(inputTag)
    })


}




















/**https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent*/