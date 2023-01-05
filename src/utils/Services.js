const quotesUrl = 'https://icanhazdadjoke.com/'

export function getJoke(callback) {
	fetch(quotesUrl, {headers: {'Accept':'application/json'}})
	.then((response) => response.json())
	.then((data) => {
		console.log(data.joke)
		callback && callback(data.joke)
	})
}