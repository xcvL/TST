const cmds = `
command : function
================================
help : Show commands
langs : Show target languages
exit : Close the language/command menu
`

const targetLangs = `
language code : target language
================================
ab : Abkhaz
ace : Acehnese
ach : Acholi
af : Afrikaans
sq : Albanian
alz : Alur
am : Amharic
ar : Arabic
hy : Armenian
as : Assamese
awa : Awadhi
ay : Aymara
az : Azerbaijani
ban : Balinese
bm : Bambara
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
bua : Buryat
yue : Cantonese
ca : Catalan
ceb : Cebuano
ny : Chichewa (Nyanja)
zh-CN : Chinese (Simplified)
zh-TW : Chinese (Traditional)
cv : Chuvash
co : Corsican
crh : Crimean Tatar
hr : Croatian
cs : Czech
da : Danish
din : Dinka
dv : Divehi
doi : Dogri
dov : Dombe
nl : Dutch
dz : Dzongkha
en : English
eo : Esperanto
et : Estonian
ee : Ewe
fj : Fijian
fil : Filipino (Tagalog)
tl : Filipino (Tagalog)
fi : Finnish
fr : French
fr-FR : French (France)
fr-CA : French (Canadian)
fy : Frisian
ff : Fulfulde
gaa : Ga
gl : Galician
lg : Ganda (Luganda)
ka : Georgian
de : German
el : Greek
gn : Guarani
gu : Gujarati
ht : Haitian Creole
cnh : Hakha Chin
ha : Hausa
haw : Hawaiian
iw : Hebrew
he : Hebrew
hil : Hiligaynon
hi : Hindi
hmn : Hmong
hu : Hungarian
hrx : Hunsrik
is : Icelandic
ig : Igbo
ilo : Iloko
id : Indonesian
ga : Irish
it : Italian
ja : Japanese
jw : Javanese
jv : Javanese
kn : Kannada
pam : Kapampangan
kk : Kazakh
km : Khmer
cgg : Kiga
rw : Kinyarwanda
ktu : Kituba
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
li : Limburgan
ln : Lingala
lt : Lithuanian
lmo : Lombard
luo : Luo
lb : Luxembourgish
mk : Macedonian
mai : Maithili
mak : Makassar
mg : Malagasy
ms : Malay
ms-Arab : Malay (Jawi)
ml : Malayalam
mt : Maltese
mi : Maori
mr : Marathi
chm : Meadow Mari
mni-Mtei : Meiteilon (Manipuri)
min : Minang
lus : Mizo
mn : Mongolian
my : Myanmar (Burmese)
nr : Ndebele (South)
new : Nepal Bhasa (Newari)
ne : Nepali
nso : Northern Sotho (Sepedi)
no : Norwegian
nus : Nuer
oc : Occitan
or : Oriya
om : Oromo
pag : Pangasinan
pap : Papiamento
ps : Pashto
fa : Persian
pl : Polish
pt : Portuguese
pt-PT : Portuguese (Portugal)
pt-BR : Portuguese (Brazil)
pa : Punjabi
pa-Arab : Punjabi (Shahmukhi)
qu : Quechua
rom : Romany
ro : Romanian
rn : Rundi
ru : Russian
sm : Samoan
sg : Sango
sa : Sanskrit
gd : Scots Gaelic
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
es : Spanish
su : Sundanese
sw : Swahili
ss : Swati
sv : Swedish
tg : Tajik
ta : Tamil
tt : Tatar
te : Telugu
tet : Tetum
th : Thai
ti : Tigrinya
ts : Tsonga
tn : Tswana
tr : Turkish
tk : Turkmen
ak : Twi (Akan)
uk : Ukrainian
ur : Urdu
ug : Uyghur
uz : Uzbek
vi : Vietnamese
cy : Welsh
xh : Xhosa
yi : Yiddish
yo : Yoruba
yua : Yucatec Maya
zu : Zulu
`

const targetLangsArr = [
    "ab", "ace", "ach", "af", "sq", "alz", "am", "ar", "hy", "as", 
    "awa", "ay", "az", "ban", "bm", "ba", "eu", "btx", "bts", "bbc", 
    "be", "bem", "bn", "bew", "bho", "bik", "bs", "br", "bg", "bua", 
    "yue", "ca", "ceb", "ny", "zh-CN", "zh-TW", "cv", "co", "crh", 
    "hr", "cs", "da", "din", "dv", "doi", "dov", "nl", "dz", "en", 
    "eo", "et", "ee", "fj", "fil", "tl", "fi", "fr", "fr-FR", "fr-CA", 
    "fy", "ff", "gaa", "gl", "lg", "ka", "de", "el", "gn", "gu", 
    "ht", "cnh", "ha", "haw", "iw", "he", "hil", "hi", "hmn", "hu", 
    "hrx", "is", "ig", "ilo", "id", "ga", "it", "ja", "jw", "jv", 
    "kn", "pam", "kk", "km", "cgg", "rw", "ktu", "gom", "ko", "kri", 
    "ku", "ckb", "ky", "lo", "ltg", "la", "lv", "lij", "li", "ln", 
    "lt", "lmo", "luo", "lb", "mk", "mai", "mak", "mg", "ms", "ms-Arab", 
    "ml", "mt", "mi", "mr", "chm", "mni-Mtei", "min", "lus", "mn", "my", 
    "nr", "new", "ne", "nso", "no", "nus", "oc", "or", "om", "pag", 
    "pap", "ps", "fa", "pl", "pt", "pt-PT", "pt-BR", "pa", "pa-Arab", "qu", 
    "rom", "ro", "rn", "ru", "sm", "sg", "sa", "gd", "sr", "st", 
    "crs", "shn", "sn", "scn", "szl", "sd", "si", "sk", "sl", "so", 
    "es", "su", "sw", "ss", "sv", "tg", "ta", "tt", "te", "tet", 
    "th", "ti", "ts", "tn", "tr", "tk", "ak", "uk", "ur", "ug", 
    "uz", "vi", "cy", "xh", "yi", "yo", "yua", "zu"
]

let currentTargetLang = "en";

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

console.log("[Quick Guide]");
console.log("- Select text and release mouse to translate.");
console.log("- Press Ctrl + M to open the language/command menu.");
console.log("  → Type 'help' to see available commands.");
console.log("  → Type 'langs' to view supported language codes.");
console.log("  → Type 'exit' to close the language/command menu.");
console.log("  → Or enter a language code (e.g. 'en', 'ko', 'ja') to change translation target.");
console.log("※ Current target language is English ※");
console.log("");

document.addEventListener("mouseup", () => {
    const text = window.getSelection().toString().trim();
    if(text.length !== 0) {
        translate(text, currentTargetLang).then(result => console.log(result));
        console.log("");
    }
});

document.addEventListener("keydown", (e) => {
    if(e.ctrlKey && e.key.toLowerCase() == "m") {
        e.preventDefault();
        const opt = prompt("Please enter your desired options");
        if(opt === "help") {
            console.log(cmds);
        } else if(opt === "langs") {
            console.log(targetLangs);
        } else if(targetLangsArr.includes(opt)) {
            currentTargetLang = opt;
            console.log("Change completed");
        } else if(opt === "exit") {}
        console.log("");
    }
});