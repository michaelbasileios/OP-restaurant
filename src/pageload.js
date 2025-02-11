function homePageLoad(div) {

    const divContent = document.createElement('div');
    const footer = document.querySelector("footer");
    
    //create, append image
    const image = document.createElement('img');
    image.id = 'homeImage';
    image.src = "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    image.alt = "Brown bear sitting on grass";
    divContent.appendChild(image);

    //create, append heading
    const headingOne = document.createElement('h1');
    headingOne.textContent = "Grizzly Grillhouse";
    divContent.appendChild(headingOne);

    //create, append subheading
    const subHeading = document.createElement('h2');
    subHeading.textContent = "In Mother Russia, the steak eats you";
    divContent.appendChild(subHeading);
    
    //append all to contentDiv
    div.appendChild(divContent);

    //create, append footer content
    const footerText = document.createElement('p');
    const imageSpan = document.createElement('span');
    imageSpan.textContent = "Image: ";
    imageSpan.style.fontWeight = 'bold';
    footerText.appendChild(imageSpan);

    const imgNameSpan = document.createElement('span');
    imgNameSpan.textContent = "Lonely Bear ";
    imgNameSpan.style.fontStyle = 'italic';
    footerText.appendChild(imgNameSpan);

    const imgAuthor = document.createElement('span');
    imgAuthor.textContent = "by Mark Basarab, via ";
    footerText.appendChild(imgAuthor);

    const footerLink = document.createElement('a');
    footerLink.href = "https://unsplash.com/";
    footerLink.textContent = "unsplash.com";
    footerText.appendChild(footerLink);

    footer.appendChild(footerText);
};

export { homePageLoad };