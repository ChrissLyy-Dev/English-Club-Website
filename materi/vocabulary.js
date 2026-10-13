// Each word: [word, part of speech, meaning (Bahasa Indonesia), example sentence]
const VOCAB_TOPICS = [
  {
    code: "Daily",
    label: "Daily Activities",
    words: [
      ["wake up", "phr. v", "bangun tidur", "I wake up at five o'clock every morning."],
      ["get up", "phr. v", "bangkit dari tempat tidur", "She gets up right after her alarm rings."],
      ["brush", "v", "menyikat", "Don't forget to brush your teeth."],
      ["take a shower", "phr", "mandi (dengan pancuran)", "I take a shower before breakfast."],
      ["get dressed", "phr", "berpakaian", "He gets dressed quickly for school."],
      ["have breakfast", "phr", "sarapan", "We have breakfast together at half past six."],
      ["cook", "v", "memasak", "My mother cooks fried rice on Sundays."],
      ["wash", "v", "mencuci", "Please wash the dishes after dinner."],
      ["clean", "v", "membersihkan", "We clean the classroom every Friday."],
      ["sweep", "v", "menyapu", "I sweep the floor before I go to school."],
      ["leave", "v", "berangkat; meninggalkan", "The school bus leaves at seven."],
      ["arrive", "v", "tiba", "We arrive at school at a quarter to seven."],
      ["study", "v", "belajar", "I study English for an hour every night."],
      ["rest", "v", "beristirahat", "Let's rest for a few minutes."],
      ["nap", "n", "tidur siang", "Grandpa takes a short nap after lunch."],
      ["exercise", "v", "berolahraga", "She exercises three times a week."],
      ["hang out", "phr. v", "nongkrong; main bersama", "We hang out at the beach on weekends."],
      ["chat", "v", "mengobrol", "They chat on the phone for hours."],
      ["pray", "v", "berdoa; salat", "He prays five times a day."],
      ["iron", "v", "menyetrika", "I iron my uniform every Sunday night."],
      ["feed", "v", "memberi makan", "Can you feed the cat this morning?"],
      ["water", "v", "menyiram (tanaman)", "Dad waters the plants in the evening."],
      ["go shopping", "phr", "berbelanja", "We go shopping at the market on Saturday."],
      ["do homework", "phr", "mengerjakan PR", "I do my homework before dinner."],
      ["take out the trash", "phr", "membuang sampah", "It's your turn to take out the trash."],
      ["go to bed", "phr", "pergi tidur", "I usually go to bed at ten."],
      ["fall asleep", "phr", "tertidur", "The baby fell asleep in the car."]
    ]
  },
  {
    code: "School",
    label: "School & Education",
    words: [
      ["subject", "n", "mata pelajaran", "Math is my favorite subject."],
      ["timetable", "n", "jadwal pelajaran", "Check the timetable to see when we have PE."],
      ["uniform", "n", "seragam", "We wear a batik uniform on Thursdays."],
      ["principal", "n", "kepala sekolah", "The principal gave a speech at the ceremony."],
      ["classmate", "n", "teman sekelas", "My classmate lent me her pen."],
      ["assignment", "n", "tugas", "The history assignment is due next Monday."],
      ["exam", "n", "ujian", "The final exam starts at eight o'clock."],
      ["quiz", "n", "kuis; ulangan singkat", "We had a surprise quiz in biology today."],
      ["grade", "n", "nilai; tingkat kelas", "She got a good grade in English."],
      ["report card", "n", "rapor", "Parents collect the report card at the end of the semester."],
      ["textbook", "n", "buku pelajaran", "Open your textbook to page forty."],
      ["dictionary", "n", "kamus", "Look up the new words in a dictionary."],
      ["notebook", "n", "buku catatan", "Write the vocabulary in your notebook."],
      ["eraser", "n", "penghapus", "Can I borrow your eraser?"],
      ["ruler", "n", "penggaris", "Use a ruler to draw a straight line."],
      ["pencil case", "n", "kotak pensil", "My pencil case is full of colored pens."],
      ["whiteboard", "n", "papan tulis", "The teacher wrote the answer on the whiteboard."],
      ["library", "n", "perpustakaan", "I borrowed two novels from the library."],
      ["laboratory", "n", "laboratorium", "We did a chemistry experiment in the laboratory."],
      ["canteen", "n", "kantin", "Let's buy some snacks at the canteen."],
      ["schoolyard", "n", "halaman sekolah", "The students play football in the schoolyard."],
      ["flag ceremony", "n", "upacara bendera", "We have a flag ceremony every Monday morning."],
      ["extracurricular", "adj", "ekstrakurikuler", "English Club is my favorite extracurricular activity."],
      ["scholarship", "n", "beasiswa", "He won a scholarship to study in Japan."],
      ["graduate", "v", "lulus", "We will graduate from high school next year."],
      ["absent", "adj", "tidak hadir", "Rina was absent because she was sick."],
      ["memorize", "v", "menghafal", "Try to memorize ten new words every day."]
    ]
  },
  {
    code: "Family",
    label: "Family & People",
    words: [
      ["parents", "n", "orang tua", "My parents work at the same office."],
      ["sibling", "n", "saudara kandung", "I have two siblings: a brother and a sister."],
      ["grandparents", "n", "kakek dan nenek", "We visit our grandparents every Eid."],
      ["uncle", "n", "paman", "My uncle is a fisherman."],
      ["aunt", "n", "bibi; tante", "My aunt makes the best cakes."],
      ["cousin", "n", "sepupu", "My cousin lives in Pangkalpinang."],
      ["nephew", "n", "keponakan laki-laki", "My nephew just started kindergarten."],
      ["niece", "n", "keponakan perempuan", "Her niece loves drawing animals."],
      ["husband", "n", "suami", "Her husband is a teacher."],
      ["wife", "n", "istri", "His wife runs a small bakery."],
      ["son", "n", "anak laki-laki", "They have one son and two daughters."],
      ["daughter", "n", "anak perempuan", "Their daughter is studying medicine."],
      ["twin", "n", "kembar", "Dina and Dini are twins."],
      ["stepmother", "n", "ibu tiri", "Cinderella lived with her stepmother."],
      ["in-laws", "n", "keluarga mertua/ipar", "She gets along well with her in-laws."],
      ["relative", "n", "kerabat; saudara", "Many relatives came to the wedding."],
      ["neighbor", "n", "tetangga", "Our neighbor helped us fix the roof."],
      ["teenager", "n", "remaja", "Most teenagers enjoy social media."],
      ["adult", "n", "orang dewasa", "Tickets are cheaper for children than for adults."],
      ["elderly", "adj", "lanjut usia", "We should give our seats to elderly people."],
      ["toddler", "n", "balita", "The toddler is learning to walk."],
      ["bride", "n", "pengantin wanita", "The bride wore a beautiful kebaya."],
      ["groom", "n", "pengantin pria", "The groom looked nervous before the ceremony."],
      ["guest", "n", "tamu", "We prepared food for fifty guests."],
      ["stranger", "n", "orang asing (tak dikenal)", "Never share your password with a stranger."],
      ["acquaintance", "n", "kenalan", "He's not a close friend, just an acquaintance."]
    ]
  },
  {
    code: "Food",
    label: "Food & Drinks",
    words: [
      ["ingredient", "n", "bahan (masakan)", "Flour and eggs are the main ingredients."],
      ["recipe", "n", "resep", "Can you share your recipe for martabak?"],
      ["spicy", "adj", "pedas", "This sambal is too spicy for me."],
      ["salty", "adj", "asin", "The soup is a little salty."],
      ["sweet", "adj", "manis", "Es teh in Indonesia is usually very sweet."],
      ["sour", "adj", "asam", "Green mangoes taste sour."],
      ["bitter", "adj", "pahit", "Black coffee is bitter."],
      ["delicious", "adj", "lezat", "Mom's lempah kuning is delicious."],
      ["bland", "adj", "hambar", "The hospital food was bland."],
      ["fry", "v", "menggoreng", "Fry the fish until it is golden."],
      ["boil", "v", "merebus", "Boil the water before you add the noodles."],
      ["grill", "v", "memanggang; membakar", "We grilled fish on the beach."],
      ["steam", "v", "mengukus", "Steam the dumplings for fifteen minutes."],
      ["slice", "v", "mengiris", "Slice the onions thinly."],
      ["stir", "v", "mengaduk", "Stir the coffee slowly."],
      ["dessert", "n", "hidangan penutup", "We had ice cream for dessert."],
      ["snack", "n", "camilan", "Kemplang is a popular snack from Bangka."],
      ["beverage", "n", "minuman", "Hot and cold beverages are available."],
      ["vegetable", "n", "sayuran", "Eat more vegetables to stay healthy."],
      ["meat", "n", "daging", "She doesn't eat red meat."],
      ["seafood", "n", "makanan laut", "Bangka is famous for its fresh seafood."],
      ["flour", "n", "tepung", "We need two cups of flour for the cake."],
      ["rice", "n", "nasi; beras", "Indonesians eat rice almost every day."],
      ["noodles", "n", "mi", "I'll have fried noodles, please."],
      ["portion", "n", "porsi", "The portions at this restaurant are huge."],
      ["leftovers", "n", "sisa makanan", "We ate the leftovers for lunch."],
      ["hungry", "adj", "lapar", "I'm so hungry — I skipped breakfast."],
      ["thirsty", "adj", "haus", "Drink some water if you're thirsty."]
    ]
  },
  {
    code: "Home",
    label: "House & Home",
    words: [
      ["living room", "n", "ruang tamu; ruang keluarga", "We watch TV in the living room."],
      ["bedroom", "n", "kamar tidur", "My bedroom is next to the kitchen."],
      ["kitchen", "n", "dapur", "Mom is cooking in the kitchen."],
      ["bathroom", "n", "kamar mandi", "The bathroom is at the end of the hall."],
      ["garage", "n", "garasi", "Dad parks the motorcycle in the garage."],
      ["yard", "n", "halaman; pekarangan", "The kids are playing in the yard."],
      ["roof", "n", "atap", "The roof leaks when it rains."],
      ["floor", "n", "lantai", "Don't leave your shoes on the floor."],
      ["ceiling", "n", "langit-langit", "There is a gecko on the ceiling."],
      ["wall", "n", "dinding", "We hung a family photo on the wall."],
      ["window", "n", "jendela", "Open the window to let in fresh air."],
      ["stairs", "n", "tangga", "Be careful on the stairs."],
      ["furniture", "n", "perabot", "We bought new furniture for the living room."],
      ["sofa", "n", "sofa", "The cat is sleeping on the sofa."],
      ["cupboard", "n", "lemari", "The plates are in the cupboard."],
      ["shelf", "n", "rak", "Put the books back on the shelf."],
      ["pillow", "n", "bantal", "I can't sleep without my pillow."],
      ["blanket", "n", "selimut", "It's cold — I need another blanket."],
      ["mirror", "n", "cermin", "She looked at herself in the mirror."],
      ["curtain", "n", "tirai; gorden", "Close the curtains, please."],
      ["fan", "n", "kipas angin", "Turn on the fan — it's so hot."],
      ["stove", "n", "kompor", "Don't touch the stove — it's hot."],
      ["refrigerator", "n", "kulkas", "Put the milk in the refrigerator."],
      ["broom", "n", "sapu", "The broom is behind the door."],
      ["bucket", "n", "ember", "Fill the bucket with water."],
      ["tap", "n", "keran", "Turn off the tap to save water."],
      ["rent", "v", "menyewa", "They rent a small house near the market."]
    ]
  },
  {
    code: "Health",
    label: "Body & Health",
    words: [
      ["shoulder", "n", "bahu", "He carried the bag on his shoulder."],
      ["elbow", "n", "siku", "I hit my elbow on the table."],
      ["knee", "n", "lutut", "She hurt her knee playing basketball."],
      ["ankle", "n", "pergelangan kaki", "He twisted his ankle during the match."],
      ["wrist", "n", "pergelangan tangan", "She wears a watch on her left wrist."],
      ["chest", "n", "dada", "He felt a pain in his chest."],
      ["stomach", "n", "perut; lambung", "My stomach hurts after eating too much."],
      ["throat", "n", "tenggorokan", "Drink warm water for your throat."],
      ["cheek", "n", "pipi", "The baby has chubby cheeks."],
      ["chin", "n", "dagu", "He has a small scar on his chin."],
      ["eyebrow", "n", "alis", "She raised her eyebrows in surprise."],
      ["forehead", "n", "dahi", "Mom touched my forehead to check for fever."],
      ["headache", "n", "sakit kepala", "I have a headache from studying all night."],
      ["fever", "n", "demam", "He stayed home because he had a fever."],
      ["cough", "n", "batuk", "This medicine is for your cough."],
      ["flu", "n", "flu", "Half the class has the flu."],
      ["toothache", "n", "sakit gigi", "Eating too much candy gave me a toothache."],
      ["sore throat", "n", "radang tenggorokan", "I can't sing today — I have a sore throat."],
      ["injury", "n", "cedera", "The player left the game with an injury."],
      ["medicine", "n", "obat", "Take this medicine three times a day."],
      ["pharmacy", "n", "apotek", "You can buy vitamins at the pharmacy."],
      ["prescription", "n", "resep dokter", "The doctor wrote me a prescription."],
      ["patient", "n", "pasien", "The nurse is checking on the patient."],
      ["recover", "v", "pulih; sembuh", "She recovered quickly after the operation."],
      ["healthy", "adj", "sehat", "Eating fruit keeps you healthy."],
      ["sneeze", "v", "bersin", "Cover your mouth when you sneeze."],
      ["dizzy", "adj", "pusing", "I felt dizzy after the long bus ride."]
    ]
  },
  {
    code: "Feelings",
    label: "Feelings & Personality",
    words: [
      ["cheerful", "adj", "ceria", "She is always cheerful in the morning."],
      ["excited", "adj", "bersemangat; antusias", "We're excited about the school trip."],
      ["nervous", "adj", "gugup", "I was nervous before my speech."],
      ["worried", "adj", "khawatir", "Mom is worried because I came home late."],
      ["angry", "adj", "marah", "He was angry when someone broke his phone."],
      ["upset", "adj", "kesal; sedih", "She was upset about her test score."],
      ["embarrassed", "adj", "malu", "I was embarrassed when I tripped on stage."],
      ["proud", "adj", "bangga", "My parents are proud of me."],
      ["jealous", "adj", "cemburu; iri", "He was jealous of his brother's new bike."],
      ["lonely", "adj", "kesepian", "She felt lonely in the new city."],
      ["bored", "adj", "bosan", "I'm bored — let's do something fun."],
      ["confused", "adj", "bingung", "I'm confused about this math problem."],
      ["grateful", "adj", "bersyukur; berterima kasih", "I'm grateful for your help."],
      ["disappointed", "adj", "kecewa", "We were disappointed when the concert was cancelled."],
      ["scared", "adj", "takut", "My little sister is scared of the dark."],
      ["relieved", "adj", "lega", "I was relieved to hear that everyone was safe."],
      ["friendly", "adj", "ramah", "The people in this village are very friendly."],
      ["honest", "adj", "jujur", "An honest person always tells the truth."],
      ["lazy", "adj", "malas", "Don't be lazy — finish your homework."],
      ["hardworking", "adj", "rajin; pekerja keras", "She is the most hardworking student in class."],
      ["shy", "adj", "pemalu", "He is too shy to speak in front of the class."],
      ["brave", "adj", "berani", "The brave firefighter saved the child."],
      ["generous", "adj", "dermawan; murah hati", "My uncle is generous — he always shares."],
      ["careless", "adj", "ceroboh", "Careless mistakes cost me five points."],
      ["stubborn", "adj", "keras kepala", "My brother is too stubborn to say sorry."],
      ["polite", "adj", "sopan", "It's polite to say thank you."],
      ["arrogant", "adj", "sombong", "Nobody likes an arrogant winner."],
      ["humble", "adj", "rendah hati", "Despite his success, he stayed humble."]
    ]
  },
  {
    code: "Nature",
    label: "Nature & Environment",
    words: [
      ["mountain", "n", "gunung", "Mount Maras is the highest mountain on Bangka Island."],
      ["river", "n", "sungai", "Don't throw rubbish into the river."],
      ["beach", "n", "pantai", "Parai Beach has beautiful granite rocks."],
      ["island", "n", "pulau", "Indonesia has more than 17,000 islands."],
      ["forest", "n", "hutan", "Many animals live in the forest."],
      ["waterfall", "n", "air terjun", "We swam under the waterfall."],
      ["volcano", "n", "gunung berapi", "Mount Merapi is an active volcano."],
      ["valley", "n", "lembah", "The village is in a green valley."],
      ["ocean", "n", "samudra", "The Indian Ocean is south of Java."],
      ["coral reef", "n", "terumbu karang", "Coral reefs are home to colorful fish."],
      ["mangrove", "n", "hutan bakau", "Mangroves protect the coast from waves."],
      ["weather", "n", "cuaca", "The weather is sunny today."],
      ["rainy season", "n", "musim hujan", "Floods often happen in the rainy season."],
      ["dry season", "n", "musim kemarau", "The rivers get low during the dry season."],
      ["flood", "n", "banjir", "The flood damaged many houses."],
      ["drought", "n", "kekeringan", "The drought destroyed the farmers' crops."],
      ["earthquake", "n", "gempa bumi", "The earthquake shook the whole city."],
      ["pollution", "n", "polusi; pencemaran", "Air pollution is a big problem in Jakarta."],
      ["waste", "n", "limbah; sampah", "Factories must not dump waste into the sea."],
      ["recycle", "v", "mendaur ulang", "We recycle plastic bottles at school."],
      ["climate change", "n", "perubahan iklim", "Climate change causes more extreme weather."],
      ["global warming", "n", "pemanasan global", "Global warming is melting the polar ice."],
      ["endangered", "adj", "terancam punah", "The tarsier is an endangered animal."],
      ["wildlife", "n", "satwa liar", "We must protect our wildlife."],
      ["deforestation", "n", "penggundulan hutan", "Deforestation destroys animal habitats."],
      ["mining", "n", "penambangan", "Tin mining has changed the landscape of Bangka."],
      ["protect", "v", "melindungi", "Planting trees helps protect the environment."]
    ]
  },
  {
    code: "Travel",
    label: "Travel & Transportation",
    words: [
      ["ticket", "n", "tiket; karcis", "I bought a plane ticket to Jakarta."],
      ["passenger", "n", "penumpang", "All passengers must wear a seatbelt."],
      ["luggage", "n", "bagasi; barang bawaan", "My luggage is too heavy."],
      ["passport", "n", "paspor", "You need a passport to travel abroad."],
      ["destination", "n", "tujuan", "Bali is a popular tourist destination."],
      ["journey", "n", "perjalanan", "The journey from Bangka to Jakarta takes one hour by plane."],
      ["departure", "n", "keberangkatan", "Please arrive two hours before departure."],
      ["arrival", "n", "kedatangan", "The arrival time is 3 p.m."],
      ["delay", "n", "penundaan; keterlambatan", "There is a two-hour delay because of the storm."],
      ["airport", "n", "bandara", "We picked up Grandma at the airport."],
      ["harbor", "n", "pelabuhan", "The ship is waiting in the harbor."],
      ["ferry", "n", "kapal feri", "We took a ferry to Belitung."],
      ["motorcycle", "n", "sepeda motor", "He rides a motorcycle to school."],
      ["traffic jam", "n", "kemacetan", "We were stuck in a traffic jam for an hour."],
      ["crossroads", "n", "perempatan", "Turn left at the crossroads."],
      ["sidewalk", "n", "trotoar", "Walk on the sidewalk, not on the road."],
      ["souvenir", "n", "oleh-oleh; cendera mata", "I bought some souvenirs for my friends."],
      ["tourist", "n", "wisatawan", "Many tourists visit Bangka during the holidays."],
      ["sightseeing", "n", "jalan-jalan melihat pemandangan", "We went sightseeing around the old town."],
      ["accommodation", "n", "penginapan; akomodasi", "The price includes flights and accommodation."],
      ["book", "v", "memesan", "We booked a hotel room online."],
      ["map", "n", "peta", "Let's check the map before we go."],
      ["guide", "n", "pemandu", "Our tour guide spoke three languages."],
      ["backpack", "n", "ransel", "Pack a water bottle in your backpack."],
      ["round trip", "n", "pulang-pergi", "A round-trip ticket is cheaper."],
      ["abroad", "adv", "ke/di luar negeri", "She wants to study abroad."],
      ["fare", "n", "ongkos; tarif", "How much is the bus fare?"]
    ]
  },
  {
    code: "Jobs",
    label: "Jobs & Work",
    words: [
      ["nurse", "n", "perawat", "The nurse took my temperature."],
      ["farmer", "n", "petani", "Farmers grow pepper in Bangka."],
      ["fisherman", "n", "nelayan", "The fisherman went to sea before dawn."],
      ["police officer", "n", "polisi", "Ask a police officer for directions."],
      ["firefighter", "n", "pemadam kebakaran", "Firefighters put out the fire quickly."],
      ["lawyer", "n", "pengacara", "The lawyer defended her client in court."],
      ["engineer", "n", "insinyur", "My brother wants to be an engineer."],
      ["accountant", "n", "akuntan", "An accountant manages the company's money."],
      ["architect", "n", "arsitek", "The architect designed a modern school."],
      ["journalist", "n", "wartawan", "The journalist interviewed the governor."],
      ["mechanic", "n", "montir", "The mechanic fixed my motorcycle."],
      ["tailor", "n", "penjahit", "The tailor made my new uniform."],
      ["chef", "n", "koki", "The chef prepared a special menu."],
      ["cashier", "n", "kasir", "Pay the cashier at the front."],
      ["employee", "n", "karyawan", "The company has two hundred employees."],
      ["employer", "n", "pemberi kerja; majikan", "My employer gave me a day off."],
      ["salary", "n", "gaji", "She gets her salary at the end of the month."],
      ["interview", "n", "wawancara", "I have a job interview tomorrow."],
      ["apply", "v", "melamar; mendaftar", "He applied for a job at the bank."],
      ["resign", "v", "mengundurkan diri", "She resigned to start her own business."],
      ["retire", "v", "pensiun", "My grandfather retired at sixty."],
      ["colleague", "n", "rekan kerja", "I had lunch with my colleagues."],
      ["deadline", "n", "tenggat waktu", "The deadline for the project is Friday."],
      ["career", "n", "karier", "She has a successful career in medicine."],
      ["skill", "n", "keterampilan", "Communication is an important skill."],
      ["experience", "n", "pengalaman", "Do you have any work experience?"],
      ["unemployed", "adj", "menganggur", "He has been unemployed for six months."]
    ]
  },
  {
    code: "Tech",
    label: "Technology & Media",
    words: [
      ["device", "n", "perangkat", "Turn off all electronic devices during the exam."],
      ["screen", "n", "layar", "My phone screen is cracked."],
      ["keyboard", "n", "papan ketik", "This keyboard is easy to type on."],
      ["charger", "n", "pengisi daya", "Can I borrow your charger?"],
      ["battery", "n", "baterai", "My battery is almost dead."],
      ["download", "v", "mengunduh", "Download the app from the store."],
      ["upload", "v", "mengunggah", "She uploaded the video to YouTube."],
      ["install", "v", "memasang (aplikasi)", "Install the latest version of the game."],
      ["update", "v", "memperbarui", "Update your phone to fix the bug."],
      ["password", "n", "kata sandi", "Use a strong password for your account."],
      ["account", "n", "akun", "I created a new email account."],
      ["website", "n", "situs web", "Our school has a new website."],
      ["search engine", "n", "mesin pencari", "Google is the most popular search engine."],
      ["social media", "n", "media sosial", "Teenagers spend hours on social media."],
      ["post", "n", "unggahan", "Her post got a thousand likes."],
      ["comment", "n", "komentar", "Leave a comment below the video."],
      ["share", "v", "membagikan", "Don't share news before checking it."],
      ["follower", "n", "pengikut", "He has ten thousand followers."],
      ["subscribe", "v", "berlangganan", "Subscribe to our channel for more videos."],
      ["signal", "n", "sinyal", "There's no signal in this area."],
      ["offline", "adj", "luring; tidak terhubung", "You can watch this video offline."],
      ["wireless", "adj", "nirkabel", "I use wireless earphones."],
      ["hoax", "n", "berita bohong", "That story about the school closing was a hoax."],
      ["privacy", "n", "privasi", "Check your privacy settings."],
      ["screenshot", "n", "tangkapan layar", "Take a screenshot of the receipt."],
      ["storage", "n", "penyimpanan", "My phone is out of storage."],
      ["app", "n", "aplikasi", "This app helps you learn English."]
    ]
  },
  {
    code: "Academic",
    label: "Academic Words",
    words: [
      ["analyze", "v", "menganalisis", "Analyze the data before you draw a conclusion."],
      ["assume", "v", "berasumsi; menganggap", "Don't assume that everyone agrees with you."],
      ["benefit", "n", "manfaat", "Regular exercise has many benefits."],
      ["consequence", "n", "akibat; konsekuensi", "Every choice has consequences."],
      ["contribute", "v", "berkontribusi", "Everyone contributed ideas to the project."],
      ["define", "v", "mendefinisikan", "Define the key terms in your essay."],
      ["evidence", "n", "bukti", "There is no evidence to support that claim."],
      ["establish", "v", "mendirikan; menetapkan", "The school was established in 1960."],
      ["factor", "n", "faktor", "Price is an important factor."],
      ["identify", "v", "mengidentifikasi", "Identify the main idea of the paragraph."],
      ["indicate", "v", "menunjukkan", "The results indicate a clear improvement."],
      ["interpret", "v", "menafsirkan", "People interpret the poem differently."],
      ["method", "n", "metode; cara", "This is the best method for learning vocabulary."],
      ["occur", "v", "terjadi", "The accident occurred at midnight."],
      ["significant", "adj", "signifikan; penting", "There was a significant increase in sales."],
      ["obtain", "v", "memperoleh", "You must obtain permission first."],
      ["require", "v", "membutuhkan; mengharuskan", "This job requires good English."],
      ["research", "n", "penelitian", "She is doing research on coral reefs."],
      ["sufficient", "adj", "cukup; memadai", "We don't have sufficient time."],
      ["summarize", "v", "meringkas", "Summarize the text in three sentences."],
      ["approach", "n", "pendekatan", "We need a new approach to this problem."],
      ["despite", "prep", "meskipun; walaupun", "Despite the rain, we went to school."],
      ["furthermore", "adv", "selain itu; lebih lanjut", "The plan is cheap. Furthermore, it is easy."],
      ["however", "adv", "namun; akan tetapi", "I studied hard. However, I failed the test."],
      ["therefore", "adv", "oleh karena itu", "It was raining; therefore, the match was cancelled."],
      ["crucial", "adj", "sangat penting; krusial", "Sleep is crucial for good health."],
      ["enhance", "v", "meningkatkan", "Reading can enhance your vocabulary."]
    ]
  },
  {
    code: "Phrasal",
    label: "Phrasal Verbs",
    words: [
      ["give up", "phr. v", "menyerah; berhenti", "Don't give up — you're almost there!"],
      ["look for", "phr. v", "mencari", "I'm looking for my keys."],
      ["look after", "phr. v", "merawat; menjaga", "Can you look after my cat this weekend?"],
      ["find out", "phr. v", "mengetahui; mencari tahu", "I found out the truth yesterday."],
      ["pick up", "phr. v", "menjemput; mengambil", "Dad will pick me up after school."],
      ["put on", "phr. v", "memakai (pakaian)", "Put on your jacket — it's cold."],
      ["take off", "phr. v", "melepas; lepas landas", "Take off your shoes before entering."],
      ["turn on", "phr. v", "menyalakan", "Turn on the lights, please."],
      ["turn off", "phr. v", "mematikan", "Turn off your phone in class."],
      ["turn down", "phr. v", "menolak; mengecilkan", "She turned down the job offer."],
      ["come back", "phr. v", "kembali", "I'll come back in ten minutes."],
      ["run out of", "phr. v", "kehabisan", "We ran out of sugar."],
      ["get along with", "phr. v", "akur dengan", "I get along with all my classmates."],
      ["look forward to", "phr. v", "menantikan", "I'm looking forward to the holidays."],
      ["set up", "phr. v", "menyiapkan; mendirikan", "Let's set up the stage for the show."],
      ["carry on", "phr. v", "melanjutkan", "Carry on with your work."],
      ["break down", "phr. v", "rusak; mogok", "Our car broke down on the way home."],
      ["call off", "phr. v", "membatalkan", "They called off the match because of rain."],
      ["figure out", "phr. v", "memahami; memecahkan", "I can't figure out this puzzle."],
      ["show up", "phr. v", "muncul; datang", "He didn't show up for the meeting."],
      ["put off", "phr. v", "menunda", "Don't put off your homework until tomorrow."],
      ["bring up", "phr. v", "mengungkit; membesarkan (anak)", "She was brought up by her grandparents."],
      ["grow up", "phr. v", "tumbuh dewasa", "I grew up in Sungailiat."],
      ["work out", "phr. v", "berolahraga; berhasil", "He works out at the gym every day."],
      ["fill in", "phr. v", "mengisi (formulir)", "Fill in the form with your name."],
      ["check in", "phr. v", "mendaftar masuk (hotel/bandara)", "We checked in at the hotel at two."],
      ["keep up with", "phr. v", "mengikuti; mengimbangi", "It's hard to keep up with the lessons."]
    ]
  }
];

