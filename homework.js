/**
 * PROMPT: Using only JavaScript (do not touch the index.html or styles.css file), create a circle that will fill
 * the square and touch all of the edges of the square. Refer to "finished-example.png" to see an example.
 */

 /** BEGIN CODE **/



let square = document.getElementsByClassName("square")[0];
let circle = document.createElement("div");

circle.classList.add("square");
circle.style.borderRadius = "50%";

square.appendChild(circle);
