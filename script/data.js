let mountains = [
    {
        "image": {
            "ref": "assets/images/mount-everest-blue-sky.jpg",
            "alt": "Image of Mount Everest from an airplane"
        },
        "number": 1,
        "name": "Mount Everest",
        "height": "8848 möh",
        "position": "Bergskedjan Himalaya i Nepal och Kina",
        "climbers": "6014 i december 2021",
        "deathtoll": "300+ dödsfall",
        "season": "april - maj",
        "info": "Mount Everest är världens högsta berg och ligger på gränsen mellan Kina och Nepal. Det är det populäraste 8000m+ berget. Många har nått toppen och många har dött när de har försökt.",
    },
    {
        "image": {
            "ref": "assets/images/K2.jpeg",
            "alt": "Image of K2"
        },
        "number": 2,
        "name": "K2",
        "height": "8611 möh",
        "position": "Bergskedjan Karakorum i Pakistan och Kina",
        "climbers": "706 i augusti 2022",
        "deathtoll": "96 dödsfall",
        "season": "april - maj",
        "info": "Kallas också Savage Mountain (vildsinta berget) och är ett av de svåraste och dödligaste bergen att klättra i hela världen. Bestegs första gången 1954.",
    },
    {
        "image": {
            "ref": "assets/images/Kangchenjunga_East_Face.jpeg",
            "alt": "Image of Kangchenjunga"
        },
        "number": 3,
        "name": "Kangchenjunga",
        "height": "8586 möh",
        "position": "Nepal och Indien",
        "climbers": "220 i 2018",
        "deathtoll": "42 dödsfall",
        "season": "vår och höst",
        "info": "Namnet betyder 'Fem skatter av den stora snön' för det har 5 bergstoppar. En är 8586m hög. Det är vanligt med laviner på berget och det är ett av de absolut farligaste och svåraste att klättra.",
    },
    {
        "image": {
            "ref": "assets/images/Lhotse.jpeg",
            "alt": "Image of Lhotse"
        },
        "number": 4,
        "name": "Lhotse",
        "height": "8516 möh",
        "position": "Nepal och Kina",
        "climbers": "933 under våren 2021",
        "deathtoll": "32 dödsfall",
        "season": "april - maj och september - oktober",
        "info": "Bestegs första gången 18 maj 1956. Lhotse sitter ihop med Mount Everest och vid en bestigning delar bergsklättrarna en bit av vägen med dem som ska upp på Mount Everest. Det sägs vara svårare att klättra än sin högre granne.",
    },
    {
        "image": {
            "ref": "assets/images/Makalu.jpeg",
            "alt": "Image of Makalu"
        },
        "number": 5,
        "name": "Makalu",
        "height": "8485",
        "position": "Nepal och Kina",
        "climbers": "number",
        "deathtoll": "number",
        "season": "april - maj",
        "info": "Kul att veta",
    },
    {
        "image": {
            "ref": "assets/images/Cho_Oyu.jpeg",
            "alt": "Image of Cho Oyu"
        },
        "number": 6,
        "name": "Cho Oyu",
        "height": "8201",
        "position": "Nepal",
        "climbers": "number",
        "deathtoll": "number",
        "season": "april - maj",
        "info": "Kul att veta",
    },
    {
        "image": {
            "ref": "assets/images/Dhaulagiri_mountain.jpg",
            "alt": "Image of Dhaulagiri I"
        },
        "number": 7,
        "name": "Dhaulagiri I",
        "height": "8167",
        "position": "Nepal",
        "climbers": "number",
        "deathtoll": "number",
        "season": "april - maj",
        "info": "Kul att veta",
    },
    {
        "image": {
            "ref": "assets/images/Manaslu.png",
            "alt": "Image of Manaslu"
        },
        "number": 8,
        "name": "Manaslu",
        "height": "8163",
        "position": "Himalaya i Nepal",
        "climbers": "2172 i 2022",
        "deathtoll": "88 dödsfall",
        "season": "april - maj",
        "info": "Det är svårt att veta exakt hur många som har nått den exakta bergstoppen då många stannar väldigt nära för att slippa den sista svåra kammen. Först bestiget 1956 av en japan och en sherpa.",
    },
    {
        "image": {
            "ref": "assets/images/Nanga_parbat.jpeg",
            "alt": "Image of Nanga Parbat"
        },
        "number": 9,
        "name": "Nanga Parbat",
        "height": "8126",
        "position": "Pakistan",
        "climbers": "number",
        "deathtoll": "number",
        "season": "april - maj",
        "info": "Kul att veta",
    },
    {
        "image": {
            "ref": "assets/images/Annapurna_1.jpeg",
            "alt": "Image of Annapurna I"
        },
        "number": 10,
        "name": "Annapurna I",
        "height": "8091",
        "position": "Nepal",
        "climbers": "number",
        "deathtoll": "number",
        "season": "april - maj",
        "info": "Kul att veta",
    },
    {
        "image": {
            "ref": "assets/images/Gasherbrum-1.jpg",
            "alt": "Image of Gasherbrum I"
        },
        "number": 11,
        "name": "Gasherbrum I",
        "height": "8080",
        "position": "Pakistan och Kina",
        "climbers": "number",
        "deathtoll": "number",
        "season": "april - maj",
        "info": "Kul att veta",
    },
    {
        "image": {
            "ref": "assets/images/Broad_Peak.jpeg",
            "alt": "Image of Broad Peak"
        },
        "number": 12,
        "name": "Broad Peak",
        "height": "8051",
        "position": "Pakistan och Kina",
        "climbers": "number",
        "deathtoll": "number",
        "season": "april - maj",
        "info": "Kul att veta",
    },
    {
        "image": {
            "ref": "assets/images/Gasherbrum2.jpg",
            "alt": "Image of Gasherbrum II"
        },
        "number": 13,
        "name": "Gasherbrum II",
        "height": "8034",
        "position": "Pakistan och Kina",
        "climbers": "number",
        "deathtoll": "number",
        "season": "april - maj",
        "info": "Kul att veta",
    },
    {
        "image": {
            "ref": "assets/images/Shishapangma.jpeg",
            "alt": "Image of Shishapangma"
        },
        "number": 14,
        "name": "Shishapangma",
        "height": "8027",
        "position": "Kina",
        "climbers": "number",
        "deathtoll": "number",
        "season": "april - maj",
        "info": "Kul att veta",
    },
]