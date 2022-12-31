const cardContainer = document.querySelector('.article-container');

mountains.forEach(cardDetails => {
    let cardComponent = new CardComponent(cardDetails);
    cardContainer.append(cardComponent.render());
});