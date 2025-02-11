function aboutPageLoad(){
    const contentDiv = document.querySelector("#content");
    const divContent = document.createElement('div');
    divContent.classList.add('divContent');

    const aboutInfo = document.createElement('h2');
    aboutInfo.textContent = "We are a nice cozy restaurant situated right next to the infamous Ace City Chemicals in Gotham City. Come on over and have a laugh while feasting on our scrumptious irradiated meals!";
    divContent.appendChild(aboutInfo);

    contentDiv.appendChild(divContent);
}

export { aboutPageLoad }