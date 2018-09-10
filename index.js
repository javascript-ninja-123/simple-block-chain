const sha256 = require('sha256');

class Block{
  constructor(){
    this.size = 0;
    this._array = [];
    this.prev = null;
    this.next = null;
    this.currentHash = null;
  }
  add(obj){
    const {to,from,price}  = obj;
    const hashedObj = {
      to:sha256(to),
      from:sha256(from),
      price
    }
    this._array.push(hashedObj);
    this.size++;
    return this;
  }
  complete(){
      this.currentHash = sha256(this._array);
      return this
  }
  addHash(hash){
    this._array.push(hash)
    this.size++;
    return this;
  }
}


class BlockChain{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addBlock(block){
    if(!this.head){
      this.head = block;
      this.tail = block;
      this.size++;
      return this;
    }
    const prevTail = this.tail;
    block.addHash(prevTail.currentHash);
    prevTail.next = block;
    block.prev = prevTail;
    this.tail = block;
    this.size++;
    return this;
  }
}

const createObj = (to,from,price) => (
  {
    to,
    from,
    price
  }
)

const firstBlock = new Block();
firstBlock.add(createObj('sung','yonna', 20))
firstBlock.add(createObj('sung','yonna', 24))
firstBlock.add(createObj('sung','yonna', 25))
firstBlock.add(createObj('sung','yonna', 27))
firstBlock.add(createObj('sung','yonna', 28))
firstBlock.add(createObj('sung','yonna', 29))
firstBlock.add(createObj('sung','yonna', 30))
firstBlock.add(createObj('sung','yonna', 31))
firstBlock.add(createObj('sung','yonna', 32))
firstBlock.add(createObj('sung','yonna', 33))
firstBlock.add(createObj('sung','yonna', 34))
firstBlock.add(createObj('sung','yonna', 35))
firstBlock.add(createObj('sung','yonna', 36))
firstBlock.add(createObj('sung','yonna', 37))
firstBlock.add(createObj('sung','yonna', 38))
firstBlock.add(createObj('sung','yonna', 39))
const result = firstBlock.complete();



const secondBlock = new Block();
secondBlock.add(createObj('boba','yonna', 20))
secondBlock.add(createObj('boba','yonna', 24))
secondBlock.add(createObj('boba','yonna', 25))
secondBlock.add(createObj('boba','yonna', 27))
secondBlock.add(createObj('boba','yonna', 28))
secondBlock.add(createObj('boba','yonna', 29))
secondBlock.add(createObj('boba','yonna', 30))
secondBlock.add(createObj('boba','yonna', 31))
secondBlock.add(createObj('boba','yonna', 32))
secondBlock.add(createObj('boba','yonna', 33))
secondBlock.add(createObj('boba','yonna', 34))
secondBlock.add(createObj('boba','yonna', 35))
secondBlock.add(createObj('boba','yonna', 36))
secondBlock.add(createObj('boba','yonna', 37))
secondBlock.add(createObj('boba','yonna', 38))
const result2 = secondBlock.complete();


const newBlockChain = new BlockChain();

newBlockChain.addBlock(result);
newBlockChain.addBlock(result2)
console.log('===')
console.log(result.currentHash)
console.log(secondBlock._array)
