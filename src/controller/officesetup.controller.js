import { District } from "../Model/office/district.model.js";
import { Palika } from "../Model/office/palika.model.js";
import { State } from "../Model/office/state.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";


export async function InsertDistrict(req,res){
 
    const data = [
        {
            "_id": "65b6e525734d600f43e396f3",
            "districtId": 1,
            "districtName": "Bhojpur",
            "stateId": 1,
            "districtNameNep": "भोजपुर",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e396f4",
            "districtId": 2,
            "districtName": "Dhankuta",
            "stateId": 1,
            "districtNameNep": "धनकुटा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e396f5",
            "districtId": 3,
            "districtName": "Ilam",
            "stateId": 1,
            "districtNameNep": "इलाम",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e396f6",
            "districtId": 4,
            "districtName": "Jhapa",
            "stateId": 1,
            "districtNameNep": "झापा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e396f7",
            "districtId": 5,
            "districtName": "Khotang",
            "stateId": 1,
            "districtNameNep": "खोटाँग",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e396f8",
            "districtId": 6,
            "districtName": "Morang",
            "stateId": 1,
            "districtNameNep": "मोरंग",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e396f9",
            "districtId": 7,
            "districtName": "Okhaldhunga",
            "stateId": 1,
            "districtNameNep": "ओखलढुंगा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e396fa",
            "districtId": 8,
            "districtName": "Panchthar",
            "stateId": 1,
            "districtNameNep": "पांचथर",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e396fb",
            "districtId": 9,
            "districtName": "Sankhuwasabha",
            "stateId": 1,
            "districtNameNep": "संखुवासभा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e396fc",
            "districtId": 10,
            "districtName": "Solukhumbu",
            "stateId": 1,
            "districtNameNep": "सोलुखुम्बू",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e396fd",
            "districtId": 11,
            "districtName": "Sunsari",
            "stateId": 1,
            "districtNameNep": "सुनसरी",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e396fe",
            "districtId": 12,
            "districtName": "Taplejung",
            "stateId": 1,
            "districtNameNep": "ताप्लेजुंग",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e396ff",
            "districtId": 13,
            "districtName": "Terhathum",
            "stateId": 1,
            "districtNameNep": "तेह्रथुम",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39700",
            "districtId": 14,
            "districtName": "Udayapur",
            "stateId": 1,
            "districtNameNep": "उदयपुर",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39701",
            "districtId": 15,
            "districtName": "Parsa",
            "stateId": 2,
            "districtNameNep": "पर्सा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39702",
            "districtId": 16,
            "districtName": "Bara",
            "stateId": 2,
            "districtNameNep": "बारा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39703",
            "districtId": 17,
            "districtName": "Rautahat",
            "stateId": 2,
            "districtNameNep": "रौतहट",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39704",
            "districtId": 18,
            "districtName": "Sarlahi",
            "stateId": 2,
            "districtNameNep": "सर्लाही",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39705",
            "districtId": 19,
            "districtName": "Dhanusa",
            "stateId": 2,
            "districtNameNep": "धनुषा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39706",
            "districtId": 20,
            "districtName": "Siraha",
            "stateId": 2,
            "districtNameNep": "सिराहा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39707",
            "districtId": 21,
            "districtName": "Mahottari",
            "stateId": 2,
            "districtNameNep": "महोत्तरी",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39708",
            "districtId": 22,
            "districtName": "Saptari",
            "stateId": 2,
            "districtNameNep": "सप्तरी",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39709",
            "districtId": 23,
            "districtName": "Sindhuli",
            "stateId": 3,
            "districtNameNep": "सिन्धुली",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3970a",
            "districtId": 24,
            "districtName": "Ramechhap",
            "stateId": 3,
            "districtNameNep": "रामेछाप",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3970b",
            "districtId": 25,
            "districtName": "Dolakha",
            "stateId": 3,
            "districtNameNep": "दोलखा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3970c",
            "districtId": 26,
            "districtName": "Bhaktapur",
            "stateId": 3,
            "districtNameNep": "भक्तपुर",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3970d",
            "districtId": 27,
            "districtName": "Dhading",
            "stateId": 3,
            "districtNameNep": "धादिङ",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3970e",
            "districtId": 28,
            "districtName": "Kathmandu",
            "stateId": 3,
            "districtNameNep": "काठमाडौँ",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3970f",
            "districtId": 29,
            "districtName": "Kavrepalanchok",
            "stateId": 3,
            "districtNameNep": "काभ्रेपलान्चोक",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39710",
            "districtId": 30,
            "districtName": "Lalitpur",
            "stateId": 3,
            "districtNameNep": "ललितपुर",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39711",
            "districtId": 31,
            "districtName": "Nuwakot",
            "stateId": 3,
            "districtNameNep": "नुवाकोट",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39712",
            "districtId": 32,
            "districtName": "Rasuwa",
            "stateId": 3,
            "districtNameNep": "रसुवा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39713",
            "districtId": 33,
            "districtName": "Sindhupalchok",
            "stateId": 3,
            "districtNameNep": "सिन्धुपाल्चोक",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39714",
            "districtId": 34,
            "districtName": "Chitwan",
            "stateId": 3,
            "districtNameNep": "चितवन",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39715",
            "districtId": 35,
            "districtName": "Makwanpur",
            "stateId": 3,
            "districtNameNep": "मकवानपुर",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39716",
            "districtId": 36,
            "districtName": "Baglung",
            "stateId": 4,
            "districtNameNep": "बागलुङ",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39717",
            "districtId": 37,
            "districtName": "Gorkha",
            "stateId": 4,
            "districtNameNep": "गोरखा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39718",
            "districtId": 38,
            "districtName": "Kaski",
            "stateId": 4,
            "districtNameNep": "कास्की",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39719",
            "districtId": 39,
            "districtName": "Lamjung",
            "stateId": 4,
            "districtNameNep": "लमजुङ",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3971a",
            "districtId": 40,
            "districtName": "Manang",
            "stateId": 4,
            "districtNameNep": "मनाङ",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3971b",
            "districtId": 41,
            "districtName": "Mustang",
            "stateId": 4,
            "districtNameNep": "मुस्ताङ",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3971c",
            "districtId": 42,
            "districtName": "Myagdi",
            "stateId": 4,
            "districtNameNep": "म्याग्दी",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3971d",
            "districtId": 43,
            "districtName": "Nawalpur",
            "stateId": 4,
            "districtNameNep": "नवलपुर",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3971e",
            "districtId": 44,
            "districtName": "Parbat",
            "stateId": 4,
            "districtNameNep": "पर्वत",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3971f",
            "districtId": 45,
            "districtName": "Syangja",
            "stateId": 4,
            "districtNameNep": "स्याङग्जा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39720",
            "districtId": 46,
            "districtName": "Tanahun",
            "stateId": 4,
            "districtNameNep": "तनहुँ",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39721",
            "districtId": 47,
            "districtName": "Kapilvastu",
            "stateId": 5,
            "districtNameNep": "कपिलवस्तु",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39722",
            "districtId": 48,
            "districtName": "Parasi",
            "stateId": 5,
            "districtNameNep": "परासी",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39723",
            "districtId": 49,
            "districtName": "Rupandehi",
            "stateId": 5,
            "districtNameNep": "रुपन्देही",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39724",
            "districtId": 50,
            "districtName": "Arghakhanchi",
            "stateId": 5,
            "districtNameNep": "अर्घाखाँची",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39725",
            "districtId": 51,
            "districtName": "Gulmi",
            "stateId": 5,
            "districtNameNep": "गुल्मी",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39726",
            "districtId": 52,
            "districtName": "Palpa",
            "stateId": 5,
            "districtNameNep": "पाल्पा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39727",
            "districtId": 53,
            "districtName": "Dang Deukhuri",
            "stateId": 5,
            "districtNameNep": "दाङ देउखुरी",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39728",
            "districtId": 54,
            "districtName": "Pyuthan",
            "stateId": 5,
            "districtNameNep": "प्युठान",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39729",
            "districtId": 55,
            "districtName": "Rolpa",
            "stateId": 5,
            "districtNameNep": "रोल्पा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3972a",
            "districtId": 56,
            "districtName": "Eastern Rukum",
            "stateId": 5,
            "districtNameNep": "पूर्वी रूकुम",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3972b",
            "districtId": 57,
            "districtName": "Banke",
            "stateId": 5,
            "districtNameNep": "बाँके",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3972c",
            "districtId": 58,
            "districtName": "Bardiya",
            "stateId": 5,
            "districtNameNep": "बर्दिया",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3972d",
            "districtId": 59,
            "districtName": "Western Rukum",
            "stateId": 6,
            "districtNameNep": "पश्चिमी रूकुम",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3972e",
            "districtId": 60,
            "districtName": "Salyan",
            "stateId": 6,
            "districtNameNep": "सल्यान",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3972f",
            "districtId": 61,
            "districtName": "Dolpa",
            "stateId": 6,
            "districtNameNep": "डोल्पा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39730",
            "districtId": 62,
            "districtName": "Humla",
            "stateId": 6,
            "districtNameNep": "हुम्ला",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39731",
            "districtId": 63,
            "districtName": "Jumla",
            "stateId": 6,
            "districtNameNep": "जुम्ला",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39732",
            "districtId": 64,
            "districtName": "Kalikot",
            "stateId": 6,
            "districtNameNep": "कालिकोट",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39733",
            "districtId": 65,
            "districtName": "Mugu",
            "stateId": 6,
            "districtNameNep": "मुगु",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39734",
            "districtId": 66,
            "districtName": "Surkhet",
            "stateId": 6,
            "districtNameNep": "सुर्खेत",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39735",
            "districtId": 67,
            "districtName": "Dailekh",
            "stateId": 6,
            "districtNameNep": "दैलेख",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39736",
            "districtId": 68,
            "districtName": "Jajarkot",
            "stateId": 6,
            "districtNameNep": "जाजरकोट",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39737",
            "districtId": 69,
            "districtName": "Kailali",
            "stateId": 7,
            "districtNameNep": "कैलाली",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39738",
            "districtId": 70,
            "districtName": "Achham",
            "stateId": 7,
            "districtNameNep": "अछाम",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e39739",
            "districtId": 71,
            "districtName": "Doti",
            "stateId": 7,
            "districtNameNep": "डोटी",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3973a",
            "districtId": 72,
            "districtName": "Bajhang",
            "stateId": 7,
            "districtNameNep": "बझाङ",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3973b",
            "districtId": 73,
            "districtName": "Bajura",
            "stateId": 7,
            "districtNameNep": "बाजुरा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3973c",
            "districtId": 74,
            "districtName": "Kanchanpur",
            "stateId": 7,
            "districtNameNep": "कंचनपुर",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3973d",
            "districtId": 75,
            "districtName": "Dadeldhura",
            "stateId": 7,
            "districtNameNep": "डडेलधुरा",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3973e",
            "districtId": 76,
            "districtName": "Baitadi",
            "stateId": 7,
            "districtNameNep": "बैतडी",
            "districtCode": null,
            "state": null
        },
        {
            "_id": "65b6e525734d600f43e3973f",
            "districtId": 77,
            "districtName": "Darchula",
            "stateId": 7,
            "districtNameNep": "दार्चुला",
            "districtCode": null,
            "state": null
        }
    ]
    try {
      const response =  await District.insertMany(data);
      return res.status(200).json(new ApiResponse(response))
    } catch (error) {
        
    }
} 

