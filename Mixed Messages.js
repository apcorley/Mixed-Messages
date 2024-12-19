console.log("Hello");

let starts = ['You', 'One', 'Always', 'Never'];
console.log(starts);
let mids = ['get angry','stay the course','chill out','chop your own wood', 'breathe'];
let ends = ['too often', 'at times', 'forgiveness', 'buddy'];

let s = Math.floor(Math.random()*starts.length);
let m = Math.floor(Math.random()*mids.length);
let e = Math.floor(Math.random()*ends.length);
console.log(starts[s] + ' ' + mids[m]+ " " + ends[e] + '.');