const QUIZ_LENGTH = 10;
let currentTopicIndex = -1; // -1 = all topics

function getCurrentWords() {
  if (currentTopicIndex === -1) {
    return VOCAB_TOPICS.reduce(function (all, topic) { return all.concat(topic.words); }, []);
  }
  return VOCAB_TOPICS[currentTopicIndex].words;
}

function shuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }
  return copy;
}

function speakWord(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

function renderTopicTabs() {
  const container = document.getElementById("topic-tabs");
  if (!container) return;
  container.innerHTML = "";

  const options = [{ code: "All", index: -1 }].concat(VOCAB_TOPICS.map(function (topic, index) {
    return { code: topic.code, index: index };
  }));

  options.forEach(function (option) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "level-tab";
    btn.textContent = option.code;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", String(option.index === currentTopicIndex));
    btn.addEventListener("click", function () {
      currentTopicIndex = option.index;
      renderTopicTabs();
      renderWordList();
      renderQuiz();
    });
    container.appendChild(btn);
  });

  const heading = document.getElementById("topic-heading");
  if (heading) {
    heading.textContent = currentTopicIndex === -1 ? "All topics" : VOCAB_TOPICS[currentTopicIndex].label;
  }
}

function renderWordList() {
  const grid = document.getElementById("vocab-grid");
  const countEl = document.getElementById("vocab-count");
  const searchEl = document.getElementById("vocab-search");
  if (!grid) return;

  const query = searchEl ? searchEl.value.trim().toLowerCase() : "";
  const words = getCurrentWords().filter(function (entry) {
    return !query || entry[0].toLowerCase().indexOf(query) !== -1 || entry[2].toLowerCase().indexOf(query) !== -1;
  });

  grid.innerHTML = "";
  words.forEach(function (entry) {
    const card = document.createElement("article");
    card.className = "vocab-card";

    const top = document.createElement("div");
    top.className = "vocab-card-top";

    const word = document.createElement("h3");
    word.className = "vocab-word";
    word.textContent = entry[0];
    top.appendChild(word);

    const pos = document.createElement("span");
    pos.className = "vocab-pos";
    pos.textContent = entry[1];
    top.appendChild(pos);

    if ("speechSynthesis" in window) {
      const speakBtn = document.createElement("button");
      speakBtn.type = "button";
      speakBtn.className = "speak-btn";
      speakBtn.textContent = "🔊";
      speakBtn.setAttribute("aria-label", "Pronounce " + entry[0]);
      speakBtn.addEventListener("click", function () { speakWord(entry[0]); });
      top.appendChild(speakBtn);
    }
    card.appendChild(top);

    const meaning = document.createElement("p");
    meaning.className = "vocab-meaning";
    meaning.textContent = entry[2];
    card.appendChild(meaning);

    const example = document.createElement("p");
    example.className = "vocab-example";
    example.textContent = entry[3];
    card.appendChild(example);

    grid.appendChild(card);
  });

  if (countEl) {
    countEl.textContent = words.length === 0
      ? "No words found."
      : "Showing " + words.length + " word" + (words.length === 1 ? "" : "s") + ".";
  }
}

