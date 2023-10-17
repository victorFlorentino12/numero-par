const button = document.querySelector('button')
function opercao(a,b){
    if((a+b) % 2 === 0 ){
     
        return true 
    }
    else{
    
        return false
    }
}

function mostraValor(){
  
button.addEventListener('click', ()=>{
    const numeberOne = Number(document.querySelector('#number-1').value)
    const numeberTwo = Number(document.querySelector('#number-2').value)
    
   console.log(opercao(numeberOne,numeberTwo))
})  
}
mostraValor()