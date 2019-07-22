'use strict';

(function ($, core) {

	var A = core.Imoticon = {
		constructor: function () {
			this.unicodeImoticon = {
				"00a9": ["©", "", "󾬩", ["copyright"]], "00ae": ["®", "", "󾬭", ["registered"]], "203c": ["‼", "", "󾬆", ["bangbang"]], 2049: ["⁉", "", "󾬅", ["interrobang"]], 2122: ["™", "", "󾬪", ["tm"]], 2139: ["ℹ", "", "󾭇", ["information_source"]], 2194: ["↔", "", "󾫶", ["left_right_arrow"]], 2195: ["↕", "", "󾫷", ["arrow_up_down"]], 2196: ["↖", "", "󾫲", ["arrow_upper_left"]], 2197: ["↗", "", "󾫰", ["arrow_upper_right"]], 2198: ["↘", "", "󾫱", ["arrow_lower_right"]], 2199: ["↙", "", "󾫳", ["arrow_lower_left"]], "21a9": ["↩", "", "󾮃", ["leftwards_arrow_with_hook"]], "21aa": ["↪", "", "󾮈", ["arrow_right_hook"]], "231a": ["⌚", "", "󾀝", ["watch"]], "231b": ["⌛", "", "󾀜", ["hourglass"]], "23e9": ["⏩", "", "󾫾", ["fast_forward"]], "23ea": ["⏪", "", "󾫿", ["rewind"]], "23eb": ["⏫", "", "󾬃", ["arrow_double_up"]], "23ec": ["⏬", "", "󾬂", ["arrow_double_down"]], "23f0": ["⏰", "", "󾀪", ["alarm_clock"]], "23f3": ["⏳", "", "󾀛", ["hourglass_flowing_sand"]], "24c2": ["Ⓜ", "", "󾟡", ["m"]], "25aa": ["▪", "", "󾭮", ["black_small_square"]], "25ab": ["▫", "", "󾭭", ["white_small_square"]], "25b6": ["▶", "", "󾫼", ["arrow_forward"]], "25c0": ["◀", "", "󾫽", ["arrow_backward"]], "25fb": ["◻", "", "󾭱", ["white_medium_square"]], "25fc": ["◼", "", "󾭲", ["black_medium_square"]], "25fd": ["◽", "", "󾭯", ["white_medium_small_square"]], "25fe": ["◾", "", "󾭰", ["black_medium_small_square"]], 2600: ["☀", "", "󾀀", ["sunny"]], 2601: ["☁", "", "󾀁", ["cloud"]], "260e": ["☎", "", "󾔣", ["phone", "telephone"]], 2611: ["☑", "", "󾮋", ["ballot_box_with_check"]], 2614: ["☔", "", "󾀂", ["umbrella"]], 2615: ["☕", "", "󾦁", ["coffee"]], "261d": ["☝", "", "󾮘", ["point_up"]], "263a": ["☺", "", "󾌶", ["relaxed"]], 2648: ["♈", "", "󾀫", ["aries"]], 2649: ["♉", "", "󾀬", ["taurus"]], "264a": ["♊", "", "󾀭", ["gemini"]], "264b": ["♋", "", "󾀮", ["cancer"]], "264c": ["♌", "", "󾀯", ["leo"]], "264d": ["♍", "", "󾀰", ["virgo"]], "264e": ["♎", "", "󾀱", ["libra"]], "264f": ["♏", "", "󾀲", ["scorpius"]], 2650: ["♐", "", "󾀳", ["sagittarius"]], 2651: ["♑", "", "󾀴", ["capricorn"]], 2652: ["♒", "", "󾀵", ["aquarius"]], 2653: ["♓", "", "󾀶", ["pisces"]], 2660: ["♠", "", "󾬛", ["spades"]], 2663: ["♣", "", "󾬝", ["clubs"]], 2665: ["♥", "", "󾬚", ["hearts"]], 2666: ["♦", "", "󾬜", ["diamonds"]], 2668: ["♨", "", "󾟺", ["hotsprings"]], "267b": ["♻", "", "󾬬", ["recycle"]], "267f": ["♿", "", "󾬠", ["wheelchair"]], 2693: ["⚓", "", "󾓁", ["anchor"]], "26a0": ["⚠", "", "󾬣", ["warning"]], "26a1": ["⚡", "", "󾀄", ["zap"]], "26aa": ["⚪", "", "󾭥", ["white_circle"]], "26ab": ["⚫", "", "󾭦", ["black_circle"]], "26bd": ["⚽", "", "󾟔", ["soccer"]], "26be": ["⚾", "", "󾟑", ["baseball"]], "26c4": ["⛄", "", "󾀃", ["snowman"]], "26c5": ["⛅", "", "󾀏", ["partly_sunny"]], "26ce": ["⛎", "", "󾀷", ["ophiuchus"]], "26d4": ["⛔", "", "󾬦", ["no_entry"]], "26ea": ["⛪", "", "󾒻", ["church"]], "26f2": ["⛲", "", "󾒼", ["fountain"]], "26f3": ["⛳", "", "󾟒", ["golf"]], "26f5": ["⛵", "", "󾟪", ["boat", "sailboat"]], "26fa": ["⛺", "", "󾟻", ["tent"]], "26fd": ["⛽", "", "󾟵", ["fuelpump"]], 2702: ["✂", "", "󾔾", ["scissors"]], 2705: ["✅", "", "󾭊", ["white_check_mark"]], 2708: ["✈", "", "󾟩", ["airplane"]], 2709: ["✉", "", "󾔩", ["email", "envelope"]], "270a": ["✊", "", "󾮓", ["fist"]], "270b": ["✋", "", "󾮕", ["hand", "raised_hand"]], "270c": ["✌", "", "󾮔", ["v"]], "270f": ["✏", "", "󾔹", ["pencil2"]], 2712: ["✒", "", "󾔶", ["black_nib"]], 2714: ["✔", "", "󾭉", ["heavy_check_mark"]], 2716: ["✖", "", "󾭓", ["heavy_multiplication_x"]], 2728: ["✨", "", "󾭠", ["sparkles"]], 2733: ["✳", "", "󾭢", ["eight_spoked_asterisk"]], 2734: ["✴", "", "󾭡", ["eight_pointed_black_star"]], 2744: ["❄", "", "󾀎", ["snowflake"]], 2747: ["❇", "", "󾭷", ["sparkle"]], "274c": ["❌", "", "󾭅", ["x"]], "274e": ["❎", "", "󾭆", ["negative_squared_cross_mark"]], 2753: ["❓", "", "󾬉", ["question"]], 2754: ["❔", "", "󾬊", ["grey_question"]], 2755: ["❕", "", "󾬋", ["grey_exclamation"]], 2757: ["❗", "", "󾬄", ["exclamation", "heavy_exclamation_mark"]], 2764: ["❤", "", "󾬌", ["heart"], "<3"], 2795: ["➕", "", "󾭑", ["heavy_plus_sign"]], 2796: ["➖", "", "󾭒", ["heavy_minus_sign"]], 2797: ["➗", "", "󾭔", ["heavy_division_sign"]], "27a1": ["➡", "", "󾫺", ["arrow_right"]], "27b0": ["➰", "", "󾬈", ["curly_loop"]], "27bf": ["➿", "", "󾠫", ["loop"]], 2934: ["⤴", "", "󾫴", ["arrow_heading_up"]], 2935: ["⤵", "", "󾫵", ["arrow_heading_down"]], "2b05": ["⬅", "", "󾫻", ["arrow_left"]], "2b06": ["⬆", "", "󾫸", ["arrow_up"]], "2b07": ["⬇", "", "󾫹", ["arrow_down"]], "2b1b": ["⬛", "", "󾭬", ["black_large_square"]], "2b1c": ["⬜", "", "󾭫", ["white_large_square"]], "2b50": ["⭐", "", "󾭨", ["star"]], "2b55": ["⭕", "", "󾭄", ["o"]], 3030: ["〰", "", "󾬇", ["wavy_dash"]], "303d": ["〽", "", "󾠛", ["part_alternation_mark"]], 3297: ["㊗", "", "󾭃", ["congratulations"]], 3299: ["㊙", "", "󾬫", ["secret"]], "1f004": ["🀄", "", "󾠋", ["mahjong"]], "1f0cf": ["🃏", "", "󾠒", ["black_joker"]], "1f170": ["🅰", "", "󾔋", ["a"]], "1f171": ["🅱", "", "󾔌", ["b"]], "1f17e": ["🅾", "", "󾔎", ["o2"]], "1f17f": ["🅿", "", "󾟶", ["parking"]], "1f18e": ["🆎", "", "󾔍", ["ab"]], "1f191": ["🆑", "", "󾮄", ["cl"]], "1f192": ["🆒", "", "󾬸", ["cool"]], "1f193": ["🆓", "", "󾬡", ["free"]], "1f194": ["🆔", "", "󾮁", ["id"]], "1f195": ["🆕", "", "󾬶", ["new"]], "1f196": ["🆖", "", "󾬨", ["ng"]], "1f197": ["🆗", "", "󾬧", ["ok"]], "1f198": ["🆘", "", "󾭏", ["sos"]], "1f199": ["🆙", "", "󾬷", ["up"]], "1f19a": ["🆚", "", "󾬲", ["vs"]], "1f201": ["🈁", "", "󾬤", ["koko"]], "1f202": ["🈂", "", "󾬿", ["sa"]], "1f21a": ["🈚", "", "󾬺", ["u7121"]], "1f22f": ["🈯", "", "󾭀", ["u6307"]], "1f232": ["🈲", "", "󾬮", ["u7981"]], "1f233": ["🈳", "", "󾬯", ["u7a7a"]], "1f234": ["🈴", "", "󾬰", ["u5408"]], "1f235": ["🈵", "", "󾬱", ["u6e80"]], "1f236": ["🈶", "", "󾬹", ["u6709"]], "1f237": ["🈷", "", "󾬻", ["u6708"]], "1f238": ["🈸", "", "󾬼", ["u7533"]], "1f239": ["🈹", "", "󾬾", ["u5272"]], "1f23a": ["🈺", "", "󾭁", ["u55b6"]], "1f250": ["🉐", "", "󾬽", ["ideograph_advantage"]], "1f251": ["🉑", "", "󾭐", ["accept"]], "1f300": ["🌀", "", "󾀅", ["cyclone"]], "1f301": ["🌁", "", "󾀆", ["foggy"]], "1f302": ["🌂", "", "󾀇", ["closed_umbrella"]], "1f303": ["🌃", "", "󾀈", ["stars"]], "1f304": ["🌄", "", "󾀉", ["sunrise_over_mountains"]], "1f305": ["🌅", "", "󾀊", ["sunrise"]], "1f306": ["🌆", "", "󾀋", ["city_sunset"]], "1f307": ["🌇", "", "󾀌", ["city_sunrise"]], "1f308": ["🌈", "", "󾀍", ["rainbow"]], "1f309": ["🌉", "", "󾀐", ["bridge_at_night"]], "1f30a": ["🌊", "", "󾀸", ["ocean"]], "1f30b": ["🌋", "", "󾀺", ["volcano"]], "1f30c": ["🌌", "", "󾀻", ["milky_way"]], "1f30d": ["🌍", "", "", ["earth_africa"]], "1f30e": ["🌎", "", "", ["earth_americas"]], "1f30f": ["🌏", "", "󾀹", ["earth_asia"]], "1f310": ["🌐", "", "", ["globe_with_meridians"]], "1f311": ["🌑", "", "󾀑", ["new_moon"]], "1f312": ["🌒", "", "", ["waxing_crescent_moon"]], "1f313": ["🌓", "", "󾀓", ["first_quarter_moon"]], "1f314": ["🌔", "", "󾀒", ["moon", "waxing_gibbous_moon"]], "1f315": ["🌕", "", "󾀕", ["full_moon"]], "1f316": ["🌖", "", "", ["waning_gibbous_moon"]], "1f317": ["🌗", "", "", ["last_quarter_moon"]], "1f318": ["🌘", "", "", ["waning_crescent_moon"]], "1f319": ["🌙", "", "󾀔", ["crescent_moon"]], "1f31a": ["🌚", "", "", ["new_moon_with_face"]], "1f31b": ["🌛", "", "󾀖", ["first_quarter_moon_with_face"]], "1f31c": ["🌜", "", "", ["last_quarter_moon_with_face"]], "1f31d": ["🌝", "", "", ["full_moon_with_face"]], "1f31e": ["🌞", "", "", ["sun_with_face"]], "1f31f": ["🌟", "", "󾭩", ["star2"]], "1f330": ["🌰", "", "󾁌", ["chestnut"]], "1f331": ["🌱", "", "󾀾", ["seedling"]], "1f332": ["🌲", "", "", ["evergreen_tree"]], "1f333": ["🌳", "", "", ["deciduous_tree"]], "1f334": ["🌴", "", "󾁇", ["palm_tree"]], "1f335": ["🌵", "", "󾁈", ["cactus"]], "1f337": ["🌷", "", "󾀽", ["tulip"]], "1f338": ["🌸", "", "󾁀", ["cherry_blossom"]], "1f339": ["🌹", "", "󾁁", ["rose"]], "1f33a": ["🌺", "", "󾁅", ["hibiscus"]], "1f33b": ["🌻", "", "󾁆", ["sunflower"]], "1f33c": ["🌼", "", "󾁍", ["blossom"]], "1f33d": ["🌽", "", "󾁊", ["corn"]], "1f33e": ["🌾", "", "󾁉", ["ear_of_rice"]], "1f33f": ["🌿", "", "󾁎", ["herb"]], "1f340": ["🍀", "", "󾀼", ["four_leaf_clover"]], "1f341": ["🍁", "", "󾀿", ["maple_leaf"]], "1f342": ["🍂", "", "󾁂", ["fallen_leaf"]], "1f343": ["🍃", "", "󾁃", ["leaves"]], "1f344": ["🍄", "", "󾁋", ["mushroom"]], "1f345": ["🍅", "", "󾁕", ["tomato"]], "1f346": ["🍆", "", "󾁖", ["eggplant"]], "1f347": ["🍇", "", "󾁙", ["grapes"]], "1f348": ["🍈", "", "󾁗", ["melon"]], "1f349": ["🍉", "", "󾁔", ["watermelon"]], "1f34a": ["🍊", "", "󾁒", ["tangerine"]], "1f34b": ["🍋", "", "", ["lemon"]], "1f34c": ["🍌", "", "󾁐", ["banana"]], "1f34d": ["🍍", "", "󾁘", ["pineapple"]], "1f34e": ["🍎", "", "󾁑", ["apple"]], "1f34f": ["🍏", "", "󾁛", ["green_apple"]], "1f350": ["🍐", "", "", ["pear"]], "1f351": ["🍑", "", "󾁚", ["peach"]], "1f352": ["🍒", "", "󾁏", ["cherries"]], "1f353": ["🍓", "", "󾁓", ["strawberry"]], "1f354": ["🍔", "", "󾥠", ["hamburger"]], "1f355": ["🍕", "", "󾥵", ["pizza"]], "1f356": ["🍖", "", "󾥲", ["meat_on_bone"]], "1f357": ["🍗", "", "󾥶", ["poultry_leg"]], "1f358": ["🍘", "", "󾥩", ["rice_cracker"]], "1f359": ["🍙", "", "󾥡", ["rice_ball"]], "1f35a": ["🍚", "", "󾥪", ["rice"]], "1f35b": ["🍛", "", "󾥬", ["curry"]], "1f35c": ["🍜", "", "󾥣", ["ramen"]], "1f35d": ["🍝", "", "󾥫", ["spaghetti"]], "1f35e": ["🍞", "", "󾥤", ["bread"]], "1f35f": ["🍟", "", "󾥧", ["fries"]], "1f360": ["🍠", "", "󾥴", ["sweet_potato"]], "1f361": ["🍡", "", "󾥨", ["dango"]], "1f362": ["🍢", "", "󾥭", ["oden"]], "1f363": ["🍣", "", "󾥮", ["sushi"]], "1f364": ["🍤", "", "󾥿", ["fried_shrimp"]], "1f365": ["🍥", "", "󾥳", ["fish_cake"]], "1f366": ["🍦", "", "󾥦", ["icecream"]], "1f367": ["🍧", "", "󾥱", ["shaved_ice"]], "1f368": ["🍨", "", "󾥷", ["ice_cream"]], "1f369": ["🍩", "", "󾥸", ["doughnut"]], "1f36a": ["🍪", "", "󾥹", ["cookie"]], "1f36b": ["🍫", "", "󾥺", ["chocolate_bar"]], "1f36c": ["🍬", "", "󾥻", ["candy"]], "1f36d": ["🍭", "", "󾥼", ["lollipop"]], "1f36e": ["🍮", "", "󾥽", ["custard"]], "1f36f": ["🍯", "", "󾥾", ["honey_pot"]], "1f370": ["🍰", "", "󾥢", ["cake"]], "1f371": ["🍱", "", "󾥯", ["bento"]], "1f372": ["🍲", "", "󾥰", ["stew"]], "1f373": ["🍳", "", "󾥥", ["egg"]], "1f374": ["🍴", "", "󾦀", ["fork_and_knife"]], "1f375": ["🍵", "", "󾦄", ["tea"]], "1f376": ["🍶", "", "󾦅", ["sake"]], "1f377": ["🍷", "", "󾦆", ["wine_glass"]], "1f378": ["🍸", "", "󾦂", ["cocktail"]], "1f379": ["🍹", "", "󾦈", ["tropical_drink"]], "1f37a": ["🍺", "", "󾦃", ["beer"]], "1f37b": ["🍻", "", "󾦇", ["beers"]], "1f37c": ["🍼", "", "", ["baby_bottle"]], "1f380": ["🎀", "", "󾔏", ["ribbon"]], "1f381": ["🎁", "", "󾔐", ["gift"]], "1f382": ["🎂", "", "󾔑", ["birthday"]], "1f383": ["🎃", "", "󾔟", ["jack_o_lantern"]], "1f384": ["🎄", "", "󾔒", ["christmas_tree"]], "1f385": ["🎅", "", "󾔓", ["santa"]], "1f386": ["🎆", "", "󾔕", ["fireworks"]], "1f387": ["🎇", "", "󾔝", ["sparkler"]], "1f388": ["🎈", "", "󾔖", ["balloon"]], "1f389": ["🎉", "", "󾔗", ["tada"]], "1f38a": ["🎊", "", "󾔠", ["confetti_ball"]], "1f38b": ["🎋", "", "󾔡", ["tanabata_tree"]], "1f38c": ["🎌", "", "󾔔", ["crossed_flags"]], "1f38d": ["🎍", "", "󾔘", ["bamboo"]], "1f38e": ["🎎", "", "󾔙", ["dolls"]], "1f38f": ["🎏", "", "󾔜", ["flags"]], "1f390": ["🎐", "", "󾔞", ["wind_chime"]], "1f391": ["🎑", "", "󾀗", ["rice_scene"]], "1f392": ["🎒", "", "󾔛", ["school_satchel"]], "1f393": ["🎓", "", "󾔚", ["mortar_board"]], "1f3a0": ["🎠", "", "󾟼", ["carousel_horse"]], "1f3a1": ["🎡", "", "󾟽", ["ferris_wheel"]], "1f3a2": ["🎢", "", "󾟾", ["roller_coaster"]], "1f3a3": ["🎣", "", "󾟿", ["fishing_pole_and_fish"]], "1f3a4": ["🎤", "", "󾠀", ["microphone"]], "1f3a5": ["🎥", "", "󾠁", ["movie_camera"]], "1f3a6": ["🎦", "", "󾠂", ["cinema"]], "1f3a7": ["🎧", "", "󾠃", ["headphones"]], "1f3a8": ["🎨", "", "󾠄", ["art"]], "1f3a9": ["🎩", "", "󾠅", ["tophat"]], "1f3aa": ["🎪", "", "󾠆", ["circus_tent"]], "1f3ab": ["🎫", "", "󾠇", ["ticket"]], "1f3ac": ["🎬", "", "󾠈", ["clapper"]], "1f3ad": ["🎭", "", "󾠉", ["performing_arts"]], "1f3ae": ["🎮", "", "󾠊", ["video_game"]], "1f3af": ["🎯", "", "󾠌", ["dart"]], "1f3b0": ["🎰", "", "󾠍", ["slot_machine"]], "1f3b1": ["🎱", "", "󾠎", ["8ball"]], "1f3b2": ["🎲", "", "󾠏", ["game_die"]], "1f3b3": ["🎳", "", "󾠐", ["bowling"]], "1f3b4": ["🎴", "", "󾠑", ["flower_playing_cards"]], "1f3b5": ["🎵", "", "󾠓", ["musical_note"]], "1f3b6": ["🎶", "", "󾠔", ["notes"]], "1f3b7": ["🎷", "", "󾠕", ["saxophone"]], "1f3b8": ["🎸", "", "󾠖", ["guitar"]], "1f3b9": ["🎹", "", "󾠗", ["musical_keyboard"]], "1f3ba": ["🎺", "", "󾠘", ["trumpet"]], "1f3bb": ["🎻", "", "󾠙", ["violin"]], "1f3bc": ["🎼", "", "󾠚", ["musical_score"]], "1f3bd": ["🎽", "", "󾟐", ["running_shirt_with_sash"]], "1f3be": ["🎾", "", "󾟓", ["tennis"]], "1f3bf": ["🎿", "", "󾟕", ["ski"]], "1f3c0": ["🏀", "", "󾟖", ["basketball"]], "1f3c1": ["🏁", "", "󾟗", ["checkered_flag"]], "1f3c2": ["🏂", "", "󾟘", ["snowboarder"]], "1f3c3": ["🏃", "", "󾟙", ["runner", "running"]], "1f3c4": ["🏄", "", "󾟚", ["surfer"]], "1f3c6": ["🏆", "", "󾟛", ["trophy"]], "1f3c7": ["🏇", "", "", ["horse_racing"]], "1f3c8": ["🏈", "", "󾟝", ["football"]], "1f3c9": ["🏉", "", "", ["rugby_football"]], "1f3ca": ["🏊", "", "󾟞", ["swimmer"]], "1f3e0": ["🏠", "", "󾒰", ["house"]], "1f3e1": ["🏡", "", "󾒱", ["house_with_garden"]], "1f3e2": ["🏢", "", "󾒲", ["office"]], "1f3e3": ["🏣", "", "󾒳", ["post_office"]], "1f3e4": ["🏤", "", "", ["european_post_office"]], "1f3e5": ["🏥", "", "󾒴", ["hospital"]], "1f3e6": ["🏦", "", "󾒵", ["bank"]], "1f3e7": ["🏧", "", "󾒶", ["atm"]], "1f3e8": ["🏨", "", "󾒷", ["hotel"]], "1f3e9": ["🏩", "", "󾒸", ["love_hotel"]], "1f3ea": ["🏪", "", "󾒹", ["convenience_store"]], "1f3eb": ["🏫", "", "󾒺", ["school"]], "1f3ec": ["🏬", "", "󾒽", ["department_store"]], "1f3ed": ["🏭", "", "󾓀", ["factory"]], "1f3ee": ["🏮", "", "󾓂", ["izakaya_lantern", "lantern"]], "1f3ef": ["🏯", "", "󾒾", ["japanese_castle"]], "1f3f0": ["🏰", "", "󾒿", ["european_castle"]], "1f400": ["🐀", "", "", ["rat"]], "1f401": ["🐁", "", "", ["mouse2"]], "1f402": ["🐂", "", "", ["ox"]], "1f403": ["🐃", "", "", ["water_buffalo"]], "1f404": ["🐄", "", "", ["cow2"]], "1f405": ["🐅", "", "", ["tiger2"]], "1f406": ["🐆", "", "", ["leopard"]], "1f407": ["🐇", "", "", ["rabbit2"]], "1f408": ["🐈", "", "", ["cat2"]], "1f409": ["🐉", "", "", ["dragon"]], "1f40a": ["🐊", "", "", ["crocodile"]], "1f40b": ["🐋", "", "", ["whale2"]], "1f40c": ["🐌", "", "󾆹", ["snail"]], "1f40d": ["🐍", "", "󾇓", ["snake"]], "1f40e": ["🐎", "", "󾟜", ["racehorse"]], "1f40f": ["🐏", "", "", ["ram"]], "1f410": ["🐐", "", "", ["goat"]], "1f411": ["🐑", "", "󾇏", ["sheep"]], "1f412": ["🐒", "", "󾇎", ["monkey"]], "1f413": ["🐓", "", "", ["rooster"]], "1f414": ["🐔", "", "󾇔", ["chicken"]], "1f415": ["🐕", "", "", ["dog2"]], "1f416": ["🐖", "", "", ["pig2"]], "1f417": ["🐗", "", "󾇕", ["boar"]], "1f418": ["🐘", "", "󾇌", ["elephant"]], "1f419": ["🐙", "", "󾇅", ["octopus"]], "1f41a": ["🐚", "", "󾇆", ["shell"]], "1f41b": ["🐛", "", "󾇋", ["bug"]], "1f41c": ["🐜", "", "󾇚", ["ant"]], "1f41d": ["🐝", "", "󾇡", ["bee", "honeybee"]], "1f41e": ["🐞", "", "󾇢", ["beetle"]], "1f41f": ["🐟", "", "󾆽", ["fish"]], "1f420": ["🐠", "", "󾇉", ["tropical_fish"]], "1f421": ["🐡", "", "󾇙", ["blowfish"]], "1f422": ["🐢", "", "󾇜", ["turtle"]], "1f423": ["🐣", "", "󾇝", ["hatching_chick"]], "1f424": ["🐤", "", "󾆺", ["baby_chick"]], "1f425": ["🐥", "", "󾆻", ["hatched_chick"]], "1f426": ["🐦", "", "󾇈", ["bird"]], "1f427": ["🐧", "", "󾆼", ["penguin"]], "1f428": ["🐨", "", "󾇍", ["koala"]], "1f429": ["🐩", "", "󾇘", ["poodle"]], "1f42a": ["🐪", "", "", ["dromedary_camel"]], "1f42b": ["🐫", "", "󾇖", ["camel"]], "1f42c": ["🐬", "", "󾇇", ["dolphin", "flipper"]], "1f42d": ["🐭", "", "󾇂", ["mouse"]], "1f42e": ["🐮", "", "󾇑", ["cow"]], "1f42f": ["🐯", "", "󾇀", ["tiger"]], "1f430": ["🐰", "", "󾇒", ["rabbit"]], "1f431": ["🐱", "", "󾆸", ["cat"]], "1f432": ["🐲", "", "󾇞", ["dragon_face"]], "1f433": ["🐳", "", "󾇃", ["whale"]], "1f434": ["🐴", "", "󾆾", ["horse"]], "1f435": ["🐵", "", "󾇄", ["monkey_face"]], "1f436": ["🐶", "", "󾆷", ["dog"]], "1f437": ["🐷", "", "󾆿", ["pig"]], "1f438": ["🐸", "", "󾇗", ["frog"]], "1f439": ["🐹", "", "󾇊", ["hamster"]], "1f43a": ["🐺", "", "󾇐", ["wolf"]], "1f43b": ["🐻", "", "󾇁", ["bear"]], "1f43c": ["🐼", "", "󾇟", ["panda_face"]], "1f43d": ["🐽", "", "󾇠", ["pig_nose"]], "1f43e": ["🐾", "", "󾇛", ["feet", "paw_prints"]], "1f440": ["👀", "", "󾆐", ["eyes"]], "1f442": ["👂", "", "󾆑", ["ear"]], "1f443": ["👃", "", "󾆒", ["nose"]], "1f444": ["👄", "", "󾆓", ["lips"]], "1f445": ["👅", "", "󾆔", ["tongue"]], "1f446": ["👆", "", "󾮙", ["point_up_2"]], "1f447": ["👇", "", "󾮚", ["point_down"]], "1f448": ["👈", "", "󾮛", ["point_left"]], "1f449": ["👉", "", "󾮜", ["point_right"]], "1f44a": ["👊", "", "󾮖", ["facepunch", "punch"]], "1f44b": ["👋", "", "󾮝", ["wave"]], "1f44c": ["👌", "", "󾮟", ["ok_hand"]], "1f44d": ["👍", "", "󾮗", ["+1", "thumbsup"]], "1f44e": ["👎", "", "󾮠", ["-1", "thumbsdown"]], "1f44f": ["👏", "", "󾮞", ["clap"]], "1f450": ["👐", "", "󾮡", ["open_hands"]], "1f451": ["👑", "", "󾓑", ["crown"]], "1f452": ["👒", "", "󾓔", ["womans_hat"]], "1f453": ["👓", "", "󾓎", ["eyeglasses"]], "1f454": ["👔", "", "󾓓", ["necktie"]], "1f455": ["👕", "", "󾓏", ["shirt", "tshirt"]], "1f456": ["👖", "", "󾓐", ["jeans"]], "1f457": ["👗", "", "󾓕", ["dress"]], "1f458": ["👘", "", "󾓙", ["kimono"]], "1f459": ["👙", "", "󾓚", ["bikini"]], "1f45a": ["👚", "", "󾓛", ["womans_clothes"]], "1f45b": ["👛", "", "󾓜", ["purse"]], "1f45c": ["👜", "", "󾓰", ["handbag"]], "1f45d": ["👝", "", "󾓱", ["pouch"]], "1f45e": ["👞", "", "󾓌", ["mans_shoe", "shoe"]], "1f45f": ["👟", "", "󾓍", ["athletic_shoe"]], "1f460": ["👠", "", "󾓖", ["high_heel"]], "1f461": ["👡", "", "󾓗", ["sandal"]], "1f462": ["👢", "", "󾓘", ["boot"]], "1f463": ["👣", "", "󾕓", ["footprints"]], "1f464": ["👤", "", "󾆚", ["bust_in_silhouette"]], "1f465": ["👥", "", "", ["busts_in_silhouette"]], "1f466": ["👦", "", "󾆛", ["boy"]], "1f467": ["👧", "", "󾆜", ["girl"]], "1f468": ["👨", "", "󾆝", ["man"]], "1f469": ["👩", "", "󾆞", ["woman"]], "1f46a": ["👪", "", "󾆟", ["family"]], "1f46b": ["👫", "", "󾆠", ["couple"]], "1f46c": ["👬", "", "", ["two_men_holding_hands"]], "1f46d": ["👭", "", "", ["two_women_holding_hands"]], "1f46e": ["👮", "", "󾆡", ["cop"]], "1f46f": ["👯", "", "󾆢", ["dancers"]], "1f470": ["👰", "", "󾆣", ["bride_with_veil"]], "1f471": ["👱", "", "󾆤", ["person_with_blond_hair"]], "1f472": ["👲", "", "󾆥", ["man_with_gua_pi_mao"]], "1f473": ["👳", "", "󾆦", ["man_with_turban"]], "1f474": ["👴", "", "󾆧", ["older_man"]], "1f475": ["👵", "", "󾆨", ["older_woman"]], "1f476": ["👶", "", "󾆩", ["baby"]], "1f477": ["👷", "", "󾆪", ["construction_worker"]], "1f478": ["👸", "", "󾆫", ["princess"]], "1f479": ["👹", "", "󾆬", ["japanese_ogre"]], "1f47a": ["👺", "", "󾆭", ["japanese_goblin"]], "1f47b": ["👻", "", "󾆮", ["ghost"]], "1f47c": ["👼", "", "󾆯", ["angel"]], "1f47d": ["👽", "", "󾆰", ["alien"]], "1f47e": ["👾", "", "󾆱", ["space_invader"]], "1f47f": ["👿", "", "󾆲", ["imp"]], "1f480": ["💀", "", "󾆳", ["skull"]], "1f481": ["💁", "", "󾆴", ["information_desk_person"]], "1f482": ["💂", "", "󾆵", ["guardsman"]], "1f483": ["💃", "", "󾆶", ["dancer"]], "1f484": ["💄", "", "󾆕", ["lipstick"]], "1f485": ["💅", "", "󾆖", ["nail_care"]], "1f486": ["💆", "", "󾆗", ["massage"]], "1f487": ["💇", "", "󾆘", ["haircut"]], "1f488": ["💈", "", "󾆙", ["barber"]], "1f489": ["💉", "", "󾔉", ["syringe"]], "1f48a": ["💊", "", "󾔊", ["pill"]], "1f48b": ["💋", "", "󾠣", ["kiss"]], "1f48c": ["💌", "", "󾠤", ["love_letter"]], "1f48d": ["💍", "", "󾠥", ["ring"]], "1f48e": ["💎", "", "󾠦", ["gem"]], "1f48f": ["💏", "", "󾠧", ["couplekiss"]], "1f490": ["💐", "", "󾠨", ["bouquet"]], "1f491": ["💑", "", "󾠩", ["couple_with_heart"]], "1f492": ["💒", "", "󾠪", ["wedding"]], "1f493": ["💓", "", "󾬍", ["heartbeat"]], "1f494": ["💔", "", "󾬎", ["broken_heart"], "</3"], "1f495": ["💕", "", "󾬏", ["two_hearts"]], "1f496": ["💖", "", "󾬐", ["sparkling_heart"]], "1f497": ["💗", "", "󾬑", ["heartpulse"]], "1f498": ["💘", "", "󾬒", ["cupid"]], "1f499": ["💙", "", "󾬓", ["blue_heart"], "<3"], "1f49a": ["💚", "", "󾬔", ["green_heart"], "<3"], "1f49b": ["💛", "", "󾬕", ["yellow_heart"], "<3"], "1f49c": ["💜", "", "󾬖", ["purple_heart"], "<3"], "1f49d": ["💝", "", "󾬗", ["gift_heart"]], "1f49e": ["💞", "", "󾬘", ["revolving_hearts"]], "1f49f": ["💟", "", "󾬙", ["heart_decoration"]], "1f4a0": ["💠", "", "󾭕", ["diamond_shape_with_a_dot_inside"]], "1f4a1": ["💡", "", "󾭖", ["bulb"]], "1f4a2": ["💢", "", "󾭗", ["anger"]], "1f4a3": ["💣", "", "󾭘", ["bomb"]], "1f4a4": ["💤", "", "󾭙", ["zzz"]], "1f4a5": ["💥", "", "󾭚", ["boom", "collision"]], "1f4a6": ["💦", "", "󾭛", ["sweat_drops"]], "1f4a7": ["💧", "", "󾭜", ["droplet"]], "1f4a8": ["💨", "", "󾭝", ["dash"]], "1f4a9": ["💩", "", "󾓴", ["hankey", "poop", "shit"]], "1f4aa": ["💪", "", "󾭞", ["muscle"]], "1f4ab": ["💫", "", "󾭟", ["dizzy"]], "1f4ac": ["💬", "", "󾔲", ["speech_balloon"]], "1f4ad": ["💭", "", "", ["thought_balloon"]], "1f4ae": ["💮", "", "󾭺", ["white_flower"]], "1f4af": ["💯", "", "󾭻", ["100"]], "1f4b0": ["💰", "", "󾓝", ["moneybag"]], "1f4b1": ["💱", "", "󾓞", ["currency_exchange"]], "1f4b2": ["💲", "", "󾓠", ["heavy_dollar_sign"]], "1f4b3": ["💳", "", "󾓡", ["credit_card"]], "1f4b4": ["💴", "", "󾓢", ["yen"]], "1f4b5": ["💵", "", "󾓣", ["dollar"]], "1f4b6": ["💶", "", "", ["euro"]], "1f4b7": ["💷", "", "", ["pound"]], "1f4b8": ["💸", "", "󾓤", ["money_with_wings"]], "1f4b9": ["💹", "", "󾓟", ["chart"]], "1f4ba": ["💺", "", "󾔷", ["seat"]], "1f4bb": ["💻", "", "󾔸", ["computer"]], "1f4bc": ["💼", "", "󾔻", ["briefcase"]], "1f4bd": ["💽", "", "󾔼", ["minidisc"]], "1f4be": ["💾", "", "󾔽", ["floppy_disk"]], "1f4bf": ["💿", "", "󾠝", ["cd"]], "1f4c0": ["📀", "", "󾠞", ["dvd"]], "1f4c1": ["📁", "", "󾕃", ["file_folder"]], "1f4c2": ["📂", "", "󾕄", ["open_file_folder"]], "1f4c3": ["📃", "", "󾕀", ["page_with_curl"]], "1f4c4": ["📄", "", "󾕁", ["page_facing_up"]], "1f4c5": ["📅", "", "󾕂", ["date"]], "1f4c6": ["📆", "", "󾕉", ["calendar"]], "1f4c7": ["📇", "", "󾕍", ["card_index"]], "1f4c8": ["📈", "", "󾕋", ["chart_with_upwards_trend"]], "1f4c9": ["📉", "", "󾕌", ["chart_with_downwards_trend"]], "1f4ca": ["📊", "", "󾕊", ["bar_chart"]], "1f4cb": ["📋", "", "󾕈", ["clipboard"]], "1f4cc": ["📌", "", "󾕎", ["pushpin"]], "1f4cd": ["📍", "", "󾔿", ["round_pushpin"]], "1f4ce": ["📎", "", "󾔺", ["paperclip"]], "1f4cf": ["📏", "", "󾕐", ["straight_ruler"]], "1f4d0": ["📐", "", "󾕑", ["triangular_ruler"]], "1f4d1": ["📑", "", "󾕒", ["bookmark_tabs"]], "1f4d2": ["📒", "", "󾕏", ["ledger"]], "1f4d3": ["📓", "", "󾕅", ["notebook"]], "1f4d4": ["📔", "", "󾕇", ["notebook_with_decorative_cover"]], "1f4d5": ["📕", "", "󾔂", ["closed_book"]], "1f4d6": ["📖", "", "󾕆", ["book", "open_book"]], "1f4d7": ["📗", "", "󾓿", ["green_book"]], "1f4d8": ["📘", "", "󾔀", ["blue_book"]], "1f4d9": ["📙", "", "󾔁", ["orange_book"]], "1f4da": ["📚", "", "󾔃", ["books"]], "1f4db": ["📛", "", "󾔄", ["name_badge"]], "1f4dc": ["📜", "", "󾓽", ["scroll"]], "1f4dd": ["📝", "", "󾔧", ["memo", "pencil"]], "1f4de": ["📞", "", "󾔤", ["telephone_receiver"]], "1f4df": ["📟", "", "󾔢", ["pager"]], "1f4e0": ["📠", "", "󾔨", ["fax"]], "1f4e1": ["📡", "", "󾔱", ["satellite"]], "1f4e2": ["📢", "", "󾔯", ["loudspeaker"]], "1f4e3": ["📣", "", "󾔰", ["mega"]], "1f4e4": ["📤", "", "󾔳", ["outbox_tray"]], "1f4e5": ["📥", "", "󾔴", ["inbox_tray"]], "1f4e6": ["📦", "", "󾔵", ["package"]], "1f4e7": ["📧", "", "󾮒", ["e-mail"]], "1f4e8": ["📨", "", "󾔪", ["incoming_envelope"]], "1f4e9": ["📩", "", "󾔫", ["envelope_with_arrow"]], "1f4ea": ["📪", "", "󾔬", ["mailbox_closed"]], "1f4eb": ["📫", "", "󾔭", ["mailbox"]], "1f4ec": ["📬", "", "", ["mailbox_with_mail"]], "1f4ed": ["📭", "", "", ["mailbox_with_no_mail"]], "1f4ee": ["📮", "", "󾔮", ["postbox"]], "1f4ef": ["📯", "", "", ["postal_horn"]], "1f4f0": ["📰", "", "󾠢", ["newspaper"]], "1f4f1": ["📱", "", "󾔥", ["iphone"]], "1f4f2": ["📲", "", "󾔦", ["calling"]], "1f4f3": ["📳", "", "󾠹", ["vibration_mode"]], "1f4f4": ["📴", "", "󾠺", ["mobile_phone_off"]], "1f4f5": ["📵", "", "", ["no_mobile_phones"]], "1f4f6": ["📶", "", "󾠸", ["signal_strength"]], "1f4f7": ["📷", "", "󾓯", ["camera"]], "1f4f9": ["📹", "", "󾓹", ["video_camera"]], "1f4fa": ["📺", "", "󾠜", ["tv"]], "1f4fb": ["📻", "", "󾠟", ["radio"]], "1f4fc": ["📼", "", "󾠠", ["vhs"]], "1f500": ["🔀", "", "", ["twisted_rightwards_arrows"]], "1f501": ["🔁", "", "", ["repeat"]], "1f502": ["🔂", "", "", ["repeat_one"]], "1f503": ["🔃", "", "󾮑", ["arrows_clockwise"]], "1f504": ["🔄", "", "", ["arrows_counterclockwise"]], "1f505": ["🔅", "", "", ["low_brightness"]], "1f506": ["🔆", "", "", ["high_brightness"]], "1f507": ["🔇", "", "", ["mute"]], "1f509": ["🔉", "", "", ["sound"]], "1f50a": ["🔊", "", "󾠡", ["speaker"]], "1f50b": ["🔋", "", "󾓼", ["battery"]], "1f50c": ["🔌", "", "󾓾", ["electric_plug"]], "1f50d": ["🔍", "", "󾮅", ["mag"]], "1f50e": ["🔎", "", "󾮍", ["mag_right"]], "1f50f": ["🔏", "", "󾮐", ["lock_with_ink_pen"]], "1f510": ["🔐", "", "󾮊", ["closed_lock_with_key"]], "1f511": ["🔑", "", "󾮂", ["key"]], "1f512": ["🔒", "", "󾮆", ["lock"]], "1f513": ["🔓", "", "󾮇", ["unlock"]], "1f514": ["🔔", "", "󾓲", ["bell"]], "1f515": ["🔕", "", "", ["no_bell"]], "1f516": ["🔖", "", "󾮏", ["bookmark"]], "1f517": ["🔗", "", "󾭋", ["link"]], "1f518": ["🔘", "", "󾮌", ["radio_button"]], "1f519": ["🔙", "", "󾮎", ["back"]], "1f51a": ["🔚", "", "󾀚", ["end"]], "1f51b": ["🔛", "", "󾀙", ["on"]], "1f51c": ["🔜", "", "󾀘", ["soon"]], "1f51d": ["🔝", "", "󾭂", ["top"]], "1f51e": ["🔞", "", "󾬥", ["underage"]], "1f51f": ["🔟", "", "󾠻", ["keycap_ten"]], "1f520": ["🔠", "", "󾭼", ["capital_abcd"]], "1f521": ["🔡", "", "󾭽", ["abcd"]], "1f522": ["🔢", "", "󾭾", ["1234"]], "1f523": ["🔣", "", "󾭿", ["symbols"]], "1f524": ["🔤", "", "󾮀", ["abc"]], "1f525": ["🔥", "", "󾓶", ["fire"]], "1f526": ["🔦", "", "󾓻", ["flashlight"]], "1f527": ["🔧", "", "󾓉", ["wrench"]], "1f528": ["🔨", "", "󾓊", ["hammer"]], "1f529": ["🔩", "", "󾓋", ["nut_and_bolt"]], "1f52a": ["🔪", "", "󾓺", ["hocho"]], "1f52b": ["🔫", "", "󾓵", ["gun"]], "1f52c": ["🔬", "", "", ["microscope"]], "1f52d": ["🔭", "", "", ["telescope"]], "1f52e": ["🔮", "", "󾓷", ["crystal_ball"]], "1f52f": ["🔯", "", "󾓸", ["six_pointed_star"]], "1f530": ["🔰", "", "󾁄", ["beginner"]], "1f531": ["🔱", "", "󾓒", ["trident"]], "1f532": ["🔲", "", "󾭤", ["black_square_button"]], "1f533": ["🔳", "", "󾭧", ["white_square_button"]], "1f534": ["🔴", "", "󾭣", ["red_circle"]], "1f535": ["🔵", "", "󾭤", ["large_blue_circle"]], "1f536": ["🔶", "", "󾭳", ["large_orange_diamond"]], "1f537": ["🔷", "", "󾭴", ["large_blue_diamond"]], "1f538": ["🔸", "", "󾭵", ["small_orange_diamond"]], "1f539": ["🔹", "", "󾭶", ["small_blue_diamond"]], "1f53a": ["🔺", "", "󾭸", ["small_red_triangle"]], "1f53b": ["🔻", "", "󾭹", ["small_red_triangle_down"]], "1f53c": ["🔼", "", "󾬁", ["arrow_up_small"]], "1f53d": ["🔽", "", "󾬀", ["arrow_down_small"]], "1f550": ["🕐", "", "󾀞", ["clock1"]], "1f551": ["🕑", "", "󾀟", ["clock2"]], "1f552": ["🕒", "", "󾀠", ["clock3"]], "1f553": ["🕓", "", "󾀡", ["clock4"]], "1f554": ["🕔", "", "󾀢", ["clock5"]], "1f555": ["🕕", "", "󾀣", ["clock6"]], "1f556": ["🕖", "", "󾀤", ["clock7"]], "1f557": ["🕗", "", "󾀥", ["clock8"]], "1f558": ["🕘", "", "󾀦", ["clock9"]], "1f559": ["🕙", "", "󾀧", ["clock10"]], "1f55a": ["🕚", "", "󾀨", ["clock11"]], "1f55b": ["🕛", "", "󾀩", ["clock12"]], "1f55c": ["🕜", "", "", ["clock130"]], "1f55d": ["🕝", "", "", ["clock230"]], "1f55e": ["🕞", "", "", ["clock330"]], "1f55f": ["🕟", "", "", ["clock430"]], "1f560": ["🕠", "", "", ["clock530"]], "1f561": ["🕡", "", "", ["clock630"]], "1f562": ["🕢", "", "", ["clock730"]], "1f563": ["🕣", "", "", ["clock830"]], "1f564": ["🕤", "", "", ["clock930"]], "1f565": ["🕥", "", "", ["clock1030"]], "1f566": ["🕦", "", "", ["clock1130"]], "1f567": ["🕧", "", "", ["clock1230"]], "1f5fb": ["🗻", "", "󾓃", ["mount_fuji"]], "1f5fc": ["🗼", "", "󾓄", ["tokyo_tower"]], "1f5fd": ["🗽", "", "󾓆", ["statue_of_liberty"]], "1f5fe": ["🗾", "", "󾓇", ["japan"]], "1f5ff": ["🗿", "", "󾓈", ["moyai"]], "1f600": ["😀", "", "", ["grinning"]], "1f601": ["😁", "", "󾌳", ["grin"]], "1f602": ["😂", "", "󾌴", ["joy"]], "1f603": ["😃", "", "󾌰", ["smiley"], ":)"], "1f604": ["😄", "", "󾌸", ["smile"], ":)"], "1f605": ["😅", "", "󾌱", ["sweat_smile"]], "1f606": ["😆", "", "󾌲", ["laughing", "satisfied"]], "1f607": ["😇", "", "", ["innocent"]], "1f608": ["😈", "", "", ["smiling_imp"]], "1f609": ["😉", "", "󾍇", ["wink"], ";)"], "1f60a": ["😊", "", "󾌵", ["blush"]], "1f60b": ["😋", "", "󾌫", ["yum"]], "1f60c": ["😌", "", "󾌾", ["relieved"]], "1f60d": ["😍", "", "󾌧", ["heart_eyes"]], "1f60e": ["😎", "", "", ["sunglasses"]], "1f60f": ["😏", "", "󾍃", ["smirk"]], "1f610": ["😐", "", "", ["neutral_face"]], "1f611": ["😑", "", "", ["expressionless"]], "1f612": ["😒", "", "󾌦", ["unamused"]], "1f613": ["😓", "", "󾍄", ["sweat"]], "1f614": ["😔", "", "󾍀", ["pensive"]], "1f615": ["😕", "", "", ["confused"]], "1f616": ["😖", "", "󾌿", ["confounded"]], "1f617": ["😗", "", "", ["kissing"]], "1f618": ["😘", "", "󾌬", ["kissing_heart"]], "1f619": ["😙", "", "", ["kissing_smiling_eyes"]], "1f61a": ["😚", "", "󾌭", ["kissing_closed_eyes"]], "1f61b": ["😛", "", "", ["stuck_out_tongue"]], "1f61c": ["😜", "", "󾌩", ["stuck_out_tongue_winking_eye"], ";p"], "1f61d": ["😝", "", "󾌪", ["stuck_out_tongue_closed_eyes"]], "1f61e": ["😞", "", "󾌣", ["disappointed"], ":("], "1f61f": ["😟", "", "", ["worried"]], "1f620": ["😠", "", "󾌠", ["angry"]], "1f621": ["😡", "", "󾌽", ["rage"]], "1f622": ["😢", "", "󾌹", ["cry"], ":'("], "1f623": ["😣", "", "󾌼", ["persevere"]], "1f624": ["😤", "", "󾌨", ["triumph"]], "1f625": ["😥", "", "󾍅", ["disappointed_relieved"]], "1f626": ["😦", "", "", ["frowning"]], "1f627": ["😧", "", "", ["anguished"]], "1f628": ["😨", "", "󾌻", ["fearful"]], "1f629": ["😩", "", "󾌡", ["weary"]], "1f62a": ["😪", "", "󾍂", ["sleepy"]], "1f62b": ["😫", "", "󾍆", ["tired_face"]], "1f62c": ["😬", "", "", ["grimacing"]], "1f62d": ["😭", "", "󾌺", ["sob"], ":'("], "1f62e": ["😮", "", "", ["open_mouth"]], "1f62f": ["😯", "", "", ["hushed"]], "1f630": ["😰", "", "󾌥", ["cold_sweat"]], "1f631": ["😱", "", "󾍁", ["scream"]], "1f632": ["😲", "", "󾌢", ["astonished"]], "1f633": ["😳", "", "󾌯", ["flushed"]], "1f634": ["😴", "", "", ["sleeping"]], "1f635": ["😵", "", "󾌤", ["dizzy_face"]], "1f636": ["😶", "", "", ["no_mouth"]], "1f637": ["😷", "", "󾌮", ["mask"]], "1f638": ["😸", "", "󾍉", ["smile_cat"]], "1f639": ["😹", "", "󾍊", ["joy_cat"]], "1f63a": ["😺", "", "󾍈", ["smiley_cat"]], "1f63b": ["😻", "", "󾍌", ["heart_eyes_cat"]], "1f63c": ["😼", "", "󾍏", ["smirk_cat"]], "1f63d": ["😽", "", "󾍋", ["kissing_cat"]], "1f63e": ["😾", "", "󾍎", ["pouting_cat"]], "1f63f": ["😿", "", "󾍍", ["crying_cat_face"]], "1f640": ["🙀", "", "󾍐", ["scream_cat"]], "1f645": ["🙅", "", "󾍑", ["no_good"]], "1f646": ["🙆", "", "󾍒", ["ok_woman"]], "1f647": ["🙇", "", "󾍓", ["bow"]], "1f648": ["🙈", "", "󾍔", ["see_no_evil"]], "1f649": ["🙉", "", "󾍖", ["hear_no_evil"]], "1f64a": ["🙊", "", "󾍕", ["speak_no_evil"]], "1f64b": ["🙋", "", "󾍗", ["raising_hand"]], "1f64c": ["🙌", "", "󾍘", ["raised_hands"]], "1f64d": ["🙍", "", "󾍙", ["person_frowning"]], "1f64e": ["🙎", "", "󾍚", ["person_with_pouting_face"]], "1f64f": ["🙏", "", "󾍛", ["pray"]], "1f680": ["🚀", "", "󾟭", ["rocket"]], "1f681": ["🚁", "", "", ["helicopter"]], "1f682": ["🚂", "", "", ["steam_locomotive"]], "1f683": ["🚃", "", "󾟟", ["railway_car", "train"]], "1f684": ["🚄", "", "󾟢", ["bullettrain_side"]], "1f685": ["🚅", "", "󾟣", ["bullettrain_front"]], "1f686": ["🚆", "", "", ["train2"]], "1f687": ["🚇", "", "󾟠", ["metro"]], "1f688": ["🚈", "", "", ["light_rail"]], "1f689": ["🚉", "", "󾟬", ["station"]], "1f68a": ["🚊", "", "", ["tram"]], "1f68c": ["🚌", "", "󾟦", ["bus"]], "1f68d": ["🚍", "", "", ["oncoming_bus"]], "1f68e": ["🚎", "", "", ["trolleybus"]], "1f68f": ["🚏", "", "󾟧", ["busstop"]], "1f690": ["🚐", "", "", ["minibus"]], "1f691": ["🚑", "", "󾟳", ["ambulance"]], "1f692": ["🚒", "", "󾟲", ["fire_engine"]], "1f693": ["🚓", "", "󾟴", ["police_car"]], "1f694": ["🚔", "", "", ["oncoming_police_car"]], "1f695": ["🚕", "", "󾟯", ["taxi"]], "1f696": ["🚖", "", "", ["oncoming_taxi"]], "1f697": ["🚗", "", "󾟤", ["car", "red_car"]], "1f698": ["🚘", "", "", ["oncoming_automobile"]], "1f699": ["🚙", "", "󾟥", ["blue_car"]], "1f69a": ["🚚", "", "󾟱", ["truck"]], "1f69b": ["🚛", "", "", ["articulated_lorry"]], "1f69c": ["🚜", "", "", ["tractor"]], "1f69d": ["🚝", "", "", ["monorail"]], "1f69e": ["🚞", "", "", ["mountain_railway"]], "1f69f": ["🚟", "", "", ["suspension_railway"]], "1f6a0": ["🚠", "", "", ["mountain_cableway"]], "1f6a1": ["🚡", "", "", ["aerial_tramway"]], "1f6a2": ["🚢", "", "󾟨", ["ship"]], "1f6a3": ["🚣", "", "", ["rowboat"]], "1f6a4": ["🚤", "", "󾟮", ["speedboat"]], "1f6a5": ["🚥", "", "󾟷", ["traffic_light"]], "1f6a6": ["🚦", "", "", ["vertical_traffic_light"]], "1f6a7": ["🚧", "", "󾟸", ["construction"]], "1f6a8": ["🚨", "", "󾟹", ["rotating_light"]], "1f6a9": ["🚩", "", "󾬢", ["triangular_flag_on_post"]], "1f6aa": ["🚪", "", "󾓳", ["door"]], "1f6ab": ["🚫", "", "󾭈", ["no_entry_sign"]], "1f6ac": ["🚬", "", "󾬞", ["smoking"]], "1f6ad": ["🚭", "", "󾬟", ["no_smoking"]], "1f6ae": ["🚮", "", "", ["put_litter_in_its_place"]], "1f6af": ["🚯", "", "", ["do_not_litter"]], "1f6b0": ["🚰", "", "", ["potable_water"]], "1f6b1": ["🚱", "", "", ["non-potable_water"]], "1f6b2": ["🚲", "", "󾟫", ["bike"]], "1f6b3": ["🚳", "", "", ["no_bicycles"]], "1f6b4": ["🚴", "", "", ["bicyclist"]], "1f6b5": ["🚵", "", "", ["mountain_bicyclist"]], "1f6b6": ["🚶", "", "󾟰", ["walking"]], "1f6b7": ["🚷", "", "", ["no_pedestrians"]], "1f6b8": ["🚸", "", "", ["children_crossing"]], "1f6b9": ["🚹", "", "󾬳", ["mens"]], "1f6ba": ["🚺", "", "󾬴", ["womens"]], "1f6bb": ["🚻", "", "󾔆", ["restroom"]], "1f6bc": ["🚼", "", "󾬵", ["baby_symbol"]], "1f6bd": ["🚽", "", "󾔇", ["toilet"]], "1f6be": ["🚾", "", "󾔈", ["wc"]], "1f6bf": ["🚿", "", "", ["shower"]], "1f6c0": ["🛀", "", "󾔅", ["bath"]], "1f6c1": ["🛁", "", "", ["bathtub"]], "1f6c2": ["🛂", "", "", ["passport_control"]], "1f6c3": ["🛃", "", "", ["customs"]], "1f6c4": ["🛄", "", "", ["baggage_claim"]], "1f6c5": ["🛅", "", "", ["left_luggage"]], "0023": ["#⃣", "", "󾠬", ["hash"]], "0030": ["0⃣", "", "󾠷", ["zero"]], "0031": ["1⃣", "", "󾠮", ["one"]], "0032": ["2⃣", "", "󾠯", ["two"]], "0033": ["3⃣", "", "󾠰", ["three"]], "0034": ["4⃣", "", "󾠱", ["four"]], "0035": ["5⃣", "", "󾠲", ["five"]], "0036": ["6⃣", "", "󾠳", ["six"]], "0037": ["7⃣", "", "󾠴", ["seven"]], "0038": ["8⃣", "", "󾠵", ["eight"]], "0039": ["9⃣", "", "󾠶", ["nine"]], "1f1e8-1f1f3": ["🇨🇳", "", "󾓭", ["cn"]], "1f1e9-1f1ea": ["🇩🇪", "", "󾓨", ["de"]], "1f1ea-1f1f8": ["🇪🇸", "", "󾓫", ["es"]], "1f1eb-1f1f7": ["🇫🇷", "", "󾓧", ["fr"]], "1f1ec-1f1e7": ["🇬🇧", "", "󾓪", ["gb", "uk"]], "1f1ee-1f1f9": ["🇮🇹", "", "󾓩", ["it"]], "1f1ef-1f1f5": ["🇯🇵", "", "󾓥", ["jp"]], "1f1f0-1f1f7": ["🇰🇷", "", "󾓮", ["kr"]], "1f1f7-1f1fa": ["🇷🇺", "", "󾓬", ["ru"]], "1f1fa-1f1f8": ["🇺🇸", "", "󾓦", ["us"]]
			};
		},
		get: function () {
			var uI = (this.unicodeImoticon);
			return uI;
		},
		getItem: function (name) {
			var uI = (this.unicodeImoticon);
			
			if (typeof uI[name] === undefined) {
				return null;
			}
			
			return uI[name];
		}
	};
	
	A.constructor();
	
})(jQuery, $.core);