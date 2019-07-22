//ScreenCapture-related functions
(function ($, core) {

	var A = core.Language = {
		
		constructor: function () {
			this.locationCode = {
				'Afghanistan': 'AF', 'Aland Islands': 'AX', 'Albania': 'AL', 'Algeria': 'DZ', 'American Samoa': 'AS', 'Andorra': 'AD', 'Angola': 'AO', 'Anguilla': 'AI', 'Antarctica': 'AQ', 'Antigua And Barbuda': 'AG', 'Argentina': 'AR', 'Armenia': 'AM', 'Aruba': 'AW', 'Australia': 'AU', 'Austria': 'AT', 'Azerbaijan': 'AZ', 'Bahamas': 'BS', 'Bahrain': 'BH', 'Bangladesh': 'BD', 'Barbados': 'BB', 'Belarus': 'BY', 'Belgium': 'BE', 'Belize': 'BZ', 'Benin': 'BJ', 'Bermuda': 'BM', 'Bhutan': 'BT', 'Bolivia': 'BO', 'Bosnia And Herzegovina': 'BA', 'Botswana': 'BW', 'Bouvet Island': 'BV', 'Brazil': 'BR', 'British Indian Ocean Territory': 'IO', 'Brunei Darussalam': 'BN', 'Bulgaria': 'BG', 'Burkina Faso': 'BF', 'Burundi': 'BI', 'Cambodia': 'KH', 'Cameroon': 'CM', 'Canada': 'CA', 'Cape Verde': 'CV', 'Cayman Islands': 'KY', 'Central African Republic': 'CF', 'Chad': 'TD', 'Chile': 'CL', 'China': 'CN', 'Christmas Island': 'CX', 'Cocos (Keeling) Islands': 'CC', 'Colombia': 'CO', 'Comoros': 'KM', 'Congo': 'CG', 'Congo, Democratic Republic': 'CD', 'Cook Islands': 'CK', 'Costa Rica': 'CR', "Cote D'Ivoire": 'CI', 'Croatia': 'HR', 'Cuba': 'CU', 'Cyprus': 'CY', 'Czech Republic': 'CZ', 'Denmark': 'DK', 'Djibouti': 'DJ', 'Dominica': 'DM', 'Dominican Republic': 'DO', 'Ecuador': 'EC', 'Egypt': 'EG', 'El Salvador': 'SV', 'Equatorial Guinea': 'GQ', 'Eritrea': 'ER', 'Estonia': 'EE', 'Ethiopia': 'ET', 'Falkland Islands': 'FK', 'Faroe Islands': 'FO', 'Fiji': 'FJ', 'Finland': 'FI', 'France': 'FR', 'French Guiana': 'GF', 'French Polynesia': 'PF', 'French Southern Territories': 'TF', 'Gabon': 'GA', 'Gambia': 'GM', 'Georgia': 'GE', 'Germany': 'DE', 'Ghana': 'GH', 'Gibraltar': 'GI', 'Greece': 'GR', 'Greenland': 'GL', 'Grenada': 'GD', 'Guadeloupe': 'GP', 'Guam': 'GU', 'Guatemala': 'GT', 'Guernsey': 'GG', 'Guinea': 'GN', 'Guinea-Bissau': 'GW', 'Guyana': 'GY', 'Haiti': 'HT', 'Heard Island & Mcdonald Islands': 'HM', 'Holy See (Vatican City State)': 'VA', 'Honduras': 'HN', 'Hong Kong': 'HK', 'Hungary': 'HU', 'Iceland': 'IS', 'India': 'IN', 'Indonesia': 'ID', 'Iran, Islamic Republic Of': 'IR', 'Iraq': 'IQ', 'Ireland': 'IE', 'Isle Of Man': 'IM', 'Israel': 'IL', 'Italy': 'IT', 'Jamaica': 'JM', 'Japan': 'JP', 'Jersey': 'JE', 'Jordan': 'JO', 'Kazakhstan': 'KZ', 'Kenya': 'KE', 'Kiribati': 'KI', 'Republic of Korea': 'KR', 'South Korea': 'KR', "Democratic People's Republic of Korea": 'KP', 'North Korea': 'KP', 'Kuwait': 'KW', 'Kyrgyzstan': 'KG', "Lao People's Democratic Republic": 'LA', 'Latvia': 'LV', 'Lebanon': 'LB', 'Lesotho': 'LS', 'Liberia': 'LR', 'Libyan Arab Jamahiriya': 'LY', 'Liechtenstein': 'LI', 'Lithuania': 'LT', 'Luxembourg': 'LU', 'Macao': 'MO', 'Macedonia': 'MK', 'Madagascar': 'MG', 'Malawi': 'MW', 'Malaysia': 'MY', 'Maldives': 'MV', 'Mali': 'ML', 'Malta': 'MT', 'Marshall Islands': 'MH', 'Martinique': 'MQ', 'Mauritania': 'MR', 'Mauritius': 'MU', 'Mayotte': 'YT', 'Mexico': 'MX', 'Micronesia, Federated States Of': 'FM', 'Moldova': 'MD', 'Monaco': 'MC', 'Mongolia': 'MN', 'Montenegro': 'ME', 'Montserrat': 'MS', 'Morocco': 'MA', 'Mozambique': 'MZ', 'Myanmar': 'MM', 'Namibia': 'NA', 'Nauru': 'NR', 'Nepal': 'NP', 'Netherlands': 'NL', 'Netherlands Antilles': 'AN', 'New Caledonia': 'NC', 'New Zealand': 'NZ', 'Nicaragua': 'NI', 'Niger': 'NE', 'Nigeria': 'NG', 'Niue': 'NU', 'Norfolk Island': 'NF', 'Northern Mariana Islands': 'MP', 'Norway': 'NO', 'Oman': 'OM', 'Pakistan': 'PK', 'Palau': 'PW', 'Palestinian Territory, Occupied': 'PS', 'Panama': 'PA', 'Papua New Guinea': 'PG', 'Paraguay': 'PY', 'Peru': 'PE', 'Philippines': 'PH', 'Pitcairn': 'PN', 'Poland': 'PL', 'Portugal': 'PT', 'Puerto Rico': 'PR', 'Qatar': 'QA', 'Reunion': 'RE', 'Romania': 'RO', 'Russian Federation': 'RU', 'Rwanda': 'RW', 'Saint Barthelemy': 'BL', 'Saint Helena': 'SH', 'Saint Kitts And Nevis': 'KN', 'Saint Lucia': 'LC', 'Saint Martin': 'MF', 'Saint Pierre And Miquelon': 'PM', 'Saint Vincent And Grenadines': 'VC', 'Samoa': 'WS', 'San Marino': 'SM', 'Sao Tome And Principe': 'ST', 'Saudi Arabia': 'SA', 'Senegal': 'SN', 'Serbia': 'RS', 'Seychelles': 'SC', 'Sierra Leone': 'SL', 'Singapore': 'SG', 'Slovakia': 'SK', 'Slovenia': 'SI', 'Solomon Islands': 'SB', 'Somalia': 'SO', 'South Africa': 'ZA', 'South Georgia And Sandwich Isl.': 'GS', 'Spain': 'ES', 'Sri Lanka': 'LK', 'Sudan': 'SD', 'Suriname': 'SR', 'Svalbard And Jan Mayen': 'SJ', 'Swaziland': 'SZ', 'Sweden': 'SE', 'Switzerland': 'CH', 'Syrian Arab Republic': 'SY', 'Taiwan': 'TW', 'Tajikistan': 'TJ', 'Tanzania': 'TZ', 'Thailand': 'TH', 'Timor-Leste': 'TL', 'Togo': 'TG', 'Tokelau': 'TK', 'Tonga': 'TO', 'Trinidad And Tobago': 'TT', 'Tunisia': 'TN', 'Turkey': 'TR', 'Turkmenistan': 'TM', 'Turks And Caicos Islands': 'TC', 'Tuvalu': 'TV', 'Uganda': 'UG', 'Ukraine': 'UA', 'United Arab Emirates': 'AE', 'United Kingdom': 'GB', 'United States': 'US', 'United States Outlying Islands': 'UM', 'Uruguay': 'UY', 'Uzbekistan': 'UZ', 'Vanuatu': 'VU', 'Venezuela': 'VE', 'Vietnam': 'VN', 'Virgin Islands, British': 'VG', 'Virgin Islands, U.S.': 'VI', 'Wallis And Futuna': 'WF', 'Western Sahara': 'EH', 'Yemen': 'YE', 'Zambia': 'ZM', 'Zimbabwe': 'ZW'
			};
			
			this.jpnChar = {
				read: {
					'あ': 'a', 'ぁ': 'a', 'か': 'ka', 'が': 'ga', 'さ': 'sa', 'ざ': 'za', 'た': 'ta', 'だ': 'da',     /***/
					'な': 'na', 'は': 'ha', 'ば': 'ba', 'ぱ': 'pa', 'ま': 'ma', 'や': 'ya', 'ら': 'ra', 'わ': 'wa', 'ゎ': 'lwa',     /***/
					'い': 'i', 'ぃ': 'i', 'き': 'ki', 'ま': 'ma', 'ぎ': 'gi', 'し': 'si', 'じ': 'zi', 'ち': 'ti', 'ぢ': 'di',     /***/
					'に': 'ni', 'ひ': 'hi', 'び': 'bi', 'ぴ': 'pi', 'み': 'mi', 'り': 'ri',     /***/
					'う': 'u', 'ぅ': 'u', 'く': 'ku', 'ぐ': 'gu', 'す': 'su', 'ず': 'zu', 'つ': 'tu', 'づ': 'du',     /***/
					'ぬ': 'nu', 'ふ': 'hu', 'ぶ': 'bu', 'ぷ': 'pu', 'む': 'mu', 'ゆ': 'yu', 'ゅ': 'lyu', 'る': 'ru',     /***/
					'え': 'e', 'ぇ': 'e', 'け': 'ke', 'げ': 'ge', 'せ': 'se', 'ぜ': 'ze', 'て': 'te', 'で': 'de',     /***/
					'ね': 'ne', 'へ': 'he', 'べ': 'be', 'ぺ': 'pe', 'め': 'me', 'れ': 're',     /***/
					'お': 'o', 'ぉ': 'o', 'こ': 'ko', 'ご': 'go', 'そ': 'so', 'ぞ': 'zo', 'と': 'to', 'ど': 'do',     /***/
					'の': 'no', 'ほ': 'ho', 'ぼ': 'bo', 'ぽ': 'po', 'も': 'mo', 'よ': 'yo', 'ょ': 'lyo', 'ろ': 'ro', 'を': 'wo',     /***/
					'ア': 'a', 'ァ': 'a', 'カ': 'ka', 'ガ': 'ga', 'サ': 'sa', 'ザ': 'za', 'タ': 'ta', 'ダ': 'da',     /***/
					'ナ': 'na', 'ハ': 'ha', 'バ': 'ba', 'パ': 'pa', 'マ': 'ma', 'ヤ': 'ya', 'ャ': 'lya', 'ラ': 'ra', 'ワ': 'wa', 'ヮ': 'lwa', 'ン': 'n',     /***/
					'イ': 'i', 'ィ': 'i', 'キ': 'ki', 'ギ': 'gi', 'シ': 'si', 'ジ': 'zi', 'チ': 'ti', 'ヂ': 'di',     /***/
					'ニ': 'ni', 'ヒ': 'hi', 'ビ': 'bi', 'ピ': 'pi', 'ミ': 'mi', 'リ': 'ri',     /***/
					'ウ': 'u', 'ゥ': 'u', 'ク': 'ku', 'グ': 'gu', 'ス': 'su', 'ズ': 'zu', 'ツ': 'tu', 'ヅ': 'du',     /***/
					'ヌ': 'nu', 'フ': 'hu', 'ブ': 'bu', 'プ': 'pu', 'ム': 'mu', 'ユ': 'yu', 'ュ': 'lyu', 'ル': 'ru',     /***/
					'エ': 'e', 'ェ': 'e', 'ケ': 'ke', 'ゲ': 'ge', 'セ': 'se', 'ゼ': 'ze', 'テ': 'te', 'デ': 'de',     /***/
					'ネ': 'ne', 'ヘ': 'he', 'ベ': 'be', 'ペ': 'pe', 'メ': 'me', 'レ': 're',     /***/
					'オ': 'o', 'ォ': 'o', 'コ': 'ko', 'ゴ': 'go', 'ソ': 'so', 'ゾ': 'zo', 'ト': 'to', 'ド': 'do',     /***/
					'ノ': 'no', 'ホ': 'ho', 'ボ': 'bo', 'ポ': 'po', 'モ': 'mo', 'ヨ': 'yo', 'ョ': 'lyo', 'ロ': 'ro', 'ヲ': 'wo'
				}, conversation: {
					'Hello': '初めまして。', 'Nice meet you': 'どうぞよろしく。', 'How are you': 'どうお過ごしですか。'
				}, number: {
					'いち': 1, 'に': 2, 'さん': 3, 'よん': 4, 'ご': 5, 'ろく': 6, 'なな': 7, 'はち': 8, 'きゅう': 9
				}
			};
			
			this.indoChar = {
				read: {
					'अ': 'a', 'इ': 'i', 'उ': 'u', 'ऋ': 'ṛ', 'ऌ': 'ḷ',     /***/
					'प': 'pa', 'पि': 'pi', 'पु': 'pu', 'पृ': 'pṛ', 'पॢ': 'pḷ',     /***/
					'आ': 'ā', 'ई': 'ī', 'ऊ': 'ū', 'ॠ': 'ṝ', 'ॡ': 'ḹ',     /***/
					'पा': 'pā', 'पी': 'pī', 'पू': 'pū', 'पॄ': 'pṝ', 'पॣ': 'pḹ',     /***/
					'क': 'ka', 'च': 'ca', 'ट': 'ṭa', 'त': 'ta', 'प': 'pa',     /***/
					'ख': 'kha', 'छ': 'cha', 'ठ': 'ṭha', 'थ': 'tha', 'फ': 'pha',     /***/
					'ग': 'ga', 'ज': 'ja', 'ड': 'ḍa', 'द': 'da', 'ब': 'ba',     /***/
					'घ': 'gha', 'झ': 'jha', 'ढ': 'ḍha', 'ध': 'dha', 'भ': 'bha',     /***/
					'ङ': 'ṅa', 'ञ': 'ña', 'ण': 'ṇa', 'न': 'na', 'म': 'ma'
				}
			};
			
			this.rusianChar = {
				read: {
					'А': 'a', 'a': 'a', 'Б': 'b', 'б': 'b', 'В': 'v', 'в': 'v', 'Г': 'g', 'г': 'g', 'Д': 'd', 'д': 'd', 'Е': 'je', 'е': 'je', 'Ё': 'jo', 'ё': 'jo', 'Ж': 'ʒ', 'ж': 'ʒ', 'З': 'z', 'з': 'z', 'И': 'i', 'и': 'i', 'Й': 'j', 'й': 'j', 'К': 'k', 'к': 'k', 'Л': 'l', 'л': 'l', 'М': 'm', 'м': 'm', 'Н': 'n', 'н': 'n', 'О': 'o', 'о': 'o', 'П': 'p', 'п': 'p', 'Р': 'r', 'р': 'r', 'С': 's', 'Т': 't', 'т': 't', 'У': 'u', 'у': 'u', 'Ф': 'f', 'ф': 'f', 'Х': 'x', 'х': 'x', 'Ц': 'ts', 'ц': 'ts', 'Ч': 'tʃ', 'ч': 'tʃ', 'Ш': 'ʃ', 'ш': 'ʃ', 'Щ': 'ts', 'щ': 'ʃtʃ', 'ц': 'ʃtʃ', 'Ъ': '-', 'ъ': '-', 'Ы': 'ɨ', 'ы': 'ɨ', 'Ь': 'ʲ', 'ь': 'ʲ', 'Э': 'ɛ', 'э': 'ɛ', 'Ю': 'ju', 'ю': 'ju', 'Я': 'ja', 'я': 'ja'
				}, conversation: {
					'Hello': 'Здравствуйте', 'Nice meet you': 'Рад встрече', 'How are you?': 'Как дела?'
				}
			};
			
			this.korChar = {
				lead: ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], vowel: ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'], tail: ['ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], read: {
					//Vowel
					'아': 'a', 
					'에': 'e', 	'이': 'i', 	'오': 'o'
				}, number: ['일', '이', '삼', '사', '오', '육', '칠', '팔', '구']
			};
			
			this.locationNaturalCode = {
				'japanese': '日本語', 'bulgarian': 'български', 'czech': 'čeština', 'danish': 'Dansk', 'dutch': 'Nederlands', 'english': 'English', 'finnish': 'Suomi', 'french': 'Français', 'greek': 'Ελληνικά', 'german': 'Deutsch', 'hungarian': 'Magyar', 'italian': 'Italiano', 'koreana': '한국어', 'norwegian': 'Norsk', 'polish': 'Polski', 'portuguese': 'Português', 'brazilian': 'Português-Brasil', 'russian': 'Русский', 'romanian': 'Română', 'schinese': '简体中文', 'spanish': 'Español', 'swedish': 'Svenska', 'tchinese': '繁體中文', 'thai': 'ไทย', 'turkish': 'Türkçe'
			};
		}
		
	};
	
	A.constructor();
	
})(jQuery, $.core);