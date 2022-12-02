nbJoueurs = 0;
tour = 1;

/**
 * Joueurs
 */
const joueurs = {
    1 : {
        'case' : 1,
    },
    2 : {
        'case' : 1,
    },
    3 : {
        'case' : 1,
    },
    4 : {
        'case' : 1,
    },
}

/**
 * Questions
 */
const quiz = {
    "theme1": [{
            "question": "Quel est le seul moyen contraceptif efficace contre les ist ?",
            "reponses": ["vih", "sida", "test", "test2", "test3"],
            "entre": [],
            "correct": "préservatif masc/fem"
        },
        {
            "question": "Quel est le seul moyen contraceptif efficace contre les ist ?",
            "reponses": ["vih", "sida", "test", "test2", "test3"],
            "entre": [],
            "correct": "préservatif masc/fem"
        },
        {
            "question": "Quel est le seul moyen contraceptif efficace contre les ist ?",
            "reponses": ["vih", "sida", "test", "test2", "test3"],
            "entre": [],
            "correct": "préservatif masc/fem"
        },
    ],
    "theme2": [{
            "question": "Quel est le seul moyen contraceptif efficace contre les ist ?",
            "reponses": ["vih", "sida", "test", "test2", "test3"],
            "entre": [],
            "correct": "préservatif masc/fem"
        },
        {
            "question": "Quel est le seul moyen contraceptif efficace contre les ist ?",
            "reponses": ["vih", "sida", "test", "test2", "test3"],
            "entre": [],
            "correct": "préservatif masc/fem"
        },
        {
            "question": "Quel est le seul moyen contraceptif efficace contre les ist ?",
            "reponses": ["vih", "sida", "test", "test2", "test3"],
            "entre": [],
            "correct": "préservatif masc/fem"
        },
    ],
}

/**
 * Plateau
 */
const plateau = {
    1 : [86,27],
    2 : [83,29],
    3 : [80,32],
    4 : [77,34],
    5 : [73,37],
    6 : [68,40],
    7 : [56,50],
    8 : [51,53],
    9 : [48,56],
    10 : [44,58],
    11 : [39,60],
    12 : [34,62],
    13 : [28,64],
    14 : [22,64],
    15 : [16,64],
    16 : [12,62],
    17 : [9,59],
    18 : [6,55],
    19 : [6,50],
    20 : [6,45],
    21 : [8,40],
    22 : [10,35],
    23 : [14,31],
    24 : [19,29],
    25 : [24,29],
    26 : [29,28],
    27 : [33,29],
    28 : [37,30],
    29 : [41,31],
    30 : [45,33],
    31 : [49,35],
    32 : [54,38],
    33 : [59,40],
    34 : [64,43],
    35 : [69,47],
    36 : [73,50],
    37 : [78,54],
    38 : [84,57],
    39 : [89,61],
    40 : [95,65],
}

/***********************************************************************************************************************/

/**
 * Choisir nombre joueurs
 */
function choisirNbJoueurs(){
    $('.selection-nb-joueurs').show();
    $(document).bind('keypress', function(e){
        if(
            String.fromCharCode(e.keyCode) == 'A'
            || String.fromCharCode(e.keyCode) == 'a'
        ){
            nbJoueurs = 1;
        }else if(
            String.fromCharCode(e.keyCode) == 'Z'
            || String.fromCharCode(e.keyCode) == 'z'
        ){
            nbJoueurs = 2;
        }else if(
            String.fromCharCode(e.keyCode) == 'E'
            || String.fromCharCode(e.keyCode) == 'e'
        ){
            nbJoueurs = 3;
        }else if(
            String.fromCharCode(e.keyCode) == 'R'
            || String.fromCharCode(e.keyCode) == 'r'
        ){
            nbJoueurs = 4;
        }

        console.log('Nombre de joueurs : '+nbJoueurs);

        if(nbJoueurs != 0){
            $('.selection-nb-joueurs').hide();
            demarrerJeu();
        }
    })
}

function deplacerPionCase(pion,num){
    console.log('Le joueur '+pion+' avance à la case numéro '+num)
    $('.pion.'+pion).css({
        'left':plateau[num][0]+'%',
        'top':plateau[num][1]+'%',
    });
}

/**
 * Demarrer jeu
 */
function demarrerJeu(){
    for(i = 1; i <= nbJoueurs; i++){
        $('.bottom .joueurs-bottom .joueur-bottom.joueur-'+i).show();
    }
    $('.jeu .bottom').css({
        'display':'flex'
    });

    demarrerPartie();
}

/**
 * Démarrer partie
 */
function demarrerPartie(){
    if(joueurs[tour]['case'] == 1){
        $('.joueur-'+tour).show();
        deplacerPionCase('joueur-'+tour,1);
    }

    $('.au-tour-de .joueur,.qui-joue .left h3').html('Au tour de : Joueur '+tour);
    $('.bottom .qui-joue .right img').attr('src', './img/player'+tour+'.png');
    $('.au-tour-de').show();

    $('.au-tour-de .btn').click(function(){
        $('.au-tour-de').hide();

        $('.titre').html('Lancez le dés en cliquant dessus !').show();
        $('.dice').addClass('center');

        clicked = false;
        $('.dice').click(function(){
            if(!clicked){
                clicked = true;
                de = Math.floor(Math.random() * 5 + 1);

                console.log('Dé tiré : '+de);

                $('.side').hide();
                $('.side-'+de).show();

                $('.titre').html('Le joueur '+tour+' avance de '+de+' cases !');

                $('.dice').removeClass('center');

                deplacerPionCase('joueur-'+tour,joueurs[tour]['case']+de);
                joueurs[tour]['case'] += de;

                setTimeout(function(){
                    $('.titre').hide();

                    if(tour < nbJoueurs){
                        console.log('ok1')
                        tour += 1;
                    }else{
                        console.log('ok2')
                        tour = 1;
                    }
    
                    demarrerPartie();
                }, 2000);
            }
        })
    });
}

/**
 * Main code
 */
choisirNbJoueurs();