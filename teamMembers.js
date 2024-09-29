const teamMembers = [
    {
        name: "Malik Ahsan Ali",
        role: "Managing Director, Codematics Inc",
        imgSrc: "./img/sir-ahsan.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Hammad Lodhi",
        role: "Chief Executive Officer, Codematics Inc",
        imgSrc: "./img/hammad.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    
    {
        name: "Waseem Javed",
        role: "Business Development Director, Codematics Inc",
        imgSrc: "./img/waseem.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Umair Saeed Mughal",
        role: "Chief Technology Officer (CTO), Codematics Inc",
        imgSrc: "./img/sir-umair.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Haris Riaz",
        role: "Program Manager, Urraan",
        imgSrc: "./img/haris.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Kaleem Ahmad",
        role: "3D Animator/Modeler",
        imgSrc: "./img/kaleem.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Ali Rehman",
        role: "Sr. Android Developer",
        imgSrc: "./img/ali.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Sifat Ullah Shah",
        role: "Sr. Android Developer",
        imgSrc: "./img/sifat.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    // Newly added team members
    {
        name: "Saddam Shadab",
        role: "UI/UX Product Designer",
        imgSrc: "./img/sadam.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Waqar Khan",
        role: "Full Stack Developer",
        imgSrc: "./img/waqar.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Shahzeb ur Rehman",
        role: "MEVN Stack Developer",
        imgSrc: "./img/shahzaib.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Khizar Hayat",
        role: "Game Designer",
        imgSrc: "./img/khizar.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Zaid ul Wahab",
        role: "iOS Developer",
        imgSrc: "./img/zaid-1.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Babar Ali Shah",
        role: "Full Stack Developer",
        imgSrc: "./img/babar.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Khurria Zafar",
        role: "Sr. Android Developer",
        imgSrc: "./img/khizar.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Anbar Rauf",
        role: "Social Media Designer",
        imgSrc: "./img/anbar.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Junaid Mir",
        role: "Digital Marketing Manager",
        imgSrc: "./img/junaid.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Javeria Qureshi",
        role: "Web Developer",
        imgSrc: "./img/javeria.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Aqsa Nadeem",
        role: "Game Developer",
        imgSrc: "./img/aqsa.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Mursaleen",
        role: "3D Animator/Modeler",
        imgSrc: "./img/mursaleen.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    // Additional new members
    {
        name: "Umaima Malik",
        role: "3D Animator/Modeler",
        imgSrc: "./img/umaima.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Farhad Younas",
        role: "iOS Developer",
        imgSrc: "./img/farhad.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Uzair Khan",
        role: "SEO Expert",
        imgSrc: "./img/uzair.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Khalil Ur Rehman",
        role: "3D Animator/Modeler",
        imgSrc: "./img/khalil.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Wajiha Saif",
        role: "Web Developer",
        imgSrc: "./img/wajiha.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Fatima Zahid",
        role: "UI/UX Designer",
        imgSrc: "./img/fatima.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Maham Awan",
        role: "Content Writer",
        imgSrc: "./img/maham.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Mishal Nawaz",
        role: "Android Developer",
        imgSrc: "./img/mishal.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Raja Usama",
        role: "Web Developer",
        imgSrc: "./img/raja usama.png",
        linkedInSrc: "./img/linked_icon.gif"
    },
    {
        name: "Mehreen Gul",
        role: "Graphic Designer",
        imgSrc: "./img/mehreen.png",
        linkedInSrc: "./img/linked_icon.gif"
    }
];





const teamMemberRow = document.getElementById("teamMemberRow");

teamMembers.forEach(member => {
    const cardHTML = `
        <div class="TeamMemberCard">
            <img class="imagesTeam" src="${member.imgSrc}" alt="">
            <h3 class="TeamMembername">${member.name}</h3>
            <div class="ParagraphContainer">
                <p>${member.role}</p>
            </div>
            <a href=""><img class="linkedInIcon" src="${member.linkedInSrc}" alt=""></a>
        </div>
    `;

    teamMemberRow.innerHTML += cardHTML;
});
