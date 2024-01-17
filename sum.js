function sum (a = 0, b = 0) {
    return a + b;
}

function dc () {
    return ['batman', 'superman', 'flash', 'wonderwoman', 'aquamna', 'cyborg'];
}
function sumObj (a,b) {
	return {
		a : a,
		b : b,
		sum : a + b
	}
}

module.exports = {dc , sum, sumObj};