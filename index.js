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
    <section id="rating">
        <a class="rates" href="#f">1</a>
        <a class="rates" href="#f">2</a>
        <a class="rates" href="#f">3</a>
        <a class="rates" href="#f">4</a>
        <a class="rates" href="#f">5</a>
    </section>
    <button type="submit">SUBMIT</button>
`;

const outro = `
    <img id="star-icon" src="${illustration}" alt="star icon">
    <h1 id="thanks">Thank you!</h1>
    <p id="selected">You selected ${"<!-- Add rating here -->"} out of 5</p>
    <p id="detailed-thanks">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
    </p>
`;

container.innerHTML = intro;