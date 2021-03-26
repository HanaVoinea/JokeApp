const jokeEl = document.getElementById('joke');
const jokebtn = document.getElementById('jokebtn');

jokebtn.addEventListener('click', generateJoke);



generateJoke();

async function generateJoke(){
  const config = {
 
      headers: {
      	"Accept": 'application/json'
      }
}
	
const res = await fetch('https://icanhazdadjoke.com/', config)

const data = await res.json();

jokeEl.innerHTML = data.joke;
	
}





//using the .then

/*function generateJoke(){
  const config = {
 
      headers: {
      	"Accept": 'application/json'
      }
}
	
	fetch('https://icanhazdadjoke.com/', config)
	.then((respuns) => respuns.json())
	.then((data) => {

     jokeEl.innerHTML = data.joke


	})
}

*/