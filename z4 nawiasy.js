function SprawdźNawiasy(napis) {
	let stos = []
	const pary = {
		'”': '„',
		'«': '»',
		')': '('
	}
	const nazwy = {
		'„': 'cudzysłów przecinkowy',
		'»': 'cudzysłów szeryfowy',
		'(': 'nawias okrągły'
	}

	for (let i = 0; i < napis.length; i++) {
		let znak = napis[i]
		if (znak == '„' || znak == '»' || znak == '(') {
			stos.push(znak)
		} else if (znak == '”' || znak == '«' || znak == ')') {
			if (stos.length == 0) {
				return "Błąd: Nieoczekiwane zamknięcie bloku: " + znak
			}
			let ostatniOtwarty = stos.pop()
			if (pary[znak] != ostatniOtwarty) {
				return "Błąd: Oczekiwano zamknięcia dla '" + nazwy[ostatniOtwarty] + "', a napotkano '" + znak + "'"
			}
		}
	}
	if (stos.length > 0) {
		let niedomkniete = []
		for (let i = 0; i < stos.length; i++) {
			niedomkniete.push(nazwy[stos[i]])
		}
		return "Błąd: Niedomknięte bloki: " + niedomkniete.join(", ")
	}
	return "Nie wykryto błędu"
}