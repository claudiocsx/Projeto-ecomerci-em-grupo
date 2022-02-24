// db provisorio para testes
const db = [
	{
		"id": "pd1",
		"name": "Tênis Nike Air Max Excee",
		"brand": "Nike",
		"category": [
			"feminino"
		],
		"colors": [
			"rosa",
			"azul",
			"vermelho"
		],
		"price": 649.99,
		"in_inventory": 8,
		"path_image": "/src/public/img/products/pd1.jpg"
	},
	{
		"id": "pd54654",
		"name": "Tênis Foo",
		"brand": "Nike",
		"category": [
			"feminino"
		],
		"colors": [
			"rosa",
			"azul",
			"vermelho"
		],
		"price": 208.5,
		"in_inventory": 6,
		"path_image": "/src/public/img/products/pd2.jpg"
	},
	{
		"id": "pd3",
		"name": "Tênis Tal",
		"brand": "Adidas",
		"category": [
			"masculino"
		],
		"colors": [
			"preto",
			"azul"
		],
		"price": 399.99,
		"in_inventory": 5,
		"path_image": "/src/public/img/products/pd3.jpg"
	},
	{
		"id": "93a70",
		"name": "Hghibi edcceh fhbjdb ia",
		"price": "139.70",
		"in_inventory": 7,
		"brand": "Ieio uicb eebi uuuc eeee uei",
		"path_image": null,
		"category": [
			"masculino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"rosa",
			"amarelo",
			"verde",
			""
		]
	},
	{
		"id": "72517",
		"name": "Babdg bfchh bifaa bjche i",
		"price": "286.94",
		"in_inventory": 6,
		"brand": "Iuie uaea ucob uiao iiaa edeo a",
		"path_image": "D4f5d5d4d8f6",
		"category": [
			"masculino",
			"infantil",
			"casual"
		],
		"colors": [
			"amarelo",
			"preto",
			""
		]
	},
	{
		"id": "54499",
		"name": "Igcefi gccgcj daabad ag",
		"price": "140.10",
		"in_inventory": 1,
		"brand": "Oieu idbu aoui dadu aeeb aoio cu",
		"path_image": null,
		"category": [
			"masculino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"amarelo",
			"verde"
		]
	},
	{
		"id": "8047b",
		"name": "Fjcgc eccaj bejha chjaf ffgfg",
		"price": "243.70",
		"in_inventory": 5,
		"brand": "Ucabe aodue oouaa oouia ceaoa",
		"path_image": "7f6d6fsfsddf",
		"category": [
			"feminino",
			"infantil",
			"casual"
		],
		"colors": [
			"preto",
			"rosa",
			""
		]
	},
	{
		"id": "7985a",
		"name": "Ijagce adabia hgecbg de",
		"price": "262.77",
		"in_inventory": 10,
		"brand": "Ouueea aeiaiu eieouo eoioea ebciu",
		"path_image": "Sddf8d56dfdf",
		"category": [
			"masculino",
			"infantil",
			"casual"
		],
		"colors": [
			"rosa",
			"amarelo"
		]
	},
	{
		"id": "0167a",
		"name": "Bdgb eidd acbi aeae ggfd iif",
		"price": "229.66",
		"in_inventory": 9,
		"brand": "Aeii oieo oioi deoa eaoi io",
		"path_image": "5ss855f555d4",
		"category": [
			"masculino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"verde",
			"preto"
		]
	},
	{
		"id": "69a34",
		"name": "Baec iiha aedf abhi ieac ged",
		"price": "207.33",
		"in_inventory": 7,
		"brand": "Aaud icoo uaoo ieee eeai uoaa",
		"path_image": null,
		"category": [
			"masculino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"verde",
			"preto",
			"rosa"
		]
	},
	{
		"id": "A3968",
		"name": "Ehfdh eacdd bedgd cbhbi hbdcf eiia",
		"price": "259.12",
		"in_inventory": 6,
		"brand": "Duec ueiu abiu eoea eeoe euoi eed",
		"path_image": null,
		"category": [
			"feminino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"",
			"verde",
			"preto"
		]
	},
	{
		"id": "7a49b",
		"name": "Hhii hjcg acjf bffb ffjg gfd",
		"price": "174.41",
		"in_inventory": 9,
		"brand": "Uaaua auuei aeuud ideia iu",
		"path_image": null,
		"category": [
			"feminino",
			"adulto",
			"casual"
		],
		"colors": [
			"",
			"amarelo",
			"verde"
		]
	},
	{
		"id": "2113a",
		"name": "Fiea bddj jifh hffa gghf ce",
		"price": "176.56",
		"in_inventory": 2,
		"brand": "Auceu aeiio ieouu eeoda uecao aae",
		"path_image": null,
		"category": [
			"masculino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"rosa",
			"",
			"verde"
		]
	},
	{
		"id": "24bc9",
		"name": "Adhagg jbdecg aihidb ahdhii dgd",
		"price": "294.98",
		"in_inventory": 8,
		"brand": "Iiiac oueua oiadi eicde euiaa",
		"path_image": null,
		"category": [
			"feminino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"preto",
			"rosa",
			"amarelo"
		]
	},
	{
		"id": "918a9",
		"name": "Cbcec hjbfg ddiab hfaic de",
		"price": "131.65",
		"in_inventory": 8,
		"brand": "Aeoi oaba aeed iuei ieib cauc ieb",
		"path_image": "Fdfd48f7sdfs",
		"category": [
			"masculino",
			"adulto",
			"casual"
		],
		"colors": [
			"amarelo",
			"",
			"preto"
		]
	},
	{
		"id": "79274",
		"name": "Dddhg fjeba fceei bghgf ighha aahfd",
		"price": "137.24",
		"in_inventory": 3,
		"brand": "Acau iabo eeee oeuo oodb iea",
		"path_image": null,
		"category": [
			"masculino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"",
			"amarelo"
		]
	},
	{
		"id": "68b08",
		"name": "Jchf cdac ideg jcgg ddea gcdi dae",
		"price": "152.95",
		"in_inventory": 4,
		"brand": "Oioi aoaa bcic ecai auue o",
		"path_image": null,
		"category": [
			"feminino",
			"adulto",
			"casual"
		],
		"colors": [
			"amarelo",
			"rosa",
			""
		]
	},
	{
		"id": "Aa256",
		"name": "Gfedbb ajafhb ehffee fhfiih jdhi",
		"price": "240.39",
		"in_inventory": 2,
		"brand": "Uuiao iiide iouei auoid odaio cob",
		"path_image": "S4ddfsd64d4d",
		"category": [
			"feminino",
			"infantil",
			"esportivo"
		],
		"colors": [
			"amarelo",
			"",
			"preto"
		]
	},
	{
		"id": "40c60",
		"name": "Gbhcc addaf deaci ggcgf jheij cd",
		"price": "276.86",
		"in_inventory": 3,
		"brand": "Iobu uuaa uooe eioi uioo e",
		"path_image": null,
		"category": [
			"feminino",
			"infantil",
			"casual"
		],
		"colors": [
			"amarelo",
			"",
			"rosa",
			"preto"
		]
	},
	{
		"id": "845cb",
		"name": "Deihi cchci bjdif chdjf jhddf heh",
		"price": "207.06",
		"in_inventory": 4,
		"brand": "Iiaoab ouaobb eoboba ia",
		"path_image": "4fd5ffs6fd56",
		"category": [
			"masculino",
			"adulto",
			"casual"
		],
		"colors": [
			"preto",
			"",
			"verde"
		]
	},
	{
		"id": "C6c86",
		"name": "Iedh hbeh ibdg chgc cgbc jg",
		"price": "178.81",
		"in_inventory": 8,
		"brand": "Eoiee uedae iuoio uoice i",
		"path_image": "Fs6sfsf4fssd",
		"category": [
			"feminino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"preto",
			"rosa",
			"verde",
			""
		]
	},
	{
		"id": "Ac234",
		"name": "Bide aagc iegf gihf bfbc a",
		"price": "207.09",
		"in_inventory": 10,
		"brand": "Eeoeeu iiuadu eoeuea ioeebo auui",
		"path_image": "Ff6dds458s5d",
		"category": [
			"masculino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"amarelo",
			"preto",
			"rosa",
			""
		]
	},
	{
		"id": "752a2",
		"name": "Hfcb jghh cajg jfgj jifc fjaf ede",
		"price": "132.98",
		"in_inventory": 4,
		"brand": "Oieu aiud iedc uuei eiau uuui",
		"path_image": "Sf84sfsdd4d4",
		"category": [
			"masculino",
			"infantil",
			"casual"
		],
		"colors": [
			"rosa",
			"amarelo",
			"verde",
			""
		]
	},
	{
		"id": "0b813",
		"name": "Jjig iejf ccfh hadc ifei fdjc ef",
		"price": "299.09",
		"in_inventory": 7,
		"brand": "Uoieii aaoeuo caeoue eo",
		"path_image": "Ss55s666sds5",
		"category": [
			"masculino",
			"adulto",
			"casual"
		],
		"colors": [
			"verde",
			"rosa",
			"amarelo"
		]
	},
	{
		"id": "36539",
		"name": "Afbde jeebh abgce eibch bjdbd gejb",
		"price": "212.17",
		"in_inventory": 10,
		"brand": "Aceoi cauoa iaiee aiioo aeaiu aio",
		"path_image": null,
		"category": [
			"masculino",
			"infantil",
			"esportivo"
		],
		"colors": [
			"rosa",
			"verde",
			""
		]
	},
	{
		"id": "508b8",
		"name": "Cfjgdg ghgecc bfbhbi af",
		"price": "219.16",
		"in_inventory": 9,
		"brand": "Ibua auai eodi uaic beie udad aeo",
		"path_image": "68fddfssss44",
		"category": [
			"feminino",
			"infantil",
			"casual"
		],
		"colors": [
			"",
			"rosa"
		]
	},
	{
		"id": "0117c",
		"name": "Ggeja dchab cidei ggfhb ebhbf",
		"price": "287.51",
		"in_inventory": 6,
		"brand": "Odiuou eadoui ooeieo oe",
		"path_image": null,
		"category": [
			"feminino",
			"infantil",
			"esportivo"
		],
		"colors": [
			"rosa",
			"verde",
			"amarelo"
		]
	},
	{
		"id": "6abbb",
		"name": "Jdhj gicd bgbg djbi eeba hb",
		"price": "288.45",
		"in_inventory": 8,
		"brand": "Aaabi eoeai aiuai auiia eiee",
		"path_image": null,
		"category": [
			"masculino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"verde",
			"",
			"rosa"
		]
	},
	{
		"id": "8a6b5",
		"name": "Bgdai jgdai bdhac cjcfd dbj",
		"price": "160.19",
		"in_inventory": 10,
		"brand": "Oiooeu ddeuui uaiaua adeiic uuaii",
		"path_image": "Dfs66fs8ds6d",
		"category": [
			"masculino",
			"infantil",
			"esportivo"
		],
		"colors": [
			"verde",
			"",
			"amarelo"
		]
	},
	{
		"id": "6c01a",
		"name": "Dacd diea iigd chdi ciad bd",
		"price": "296.07",
		"in_inventory": 6,
		"brand": "Cioe uaai ocuo deba eouo o",
		"path_image": null,
		"category": [
			"feminino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"preto",
			"rosa",
			""
		]
	},
	{
		"id": "B3163",
		"name": "Hdac ibji cjdg hcje gdhg ej",
		"price": "169.24",
		"in_inventory": 7,
		"brand": "Eeoia aabib eciaa didui adccu",
		"path_image": null,
		"category": [
			"masculino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"rosa",
			"",
			"preto",
			"amarelo"
		]
	},
	{
		"id": "C4406",
		"name": "Diaea hcaia aggei bghhe ea",
		"price": "174.73",
		"in_inventory": 6,
		"brand": "Iiuei ieoia ocoei uoeoc aibee uouu",
		"path_image": null,
		"category": [
			"masculino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"preto",
			"",
			"verde",
			"rosa"
		]
	},
	{
		"id": "C2792",
		"name": "Ihff dbgi cfgj igbd hejj fhf",
		"price": "215.56",
		"in_inventory": 2,
		"brand": "Ieiea eecae aeoei uccee eb",
		"path_image": "Ssd5545sssdf",
		"category": [
			"feminino",
			"infantil",
			"casual"
		],
		"colors": [
			"preto",
			"rosa",
			"amarelo"
		]
	},
	{
		"id": "52b50",
		"name": "Haid dcad dgjb jbfc efff ca",
		"price": "180.13",
		"in_inventory": 3,
		"brand": "Aaoa buec iaai uaud ideo d",
		"path_image": "6686f4444ff8",
		"category": [
			"feminino",
			"infantil",
			"esportivo"
		],
		"colors": [
			"rosa",
			"amarelo",
			""
		]
	},
	{
		"id": "5013a",
		"name": "Ibff ecba hagi cifj bgjg h",
		"price": "153.63",
		"in_inventory": 2,
		"brand": "Iucua iaooo debcu ioiod acoou iio",
		"path_image": "885sddd65745",
		"category": [
			"feminino",
			"infantil",
			"esportivo"
		],
		"colors": [
			"",
			"amarelo",
			"verde",
			"preto"
		]
	},
	{
		"id": "359bc",
		"name": "Jfjad fjfbj hccee ejhfi bi",
		"price": "126.25",
		"in_inventory": 7,
		"brand": "Oeeo odao eoib oouo aaoe eoi",
		"path_image": "D4sds76dff5f",
		"category": [
			"feminino",
			"adulto",
			"casual"
		],
		"colors": [
			""
		]
	},
	{
		"id": "358ab",
		"name": "Icjhh ebaaf fddbi gieid cbcad i",
		"price": "133.10",
		"in_inventory": 9,
		"brand": "Ioco euaa baec aaei oooo dee",
		"path_image": "74ff46s5868s",
		"category": [
			"feminino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"verde",
			"",
			"amarelo"
		]
	},
	{
		"id": "C113b",
		"name": "Ijjb gija dfjg biec edfd gfdd",
		"price": "268.51",
		"in_inventory": 3,
		"brand": "Ioiiee oaeuei iioiuu uuieuu uaea",
		"path_image": "Fsdfsd4dffd4",
		"category": [
			"masculino",
			"adulto",
			"casual"
		],
		"colors": [
			"",
			"rosa",
			"verde"
		]
	},
	{
		"id": "59347",
		"name": "Dcahe gicbe dffcb igbce bdabj f",
		"price": "182.34",
		"in_inventory": 7,
		"brand": "Aoiouo ouoeaa uaaeoe caecei uoe",
		"path_image": "7d7fsfs84fs4",
		"category": [
			"masculino",
			"infantil",
			"casual"
		],
		"colors": [
			"",
			"preto"
		]
	},
	{
		"id": "A8533",
		"name": "Fdfcj jjjae hiabg ghbhe fbe",
		"price": "165.25",
		"in_inventory": 7,
		"brand": "Aiaueo dbiuue uaobie ui",
		"path_image": null,
		"category": [
			"masculino",
			"infantil",
			"casual"
		],
		"colors": [
			"rosa",
			"preto",
			"verde",
			""
		]
	},
	{
		"id": "4b998",
		"name": "Jjji gcdh jegj bjbi ddfg ifbb a",
		"price": "297.44",
		"in_inventory": 5,
		"brand": "Euod eeia aaeb aioo eaie i",
		"path_image": null,
		"category": [
			"feminino",
			"infantil",
			"esportivo"
		],
		"colors": [
			"preto",
			"verde"
		]
	},
	{
		"id": "98697",
		"name": "Fgeieb ajihib aihhcb jj",
		"price": "206.37",
		"in_inventory": 9,
		"brand": "Euao audi eauc iouo caee iac",
		"path_image": null,
		"category": [
			"feminino",
			"infantil",
			"esportivo"
		],
		"colors": [
			"preto",
			"rosa"
		]
	},
	{
		"id": "60239",
		"name": "Icife dcghc gfach dgbji gg",
		"price": "193.14",
		"in_inventory": 4,
		"brand": "Uouaai biaoei oubaoi aieeub oea",
		"path_image": null,
		"category": [
			"masculino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"",
			"verde",
			"preto"
		]
	},
	{
		"id": "87867",
		"name": "Faaej ejfdi ghiie hchge ccici g",
		"price": "245.12",
		"in_inventory": 9,
		"brand": "Ieeea aadce uuaoe aaeac uadae aocbi",
		"path_image": null,
		"category": [
			"masculino",
			"infantil",
			"casual"
		],
		"colors": [
			"preto",
			""
		]
	},
	{
		"id": "17c25",
		"name": "Aefib bcjgh becff dgchc beidd didg",
		"price": "183.48",
		"in_inventory": 3,
		"brand": "Udaio diuda aeeeu iaaoo beuao dea",
		"path_image": null,
		"category": [
			"feminino",
			"adulto",
			"casual"
		],
		"colors": [
			"amarelo",
			"preto",
			"rosa",
			"verde"
		]
	},
	{
		"id": "64076",
		"name": "Acaagj dabfii bbigja edecii dfjdhj",
		"price": "248.11",
		"in_inventory": 2,
		"brand": "Uibia ouiub eioue uiiiu cauca",
		"path_image": null,
		"category": [
			"masculino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"",
			"amarelo",
			"verde"
		]
	},
	{
		"id": "81765",
		"name": "Bdhj jcfd hgcj acfg gdcb egbc d",
		"price": "277.75",
		"in_inventory": 2,
		"brand": "Eobb aaae ouui daao ocob e",
		"path_image": "S6sss4fsf86s",
		"category": [
			"feminino",
			"infantil",
			"esportivo"
		],
		"colors": [
			"preto",
			"verde",
			"amarelo"
		]
	},
	{
		"id": "0b147",
		"name": "Edcchb cfhiji cgchhc cb",
		"price": "212.45",
		"in_inventory": 9,
		"brand": "Baoad ioiac ceuaa aeeuu ic",
		"path_image": null,
		"category": [
			"masculino",
			"infantil",
			"esportivo"
		],
		"colors": [
			"amarelo",
			"preto",
			"rosa"
		]
	},
	{
		"id": "9b732",
		"name": "Cjcdf iagdd dafed bbige iiigb hbge",
		"price": "201.54",
		"in_inventory": 2,
		"brand": "Aoiu iibu eaio duie boud aaei uc",
		"path_image": null,
		"category": [
			"masculino",
			"adulto",
			"casual"
		],
		"colors": [
			"preto",
			"verde",
			"rosa",
			"amarelo"
		]
	},
	{
		"id": "30356",
		"name": "Befdee iigfdi aigfge ej",
		"price": "298.33",
		"in_inventory": 5,
		"brand": "Ieuie beeou oobao oiooo euauo",
		"path_image": null,
		"category": [
			"feminino",
			"infantil",
			"esportivo"
		],
		"colors": [
			"amarelo",
			"verde"
		]
	},
	{
		"id": "5a443",
		"name": "Ddea acgh jdgc chec aceh jbf",
		"price": "179.18",
		"in_inventory": 2,
		"brand": "Uooo auui cuco ddea udcu au",
		"path_image": null,
		"category": [
			"masculino",
			"adulto",
			"casual"
		],
		"colors": [
			"verde",
			"amarelo",
			"preto"
		]
	},
	{
		"id": "Aa927",
		"name": "Gadg fdca ghjf iigi efij bd",
		"price": "200.63",
		"in_inventory": 1,
		"brand": "Udoi uaae aiee uiid doad ee",
		"path_image": null,
		"category": [
			"masculino",
			"infantil",
			"casual"
		],
		"colors": [
			"preto"
		]
	},
	{
		"id": "3ccc9",
		"name": "Fbij cidc efgd agij ceag hea",
		"price": "131.07",
		"in_inventory": 8,
		"brand": "Biooi ocbib aieea aiuaa ieuau oaua",
		"path_image": null,
		"category": [
			"masculino",
			"adulto",
			"esportivo"
		],
		"colors": [
			"rosa",
			"verde",
			""
		]
	}
]

module.exports = class ArrayInterface {
    constructor() {
    }

    getAll() {
        return db
    }

    setProduct(product) {
        db.push(product)
    }
}