//ANCHOR Creazione array oggetti
const teamMembers = [
    {
        nome: "Wayne Barnett",
        ruolo:"Founder & CEO",
        foto:"wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo:"Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo:"Office Manager",
        foto:"walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo:"Social Media Manager",
        foto:"angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo:"Developer",
        foto:"scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo:"Graphic Designer",
        foto:"barbara-ramos-graphic-designer.jpg",
    },
];
console.log(teamMembers);

//ANCHOR stampa delle info su console
teamMembers.forEach((membro)=>{
    console.log(`Nome: ${membro.nome} \nRuolo: ${membro.ruolo} \nFoto: ${membro.foto}`)
})

//ANCHOR stampa delle info sul DOM
const containerHTML = document.getElementById("container");

teamMembers.forEach((membro) => {
    const memberDivHTML = document.createElement("div");
    memberDivHTML.innerHTML = `<p class="card">Nome: ${membro.nome} <br> Ruolo: ${membro.ruolo} <br> Foto: ${membro.foto}</p>`;
    containerHTML.appendChild(memberDivHTML);
});