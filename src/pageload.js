const contentDiv = document.querySelector("#content");

function pageLoad() {
    contentDiv.innerHTML = `<img src="" alt="A large grizzly bear">
        <h1>Grizzly Grillhouse</h1>
        <h2>In Mother Russia, the steak eats you</h2>`;
};

export { pageLoad };