export async function InsertPalika (req,res){
    const data = [
        {
            "_id": "65b6e56e08bf250197cb5836",
            "palikaId": 1,
            "districtId": 1,
            "palikaName": "Bhojpur Municipality",
            "palikaNameNep": "भोजपुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5837",
            "palikaId": 2,
            "districtId": 1,
            "palikaName": "Shadanand Municipality",
            "palikaNameNep": "षडानन्द नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5838",
            "palikaId": 3,
            "districtId": 1,
            "palikaName": "Aamchok Rural Municipality",
            "palikaNameNep": "आमचोक गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5839",
            "palikaId": 4,
            "districtId": 1,
            "palikaName": "Tyamke Maiyum",
            "palikaNameNep": "ट्याम्केमैयुम गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb583a",
            "palikaId": 5,
            "districtId": 1,
            "palikaName": "Arun Rural Municipality",
            "palikaNameNep": "अरुण गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb583b",
            "palikaId": 6,
            "districtId": 1,
            "palikaName": "Pauwadungma Rural Municipality",
            "palikaNameNep": "पौवादुङमा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb583c",
            "palikaId": 7,
            "districtId": 1,
            "palikaName": "Salpasilichho Rural Municipality",
            "palikaNameNep": "साल्पासिलिछो गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb583d",
            "palikaId": 8,
            "districtId": 1,
            "palikaName": "Hatuwagadhi Rural Municipality",
            "palikaNameNep": "हतुवागढी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb583e",
            "palikaId": 9,
            "districtId": 1,
            "palikaName": "Ramprasad Rai Rural Municipality",
            "palikaNameNep": "रामप्रसाद राई गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb583f",
            "palikaId": 10,
            "districtId": 2,
            "palikaName": "Paakhribas Municipality",
            "palikaNameNep": "पाख्रिबास नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5840",
            "palikaId": 11,
            "districtId": 2,
            "palikaName": "Dhankuta Municipality",
            "palikaNameNep": "धनकुटा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5841",
            "palikaId": 12,
            "districtId": 2,
            "palikaName": "Mahalaxmi Municipality",
            "palikaNameNep": "महालक्ष्मी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5842",
            "palikaId": 13,
            "districtId": 2,
            "palikaName": "Sangurigadhi Rural Municipality",
            "palikaNameNep": "सागुरीगढी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5843",
            "palikaId": 14,
            "districtId": 2,
            "palikaName": "Sahidbhumi Rural Municipality",
            "palikaNameNep": "सहीदभूमि गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5844",
            "palikaId": 15,
            "districtId": 2,
            "palikaName": "Chhathar Jorpati Rural Municipality",
            "palikaNameNep": "छथर जोरपाटी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5845",
            "palikaId": 16,
            "districtId": 2,
            "palikaName": "Chaubise Rural Municipality",
            "palikaNameNep": "चौविसे गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5846",
            "palikaId": 17,
            "districtId": 3,
            "palikaName": "Iilam Municipality",
            "palikaNameNep": "ईलाम नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5847",
            "palikaId": 18,
            "districtId": 3,
            "palikaName": "Deumaai Municipality",
            "palikaNameNep": "देउमाई नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5848",
            "palikaId": 19,
            "districtId": 3,
            "palikaName": "Maai Municipality",
            "palikaNameNep": "माई नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5849",
            "palikaId": 20,
            "districtId": 3,
            "palikaName": "Suryodaya Municipality",
            "palikaNameNep": "सूर्योदय नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb584a",
            "palikaId": 21,
            "districtId": 3,
            "palikaName": "Phakphokthum Rural Municipality",
            "palikaNameNep": "फाकफोकथुम गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb584b",
            "palikaId": 22,
            "districtId": 3,
            "palikaName": "Mai Jogmai Rural Municipality",
            "palikaNameNep": "माईजोगमाई गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb584c",
            "palikaId": 23,
            "districtId": 3,
            "palikaName": "Chulachuli Rural Municipality",
            "palikaNameNep": "चुलाचुली गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb584d",
            "palikaId": 24,
            "districtId": 3,
            "palikaName": "Rong Rural Municipality",
            "palikaNameNep": "रोङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb584e",
            "palikaId": 25,
            "districtId": 3,
            "palikaName": "Mangsebung Rural Municipality",
            "palikaNameNep": "माङसेबुङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb584f",
            "palikaId": 26,
            "districtId": 3,
            "palikaName": "Sandakpur Rural Municipality",
            "palikaNameNep": "सन्दकपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5850",
            "palikaId": 27,
            "districtId": 4,
            "palikaName": "Mechinagar Municipality",
            "palikaNameNep": "मेचीनगर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5851",
            "palikaId": 28,
            "districtId": 4,
            "palikaName": "Damak Municipality",
            "palikaNameNep": "दमक नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5852",
            "palikaId": 29,
            "districtId": 4,
            "palikaName": "Kankai Municipality",
            "palikaNameNep": "कन्काई नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5853",
            "palikaId": 30,
            "districtId": 4,
            "palikaName": "Bhadrapur Municipality",
            "palikaNameNep": "भद्रपुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5854",
            "palikaId": 31,
            "districtId": 4,
            "palikaName": "Arjundhara Municipality",
            "palikaNameNep": "अर्जुनधारा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5855",
            "palikaId": 32,
            "districtId": 4,
            "palikaName": "Shivasatakshi Municipality",
            "palikaNameNep": "शिवसताक्षी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5856",
            "palikaId": 33,
            "districtId": 4,
            "palikaName": "Gauraadaha Municipality",
            "palikaNameNep": "गौरादह नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5857",
            "palikaId": 34,
            "districtId": 4,
            "palikaName": "Birtamod Municipality",
            "palikaNameNep": "विर्तामोड नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5858",
            "palikaId": 35,
            "districtId": 4,
            "palikaName": "Kamal Rural Municipality",
            "palikaNameNep": "कमल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5859",
            "palikaId": 36,
            "districtId": 4,
            "palikaName": "Buddha Shanti Rural Municipality",
            "palikaNameNep": "बुद्धशान्ति गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb585a",
            "palikaId": 37,
            "districtId": 4,
            "palikaName": "Kachankawal Rural Municipality",
            "palikaNameNep": "कचनकवल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb585b",
            "palikaId": 38,
            "districtId": 4,
            "palikaName": "Jhapa Rural Municipality",
            "palikaNameNep": "झापा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb585c",
            "palikaId": 39,
            "districtId": 4,
            "palikaName": "Barhadashi Rural Municipality",
            "palikaNameNep": "बाह्रदशी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb585d",
            "palikaId": 40,
            "districtId": 4,
            "palikaName": "Gaurigunj Rural Municipality",
            "palikaNameNep": "गौरीगंज गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb585e",
            "palikaId": 41,
            "districtId": 4,
            "palikaName": "Haldibari Rural Municipality",
            "palikaNameNep": "हल्दीवारी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb585f",
            "palikaId": 42,
            "districtId": 5,
            "palikaName": "Halesituwanchung Municipality",
            "palikaNameNep": "हलेसीतुवांचुंग नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5860",
            "palikaId": 43,
            "districtId": 5,
            "palikaName": "Rupakot Majhuwagadhi Municipality",
            "palikaNameNep": "रुपाकोट मझुवागढ़ी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5861",
            "palikaId": 44,
            "districtId": 5,
            "palikaName": "Khotehang Rural Municipality",
            "palikaNameNep": "खोटेहाङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5862",
            "palikaId": 45,
            "districtId": 5,
            "palikaName": "Diprung Rural Municipality",
            "palikaNameNep": "दिप्रुङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5863",
            "palikaId": 46,
            "districtId": 5,
            "palikaName": "Aiselukharka Rural Municipality",
            "palikaNameNep": "ऐसेलुखर्क गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5864",
            "palikaId": 47,
            "districtId": 5,
            "palikaName": "Jantedhunga Rural Municipality",
            "palikaNameNep": "जन्तेढुंगा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5865",
            "palikaId": 48,
            "districtId": 5,
            "palikaName": "Kepilasgadhi Rural Municipality",
            "palikaNameNep": "केपिलासगढी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5866",
            "palikaId": 49,
            "districtId": 5,
            "palikaName": "Barahpokhari Rural Municipality",
            "palikaNameNep": "बराहपोखरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5867",
            "palikaId": 50,
            "districtId": 5,
            "palikaName": "Lamidanda Rural Municipality",
            "palikaNameNep": "लामीडाँडा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5868",
            "palikaId": 51,
            "districtId": 5,
            "palikaName": "Sakela Rural Municipality",
            "palikaNameNep": "साकेला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5869",
            "palikaId": 52,
            "districtId": 6,
            "palikaName": "Biratnagar Sub-Metropolitan",
            "palikaNameNep": "विराटनगर उपमहानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb586a",
            "palikaId": 53,
            "districtId": 6,
            "palikaName": "Belbari Municipality",
            "palikaNameNep": "बेलबारी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb586b",
            "palikaId": 54,
            "districtId": 6,
            "palikaName": "Letang Municipality",
            "palikaNameNep": "लेटांग नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb586c",
            "palikaId": 55,
            "districtId": 6,
            "palikaName": "Pathari Sanischari Municipality",
            "palikaNameNep": "पथरी शनिश्चरे नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb586d",
            "palikaId": 56,
            "districtId": 6,
            "palikaName": "Rangeli Municipality",
            "palikaNameNep": "रंगेली नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb586e",
            "palikaId": 57,
            "districtId": 6,
            "palikaName": "Ratuwamaai Municipality",
            "palikaNameNep": "रतुवामाई नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb586f",
            "palikaId": 58,
            "districtId": 6,
            "palikaName": "Sunwarsi Municipality",
            "palikaNameNep": "सुनवर्षी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5870",
            "palikaId": 59,
            "districtId": 6,
            "palikaName": "Urlabari Municipality",
            "palikaNameNep": "उर्लाबारी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5871",
            "palikaId": 60,
            "districtId": 6,
            "palikaName": "Sundarharaicha Municipality",
            "palikaNameNep": "सुन्दरहरैचा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5872",
            "palikaId": 61,
            "districtId": 6,
            "palikaName": "Jahada Rural Municipality",
            "palikaNameNep": "जहदा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5873",
            "palikaId": 62,
            "districtId": 6,
            "palikaName": "Budi Ganga Rural Municipality",
            "palikaNameNep": "बुढीगंगा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5874",
            "palikaId": 63,
            "districtId": 6,
            "palikaName": "Katahari Rural Municipality",
            "palikaNameNep": "कटहरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5875",
            "palikaId": 64,
            "districtId": 6,
            "palikaName": "Dhanpalthan Rural Municipality",
            "palikaNameNep": "धनपालथान गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5876",
            "palikaId": 65,
            "districtId": 6,
            "palikaName": "Kanepokhari Rural Municipality",
            "palikaNameNep": "कानेपोखरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5877",
            "palikaId": 66,
            "districtId": 6,
            "palikaName": "Gramthan Rural Municipality",
            "palikaNameNep": "ग्रामथान गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5878",
            "palikaId": 67,
            "districtId": 6,
            "palikaName": "Kerabari Rural Municipality",
            "palikaNameNep": "केरावारी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5879",
            "palikaId": 68,
            "districtId": 6,
            "palikaName": "Miklajung Rural Municipality",
            "palikaNameNep": "मिक्लाजुङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb587a",
            "palikaId": 69,
            "districtId": 7,
            "palikaName": "Siddhicharan Municipality",
            "palikaNameNep": "सिद्दिचरण नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb587b",
            "palikaId": 70,
            "districtId": 7,
            "palikaName": "Manebhanjyang Rural Municipality",
            "palikaNameNep": "मानेभञ्ज्याङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb587c",
            "palikaId": 71,
            "districtId": 7,
            "palikaName": "Champadevi Rural Municipality",
            "palikaNameNep": "चम्पादेवी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb587d",
            "palikaId": 72,
            "districtId": 7,
            "palikaName": "Sunkoshi Rural Municipality",
            "palikaNameNep": "सुनकोशी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb587e",
            "palikaId": 73,
            "districtId": 7,
            "palikaName": "Molung Rural Municipality",
            "palikaNameNep": "मोलुङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb587f",
            "palikaId": 74,
            "districtId": 7,
            "palikaName": "Chisankhugadhi Rural Municipality",
            "palikaNameNep": "चिसंखुगढी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5880",
            "palikaId": 75,
            "districtId": 7,
            "palikaName": "Khiji Demba Rural Municipality",
            "palikaNameNep": "खिजिदेम्बा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5881",
            "palikaId": 76,
            "districtId": 7,
            "palikaName": "Likhu Rural Municipality",
            "palikaNameNep": "लिखु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5882",
            "palikaId": 77,
            "districtId": 8,
            "palikaName": "Fidim Municipality",
            "palikaNameNep": "फिदिम नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5883",
            "palikaId": 78,
            "districtId": 8,
            "palikaName": "Miklajung Rural Municipality",
            "palikaNameNep": "मिक्लाजुङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5884",
            "palikaId": 79,
            "districtId": 8,
            "palikaName": "Phalgunanda Rural Municipality",
            "palikaNameNep": "फाल्गुनन्द गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5885",
            "palikaId": 80,
            "districtId": 8,
            "palikaName": "Hilihang Rural Municipality",
            "palikaNameNep": "हिलिहाङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5886",
            "palikaId": 81,
            "districtId": 8,
            "palikaName": "Phalelung Rural Municipality",
            "palikaNameNep": "फालेलुङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5887",
            "palikaId": 82,
            "districtId": 8,
            "palikaName": "Yangwarak Rural Municipality",
            "palikaNameNep": "याङवरक गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5888",
            "palikaId": 83,
            "districtId": 8,
            "palikaName": "Kummayak Rural Municipality",
            "palikaNameNep": "कुम्मायक गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5889",
            "palikaId": 84,
            "districtId": 8,
            "palikaName": "Tumbewa Rural Municipality",
            "palikaNameNep": "तुम्बेवा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb588a",
            "palikaId": 85,
            "districtId": 9,
            "palikaName": "Chainpur Municipality",
            "palikaNameNep": "चैनपुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb588b",
            "palikaId": 86,
            "districtId": 9,
            "palikaName": "Dharmadevi Municipality",
            "palikaNameNep": "धर्मदेवी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb588c",
            "palikaId": 87,
            "districtId": 9,
            "palikaName": "Khandwari Municipality",
            "palikaNameNep": "खांदवारी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb588d",
            "palikaId": 88,
            "districtId": 9,
            "palikaName": "Maadi Municipality",
            "palikaNameNep": "मादी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb588e",
            "palikaId": 89,
            "districtId": 9,
            "palikaName": "Panchkhapan Municipality",
            "palikaNameNep": "पाँचखपन नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb588f",
            "palikaId": 90,
            "districtId": 9,
            "palikaName": "Makalu Rural Municipality",
            "palikaNameNep": "मकालु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5890",
            "palikaId": 91,
            "districtId": 9,
            "palikaName": "Silichong Rural Municipality",
            "palikaNameNep": "सिलीचोङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5891",
            "palikaId": 92,
            "districtId": 9,
            "palikaName": "Sabhapokhari Rural Municipality",
            "palikaNameNep": "सभापोखरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5892",
            "palikaId": 93,
            "districtId": 9,
            "palikaName": "Chichila Rural Municipality",
            "palikaNameNep": "चिचिला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5893",
            "palikaId": 94,
            "districtId": 9,
            "palikaName": "Bhot Khola Rural Municipality",
            "palikaNameNep": "भोटखोला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5894",
            "palikaId": 95,
            "districtId": 10,
            "palikaName": "Solududhkunda Municipality",
            "palikaNameNep": "सोलुदुधकुण्ड नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5895",
            "palikaId": 96,
            "districtId": 10,
            "palikaName": "Dudhakaushika Rural Municipality",
            "palikaNameNep": "दुधकौशिका गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5896",
            "palikaId": 97,
            "districtId": 10,
            "palikaName": "Necha Salyan Rural Municipality",
            "palikaNameNep": "नेचासल्यान गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5897",
            "palikaId": 98,
            "districtId": 10,
            "palikaName": "Dudhkoshi Rural Municipality",
            "palikaNameNep": "दुधकोशी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5898",
            "palikaId": 99,
            "districtId": 10,
            "palikaName": "Maha Kulung Rural Municipality",
            "palikaNameNep": "महाकुलुङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5899",
            "palikaId": 100,
            "districtId": 10,
            "palikaName": "Sotang Rural Municipality",
            "palikaNameNep": "सोताङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb589a",
            "palikaId": 101,
            "districtId": 10,
            "palikaName": "Khumbu Pasang Lhamu Rural Municipality",
            "palikaNameNep": "खुम्बु पासाङल्हमु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb589b",
            "palikaId": 102,
            "districtId": 10,
            "palikaName": "Likhu Pike Rural Municipality",
            "palikaNameNep": "लिखुपिके गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb589c",
            "palikaId": 103,
            "districtId": 11,
            "palikaName": "Iitahari Sub-Metropolitan",
            "palikaNameNep": "ईटहरी उपमहानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb589d",
            "palikaId": 104,
            "districtId": 11,
            "palikaName": "Dharan Sub-Metropolitan",
            "palikaNameNep": "धरान उपमहानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb589e",
            "palikaId": 105,
            "districtId": 11,
            "palikaName": "Inaruwa Municipality",
            "palikaNameNep": "इनरुवा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb589f",
            "palikaId": 106,
            "districtId": 11,
            "palikaName": "Duhabi Municipality",
            "palikaNameNep": "दुहवी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58a0",
            "palikaId": 107,
            "districtId": 11,
            "palikaName": "Ramdhuni Municipality",
            "palikaNameNep": "रामधुनी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58a1",
            "palikaId": 108,
            "districtId": 11,
            "palikaName": "Baraha Municipality",
            "palikaNameNep": "बराह नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58a2",
            "palikaId": 109,
            "districtId": 11,
            "palikaName": "Koshi Rural Municipality",
            "palikaNameNep": "कोशी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58a3",
            "palikaId": 110,
            "districtId": 11,
            "palikaName": "Harinagara Rural Municipality",
            "palikaNameNep": "हरिनगरा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58a4",
            "palikaId": 111,
            "districtId": 11,
            "palikaName": "Bhokraha Rural Municipality",
            "palikaNameNep": "भोक्राहा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58a5",
            "palikaId": 112,
            "districtId": 11,
            "palikaName": "Dewanganj Rural Municipality",
            "palikaNameNep": "देवानगन्ज गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58a6",
            "palikaId": 113,
            "districtId": 11,
            "palikaName": "Gadhi Rural Municipality",
            "palikaNameNep": "गढी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58a7",
            "palikaId": 114,
            "districtId": 11,
            "palikaName": "Barju Rural Municipality",
            "palikaNameNep": "बर्जु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58a8",
            "palikaId": 115,
            "districtId": 12,
            "palikaName": "Fungling Municipality",
            "palikaNameNep": "फुंलिंग नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58a9",
            "palikaId": 116,
            "districtId": 12,
            "palikaName": "Sirijangha Rural Municipality",
            "palikaNameNep": "सिरीजङ्घा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58aa",
            "palikaId": 117,
            "districtId": 12,
            "palikaName": "Aathrai Triveni Rural Municipality",
            "palikaNameNep": "आठराई त्रिवेणी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58ab",
            "palikaId": 118,
            "districtId": 12,
            "palikaName": "Pathibhara Yangwarak Rural Municipality",
            "palikaNameNep": "पाथीभरा याङवरक गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58ac",
            "palikaId": 119,
            "districtId": 12,
            "palikaName": "Meringden Rural Municipality",
            "palikaNameNep": "मेरिङदेन गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58ad",
            "palikaId": 120,
            "districtId": 12,
            "palikaName": "Sidingwa Rural Municipality",
            "palikaNameNep": "सिदिङ्वा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58ae",
            "palikaId": 121,
            "districtId": 12,
            "palikaName": "Phaktanglung Rural Municipality",
            "palikaNameNep": "फक्ताङलुङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58af",
            "palikaId": 122,
            "districtId": 12,
            "palikaName": "Maiwa Khola Rural Municipality",
            "palikaNameNep": "मैवाखोला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58b0",
            "palikaId": 123,
            "districtId": 12,
            "palikaName": "Mikwa Khola Rural Municipality",
            "palikaNameNep": "मिक्वाखोला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58b1",
            "palikaId": 124,
            "districtId": 13,
            "palikaName": "Myanglung Municipality",
            "palikaNameNep": "म्यांगलुंग नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58b2",
            "palikaId": 125,
            "districtId": 13,
            "palikaName": "Laligurans Municipality",
            "palikaNameNep": "लालीगुराँस नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58b3",
            "palikaId": 126,
            "districtId": 13,
            "palikaName": "Aathrai Rural Municipality",
            "palikaNameNep": "आठराई गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58b4",
            "palikaId": 127,
            "districtId": 13,
            "palikaName": "Phedap Rural Municipality",
            "palikaNameNep": "फेदाप गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58b5",
            "palikaId": 128,
            "districtId": 13,
            "palikaName": "Chhathar Rural Municipality",
            "palikaNameNep": "छथर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58b6",
            "palikaId": 129,
            "districtId": 13,
            "palikaName": "Menchayayem Rural Municipality",
            "palikaNameNep": "मेन्छयायेम गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58b7",
            "palikaId": 130,
            "districtId": 14,
            "palikaName": "Katari Municipality",
            "palikaNameNep": "कटारी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58b8",
            "palikaId": 131,
            "districtId": 14,
            "palikaName": "Chaudandigadhi Municipality",
            "palikaNameNep": "चौदण्डीगढी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58b9",
            "palikaId": 132,
            "districtId": 14,
            "palikaName": "Triyuga Municipality",
            "palikaNameNep": "त्रियुगा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58ba",
            "palikaId": 133,
            "districtId": 14,
            "palikaName": "Belakaa Municipality",
            "palikaNameNep": "वेलका नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58bb",
            "palikaId": 134,
            "districtId": 14,
            "palikaName": "Udayapurgadhi Rural Municipality",
            "palikaNameNep": "उदयपुरगढी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58bc",
            "palikaId": 135,
            "districtId": 14,
            "palikaName": "Rautamai Rural Municipality",
            "palikaNameNep": "रौतामाई गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58bd",
            "palikaId": 136,
            "districtId": 14,
            "palikaName": "Tapli Rural Municipality",
            "palikaNameNep": "ताप्ली गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58be",
            "palikaId": 137,
            "districtId": 14,
            "palikaName": "Limchungbung Rural Municipality",
            "palikaNameNep": "लिम्चुङबुङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58bf",
            "palikaId": 138,
            "districtId": 15,
            "palikaName": "Birganj Sub-Metropolitan",
            "palikaNameNep": "बिरगंज उपमहानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58c0",
            "palikaId": 139,
            "districtId": 15,
            "palikaName": "Pokhariya Municipality",
            "palikaNameNep": "पोखरिया नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58c1",
            "palikaId": 140,
            "districtId": 15,
            "palikaName": "Sakhuwa Prasauni Rural Municipality",
            "palikaNameNep": "सखुवा प्रसौनी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58c2",
            "palikaId": 141,
            "districtId": 15,
            "palikaName": "Jagarnathpur Rural Municipality",
            "palikaNameNep": "जगरनाथपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58c3",
            "palikaId": 142,
            "districtId": 15,
            "palikaName": "Chhipaharmai Rural Municipality",
            "palikaNameNep": "छिपहरमाई गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58c4",
            "palikaId": 143,
            "districtId": 15,
            "palikaName": "Bindabasini Rural Municipality",
            "palikaNameNep": "बिन्दबासिनी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58c5",
            "palikaId": 144,
            "districtId": 15,
            "palikaName": "Paterwa Sugauli Rural Municipality",
            "palikaNameNep": "पटेर्वा सुगौली गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58c6",
            "palikaId": 145,
            "districtId": 15,
            "palikaName": "Jira Bhavani Rural Municipality",
            "palikaNameNep": "जिरा भवानी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58c7",
            "palikaId": 146,
            "districtId": 15,
            "palikaName": "Kalikamai Rural Municipality",
            "palikaNameNep": "कालिकामाई गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58c8",
            "palikaId": 147,
            "districtId": 15,
            "palikaName": "Pakaha Mainpur Rural Municipality",
            "palikaNameNep": "पकाहा मैनपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58c9",
            "palikaId": 148,
            "districtId": 15,
            "palikaName": "Thori Rural Municipality",
            "palikaNameNep": "ठोरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58ca",
            "palikaId": 149,
            "districtId": 15,
            "palikaName": "Dhobini Rural Municipality",
            "palikaNameNep": "धोबीनी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58cb",
            "palikaId": 150,
            "districtId": 16,
            "palikaName": "Kalaiya Sub-Metropolitan",
            "palikaNameNep": "कलैया उपमहानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58cc",
            "palikaId": 151,
            "districtId": 16,
            "palikaName": "Jitpursimara Sub-Metropolitan",
            "palikaNameNep": "जितपुरसिमरा उपमहानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58cd",
            "palikaId": 152,
            "districtId": 16,
            "palikaName": "Kolhavi Municipality",
            "palikaNameNep": "कोल्हवी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58ce",
            "palikaId": 153,
            "districtId": 16,
            "palikaName": "Nijgadh Municipality",
            "palikaNameNep": "निजगढ नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58cf",
            "palikaId": 154,
            "districtId": 16,
            "palikaName": "Mahagadhimaai Municipality",
            "palikaNameNep": "महागढ़ीमाई नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58d0",
            "palikaId": 155,
            "districtId": 16,
            "palikaName": "Simraungadh Municipality",
            "palikaNameNep": "सिम्रौनगढ नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58d1",
            "palikaId": 156,
            "districtId": 16,
            "palikaName": "Subarna Rural Municipality",
            "palikaNameNep": "सुवर्ण  गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58d2",
            "palikaId": 157,
            "districtId": 16,
            "palikaName": "Adarsha Kotwal Rural Municipality",
            "palikaNameNep": "आदर्श कोतवाल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58d3",
            "palikaId": 158,
            "districtId": 16,
            "palikaName": "Baragadhi Rural Municipality",
            "palikaNameNep": "बारागढी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58d4",
            "palikaId": 159,
            "districtId": 16,
            "palikaName": "Pheta Rural Municipality",
            "palikaNameNep": "फेटा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58d5",
            "palikaId": 160,
            "districtId": 16,
            "palikaName": "Karaiyamai Rural Municipality",
            "palikaNameNep": "करैयामाई गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58d6",
            "palikaId": 161,
            "districtId": 16,
            "palikaName": "Prasauni Rural Municipality",
            "palikaNameNep": "प्रसौनी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58d7",
            "palikaId": 162,
            "districtId": 16,
            "palikaName": "Bishrampur Rural Municipality",
            "palikaNameNep": "विश्रामपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58d8",
            "palikaId": 163,
            "districtId": 16,
            "palikaName": "Devtal Rural Municipality",
            "palikaNameNep": "देवताल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58d9",
            "palikaId": 164,
            "districtId": 16,
            "palikaName": "Parawanipur Rural Municipality",
            "palikaNameNep": "परवानीपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58da",
            "palikaId": 165,
            "districtId": 17,
            "palikaName": "Chandrapur Municipality",
            "palikaNameNep": "चंद्रपुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58db",
            "palikaId": 166,
            "districtId": 17,
            "palikaName": "Garuda Municipality",
            "palikaNameNep": "गरुडा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58dc",
            "palikaId": 167,
            "districtId": 17,
            "palikaName": "Gaur Municipality",
            "palikaNameNep": "गौर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58dd",
            "palikaId": 168,
            "districtId": 17,
            "palikaName": "Rajpur Rural Municipality",
            "palikaNameNep": "राजपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58de",
            "palikaId": 169,
            "districtId": 17,
            "palikaName": "Paroha Rural Municipality",
            "palikaNameNep": "परोहा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58df",
            "palikaId": 170,
            "districtId": 17,
            "palikaName": "Iishnaath Rural Municipality",
            "palikaNameNep": "ईशनाथ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58e0",
            "palikaId": 171,
            "districtId": 17,
            "palikaName": "Fatuwabijayapur Rural Municipality",
            "palikaNameNep": "फतुवाबिजयपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58e1",
            "palikaId": 172,
            "districtId": 17,
            "palikaName": "Maulapur Rural Municipality",
            "palikaNameNep": "मौलापुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58e2",
            "palikaId": 173,
            "districtId": 17,
            "palikaName": "Madhav Narayan Rural Municipality",
            "palikaNameNep": "माधव नारायण गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58e3",
            "palikaId": 174,
            "districtId": 17,
            "palikaName": "Katahariya Rural Municipality",
            "palikaNameNep": "कटहरिया गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58e4",
            "palikaId": 175,
            "districtId": 17,
            "palikaName": "Gujara Rural Municipality",
            "palikaNameNep": "गुजरा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58e5",
            "palikaId": 176,
            "districtId": 17,
            "palikaName": "Gadhimaai Rural Municipality",
            "palikaNameNep": "गढीमाई गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58e6",
            "palikaId": 177,
            "districtId": 17,
            "palikaName": "Durga Bhagwati Rural Municipality",
            "palikaNameNep": "दुर्गा भगवती गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58e7",
            "palikaId": 178,
            "districtId": 17,
            "palikaName": "Devahi Gonahi Rural Municipality",
            "palikaNameNep": "देवाही गोनाही गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58e8",
            "palikaId": 179,
            "districtId": 17,
            "palikaName": "Brindavan Rural Municipality",
            "palikaNameNep": "वृन्दावन गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58e9",
            "palikaId": 180,
            "districtId": 17,
            "palikaName": "Baudhimaai Rural Municipality",
            "palikaNameNep": "बौधिमाई गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58ea",
            "palikaId": 181,
            "districtId": 18,
            "palikaName": "Iishworpur Municipality",
            "palikaNameNep": "ईश्वोरपुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58eb",
            "palikaId": 182,
            "districtId": 18,
            "palikaName": "Malangawa Municipality",
            "palikaNameNep": "मलंगवा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58ec",
            "palikaId": 183,
            "districtId": 18,
            "palikaName": "Lalbandi Municipality",
            "palikaNameNep": "लालबन्दी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58ed",
            "palikaId": 184,
            "districtId": 18,
            "palikaName": "Haripur Municipality",
            "palikaNameNep": "हरिपुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58ee",
            "palikaId": 185,
            "districtId": 18,
            "palikaName": "Haripurwa Municipality",
            "palikaNameNep": "हरिपुर्वा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58ef",
            "palikaId": 186,
            "districtId": 18,
            "palikaName": "Harivan Municipality",
            "palikaNameNep": "हरिवन नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58f0",
            "palikaId": 187,
            "districtId": 18,
            "palikaName": "Barhathawa Municipality",
            "palikaNameNep": "बरहथवा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58f1",
            "palikaId": 188,
            "districtId": 18,
            "palikaName": "Balaraa Municipality",
            "palikaNameNep": "बलरा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58f2",
            "palikaId": 189,
            "districtId": 18,
            "palikaName": "Godaita Municipality",
            "palikaNameNep": "गोडेटा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58f3",
            "palikaId": 190,
            "districtId": 18,
            "palikaName": "Bagmati Municipality",
            "palikaNameNep": "बागमती नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58f4",
            "palikaId": 191,
            "districtId": 18,
            "palikaName": "Bishnu Rural Municipality",
            "palikaNameNep": "विष्णु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58f5",
            "palikaId": 192,
            "districtId": 18,
            "palikaName": "Ramnagar Rural Municipality",
            "palikaNameNep": "रामनगर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58f6",
            "palikaId": 193,
            "districtId": 18,
            "palikaName": "Bramhapuri Rural Municipality",
            "palikaNameNep": "ब्रह्मपुरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58f7",
            "palikaId": 194,
            "districtId": 18,
            "palikaName": "Dhankaul Rural Municipality",
            "palikaNameNep": "धनकौल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58f8",
            "palikaId": 195,
            "districtId": 18,
            "palikaName": "Chandranagar Rural Municipality",
            "palikaNameNep": "चन्द्रनगर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58f9",
            "palikaId": 196,
            "districtId": 18,
            "palikaName": "Chakraghatta Rural Municipality",
            "palikaNameNep": "चक्रघट्टा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58fa",
            "palikaId": 197,
            "districtId": 18,
            "palikaName": "Kabilasi Rural Municipality",
            "palikaNameNep": "कविलासी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58fb",
            "palikaId": 198,
            "districtId": 18,
            "palikaName": "Kaudena Rural Municipality",
            "palikaNameNep": "कौडेना गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58fc",
            "palikaId": 199,
            "districtId": 18,
            "palikaName": "Basbariya Rural Municipality",
            "palikaNameNep": "बसबरिया गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58fd",
            "palikaId": 200,
            "districtId": 19,
            "palikaName": "Janakpur Sub-Metropolitan",
            "palikaNameNep": "जनकपुर उपमहानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58fe",
            "palikaId": 201,
            "districtId": 19,
            "palikaName": "Kshireshwornath Municipality",
            "palikaNameNep": "क्षिरेश्वरनाथ नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb58ff",
            "palikaId": 202,
            "districtId": 19,
            "palikaName": "Ganeshman Chaarnath Municipality",
            "palikaNameNep": "गणेशमान चारनाथ नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5900",
            "palikaId": 203,
            "districtId": 19,
            "palikaName": "Dhanushadham Municipality",
            "palikaNameNep": "धनुषाधाम नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5901",
            "palikaId": 204,
            "districtId": 19,
            "palikaName": "Nagarain Municipality",
            "palikaNameNep": "नगराइन नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5902",
            "palikaId": 205,
            "districtId": 19,
            "palikaName": "Vedeha Municipality",
            "palikaNameNep": "विदेह नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5903",
            "palikaId": 206,
            "districtId": 19,
            "palikaName": "Mithila Municipality",
            "palikaNameNep": "मिथिला नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5904",
            "palikaId": 207,
            "districtId": 19,
            "palikaName": "Shahidnagar Municipality",
            "palikaNameNep": "शहिदनगर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5905",
            "palikaId": 208,
            "districtId": 19,
            "palikaName": "Sabailaa Municipality",
            "palikaNameNep": "सबैला नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5906",
            "palikaId": 209,
            "districtId": 19,
            "palikaName": "Aaurahi Rural Municipality",
            "palikaNameNep": "औरही गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5907",
            "palikaId": 210,
            "districtId": 19,
            "palikaName": "Hansapur Rural Municipality",
            "palikaNameNep": "हंसपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5908",
            "palikaId": 211,
            "districtId": 19,
            "palikaName": "Laksminiya Rural Municipality",
            "palikaNameNep": "लक्ष्मीनिया गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5909",
            "palikaId": 212,
            "districtId": 19,
            "palikaName": "Mukhiyapatti Musaharmiya Rural Municipality",
            "palikaNameNep": "मुखियापट्टी मुसहरमिया गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb590a",
            "palikaId": 213,
            "districtId": 19,
            "palikaName": "Mithila Bihari Rural Municipality",
            "palikaNameNep": "मिथिला बिहारी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb590b",
            "palikaId": 214,
            "districtId": 19,
            "palikaName": "Bateshwar Rural Municipality",
            "palikaNameNep": "बटेश्वर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb590c",
            "palikaId": 215,
            "districtId": 19,
            "palikaName": "Janak Nandini Rural Municipality",
            "palikaNameNep": "जनकनन्दिनी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb590d",
            "palikaId": 216,
            "districtId": 19,
            "palikaName": "Kamala Siddhidaatri Rural Municipality",
            "palikaNameNep": "कमला सिद्धिदत्री गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb590e",
            "palikaId": 217,
            "districtId": 19,
            "palikaName": "Dhanauji Rural Municipality",
            "palikaNameNep": "धनौजी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb590f",
            "palikaId": 218,
            "districtId": 20,
            "palikaName": "Lahaan Municipality",
            "palikaNameNep": "लहान नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5910",
            "palikaId": 219,
            "districtId": 20,
            "palikaName": "Dhangadhimaai Municipality",
            "palikaNameNep": "धनगढीमाई नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5911",
            "palikaId": 220,
            "districtId": 20,
            "palikaName": "Siraha Municipality",
            "palikaNameNep": "सिरहा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5912",
            "palikaId": 221,
            "districtId": 20,
            "palikaName": "Golbajar Municipality",
            "palikaNameNep": "गोलबजार नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5913",
            "palikaId": 222,
            "districtId": 20,
            "palikaName": "Michaiyan Municipality",
            "palikaNameNep": "मिचैयाँ नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5914",
            "palikaId": 223,
            "districtId": 20,
            "palikaName": "Kalyanpur Municipality",
            "palikaNameNep": "कल्याणपुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5915",
            "palikaId": 224,
            "districtId": 20,
            "palikaName": "Bhagawanpur Rural Municipality",
            "palikaNameNep": "भगवानपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5916",
            "palikaId": 225,
            "districtId": 20,
            "palikaName": "Aaurahi Rural Municipality",
            "palikaNameNep": "औरही गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5917",
            "palikaId": 226,
            "districtId": 20,
            "palikaName": "Bishnupur Rural Municipality",
            "palikaNameNep": "विष्णुपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5918",
            "palikaId": 227,
            "districtId": 20,
            "palikaName": "Bariyarpatti Rural Municipality",
            "palikaNameNep": "बरियारपट्टी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5919",
            "palikaId": 228,
            "districtId": 20,
            "palikaName": "Laksmipur Patari Rural Municipality",
            "palikaNameNep": "लक्ष्मीपुर पतारी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb591a",
            "palikaId": 229,
            "districtId": 20,
            "palikaName": "Naraha Rural Municipality",
            "palikaNameNep": "नरहा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb591b",
            "palikaId": 230,
            "districtId": 20,
            "palikaName": "Sakhuwanankarkatti Rural Municipality",
            "palikaNameNep": "सखुवानान्कारकट्टी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb591c",
            "palikaId": 231,
            "districtId": 20,
            "palikaName": "Arnama Rural Municipality",
            "palikaNameNep": "अर्नमा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb591d",
            "palikaId": 232,
            "districtId": 20,
            "palikaName": "Nawarajpur Rural Municipality",
            "palikaNameNep": "नवराजपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb591e",
            "palikaId": 233,
            "districtId": 20,
            "palikaName": "Sukhipur Rural Municipality",
            "palikaNameNep": "सुखीपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb591f",
            "palikaId": 234,
            "districtId": 20,
            "palikaName": "Karjanha Rural Municipality",
            "palikaNameNep": "कर्जन्हा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5920",
            "palikaId": 235,
            "districtId": 21,
            "palikaName": "Jaleshwor Municipality",
            "palikaNameNep": "जलेश्वर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5921",
            "palikaId": 236,
            "districtId": 21,
            "palikaName": "Bardibas Municipality",
            "palikaNameNep": "बर्दिबास नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5922",
            "palikaId": 237,
            "districtId": 21,
            "palikaName": "Gaushala Municipality",
            "palikaNameNep": "गौशाला नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5923",
            "palikaId": 238,
            "districtId": 21,
            "palikaName": "Ekdara Rural Municipality",
            "palikaNameNep": "एकडारा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5924",
            "palikaId": 239,
            "districtId": 21,
            "palikaName": "Sonama Rural Municipality",
            "palikaNameNep": "सोनमा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5925",
            "palikaId": 240,
            "districtId": 21,
            "palikaName": "Samsi Rural Municipality",
            "palikaNameNep": "साम्सी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5926",
            "palikaId": 241,
            "districtId": 21,
            "palikaName": "Loharpatti Rural Municipality",
            "palikaNameNep": "लोहारपट्टी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5927",
            "palikaId": 242,
            "districtId": 21,
            "palikaName": "Ramgopalpur Rural Municipality",
            "palikaNameNep": "रामगोपालपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5928",
            "palikaId": 243,
            "districtId": 21,
            "palikaName": "Mahottari Rural Municipality",
            "palikaNameNep": "महोत्तरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5929",
            "palikaId": 244,
            "districtId": 21,
            "palikaName": "Manara Rural Municipality",
            "palikaNameNep": "मनरा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb592a",
            "palikaId": 245,
            "districtId": 21,
            "palikaName": "Matihani Rural Municipality",
            "palikaNameNep": "मटिहानी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb592b",
            "palikaId": 246,
            "districtId": 21,
            "palikaName": "Bhangaha Rural Municipality",
            "palikaNameNep": "भंगाहा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb592c",
            "palikaId": 247,
            "districtId": 21,
            "palikaName": "Balawa Rural Municipality",
            "palikaNameNep": "बलवा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb592d",
            "palikaId": 248,
            "districtId": 21,
            "palikaName": "Pipara Rural Municipality",
            "palikaNameNep": "पिपरा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb592e",
            "palikaId": 249,
            "districtId": 21,
            "palikaName": "Aaurahi Rural Municipality",
            "palikaNameNep": "औरही गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb592f",
            "palikaId": 250,
            "districtId": 22,
            "palikaName": "Rajbiraj Municipality",
            "palikaNameNep": "राजविराज नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5930",
            "palikaId": 251,
            "districtId": 22,
            "palikaName": "Kanchanrup Municipality",
            "palikaNameNep": "कन्चंरूप नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5931",
            "palikaId": 252,
            "districtId": 22,
            "palikaName": "Daakneshwori Municipality",
            "palikaNameNep": "डाक्नेश्वरी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5932",
            "palikaId": 253,
            "districtId": 22,
            "palikaName": "Bodebarsain Municipality",
            "palikaNameNep": "बोदेबरसाईन नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5933",
            "palikaId": 254,
            "districtId": 22,
            "palikaName": "Khadak Municipality",
            "palikaNameNep": "खडक नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5934",
            "palikaId": 255,
            "districtId": 22,
            "palikaName": "Shambhunath Municipality",
            "palikaNameNep": "शम्भुनाथ नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5935",
            "palikaId": 256,
            "districtId": 22,
            "palikaName": "Surunga Municipality",
            "palikaNameNep": "सुरुङ्गा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5936",
            "palikaId": 257,
            "districtId": 22,
            "palikaName": "Hanumannagar kankalini Municipality",
            "palikaNameNep": "हनुमाननगर कन्कालिनी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5937",
            "palikaId": 258,
            "districtId": 22,
            "palikaName": "Krishnasawaran Rural Municipality",
            "palikaNameNep": "कृष्णासवरन गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5938",
            "palikaId": 259,
            "districtId": 22,
            "palikaName": "Chhinnamasta Rural Municipality",
            "palikaNameNep": "छिन्नमस्ता गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5939",
            "palikaId": 260,
            "districtId": 22,
            "palikaName": "Mahadeva Rural Municipality",
            "palikaNameNep": "महादेवा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb593a",
            "palikaId": 261,
            "districtId": 22,
            "palikaName": "Saptakoshi Rural Municipality",
            "palikaNameNep": "सप्तकोशी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb593b",
            "palikaId": 262,
            "districtId": 22,
            "palikaName": "Tirhut Rural Municipality",
            "palikaNameNep": "तिरहुत गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb593c",
            "palikaId": 263,
            "districtId": 22,
            "palikaName": "Tilathi Koiladi Rural Municipality",
            "palikaNameNep": "तिलाठी कोईलाडी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb593d",
            "palikaId": 264,
            "districtId": 22,
            "palikaName": "Rupani Rural Municipality",
            "palikaNameNep": "रुपनी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb593e",
            "palikaId": 265,
            "districtId": 22,
            "palikaName": "Belhi Chapena Rural Municipality",
            "palikaNameNep": "बेल्ही चपेना गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb593f",
            "palikaId": 266,
            "districtId": 22,
            "palikaName": "Bishnupur Rural Municipality",
            "palikaNameNep": "बिष्णुपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5940",
            "palikaId": 267,
            "districtId": 22,
            "palikaName": "Aagnisaira Krishnasawaran Rural Municipality",
            "palikaNameNep": "अग्निसाइर कृष्णासवरन गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5941",
            "palikaId": 268,
            "districtId": 22,
            "palikaName": "Balan-Bihul Rural Municipality",
            "palikaNameNep": "बलान-बिहुल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5942",
            "palikaId": 269,
            "districtId": 23,
            "palikaName": "Kamalamaai Municipality",
            "palikaNameNep": "कमलामाई नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5943",
            "palikaId": 270,
            "districtId": 23,
            "palikaName": "Dudhauli Municipality",
            "palikaNameNep": "दुधौली नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5944",
            "palikaId": 271,
            "districtId": 23,
            "palikaName": "Golanjor Rural Municipality",
            "palikaNameNep": "गोलन्जोर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5945",
            "palikaId": 272,
            "districtId": 23,
            "palikaName": "Ghyanglekh Rural Municipality",
            "palikaNameNep": "घ्याङलेख गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5946",
            "palikaId": 273,
            "districtId": 23,
            "palikaName": "Tinpatan Rural Municipality",
            "palikaNameNep": "तिनपाटन गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5947",
            "palikaId": 274,
            "districtId": 23,
            "palikaName": "Phikkal Rural Municipality",
            "palikaNameNep": "फिक्कल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5948",
            "palikaId": 275,
            "districtId": 23,
            "palikaName": "Marin Rural Municipality",
            "palikaNameNep": "मरिण गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5949",
            "palikaId": 276,
            "districtId": 23,
            "palikaName": "Sunkoshi Rural Municipality",
            "palikaNameNep": "सुनकोशी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb594a",
            "palikaId": 277,
            "districtId": 23,
            "palikaName": "Hariharpurgadhi Rural Municipality",
            "palikaNameNep": "हरिहरपुरगढी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb594b",
            "palikaId": 278,
            "districtId": 24,
            "palikaName": "Manthali Municipality",
            "palikaNameNep": "मन्थली नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb594c",
            "palikaId": 279,
            "districtId": 24,
            "palikaName": "Ramechhap Municipality",
            "palikaNameNep": "रामेछाप नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb594d",
            "palikaId": 280,
            "districtId": 24,
            "palikaName": "Umakunda Rural Municipality",
            "palikaNameNep": "उमाकुण्ड गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb594e",
            "palikaId": 281,
            "districtId": 24,
            "palikaName": "Khandadevi Rural Municipality",
            "palikaNameNep": "खाँडादेवी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb594f",
            "palikaId": 282,
            "districtId": 24,
            "palikaName": "Gokulganga Rural Municipality",
            "palikaNameNep": "गोकुलगङ्गा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5950",
            "palikaId": 283,
            "districtId": 24,
            "palikaName": "Doramba Rural Municipality",
            "palikaNameNep": "दोरम्बा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5951",
            "palikaId": 284,
            "districtId": 24,
            "palikaName": "Likhu Tamakoshi Rural Municipality",
            "palikaNameNep": "लिखु तामाकोशी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5952",
            "palikaId": 285,
            "districtId": 24,
            "palikaName": "Sunapati Rural Municipality",
            "palikaNameNep": "सुनापती गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5953",
            "palikaId": 286,
            "districtId": 25,
            "palikaName": "Jiri Municipality",
            "palikaNameNep": "जिरी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5954",
            "palikaId": 287,
            "districtId": 25,
            "palikaName": "Bhimeshwor Municipality",
            "palikaNameNep": "भीमेश्वर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5955",
            "palikaId": 288,
            "districtId": 25,
            "palikaName": "Kalinchok Rural Municipality",
            "palikaNameNep": "कालिन्चोक गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5956",
            "palikaId": 289,
            "districtId": 25,
            "palikaName": "Gaurishankar Rural Municipality",
            "palikaNameNep": "गौरिशंकर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5957",
            "palikaId": 290,
            "districtId": 25,
            "palikaName": "Tamakoshi Rural Municipality",
            "palikaNameNep": "तामाकोशी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5958",
            "palikaId": 291,
            "districtId": 25,
            "palikaName": "Melung Rural Municipality",
            "palikaNameNep": "मेलुङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5959",
            "palikaId": 292,
            "districtId": 25,
            "palikaName": "Bigu Rural Municipality",
            "palikaNameNep": "विगु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb595a",
            "palikaId": 293,
            "districtId": 25,
            "palikaName": "Baiteshwar Rural Municipality",
            "palikaNameNep": "वैतेश्वर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb595b",
            "palikaId": 294,
            "districtId": 25,
            "palikaName": "Shailung Rural Municipality",
            "palikaNameNep": "शैलुङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb595c",
            "palikaId": 295,
            "districtId": 26,
            "palikaName": "Changunarayan Municipality",
            "palikaNameNep": "चाँगुनारायण नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb595d",
            "palikaId": 296,
            "districtId": 26,
            "palikaName": "Bhaktapur Municipality",
            "palikaNameNep": "भक्तपुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb595e",
            "palikaId": 297,
            "districtId": 26,
            "palikaName": "Madhyapur Thimi Municipality",
            "palikaNameNep": "मध्यपुर थिमी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb595f",
            "palikaId": 298,
            "districtId": 26,
            "palikaName": "Suryavinayak Municipality",
            "palikaNameNep": "सूर्यविनायक नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5960",
            "palikaId": 299,
            "districtId": 27,
            "palikaName": "Dhunibensi Municipality",
            "palikaNameNep": "धुनीबेंशी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5961",
            "palikaId": 300,
            "districtId": 27,
            "palikaName": "Nilkantha Municipality",
            "palikaNameNep": "नीलकण्ठ नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5962",
            "palikaId": 301,
            "districtId": 27,
            "palikaName": "Khaniyabas Rural Municipality",
            "palikaNameNep": "खनियाबास गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5963",
            "palikaId": 302,
            "districtId": 27,
            "palikaName": "Gajuri Rural Municipality",
            "palikaNameNep": "गजुरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5964",
            "palikaId": 303,
            "districtId": 27,
            "palikaName": "Galchhi Rural Municipality",
            "palikaNameNep": "गल्छी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5965",
            "palikaId": 304,
            "districtId": 27,
            "palikaName": "Gangajamuna Rural Municipality",
            "palikaNameNep": "गङ्गाजमुना गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5966",
            "palikaId": 305,
            "districtId": 27,
            "palikaName": "Jwalamukhi Rural Municipality",
            "palikaNameNep": "ज्वालामूखी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5967",
            "palikaId": 306,
            "districtId": 27,
            "palikaName": "Thakre Rural Municipality",
            "palikaNameNep": "थाक्रे गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5968",
            "palikaId": 307,
            "districtId": 27,
            "palikaName": "Netrawati Dabjong Rural Municipality",
            "palikaNameNep": "नेत्रावती डबजोङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5969",
            "palikaId": 308,
            "districtId": 27,
            "palikaName": "Benighat Rorang Rural Municipality",
            "palikaNameNep": "बेनीघाट रोराङ्ग गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb596a",
            "palikaId": 309,
            "districtId": 27,
            "palikaName": "Ruby Valley Rural Municipality",
            "palikaNameNep": "रुवी भ्याली गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb596b",
            "palikaId": 310,
            "districtId": 27,
            "palikaName": "Siddhalekh Rural Municipality",
            "palikaNameNep": "सिद्धलेक गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb596c",
            "palikaId": 311,
            "districtId": 27,
            "palikaName": "Tripura Sundari Rural Municipality",
            "palikaNameNep": "त्रिपुरासुन्दरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb596d",
            "palikaId": 312,
            "districtId": 28,
            "palikaName": "Kathmandu Metropolitan",
            "palikaNameNep": "काठमाडौँ महानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb596e",
            "palikaId": 313,
            "districtId": 28,
            "palikaName": "Kageshwori Manohara Municipality",
            "palikaNameNep": "कागेश्वरी मनोहरा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb596f",
            "palikaId": 314,
            "districtId": 28,
            "palikaName": "Kirtipur Municipality",
            "palikaNameNep": "कीर्तिपुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5970",
            "palikaId": 315,
            "districtId": 28,
            "palikaName": "Gokarneshwor Municipality",
            "palikaNameNep": "गोकर्णेश्वोर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5971",
            "palikaId": 316,
            "districtId": 28,
            "palikaName": "Chandragiri Municipality",
            "palikaNameNep": "चन्द्रागिरी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5972",
            "palikaId": 317,
            "districtId": 28,
            "palikaName": "Tokha Municipality",
            "palikaNameNep": "टोखा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5973",
            "palikaId": 318,
            "districtId": 28,
            "palikaName": "Tarkeshwor Municipality",
            "palikaNameNep": "तार्केश्वोर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5974",
            "palikaId": 319,
            "districtId": 28,
            "palikaName": "Dakshinkali Municipality",
            "palikaNameNep": "दक्षिणकाली नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5975",
            "palikaId": 320,
            "districtId": 28,
            "palikaName": "Nagarjun Municipality",
            "palikaNameNep": "नागार्जुन नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5976",
            "palikaId": 321,
            "districtId": 28,
            "palikaName": "Budhanilkantha Municipality",
            "palikaNameNep": "बुढानिलकण्ठ नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5977",
            "palikaId": 322,
            "districtId": 28,
            "palikaName": "Sankharapur Municipality",
            "palikaNameNep": "शंखारापुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5978",
            "palikaId": 323,
            "districtId": 29,
            "palikaName": "Dhulikhel Municipality",
            "palikaNameNep": "धुलिखेल नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5979",
            "palikaId": 324,
            "districtId": 29,
            "palikaName": "Banepa Municipality",
            "palikaNameNep": "बनेपा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb597a",
            "palikaId": 325,
            "districtId": 29,
            "palikaName": "Panauti Municipality",
            "palikaNameNep": "पनौती नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb597b",
            "palikaId": 326,
            "districtId": 29,
            "palikaName": "Panchkhal Municipality",
            "palikaNameNep": "पाँचखाल नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb597c",
            "palikaId": 327,
            "districtId": 29,
            "palikaName": "Namobudha Municipality",
            "palikaNameNep": "नमोबुद्ध नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb597d",
            "palikaId": 328,
            "districtId": 29,
            "palikaName": "Khanikhola Rural Municipality",
            "palikaNameNep": "खानीखोला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb597e",
            "palikaId": 329,
            "districtId": 29,
            "palikaName": "Chaunri Deurali Rural Municipality",
            "palikaNameNep": "चौंरी देउराली गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb597f",
            "palikaId": 330,
            "districtId": 29,
            "palikaName": "Temal Rural Municipality",
            "palikaNameNep": "तेमाल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5980",
            "palikaId": 331,
            "districtId": 29,
            "palikaName": "Bethanchok Rural Municipality",
            "palikaNameNep": "बेथानचोक गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5981",
            "palikaId": 332,
            "districtId": 29,
            "palikaName": "Bhumlu Rural Municipality",
            "palikaNameNep": "भुम्लु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5982",
            "palikaId": 333,
            "districtId": 29,
            "palikaName": "Mandandeupur Municipality",
            "palikaNameNep": "मण्डनदेउपुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5983",
            "palikaId": 334,
            "districtId": 29,
            "palikaName": "Mahabharat Rural Municipality",
            "palikaNameNep": "महाभारत गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5984",
            "palikaId": 335,
            "districtId": 29,
            "palikaName": "Roshi Rural Municipality",
            "palikaNameNep": "रोशी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5985",
            "palikaId": 336,
            "districtId": 30,
            "palikaName": "Lalitpur Metropolitan",
            "palikaNameNep": "ललितपुर महानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5986",
            "palikaId": 337,
            "districtId": 30,
            "palikaName": "Godawari Municipality",
            "palikaNameNep": "गोदावरी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5987",
            "palikaId": 338,
            "districtId": 30,
            "palikaName": "Mahalaksmi Municipality",
            "palikaNameNep": "महालक्ष्मी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5988",
            "palikaId": 339,
            "districtId": 30,
            "palikaName": "Konjyosom Rural Municipality",
            "palikaNameNep": "कोन्ज्योसोम गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5989",
            "palikaId": 340,
            "districtId": 30,
            "palikaName": "Bagmati Rural Municipality",
            "palikaNameNep": "बाग्मती गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb598a",
            "palikaId": 341,
            "districtId": 30,
            "palikaName": "Mahankal Rural Municipality",
            "palikaNameNep": "महाङ्काल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb598b",
            "palikaId": 342,
            "districtId": 31,
            "palikaName": "Bidur Municipality",
            "palikaNameNep": "विदुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb598c",
            "palikaId": 343,
            "districtId": 31,
            "palikaName": "Belkotgadhi Municipality",
            "palikaNameNep": "बेलकोटगढी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb598d",
            "palikaId": 344,
            "districtId": 31,
            "palikaName": "Kakani Rural Municipality",
            "palikaNameNep": "ककनी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb598e",
            "palikaId": 345,
            "districtId": 31,
            "palikaName": "Kispang Rural Municipality",
            "palikaNameNep": "किस्पाङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb598f",
            "palikaId": 346,
            "districtId": 31,
            "palikaName": "Tadi Rural Municipality",
            "palikaNameNep": "तादी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5990",
            "palikaId": 347,
            "districtId": 31,
            "palikaName": "Tarkeshwar Rural Municipality",
            "palikaNameNep": "तारकेश्वर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5991",
            "palikaId": 348,
            "districtId": 31,
            "palikaName": "Dupcheshwar Rural Municipality",
            "palikaNameNep": "दुप्चेश्वर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5992",
            "palikaId": 349,
            "districtId": 31,
            "palikaName": "Panchakanya Rural Municipality",
            "palikaNameNep": "पञ्चकन्या गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5993",
            "palikaId": 350,
            "districtId": 31,
            "palikaName": "Likhu Rural Municipality",
            "palikaNameNep": "लिखु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5994",
            "palikaId": 351,
            "districtId": 31,
            "palikaName": "Myagang Rural Municipality",
            "palikaNameNep": "मेघांग गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5995",
            "palikaId": 352,
            "districtId": 31,
            "palikaName": "Shivapuri Rural Municipality",
            "palikaNameNep": "शिवपुरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5996",
            "palikaId": 353,
            "districtId": 31,
            "palikaName": "Suryagadhi Rural Municipality",
            "palikaNameNep": "सुर्यगढी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5997",
            "palikaId": 354,
            "districtId": 32,
            "palikaName": "Uttargaya Rural Municipality",
            "palikaNameNep": "उत्तरगया गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5998",
            "palikaId": 355,
            "districtId": 32,
            "palikaName": "Kalika Rural Municipality",
            "palikaNameNep": "कालिका गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5999",
            "palikaId": 356,
            "districtId": 32,
            "palikaName": "Gosaikund Rural Municipality",
            "palikaNameNep": "गोसाईकुण्ड गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb599a",
            "palikaId": 357,
            "districtId": 32,
            "palikaName": "Naukunda Rural Municipality",
            "palikaNameNep": "नौकुण्ड गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb599b",
            "palikaId": 358,
            "districtId": 32,
            "palikaName": "Parbatikunda Rural Municipality",
            "palikaNameNep": "पार्वतीकुण्ड गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb599c",
            "palikaId": 359,
            "districtId": 32,
            "palikaName": "Aamachodingmo Rural Municipality",
            "palikaNameNep": "आमाछोदिङमो गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb599d",
            "palikaId": 360,
            "districtId": 33,
            "palikaName": "Chautara Sangachowkgadhi Municipality",
            "palikaNameNep": "चौतारा साँगाचोकगढी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb599e",
            "palikaId": 361,
            "districtId": 33,
            "palikaName": "Barhabise Municipality",
            "palikaNameNep": "वाह्रबिसे नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb599f",
            "palikaId": 362,
            "districtId": 33,
            "palikaName": "Melamchi Municipality",
            "palikaNameNep": "मेलम्ची नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59a0",
            "palikaId": 363,
            "districtId": 33,
            "palikaName": "Indrawati Rural Municipality",
            "palikaNameNep": "र्इन्द्रावती गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59a1",
            "palikaId": 364,
            "districtId": 33,
            "palikaName": "Jugal Rural Municipality",
            "palikaNameNep": "जुगल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59a2",
            "palikaId": 365,
            "districtId": 33,
            "palikaName": "Panchpokhari Thangpal Rural Municipality",
            "palikaNameNep": "पाँचपोखरी थाङपाल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59a3",
            "palikaId": 366,
            "districtId": 33,
            "palikaName": "Balephi Rural Municipality",
            "palikaNameNep": "बलेफी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59a4",
            "palikaId": 367,
            "districtId": 33,
            "palikaName": "Bhotekoshi Rural Municipality",
            "palikaNameNep": "भोटेकोशी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59a5",
            "palikaId": 368,
            "districtId": 33,
            "palikaName": "Lisankhu Pakhar Rural Municipality",
            "palikaNameNep": "लिसंखु पाखर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59a6",
            "palikaId": 369,
            "districtId": 33,
            "palikaName": "Sunkoshi Rural Municipality",
            "palikaNameNep": "सुनकोशी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59a7",
            "palikaId": 370,
            "districtId": 33,
            "palikaName": "Helambu Rural Municipality",
            "palikaNameNep": "हेलम्बु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59a8",
            "palikaId": 371,
            "districtId": 33,
            "palikaName": "Tripura Sundari Rural Municipality",
            "palikaNameNep": "त्रिपुरासुन्दरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59a9",
            "palikaId": 372,
            "districtId": 34,
            "palikaName": "Bharatpur Metropolitan",
            "palikaNameNep": "भरतपुर महानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59aa",
            "palikaId": 373,
            "districtId": 34,
            "palikaName": "Kalika Municipality",
            "palikaNameNep": "कालिका नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59ab",
            "palikaId": 374,
            "districtId": 34,
            "palikaName": "Khairhani Municipality",
            "palikaNameNep": "खैरहनी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59ac",
            "palikaId": 375,
            "districtId": 34,
            "palikaName": "Madi Municipality",
            "palikaNameNep": "माडी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59ad",
            "palikaId": 376,
            "districtId": 34,
            "palikaName": "Ratnnagar Municipality",
            "palikaNameNep": "रत्ननगर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59ae",
            "palikaId": 377,
            "districtId": 34,
            "palikaName": "Rapti Municipality",
            "palikaNameNep": "राप्ती नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59af",
            "palikaId": 378,
            "districtId": 34,
            "palikaName": "Ichchhakamana Rural Municipality",
            "palikaNameNep": "इच्छाकामना गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59b0",
            "palikaId": 379,
            "districtId": 35,
            "palikaName": "Hetaunda Sub-Metropolitan",
            "palikaNameNep": "हेटौंडा उपमहानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59b1",
            "palikaId": 380,
            "districtId": 35,
            "palikaName": "Thaha Municipality",
            "palikaNameNep": "थाहा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59b2",
            "palikaId": 381,
            "districtId": 35,
            "palikaName": "Indrasarowar Rural Municipality",
            "palikaNameNep": "ईन्द्र सरोवर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59b3",
            "palikaId": 382,
            "districtId": 35,
            "palikaName": "Kailash Rural Municipality",
            "palikaNameNep": "कैलाश गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59b4",
            "palikaId": 383,
            "districtId": 35,
            "palikaName": "Bakaiya Rural Municipality",
            "palikaNameNep": "बकैया गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59b5",
            "palikaId": 384,
            "districtId": 35,
            "palikaName": "Bagmati Rural Municipality",
            "palikaNameNep": "बाग्मती गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59b6",
            "palikaId": 385,
            "districtId": 35,
            "palikaName": "Bhimphedi Rural Municipality",
            "palikaNameNep": "भीमफेदी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59b7",
            "palikaId": 386,
            "districtId": 35,
            "palikaName": "Makawanpurgadhi Rural Municipality",
            "palikaNameNep": "मकवानपुरगढी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59b8",
            "palikaId": 387,
            "districtId": 35,
            "palikaName": "Manhari Rural Municipality",
            "palikaNameNep": "मनहरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59b9",
            "palikaId": 388,
            "districtId": 35,
            "palikaName": "Raksirang Rural Municipality",
            "palikaNameNep": "राक्सिराङ्ग गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59ba",
            "palikaId": 389,
            "districtId": 36,
            "palikaName": "Baglung Municipality",
            "palikaNameNep": "बागलुङ नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59bb",
            "palikaId": 390,
            "districtId": 36,
            "palikaName": "Galkot Municipality",
            "palikaNameNep": "गल्कोट नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59bc",
            "palikaId": 391,
            "districtId": 36,
            "palikaName": "Jaimini Municipality",
            "palikaNameNep": "जैमिनी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59bd",
            "palikaId": 392,
            "districtId": 36,
            "palikaName": "Dhorpatan Municipality",
            "palikaNameNep": "ढोरपाटन नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59be",
            "palikaId": 393,
            "districtId": 36,
            "palikaName": "Bareng Rural Municipality",
            "palikaNameNep": "वरेङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59bf",
            "palikaId": 394,
            "districtId": 36,
            "palikaName": "Kathekhola Rural Municipality",
            "palikaNameNep": "काठेखोला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59c0",
            "palikaId": 395,
            "districtId": 36,
            "palikaName": "Tamankhola Rural Municipality",
            "palikaNameNep": "तमानखोला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59c1",
            "palikaId": 396,
            "districtId": 36,
            "palikaName": "Tarakhola Rural Municipality",
            "palikaNameNep": "ताराखोला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59c2",
            "palikaId": 397,
            "districtId": 36,
            "palikaName": "Nisikhola Rural Municipality",
            "palikaNameNep": "निसीखोला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59c3",
            "palikaId": 398,
            "districtId": 36,
            "palikaName": "Badigad Rural Municipality",
            "palikaNameNep": "वडिगाड गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59c4",
            "palikaId": 399,
            "districtId": 37,
            "palikaName": "Gorkha Municipality",
            "palikaNameNep": "गोरखा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59c5",
            "palikaId": 400,
            "districtId": 37,
            "palikaName": "Palungtar Municipality",
            "palikaNameNep": "पालुंगटार नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59c6",
            "palikaId": 401,
            "districtId": 37,
            "palikaName": "Barpak Sulikot Rural Municipality",
            "palikaNameNep": "बारपाक सुलीकोट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59c7",
            "palikaId": 402,
            "districtId": 37,
            "palikaName": "Siranchok Rural Municipality",
            "palikaNameNep": "सिरानचोक गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59c8",
            "palikaId": 403,
            "districtId": 37,
            "palikaName": "Ajirkot Rural Municipality",
            "palikaNameNep": "अजिरकोट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59c9",
            "palikaId": 404,
            "districtId": 37,
            "palikaName": "Aarughat Rural Municipality",
            "palikaNameNep": "आरूघाट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59ca",
            "palikaId": 405,
            "districtId": 37,
            "palikaName": "Gandaki Rural Municipality",
            "palikaNameNep": "गण्डकी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59cb",
            "palikaId": 406,
            "districtId": 37,
            "palikaName": "Chum Nubri Rural Municipality",
            "palikaNameNep": "चुम नुव्री गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59cc",
            "palikaId": 407,
            "districtId": 37,
            "palikaName": "Dharche Rural Municipality",
            "palikaNameNep": "धार्चे गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59cd",
            "palikaId": 408,
            "districtId": 37,
            "palikaName": "Bhimsen Thapa Rural Municipality",
            "palikaNameNep": "भिमसेनथापा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59ce",
            "palikaId": 409,
            "districtId": 37,
            "palikaName": "Shahid Lakhan Rural Municipality",
            "palikaNameNep": "शहिद लखन गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59cf",
            "palikaId": 410,
            "districtId": 38,
            "palikaName": "Pokhara Lekhnath Metropolitan",
            "palikaNameNep": "पोखरा लेखनाथ महानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59d0",
            "palikaId": 411,
            "districtId": 38,
            "palikaName": "Annapurna Rural Municipality",
            "palikaNameNep": "अन्नपुर्ण गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59d1",
            "palikaId": 412,
            "districtId": 38,
            "palikaName": "Machhapuchhre",
            "palikaNameNep": "माछापुछ्रे गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59d2",
            "palikaId": 413,
            "districtId": 38,
            "palikaName": "Madi Rural Municipality",
            "palikaNameNep": "मादी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59d3",
            "palikaId": 414,
            "districtId": 38,
            "palikaName": "Rupa Rural Municipality",
            "palikaNameNep": "रूपा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59d4",
            "palikaId": 415,
            "districtId": 39,
            "palikaName": "Besishahar Municipality",
            "palikaNameNep": "बेसीशहर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59d5",
            "palikaId": 416,
            "districtId": 39,
            "palikaName": "Madhyanepal Municipality",
            "palikaNameNep": "मध्यनेपाल नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59d6",
            "palikaId": 417,
            "districtId": 39,
            "palikaName": "Rainas Municipality",
            "palikaNameNep": "राईनास नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59d7",
            "palikaId": 418,
            "districtId": 39,
            "palikaName": "Sundarbazar Municipality",
            "palikaNameNep": "सुन्दरबजार नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59d8",
            "palikaId": 419,
            "districtId": 39,
            "palikaName": "Kwaholasothar Rural Municipality",
            "palikaNameNep": "क्व्होलासोथार गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59d9",
            "palikaId": 420,
            "districtId": 39,
            "palikaName": "Dudhpokhari Rural Municipality",
            "palikaNameNep": "दूधपोखरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59da",
            "palikaId": 421,
            "districtId": 39,
            "palikaName": "Dordi Rural Municipality",
            "palikaNameNep": "दोर्दी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59db",
            "palikaId": 422,
            "districtId": 39,
            "palikaName": "Marsyangdi Rural Municipality",
            "palikaNameNep": "मर्स्याङदी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59dc",
            "palikaId": 423,
            "districtId": 40,
            "palikaName": "Chame Rural Municipality",
            "palikaNameNep": "चामे गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59dd",
            "palikaId": 424,
            "districtId": 40,
            "palikaName": "Narpa Bhumi Rural Municipality",
            "palikaNameNep": "नार्पा भूमी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59de",
            "palikaId": 425,
            "districtId": 40,
            "palikaName": "Nason Rural Municipality",
            "palikaNameNep": "नासोँ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59df",
            "palikaId": 426,
            "districtId": 40,
            "palikaName": "Manang Disyang Rural Municipality",
            "palikaNameNep": "मनाङ डिस्याङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59e0",
            "palikaId": 427,
            "districtId": 41,
            "palikaName": "Gharapjhong Rural Municipality",
            "palikaNameNep": "घरपझोङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59e1",
            "palikaId": 428,
            "districtId": 41,
            "palikaName": "Thasang Rural Municipality",
            "palikaNameNep": "थासाङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59e2",
            "palikaId": 429,
            "districtId": 41,
            "palikaName": "Lomanthang Rural Municipality",
            "palikaNameNep": "लोमन्थाङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59e3",
            "palikaId": 430,
            "districtId": 41,
            "palikaName": "Baragung Muktichhetra Rural Municipality",
            "palikaNameNep": "बारागुङ मुक्तिक्षेत्र गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59e4",
            "palikaId": 431,
            "districtId": 41,
            "palikaName": "Lo-Ghekar Damodarkunda Rural Municipality",
            "palikaNameNep": "लो-घेकर दामोदरकुण्ड गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59e5",
            "palikaId": 432,
            "districtId": 42,
            "palikaName": "Beni Municipality",
            "palikaNameNep": "बेनी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59e6",
            "palikaId": 433,
            "districtId": 42,
            "palikaName": "Annapurna Rural Municipality",
            "palikaNameNep": "अन्नपुर्ण गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59e7",
            "palikaId": 434,
            "districtId": 42,
            "palikaName": "Dhaulagiri Rural Municipality",
            "palikaNameNep": "धवलागिरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59e8",
            "palikaId": 435,
            "districtId": 42,
            "palikaName": "Mangala Rural Municipality",
            "palikaNameNep": "मंगला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59e9",
            "palikaId": 436,
            "districtId": 42,
            "palikaName": "Malika Rural Municipality",
            "palikaNameNep": "मालिका गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59ea",
            "palikaId": 437,
            "districtId": 42,
            "palikaName": "Raghuganga",
            "palikaNameNep": "रघुगंगा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59eb",
            "palikaId": 438,
            "districtId": 43,
            "palikaName": "Kawasoti Municipality",
            "palikaNameNep": "कावासोती नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59ec",
            "palikaId": 439,
            "districtId": 43,
            "palikaName": "Gaindakot Municipality",
            "palikaNameNep": "गैंडाकोट नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59ed",
            "palikaId": 440,
            "districtId": 43,
            "palikaName": "Devchuli Municipality",
            "palikaNameNep": "देवचुली नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59ee",
            "palikaId": 441,
            "districtId": 43,
            "palikaName": "Bardghat Municipality",
            "palikaNameNep": "बर्दघाट नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59ef",
            "palikaId": 442,
            "districtId": 43,
            "palikaName": "Madhyabindu Municipality",
            "palikaNameNep": "मध्यविन्दु नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59f0",
            "palikaId": 443,
            "districtId": 43,
            "palikaName": "Ramgram Municipality",
            "palikaNameNep": "रामग्राम नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59f1",
            "palikaId": 444,
            "districtId": 43,
            "palikaName": "Sunbal Municipality",
            "palikaNameNep": "सुनवल नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59f2",
            "palikaId": 445,
            "districtId": 43,
            "palikaName": "Hupsekot Rural Municipality",
            "palikaNameNep": "हुप्सेकोट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59f3",
            "palikaId": 446,
            "districtId": 43,
            "palikaName": "Sarabal Rural Municipality",
            "palikaNameNep": "सरावल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59f4",
            "palikaId": 447,
            "districtId": 43,
            "palikaName": "Binayi Triveni Rural Municipality",
            "palikaNameNep": "विनयी त्रिवेणी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59f5",
            "palikaId": 448,
            "districtId": 43,
            "palikaName": "Bulingtar Rural Municipality",
            "palikaNameNep": "बुलिङटार गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59f6",
            "palikaId": 449,
            "districtId": 43,
            "palikaName": "Baudikali Rural Municipality",
            "palikaNameNep": "बौदीकाली गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59f7",
            "palikaId": 450,
            "districtId": 43,
            "palikaName": "Pratappur Rural Municipality",
            "palikaNameNep": "प्रतापपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59f8",
            "palikaId": 451,
            "districtId": 43,
            "palikaName": "Palhinandan Rural Municipality",
            "palikaNameNep": "पाल्हीनन्दन गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59f9",
            "palikaId": 452,
            "districtId": 43,
            "palikaName": "Trivenisusta Rural Municipality",
            "palikaNameNep": "त्रिवेणीसुस्ता गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59fa",
            "palikaId": 453,
            "districtId": 44,
            "palikaName": "Kusma Municipality",
            "palikaNameNep": "कुश्मा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59fb",
            "palikaId": 454,
            "districtId": 44,
            "palikaName": "Phlaebas Municipality",
            "palikaNameNep": "फलेवास नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59fc",
            "palikaId": 455,
            "districtId": 44,
            "palikaName": "Jaljala Rural Municipality",
            "palikaNameNep": "जलजला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59fd",
            "palikaId": 456,
            "districtId": 44,
            "palikaName": "Painyu Rural Municipality",
            "palikaNameNep": "पैयूं गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59fe",
            "palikaId": 457,
            "districtId": 44,
            "palikaName": "Mahashila Rural Municipality",
            "palikaNameNep": "महाशिला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb59ff",
            "palikaId": 458,
            "districtId": 44,
            "palikaName": "Modi Rural Municipality",
            "palikaNameNep": "मोदी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a00",
            "palikaId": 459,
            "districtId": 44,
            "palikaName": "Bihadi Rural Municipality",
            "palikaNameNep": "विहादी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a01",
            "palikaId": 460,
            "districtId": 45,
            "palikaName": "Galyang Municipality",
            "palikaNameNep": "गलयांग नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a02",
            "palikaId": 461,
            "districtId": 45,
            "palikaName": "Chapakot Municipality",
            "palikaNameNep": "चापाकोट नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a03",
            "palikaId": 462,
            "districtId": 45,
            "palikaName": "Putalibazar Municipality",
            "palikaNameNep": "पुतलीबजार नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a04",
            "palikaId": 463,
            "districtId": 45,
            "palikaName": "Bhirkot Municipality",
            "palikaNameNep": "भीरकोट नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a05",
            "palikaId": 464,
            "districtId": 45,
            "palikaName": "Waling Municipality",
            "palikaNameNep": "वालिंग नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a06",
            "palikaId": 465,
            "districtId": 45,
            "palikaName": "Arjun Chaupari Rural Municipality",
            "palikaNameNep": "अर्जुन चौपारी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a07",
            "palikaId": 466,
            "districtId": 45,
            "palikaName": "Aandhikhola Rural Municipality",
            "palikaNameNep": "आँधीखोला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a08",
            "palikaId": 467,
            "districtId": 45,
            "palikaName": "Kaligandaki Rural Municipality",
            "palikaNameNep": "कालीगण्डकी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a09",
            "palikaId": 468,
            "districtId": 45,
            "palikaName": "Phedikhola Rural Municipality",
            "palikaNameNep": "फेदीखोला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a0a",
            "palikaId": 469,
            "districtId": 45,
            "palikaName": "Biruwa Rural Municipality",
            "palikaNameNep": "विरुवा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a0b",
            "palikaId": 470,
            "districtId": 45,
            "palikaName": "Harinas Rural Municipality",
            "palikaNameNep": "हरीनास गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a0c",
            "palikaId": 471,
            "districtId": 46,
            "palikaName": "Bhanu Municipality",
            "palikaNameNep": "भानु नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a0d",
            "palikaId": 472,
            "districtId": 46,
            "palikaName": "Bhimad Municipality",
            "palikaNameNep": "भिमाद नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a0e",
            "palikaId": 473,
            "districtId": 46,
            "palikaName": "Vyas Municipality",
            "palikaNameNep": "व्यास नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a0f",
            "palikaId": 474,
            "districtId": 46,
            "palikaName": "ShuklaGandaki Municipality",
            "palikaNameNep": "शुक्लागण्डकी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a10",
            "palikaId": 475,
            "districtId": 46,
            "palikaName": "Aanbu Khaireni Rural Municipality",
            "palikaNameNep": "आँबुखैरेनी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a11",
            "palikaId": 476,
            "districtId": 46,
            "palikaName": "Rishing Rural Municipality",
            "palikaNameNep": "ऋषिङ्ग गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a12",
            "palikaId": 477,
            "districtId": 46,
            "palikaName": "Ghiring Rural Municipality",
            "palikaNameNep": "घिरिङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a13",
            "palikaId": 478,
            "districtId": 46,
            "palikaName": "Devghat Rural Municipality",
            "palikaNameNep": "देवघाट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a14",
            "palikaId": 479,
            "districtId": 46,
            "palikaName": "Myagde Rural Municipality",
            "palikaNameNep": "म्याग्दे गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a15",
            "palikaId": 480,
            "districtId": 46,
            "palikaName": "Bandipur Rural Municipality",
            "palikaNameNep": "बन्दिपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a16",
            "palikaId": 481,
            "districtId": 47,
            "palikaName": "Kapilvastu Municipality",
            "palikaNameNep": "कपिलवस्तु नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a17",
            "palikaId": 482,
            "districtId": 47,
            "palikaName": "Buddhabhumi Municipality",
            "palikaNameNep": "बुद्धभुमि नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a18",
            "palikaId": 483,
            "districtId": 47,
            "palikaName": "Shivaraj Municipality",
            "palikaNameNep": "शिवराज नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a19",
            "palikaId": 484,
            "districtId": 47,
            "palikaName": "Maharajgunj Municipality",
            "palikaNameNep": "महाराजगंज नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a1a",
            "palikaId": 485,
            "districtId": 47,
            "palikaName": "Krishnanagar Municipality",
            "palikaNameNep": "कृष्णनगर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a1b",
            "palikaId": 486,
            "districtId": 47,
            "palikaName": "Baanganga Municipality",
            "palikaNameNep": "बाणगंगा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a1c",
            "palikaId": 487,
            "districtId": 47,
            "palikaName": "Mayadevi Rural Municipality",
            "palikaNameNep": "मायादेवी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a1d",
            "palikaId": 488,
            "districtId": 47,
            "palikaName": "Yasodhara Rural Municipality",
            "palikaNameNep": "यसोधरा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a1e",
            "palikaId": 489,
            "districtId": 47,
            "palikaName": "Shuddhodhan Rural Municipality",
            "palikaNameNep": "शुद्धोधन गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a1f",
            "palikaId": 490,
            "districtId": 47,
            "palikaName": "Bijaynagar Rural Municipality",
            "palikaNameNep": "विजयनगर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a20",
            "palikaId": 491,
            "districtId": 48,
            "palikaName": "Triveni Susta Rural Municipality",
            "palikaNameNep": "त्रिवेणी सुस्ता गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a21",
            "palikaId": 492,
            "districtId": 48,
            "palikaName": "Pratappur Rural Municipality",
            "palikaNameNep": "प्रतापपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a22",
            "palikaId": 493,
            "districtId": 48,
            "palikaName": "Sarawal Rural Municipality",
            "palikaNameNep": "सरावल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a23",
            "palikaId": 494,
            "districtId": 48,
            "palikaName": "Palhi Nandan Rural Municipality",
            "palikaNameNep": "पाल्हीनन्दन गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a24",
            "palikaId": 495,
            "districtId": 49,
            "palikaName": "Butwal Sub-Metropolitan",
            "palikaNameNep": "बुटवल उपमहानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a25",
            "palikaId": 496,
            "districtId": 49,
            "palikaName": "Devdaha Municipality",
            "palikaNameNep": "देवदह नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a26",
            "palikaId": 497,
            "districtId": 49,
            "palikaName": "Lumbini sanskritik Municipality",
            "palikaNameNep": "लुम्बिनी सांस्कृतिक नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a27",
            "palikaId": 498,
            "districtId": 49,
            "palikaName": "SainaMaina Municipality",
            "palikaNameNep": "सैनामैना नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a28",
            "palikaId": 499,
            "districtId": 49,
            "palikaName": "Siddarthanagar Municipality",
            "palikaNameNep": "सिद्दार्थनगर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a29",
            "palikaId": 500,
            "districtId": 49,
            "palikaName": "Tilottama Municipality",
            "palikaNameNep": "तिलोत्तमा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a2a",
            "palikaId": 501,
            "districtId": 49,
            "palikaName": "Gaidhawa Rural Municipality",
            "palikaNameNep": "गैडहवा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a2b",
            "palikaId": 502,
            "districtId": 49,
            "palikaName": "Kanchan Rural Municipality",
            "palikaNameNep": "कञ्चन गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a2c",
            "palikaId": 503,
            "districtId": 49,
            "palikaName": "Kotahimai Rural Municipality",
            "palikaNameNep": "कोटहीमाई गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a2d",
            "palikaId": 504,
            "districtId": 49,
            "palikaName": "Marchawarimai Rural Municipality",
            "palikaNameNep": "मर्चवारीमाई गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a2e",
            "palikaId": 505,
            "districtId": 49,
            "palikaName": "Mayadevi Rural Municipality",
            "palikaNameNep": "मायादेवी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a2f",
            "palikaId": 506,
            "districtId": 49,
            "palikaName": "Om Satiya Rural Municipality",
            "palikaNameNep": "ओमसतीया गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a30",
            "palikaId": 507,
            "districtId": 49,
            "palikaName": "Rohini Rural Municipality",
            "palikaNameNep": "रोहिणी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a31",
            "palikaId": 508,
            "districtId": 49,
            "palikaName": "Sammarimai Rural Municipality",
            "palikaNameNep": "सम्मरीमाई गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a32",
            "palikaId": 509,
            "districtId": 49,
            "palikaName": "Siyari Rural Municipality",
            "palikaNameNep": "सियारी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a33",
            "palikaId": 510,
            "districtId": 49,
            "palikaName": "Shuddhodhan Rural Municipality",
            "palikaNameNep": "शुद्धोधन गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a34",
            "palikaId": 511,
            "districtId": 50,
            "palikaName": "Sandhikharka Municipality",
            "palikaNameNep": "सन्धिखर्क नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a35",
            "palikaId": 512,
            "districtId": 50,
            "palikaName": "Shitganga Municipality",
            "palikaNameNep": "शितगंगा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a36",
            "palikaId": 513,
            "districtId": 50,
            "palikaName": "Bhumikasthan Municipality",
            "palikaNameNep": "भूमिकास्थान नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a37",
            "palikaId": 514,
            "districtId": 50,
            "palikaName": "Chhatradev Rural Municipality",
            "palikaNameNep": "छत्रदेव गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a38",
            "palikaId": 515,
            "districtId": 50,
            "palikaName": "Pandini Rural Municipality",
            "palikaNameNep": "पाणिनी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a39",
            "palikaId": 516,
            "districtId": 50,
            "palikaName": "Malarani Rural Municipality",
            "palikaNameNep": "मालारानी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a3a",
            "palikaId": 517,
            "districtId": 51,
            "palikaName": "Musikot Municipality",
            "palikaNameNep": "मुसिकोट नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a3b",
            "palikaId": 518,
            "districtId": 51,
            "palikaName": "Resunga Municipality",
            "palikaNameNep": "रेसुंगा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a3c",
            "palikaId": 519,
            "districtId": 51,
            "palikaName": "Isma Rural Municipality",
            "palikaNameNep": "ईस्मा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a3d",
            "palikaId": 520,
            "districtId": 51,
            "palikaName": "Kaligandaki Rural Municipality",
            "palikaNameNep": "कालीगण्डकी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a3e",
            "palikaId": 521,
            "districtId": 51,
            "palikaName": "Gulmi Durbar Rural Municipality",
            "palikaNameNep": "गुल्मीदरवार गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a3f",
            "palikaId": 522,
            "districtId": 51,
            "palikaName": "Satyawati Rural Municipality",
            "palikaNameNep": "सत्यवती गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a40",
            "palikaId": 523,
            "districtId": 51,
            "palikaName": "Chandrakot Rural Municipality",
            "palikaNameNep": "चन्द्रकोट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a41",
            "palikaId": 524,
            "districtId": 51,
            "palikaName": "Ruru Rural Municipality",
            "palikaNameNep": "रुरु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a42",
            "palikaId": 525,
            "districtId": 51,
            "palikaName": "Chhatrakot Rural Municipality",
            "palikaNameNep": "छत्रकोट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a43",
            "palikaId": 526,
            "districtId": 51,
            "palikaName": "Dhurkot Rural Municipality",
            "palikaNameNep": "धुर्कोट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a44",
            "palikaId": 527,
            "districtId": 51,
            "palikaName": "Madane Rural Municipality",
            "palikaNameNep": "मदाने गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a45",
            "palikaId": 528,
            "districtId": 51,
            "palikaName": "Malika Rural Municipality",
            "palikaNameNep": "मालिका गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a46",
            "palikaId": 529,
            "districtId": 52,
            "palikaName": "Rampur Municipality",
            "palikaNameNep": "रामपुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a47",
            "palikaId": 530,
            "districtId": 52,
            "palikaName": "Tansen Municipality",
            "palikaNameNep": "तानसेन नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a48",
            "palikaId": 531,
            "districtId": 52,
            "palikaName": "Nisdi Rural Municipality",
            "palikaNameNep": "निस्दी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a49",
            "palikaId": 532,
            "districtId": 52,
            "palikaName": "Purbakhola Rural Municipality",
            "palikaNameNep": "पूर्वखोला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a4a",
            "palikaId": 533,
            "districtId": 52,
            "palikaName": "Rambha Rural Municipality",
            "palikaNameNep": "रम्भा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a4b",
            "palikaId": 534,
            "districtId": 52,
            "palikaName": "Mathagadhi Rural Municipality",
            "palikaNameNep": "माथागढी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a4c",
            "palikaId": 535,
            "districtId": 52,
            "palikaName": "Tinau Rural Municipality",
            "palikaNameNep": "तिनाउ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a4d",
            "palikaId": 536,
            "districtId": 52,
            "palikaName": "Bagnaskali Rural Municipality",
            "palikaNameNep": "वगनासकाली गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a4e",
            "palikaId": 537,
            "districtId": 52,
            "palikaName": "Ribdikot Rural Municipality",
            "palikaNameNep": "रिब्दीकोट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a4f",
            "palikaId": 538,
            "districtId": 52,
            "palikaName": "Rainadevi Chhahara Rural Municipality",
            "palikaNameNep": "रैनादेवी छहरा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a50",
            "palikaId": 539,
            "districtId": 53,
            "palikaName": "Tulsipur Sub-Metropolitan",
            "palikaNameNep": "तुलसीपुर उपमहानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a51",
            "palikaId": 540,
            "districtId": 53,
            "palikaName": "Ghorahi Sub-Metropolitan",
            "palikaNameNep": "घोराही उपमहानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a52",
            "palikaId": 541,
            "districtId": 53,
            "palikaName": "Lamahi Municipality",
            "palikaNameNep": "लमही नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a53",
            "palikaId": 542,
            "districtId": 53,
            "palikaName": "Banglachuli Rural Municipality",
            "palikaNameNep": "वंगलाचुली गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a54",
            "palikaId": 543,
            "districtId": 53,
            "palikaName": "Dangisharan Rural Municipality",
            "palikaNameNep": "दंगीशरण गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a55",
            "palikaId": 544,
            "districtId": 53,
            "palikaName": "Gadhawa Rural Municipality",
            "palikaNameNep": "गढवा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a56",
            "palikaId": 545,
            "districtId": 53,
            "palikaName": "Rajpur Rural Municipality",
            "palikaNameNep": "राजपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a57",
            "palikaId": 546,
            "districtId": 53,
            "palikaName": "Rapti Rural Municipality",
            "palikaNameNep": "राप्ती गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a58",
            "palikaId": 547,
            "districtId": 53,
            "palikaName": "Shantinagar Rural Municipality",
            "palikaNameNep": "शान्तिनगर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a59",
            "palikaId": 548,
            "districtId": 53,
            "palikaName": "Babai Rural Municipality",
            "palikaNameNep": "बबई गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a5a",
            "palikaId": 549,
            "districtId": 54,
            "palikaName": "Pyuthan Municipality",
            "palikaNameNep": "प्युठान नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a5b",
            "palikaId": 550,
            "districtId": 54,
            "palikaName": "Swargadwari Municipality",
            "palikaNameNep": "स्वर्गद्वारी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a5c",
            "palikaId": 551,
            "districtId": 54,
            "palikaName": "Gaumukhi Rural Municipality",
            "palikaNameNep": "गौमुखी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a5d",
            "palikaId": 552,
            "districtId": 54,
            "palikaName": "Mandavi Rural Municipality",
            "palikaNameNep": "माण्डवी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a5e",
            "palikaId": 553,
            "districtId": 54,
            "palikaName": "Sarumarani Rural Municipality",
            "palikaNameNep": "सरुमारानी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a5f",
            "palikaId": 554,
            "districtId": 54,
            "palikaName": "Mallarani Rural Municipality",
            "palikaNameNep": "मल्लरानी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a60",
            "palikaId": 555,
            "districtId": 54,
            "palikaName": "Naubahini Rural Municipality",
            "palikaNameNep": "नौबहिनी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a61",
            "palikaId": 556,
            "districtId": 54,
            "palikaName": "Jhimaruk Rural Municipality",
            "palikaNameNep": "झिमरुक गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a62",
            "palikaId": 557,
            "districtId": 54,
            "palikaName": "Airawati Rural Municipality",
            "palikaNameNep": "ऐरावती गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a63",
            "palikaId": 558,
            "districtId": 55,
            "palikaName": "Rolpa Municipality",
            "palikaNameNep": "रोल्पा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a64",
            "palikaId": 559,
            "districtId": 55,
            "palikaName": "Triveni Rural Municipality",
            "palikaNameNep": "त्रिवेणी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a65",
            "palikaId": 560,
            "districtId": 55,
            "palikaName": "Duikholi Rural Municipality",
            "palikaNameNep": "दुइखोली गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a66",
            "palikaId": 561,
            "districtId": 55,
            "palikaName": "Madi Rural Municipality",
            "palikaNameNep": "माडी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a67",
            "palikaId": 562,
            "districtId": 55,
            "palikaName": "Runtigadhi Rural Municipality",
            "palikaNameNep": "रुन्टीगढी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a68",
            "palikaId": 563,
            "districtId": 55,
            "palikaName": "Lungri Rural Municipality",
            "palikaNameNep": "लुङ्ग्री गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a69",
            "palikaId": 564,
            "districtId": 55,
            "palikaName": "Sukidaha Rural Municipality",
            "palikaNameNep": "सुकिदह गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a6a",
            "palikaId": 565,
            "districtId": 55,
            "palikaName": "Sunchhahari Rural Municipality",
            "palikaNameNep": "सुनछहरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a6b",
            "palikaId": 566,
            "districtId": 55,
            "palikaName": "Suwarnawati Rural Municipality",
            "palikaNameNep": "सुबर्णवती गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a6c",
            "palikaId": 567,
            "districtId": 55,
            "palikaName": "Thawang Rural Municipality",
            "palikaNameNep": "थवाङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a6d",
            "palikaId": 568,
            "districtId": 56,
            "palikaName": "Musikot Municipality",
            "palikaNameNep": "मुसिकोट नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a6e",
            "palikaId": 569,
            "districtId": 56,
            "palikaName": "Chaurjahari Municipality",
            "palikaNameNep": "चौरजहारी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a6f",
            "palikaId": 570,
            "districtId": 56,
            "palikaName": "Aathbiskot Municipality",
            "palikaNameNep": "आठबिसकोट नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a70",
            "palikaId": 571,
            "districtId": 56,
            "palikaName": "Putha Uttarganga Rural Municipality",
            "palikaNameNep": "पुठा उत्तरगंगा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a71",
            "palikaId": 572,
            "districtId": 56,
            "palikaName": "Bhume Rural Municipality",
            "palikaNameNep": "भूमे गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a72",
            "palikaId": 573,
            "districtId": 56,
            "palikaName": "Sisne Rural Municipality",
            "palikaNameNep": "सिस्ने गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a73",
            "palikaId": 574,
            "districtId": 57,
            "palikaName": "Nepalgunj Sub-Metropolitan",
            "palikaNameNep": "नेपालगंज उपमहानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a74",
            "palikaId": 575,
            "districtId": 57,
            "palikaName": "Kohalpur Municipality",
            "palikaNameNep": "कोहलपुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a75",
            "palikaId": 576,
            "districtId": 57,
            "palikaName": "Narainapur Rural Municipality",
            "palikaNameNep": "नरैनापुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a76",
            "palikaId": 577,
            "districtId": 57,
            "palikaName": "Raptisonari Rural Municipality",
            "palikaNameNep": "राप्ती सोनारी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a77",
            "palikaId": 578,
            "districtId": 57,
            "palikaName": "Baijnath Rural Municipality",
            "palikaNameNep": "वैजनाथ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a78",
            "palikaId": 579,
            "districtId": 57,
            "palikaName": "Khajura Rural Municipality",
            "palikaNameNep": "खजुरा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a79",
            "palikaId": 580,
            "districtId": 57,
            "palikaName": "Duduwa Rural Municipality",
            "palikaNameNep": "डुडुवा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a7a",
            "palikaId": 581,
            "districtId": 57,
            "palikaName": "Janaki Rural Municipality",
            "palikaNameNep": "जानकी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a7b",
            "palikaId": 582,
            "districtId": 58,
            "palikaName": "Gulariya Municipality",
            "palikaNameNep": "गुलरिया नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a7c",
            "palikaId": 583,
            "districtId": 58,
            "palikaName": "Madhuvan Municipality",
            "palikaNameNep": "मधुवन नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a7d",
            "palikaId": 584,
            "districtId": 58,
            "palikaName": "Rajapur Municipality",
            "palikaNameNep": "राजापुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a7e",
            "palikaId": 585,
            "districtId": 58,
            "palikaName": "Thakurbaba Municipality",
            "palikaNameNep": "ठाकुरबाबा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a7f",
            "palikaId": 586,
            "districtId": 58,
            "palikaName": "Bansgadhi Municipality",
            "palikaNameNep": "बाँसगढी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a80",
            "palikaId": 587,
            "districtId": 58,
            "palikaName": "Barbardiya Municipality",
            "palikaNameNep": "बारबर्दिया नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a81",
            "palikaId": 588,
            "districtId": 58,
            "palikaName": "Badhaiyatal Rural Municipality",
            "palikaNameNep": "बढैयाताल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a82",
            "palikaId": 589,
            "districtId": 58,
            "palikaName": "Geruwa Rural Municipality",
            "palikaNameNep": "गेरुवा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a83",
            "palikaId": 590,
            "districtId": 59,
            "palikaName": "Sani Bheri Rural Municipality",
            "palikaNameNep": "सानीभेरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a84",
            "palikaId": 591,
            "districtId": 59,
            "palikaName": "Tribeni Rural Municipality",
            "palikaNameNep": "त्रिवेणी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a85",
            "palikaId": 592,
            "districtId": 59,
            "palikaName": "Banphikot Rural Municipality",
            "palikaNameNep": "बाँफिकोट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a86",
            "palikaId": 593,
            "districtId": 60,
            "palikaName": "Sharda Municipality",
            "palikaNameNep": "शारदा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a87",
            "palikaId": 594,
            "districtId": 60,
            "palikaName": "Bagchaur",
            "palikaNameNep": "बागचौर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a88",
            "palikaId": 595,
            "districtId": 60,
            "palikaName": "Bangad Kupinde Municipality",
            "palikaNameNep": "बनगाड कुपिन्ड़े नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a89",
            "palikaId": 596,
            "districtId": 60,
            "palikaName": "Kalimati Rural Municipality",
            "palikaNameNep": "कालीमाटी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a8a",
            "palikaId": 597,
            "districtId": 60,
            "palikaName": "Tribeni Rural Municipality",
            "palikaNameNep": "त्रिवेणी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a8b",
            "palikaId": 598,
            "districtId": 60,
            "palikaName": "Kapurkot Rural Municipality",
            "palikaNameNep": "कपुरकोट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a8c",
            "palikaId": 599,
            "districtId": 60,
            "palikaName": "Chhatreshwari Rural Municipality",
            "palikaNameNep": "छत्रेश्वरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a8d",
            "palikaId": 600,
            "districtId": 60,
            "palikaName": "Dhorchaur Rural Municipality",
            "palikaNameNep": "ढोरचौर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a8e",
            "palikaId": 601,
            "districtId": 60,
            "palikaName": "Kumakhmalika Rural Municipality",
            "palikaNameNep": "कुमाखमालिका गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a8f",
            "palikaId": 602,
            "districtId": 60,
            "palikaName": "Darma Rural Municipality",
            "palikaNameNep": "दार्मा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a90",
            "palikaId": 603,
            "districtId": 61,
            "palikaName": "Thuli Bheri Municipality",
            "palikaNameNep": "ठुली भेरी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a91",
            "palikaId": 604,
            "districtId": 61,
            "palikaName": "Tripurasundari Municipality",
            "palikaNameNep": "त्रिपुरासुन्दरी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a92",
            "palikaId": 605,
            "districtId": 61,
            "palikaName": "Dolpo Buddha Rural Municipality",
            "palikaNameNep": "डोल्पो बुद्ध गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a93",
            "palikaId": 606,
            "districtId": 61,
            "palikaName": "She Phoksundo Rural Municipality",
            "palikaNameNep": "शे फोक्सुन्डो गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a94",
            "palikaId": 607,
            "districtId": 61,
            "palikaName": "Jagadulla Rural Municipality",
            "palikaNameNep": "जगदुल्ला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a95",
            "palikaId": 608,
            "districtId": 61,
            "palikaName": "Mudkechula Rural Municipality",
            "palikaNameNep": "मुड्केचुला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a96",
            "palikaId": 609,
            "districtId": 61,
            "palikaName": "Kaike Rural Municipality",
            "palikaNameNep": "काईके गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a97",
            "palikaId": 610,
            "districtId": 61,
            "palikaName": "Chharka Tangsong Rural Municipality",
            "palikaNameNep": "छार्का ताङसोङ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a98",
            "palikaId": 611,
            "districtId": 62,
            "palikaName": "Simkot Rural Municipality",
            "palikaNameNep": "सिमकोट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a99",
            "palikaId": 612,
            "districtId": 62,
            "palikaName": "Namkha Rural Municipality",
            "palikaNameNep": "नाम्खा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a9a",
            "palikaId": 613,
            "districtId": 62,
            "palikaName": "Kharpunath Rural Municipality",
            "palikaNameNep": "खार्पुनाथ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a9b",
            "palikaId": 614,
            "districtId": 62,
            "palikaName": "Sarkegad Rural Municipality",
            "palikaNameNep": "सर्केगाड गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a9c",
            "palikaId": 615,
            "districtId": 62,
            "palikaName": "Chankheli Rural Municipality",
            "palikaNameNep": "चंखेली गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a9d",
            "palikaId": 616,
            "districtId": 62,
            "palikaName": "Adanchuli Rural Municipality",
            "palikaNameNep": "अदानचुली गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a9e",
            "palikaId": 617,
            "districtId": 62,
            "palikaName": "Tanjakot Rural Municipality",
            "palikaNameNep": "ताँजाकोट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5a9f",
            "palikaId": 618,
            "districtId": 63,
            "palikaName": "ChandanNath Municipality",
            "palikaNameNep": "चन्दननाथ नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aa0",
            "palikaId": 619,
            "districtId": 63,
            "palikaName": "Kankasundari Rural Municipality",
            "palikaNameNep": "कनकासुन्दरी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aa1",
            "palikaId": 620,
            "districtId": 63,
            "palikaName": "Sinja Rural Municipality",
            "palikaNameNep": "सिंजा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aa2",
            "palikaId": 621,
            "districtId": 63,
            "palikaName": "Hima Rural Municipality",
            "palikaNameNep": "हिमा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aa3",
            "palikaId": 622,
            "districtId": 63,
            "palikaName": "Tila Rural Municipality",
            "palikaNameNep": "तिला गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aa4",
            "palikaId": 623,
            "districtId": 63,
            "palikaName": "Guthichaur Rural Municipality",
            "palikaNameNep": "गुठिचौर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aa5",
            "palikaId": 624,
            "districtId": 63,
            "palikaName": "Tatopani Rural Municipality",
            "palikaNameNep": "तातोपानी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aa6",
            "palikaId": 625,
            "districtId": 63,
            "palikaName": "Patarasi Rural Municipality",
            "palikaNameNep": "पातारासी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aa7",
            "palikaId": 626,
            "districtId": 64,
            "palikaName": "Khadachakra Municipality",
            "palikaNameNep": "खाडाचक्र नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aa8",
            "palikaId": 627,
            "districtId": 64,
            "palikaName": "Raskot Municipality",
            "palikaNameNep": "रास्कोट नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aa9",
            "palikaId": 628,
            "districtId": 64,
            "palikaName": "Tilagufa Municipality",
            "palikaNameNep": "तिलागुफा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aaa",
            "palikaId": 629,
            "districtId": 64,
            "palikaName": "Pachaljharana Rural Municipality",
            "palikaNameNep": "पचालझरना गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aab",
            "palikaId": 630,
            "districtId": 64,
            "palikaName": "Sanni Triveni Rural Municipality",
            "palikaNameNep": "सान्नी त्रिवेणी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aac",
            "palikaId": 631,
            "districtId": 64,
            "palikaName": "Narharinath Rural Municipality",
            "palikaNameNep": "नरहरिनाथ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aad",
            "palikaId": 632,
            "districtId": 64,
            "palikaName": "Shubha Kalika Rural Municipality",
            "palikaNameNep": "शुभ कालिका गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aae",
            "palikaId": 633,
            "districtId": 64,
            "palikaName": "Mahawai Rural Municipality",
            "palikaNameNep": "महावै गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aaf",
            "palikaId": 634,
            "districtId": 64,
            "palikaName": "Palata Rural Municipality",
            "palikaNameNep": "पलाता गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ab0",
            "palikaId": 635,
            "districtId": 65,
            "palikaName": "Chayanath Rara Municipality",
            "palikaNameNep": "छायाँनाथ रारा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ab1",
            "palikaId": 636,
            "districtId": 65,
            "palikaName": "Mugum Karmarong Rural Municipality",
            "palikaNameNep": "मुगुम कार्मारोंग गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ab2",
            "palikaId": 637,
            "districtId": 65,
            "palikaName": "Soru Rural Municipality",
            "palikaNameNep": "सोरु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ab3",
            "palikaId": 638,
            "districtId": 65,
            "palikaName": "Khatyad Rural Municipality",
            "palikaNameNep": "खत्याड गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ab4",
            "palikaId": 639,
            "districtId": 66,
            "palikaName": "Birendranagar Municipality",
            "palikaNameNep": "बीरेन्द्रनगर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ab5",
            "palikaId": 640,
            "districtId": 66,
            "palikaName": "Bheriganga Municipality",
            "palikaNameNep": "भेरीगंगा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ab6",
            "palikaId": 641,
            "districtId": 66,
            "palikaName": "Gurbhakot Municipality",
            "palikaNameNep": "गुर्भाकोट नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ab7",
            "palikaId": 642,
            "districtId": 66,
            "palikaName": "Panchapuri Municipality",
            "palikaNameNep": "पंचपुरी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ab8",
            "palikaId": 643,
            "districtId": 66,
            "palikaName": "Lekhbeshi Municipality",
            "palikaNameNep": "लेकबेशी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ab9",
            "palikaId": 644,
            "districtId": 66,
            "palikaName": "Chaukune Rural Municipality",
            "palikaNameNep": "चौकुने गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aba",
            "palikaId": 645,
            "districtId": 66,
            "palikaName": "Barahatal Rural Municipality",
            "palikaNameNep": "बराहताल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5abb",
            "palikaId": 646,
            "districtId": 66,
            "palikaName": "Chingad Rural Municipality",
            "palikaNameNep": "चिङ्गाड गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5abc",
            "palikaId": 647,
            "districtId": 66,
            "palikaName": "Simta Rural Municipality",
            "palikaNameNep": "सिम्ता गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5abd",
            "palikaId": 648,
            "districtId": 67,
            "palikaName": "Narayan Municipality",
            "palikaNameNep": "नारायण नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5abe",
            "palikaId": 649,
            "districtId": 67,
            "palikaName": "Dullu Municipality",
            "palikaNameNep": "दुल्लु नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5abf",
            "palikaId": 650,
            "districtId": 67,
            "palikaName": "Chamunda Bindrasaini Municipality",
            "palikaNameNep": "चामुण्डा बिन्द्रासैनी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ac0",
            "palikaId": 651,
            "districtId": 67,
            "palikaName": "AathBis Municipality",
            "palikaNameNep": "आठबीस नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ac1",
            "palikaId": 652,
            "districtId": 67,
            "palikaName": "Bhagawatimai Rural Municipality",
            "palikaNameNep": "भगवतीमाई गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ac2",
            "palikaId": 653,
            "districtId": 67,
            "palikaName": "Gurans Rural Municipality",
            "palikaNameNep": "गुराँस गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ac3",
            "palikaId": 654,
            "districtId": 67,
            "palikaName": "Dungeshwar Rural Municipality",
            "palikaNameNep": "डुंगेश्वर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ac4",
            "palikaId": 655,
            "districtId": 67,
            "palikaName": "Naumule Rural Municipality",
            "palikaNameNep": "नौमुले गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ac5",
            "palikaId": 656,
            "districtId": 67,
            "palikaName": "Mahabu Rural Municipality",
            "palikaNameNep": "महावु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ac6",
            "palikaId": 657,
            "districtId": 67,
            "palikaName": "Bhairabi Rural Municipality",
            "palikaNameNep": "भैरवी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ac7",
            "palikaId": 658,
            "districtId": 67,
            "palikaName": "Thantikandh Rural Municipality",
            "palikaNameNep": "ठाँटीकाँध गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ac8",
            "palikaId": 659,
            "districtId": 68,
            "palikaName": "Bheri Municipality",
            "palikaNameNep": "भेरी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ac9",
            "palikaId": 660,
            "districtId": 68,
            "palikaName": "Chhedagad Municipality",
            "palikaNameNep": "छेडागाड नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aca",
            "palikaId": 661,
            "districtId": 68,
            "palikaName": "Triveni Nalgad Municipality",
            "palikaNameNep": "त्रिवेणी नलगाड नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5acb",
            "palikaId": 662,
            "districtId": 68,
            "palikaName": "Kushe Rural Municipality",
            "palikaNameNep": "कुसे गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5acc",
            "palikaId": 663,
            "districtId": 68,
            "palikaName": "Junichande Rural Municipality",
            "palikaNameNep": "जुनीचाँदे गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5acd",
            "palikaId": 664,
            "districtId": 68,
            "palikaName": "Barekot Rural Municipality",
            "palikaNameNep": "बारेकोट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ace",
            "palikaId": 665,
            "districtId": 68,
            "palikaName": "Shivalaya Rural Municipality",
            "palikaNameNep": "शिवालय गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5acf",
            "palikaId": 666,
            "districtId": 69,
            "palikaName": "Dhangadhi Sub-Metropolitan",
            "palikaNameNep": "धनगढी उपमहानगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ad0",
            "palikaId": 667,
            "districtId": 69,
            "palikaName": "Tikapur Municipality",
            "palikaNameNep": "टिकापुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ad1",
            "palikaId": 668,
            "districtId": 69,
            "palikaName": "Ghodaghodi Municipality",
            "palikaNameNep": "घोडाघोडी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ad2",
            "palikaId": 669,
            "districtId": 69,
            "palikaName": "Lamkhichuha Municipality",
            "palikaNameNep": "लम्किचुहा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ad3",
            "palikaId": 670,
            "districtId": 69,
            "palikaName": "Bhajani Municipality",
            "palikaNameNep": "भजनी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ad4",
            "palikaId": 671,
            "districtId": 69,
            "palikaName": "Godawari Municipality",
            "palikaNameNep": "गोदावरी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ad5",
            "palikaId": 672,
            "districtId": 69,
            "palikaName": "Gauriganga Municipality",
            "palikaNameNep": "गौरीगंगा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ad6",
            "palikaId": 673,
            "districtId": 69,
            "palikaName": "Janaki Rural Municipality",
            "palikaNameNep": "जानकी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ad7",
            "palikaId": 674,
            "districtId": 69,
            "palikaName": "Bardagoriya Rural Municipality",
            "palikaNameNep": "बर्गगोरिया गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ad8",
            "palikaId": 675,
            "districtId": 69,
            "palikaName": "Mohanyal Rural Municipality",
            "palikaNameNep": "मोहन्याल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ad9",
            "palikaId": 676,
            "districtId": 69,
            "palikaName": "Kailari Rural Municipality",
            "palikaNameNep": "कैलारी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ada",
            "palikaId": 677,
            "districtId": 69,
            "palikaName": "Joshipur Rural Municipality",
            "palikaNameNep": "जोशीपुर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5adb",
            "palikaId": 678,
            "districtId": 69,
            "palikaName": "Chure Rural Municipality",
            "palikaNameNep": "चुरे गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5adc",
            "palikaId": 679,
            "districtId": 70,
            "palikaName": "Mangalsen Municipality",
            "palikaNameNep": "मंगलसेन नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5add",
            "palikaId": 680,
            "districtId": 70,
            "palikaName": "Kamalbazar Municipality",
            "palikaNameNep": "कमलबजार नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ade",
            "palikaId": 681,
            "districtId": 70,
            "palikaName": "Sanfebagar",
            "palikaNameNep": "साँफेबगर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5adf",
            "palikaId": 682,
            "districtId": 70,
            "palikaName": "Panchadeval Binayak Municipality",
            "palikaNameNep": "पंचदेवल विनायक नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ae0",
            "palikaId": 683,
            "districtId": 70,
            "palikaName": "Chaurpati Rural Municipality",
            "palikaNameNep": "चौरपाटी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ae1",
            "palikaId": 684,
            "districtId": 70,
            "palikaName": "Mellekh Rural Municipality",
            "palikaNameNep": "मेल्लेख गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ae2",
            "palikaId": 685,
            "districtId": 70,
            "palikaName": "Bannigadi Jayagad Rural Municipality",
            "palikaNameNep": "बान्नीगडीजैगड गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ae3",
            "palikaId": 686,
            "districtId": 70,
            "palikaName": "Ramaroshan Rural Municipality",
            "palikaNameNep": "रामारोशन गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ae4",
            "palikaId": 687,
            "districtId": 70,
            "palikaName": "Dhankari Rural Municipality",
            "palikaNameNep": "ढँकारी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ae5",
            "palikaId": 688,
            "districtId": 70,
            "palikaName": "Turmakhand Rural Municipality",
            "palikaNameNep": "तुर्माखाँद गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ae6",
            "palikaId": 689,
            "districtId": 71,
            "palikaName": "Dipayal Silgadi Municipality",
            "palikaNameNep": "दिपायल सिलगडी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ae7",
            "palikaId": 690,
            "districtId": 71,
            "palikaName": "Shikhar Municipality",
            "palikaNameNep": "शिखर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ae8",
            "palikaId": 691,
            "districtId": 71,
            "palikaName": "Purbichauki Rural Municipality",
            "palikaNameNep": "पूर्वीचौकी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5ae9",
            "palikaId": 692,
            "districtId": 71,
            "palikaName": "Badikedar Rural Municipality",
            "palikaNameNep": "बड्डी केदार गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aea",
            "palikaId": 693,
            "districtId": 71,
            "palikaName": "Jorayal Rural Municipality",
            "palikaNameNep": "जोरायल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aeb",
            "palikaId": 694,
            "districtId": 71,
            "palikaName": "Sayal Rural Municipality",
            "palikaNameNep": "सायल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aec",
            "palikaId": 695,
            "districtId": 71,
            "palikaName": "Aadarsha Rural Municipality",
            "palikaNameNep": "आदर्श गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aed",
            "palikaId": 696,
            "districtId": 71,
            "palikaName": "K.I. Singh Rural Municipality",
            "palikaNameNep": "केआईसिंह गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aee",
            "palikaId": 697,
            "districtId": 71,
            "palikaName": "Bogatan-Phudsil Rural Municipality",
            "palikaNameNep": "वोगटान–फुड्सिल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aef",
            "palikaId": 698,
            "districtId": 72,
            "palikaName": "JayaPrithivi Municipality",
            "palikaNameNep": "जयपृथिवी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5af0",
            "palikaId": 699,
            "districtId": 72,
            "palikaName": "Bungal Municipality",
            "palikaNameNep": "बुंगल नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5af1",
            "palikaId": 700,
            "districtId": 72,
            "palikaName": "Talkot Rural Municipality",
            "palikaNameNep": "तलकोट गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5af2",
            "palikaId": 701,
            "districtId": 72,
            "palikaName": "Masta Rural Municipality",
            "palikaNameNep": "मष्टा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5af3",
            "palikaId": 702,
            "districtId": 72,
            "palikaName": "Thalara Rural Municipality",
            "palikaNameNep": "थलारा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5af4",
            "palikaId": 703,
            "districtId": 72,
            "palikaName": "Khaptad Chhanna Rural Municipality",
            "palikaNameNep": "खप्तड छान्ना गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5af5",
            "palikaId": 704,
            "districtId": 72,
            "palikaName": "Bitthadchir Rural Municipality",
            "palikaNameNep": "बित्थडचिर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5af6",
            "palikaId": 705,
            "districtId": 72,
            "palikaName": "Surma Rural Municipality",
            "palikaNameNep": "सुर्मा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5af7",
            "palikaId": 706,
            "districtId": 72,
            "palikaName": "Chhabis Pathibhera Rural Municipality",
            "palikaNameNep": "छब्बीसपाथिभेरा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5af8",
            "palikaId": 707,
            "districtId": 72,
            "palikaName": "Durgathali Rural Municipality",
            "palikaNameNep": "दुर्गाथली गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5af9",
            "palikaId": 708,
            "districtId": 72,
            "palikaName": "Kedarsyu Rural Municipality",
            "palikaNameNep": "केदारस्यु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5afa",
            "palikaId": 709,
            "districtId": 72,
            "palikaName": "Kanda Saipal Rural Municipality",
            "palikaNameNep": "काँडा सइपाल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5afb",
            "palikaId": 710,
            "districtId": 73,
            "palikaName": "Badimalika",
            "palikaNameNep": "बडीमालिका नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5afc",
            "palikaId": 711,
            "districtId": 73,
            "palikaName": "Triveni Municipality",
            "palikaNameNep": "त्रिवेणी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5afd",
            "palikaId": 712,
            "districtId": 73,
            "palikaName": "Budhiganga Municipality",
            "palikaNameNep": "बुढीगंगा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5afe",
            "palikaId": 713,
            "districtId": 73,
            "palikaName": "Budhinanda Municipality",
            "palikaNameNep": "बुढीनन्दा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5aff",
            "palikaId": 714,
            "districtId": 73,
            "palikaName": "Gaumul Rural Municipality",
            "palikaNameNep": "गौमुल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b00",
            "palikaId": 715,
            "districtId": 73,
            "palikaName": "Swami Kartik Khapar Rural Municipality",
            "palikaNameNep": "स्वामिकार्तिक खापर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b01",
            "palikaId": 716,
            "districtId": 73,
            "palikaName": "Khaptad Chhededaha Rural Municipality",
            "palikaNameNep": "खप्तड छेडेदह गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b02",
            "palikaId": 717,
            "districtId": 73,
            "palikaName": "Himali Rural Municipality",
            "palikaNameNep": "हिमाली गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b03",
            "palikaId": 718,
            "districtId": 73,
            "palikaName": "Swami Kartik Khapar Rural Municipality",
            "palikaNameNep": "स्वामिकार्तिक खापर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b04",
            "palikaId": 719,
            "districtId": 74,
            "palikaName": "Bhimdatta Municipality",
            "palikaNameNep": "भिमदत्त नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b05",
            "palikaId": 720,
            "districtId": 74,
            "palikaName": "Punarbas Municipality",
            "palikaNameNep": "पुनर्बास नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b06",
            "palikaId": 721,
            "districtId": 74,
            "palikaName": "Bedkot Municipality",
            "palikaNameNep": "बेदकोट नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b07",
            "palikaId": 722,
            "districtId": 74,
            "palikaName": "Mahakali Municipality",
            "palikaNameNep": "महाकाली नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b08",
            "palikaId": 723,
            "districtId": 74,
            "palikaName": "Shuklafata Municipality",
            "palikaNameNep": "शुक्लाफाटा नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b09",
            "palikaId": 724,
            "districtId": 74,
            "palikaName": "Belauri Municipality",
            "palikaNameNep": "बेलौरी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b0a",
            "palikaId": 725,
            "districtId": 74,
            "palikaName": "Krishnapur Municipality",
            "palikaNameNep": "कृष्णपुर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b0b",
            "palikaId": 726,
            "districtId": 74,
            "palikaName": "Beldandi Rural Municipality",
            "palikaNameNep": "बेलडाँडी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b0c",
            "palikaId": 727,
            "districtId": 74,
            "palikaName": "Laljhadi Rural Municipality",
            "palikaNameNep": "लालझाँडी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b0d",
            "palikaId": 728,
            "districtId": 75,
            "palikaName": "Amargadhi Municipality",
            "palikaNameNep": "अमरगढी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b0e",
            "palikaId": 729,
            "districtId": 75,
            "palikaName": "Parshuram Municipality",
            "palikaNameNep": "परशुराम नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b0f",
            "palikaId": 730,
            "districtId": 75,
            "palikaName": "Aalitaal Rural Municipality",
            "palikaNameNep": "आलिताल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b10",
            "palikaId": 731,
            "districtId": 75,
            "palikaName": "Bhageshwar Rural Municipality",
            "palikaNameNep": "भागेश्वर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b11",
            "palikaId": 732,
            "districtId": 75,
            "palikaName": "Navadurga Rural Municipality",
            "palikaNameNep": "नवदुर्गा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b12",
            "palikaId": 733,
            "districtId": 75,
            "palikaName": "Ajaymeru Rural Municipality",
            "palikaNameNep": "अजयमेरु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b13",
            "palikaId": 734,
            "districtId": 75,
            "palikaName": "Ganyapadhura Rural Municipality",
            "palikaNameNep": "गन्यापधुरा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b14",
            "palikaId": 735,
            "districtId": 76,
            "palikaName": "Dasharathchand Municipality",
            "palikaNameNep": "दशरथचन्द नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b15",
            "palikaId": 736,
            "districtId": 76,
            "palikaName": "Patan Municipality",
            "palikaNameNep": "पाटन नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b16",
            "palikaId": 737,
            "districtId": 76,
            "palikaName": "Melauli Municipality",
            "palikaNameNep": "मेलौली नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b17",
            "palikaId": 738,
            "districtId": 76,
            "palikaName": "Puchaundi Municipality",
            "palikaNameNep": "पुचौडी नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b18",
            "palikaId": 739,
            "districtId": 76,
            "palikaName": "Surnaya Rural Municipality",
            "palikaNameNep": "सुर्नया गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b19",
            "palikaId": 740,
            "districtId": 76,
            "palikaName": "Sigas Rural Municipality",
            "palikaNameNep": "सिगास गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b1a",
            "palikaId": 741,
            "districtId": 76,
            "palikaName": "Shivanath Rural Municipality",
            "palikaNameNep": "शिवनाथ गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b1b",
            "palikaId": 742,
            "districtId": 76,
            "palikaName": "Pancheshwar Rural Municipality",
            "palikaNameNep": "पञ्चेश्वर गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b1c",
            "palikaId": 743,
            "districtId": 76,
            "palikaName": "Dogdakedar Rural Municipality",
            "palikaNameNep": "दोगडाकेदार गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b1d",
            "palikaId": 744,
            "districtId": 76,
            "palikaName": "Dilashaini Rural Municipality",
            "palikaNameNep": "डिलाशैनी गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b1e",
            "palikaId": 745,
            "districtId": 77,
            "palikaName": "Mahakali Municipality",
            "palikaNameNep": "महाकाली नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b1f",
            "palikaId": 746,
            "districtId": 77,
            "palikaName": "ShilyaShikhar Municipality",
            "palikaNameNep": "शिल्यशिखर नगरपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b20",
            "palikaId": 747,
            "districtId": 77,
            "palikaName": "Malikarjun Rural Municipality",
            "palikaNameNep": "मालिकार्जुन गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b21",
            "palikaId": 748,
            "districtId": 77,
            "palikaName": "Api Himal Rural Municipality",
            "palikaNameNep": "अपि हिमाल गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b22",
            "palikaId": 749,
            "districtId": 77,
            "palikaName": "Duhu Rural Municipality",
            "palikaNameNep": "दुहु गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b23",
            "palikaId": 750,
            "districtId": 77,
            "palikaName": "Naugad Rural Municipality",
            "palikaNameNep": "नौगाड गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b24",
            "palikaId": 751,
            "districtId": 77,
            "palikaName": "Marma Rural Municipality",
            "palikaNameNep": "मार्मा गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b25",
            "palikaId": 752,
            "districtId": 77,
            "palikaName": "Lekam Rural Municipality",
            "palikaNameNep": "लेकम गाउँपालिका",
            "palikaCode": null,
            "district": null
        },
        {
            "_id": "65b6e56e08bf250197cb5b26",
            "palikaId": 753,
            "districtId": 77,
            "palikaName": "Vyans Rural Municipality",
            "palikaNameNep": "ब्याँस गाउँपालिका",
            "palikaCode": null,
            "district": null
        }
    ]
    try {
       const response =  await Palika.insertMany(data)
       return res.status(200).json(new ApiResponse(response))
    } catch (error) {
        
    }
}

