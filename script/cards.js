class CardComponent {
    constructor(cardDetails) {
        this.number = cardDetails.number;
        this.name = cardDetails.name; 
        this.height = cardDetails.height; 
        this.position = cardDetails.position;
        this.climbers = cardDetails.climbers;
        this.deathtoll = cardDetails.deathtoll;
        this.season = cardDetails.season;
        this.info = cardDetails.info; 
        this.image = cardDetails.image;

        this.modal = new CardDetailsModal(this);
    }

    render() {
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = `
        <article class = "card">
            <p class="card-number">${this.number}</p>
            <img
                class="card-image"
                width="700"
                src="${this.image.ref}"
                alt="${this.image.alt}"
            />
            <section class="card-body">
            <h2 class="mountain-name">${this.name}</h2>
            <div class="mountain-information">
                <h3 class="card-title">Information</h3>
                <p class="info-cat">Höjd:</p>
                <p class="information-text">${this.height}</p>
                <p class="info-cat">Plats:</p>
                <p class="information-text">${this.position}</p>
                <p class="info-cat">Antal som nått toppen:</p>
                <p class="information-text">${this.climbers}</p>
                <p class="info-cat">Antal som dött: </p>
                <p class="information-text">${this.deathtoll}</p>
                <p class="info-cat">Klättringssäsong: </p>
                <p class="information-text">${this.season}</p>
                <p class="info-cat">Kul att veta: </p>
                <p class="information-text">${this.info}</p>
            </div>
            </section>      
      </article>
      `

      let el = tempDiv.firstElementChild;

      el.addEventListener("click", event => this.handleClick(event));

      return el; 
    }

    handleClick(event) {
        this.modal.show();
    }
}

class CardDetailsModal {
    constructor(cardComponent) {
      this.parent = cardComponent; 
      this.isOpen = false;
    }
  
    show() {
      if(this.isOpen) return false; 
  
      this.modalElement = this.render();
      document.body.append(this.modalElement);
  
      this.isOpen = true;
    }
  
    exit(event) {
      if(event.currentTarget == event.target) {
        return false;
      }
  
      this.modalElement.remove();
  
      this.isOpen = false; 
    }
    
    render() {
      let div = document.createElement("div");
      div.innerHTML = `
        <div class="card-modal">
          <div class="modal-content">
            <image class="modal-img" src=${this.parent.image.ref2}>
          </div>
        </div>
        `
  
    let el = div.firstElementChild;
    
    el.addEventListener("click", event => this.exit(event));
  
    return el;
    }
  }
