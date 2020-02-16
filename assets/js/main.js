let question = [{
                question_title: "Why so JavaScript and Java have similar name?",
                quize1: "JavaScript is a stripped-down version of Java",
                quize2: "JavaScript's syntax is loosely based on Java's",
                quize3: "They both originated on the island of Java",
                quize4: "None of the above",
                answer: 2,
            },
            {
                question_title: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
                quize1: "The User's machine running a Web browser",
                quize2: "The Web server",
                quize3: "A central machine deep within Netscape's corporate offices",
                quize4: "None of the above",
                answer: 1,
            },
            {
                question_title: "______ JavaScript is also called client-side JavaScript",
                quize1: "Microsoft",
                quize2: "Navigator",
                quize3: "LiveWire",
                quize4: "Native",
                answer: 2
            },
            {
                question_title: " __________ JavaScript is also called server-side JavaScript.",
                quize1: "Microsoft",
                quize2: "Navigator",
                quize3: "LiveWire",
                quize4: "Native",
                answer: 3
            },
            {
                question_title: " What are variables used for in JavaScript Programs? ",
                quize1: "Storing numbers, dates, or other values ",
                quize2: "Varying randomly ",
                quize3: " Causing high-school algebra flashbacks",
                quize4: "None of the above ",
                answer: 1
            }

        ];


let currentQuestion=0;
let currentScore=0;
let quizeOver=false;

        function displayItem(){
            let question_heading= document.querySelector(".quize-heading > h3");

            question_heading.innerHTML=question[currentQuestion].question_title;
            let question_list=document.querySelector(".quize-list");
            question_list.innerHTML=`
                <li> <input type="radio" name="quize" id="radio1" value="1"> <label for="radio1" class="quize1"> ${question[currentQuestion].quize1}</label> </li>
                <li> <input type="radio" name="quize" id="radio2" value="2">  <label for="radio2" class="quize2">${question[currentQuestion].quize2} </label> </li>
                <li> <input type="radio" name="quize" id="radio3" value="3">  <label for="radio3" class="quize3">${question[currentQuestion].quize3}</label> </li>
                <li> <input type="radio" name="quize" id="radio4" value="4">  <label for="radio4" class="quize4">${question[currentQuestion].quize4} </label> </li>

            `;
        }


        displayItem();

        document.querySelector("#button").addEventListener("click",function(){
                let radioValue= document.querySelector("input[type=radio]:checked");
            if(!quizeOver){
  
                         if(radioValue == null){
                    console.log("please input something")
                }else{

                    if(parseInt(radioValue.value) === question[currentQuestion].answer){
                        currentScore++;
                   
                    }

   currentQuestion++;
                       if(currentQuestion < question.length){
                        displayItem();

                }else{
                    quizeOver= true;
                    result(currentScore)
                }

                }
            }
        })


        function result(a){
            document.querySelector(".result").innerHTML='You scored: ' + a + ' out of ' + question.length;
             document.querySelector(".result").style.display="block"
        }