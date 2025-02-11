function menuLoad() {
    const contentDiv = document.querySelector("#content");
    const divContent = document.createElement('div');
    divContent.classList.add('divContent');

    const menuList = document.createElement('ul');
    const listItem1 = document.createElement('li');
    const listItem2 = document.createElement('li');
    const listItem3 = document.createElement('li');

    listItem1.textContent = "Beer";
    listItem2.textContent = "Steak";
    listItem3.textContent = "Drumsticks";

    menuList.appendChild(listItem1);
    menuList.appendChild(listItem2);
    menuList.appendChild(listItem3);

    divContent.appendChild(menuList);
    contentDiv.appendChild(divContent);
}

export { menuLoad }