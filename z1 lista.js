class LinkedList {
	constructor() {
		this.first = null
	}
	AddFirst(data) {
		this.first = {
			data: data,
			next: this.first
		}
	}
	RemoveFirst() {
		let oldNode = this.first
		if(oldNode == null)
			return undefined
		this.first = oldNode.next
		return oldNode.data
	}
	AddLast(data) {
		let newNode = {
			data: data,
			next: null
		}
		if (this.first == null) {
			this.first = newNode
			return
		}
		let current = this.first
		while (current.next != null) {
			current = current.next
		}
		current.next = newNode
	}
}