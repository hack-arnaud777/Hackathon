

const AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
//AWS.config.update({region:'us-east-1'});

const comprehend = new AWS.Comprehend();

var params = {
    LanguageCode: "fr",
    Text:
        "Villa dans un clos - 8 chambres - bénéficiant d'un agencement idéal et d'un volume plus que confortable. Composition : Rez : Grand garage, hall d'entrée, spacieux living avec K7 à bois, cuisine, suite parentale avec salle de bain privative (baignoire, wc, lavabo), seconde chambre (ou bureau), buanderie, WC. A l'étage : 4 chambres, une salle de bains + (2 aménagement des deux pièces \"grenier\" à réaliser). Abords : klinkers, barbecue, abri de jardin. Equipements : Système d'alarme volumétrique, groupe hydrophore, chaudière Radson, porte sectionnelle électrique (garage), marquise sur terrasse,... Quartier calme - Proche de toutes commodités. Possibilités pour profession libérale (multiples entrées indépendantes)."
};
comprehend.detectEntities(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});