const diagram = document.querySelector(".diagram");
let mass_num = 0;
let prot_num = 0;
let neut_num = 0;
let atom_name = "";
let atom_stability = "stable";

function remove(element) {
    mass_num--;
    if (element.src == "http://127.0.0.1:5500/public/svg/bx-circle.svg") {
        prot_num--;
    }
    if (element.src == "http://127.0.0.1:5500/public/svg/bxs-circle.svg") {
        neut_num--;
    }
    element.remove();
    changeAtomSize();
}

function newBall(n) {
    let new_ball = document.createElement("img");
    new_ball.setAttribute("onclick", "remove(this)");
    if (n == 1) {
        new_ball.src = "../public/svg/bx-circle.svg";
        if (mass_num < 16) {
            prot_num++;
        }
    } else {
        new_ball.src = "../public/svg/bxs-circle.svg";
        if (mass_num < 16) {
            neut_num++;
        }
    }

    if (mass_num < 16) {
        diagram.appendChild(new_ball);
        newBallAdded();
    }
}

function newBallAdded() {
    mass_num++;
    changeAtomSize();
}

function changeAtomSize() {
    switch (mass_num) {
        case 4:
            diagram.style.height = "5rem";
            diagram.style.width = "5rem";
            break;
        case 5 || 6:
            diagram.style.height = "6rem";
            diagram.style.width = "6rem";
            break;
        case 7 || 8:
            diagram.style.height = "7rem";
            diagram.style.width = "7rem";
            break;
        case 9 || 16:
            diagram.style.height = "8rem";
            diagram.style.width = "8rem";
            break;
    }

    switch (prot_num) {
        case 1:
            atom_name = "Hidrogênio";
            break;
        case 2:
            atom_name = "Hélio";
            break;
        case 3:
            atom_name = "Lítio";
            break;
        case 4:
            atom_name = "Berílio";
            break;
        case 5:
            atom_name = "Boro";
            break;
        case 6:
            atom_name = "Carbono";
            break;
        case 7:
            atom_name = "Nitrogênio";
            break;
        case 8:
            atom_name = "Oxigênio";
            break;
        case 9:
            atom_name = "Flúor";
            break;
        case 10:
            atom_name = "Neônio";
            break;
        case 11:
            atom_name = "Sódio";
            break;
        case 12:
            atom_name = "Magnésio";
            break;
        case 13:
            atom_name = "Alumínio";
            break;
        case 14:
            atom_name = "Silício";
            break;
        case 15:
            atom_name = "Fósforo";
            break;
        case 16:
            atom_name = "Enxofre";
            break;
        default:
            atom_name = "N/A";
    }

    if (prot_num == neut_num) {
        atom_stability = "Stable";
    } else {
        atom_stability = "Unstable";
    }

    document.querySelector(".atom_stability").innerHTML = atom_stability;
    document.querySelector(".atom_name").innerHTML = atom_name;
}
