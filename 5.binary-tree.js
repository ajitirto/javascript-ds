// Node class untuk merepresentasikan sebuah node dalam tree
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;  // Pointer ke child kiri
        this.right = null; // Pointer ke child kanan
    }
}

// BinarySearchTree class untuk merepresentasikan Binary Search Tree
class BinarySearchTree {
    constructor() {
        this.root = null; // Root dari tree
    }

    // Metode untuk memasukkan node baru ke dalam BST
    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode; // Jika tree kosong, jadikan node baru sebagai root
        } else {
            this.insertNode(this.root, newNode); // Jika tidak, gunakan metode insertNode
        }
    }

    // Metode rekursif untuk memasukkan node
    insertNode(node, newNode) {
        if (newNode.data < node.data) { // Jika data node baru lebih kecil dari data node saat ini
            if (node.left === null) {
                node.left = newNode; // Jika child kiri kosong, masukkan node baru di sana
            } else {
                this.insertNode(node.left, newNode); // Jika tidak, ulangi proses untuk child kiri
            }
        } else { // Jika data node baru lebih besar atau sama dengan data node saat ini
            if (node.right === null) {
                node.right = newNode; // Jika child kanan kosong, masukkan node baru di sana
            } else {
                this.insertNode(node.right, newNode); // Jika tidak, ulangi proses untuk child kanan
            }
        }
    }

    // Metode untuk mencari node dengan data tertentu dalam BST
    search(data) {
        return this.searchNode(this.root, data); // Mulai pencarian dari root
    }

    // Metode rekursif untuk mencari node
    searchNode(node, data) {
        if (node === null) {
            return null; // Jika node tidak ditemukan, kembalikan null
        } else if (data < node.data) {
            return this.searchNode(node.left, data); // Jika data yang dicari lebih kecil, cari di subtree kiri
        } else if (data > node.data) {
            return this.searchNode(node.right, data); // Jika data yang dicari lebih besar, cari di subtree kanan
        } else {
            return node; // Jika data sama, kembalikan node yang ditemukan
        }
    }

    // Metode untuk melakukan inorder traversal pada BST
    inorderTraversal(node, callback) {
        if (node !== null) {
            this.inorderTraversal(node.left, callback);  // Kunjungi subtree kiri
            callback(node.data);             // Kunjungi node saat ini
            this.inorderTraversal(node.right, callback); // Kunjungi subtree kanan
        }
    }
      // Metode untuk melakukan preorder traversal pada BST
    preorderTraversal(node, callback) {
        if (node !== null) {
            callback(node.data);             // Kunjungi node saat ini
            this.preorderTraversal(node.left, callback);  // Kunjungi subtree kiri
            this.preorderTraversal(node.right, callback); // Kunjungi subtree kanan
        }
    }

    // Metode untuk melakukan postorder traversal pada BST
    postorderTraversal(node, callback) {
        if (node !== null) {
            this.postorderTraversal(node.left, callback);  // Kunjungi subtree kiri
            this.postorderTraversal(node.right, callback); // Kunjungi subtree kanan
            callback(node.data);             // Kunjungi node saat ini
        }
    }

    // Metode untuk mendapatkan node dengan nilai minimum di BST
    getMin(node) {
        if (node === null) {
            return null;
        }

        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // Metode untuk menghapus node dengan data tertentu
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node === null) {
            return null; // Node tidak ditemukan
        }

        if (data === node.data) {
            // Node yang akan dihapus ditemukan
            if (node.left === null && node.right === null) {
                return null; // Kasus 1: Node adalah leaf
            } else if (node.left === null) {
                return node.right; // Kasus 2: Node hanya memiliki child kanan
            } else if (node.right === null) {
                return node.left; // Kasus 2: Node hanya memiliki child kiri
            } else {
                // Kasus 3: Node memiliki dua child
                const minRight = this.getMin(node.right); // Cari nilai minimum di subtree kanan
                node.data = minRight.data; // Ganti data node saat ini dengan nilai minimum dari subtree kanan
                node.right = this.removeNode(node.right, minRight.data); // Hapus node minimum dari subtree kanan
                return node;
            }
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data); // Lanjutkan pencarian di subtree kiri
            return node;
        } else {
            node.right = this.removeNode(node.right, data); // Lanjutkan pencarian di subtree kanan
            return node;
        }
    }
}

// Contoh penggunaan Binary Search Tree
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

// Mencari node
console.log("Mencari 7:", bst.search(7));  // Output: Node { data: 7, left: null, right: null }
console.log("Mencari 20:", bst.search(20)); // Output: null

// Inorder traversal
console.log("Inorder Traversal:");
bst.inorderTraversal(bst.root, (data) => console.log(data)); // Output: 3 5 7 10 12 15 18

// Preorder Traversal
console.log("Preorder Traversal:");
bst.preorderTraversal(bst.root, (data) => console.log(data)); // Output: 10 5 3 7 15 12 18

// Postorder Traversal
console.log("Postorder Traversal:");
bst.postorderTraversal(bst.root, (data) => console.log(data)); // Output: 3 7 5 12 18 15 10

// Menghapus node
bst.remove(5);
console.log("Setelah menghapus 5:");
bst.inorderTraversal(bst.root, (data) => console.log(data)); // Output: 3 7 10 12 15 18
