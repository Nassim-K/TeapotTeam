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
    "Protection": [{
            "question": "Quel est le seul moyen contraceptif efficace contre les ist ?",
            "reponses": ["préservatif masc/fem", "stérilet", "pilule", "implant"],
            "entre": [],
            "correct": "préservatif masc/fem"
        },
        {
            "question": "Jusqu’à combien de temps après un risque de contamination du VIH peut-on demander à bénéficier d’un traitement d’urgence, aussi appelé TPE (Traitement Post Exposition ) ? ",
            "reponses": ["24h", "1sem", "2 mois", "48h"],
            "entre": [],
            "correct": "48h"
        },
        {
            "question": "Il existe des vaccins pour",
            "reponses": ["La calvitie et la toux", "L’hépatite B et le papillomavirus", "L’hépatite C et le VIH", "Herpès génital et la syphilis"],
            "entre": [],
            "correct":  "L’hépatite B et le papillomavirus"
        },
        {
            "question": "Pourquoi faut-il pincer le réservoir du préservatif",
            "reponses": ["Pour en chasser l’air", "Pour donner plus de plaisir", "Pour rigoler", "Pour passer le temps"],
            "entre": [],
            "correct":  "Pour en chasser l’air"
        },
        {
            "question": "Est-ce que je peux réutiliser une préservatif",
            "reponses": ["Oui si je le lave", "Oui, en moyenne 3 fois", "Non", "Oui si il n’y a pas eu d’éjaculation"],
            "entre": [],
            "correct":  "Pour en chasser l’air"
        },
        {
            "question": "Le préservatif protège t’il contre toutes les IST ?",
            "reponses": ["Oui", "Non", "Oui sauf le VIH", "Oui sauf la chlamydia"],
            "entre": [],
            "correct":  "Non"
        },
        {
            "question": "Puis-je recevoir des préservatifs gratuitements",
            "reponses": ["Non, il faut débourser 10€ par préservatif", "Oui en pharmacie", "Oui en centre de planning familial", "Oui ceux qui sont par terre"],
            "entre": [],
            "correct":  "Oui en centre de planning familial"
        },
        {
            "question": "Combien de temps avant un rapport sexuel le préservatif interne peut-il être placé ? ",
            "reponses": ["Directement avant le rapport sexuel", "Plusieurs heures avant", "1 mois avant", "2 mois avant"],
            "entre": [],
            "correct":  "Plusieurs heures avant"
        },


    ],
    "Général": [{
            "question": "Que veut dire IST ?",
            "reponses": ["institut salariale du travail", "infection sure de la trisomie", "infection sexuellement transmissible", "institut securisée du travail"],
            "entre": [],
            "correct": "Infection sexuellement transmissible"
        },
        {
            "question": "Qu'est ce que le VIH ?",
            "reponses": ["virus de l’immunodéficience humaine", "verranda intérieure hospitalière", "vestibule interne haut", "virus interne humain"],
            "entre": [],
            "correct": "Virus de l’Immunodéficience Humaine"
        },
        {
            "question": "Par quel liquides corporels le VIH ne se transmet-il pas ?",
            "reponses": ["le sang", "le sperme", "la salive", "le lait maternel"],
            "entre": [],
            "correct": "la salive"
        },
        {
            "question": "Quel est le virus responsable du sida ?",
            "reponses": ["le virus de l’immunodéficience humaine", "le virus de la grippe", "le virus de la gastro", "le virus de la bronchiolite"],
            "entre": [],
            "correct": "le virus de l’immunodéficience humaine"
        },
        {
            "question": "Qu’est ce que la sérophobie",
            "reponses": ["La peur des seringues", "La discriminations des personnes séropositives", "Quelqu’un qui aime le sang", "Quelqu’un qui a peur des gens sérieux"],
            "entre": [],
            "correct": "La discriminations des personnes séropositives"
        },

    ],
    "Dépistage": [{
            "question": "Qu'est ce que le CDAG ?",
            "reponses": ["consultation du dimanche accessible pour les gay", "concentration digitale automatique gavite", "consultation digitale anonyme et gratuite", "consultations de dépistage anonyme et gratuit"],
            "entre": [],
            "correct": "consultations de dépistage anonyme et gratuit"
        },
        {
            "question": "Qu'est ce que le VIH ?",
            "reponses": ["virus de l’immunodéficience humaine", "le sida", "vasculaire intéraction humaine", "véhicule intéractif à l'hotel"],
            "entre": [],
            "correct": "Virus de l’Immunodéficience Humaine"
        },
        {
            "question": "Par quel liquides corporels le VIH ne se transmet-il pas ?",
            "reponses": ["le sang", "le sperme", "la salive", "le lait maternel"],
            "entre": [],
            "correct": "la salive"
        },
        {
            "question": "Qu’est ce que le CIDDIST ? ",
            "reponses": ["centre indicatif des destructions interne sur terre", "centre indicatif des dommages infligés par le sida transmissible", "centre d’interaction pour débile dangereux de saint tropez", "centres d’information de dépistage et de diagnostic des ist"],
            "entre": [],
            "correct": "centres d’information de dépistage et de diagnostic des ist"
        },
        {
            "question": "Qu’est ce que le CIDDIST ? ",
            "reponses": ["interruption volontaire de grossesse", "infection via personnes gentilles", "infection et virus de gay", "institut virale pour gaulois"],
            "entre": [],
            "correct": "centres d’information de dépistage et de diagnostic des ist"
        },
        {
            "question": "Qu’est ce que l’IVG ?",
            "reponses": ["infection via personnes gentilles", "interruption volontaire de grossesse", "infection et virus de gay", "institut virale pour gaulois"],
            "entre": [],
            "correct": "interruption volontaire de grossesse"
        },
        {
            "question": "Quel métier n’est pas interdit aux personnes séropositives",
            "reponses": ["Sapeur-Pompier", "Gerndarme", "Professeur des écoles", "Militaire"],
            "entre": [],
            "correct": "Professeur des écoles"
        },
        {
            "question": "Ou ne peut-on pas se faire dépister",
            "reponses": ["CHU", "Laboratoires", "Centes de plannification", "Au collège  / au lycée"],
            "entre": [],
            "correct": "Au collège  / au lycée"
        },
     
        {
            "question": "Les MST sont-elles toujours visibles",
            "reponses": ["Oui, il y a toujours des signes", "Non, il n’y a jamais de signes", "Il y a des signes les week-ends", "Souvent il n’y a pas de signes"],
            "entre": [],
            "correct":  "Souvent il n’y a pas de signes"
        },
           
        {   "question": "Le papillomavirus peut provoquer",
            "reponses": ["Des cancers", "Le sida", "Un chancre", "De multiples spasmes"],
            "entre": [],
            "correct":  "Souvent il n’y a pas de signes"
        },
        {   "question": "Quelle est l’IST la plus répandue chez les jeunes",
            "reponses": ["La gonorrhée", "La syphilis", "La chlamydia", "Le VIH"],
            "entre": [],
            "correct":  "La chlamydia"
        },
        {
            "question": "Quelle est le meilleur moyen de savoir si tu as une IST",
            "reponses": ["Regarde ton sexe", "Fais des recherches sur internet", "Impossible de le savoir", "Dépistage"],
            "entre": [],
            "correct":  "Dépistage"
        },
        {
            "question": "Combien de temps dois-je attendre pour faire un dépistage du VIH par prise de sang après une prise de risque ?",
            "reponses": ["1 jour", "6 semaines", "3 mois", "2 ans"],
            "entre": [],
            "correct":  "6 semaines"
        },
        {
            "question": "Une personne séropositive qui a une charge virale indétectable",
            "reponses": ["N’a plus le VIH dans son organisme", "Est devenu aveugle", "N’a presque plus de VIH dans son organisme", "A encore autant de VIH dans son organisme"],
            "entre": [],
            "correct":  "N’a presque plus de VIH dans son organisme"
        },
        {
            "question": "Être infecté par une IST augmente le risque d’être par le VIH",
            "reponses": ["Faux, on ne peut avoir qu’une seule IST", "Vrai", "Faux, être infecté par une IST n’augmente pas le risque d’avoir le VIH", "Faux une IST augmente ses défenses face au VIH"],
            "entre": [],
            "correct":  "Vrai"
        },

    ],
    "Sexualité": [{
            "question": "Quel type de comportement pourrait m’exposer à des IST ?",
            "reponses": ["s’appeler jérôme", "boire du jus de pomme", "faire des câlins", "avoir des rapports à risque sans protection"],
            "entre": [],
            "correct": "avoir des rapports à risque sans protection"
        },
        {
            "question": "Récemment, j’ai eu un rapport non protégé et je présente des symptômes. Que dois-je faire ?",
            "reponses": ["regarder la télé", "attendre que ca passe", "en parler avec un professionnel de santé", "ne rien faire"],
            "entre": [],
            "correct": "en parler avec un professionnel de santé"
        },
        {
            "question": "Quel rapport n’est pas contaminant",
            "reponses": ["Rapport anal", "Rapport vaginal", "Féllation", "Cunnilingus"],
            "entre": [],
            "correct": "Cunnilingus"
        },
        {
            "question": "Le risque de transmission d’une IST en pratiquant une fellation est ",
            "reponses": ["Faible", "Moyen", "Elevé", "Très élevé"],
            "entre": [],
            "correct": "Très élevé"
        },
        {
            "question": "La fellation sans préservatif peut-elle représenter un risque de transmission d’une IST",
            "reponses": ["Oui", "Jamais", "Non sauf si il y a éjaculation", "Une chance sur 2"],
            "entre": [],
            "correct":  "Oui"
        },
        {
            "question": "Qu’est ce qu’un personne séropositive",
            "reponses": ["Quelqu’un du groupe O+", "Quelqu’un qui a le SIDA", "Quelqu’un qui est porteur du VIH", "Quelqu’un qui est joyeux"],
            "entre": [],
            "correct": "Quelqu’un qui a le SIDA"
        },
        {
            "question": "La fellation sans préservatif représente t-elle un risque de transmission du VIH",
            "reponses": ["Oui pour la personne qui fait la fellation", "Oui seulement si il y a éjaculation", "Oui pour les 2 personnes", "Oui pour la personne qui reçoit la fellation"],
            "entre": [],
            "correct":  "Oui pour la personne qui fait la fellation"
        },
        {
            "question": "Quels lubrifiant ne faut-il pas utiliser",
            "reponses": ["Beurre de cacahuète", "Huile d’olive", "Lubrifiant a base de farine", "Lubrifiant à base d’eau ou de silicone"],
            "entre": [],
            "correct":  "Lubrifiant à base d’eau ou de silicone"
        },
        {
            "question": "Si je ne vais pas jusqu'à la pénétration, il est impossible que j’attrape une IST",
            "reponses": ["Vrai", "Cela dépend de la météo", "Faux", "peut-être"],
            "entre": [],
            "correct":  "Faux"
        },
    ],
    "Chiffres clés": [{
            "question": "Combien pensez-vous que de personnes sont atteintes du Sida dans le monde ?",
            "reponses": ["384 000", "38,4 000", "38,4 millions", "3"],
            "entre": [],
            "correct": "38,4 millions"
        },
        {
            "question": "Quel est le pays qui recense le plus de cas de Sida ?",
            "reponses": ["l’afrique du sud", "l’afrique du nord", "l'australie", "russie"],
            "entre": [],
            "correct": "l’afrique du sud"
        },
        {
            "question": "Combien de cas de séropositivité VIH sont recensés chaque année environ ?",
            "reponses": ["655 000", "1 500 000", "350 000", "180 000"],
            "entre": [],
            "correct": "1 500 000"
        },    
        {
            "question": "Combien de décès liés au VIH en 2021 ?",
            "reponses": ["320 000", "650 000", "170 000", "1 000 000"],
            "entre": [],
            "correct": "650 000"
        },    
        {
            "question": "Combien de personnes ont  accès au traitement du VIH en 2021 ?",
            "reponses": ["1 500 000 000", "80 000 000", "28 700 000", "10 000 000"],
            "entre": [],
            "correct": "28 700 000"
        },    
        {
            "question": "Combien de personnes infectées depuis le début de l'épidémie ?",
            "reponses": ["45 000 000", "166 000 000", "555 000 000", "84 200 000"],
            "entre": [],
            "correct": "84 200 000"
        },
        {
            "question": "Quel est le type de personne qui vit le plus avec le VIH ?",
            "reponses": ["femme/fille  avec 54%", "personnes trans/gay avec 66%", "garçons avec 60%", "personnes âgées 61%"],
            "entre": [],
            "correct": "femme/fille  avec 54%"
        },
        {
            "question": "Combien y’a t-il d'enfants vivant avec le VIH dans le monde ?",
            "reponses": ["3 600 000", "1 700 000", "6 500 000", "12 500 000"],
            "entre": [],
            "correct": "1 700 000"
        },
        {
            "question": "Combien y avait-il de personnes qui ne savaient pas qu’elles avaient le VIH en 2021 ?",
            "reponses": ["150 000", "1 000 000", "1 700 000", "10 000 000"],
            "entre": [],
            "correct": "1 700 000" 
        },
        {
            "question": "Combien de personnes sont diagnostiquées séropostives par jour en France ?",
            "reponses": ["7", "9", "13", "24"],
            "entre": [],
            "correct":  "13"
        },

    ],
    "Contamination": [{
            "question": "Quel type de comportement pourrait m’exposer à des IST ?",
            "reponses": ["s’appeler jérôme", "boire du jus de pomme", "faire des câlins", "avoir des rapports à risque sans protection"],
            "entre": [],
            "correct": "avoir des rapports à risque sans protection"
        },
        {
            "question": "Récemment, j’ai eu un rapport non protégé et je présente des symptômes. Que dois-je faire ?",
            "reponses": ["regarder la télé", "attendre que ca passe", "en parler avec un professionnel de santé", "ne rien faire"],
            "entre": [],
            "correct": "en parler avec un professionnel de santé"
        },
        {
            "question": "Est-ce qu’une IST, c’est signe de mauvaise hygiène",
            "reponses": ["Oui", "Non pas du tout", "Cela dépend de la personne", "Cela dépend de l’IST"],
            "entre": [],
            "correct":  "Non pas du tout"
        },
        {
            "question": "Quelles IST peuvent-elles transmettre par les pailles de sniff",
            "reponses": ["L’hépatite B et C", "Le papillomavirus et le VIH", "La syphilis et la chlamydioses", "Il n’y a aucun risque"],
            "entre": [],
            "correct":  "L’hépatite B et C"
        },
        {
            "question": "Le symptôme principal de l’herpès",
            "reponses": ["Agrandissement du penis", "Déformation des oreilles", "Une diarrhée", "Des vésicules sur les organes sexuels"],
            "entre": [],
            "correct":  "Des vésicules sur les organes sexuels"
        },
        {
            "question": "Le VIH s’attaque au",
            "reponses": ["Système immunitaire", "Système reproducteur", "Système digestif", "Système cognitif"],
            "entre": [],
            "correct":  "Système immunitaire"
        },
        {
            "question": "Quelle méthode ne protège pas du VIG",
            "reponses": ["Les préservatifs", "Le dépistage", "Les traitements", "la pillule"],
            "entre": [],
            "correct": "la pillule"
        },
        {
            "question": "Laquelle de ces propositions est vraie",
            "reponses": ["Le virus du sida se transmet entre autre par le sperme, les sécrétions vaginales et le liquide séminal", "Le virus du sida se transmet uniquement par le sang", "Le virus du sida se transmet par la salive", "Le virus du sida se transmet par télépathie "],
            "entre": [],
            "correct":  "Le virus du sida se transmet entre autre par le sperme, les sécrétions vaginales et le liquide séminal"
        },
        {
            "question": "Est-ce qu’un moustique peut transmettre le VIH",
            "reponses": ["Oui si il est croisé avec une abeille", "Oui si c’est un moustique tigre", "Non les moustiques ne transmettent pas le VIH", "Oui tous les moutstiques"],
            "entre": [],
            "correct":  "Non les moustiques ne transmettent pas le VIH"
        },
        {
            "question": "Puis-je avoir un rapport sexuel avec une personne atteinte du VIH sans l’attraper",
            "reponses": ["Oui si la charge virale est indétectable", "Oui si la personne n’a pas eu de rapports depuis 2 ans", "Oui si il n’y a pas d’éjaculation", "Non car le VIH empêche les rapports"],
            "entre": [],
            "correct":  "Oui si la charge virale est indétectable"
        },
        {
            "question": "Quel moyen de protection puis-je utiliser pour faire un cunnilingus de manière protégée",
            "reponses": ["Préservatif féminin", "Un carré de latex", "Bouchon de bouteille", "Une chaussette"],
            "entre": [],
            "correct":  "Un carré de latex"
        },
        {
            "question": "Une personne séronégative peut-elle prendre des médicaments avant et après un rapport sexuel pour ne pas être infectée par le VIH",
            "reponses": ["Non, rien ne peut nous protéger du VIH", "Oui du doliprane", "Oui c’est la prophylaxie pré-exposition", "Manger un avocat suffit (pas le métier)"],
            "entre": [],
            "correct":  "Oui c’est la prophylaxie pré-exposition"
        },
    ],
}

