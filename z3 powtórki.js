function WskażPowtórkę(liczby) {
	let sumy = {}
	for (let i = 0; i < liczby.length - 2; i++) {
		let suma = liczby[i] + liczby[i + 1] + liczby[i + 2]
		if (sumy.hasOwnProperty(suma)) {
			return [sumy[suma], i]
		} else {
			sumy[suma] = i
		}
	}
	return []
}