export async function InsertState(req,res){
    const data = [
        {
            "_id": "65b6e4a2063fa21114fe9241",
            "stateId": 1,
            "stateName": "Koshi Province",
            "stateNameNep": "कोशी प्रदेश",
            "stateCode": null
        },
        {
            "_id": "65b6e4a2063fa21114fe9242",
            "stateId": 2,
            "stateName": "Madhesh Province",
            "stateNameNep": "मधेश प्रदेश",
            "stateCode": null
        },
        {
            "_id": "65b6e4a2063fa21114fe9243",
            "stateId": 3,
            "stateName": "Bagmati",
            "stateNameNep": "बागमती",
            "stateCode": null
        },
        {
            "_id": "65b6e4a2063fa21114fe9244",
            "stateId": 4,
            "stateName": "Gandaki",
            "stateNameNep": "गण्डकी",
            "stateCode": null
        },
        {
            "_id": "65b6e4a2063fa21114fe9245",
            "stateId": 5,
            "stateName": "Lumbini",
            "stateNameNep": "लुम्बिनी",
            "stateCode": null
        },
        {
            "_id": "65b6e4a2063fa21114fe9246",
            "stateId": 6,
            "stateName": "Karnali",
            "stateNameNep": "कर्णाली",
            "stateCode": null
        },
        {
            "_id": "65b6e4a2063fa21114fe9247",
            "stateId": 7,
            "stateName": "Sudurpaschim",
            "stateNameNep": "सुदुरपश्चिम",
            "stateCode": null
        }
    ]
    try {
            await State.insertMany(data)
    } catch (error) {
        
    }
}

export async function GetState(req,res){
    try {
        const response = await State.find({});
        return res.status(200).json(new ApiResponse(200,response,'State fetched successfully'))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}

export async function GetDistrict(req,res){
    try {
        const {stateId} = req.query;
        const response = await District.find({stateId:stateId});
        return res.status(200).json(new ApiResponse(200,response,'District fetched successfully'))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}

export async function GetPalika(req,res){
    try {
        const {districtId} = req.query;
        const response = await Palika.find({districtId:districtId});
        return res.status(200).json(new ApiResponse(200,response,"Palika fetched successfully"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}