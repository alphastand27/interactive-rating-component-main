//main display container
const container = document.getElementById("container");

//svg src
const starIcon = "images/icon-star.svg";
const illustration = "images/illustration-thank-you.svg";

//image#star-icon
const star = document.getElementById("star-icon");

//displays elements object for the outro 
const outObject = {
    img: `<img id="illustration" src="${illustration}" alt="a thank you illustration">`,
    h1: `<h1 id="thanks">Thank you!</h1>`,
    selected: `<p id="selected">You selected 0 out of 5</p>`,
    detailed: 
        `<p id="detailed-thanks">
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
        </p>`
};

//divs and button tags
const rates = document.getElementsByClassName("rates");
const button = document.getElementById("button");

//setting the source for the image tag in the index.html
star.src = starIcon;

//outro display for the innerHTML
let outro = `
    ${outObject.img}
    ${outObject.h1}        
    ${outObject.selected}
    ${outObject.detailed}
`;

//boolean variable to keep track of the state of the clicked button
let clickedState;

// function for the rating and rating display
const ratingLogic = (index) => {

    //checks if the color default is set in the html/css not JS
    if (rates[index].style.color === "") {
        //checks if there is a clicked button and if there is the function is exited changing nothing 
        if(clickedState === true) {
            return;
        //checks if there is no clicked button and if there is not the else block is executed
        } else {
            /*
            ** set the button click state to true(indicating it is clicked) 
            ** therefore preventing other buttons from being clickable
            */
            clickedState = true;
            //if the default was set in html/css then it is changes to the below specified styles
            rates[index].style = "color: var(--Dark-Blue); background-color: var(--White)";
            //Which also updates the text for the p#selected tag to display the rating picked out of five
            outObject.selected = `<p id="selected">You selected ${index + 1} out of 5</p>`;
            //and the outro display is set
            return outro = `
                ${outObject.img}
                ${outObject.h1}        
                ${outObject.selected}
                ${outObject.detailed}
            `;
        }
    //checks if the color is set in JS not html/css
    } else {
        /*
        ** when the button is clicked for a second time 
        ** the state is changed from true to false
        ** allowing another button to be clickable
        */
        clickedState = false;
        //then changes the color back to the default set in html/css
        rates[index].style.color = "";
        //also changes the background back to the default set in html/css
        rates[index].style.backgroundColor = "";
        //Which also updates the text for the p#selected tag to display the rating picked out of five
        outObject.selected = `<p id="selected">You selected 0 out of 5</p>`;
        //and the outro display is set
        return outro = `
            ${outObject.img}
            ${outObject.h1}        
            ${outObject.selected}
            ${outObject.detailed}
        `;
    };
};

//click events handling for the ratings 1 to 5
rates[0].addEventListener("click", () => {
    ratingLogic(0);
});

rates[1].addEventListener("click", () => {
    ratingLogic(1);  
});

rates[2].addEventListener("click", () => {
    ratingLogic(2);  
});

rates[3].addEventListener("click", () => {
    ratingLogic(3);  
});

rates[4].addEventListener("click", () => {
    ratingLogic(4);  
});

//submit button click event handling
button.addEventListener("click", () => {
    container.innerHTML = outro;
})