export const Cities = [
    {
        titolo: "Questa è Roma!",
        paese: "Italia",
        sottotitolo: "I monumenti più famosi di Roma",
        monumenti: ["Colosseo", "Vaticano", "Piazza di Spagna", "Piazza Navona", "Altare della Patria"]
    },
    {
        titolo: "Questa è Mosca!",
        paese: "Federazione Russa",
        sottotitolo: "I monumenti più famosi di Mosca",
        monumenti: ["Piazza Rossa", "Cremlino", "Teatro Bolshoj", "VDNKH", "Cattedrale del Cristo Salvatore"]
    },
    {
        titolo: "Questa è Reykjavik!",
        paese: "Islanda",
        sottotitolo: "I monumenti più famosi di Reykjavik",
        monumenti: ["Hallgrímskirkja", "Harpa Concert Hall", "Sun Voyager (Sólfar)", "Perlan", "Museo Nazionale d'Islanda"]
    },
    {
        titolo: "Questa è Boston!",
        paese: "Stati Uniti",
        sottotitolo: "I monumenti più famosi di Boston",
        monumenti: ["Freedom Trail", "Faneuil Hall", "Boston Common", "Bunker Hill Monument", "Boston Tea Party Ships & Museum"]
    },
    {
        titolo: "Questa è Parigi!",
        paese: "Francia",
        sottotitolo: "I monumenti più famosi di Parigi",
        monumenti: ["Tour Eiffel", "Champs-Élysées", "Arco di Trionfo", "Cattedrale di Notre-Dame", "Museo del Louvre"]
    },
    {
        titolo: "Questa è Praga!",
        paese: "Repubblica Ceca",
        sottotitolo: "I monumenti più famosi di Praga",
        monumenti: ["Ponte Carlo", "Castello di Praga", "Orologio Astronomico", "Cattedrale di San Vito", "Piazza della Città Vecchia"]
    }
];

//Function for open the modal window
export function openModal(city){
    const modal = document.getElementById("modal");

    modal.querySelector("h3").textContent = city.titolo;
    modal.querySelector("p").textContent = city.paese;
    modal.querySelector("h4").textContent = city.sottotitolo;
    //dynamic creation of the list of monuments
    const listMonuments = modal.querySelector("ol");
    listMonuments.innerHTML = "";
    city.monumenti.forEach(monumento => {
        const listItem = document.createElement("li");
        listItem.textContent = monumento;
        listItem.classList.add("bg-sky-300", "text-gray-900", "text-center", "text-xl", "md:text-2xl", "p-2");
        listMonuments.appendChild(listItem);
    });
    //toggler of the modal
    modal.classList.remove("hidden");

}

export function closeModal(){
    document.getElementById("modal").classList.add("hidden");
}
