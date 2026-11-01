function telaLogin(){
    
const btn1 = document.getElementById("btn");
    const email =document.getElementById("input1");
    const pass = document.getElementById("input2");
    const lado = document.getElementById("direito");
    const texto = document.getElementById("texto-login");
const contaSem = document.getElementById("semConta");
const tela = document.getElementById("LoginT");
   
    if(email.value === "a"){
        pass.value = email.value;
        email.value ="";
        email.style.left ="53%";
        email.style.transform ="translateY(50px)";
        pass.style.left ="53%";
       pass.style.transform ="translateY(-50px)";
       setTimeout(() =>{
pass.style.transform ="translateY(0px)";
email.style.transform ="translateY(0px)";
       },3000);
     
       btn1.style.transform ="translateX(270px)";
      contaSem.style.transform ="translateX(270px)";

btn1.textContent ="Entrar";      
        
        texto.textContent ="Hello Welcome back,login to start"; 
         lado.style.borderRadius ="30px 0px 0px 30px";
         lado.style.height ="40%"; 
          lado.style.width ="40%";
         lado.style.transform ="translateX(-265px) scale(0.0)";
         setTimeout(() =>{
lado.style.transform ="translateX(-265px) scale(1)"; },3000
        );
       
      
          
    }
    else if(pass.value ==="a"){
        email.style.width ="0%";
        pass.style.width ="0%";
        pass.style.transform ="translateY(-300px)";
        email.style.transform ="translateY(500px)";
        lado.style.borderRadius ="50px 50px 50px 50px";
        lado.style.transform ="translateX(200px) scale(0.1)";
        btn1.style.transform ="translateX(-300px)";
        contaSem.style.transform ="translateY(-500px)";
        texto.style.transform ="translateY(400px)";
        tela.style.backgroundColor ="red";
        setTimeout(() =>{
            email.style.display ="none";
email.style.display ="none";
btn1,style.display ="none";
lado.style.display ="none";
texto.style.display ="none";
contaSem.style.display ="none";
tela.style.backgroundColor ="green";
        },3000);

tela.style.height ="80%";
}

}