input1.value = localStorage.getItem("lang1");
input2.value = localStorage.getItem("lang2");
document.getElementById("search").addEventListener("click", () => {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const textarea1 = document.getElementById("textarea1");
  const textarea2 = document.getElementById("textarea2");
  const langFrom = input1.value;
  const langTo = input2.value;
  localStorage.setItem("lang1", langFrom);
  localStorage.setItem("lang2", langTo);
  const textAreaData = textarea1.value;
  fetchTranslation(langFrom, langTo, textAreaData);
});

async function fetchTranslation(lang1, lang2, text1) {
  const lang1Code = getLanguageCode(lang1);
  const lang2Code = getLanguageCode(lang2);
  if (lang1Code == "" || lang2Code == "") {
    alert("Enter Correct Langugae");
  } else {
    const url = "https://rapid-translate-multi-traduction.p.rapidapi.com/t";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "e69a93d0f5msh53483a351c7cce5p1cdf7ajsn85613c7de568",
        "X-RapidAPI-Host": "rapid-translate-multi-traduction.p.rapidapi.com",
      },
      body: JSON.stringify({
        from: lang1Code,
        to: lang2Code,
        q: text1,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      // console.log(result);
      textarea2.value = result;
    } catch (error) {
      console.error(error);
    }
  }
}

function getLanguageCode(languageName) {
  switch (languageName.toLowerCase()) {
    case "afrikaans":
      return "af";
    case "albanian":
      return "sq";
    case "amharic":
      return "am";
    case "arabic":
      return "ar";
    case "armenian":
      return "hy";
    case "azerbaijani":
      return "az";
    case "bashkir":
      return "ba";
    case "basque":
      return "eu";
    case "belarusian":
      return "be";
    case "bengali":
      return "bn";
    case "bosnian":
      return "bs";
    case "bulgarian":
      return "bg";
    case "burmese":
      return "my";
    case "catalan":
      return "ca";
    case "cebuano":
      return "ceb";
    case "chichewa":
      return "ny";
    case "chinese (simplified)":
      return "zh-CN";
    case "chinese (traditional)":
      return "zh-TW";
    case "corsican":
      return "co";
    case "croatian":
      return "hr";
    case "czech":
      return "cs";
    case "danish":
      return "da";
    case "dutch":
      return "nl";
    case "english":
      return "en";
    case "esperanto":
      return "eo";
    case "estonian":
      return "et";
    case "finnish":
      return "fi";
    case "french":
      return "fr";
    case "frisian":
      return "fy";
    case "galician":
      return "gl";
    case "georgian":
      return "ka";
    case "german":
      return "de";
    case "greek":
      return "el";
    case "gujarati":
      return "gu";
    case "haitian creole":
      return "ht";
    case "hausa":
      return "ha";
    case "hawaiian":
      return "haw";
    case "hebrew":
      return "iw";
    case "hill mari":
      return "mrj";
    case "hindi":
      return "hi";
    case "hmong":
      return "hmn";
    case "hungarian":
      return "hu";
    case "icelandic":
      return "is";
    case "igbo":
      return "ig";
    case "indonesian":
      return "id";
    case "irish":
      return "ga";
    case "italian":
      return "it";
    case "japanese":
      return "ja";
    case "javanese":
      return "jw";
    case "kannada":
      return "kn";
    case "kazakh":
      return "kk";
    case "khmer":
      return "km";
    case "korean":
      return "ko";
    case "kurdish":
      return "ku";
    case "kyrgyz":
      return "ky";
    case "lao":
      return "lo";
    case "latin":
      return "la";
    case "latvian":
      return "lv";
    case "lithuanian":
      return "lt";
    case "luxembourgish":
      return "lb";
    case "macedonian":
      return "mk";
    case "malagasy":
      return "mg";
    case "malay":
      return "ms";
    case "malayalam":
      return "ml";
    case "maltese":
      return "mt";
    case "maori":
      return "mi";
    case "marathi":
      return "mr";
    case "mari":
      return "mhr";
    case "mongolian":
      return "mn";
    case "nepali":
      return "ne";
    case "norwegian":
      return "no";
    case "pashto":
      return "ps";
    case "papiamento":
      return "pap";
    case "persian":
      return "fa";
    case "polish":
      return "pl";
    case "portuguese":
      return "pt";
    case "punjabi":
      return "pa";
    case "romanian":
      return "ro";
    case "russian":
      return "ru";
    case "samoan":
      return "sm";
    case "scots gaelic":
      return "gd";
    case "serbian":
      return "sr";
    case "sesotho":
      return "st";
    case "shona":
      return "sn";
    case "sindhi":
      return "sd";
    case "sinhala":
      return "si";
    case "slovak":
      return "sk";
    case "slovenian":
      return "sl";
    case "somali":
      return "so";
    case "spanish":
      return "es";
    case "sundanese":
      return "su";
    case "swahili":
      return "sw";
    case "swedish":
      return "sv";
    case "tagalog filipino":
      return "tl";
    case "tajik":
      return "tg";
    case "tamil":
      return "ta";
    case "tatar":
      return "tt";
    case "telugu":
      return "te";
    case "thai":
      return "th";
    case "turkish":
      return "tr";
    case "udmurt":
      return "udm";
    case "ukrainian":
      return "uk";
    case "urdu":
      return "ur";
    case "uzbek":
      return "uz";
    case "vietnamese":
      return "vi";
    case "welsh":
      return "cy";
    case "xhosa":
      return "xh";
    case "yiddish":
      return "yi";
    case "yoruba":
      return "yo";
    case "zulu":
      return "zu";
    default:
      return "";
  }
}

document.getElementById("logo").addEventListener("click", () => {
  location.reload();
});
