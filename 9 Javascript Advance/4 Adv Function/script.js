const first = () => {

	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();


//Closures - a function ran, the function executed. Its never going to execute again
// But its going to remember that there are reference to those variable.
The child scope always have access to its parent scope.
But the parent scope dont have access to child scope.

// Curring

const multiply = (a,b)=> a+b ;
const curriedMultiply = (a) => (b) => a+b;
 
 curriedMultiply(3)(4);
 // 12

 const multiplyBy5 = curriedMultiply(5);
 multiplyBy5(5); // curriedMultiply(5)(5); = 25;
 // 25
 multiplyBy5(6); // curriedMultiply(5)(6); = 30;
 //30



 //Compose

 const Compose = (f,g) => (a) => f(g(a));

 const sum = (num) => num +1;

 Compose(sum,sum)(5);
// 7



const sub = (num) => num - 1;

Compose(sub,sum)(5);
//step
sum(5) = num + 1 = 5 + 1 = 6
sub(sum(5)) = sub(6) = num - 1 = 5 
Ans 5


//avoiding side effect , functional purity .

var a = 1;
function b(){
	a = 2; //should not do like this
}

