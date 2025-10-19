const cmds = `
command : function
================================
help : Show commands.
langs : Show target languages.
exit : Close the language/command menu.
`

const targetLangs = `
language code : target language
================================
ab : Abkhaz
ace : Acehnese
ach : Acholi
aa : Afar
af : Afrikaans
sq : Albanian
alz : Alur
am : Amharic
ar : Arabic
hv : Armenian
as : Assamese
av : Avaric
awa : Awadhi
ay : Aymara
az : Azerbaijani
ban : Balinese
bal : Balochi
bm-Nkoo : Bamanankan (N'Ko script)
bm : Bambara
bci : Baoulé
ba : Bashkir
eu : Basque
btx : Batak Karo
bts : Batak Simalungun
bbc : Batak Toba
be : Belarusian
bem : Bemba
bn : Bengali
bew : Betawi
bho : Bhojpuri
bik : Bikol
bs : Bosnian
br : Breton
bg : Bulgarian
my : Burmese
bau : Buryat
yue : Cantonese
ca : Catalan
ceb : Cebuano
ch : Chamorro
ce : Chechen
ny : Chichewa
cgg : Chiga
zh-CN : Chinese (Simplified)
xh-TW : Chinese (Traditional)
chk : Chuukese
cv : Chuvash
co : Corsican
crh : Crimean Tatar (Cyrillic script)
crh-Latn : Crimean Tatar (Latin script)
hr : Croatian
cs : Czech
da : Danish
fa-AF : Dari Persian
dv : Dhivehi
din : Dinka
doi : Dogri
dov : Dombe
nl : Dutch
dyu : Dyula
dz : Dzongkha
en : English
eo : Esperanto
et : Estonian
ee : Ewe
fo : Faroese
fj : Fijian
tl : Filipino
fi : Finnish
fon : Fon
fr : French
fr-CA : French (Canada)
fy : Frisian
fur : Friulian
ff : Fula
gaa : Ga
gl : Galician
ka : Georgian
de : German
el : Greek
kl : Greenlandic
gn : Guarani
gu : Gujarati
ht : Haitian Creole
cnh : Hakha Chin
ha : Hausa
haw : Hawaiian
iw : Hebrew
hil : Hiligaynon
hi : Hindi
hmn : Hmong
hu : Hungarian
hrx : Hunsrik
iba : Iban
is : Icelandic
ig : Igbo
ilo : Ilocano
id : Indonesian
iu-Latn : Inuktitut (Latin script)
iu : Inuktitut (Syllabics)
ga : Irish
it : Italian
jam : Jamaican Patois
ja : Japanese
jw : Javanese
kac : Jingpho
kn : Kannada
kr : Kanuri
pam : Kapampangan
kk : Kazakh
kha : Khasi
km : Khmer
rw : Kinyarwanda
ktu : Kituba
trp : Kokborok
kv : Komi
kg : Kongo
gom : Konkani
ko : Korean
kri : Krio
ku : Kurdish (Kurmanji)
ckb : Kurdish (Sorani)
ky : Kyrgyz
lo : Lao
ltg : Latgalian
la : Latin
lv : Latvian
lij : Ligurian
li : Limburgish
ln : Lingala
lt : Lithuanian
lmo : Lombard
lg : Luganda
luo : Luo
lb : Luxembourgish
mk : Macedonian
mad : Madurese
mai : Maithili
mak : Makassarese
mg : Malagasy
ms : Malay
ms-Arab : Malay (Jawi script)
ml : Malayalam
mt : Maltese
mam : Mam
gv : Manx
mr : Marathi
mh : Marshallese
mwr : Marwari
mfe : Mauritian Creole
chm : Meadow Mari
mni-Mtei : Meitei (Meitei script)
min : Minangkabau
lus : Mizo
mn : Mongolian
mi : Māori
nhe : Nahuatl (Eastern Huasteca)
ndc-ZW : Ndau (Zimbabwe)
new : Nepal Bhasa (Newar)
ne : Nepali
se : Northern Sami
nso : Northern Sotho
no : Norwegian
nus : Nuer
oc : Occitan
or : Odia (Oriya)
om : Oromo
os : Ossetian
pag : Pangasinan
pap : Papiamento
ps : Pashto
fa : Persian (Farsi)
pl : Polish
pt : Portuguese (Brazil)
pr-PT : Portuguese (Portugal)
pa : Punjabi (Gurmukhi)
pa-Arab : Punjabi (Shahmukhi)
qu : Quechua
kek : Q'eqchi'
rom : Romani
ro : Romanian
rn : Rundi
ru : Russian
rua : Rwa
sah : Sakha (Yakut)
sm : Samoan
sg : Sango
sa : Sanskrit
sat-Latn : Santali (Latin script)
sat : Santali (Ol Chiki script)
gd : Scottish Gaelic
sr : Serbian
st : Sesotho
crs : Seychellois Creole
shn : Shan
sn : Shona
scn : Sicilian
szl : Silesian
sd : Sindhi
si : Sinhala
sk : Slovak
sl : Slovenian
so : Somali
nr : Southern Ndebele
es : Spanish
su : Sundanese
sus : Susu
sw : Swahili
ss : Swati
sv : Swedish
ty : Tahitian
tg : Tajik
ber-Latn : Tamazight (Latin script)
ber : Tamazight (Tifinagh script)
ta : Tamil
tt : Tatar
te : Telugu
tet : Tetum
th : Thai
bo : Tibetan
ti : Tigrinya
tiv : Tiv
tpi : Tok Pisin
to : Tongan
ts : Tsonga
tn : Tswana
tcy : Tulu
tum : Tumbuka
tr : Turkish
tk : Turkmen
tyv : Tuvan
ak : Twi
udm : Udmurt
uk : Ukrainian
ur : Urdu
ug : Uyghur
uz : Uzbek
ve : Venda
vec : Venetian
vi : Vietnamese
war : Waray
cy : Welsh
wo : Wolof
xh : Xhosa
yi : Yiddish
yo : Yoruba
yua : Yucatec Maya
zap : Zapotec
zu : Zulu
`