/**
 * Plateau
 */
const plateau = {
    1 : [86,27,''],
    2 : [83,29,'Protection'],
    3 : [80,32,'Général'],
    4 : [77,34,'Dépistage'],
    5 : [73,37,'Sexualité'],
    6 : [68,40,'Chiffres clés'],
    7 : [56,50,'Contamination'],
    8 : [51,53,'Protection'],
    9 : [48,56,'Général'],
    10 : [44,58,'Dépistage'],
    11 : [39,60,'Sexualité'],
    12 : [34,62,'Chiffres clés'],
    13 : [28,64,'Contamination'],
    14 : [22,64,'Protection'],
    15 : [16,64,'Général'],
    16 : [12,62,'Dépistage'],   
    17 : [9,59,'Sexualité'],
    18 : [6,55,'Chiffres clés'],
    19 : [6,50,'Contamination'],
    20 : [6,45,'Protection'],
    21 : [8,40,'Général'],
    22 : [10,35,'Dépistage'],
    23 : [14,31,'Sexualité'],
    24 : [19,29,'Chiffres clés'],
    25 : [24,29,'Contamination'],
    26 : [29,28,'Protection'],
    27 : [33,29,'Général'],
    28 : [37,30,'Dépistage'],
    29 : [41,31,'Sexualité'],
    30 : [45,33,'Chiffres clés'],
    31 : [49,35,'Contamination'],
    32 : [54,38,'Protection'],
    33 : [59,40,'Général'],
    34 : [64,43,'Dépistage'],
    35 : [69,47,'Sexualité'],
    36 : [73,50,'Chiffres clés'],
    37 : [78,54,'Contamination'],
    38 : [84,57,'Protection'],
    39 : [89,61,'Général'],
    40 : [95,65,''],
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

                if(joueurs[tour]['case']+de >= 40){
                    console.log('gagné');
                    deplacerPionCase('joueur-'+tour,40);
                    joueurs[tour]['case'] = 40;
                    $('.titre').show().html('Le joueur '+tour+' a gagné !!!');
                    $('.popup').hide();

                    return false;
                }else{
                    deplacerPionCase('joueur-'+tour,joueurs[tour]['case']+de);
                    joueurs[tour]['case'] += de;
                }

                setTimeout(function(){
                    $('.titre').hide();

                    $('.popup.question').show();

                    theme = plateau[joueurs[tour]['case']][2];
                    numero_question = Math.floor(Math.random() *  $(quiz[theme]).length);
                    question = quiz[theme][numero_question];

                    console.log(question);

                    $('.question .theme').html(question['question']);

                    for(i = 0; i < 4; i++){
                        $('.question .reponse-'+i+' .reponse').html(question['reponses'][i]);
                    }

                    correct = null;
                    $(document).bind('keypress', function(e){
                        if(
                            String.fromCharCode(e.keyCode) == 'A'
                            || String.fromCharCode(e.keyCode) == 'a'
                        ){
                            if(question['reponses'][0].toLowerCase() == question['correct'].toLowerCase()){
                                correct = true;
                            }
                        }else if(
                            String.fromCharCode(e.keyCode) == 'Z'
                            || String.fromCharCode(e.keyCode) == 'z'
                        ){
                            if(question['reponses'][1].toLowerCase() == question['correct'].toLowerCase()){
                                correct = true;
                            }
                        }else if(
                            String.fromCharCode(e.keyCode) == 'E'
                            || String.fromCharCode(e.keyCode) == 'e'
                        ){
                            if(question['reponses'][2].toLowerCase() == question['correct'].toLowerCase()){
                                correct = true;
                            }
                        }else if(
                            String.fromCharCode(e.keyCode) == 'R'
                            || String.fromCharCode(e.keyCode) == 'r'
                        ){
                            if(question['reponses'][3].toLowerCase() == question['correct'].toLowerCase()){
                                correct = true;
                            }
                        }
                
                        console.log('Réponse correcte : '+correct);

                        $('.question').hide();

                        if(correct){
                            $('.titre').show().html('Bonne réponse !!!');
                        }else{
                            $('.titre').show().html('Mauvaise réponse !!! :(');
                        }

                        setTimeout(function(){
                            $('.titre').hide();
                        },2000);
                    });

                    if(tour < nbJoueurs){
                        tour += 1;
                    }else{
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