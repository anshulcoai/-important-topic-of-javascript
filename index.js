//Method chaining = Calling one method after another in one continuous line of code.

//----- NO METHOD CHAINING -------

/*let username = window.prompt("Enter your username:");

username = username.trim();
let letter = username.charAt(0);

letter = letter.toUpperCase();

let extrachars = username.slice(1);
extrachars = extrachars.toLowerCase();
username = letter + extrachars;

onsole.log(username);*/


// ------ METHOD CHAINING ---------


/*let username = window.prompt("Enter your username:");

username = username.trim().charAt(0).toUpperCase() +  username.trim().slice(1).toLowerCase();

console.log(username);*/


//                         ------------- NEXT -------------

// logical operators =  used to combine or manipulate boolean values (true or false)
        
//     AND = &&
//      OR = ||
//     NOT = !

/*const temp = 40;

if(temp <= 0 || temp > 30)
{
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}

const isSunny = true;

if(!isSunny)
{
    console.log("It is cloudy outside");
}
else{
     console.log("It is sunny outside")
}*/

//                   --------------- NEXT ------------------

 //  = assignment operator
 // == comparison operator(compare if values are equal)
 // === strict equality operator (compare if values & datatype are equal)
 //  != inequality operator
 //  !== strict inequality operator
 
 /*const PI = "3.14";

 if(PI !== "3.14")
 {
    console.log("That is NOT PI");
 }
else(
    console.log("That is PI")
)*/

 //             ------------------- NEXT -----------------------

   // while loop = repeat some code WHILE some condition is true

/*   let username = "";


   while(username === "" || username === null)
   {
    username = window.prompt(`Enter your name`);
   }

   console.log(`Hello ${username}`);*/

  /* let loggedIn = false;
   let username;
   let password;

   while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword")
    {
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try Again");
    }
}*/

//  ----------------------- NEXT -------------------------

  //  for loop = repeat some code a limited amount of times


 /* for(let i = 10; i <= 0; i-=3 )
  {
    console.log(i);
  }

  console.log("HAPPY NEW YEAR!");*/

 /* for(let i = 1; i <= 20; i++){
    if(i == 13){
        continue;
    }
    else{
   console.log(i);
    }
    
  }*/


  // - - ------------  NEXT  -------------------_ - - - -

   //function = a section of reusable code.
  //             declare code once, use it whenever you want.
  //             Call the function to execute that code.

  /*function happyBirthday(username, age)
  {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(` you are ${age} years old`);
  }

  happyBirthday("Michael jackson", 19);*/

/* function isValidEmail(email)
{

     if (email.includes("@")){
     return true;
    }
    else{
     return false;
    }
   
}


  console.log(isValidEmail("Hello@gmail.com"));
  console.log(isValidEmail("Elonmusk.com"));
  console.log(isValidEmail("roger@gmail.com"));
*/





  // --------------------------------------- NEXT -----------------------------------------------------




 



























   




















