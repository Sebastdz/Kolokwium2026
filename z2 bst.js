class BST {
	constructor() {
		this.root = null
	}
	add(key) {
		const newNode = {
			key: key,
			left: null,
			right: null
		}
		if (this.root == null) {
			this.root = newNode
			return true
		}
		let node = this.root
		while (true) {
			if (key == node.key) {
				return false
			} else if (key < node.key) {
				if (node.left == null) {
					node.left = newNode
					return true
				}
				node = node.left
			} else {
				if (node.right == null) {
					node.right = newNode
					return true
				}
				node = node.right
			}
		}
	}
	contains(key) {
		let node = this.root
		while(node != null)
			if(key == node.key)
				return true
			else if(key < node.key)
				node = node.left
			else
				node = node.right
		return false
	}
}