const guide = `
[Quick Guide]
- Select text and release mouse to translate.
- Press Ctrl + M to open the language/command menu.
  → Type 'help' to see available commands.
  → Type 'langs' to view supported language codes.
  → Type 'exit' to close the language/command menu.
  → Or enter a language code (e.g. 'en', 'ko', 'ja') to change translation target.
※ Current target language is English. ※
`

const targetLangsArr = [
    "ab", "ace", "ach", "aa", "af", "sq", "alz", "am", "ar", "hv",
    "as", "av", "awa", "ay", "az", "ban", "bal", "bm-Nkoo", "bm", "bci",
    "ba", "eu", "btx", "bts", "bbc", "be", "bem", "bn", "bew", "bho",
    "bik", "bs", "br", "bg", "my", "bau", "yue", "ca", "ceb", "ch",
    "ce", "ny", "cgg", "zh-CN", "xh-TW", "chk", "cv", "co", "crh", "crh-Latn",
    "hr", "cs", "da", "fa-AF", "dv", "din", "doi", "dov", "nl", "dyu",
    "dz", "en", "eo", "et", "ee", "fo", "fj", "tl", "fi", "fon",
    "fr", "fr-CA", "fy", "fur", "ff", "gaa", "gl", "ka", "de", "el",
    "kl", "gn", "gu", "ht", "cnh", "ha", "haw", "iw", "hil", "hi",
    "hmn", "hu", "hrx", "iba", "is", "ig", "ilo", "id", "iu-Latn", "iu",
    "ga", "it", "jam", "ja", "jw", "kac", "kn", "kr", "pam", "kk",
    "kha", "km", "rw", "ktu", "trp", "kv", "kg", "gom", "ko", "kri",
    "ku", "ckb", "ky", "lo", "ltg", "la", "lv", "lij", "li", "ln",
    "lt", "lmo", "lg", "luo", "lb", "mk", "mad", "mai", "mak", "mg",
    "ms", "ms-Arab", "ml", "mt", "mam", "gv", "mr", "mh", "mwr", "mfe",
    "chm", "mni-Mtei", "min", "lus", "mn", "mi", "nhe", "ndc-ZW", "new", "ne",
    "se", "nso", "no", "nus", "oc", "or", "om", "os", "pag", "pap",
    "ps", "fa", "pl", "pt", "pr-PT", "pa", "pa-Arab", "qu", "kek", "rom",
    "ro", "rn", "ru", "rua", "sah", "sm", "sg", "sa", "sat-Latn", "sat",
    "gd", "sr", "st", "crs", "shn", "sn", "scn", "szl", "sd", "si",
    "sk", "sl", "so", "nr", "es", "su", "sus", "sw", "ss", "sv",
    "ty", "tg", "ber-Latn", "ber", "ta", "tt", "te", "tet", "th", "bo",
    "ti", "tiv", "tpi", "to", "ts", "tn", "tcy", "tum", "tr", "tk",
    "tyv", "ak", "udm", "uk", "ur", "ug", "uz", "ve", "vec", "vi",
    "war", "cy", "wo", "xh", "yi", "yo", "yua", "zap", "zu"
]

let currentTargetLang = "en";

let mouseX;
let mouseY;

async function translate(text, lang) {
    const url=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${encodeURIComponent(text)}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data[0].map(item => item[0]).join("");
    } catch(err) {
        alert(err+"\nAn error occurred, please try again.");
    }
}

console.log(guide);
console.log("");

document.addEventListener("mousedown", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})

document.addEventListener("mouseup", (e) => {
    if(mouseX === e.clientX && mouseY === e.clientY) { return; }

    const text = window.getSelection().toString().trim();
    if(text.length !== 0) {
        translate(text, currentTargetLang).then((result) => {
            console.log(result);
            console.log("");
        });
    }
});

document.addEventListener("keydown", (e) => {
    if(e.ctrlKey && e.key.toLowerCase() == "m") {
        e.preventDefault();
        const opt = prompt("Please enter your desired options.");
        if(opt === "help") {
            console.log(cmds);
        } else if(opt === "langs") {
            console.log(targetLangs);
        } else if(opt === "exit") {
        } else if(targetLangsArr.includes(opt)) {
            currentTargetLang = opt;
            console.log("Change completed.");
        } else {
            console.log("failed.")
        }
        console.log("");
    }
});