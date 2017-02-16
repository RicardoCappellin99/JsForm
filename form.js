var nome;
var cognome;
var nickname
var email;
var password1;
var confPassword;
var indirizzo;
var sesso;
var dataNascita;
var paese;
var citazione;
var errori ="";
var dataExpression=/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/
var dataChromeExpression=/^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/
function invia()
{
	
	nome=document.formlogin.nome.value;
	cognome=document.formlogin.cognome.value;
	nickname=document.formlogin.nickname.value;
	email=document.formlogin.email.value;
	password1=document.formlogin.nome.value;
	confPassword=document.formlogin.confPassword.value;
	indirizzo=document.formlogin.indirizzo.value;
	sesso=document.formlogin.sesso.value;
	paese=document.formlogin.paese.value;
	dataNascita=document.formlogin.dataNascita.value;
	citazione=document.formlogin.citazione.value;

	if (nome==undefined || nome=="")
		{
			document.getElementById("nome").className  = "areared";
			errori=errori+"Campo Nome obbligatorio \n";
		}	

	if (cognome==undefined || cognome=="")
		{
			document.getElementById("cognome").className  = "areared";
			errori=errori+ "<br>Campo Cognome obbligatorio";
		}  
		
	if (nickname==undefined || nickname=="")
		{
			document.getElementById("nickname").className  = "areared";
			errori=errori+ "<br>" +"Campo Nickname obbligatorio";
		}
		
	if (email==undefined || email=="")
		{
			document.getElementById("email").className  = "areared";
			errori=errori+ "<br>" +"Campo email obbligatorio";
		}
	
	
	if (password1==undefined || password1=="")
		{
			document.getElementById("password1").className  = "areared";
			errori=errori+ "<br>" +"Campo Password obbligatorio";
		}
	
	if (confPassword==undefined || confPassword=="" || confPassword!=password1)
		{
			document.getElementById("confPassword").className  = "areared";
			errori=errori+ "<br>" +"Campo Conferma Password obbligatorio";
		}
		
	if (confPassword!=password1)
		{
			document.getElementById("confPassword").className  = "areared";
			errori=errori+ "<br>" +"Le password non coincidono";
		}
		
	if (indirizzo==undefined || indirizzo=="")
		{
			document.getElementById("indirizzo").className  = "areared";
			errori=errori+ "<br>" +"Campo indirizzo obbligatorio";
		}
		
	if (paese==undefined || paese=="--Seleziona il tuo paese--")
		{
			document.getElementById("paese").className  = "areared";
			errori=errori+ "<br>" +"Campo Paese obbligatorio";
		}
	
	/*if (dataNascita==undefined || dataNascita==""  )
		{
		
			document.getElementById("dataNascita").className  = "areared";
			errori=errori+ "<br>" +"Campo data di Nascita obbligatorio";
		}*/
		if (dataExpression.test(dataNascita) || dataChromeExpression.test(dataNascita))
		{
			document.getElementById("errori").innerHTML = errori;
		}

			
			
	console.log(dataNascita);
	
}
