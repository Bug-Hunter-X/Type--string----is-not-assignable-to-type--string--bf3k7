function greeter(person: string): string {
  return "Hello, " + person;
}

function greetUsers(users: string[]): string[] {
  return users.map(user => greeter(user));
}

let user = ["Jane User", "John Smith"];
console.log(greetUsers(user)); //Correct usage