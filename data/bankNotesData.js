var bankNotesData = {
    "euro": {
        "symbol": "€",
        "fontAwesome": "fas fa-euro-sign",
        "source": "https://fr.wikipedia.org/wiki/Billets_de_banque_en_euros#Caract%C3%A9ristiques_individuelles_2",
        "bankNotes": {
            "5": {
                "value": 5,
                "width": 12.0,
                "height": 6.2,
                "thickness": 0.12,
                "weight": 0.6
            },
            "10": {
                "value": 10,
                "width": 12.7,
                "height": 6.7,
                "thickness": 0.12,
                "weight": 0.7
            },
            "20": {
                "value": 20,
                "width": 13.3,
                "height": 7.2,
                "thickness": 0.12,
                "weight": 0.8
            },
            "50": {
                "value": 50,
                "width": 14.0,
                "height": 7.7,
                "thickness": 0.12,
                "weight": 0.9
            },
            "100": {
                "value": 100,
                "width": 14.7,
                "height": 8.2,
                "thickness": 0.12,
                "weight": 1.0
            },
            "200": {
                "value": 200,
                "width": 15.3,
                "height": 8.2,
                "thickness": 0.12,
                "weight": 1.1
            },
            "500": {
                "value": 500,
                "width": 16.0,
                "height": 8.2,
                "thickness": 0.12,
                "weight": 1.1
            }
        }
    },
    "dollar": {
        "symbol": "$",
        "source": "TODO",
        "fontAwesome": "fas fa-dollar-sign",
        "bankNotes": {
            "1": {
                "value": 1,
                "width": 15.5955,
                "height": 6.6294,
                "thickness": 0.11,
                "weight": 0.992
            },
            "5": {
                "value": 5,
                "width": 15.5956,
                "height": 6.6294,
                "thickness": 0.11,
                "weight": 0.992
            },
            "10": {
                "value": 10,
                "width": 15.5955,
                "height": 6.6294,
                "thickness": 0.11,
                "weight": 0.992
            },
            "20": {
                "value": 20,
                "width": 15.5955,
                "height": 6.6294,
                "thickness": 0.11,
                "weight": 0.992
            },
            "50": {
                "value": 50,
                "width": 15.5955,
                "height": 6.6294,
                "thickness": 0.11,
                "weight": 0.992
            },
            "100": {
                "value": 100,
                "width": 15.5955,
                "height": 6.6294,
                "thickness": 0.11,
                "weight": 0.992
            },

        }
    }
};



