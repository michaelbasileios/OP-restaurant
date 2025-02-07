// const contentDiv = document.querySelector("#content");

function homePageLoad(div) {
    div.innerHTML = '';
    div.innerHTML = `<img src="" alt="A large grizzly bear">
        <h1>Grizzly Grillhouse</h1>
        <h2>In Mother Russia, the steak eats you</h2>`;
};

export { homePageLoad };