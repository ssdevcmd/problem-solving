//Problem 34: Event Emitter  [Medium]
//Description: Build a simple EventEmitter class with on(event, listener), emit(event, ...args), and off(event, listener) methods.
//Example:
//const emitter = new EventEmitter();emitter.on('greet', name => console.log('Hello ' + name));emitter.emit('greet', 'Sara'); // Hello Sara
//Hint: Store listeners in an object where keys are event names and values are arrays of functions.


class EventEmitter {
  constructor(){
    this.events = {};
  }

  
  

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }

    off(event, listener) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(l => l !== listener);
        }
    }
}

const emitter = new EventEmitter();

// ১. লিসেনার ফাংশন ডিফাইন
const greetSara = (name) => console.log(`Hello ${name}`);
const logTime = () => console.log(`Time logged: ${new Date().toLocaleTimeString()}`);

// ২. 'greet' ইভেন্টে সাবস্ক্রাইব করা (on)
emitter.on('greet', greetSara);
emitter.on('greet', logTime);

console.log("--- First Emit ---");
emitter.emit('greet', 'Sara'); 
// Output: 
// Hello Sara
// Time logged: ...

// ৩. 'greet' ইভেন্ট থেকে একটি লিসেনার রিমুভ করা (off)
emitter.off('greet', logTime);

console.log("--- Second Emit (after off) ---");
emitter.emit('greet', 'Sara');