function renderQuiz() {
  const questionsEl = document.getElementById("questions-container");
  if (!questionsEl) return;
  questionsEl.innerHTML = "";

  const pool = getCurrentWords();
  const picked = shuffle(pool).slice(0, QUIZ_LENGTH);

  picked.forEach(function (entry, qIndex) {
    const wrongMeanings = shuffle(pool.filter(function (other) { return other[2] !== entry[2]; }))
      .slice(0, 3)
      .map(function (other) { return other[2]; });
    const options = shuffle(wrongMeanings.concat(entry[2]));
    const correctIndex = options.indexOf(entry[2]);

    const card = document.createElement("div");
    card.className = "question-card";

    const qText = document.createElement("p");
    qText.className = "question-text";
    qText.textContent = (qIndex + 1) + ". What does \"" + entry[0] + "\" mean?";
    card.appendChild(qText);

    const optionsWrap = document.createElement("div");
    optionsWrap.className = "question-options";

    const feedback = document.createElement("p");
    feedback.className = "feedback";
    feedback.id = "vocab-feedback-" + qIndex;

    options.forEach(function (optionText, oIndex) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.textContent = optionText;
      btn.addEventListener("click", function () {
        const buttons = optionsWrap.querySelectorAll(".option-btn");
        buttons.forEach(function (b) { b.classList.remove("correct", "incorrect"); });
        if (oIndex === correctIndex) {
          btn.classList.add("correct");
          setVocabFeedback(feedback.id, "Correct! " + entry[3], "correct");
        } else {
          btn.classList.add("incorrect");
          buttons[correctIndex].classList.add("correct");
          setVocabFeedback(feedback.id, "Not quite — look at the highlighted answer.", "incorrect");
        }
      });
      optionsWrap.appendChild(btn);
    });

    card.appendChild(optionsWrap);
    card.appendChild(feedback);
    questionsEl.appendChild(card);
  });
}

function setVocabFeedback(elementId, message, type) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = message;
  el.className = "feedback" + (type ? " " + type : "");
}

function initVocabularyPage() {
  if (!document.getElementById("topic-tabs")) return;

  const searchEl = document.getElementById("vocab-search");
  if (searchEl) searchEl.addEventListener("input", renderWordList);

  const newQuizBtn = document.getElementById("new-quiz");
  if (newQuizBtn) newQuizBtn.addEventListener("click", renderQuiz);

  renderTopicTabs();
  renderWordList();
  renderQuiz();
}

window.addEventListener("load", initVocabularyPage);
