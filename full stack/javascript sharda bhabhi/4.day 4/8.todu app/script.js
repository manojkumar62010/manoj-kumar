let todo = [];

let req = prompt("please enter your request");
//  console.log(req)
while (true) {
   if (req == "quit") {
      console.log("quiting app")
      break;
   }
   if (req == "list") {
      console.log("...........................")
      for (let i = 0; i < todo.length; i++) {
         console.log(i, tudo[i]);
      }
      console.log("...............");
   }
   else if (req == "add") {
      let task = prompt("please enter the task which you want");
      todo.push(task);
      console.log("task added");
   }
   else if (req == "delete") {
      let index = prompt("please enter the task index");
      todo.splice(index, 1);
      consol2.log("task deleted")
   }
   else {
      console.log("wrong request")
   }
   // req = prompt("please enter your request")
}