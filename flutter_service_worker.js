'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "AgoraRtcWrapper.bundle.js": "39d222f9276c2e1ce34c5bccdd181738",
"assets/AssetManifest.json": "3b9b149d6ae1c52798a2930fd01d4e87",
"assets/assets/4.epub": "b8a67544fe15842505ca4b7d5aec4ba0",
"assets/assets/acccount1.png": "bc04f24d6c7113d3e7840f4d62456310",
"assets/assets/alice.epub": "c3fb0267501e739bcaba03de24d1d974",
"assets/assets/anaxure%2520to%2520tax.pdf": "6b20afea4123a8c377d39f893893b645",
"assets/assets/Application%2520Report.pdf": "ca4bbfa5af3018d857de529d92190754",
"assets/assets/arrow1.png": "169680d8b3a2e033ba010c3704e78311",
"assets/assets/arrow_back.png": "6984a4ca48000b4a0721f96326aaffd9",
"assets/assets/audio/incoming_ringing.mp3": "06acb4d37a3128f1f3d9c0097ae4e77f",
"assets/assets/avataarSwag.png": "5ff27e923b1e6365e1ab5e584af2f0ee",
"assets/assets/avataarSwag1.png": "60bb738053d910f5593da41c5ac03909",
"assets/assets/background.jpg": "338dc17cd51c630a30a7e31343fb22e4",
"assets/assets/backgrounds/bg1.jpg": "e7239c642ff1698440e7d81dbcdda478",
"assets/assets/backgrounds/bg10.jpg": "ced7cf68a42241ff1cc04a67521b16b0",
"assets/assets/backgrounds/bg11.jpg": "3a529e1dc18e7d85e4b1a0a7a86f190a",
"assets/assets/backgrounds/bg12.jfif": "224d0a9dab5ac005c6c9d7445779a0b0",
"assets/assets/backgrounds/bg12.jpg": "73966e85abadd11c45249cff17e52e83",
"assets/assets/backgrounds/bg13.jpg": "d86c586642d257ed0116fc2d83b70342",
"assets/assets/backgrounds/bg14.jpg": "ae0ded6f4867f8ae6d2cc32fc9737fc2",
"assets/assets/backgrounds/bg2.jpg": "d50fec0021e3443beb359c218647619e",
"assets/assets/backgrounds/bg3.jpg": "1de34be1f2c887ec2a1d722b7a5a456c",
"assets/assets/backgrounds/bg4.jpg": "64a493e54963e3f04106d2c8973cf883",
"assets/assets/backgrounds/bg5.jpg": "96379c014b18894e1f1d54d5d15f2174",
"assets/assets/backgrounds/bg6.jpg": "b4c5c74eea9edf085ecc963f3528360a",
"assets/assets/backgrounds/bg7.jpg": "aa29b9649751cd711bf19a4daef71413",
"assets/assets/backgrounds/bg8.jpg": "b2a66c983da9c6f2ed9fc0a28942d9d2",
"assets/assets/backgrounds/bg9.jpg": "fd9594045706ea29dae94d6b7a671ba9",
"assets/assets/bean1.png": "7357cd86d4cf76fff50b2976b3c1f349",
"assets/assets/bg1.png": "2d64688b78572e4a8b5312f26ca87e4b",
"assets/assets/bioIcon.png": "00365a745d6f2cbcb3f74b82ca6196c9",
"assets/assets/bloglogo.png": "3dc787f245a6a80cf45edf72273d5e58",
"assets/assets/bloglogo1.png": "746cf645556b0dcae744da86c81c9c43",
"assets/assets/bloglogo3.png": "3dc787f245a6a80cf45edf72273d5e58",
"assets/assets/BLOGNEW.png": "6f73045fce7c1915180f6ac9f3b35ffe",
"assets/assets/BLOGS.png": "f82f2618cd0d961953118d4c14649118",
"assets/assets/blogslogo.png": "d1e91141633a8bab5da67b47cd7cb8b4",
"assets/assets/boy1.jpg": "e466d4f2420f60dd9d4b26f05244824f",
"assets/assets/boy2.jpg": "b26f272364ae8a82f834e40329d532fa",
"assets/assets/boy3.jpg": "3cece96f9c4bbc5680d077ea26f08cad",
"assets/assets/business.png": "b393fb35f8072b23a7284d7e7d48d437",
"assets/assets/BUSINESSNEW.png": "0ce25d1dc984d714ee3ba759684f6f6a",
"assets/assets/buss1.png": "440ee0d8a2af37b0467a477908a05b68",
"assets/assets/calling.gif": "f62f5f76cfa4fb579afbeb0ea5e393ce",
"assets/assets/calling1.gif": "5083e0a2a7dcaae07c142e8b87036a27",
"assets/assets/camera.gif": "dc6796389a0dce8f16eb73822a864f08",
"assets/assets/camera.jpg": "81db5d47d3831a80ba49e1a8b6585b0c",
"assets/assets/camera.png": "bd481f900249ab7698497e527d7eed7a",
"assets/assets/camera1.gif": "ce5773485dae81e82061f8adc39fb0bc",
"assets/assets/cameraf.gif": "0cabc77007f35b3a10c3f456e400a243",
"assets/assets/CAUSE.png": "a7d1dabb80b65eb5432ab0680257f957",
"assets/assets/causeEmoji.png": "9fe44193eb2e806e541fca3e4eaddff4",
"assets/assets/CausePriv.png": "0dca8d785152ddd913066b5890a04303",
"assets/assets/CD.png": "eeb5607f7477a6d2ecfad2b50317b1bb",
"assets/assets/celebrate.png": "b29449f14d4a05d99288346f199ac55d",
"assets/assets/celebratecertificate.png": "5a0ac5fb0015aca2acf7d243da413b1c",
"assets/assets/celebrateperformance.png": "0a3a0c4d73bebaf3b7d878a8cbc1f707",
"assets/assets/celebratewithfriends.png": "770acb9bef2f5c4a4170bde531d8b73d",
"assets/assets/celebratewithfriends1.png": "9395e3abba90d390e5c18d5830d2f651",
"assets/assets/CH4_page.epub": "977c2ca44f3bfaaa56013f7168ee76ad",
"assets/assets/checkbox.svg": "50c27da176e8910ec96cfc4e83b114d2",
"assets/assets/chem1.png": "6c603de67f8bd15f5ffcfdc522e5057f",
"assets/assets/chemIcon.png": "9dac89d2d6b53e223847da6404696065",
"assets/assets/chemistryIcon.png": "936ce480ff2c50718ef5c6dd8b5ff0c6",
"assets/assets/chemistryIcon1.png": "c5ec9e3e7a35f234726ccd3dfcfc6baf",
"assets/assets/chris.jpg": "90e94d11010497e7229bc4ff10016d96",
"assets/assets/civicsIcon.png": "dcc26d79d62afb6767e7304df3b08a88",
"assets/assets/classnotes.jpg": "491c0a93904820947bfde5aecb45a6ff",
"assets/assets/class_10_economics_chapter_1.epub": "5439466023920d1b16a65c87957ebf67",
"assets/assets/class_10_Updated.epub": "5439466023920d1b16a65c87957ebf67",
"assets/assets/collbooks1.jpg": "693bdb0c1083cdec056b4d2e2055a7ab",
"assets/assets/collbooks2.png": "70a9b7c23c95bf46dc24b8128aafece0",
"assets/assets/collbooks3.png": "cacf5575399fb9664589e553480f3f65",
"assets/assets/comp2.png": "b7fde7e1014d27c8c67bef20956b844d",
"assets/assets/competitiveexam.jpg": "d263d2c7f28c56284aad0ff66160bc64",
"assets/assets/compExam1.png": "0c51ae4833b6fec0a69067ba49c1614b",
"assets/assets/compIcon.png": "41642df98d66924f6eec5a82bc99333c",
"assets/assets/cyber2.png": "eb58dbbf856f54ccdddca8ff8dd99a25",
"assets/assets/descicon.png": "bad71ab1b54898cd01150e2bcfa10241",
"assets/assets/Donation.jpg": "3b6eb56b745113e870d715a77136e3b0",
"assets/assets/drawerbg.png": "d9943ab52705d32f5ef62f1b139eea73",
"assets/assets/ecoIcon.jpg": "126d184b69956c8429a54fc7aae8ec6f",
"assets/assets/ecoIcon1.jpg": "a24a9df67b0c63c836fc9ee51d3156fd",
"assets/assets/ecoIcon2.jpg": "a609a00ede44167182584d50152e0e0b",
"assets/assets/edit.png": "86aefad06fd873296342812f4674cbbd",
"assets/assets/edit1.png": "45f0d662ba4e66e7ddeffd5a2d39c487",
"assets/assets/edit2.png": "e0fb52613ac96d3ec6d20204a51cc8a3",
"assets/assets/englishIcon.png": "e6e6e53aaf461be065916ac6b68319fe",
"assets/assets/EnglishOlym1.jpg": "4591c8ba760c611f17b263a16ba228fa",
"assets/assets/enviIcon.png": "e94e1a58b744998596b07c182e40b689",
"assets/assets/epub_viewer/asset-manifest.json": "e7e0886f9de09563eb57f906fad23a8b",
"assets/assets/epub_viewer/images/logo.png": "6d0aa76025c6aa28c03cb2d1e172a968",
"assets/assets/epub_viewer/index.html": "a9d1f979d8ca151e7c799ed1d427c24b",
"/": "98fa01c231cc818f5f74f1fba21d759c",
"assets/assets/epub_viewer/manifest.json": "384a582cf49660f87f16eef7a2509d2c",
"assets/assets/epub_viewer/robots.txt": "fa1ded1ed7c11438a9b0385b1e112850",
"assets/assets/epub_viewer/static/css/main.4199a992.css": "fd9c307ae673bd86344a94a8c8a01a19",
"assets/assets/epub_viewer/static/css/main.4199a992.css.map": "5f120996dfb23eb8be62769dda683562",
"assets/assets/epub_viewer/static/js/main.51b8cd24.js": "3830c03b480b93731f2dca24ff2743f6",
"assets/assets/epub_viewer/static/js/main.51b8cd24.js.LICENSE.txt": "d1cdb82fc11463547d309129c11acbff",
"assets/assets/epub_viewer/static/js/main.51b8cd24.js.map": "15e5ff64f3fa98c20bcfc23627148079",
"assets/assets/epub_viewer.zip": "787eca2ae783639b304bbac9fbabedff",
"assets/assets/exampaper.jpg": "2284a080adcb28ccfa41d139bc5ed4f3",
"assets/assets/exampaper1.png": "b9c504707e02ef2ecd267f02e89a242a",
"assets/assets/excited.png": "688723a19a837a3dd3f63ad8577c5171",
"assets/assets/excited1.png": "8e85c187165a7ffa9a247046888f50cf",
"assets/assets/explive.PNG": "f54aa394bd63a2ae0bc1773b07a36496",
"assets/assets/facebook.png": "3b149a0e5a55d5a92f114f091364de40",
"assets/assets/femaleicon.png": "f11468a6fbb6ebfe830d234108e650ac",
"assets/assets/fileuploadicon.png": "83b63cecd9609c69f8ebe5cbde8f91c2",
"assets/assets/firebase_functions_Js.txt": "d62ec72fb50d1035b0cabe5460baa3dc",
"assets/assets/firebase_function_Ts.txt": "679d1fc31dda43d62345c20f68c0f4e7",
"assets/assets/flag.png": "0e45363bac8644c28cda24bf558d3c29",
"assets/assets/flutter_tex_banner.png": "6f717d8e333c2eebc10c37feda430ce5",
"assets/assets/form%252016%2520a.pdf": "0dbc1cffabc530cf09c42131cad6f4d7",
"assets/assets/form%252016%2520b.pdf": "ae25a190581f851eab31418559ce0af1",
"assets/assets/gallery.png": "8f6a6965fb0f1eae6d38533f556a1883",
"assets/assets/geogIcon.png": "2fcc97dc704f4105771f35f745ec0bfe",
"assets/assets/girl2.jpg": "59bdffc63e99e62202767d3c1fe67a26",
"assets/assets/girl5.jpg": "29b18ac7fe1e762ba5a37a381ef2fc14",
"assets/assets/girl6.jpg": "ac331b3079519a90bd8486b0b2110929",
"assets/assets/girl7.jpg": "1ed1a669188e215e7c37f93ce0a775a4",
"assets/assets/girl8.jpg": "0812694ea3b65632d8a392d343b86987",
"assets/assets/girlChild1.png": "091284df64317cf07a1b00cae34f2189",
"assets/assets/github.png": "73f6facb5690334ce00e33382c60bda6",
"assets/assets/gk1.png": "5c513627b5a1b6d61dcce9efa6473d86",
"assets/assets/google.png": "66047864288a9df7b69c6bc3c94d16f5",
"assets/assets/group.png": "9f84ea648dc58913e6eb44eb308134f7",
"assets/assets/group1.png": "3ad2ea2842f8788bf288d489678a53fb",
"assets/assets/groupchatdefault.jpg": "454ee10f548ff77c0227842c1a356e52",
"assets/assets/grouppeople.png": "cc2b11eb0d3bfb79df4e756973b30998",
"assets/assets/grouppeople1.jpg": "824e0269239c2d93390b2c3e41d8728d",
"assets/assets/grouppeople2.jpg": "73578a6a4e051441e930ae3fbcc77598",
"assets/assets/hindiIcon.png": "d9d4bfc380f8d17603049a2dae7cba2f",
"assets/assets/hindiIcon1.png": "83119d8520e6060ed31b32b882558b29",
"assets/assets/historyIcon.png": "5fa178d8db664702f6d74292d7ce143c",
"assets/assets/hysnew.png": "463df9b99e53f34d4acb808d348ba45a",
"assets/assets/icons/logo.png": "ec7784e586d0f39df08f74b3e4650463",
"assets/assets/ideas1.png": "15410f0e4a78492712dcfb924047faf3",
"assets/assets/ideas2.jpg": "7a0d5e2765a990d26e9e7eeb1670a339",
"assets/assets/ideas2.png": "054a8e4a763f41e68092b3c0cf1b362e",
"assets/assets/ideas3.png": "3e2df8956cef6c92adb24265e4cd2173",
"assets/assets/ideas4.png": "cde05cdc9dc15ea1eddbdf23231fbbdf",
"assets/assets/illustration-1.png": "5ad69c7624875b76c84eebb06806ff46",
"assets/assets/illustration-2.png": "9f8a806312ecfe03313dabe5cf70a63f",
"assets/assets/IMG-20210510-WA0019.jpg": "385135d918d090b9b007a056a3aaed5c",
"assets/assets/jesc101.epub": "1d57d5fa9dd68a4987b9ec41ceeaee1b",
"assets/assets/justfine.png": "ce31fc1a6eae15b392e20307cec30e07",
"assets/assets/keyboard.gif": "ee7b4db0a4eb46ebf9971a8614ea23e2",
"assets/assets/keyboard.png": "9fb6e1a96cbc0911d108e1eb450c6f44",
"assets/assets/keyboard1.jpg": "c8670f20e974d871f0d262cf5315ed3a",
"assets/assets/life1.png": "e90057d550aec74850896154d9d44e07",
"assets/assets/llower.png": "b7c3d4c3a254d221c9e1de6064f3f0ba",
"assets/assets/loading.gif": "7dbcb78a2d45b8d23ad5b66a888be8eb",
"assets/assets/loadingimg.gif": "5dbbbc8fb50889b421445aa7717bf63b",
"assets/assets/logo.png": "4c88cba8459206b5ab00d6b37faf1218",
"assets/assets/maleicon.jpg": "f321519649212cfef07feb150da8a0b7",
"assets/assets/math.png": "c8c2301d93e7bd84d00bd3c9797c4291",
"assets/assets/math11.png": "53de6ec5a83d1f07af49b4abfa799d0c",
"assets/assets/mathIcon.png": "38ffaa0e86042231807960ce661d467f",
"assets/assets/mathsolympiad1.png": "a533c5970d59226b8b8ca28bf0211380",
"assets/assets/meeting.gif": "5083e0a2a7dcaae07c142e8b87036a27",
"assets/assets/microphone.png": "e8ee0dd118225b13e6aa8740e28f7238",
"assets/assets/newgirl.png": "82a5707a2f56b1bb41243eb57f20ffbb",
"assets/assets/newgirl1.png": "5f17d48beefb4443613dc1ee6b8ecd6d",
"assets/assets/newgirl2.png": "0312720c190994861ce8f8089520607b",
"assets/assets/nochat.gif": "7522bbe82ef21aa2b4ebc227acfb8d23",
"assets/assets/noconnection.png": "2ad142daefe8b81dc83580277126744d",
"assets/assets/ocr.gif": "4b2fa9070859a7e7ec5dc306dab3079f",
"assets/assets/ocr.png": "c1aea6fe4e2d6ef225f9147e89394d0b",
"assets/assets/ocr1.gif": "18426d0741a2fbb4528d17ea7d261ea8",
"assets/assets/othernotes.jpg": "57ee204e6679920c1ddfe3dfa20c2239",
"assets/assets/others1.png": "c4b6a6f6dbcb0721735bfbbc6986bb34",
"assets/assets/others2.jpg": "9e87962c4fc882ee82da381665e15055",
"assets/assets/othersIcon2.png": "23968ce7e0062081aab249a959e01811",
"assets/assets/phys1.png": "0924920f0902b629d4e5975c7aa4ce9a",
"assets/assets/physicsIcon.png": "f9c5d9bd10e2dff47b962faa621100f9",
"assets/assets/PODCAST.png": "6ba1d1e76dec76a0a83efb1b86bd1f43",
"assets/assets/podcastBackground1.png": "4225d4408866c8deab4e82d581e5014a",
"assets/assets/privacy.jpg": "6b46e1b09d927e9c02b6c6e5b19f8be5",
"assets/assets/profile/profilef1.jpg": "ac331b3079519a90bd8486b0b2110929",
"assets/assets/profile/profilef2.jpg": "1ed1a669188e215e7c37f93ce0a775a4",
"assets/assets/profile/profilef3.jpg": "0812694ea3b65632d8a392d343b86987",
"assets/assets/profile/profilem1.png": "60bb738053d910f5593da41c5ac03909",
"assets/assets/profile/profilem2.jpg": "e466d4f2420f60dd9d4b26f05244824f",
"assets/assets/profile/profilem3.png": "f040f79f99c87c91aae57ec90a794108",
"assets/assets/profileA1.png": "ccb4760dd7576edc178179193c6c0bba",
"assets/assets/project.png": "bef56cc800c087260a30613b01c6c959",
"assets/assets/projectbackg1.png": "34c45529529b5d719aa59298644b5924",
"assets/assets/projectbackg2.png": "1b5f59499c4e2c1792e83792d729378a",
"assets/assets/projectbackg3.png": "fdf6708e077168440f656bd7a4cc0951",
"assets/assets/projectbackg4.png": "9d05619141420cc3457d40a7171abc78",
"assets/assets/reactions/angry.gif": "e9c5873da3656c032d9544d99e135138",
"assets/assets/reactions/angry.png": "4b003f5e1a9b5a210c371ae192032bb2",
"assets/assets/reactions/laugh.gif": "5112c71a0fc28f25679de607211fa9d0",
"assets/assets/reactions/laugh.png": "a76ae2dd0f3569f57402d8a81f0edb55",
"assets/assets/reactions/like.gif": "176c383df4cb5b740f3386bae53d08d5",
"assets/assets/reactions/like.png": "d0eb885e900ac74f08d73f6ea951f792",
"assets/assets/reactions/love.gif": "ff05c30c63f5b676ad90f003c73b08a1",
"assets/assets/reactions/love.png": "c09be30eb7b904a7aa2fc458aa4e6d8e",
"assets/assets/reactions/sad.gif": "4115ac5b22f46deab6a7bea993704c60",
"assets/assets/reactions/sadf.gif": "937a890574d7e0db27b905800139aef3",
"assets/assets/reactions/wow.gif": "fcfbb9c4a9e1bbc9e501dff0011052f0",
"assets/assets/reactions/wow.png": "eb672a2809f29d29e8147caa884de8fb",
"assets/assets/reactions/yay.gif": "a5a6e5c4fb68a486cd9d2253293b92db",
"assets/assets/reactions/yay.png": "313edf9836a881991d53fca3f42722e2",
"assets/assets/recording.gif": "d710529f025b042c418d1405d7265e8b",
"assets/assets/robot1.png": "1b1b902df8b4675de6594b0d367e3b29",
"assets/assets/schoolnotes.png": "b6c7f6eb40603894d8b91e39b0bac6db",
"assets/assets/ScienceOlym1.png": "7883c392145cf5aa891f67ea91a14cc4",
"assets/assets/scrollHandle.png": "180d99e431e74eabbea0473c9ef73ffa",
"assets/assets/settings.png": "61b47498499e2fcd0af457f077425d99",
"assets/assets/shah.jpg": "ad09f5fe48bf20d0422e1a4eea3199a6",
"assets/assets/shortcuts/blog1.png": "4a454b3b4449b3fed0c8d41295cba053",
"assets/assets/shortcuts/books.png": "ddcc3f020eeaf180749a2e76e2a1679e",
"assets/assets/shortcuts/businessideas.png": "ed63b360f2936c73b0d78491d865a81c",
"assets/assets/shortcuts/cause1.png": "3a8ee1af43dcfe6d7818a33c564596c1",
"assets/assets/shortcuts/examq.png": "627d14d40f336ca78332b2b7a7f814dc",
"assets/assets/shortcuts/helpgroup.png": "6ec8f34ee8712fdac5eeefa7e3d6ae51",
"assets/assets/shortcuts/mood.png": "0b44aec9c21afd538219441944ba991a",
"assets/assets/shortcuts/podcast.png": "89f0f66015cdd04e1b30150a666ebbb4",
"assets/assets/shortcuts/predictq.png": "66bac822cfd31b37d151941e228ebfd1",
"assets/assets/shortcuts/projects1.png": "c707be66fdbd32d15a7c17d0c6f00ba1",
"assets/assets/shortcuts/rebel.png": "8c1dee67240414619a48b0afce178eb7",
"assets/assets/shortcuts/talents.png": "2009bbabaf8fb162fadcf2c6301ac902",
"assets/assets/shortcuts/uploads.png": "51c302be0acfa96a379d62377e17d94b",
"assets/assets/shortcuts.zip": "453b8a2a7db16c00cbae048117871aed",
"assets/assets/sm.jpg": "c0e3cdb9c84d4423fa15285ce1ffd7e8",
"assets/assets/socialIcon.png": "0948b8e9bf1403a143116799fb220ad1",
"assets/assets/sorry.gif": "d6f71062e92ecccff3b79a1b895c9cb6",
"assets/assets/splash.gif": "04fa4e187792fc8e0e13ebd1c429f3a7",
"assets/assets/tax%2520statment.pdf": "9718471bcd201854a678a800477b6c01",
"assets/assets/Teaching.jpg": "6cd7c5460757893e92af51e343fa0c27",
"assets/assets/text.gif": "ab3597df73a38b67af72ff9a80c6959a",
"assets/assets/theme1.jpeg": "37601058e5b76d92adf57084d7469e4d",
"assets/assets/theme2.jpg": "55b14cd87b24d99cc5124bc343e8d447",
"assets/assets/theme3.png": "fe695a5ffbb19f1bc3359d1341afba36",
"assets/assets/theme4.png": "bfd4441c7b7911f724f538286c2c4ac0",
"assets/assets/theme5.png": "1425ed1e5b4411aee1a381a10162d0ed",
"assets/assets/theme6.png": "37738bcea9b5657cb3782957cb129fce",
"assets/assets/theme7.png": "f365f0ad439619b6acd3e353338d1fbb",
"assets/assets/tom.jpg": "f3462d5eb392c1420829a3dfb5f9819d",
"assets/assets/tony1.png": "f040f79f99c87c91aae57ec90a794108",
"assets/assets/twodot.png": "6807d7dc7b3b71ced9a4b87b55bd10ff",
"assets/assets/typing.gif": "1d888425f7493b95e95b171111e56982",
"assets/assets/typing.jpg": "16777a8077a451babb2b902efc1d8725",
"assets/assets/typingf.gif": "50baf4c1bad5cee66c813c58894992c8",
"assets/assets/Untitled.png": "82bd6a46ca0f76a068d5b0bc232ad495",
"assets/assets/uploading.gif": "4c14021095fd20edc900e2e9b91d318e",
"assets/assets/upper.png": "efb91f9761ca44c0f44f4b3d45f6893e",
"assets/assets/vedic1.png": "c896f50b299ca906f25a5d800f009da5",
"assets/assets/videorecord.jpg": "6ef200a652d3d3d5e31b4f6f9d37fe21",
"assets/assets/videothumbnail.jpg": "02cb9be3edb6994dfabe52c845ca371a",
"assets/assets/wallpaperPodcast2.jpg": "db915cfd4ef4f02df3e074314c0deeb0",
"assets/FontManifest.json": "b29276c0b7a3194f750fe49e97276d2d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3dd7f3240c0fec52fc2323cecd28860e",
"assets/packages/agora_rtc_engine/assets/AgoraRtcWrapper.bundle.js": "996d34547d48e4e92c002d1e0de0d061",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/elegant_notification/assets/icons/error.png": "2a84d22ca4a8d9123f1e3149121b0976",
"assets/packages/elegant_notification/assets/icons/info.png": "84b36b60ddacca6c063112fd636bdefb",
"assets/packages/elegant_notification/assets/icons/success.png": "a27784120d6634f48b24e12c4604f9d9",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_tex/js/flutter_tex.css": "062a3279da48d0913eeeeb0d2266e26f",
"assets/packages/flutter_tex/js/flutter_tex.js": "102560c832679dc644c9e7f64a17cda0",
"assets/packages/flutter_tex/js/katex/auto-render.min.js": "8634ca81ec07bf42c8a5a6d433a04cd7",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_AMS-Regular.ttf": "56573229753fad48910bda2ea1a6dd54",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_AMS-Regular.woff": "10824af77e9961cfd548c8a458f10851",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_AMS-Regular.woff2": "66c678209ce93b6e2b583f02ce41529e",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Bold.ttf": "497bf407c4c609c6cf1f1ad38f437f7f",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Bold.woff": "de2ba279933d60f7819ff61f71c17bed",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Bold.woff2": "a9e9b0953b078cd40f5e19ef4face6fc",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Regular.ttf": "e6fb499fc8f9925eea3138cccba17fff",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Regular.woff": "a25140fbe6692bffe71a2ab861572eb3",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Regular.woff2": "08d95d99bf4a2b2dc7a876653857f154",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Bold.ttf": "b9d7c4497cab3702487214651ab03744",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Bold.woff": "40934fc076960bb989d590db044fef62",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Bold.woff2": "796f3797cdf36fcaea18c3070a608378",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Regular.ttf": "97a699d83318e9334a0deaea6ae5eda2",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Regular.woff": "e435cda5784e21b26ab2d03fbcb56a99",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Regular.woff2": "f9e6a99f4a543b7d6cad1efb6cf1e4b1",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Bold.ttf": "8e431f7ece346b6282dae3d9d0e7a970",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Bold.woff": "4cdba6465ab9fac5d3833c6cdba7a8c3",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Bold.woff2": "a9382e25bcf75d856718fcef54d7acdb",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-BoldItalic.ttf": "52fb39b0434c463d5df32419608ab08a",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-BoldItalic.woff": "5f875f986a9bce1264e8c42417b56f74",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-BoldItalic.woff2": "d873734390c716d6e18ff3f71ac6eb8b",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Italic.ttf": "39349e0a2b366f38e2672b45aded2030",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Italic.woff": "8ffd28f6390231548ead99d7835887fa",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Italic.woff2": "652970624cde999882102fa2b6a8871f",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Regular.ttf": "818582dae57e6fac46202cfd844afabb",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Regular.woff": "f1cdb692ee31c10b37262caffced5271",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Regular.woff2": "f8a7f19f45060f7a177314855b8c7aa3",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-BoldItalic.ttf": "6589c4f1f587f73f0ad0af8ae35ccb53",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-BoldItalic.woff": "48155e43d9a284b54753e50e4ba586dc",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-BoldItalic.woff2": "1320454d951ec809a7dbccb4f23fccf0",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-Italic.ttf": "fe5ed5875d95b18c98546cb4f47304ff",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-Italic.woff": "ed7aea12d765f9e2d0f9bc7fa2be626c",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-Italic.woff2": "d8b7a801bd87b324efcbae7394119c24",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Bold.ttf": "f2ac73121357210d91e5c3eaa42f72ea",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Bold.woff": "0e897d27f063facef504667290e408bd",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Bold.woff2": "ad546b4719bcf690a3604944b90b7e42",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Italic.ttf": "f60b4a34842bb524b562df092917a542",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Italic.woff": "ef725de572b71381dccf53918e300744",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Italic.woff2": "e934cbc86e2d59ceaf04102c43dc0b50",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Regular.ttf": "3243452ee6817acd761c9757aef93c29",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Regular.woff": "5f8637ee731482c44a37789723f5e499",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Regular.woff2": "1ac3ed6ebe34e473519ca1da86f7a384",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Script-Regular.ttf": "a189c37d73ffce63464635dc12cbbc96",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Script-Regular.woff": "a82fa2a7e18b8c7a1a9f6069844ebfb9",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Script-Regular.woff2": "1b3161eb8cc67462d6e8c2fb96c68507",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size1-Regular.ttf": "0d8d9204004bdf126342605f7bbdffe6",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size1-Regular.woff": "4788ba5b6247e336f734b742fe9900d5",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size1-Regular.woff2": "82ef26dc680ba60d884e051c73d9a42d",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size2-Regular.ttf": "1fdda0e59ed35495ebac28badf210574",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size2-Regular.woff": "b0628bfd27c979a09f702a2277979888",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size2-Regular.woff2": "95a1da914c20455a07b7c9e2dcf2836d",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size3-Regular.ttf": "963af864cbb10611ba33267ba7953777",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size3-Regular.woff": "4de844d4552e941f6b9c38837a8d487b",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size3-Regular.woff2": "9108a400f4787cffdcc3a3b813401e6a",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size4-Regular.ttf": "27a23ee69999affa55491c7dab8e53bf",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size4-Regular.woff": "3045a61f722bc4b198450ce69b3e3824",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size4-Regular.woff2": "61522cd3d9043622e235ab57762754f2",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Typewriter-Regular.ttf": "6bf4287568e1d3004b54d5d60f9f08f9",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Typewriter-Regular.woff": "0e0460587676d22eae09accd6dcfebc6",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Typewriter-Regular.woff2": "b8b8393d2e65fcebda5fa99fa3264f41",
"assets/packages/flutter_tex/js/katex/index.html": "d72365d725f76c51dbcb8931ca70dd68",
"assets/packages/flutter_tex/js/katex/katex.min.css": "c9f7e21f3011f52c6b9a93b6aeb92edb",
"assets/packages/flutter_tex/js/katex/katex.min.js": "b1a8a50d76f3bd8d824ac86825b6ae5b",
"assets/packages/flutter_tex/js/katex/mhchem.min.js": "9b29ccab32b45fb570484fdf14724255",
"assets/packages/flutter_tex/js/mathjax/extensions/asciimath2jax.js": "ba4a24f0884938191d5cc8a719050c08",
"assets/packages/flutter_tex/js/mathjax/extensions/AssistiveMML.js": "39c008cb2bc669cf413f7dbec5eed5c6",
"assets/packages/flutter_tex/js/mathjax/extensions/CHTML-preview.js": "ccd22964427efb2f7b8b5d47a81d0634",
"assets/packages/flutter_tex/js/mathjax/extensions/fast-preview.js": "f82f1573916c74e598b02c0739a123c0",
"assets/packages/flutter_tex/js/mathjax/extensions/FontWarnings.js": "54dc42c1c40d7965a622fb01c66b9d61",
"assets/packages/flutter_tex/js/mathjax/extensions/HelpDialog.js": "a3a81636a5169e8d4bbfd6a91e0d1ce4",
"assets/packages/flutter_tex/js/mathjax/extensions/jsMath2jax.js": "c0161a7cbc5e2b0ab68ec640b0aa8052",
"assets/packages/flutter_tex/js/mathjax/extensions/MatchWebFonts.js": "5ccc51f3e476e49f7dbe199707fb2111",
"assets/packages/flutter_tex/js/mathjax/extensions/MathEvents.js": "1ba83b0ae280ef29dab5fcd2888f5992",
"assets/packages/flutter_tex/js/mathjax/extensions/MathMenu.js": "46871bab94870bbd170c994c28b99240",
"assets/packages/flutter_tex/js/mathjax/extensions/MathML/content-mathml.js": "0ec4a3e1ad4484b0c68a6f757a244532",
"assets/packages/flutter_tex/js/mathjax/extensions/MathML/mml3.js": "d09efa633025b9964d1973933b847df6",
"assets/packages/flutter_tex/js/mathjax/extensions/MathZoom.js": "0227892f0f35af73e37a7f7019bf366d",
"assets/packages/flutter_tex/js/mathjax/extensions/mml2jax.js": "835e7b107ce67d0e09a002302b64d979",
"assets/packages/flutter_tex/js/mathjax/extensions/Safe.js": "43fcac7fb8b68b0e6026b260d29f52b9",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/action.js": "b291ae5afcf2686e6007e2ad0ac5cb07",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/AMScd.js": "3688a0945311e1a2d4422674c3978f62",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/AMSmath.js": "2a0d678068a6a80be023bad13a50d845",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/AMSsymbols.js": "aef5a6cdabcbb03c017905b91157999d",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/autobold.js": "85c15711cd25778da413647db10806f5",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/autoload-all.js": "4bd547185b751a5499f7cb74b0975f19",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/bbox.js": "ea841d1b20ee93b7ef4268301ae0d6e2",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/begingroup.js": "ad78446e91555049457f3ee8e3330ec7",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/boldsymbol.js": "567c12ebe2987167bc8bb56382c8bb23",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/cancel.js": "6b05f99b08bc0db84d1eedc95d4013ff",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/color.js": "81ada75a6f4efce1b3b317cbd693af67",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/enclose.js": "c0b4bb3761086f90c82c5cde9a173af2",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/extpfeil.js": "52e41797d7f6c1008c14e06b4bcf9a19",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/HTML.js": "dd05d732ce5a656edd0ef35488d236fe",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mathchoice.js": "da60bce2273c8f343a89f19dd334cb0b",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mediawiki-texvc.js": "bab41699c500f82c5e30f204689667bf",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mhchem.js": "e2471e4a8a4f434354af76a55feab242",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mhchem3/mhchem.js": "f29ec4834edb500aaf18d4a4ac5d94ba",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/newcommand.js": "3d30b98aa3e6f9304d8ddf2ded6def5c",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/noErrors.js": "83663e8d081cb5b405482e041be951e5",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/noUndefined.js": "133cd9dd68f0e555ecc1358fd707948f",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/text-macros.js": "e26678d55796849a74bb32e2effe9403",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/unicode.js": "6d5c8e9a1069c920832efc089e987d41",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/verb.js": "0a894ca8fcced14fb954975530d125c2",
"assets/packages/flutter_tex/js/mathjax/extensions/tex2jax.js": "6313aa4e8b7edf452102de2729ec6aed",
"assets/packages/flutter_tex/js/mathjax/extensions/toMathML.js": "bb10d4f7465fa653bbe0dde8ab4a0ac1",
"assets/packages/flutter_tex/js/mathjax/index.html": "38d1f4150e30dc63ccaebfcc9eaaa709",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/jax.js": "70c06ee3014f9b36027101a7ca1fdd0f",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/Arrows.js": "cd22fc0311779024bdf280961e3e0da5",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/BasicLatin.js": "cac9b2e71382e62270baa55fab07cc13",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/CombDiacritMarks.js": "f93aa0e2e266bd4c584135477a8c62ed",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/CombDiactForSymbols.js": "a546cc2e04b694b272d3701d0574d8cc",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/Dingbats.js": "059600ef627ed3ed8bb2115b6994942a",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/GeneralPunctuation.js": "da9ce79f07efe980dfd5ca66f879e739",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/GeometricShapes.js": "53a4eb7cee17491160e00656b97ea5be",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/GreekAndCoptic.js": "7c3c6d008598e331bae1e26fccfb7f5c",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/Latin1Supplement.js": "cb26901092cf263c18de37986141dc74",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/LetterlikeSymbols.js": "509f92c99cab336ecf4adec735adfaac",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MathOperators.js": "08e26ceffc57907eb6f1f4ec8dc39cd2",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscMathSymbolsA.js": "234873cd2f7f069a8f5616c00f7437cc",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscMathSymbolsB.js": "34d5c8d0c0d1efa6051845cc0830dc85",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscSymbolsAndArrows.js": "e8402159215942989336661560724c92",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscTechnical.js": "19cd81efdd76cc0fed0c14c05560761c",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SpacingModLetters.js": "a3f8559b799ecacc12683a39e2c29819",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SupplementalArrowsA.js": "4645a0b9cb5fba1b5d2ad7605e158dd1",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SupplementalArrowsB.js": "b38a7bc0f88379f31a11ae4f068b769a",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SuppMathOperators.js": "f8cc084aabc1d52fb0a94457d6d8e7e2",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/config.js": "cf85ea4a5bc5ac677243e755a7c31464",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/a.js": "997185dd1d2e45dc233bd6b4dd8e4958",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/b.js": "d973c36cb037c5514a73d0d9b6626966",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/c.js": "4d5c64c1f1f43db2b180f499910dff56",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/d.js": "9e5558405f28de118492d95d97441aea",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/e.js": "c11b52d52968ce00245693c04c22d0e5",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/f.js": "9277e2d9f1d4ac45b51c6aaad3c70bcb",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/fr.js": "eb79fa45457e18414aef18a99d622ea4",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/g.js": "5f51d546a5718a7fe99e89feba054276",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/h.js": "3015ebd7f13c11e334c0a7a9ab308767",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/i.js": "770ae1b26b8a2f1a593923ec33855889",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/j.js": "8455021e272e277e99236b4a4fb0edd0",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/k.js": "6414e632ff2cd2ec868d2976aee1018c",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/l.js": "80abb62bfbdba0bb9742ffac7b034895",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/m.js": "db49b39bfe1583819efdfce232b4d1e8",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/n.js": "59b4b5b42fb4304785c6212c59cbb82c",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/o.js": "22baa9e0bbb7760311a193a6e0b10b99",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/opf.js": "a241d729bce659ffed7d91c7f66c84ac",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/p.js": "ff073de21d6efae5f456d5e31c9cfc31",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/q.js": "632221c21f96010d8bdc81bbc62b8526",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/r.js": "8bf057da0768d9dbf0cfe4fef625f548",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/s.js": "99fb74daf2d1fd537f7ce35b916fc793",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/scr.js": "d7f570707643fba84335a507bc9a35cc",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/t.js": "ac6fae5975acbc3a673f8547daa7973f",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/u.js": "4d765eac78c0046d5552654eea91e4c9",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/v.js": "c44170b66aa9a7287b1158006b3a0e16",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/w.js": "d3ba9e2084b7adf1866b70f6cb9dd413",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/x.js": "af4e41f5e5158b126edb92261a52918b",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/y.js": "f9807dae1160344aa125404301c8bba0",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/entities/z.js": "f1e3d439bf2837ef365dd1c39484fd1c",
"assets/packages/flutter_tex/js/mathjax/jax/input/MathML/jax.js": "addaed8cba00c8777540933e45cf9807",
"assets/packages/flutter_tex/js/mathjax/jax/input/TeX/config.js": "c6de0381e92b311e75264dac618de39d",
"assets/packages/flutter_tex/js/mathjax/jax/input/TeX/jax.js": "095f5949e9fcae675246f56a4fa5fa75",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/annotation-xml.js": "5c0a5ac13c601aaa920fe9a99eed23fa",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/maction.js": "6267f292f88b2f7a011d43e7b2288375",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/menclose.js": "7b2ea9eb6ab045b23927ad91ca7269e4",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/mglyph.js": "2fed982e207e72c96899caf9d25dca64",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/mmultiscripts.js": "5f56f7566baf73e3e745f5f4325e6645",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/ms.js": "d6a2a58b5b979b352c0fa9919772618c",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/mtable.js": "b8c87ca1398f29238deb7235a08508ca",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/multiline.js": "dbf95bacbdf5b615b1c4c768aa13e192",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/config.js": "2331dfa04ed33a371d8735e1798c4980",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Alphabets/Regular/Main.js": "efe14a410f0f6068cc8f3295492e9c8a",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Arrows/Regular/Main.js": "665c0e57895adfb6966675bebdf83863",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/DoubleStruck/Regular/Main.js": "05efb6ce00d94b5cf3837dff31b3f71c",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/fontdata-extra.js": "1f8deeefc60655afe9fa112bd0a0713d",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/fontdata.js": "df1b5ef97cf27cab4d02762d04df2b19",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Fraktur/Regular/Main.js": "e3614ebdb6144db9f6a7eaa8d28abfb9",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Latin/Regular/Main.js": "6ea87ff970625b5e69720cea202b3d72",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Main/Regular/Main.js": "18979444cbc184de17d8211badbde33a",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Marks/Regular/Main.js": "1ba4c71aae376a97764d6d987c352727",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Misc/Regular/Main.js": "83905891ae1c1ba5113af6dd20752d3f",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Monospace/Regular/Main.js": "da942728fba8835448b144bf5978c64d",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/NonUnicode/Regular/Main.js": "405ada06bcbd00ce0d8bcbb25a090060",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Normal/Regular/Main.js": "076ba0f589c1743a9c62aa91d42a0bef",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Operators/Regular/Main.js": "dee87779bf7bd236dfa2582f5c67100e",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/SansSerif/Regular/Main.js": "3aa7be9c67f8d7964473e683c646a895",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Script/Regular/Main.js": "0a4bed2eb2cdd41e0ea0f0fba08bd761",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Shapes/Regular/Main.js": "ace21a50708f5f803b02c659981bbb8f",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size1/Regular/Main.js": "288666c04f3e95c93475786725e042aa",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size2/Regular/Main.js": "288e754ba2854b9523cbcea6ebbbb60c",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size3/Regular/Main.js": "632d9bde1dfa761e0b8ca7f6ad528f99",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size4/Regular/Main.js": "b619df9dbc3d32cf4bf4050a9c0bd4f7",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size5/Regular/Main.js": "fddbbbcd462a8e11582c211334afea0f",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size6/Regular/Main.js": "aeb0ccd2bd94068b57dbf4639961de84",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Symbols/Regular/Main.js": "d0990851f00fd8c80cc70a31d016110d",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Variants/Regular/Main.js": "a0e179664a7f9c7429169f18c62423fa",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/jax.js": "983708db351371378d03356a7848f4d1",
"assets/packages/flutter_tex/js/mathjax/LICENSE": "3b83ef96387f14655fc854ddc3c6bd57",
"assets/packages/flutter_tex/js/mathjax/MathJax.js": "b2c103388b71bb3d11cbf9aa45fe9b68",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff": "c1a96d26d30d9e0b2fd33c080d88c72e",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff2": "f694db69cded200e4edd999fddef81b7",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "cadfcf986f26d830521e9a63350f4dbd",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "7a5aac724a16708b909945207237ed12",
"firebase-messaging-sw.js": "e354810a580c1f633e2e0cbb67c6f022",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192x192.png": "b9c2115b381dd0c9bb12e609245cfa85",
"icons/Icon-512x512.png": "3382d162605ab3a0adfcf01d873de3f3",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "98fa01c231cc818f5f74f1fba21d759c",
"main.dart.js": "7e91a73b135efa0d5f031bfa52ccf6e3",
"manifest.json": "7c1755639acc82966595d21d15d7588c",
"version.json": "6815ab0d7ae1779095c4acd42a9b8068"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
