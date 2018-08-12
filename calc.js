 var num, acc = 0, flag=0, clase =""; op = "";
 var e = Math.E, pi = Math.PI;
 primos=[2,3,5,7,11,13,17,19,23,29]
 
  function operacion (){if(flag =1) {calcular();}}
  function sqrt() {num.value = Math.sqrt(num.value); flag=1;}
  function quad(){ num.value =(num.value * num.value);flag=1;}
  function ent(){ num.value = parseInt(num.value /1);flag=1;}
  function inv (){num.value = (1/num.value);flag=1;}
  function log (){num.value = Math.log10(num.value);flag=1;}
  function Ln() {num.value = Math.log (num.value)}
  function exp(){num.value = Math.pow(e,+num.value);}
  function asen() {num.value = 180*Math.asin (num.value)/pi;}
  function acos() {num.value = 180*Math.acos (num.value)/pi;}
  function atag() {num.value = 180*Math.atan (num.value)/pi;}
  function cos() {num.value = Math.cos (num.value*Math.PI/180);}
  function sen() {num.value = Math.sin (num.value*Math.PI/180);} 
  function tg() {num.value = (Math.tan (num.value*Math.PI/180));} 
  function fact (){
	  if (num.value>0){
		for(x=1; x<num.value; x++){
		num.value = x*num.value}
		} 
		else num.value = 1;}
  function mas()   { acc = +num.value;  op = "+"; vaciar ();flag=1;}
  function menos() { acc = +num.value;  op = "-"; vaciar ();flag=1;}
  function multi() {acc = +num.value;  op = "*"; vaciar ();}
  function div() {acc = +num.value;  op = "/"; vaciar ();}	
  function xy(){acc = +num.value; op= "xy"; vaciar ();}
  function round () {num.value = Math.round (num.value, 3);}
  function suma() { 
		var lista =num.value.split(",");
		var i = 0, acc = 0;
		while ( i < lista.length ) {
		acc = parseFloat(acc + (+lista[i]));
		i++;
		}
  
		num.value = acc;}
  function prod() { 
		var lista =num.value.split(",");
		var i = 0, acc = 1;
		while ( i < lista.length ) {
		acc = parseFloat(acc * (+lista[i]));
		i++;
		}
  
		num.value = acc;}	
		
  function primo(){
		var count =0, n =  Math.abs(num.value);
		for(var i =1;i<=n; i++){
		if (n % i===0){count ++;}}
		if (count === 2){
			num.value= num.value + " es primo";
			}
		else{if (confirm("No es primo, quieres saber sus divisores?")){divi();} }
			
		   
		
  }
  function divi (){ var n1 = Math.abs(num.value);
		var divo =[];
		for (var i=1; i<=n1; i++){
			if (n1 % i === 0) {divo.push(i);}
			  
		num.value = divo;	  
			 }
		}
  function mcd (){
	var ns = num.value.split(",");
	var x= ns[0], y = ns[1];
	var resto =0;
	while (x % y !== 0){
		resto = x % y;
		x=y;
		y=resto; 
	}
	  r = y;
	  num.value = r;
	  return r;
  }	
	function mcm(){
	var ns = num.value.split(",");
	var x= ns[0], y = ns[1];
	var r = mcd (x,y);
	num.value = x*y/r;
	}
	function factor (){
	var fact =[];		
		var n1 = num.value;
		var i=0;
		while(primos[i]<=n1){
			if (n1 % primos[i] === 0) {fact.push(primos[i]);n1=n1/primos[i];}
			else{i++;}
		}
			  
		num.value = fact;	  
			 }


		 
  function calcular() {
  if (op === "+") {num.value = (+acc + (+num.value));}
  if (op === "-") {num.value = (+acc - +num.value);}
	if (op === "*") {num.value = (+acc * +num.value);}
	if (op === "/") {num.value = (+acc / +num.value);}
	if (op === "cuad"){num.value = Math.pow(+acc,2);}
	if (op === "xy") {num.value = Math.pow(+acc,+num.value);}
	  }
	  
  function inic ()   {num = document.getElementById("num"); clase=document.getElementsByClassName("op") ;}
  function vaciar () {num.value = ""; fact =[];}
  function change(){
	  document.getElementById("css").href="calc.css";
  }
  function change1(){
	  document.getElementById("css").href="calc1.css";
  }
  function change2(){
	  document.getElementById("css").href="calc2.css";
  }
  function change3(){
	  document.getElementById("css").href="calc3.css";
  }
  function mem(){
	 document.getElementById("mem").innerHTML=num.value;
  }
  function load_memo(){
	  num.value=document.getElementById("mem").innerHTML;
  }