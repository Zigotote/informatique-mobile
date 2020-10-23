const { Plugins } = capacitorExports;
const { Camera } = Plugins;

$.getJSON("https://devfest-nantes-2018-api.cleverapps.io/blog").done((data) => {
  $.each(data, (_, item) => {
    let card = document.createElement("ion-card");
    let header = document.createElement("ion-card-header");
    let ionImg = document.createElement("img");
    ionImg.setAttribute(
      "src",
      "https://devfest2018.gdgnantes.com/" + item.image
    );
    let iontitle = document.createElement("ion-card-title");
    let title = document.createTextNode(item.title);
    iontitle.appendChild(title);
    header.appendChild(ionImg);
    header.appendChild(iontitle);
    let ioncontent = document.createElement("ion-card-content");
    let content = document.createTextNode(item.brief);
    ioncontent.appendChild(content);
    card.appendChild(header);
    card.appendChild(ioncontent);
    document.getElementById("content").appendChild(card);
  });
});

$("#camera-button").click(async () => {
  let options = {
    quality: 90,
    allowEditing: true,
    resultType: "dataUrl",
    saveToGallery: false,
    source: "CAMERA",
    direction: "FRONT",
  };
  Camera.getPhoto(options)
    .then((data) => {
      const modalElement = document.createElement("ion-modal");
      modalElement.component = "modal-page";
      modalElement.cssClass = "my-custom-class";
      //modalElement.componentProps = { img: data.dataUrl };
      /*let title = document.createElement("ion-item");
      title.innerHTML = "ANNDJNFD";
      let titleLabel = document.createElement("ion-label");
      titleLabel.setAttribute("position", "floating");
      titleLabel.appendChild(document.createTextNode("Title"));
      let titleInput = document.createElement("ion-input");
      title.appendChild(titleLabel);
      title.appendChild(titleInput);

      modalElement.appendChild(title);*/
      document.body.appendChild(modalElement);
      return modalElement.present();
    })
    .catch((error) => {
      console.log(error);
    });
});

define("modal-page", class extends HTMLElement {
  connectedCallback() {
    const modalElement = document.querySelector("ion-modal");
    this.innerHTML = `
<ion-header>
<ion-toolbar>
  <ion-title>Création d'un article privé</ion-title>
  <ion-buttons slot="primary">
    <ion-button onClick="dismissModal()">
      <ion-icon slot="icon-only" name="close"></ion-icon>
    </ion-button>
  </ion-buttons>
</ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <img src="${modalElement.componentProps.img}" />
  <ion-input name="img" hidden value="${modalElement.componentProps.img}"></ion-input>
  <ion-item>
    <ion-input name="title" placeholder="Titre" required="true"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label position="stacked">Description</ion-label>
    <ion-input name="brief"></ion-input>
  </ion-item>
<ion-button expand="block" onClick="store()">Enregistrer</ion-button>
</ion-content>`;
  }
});
