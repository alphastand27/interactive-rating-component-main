const container = document.getElementById("container");
const starIcon = "images/icon-star.svg";
const illustration = "images/illustration-thank-you.svg";

const intro = `
    <img id="star-icon" src="${starIcon}" alt="star icon">
    <h1 id="question">How did we do?</h1>
    <p id="details">
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
    </p>
    <section id="rating" class="container text-center">
        <div class="rates">1</div>
        <div class="rates">2</div>
        <div class="rates">3</div>
        <div class="rates">4</div>
        <div class="rates">5</div>
    </section>
    <button id="button" type="submit" class="container text-center">SUBMIT</button>
`;

const outro = `
    <img id="illustration" src="${illustration}" alt="a thank you illustration">
    <h1 id="thanks">Thank you!</h1>
    <p id="selected">You selected 4 out of 5</p>
    <p id="detailed-thanks">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
    </p>
`;

container.innerHTML = intro;