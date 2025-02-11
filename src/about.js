function aboutPageLoad(div){
    const divContent = document.createElement('div');

    const aboutInfo = document.createElement('h2');
    aboutInfo.textContent = "We are a nice cozy restaurant situated right next to the infamous Ace City Chemicals in Gotham City. Come on over and have a laugh while feasting on our scrumptious irradiated meals!";
    divContent.appendChild(aboutInfo);

    div.appendChild(divContent);
}

export { aboutPageLoad }