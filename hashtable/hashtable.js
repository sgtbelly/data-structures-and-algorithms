'use strict';

const util = require('util');

class Node {
    constructor(key, value){
        this.[key] = value;
        this.next = null;
    }
}

class List{
    constructor(node){
        this.head = node;
        this.count = 0;
    }
}


class Hashmap {

    constructor(limit) {
        this.storage = [];
        this.limit = limit;
        this.count = 0;
    }

    hash(key) {
        let bigTotal = key.split ('').reduce((p,n) => {
            return p + n.charCodeAt(0);
        }, 0);

        let idx = bigTotal % this.size;

        return idx;
    }

    add(key,value) {
        let hash = this.hash(key);
        console.log(hash, key, value);

        if(! this.map[hash]) {this.map[hash] = [];}

        this.map[hash].push({[key]:value});
    }

    find(key){
        let findResult = {[key]:value};


    }

    contains(key){
        let result = result(key)
    }

    GetHash(key) {
        returns index
    }
}