var valueComparison = {
    length: {
        baseUnit: "mm",
        unit: {
            mm: 1,
            cm: 10,
            m: 1000,
            km: 1000000
        },
        comparison: [{
                value: 1,
                name: "TODO",
                img: "TODO",
            }, {
                value: 5,
                name: "Ant",
                img: "https://upload.wikimedia.org/wikipedia/commons/7/70/The-Ant.jpg",
                attribution: "Abdulmominbd, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
            },
            {
                value: 12,
                name: "Bee",
                img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Apis_mellifera_Western_honey_bee.jpg",
                attribution: "Andreas Trepte, CC BY-SA 2.5 <https://creativecommons.org/licenses/by-sa/2.5>, via Wikimedia Commons"
            },
            {
                value: 32,
                name: "SD Card",
                img: "https://upload.wikimedia.org/wikipedia/commons/1/13/2015_Karta_microSD_z_adapterem_SD.jpg",
                attribution: "Jacek Halicki, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
            },
            {
                value: 85,
                name: "Apple",
                img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Honeycrisp.jpg",
                attribution: "Jonathunder, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
            },
            {
                value: 450,
                name: "Rabbit",
                img: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Domestic_white_rabbit_sitting_in_a_meadow.jpg",
                attribution: "Niftypen, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons"
            },
            {
                value: 550,
                name: "Golden Retriever",
                img: "https://upload.wikimedia.org/wikipedia/commons/0/01/Golden_retriever_ruede.jpg",
                attribution: "Dirk Vorderstraße, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons"
            },
            {
                value: 1700,
                name: "Mankind",
                img: "https://cdn.pixabay.com/photo/2018/12/01/10/44/silhouette-3849284_960_720.png",
                attribution: ""
            },
            {
                value: 3000,
                name: "Elephant",
                img: "https://upload.wikimedia.org/wikipedia/commons/2/22/Elephant_side-view_Kruger.jpg",
                attribution: "Felix Andrews (Floybix), CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons"
            },
            {
                value: 4400,
                name: "Double deck bus",
                img: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Double_Decker_Bus_in_London.jpg",
                attribution: "Nihcolas Babaian, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
            },
            {
                value: 5880,
                name: "Giraffe",
                img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Giraffa_camelopardalis_reticulata_01.JPG",
                attribution: "H. Zell, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
            },
            {
                value: 20000,
                name: "Sphinx of Giza",
                img: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Great_Sphinx_of_Giza_-_20080716a.jpg",
                attribution: "English:  Taken by the uploader, w:es:Usuario:BarcexEspañol:  Tomada por w:es:Usuario:Barcex, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons"
            },
            {
                value: 33600,
                name: "Whale",
                img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg",
                attribution: "NOAA Photo Library, Public domain, via Wikimedia Commons"
            },
            {
                value: 50000,
                name: "Arc de Triomphe",
                img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Arc_de_triomphe_Paris.jpg",
                attribution: "I, Sese Ingolstadt, CC BY-SA 2.5 <https://creativecommons.org/licenses/by-sa/2.5>, via Wikimedia Commons"
            },
            {
                value: 93000,
                name: "Statue of Liberty",
                img: "https://upload.wikimedia.org/wikipedia/commons/8/85/Statue_of_liberty_01.jpg",
                attribution: "Francisco Diez from New York City, USA, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
            },
            {
                value: 135000,
                name: "London Eye",
                img: "https://upload.wikimedia.org/wikipedia/commons/d/d6/London-Eye-2009.JPG",
                attribution: "Khamtran, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
            },
            {
                value: 137000,
                name: "The Great Pyramid of Giza",
                img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
                attribution: "Nina at the Norwegian bokmål language Wikipedia, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons"
            },
            {
                value: 157000,
                name: "Cologne Cathedral",
                img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Cologne_Cathedral_and_the_Hohenzollern_Bridge.jpg",
                attribution: "Jiuguang Wang, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
            },
            {
                value: 348000,
                name: "Ayers Rock",
                img: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ayers-Rock.jpg",
                attribution: "Australien-Links.ch, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
            },
            {
                value: 443200,
                name: "Empire State Building",
                img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
                attribution: "Sam Valadi, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
            },
            {
                value: 828000,
                name: "Burj Khalifa",
                img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/1200px-Burj_Khalifa.jpg",
                attribution: "Creative Commons Attribution-ShareAlike 3.0"
            },
            {
                value: 979000,
                name: "Angel Falls",
                img: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Angel_Falls_in_Venezuela.jpg",
                attribution: "Luis Carillo, Venezuela, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons"
            },
            {
                value: 3776000,
                name: "Mount Fuji",
                img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Lake_Kawaguchiko_Sakura_Mount_Fuji_3.JPG",
                attribution: "Midori, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons"
            },
            {
                value: 8848000,
                name: "Mount Everest",
                img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Mt._Everest_from_Gokyo_Ri_November_5%2C_2012.jpg",
                attribution: "Rdevany, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
            },
            {
                value: 3476000000,
                name: "Moon diameter",
                img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
                attribution: "Gregory H. Revera, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
            },
            {
                value: 4880000000,
                name: "Mercury diameter",
                img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/3D_Mercury.png",
                attribution: "Jcpag2012, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
            },
            {
                value: 6792000000,
                name: "Mars diameter",
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Plan%C3%A8te_Mars.jpg",
                attribution: "Tris1606, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
            }
        ]
    },
    weight: {
        baseUnit: "g",
        unit: {
            g: 1,
            kg: 1000,
            T: 1000000
        },
        comparison: [{
            value: 1,
            name: "TODO",
            img: "TODO",
            attribution: "TODO"
        }]
    },
    time: {
        baseUnit: "hour",
        unit: {
            "hour": 1,
            "day": 24,
            "month": 720,
            "year": 262800,
        },
        comparison: [{
            value: 1,
            name: "TODO",
            img: "TODO",
            attribution: "TODO"
        }]
    }

}