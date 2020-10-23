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
