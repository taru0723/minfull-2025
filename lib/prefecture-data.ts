// 都道府県コードとローマ字名のマッピング
export const prefectureCodeMap: Record<string, string> = {
  "1": "hokkaido",
  "2": "aomori",
  "3": "iwate",
  "4": "miyagi",
  "5": "akita",
  "6": "yamagata",
  "7": "fukushima",
  "8": "ibaraki",
  "9": "tochigi",
  "10": "gunma",
  "11": "saitama",
  "12": "chiba",
  "13": "tokyo",
  "14": "kanagawa",
  "15": "niigata",
  "16": "toyama",
  "17": "ishikawa",
  "18": "fukui",
  "19": "yamanashi",
  "20": "nagano",
  "21": "gifu",
  "22": "shizuoka",
  "23": "aichi",
  "24": "mie",
  "25": "shiga",
  "26": "kyoto",
  "27": "osaka",
  "28": "hyogo",
  "29": "nara",
  "30": "wakayama",
  "31": "tottori",
  "32": "shimane",
  "33": "okayama",
  "34": "hiroshima",
  "35": "yamaguchi",
  "36": "tokushima",
  "37": "kagawa",
  "38": "ehime",
  "39": "kochi",
  "40": "fukuoka",
  "41": "saga",
  "42": "nagasaki",
  "43": "kumamoto",
  "44": "oita",
  "45": "miyazaki",
  "46": "kagoshima",
  "47": "okinawa",
}

// ローマ字から都道府県名への変換
export const prefectureNameMap: Record<string, string> = {
  hokkaido: "北海道",
  aomori: "青森県",
  iwate: "岩手県",
  miyagi: "宮城県",
  akita: "秋田県",
  yamagata: "山形県",
  fukushima: "福島県",
  ibaraki: "茨城県",
  tochigi: "栃木県",
  gunma: "群馬県",
  saitama: "埼玉県",
  chiba: "千葉県",
  tokyo: "東京都",
  kanagawa: "神奈川県",
  niigata: "新潟県",
  toyama: "富山県",
  ishikawa: "石川県",
  fukui: "福井県",
  yamanashi: "山梨県",
  nagano: "長野県",
  gifu: "岐阜県",
  shizuoka: "静岡県",
  aichi: "愛知県",
  mie: "三重県",
  shiga: "滋賀県",
  kyoto: "京都府",
  osaka: "大阪府",
  hyogo: "兵庫県",
  nara: "奈良県",
  wakayama: "和歌山県",
  tottori: "鳥取県",
  shimane: "島根県",
  okayama: "岡山県",
  hiroshima: "広島県",
  yamaguchi: "山口県",
  tokushima: "徳島県",
  kagawa: "香川県",
  ehime: "愛媛県",
  kochi: "高知県",
  fukuoka: "福岡県",
  saga: "佐賀県",
  nagasaki: "長崎県",
  kumamoto: "熊本県",
  oita: "大分県",
  miyazaki: "宮崎県",
  kagoshima: "鹿児島県",
  okinawa: "沖縄県",
}

// 都道府県ごとの市町村データ
export type Municipality = {
  id: string
  name: string
  link: string
}

export type MunicipalityGroup = {
  [key: string]: Municipality[]
}

export const prefectureMunicipalities: Record<string, MunicipalityGroup> = {
  // 北海道の市町村データ
  hokkaido: {
    あ行: [
      { id: "abashiri", name: "網走市", link: "/local/f282260-awaji" },
      { id: "asahikawa", name: "旭川市", link: "/local/f282260-awaji" },
      { id: "ashibetsu", name: "芦別市", link: "/local/f282260-awaji" },
      { id: "akkeshi", name: "厚岸町", link: "/local/f282260-awaji" },
      { id: "abira", name: "安平町", link: "/local/f282260-awaji" },
      { id: "aibetsu", name: "愛別町", link: "/local/f282260-awaji" },
      { id: "iwamizawa", name: "岩見沢市", link: "/local/f282260-awaji" },
      { id: "iwanai", name: "岩内町", link: "/local/f282260-awaji" },
      { id: "utashinai", name: "歌志内市", link: "/local/f282260-awaji" },
      { id: "embetsu", name: "遠別町", link: "/local/f282260-awaji" },
      { id: "eniwa", name: "恵庭市", link: "/local/f282260-awaji" },
      { id: "erimo", name: "えりも町", link: "/local/f282260-awaji" },
      { id: "esashi", name: "江差町", link: "/local/f282260-awaji" },
      { id: "obihiro", name: "帯広市", link: "/local/f282260-awaji" },
      { id: "oketo", name: "置戸町", link: "/local/f282260-awaji" },
      { id: "otaru", name: "小樽市", link: "/local/f282260-awaji" },
      { id: "otofuke", name: "音更町", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kamikawa", name: "上川町", link: "/local/f282260-awaji" },
      { id: "kamishihoro", name: "上士幌町", link: "/local/f282260-awaji" },
      { id: "kamifurano", name: "上富良野町", link: "/local/f282260-awaji" },
      { id: "kamisunagawa", name: "上砂川町", link: "/local/f282260-awaji" },
      { id: "kitami", name: "北見市", link: "/local/f282260-awaji" },
      { id: "kikonai", name: "木古内町", link: "/local/f282260-awaji" },
      { id: "kutchan", name: "倶知安町", link: "/local/f282260-awaji" },
      { id: "kuromatsunai", name: "黒松内町", link: "/local/f282260-awaji" },
      { id: "kembuchi", name: "剣淵町", link: "/local/f282260-awaji" },
      { id: "koshimizu", name: "小清水町", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "sapporo", name: "札幌市", link: "/local/f282260-awaji" },
      { id: "samani", name: "様似町", link: "/local/f282260-awaji" },
      { id: "sarufutsu", name: "猿払村", link: "/local/f282260-awaji" },
      { id: "shimokawa", name: "下川町", link: "/local/f282260-awaji" },
      { id: "shimukappu", name: "占冠村", link: "/local/f282260-awaji" },
      { id: "shinshinotsu", name: "新篠津村", link: "/local/f282260-awaji" },
      { id: "shintoku", name: "新得町", link: "/local/f282260-awaji" },
      { id: "shiranuka", name: "白糠町", link: "/local/f282260-awaji" },
      { id: "shiraoi", name: "白老町", link: "/local/f282260-awaji" },
      { id: "shiribeshi", name: "知内町", link: "/local/f282260-awaji" },
      { id: "sobetsu", name: "壮瞥町", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "takikawa", name: "滝川市", link: "/local/f282260-awaji" },
      { id: "takasu", name: "鷹栖町", link: "/local/f282260-awaji" },
      { id: "takinoue", name: "滝上町", link: "/local/f282260-awaji" },
      { id: "date", name: "伊達市", link: "/local/f282260-awaji" },
      { id: "chitose", name: "千歳市", link: "/local/f282260-awaji" },
      { id: "chippubetsu", name: "秩父別町", link: "/local/f282260-awaji" },
      { id: "toyako", name: "洞爺湖町", link: "/local/f282260-awaji" },
      { id: "toyotomi", name: "豊富町", link: "/local/f282260-awaji" },
      { id: "toyoura", name: "豊浦町", link: "/local/f282260-awaji" },
      { id: "tomakomai", name: "苫小牧市", link: "/local/f282260-awaji" },
    ],
    な行: [
      { id: "nakasatsunai", name: "中札内村", link: "/local/f282260-awaji" },
      { id: "nakagawa", name: "中川町", link: "/local/f282260-awaji" },
      { id: "nakatombetsu", name: "中頓別町", link: "/local/f282260-awaji" },
      { id: "nakafurano", name: "中富良野町", link: "/local/f282260-awaji" },
      { id: "nanae", name: "七飯町", link: "/local/f282260-awaji" },
      { id: "nanporo", name: "南幌町", link: "/local/f282260-awaji" },
      { id: "nemuro", name: "根室市", link: "/local/f282260-awaji" },
      { id: "nayoro", name: "名寄市", link: "/local/f282260-awaji" },
      { id: "noboribetsu", name: "登別市", link: "/local/f282260-awaji" },
    ],
    は行: [
      { id: "hakodate", name: "函館市", link: "/local/f282260-awaji" },
      { id: "haboro", name: "羽幌町", link: "/local/f282260-awaji" },
      { id: "hamatonbetsu", name: "浜頓別町", link: "/local/f282260-awaji" },
      { id: "bibai", name: "美唄市", link: "/local/f282260-awaji" },
      { id: "hidaka", name: "日高町", link: "/local/f282260-awaji" },
      { id: "bifuka", name: "美深町", link: "/local/f282260-awaji" },
      { id: "pippu", name: "比布町", link: "/local/f282260-awaji" },
      { id: "fukagawa", name: "深川市", link: "/local/f282260-awaji" },
      { id: "furano", name: "富良野市", link: "/local/f282260-awaji" },
      { id: "betsukai", name: "別海町", link: "/local/f282260-awaji" },
      { id: "hokuto", name: "北斗市", link: "/local/f282260-awaji" },
      { id: "hokuryu", name: "北竜町", link: "/local/f282260-awaji" },
    ],
    ま行: [
      { id: "mashike", name: "増毛町", link: "/local/f282260-awaji" },
      { id: "matsumae", name: "松前町", link: "/local/f282260-awaji" },
      { id: "mikasa", name: "三笠市", link: "/local/f282260-awaji" },
      { id: "minamifurano", name: "南富良野町", link: "/local/f282260-awaji" },
      { id: "mombetsu", name: "紋別市", link: "/local/f282260-awaji" },
      { id: "mori", name: "森町", link: "/local/f282260-awaji" },
      { id: "muroran", name: "室蘭市", link: "/local/f282260-awaji" },
    ],
    や行: [
      { id: "yakumo", name: "八雲町", link: "/local/f282260-awaji" },
      { id: "yoichi", name: "余市町", link: "/local/f282260-awaji" },
      { id: "yubari", name: "夕張市", link: "/local/f282260-awaji" },
    ],
    ら行: [
      { id: "rankoshi", name: "蘭越町", link: "/local/f282260-awaji" },
      { id: "rishiri", name: "利尻町", link: "/local/f282260-awaji" },
      { id: "rishirifuji", name: "利尻富士町", link: "/local/f282260-awaji" },
      { id: "rebun", name: "礼文町", link: "/local/f282260-awaji" },
      { id: "rusutsu", name: "留寿都村", link: "/local/f282260-awaji" },
    ],
    わ行: [
      { id: "wakkanai", name: "稚内市", link: "/local/f282260-awaji" },
      { id: "wassamu", name: "和寒町", link: "/local/f282260-awaji" },
    ],
  },

  // 青森県の市町村データ
  aomori: {
    あ行: [
      { id: "aomori", name: "青森市", link: "/local/f282260-awaji" },
      { id: "ajigasawa", name: "鰺ヶ沢町", link: "/local/f282260-awaji" },
      { id: "inakadate", name: "田舎館村", link: "/local/f282260-awaji" },
      { id: "oirase", name: "おいらせ町", link: "/local/f282260-awaji" },
      { id: "owani", name: "大鰐町", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kizukuri", name: "木造町", link: "/local/f282260-awaji" },
      { id: "goshogawara", name: "五所川原市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "sannohe", name: "三戸町", link: "/local/f282260-awaji" },
      { id: "shichinohe", name: "七戸町", link: "/local/f282260-awaji" },
      { id: "shingo", name: "新郷村", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "takko", name: "田子町", link: "/local/f282260-awaji" },
      { id: "tsugaru", name: "つがる市", link: "/local/f282260-awaji" },
      { id: "tsuruta", name: "鶴田町", link: "/local/f282260-awaji" },
      { id: "tohoku", name: "東北町", link: "/local/f282260-awaji" },
      { id: "towada", name: "十和田市", link: "/local/f282260-awaji" },
    ],
    な行: [
      { id: "nakadomari", name: "中泊町", link: "/local/f282260-awaji" },
      { id: "nango", name: "南郷村", link: "/local/f282260-awaji" },
      { id: "noheji", name: "野辺地町", link: "/local/f282260-awaji" },
    ],
    は行: [
      { id: "hachinohe", name: "八戸市", link: "/local/f282260-awaji" },
      { id: "hirakawa", name: "平川市", link: "/local/f282260-awaji" },
      { id: "hirosaki", name: "弘前市", link: "/local/f282260-awaji" },
      { id: "fujisaki", name: "藤崎町", link: "/local/f282260-awaji" },
    ],
    ま行: [
      { id: "misawa", name: "三沢市", link: "/local/f282260-awaji" },
      { id: "mutsu", name: "むつ市", link: "/local/f282260-awaji" },
    ],
    や行: [{ id: "yokohama", name: "横浜町", link: "/local/f282260-awaji" }],
    ら行: [
      { id: "rokunohe", name: "六戸町", link: "/local/f282260-awaji" },
      { id: "rokkasho", name: "六ヶ所村", link: "/local/f282260-awaji" },
    ],
    わ行: [],
  },

  // 岩手県の市町村データ
  iwate: {
    あ行: [
      { id: "ichinoseki", name: "一関市", link: "/local/f282260-awaji" },
      { id: "iwate", name: "岩手町", link: "/local/f282260-awaji" },
      { id: "otsuchi", name: "大槌町", link: "/local/f282260-awaji" },
      { id: "oshu", name: "奥州市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kamaishi", name: "釜石市", link: "/local/f282260-awaji" },
      { id: "kitakami", name: "北上市", link: "/local/f282260-awaji" },
      { id: "kuji", name: "久慈市", link: "/local/f282260-awaji" },
      { id: "kuzumaki", name: "葛巻町", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "shiwa", name: "紫波町", link: "/local/f282260-awaji" },
      { id: "sumita", name: "住田町", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "tanohata", name: "田野畑村", link: "/local/f282260-awaji" },
      { id: "tono", name: "遠野市", link: "/local/f282260-awaji" },
    ],
    な行: [
      { id: "ninohe", name: "二戸市", link: "/local/f282260-awaji" },
      { id: "noda", name: "野田村", link: "/local/f282260-awaji" },
    ],
    は行: [
      { id: "hanamaki", name: "花巻市", link: "/local/f282260-awaji" },
      { id: "hiraizumi", name: "平泉町", link: "/local/f282260-awaji" },
      { id: "fudai", name: "普代村", link: "/local/f282260-awaji" },
      { id: "fujisawa", name: "藤沢町", link: "/local/f282260-awaji" },
    ],
    ま行: [
      { id: "miyako", name: "宮古市", link: "/local/f282260-awaji" },
      { id: "morioka", name: "盛岡市", link: "/local/f282260-awaji" },
    ],
    や行: [{ id: "yamada", name: "山田町", link: "/local/f282260-awaji" }],
    ら行: [{ id: "rikuzentakata", name: "陸前高田市", link: "/local/f282260-awaji" }],
    わ行: [],
  },

  // 宮城県の市町村データ
  miyagi: {
    あ行: [
      { id: "ishinomaki", name: "石巻市", link: "/local/f282260-awaji" },
      { id: "iwanuma", name: "岩沼市", link: "/local/f282260-awaji" },
      { id: "ohira", name: "大衡村", link: "/local/f282260-awaji" },
      { id: "onagawa", name: "女川町", link: "/local/f282260-awaji" },
      { id: "osaki", name: "大崎市", link: "/local/f282260-awaji" },
      { id: "osato", name: "大郷町", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kakuda", name: "角田市", link: "/local/f282260-awaji" },
      { id: "kawasaki", name: "川崎町", link: "/local/f282260-awaji" },
      { id: "kami", name: "加美町", link: "/local/f282260-awaji" },
      { id: "kesennuma", name: "気仙沼市", link: "/local/f282260-awaji" },
      { id: "kurihara", name: "栗原市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "shichikashuku", name: "七ヶ宿町", link: "/local/f282260-awaji" },
      { id: "shikama", name: "色麻町", link: "/local/f282260-awaji" },
      { id: "shiogama", name: "塩竈市", link: "/local/f282260-awaji" },
      { id: "shiroishi", name: "白石市", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "taiwa", name: "大和町", link: "/local/f282260-awaji" },
      { id: "tome", name: "登米市", link: "/local/f282260-awaji" },
    ],
    な行: [{ id: "natori", name: "名取市", link: "/local/f282260-awaji" }],
    は行: [{ id: "higashimatsushima", name: "東松島市", link: "/local/f282260-awaji" }],
    ま行: [
      { id: "marumori", name: "丸森町", link: "/local/f282260-awaji" },
      { id: "matsushima", name: "松島町", link: "/local/f282260-awaji" },
      { id: "minamisanriku", name: "南三陸町", link: "/local/f282260-awaji" },
      { id: "murata", name: "村田町", link: "/local/f282260-awaji" },
    ],
    や行: [],
    ら行: [{ id: "rifu", name: "利府町", link: "/local/f282260-awaji" }],
    わ行: [
      { id: "wakuya", name: "涌谷町", link: "/local/f282260-awaji" },
      { id: "watari", name: "亘理町", link: "/local/f282260-awaji" },
    ],
  },

  // 秋田県の市町村データ
  akita: {
    あ行: [{ id: "akita", name: "秋田市", link: "/local/f282260-awaji" }],
    か行: [
      { id: "kamikoani", name: "上小阿仁村", link: "/local/f282260-awaji" },
      { id: "kazuno", name: "鹿角市", link: "/local/f282260-awaji" },
      { id: "kitaakita", name: "北秋田市", link: "/local/f282260-awaji" },
      { id: "kosaka", name: "小坂町", link: "/local/f282260-awaji" },
    ],
    さ行: [{ id: "semboku", name: "仙北市", link: "/local/f282260-awaji" }],
    た行: [{ id: "daisen", name: "大仙市", link: "/local/f282260-awaji" }],
    な行: [
      { id: "nikaho", name: "にかほ市", link: "/local/f282260-awaji" },
      { id: "noshiro", name: "能代市", link: "/local/f282260-awaji" },
    ],
    は行: [
      { id: "happou", name: "八峰町", link: "/local/f282260-awaji" },
      { id: "fujisato", name: "藤里町", link: "/local/f282260-awaji" },
    ],
    ま行: [
      { id: "misato", name: "美郷町", link: "/local/f282260-awaji" },
      { id: "mitane", name: "三種町", link: "/local/f282260-awaji" },
    ],
    や行: [
      { id: "yurihonjo", name: "由利本荘市", link: "/local/f282260-awaji" },
      { id: "yokote", name: "横手市", link: "/local/f282260-awaji" },
      { id: "yuzawa", name: "湯沢市", link: "/local/f282260-awaji" },
    ],
    ら行: [],
    わ行: [],
  },

  // 山形県の市町村データ
  yamagata: {
    あ行: [
      { id: "asahi", name: "朝日町", link: "/local/f282260-awaji" },
      { id: "iide", name: "飯豊町", link: "/local/f282260-awaji" },
      { id: "obanazawa", name: "尾花沢市", link: "/local/f282260-awaji" },
      { id: "oe", name: "大江町", link: "/local/f282260-awaji" },
      { id: "oguni", name: "小国町", link: "/local/f282260-awaji" },
      { id: "ohkura", name: "大蔵村", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kaneyama", name: "金山町", link: "/local/f282260-awaji" },
      { id: "kawanishi", name: "川西町", link: "/local/f282260-awaji" },
      { id: "kaminoyama", name: "上山市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "sagae", name: "寒河江市", link: "/local/f282260-awaji" },
      { id: "sakata", name: "酒田市", link: "/local/f282260-awaji" },
      { id: "shirataka", name: "白鷹町", link: "/local/f282260-awaji" },
      { id: "shinjo", name: "新庄市", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "takahata", name: "高畠町", link: "/local/f282260-awaji" },
      { id: "tendo", name: "天童市", link: "/local/f282260-awaji" },
      { id: "tsuruoka", name: "鶴岡市", link: "/local/f282260-awaji" },
    ],
    な行: [
      { id: "nakayama", name: "中山町", link: "/local/f282260-awaji" },
      { id: "nagai", name: "長井市", link: "/local/f282260-awaji" },
      { id: "nanyo", name: "南陽市", link: "/local/f282260-awaji" },
    ],
    は行: [
      { id: "higashine", name: "東根市", link: "/local/f282260-awaji" },
      { id: "hirata", name: "平田町", link: "/local/f282260-awaji" },
      { id: "funagata", name: "舟形町", link: "/local/f282260-awaji" },
    ],
    ま行: [
      { id: "mamurogawa", name: "真室川町", link: "/local/f282260-awaji" },
      { id: "mikawa", name: "三川町", link: "/local/f282260-awaji" },
      { id: "mogami", name: "最上町", link: "/local/f282260-awaji" },
      { id: "murayama", name: "村山市", link: "/local/f282260-awaji" },
    ],
    や行: [
      { id: "yamagata", name: "山形市", link: "/local/f282260-awaji" },
      { id: "yamanobe", name: "山辺町", link: "/local/f282260-awaji" },
      { id: "yonezawa", name: "米沢市", link: "/local/f282260-awaji" },
    ],
    ら行: [],
    わ行: [],
  },

  // 福島県の市町村データ
  fukushima: {
    あ行: [
      { id: "aizubange", name: "会津坂下町", link: "/local/f282260-awaji" },
      { id: "aizumisato", name: "会津美里町", link: "/local/f282260-awaji" },
      { id: "aizuwakamatsu", name: "会津若松市", link: "/local/f282260-awaji" },
      { id: "asakawa", name: "浅川町", link: "/local/f282260-awaji" },
      { id: "ishikawa", name: "石川町", link: "/local/f282260-awaji" },
      { id: "izumizaki", name: "泉崎村", link: "/local/f282260-awaji" },
      { id: "inawashiro", name: "猪苗代町", link: "/local/f282260-awaji" },
      { id: "iwaki", name: "いわき市", link: "/local/f282260-awaji" },
      { id: "otama", name: "大玉村", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kagamiishi", name: "鏡石町", link: "/local/f282260-awaji" },
      { id: "katsurao", name: "葛尾村", link: "/local/f282260-awaji" },
      { id: "kawamata", name: "川俣町", link: "/local/f282260-awaji" },
      { id: "kitakata", name: "喜多方市", link: "/local/f282260-awaji" },
      { id: "kitashiobara", name: "北塩原村", link: "/local/f282260-awaji" },
      { id: "koori", name: "桑折町", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "samegawa", name: "鮫川村", link: "/local/f282260-awaji" },
      { id: "shimogo", name: "下郷町", link: "/local/f282260-awaji" },
      { id: "shinchi", name: "新地町", link: "/local/f282260-awaji" },
      { id: "shirakawa", name: "白河市", link: "/local/f282260-awaji" },
      { id: "sukagawa", name: "須賀川市", link: "/local/f282260-awaji" },
      { id: "soma", name: "相馬市", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "tadami", name: "只見町", link: "/local/f282260-awaji" },
      { id: "tamakawa", name: "玉川村", link: "/local/f282260-awaji" },
      { id: "tamura", name: "田村市", link: "/local/f282260-awaji" },
      { id: "tanagura", name: "棚倉町", link: "/local/f282260-awaji" },
      { id: "tomioka", name: "富岡町", link: "/local/f282260-awaji" },
    ],
    な行: [
      { id: "nakajima", name: "中島村", link: "/local/f282260-awaji" },
      { id: "namie", name: "浪江町", link: "/local/f282260-awaji" },
      { id: "naraha", name: "楢葉町", link: "/local/f282260-awaji" },
      { id: "nihonmatsu", name: "二本松市", link: "/local/f282260-awaji" },
      { id: "nishiaizu", name: "西会津町", link: "/local/f282260-awaji" },
      { id: "nishigo", name: "西郷村", link: "/local/f282260-awaji" },
    ],
    は行: [
      { id: "hanawa", name: "塙町", link: "/local/f282260-awaji" },
      { id: "hirata", name: "平田村", link: "/local/f282260-awaji" },
      { id: "hirono", name: "広野町", link: "/local/f282260-awaji" },
      { id: "bandai", name: "磐梯町", link: "/local/f282260-awaji" },
      { id: "futaba", name: "双葉町", link: "/local/f282260-awaji" },
      { id: "furudono", name: "古殿町", link: "/local/f282260-awaji" },
    ],
    ま行: [
      { id: "miharu", name: "三春町", link: "/local/f282260-awaji" },
      { id: "minamiaizu", name: "南会津町", link: "/local/f282260-awaji" },
      { id: "minamisoma", name: "南相馬市", link: "/local/f282260-awaji" },
      { id: "motomiya", name: "本宮市", link: "/local/f282260-awaji" },
    ],
    や行: [
      { id: "yabuki", name: "矢吹町", link: "/local/f282260-awaji" },
      { id: "yamatsuri", name: "矢祭町", link: "/local/f282260-awaji" },
      { id: "yanaizu", name: "柳津町", link: "/local/f282260-awaji" },
    ],
    ら行: [],
    わ行: [],
  },

  // 東京都の市町村データ
  tokyo: {
    あ行: [
      { id: "adachi", name: "足立区", link: "/local/f282260-awaji" },
      { id: "akiruno", name: "あきる野市", link: "/local/f282260-awaji" },
      { id: "aogashima", name: "青ヶ島村", link: "/local/f282260-awaji" },
      { id: "itabashi", name: "板橋区", link: "/local/f282260-awaji" },
      { id: "edogawa", name: "江戸川区", link: "/local/f282260-awaji" },
      { id: "ota", name: "大田区", link: "/local/f282260-awaji" },
      { id: "okutama", name: "奥多摩町", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "katsushika", name: "葛飾区", link: "/local/f282260-awaji" },
      { id: "kita", name: "北区", link: "/local/f282260-awaji" },
      { id: "kiyose", name: "清瀬市", link: "/local/f282260-awaji" },
      { id: "kunitachi", name: "国立市", link: "/local/f282260-awaji" },
      { id: "koto", name: "江東区", link: "/local/f282260-awaji" },
      { id: "kodaira", name: "小平市", link: "/local/f282260-awaji" },
      { id: "koganei", name: "小金井市", link: "/local/f282260-awaji" },
      { id: "kokubunji", name: "国分寺市", link: "/local/f282260-awaji" },
      { id: "komae", name: "狛江市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "setagaya", name: "世田谷区", link: "/local/f282260-awaji" },
      { id: "shibuya", name: "渋谷区", link: "/local/f282260-awaji" },
      { id: "shinagawa", name: "品川区", link: "/local/f282260-awaji" },
      { id: "shinjuku", name: "新宿区", link: "/local/f282260-awaji" },
      { id: "suginami", name: "杉並区", link: "/local/f282260-awaji" },
      { id: "sumida", name: "墨田区", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "tachikawa", name: "立川市", link: "/local/f282260-awaji" },
      { id: "tama", name: "多摩市", link: "/local/f282260-awaji" },
      { id: "chiyoda", name: "千代田区", link: "/local/f282260-awaji" },
      { id: "chofu", name: "調布市", link: "/local/f282260-awaji" },
      { id: "chuo", name: "中央区", link: "/local/f282260-awaji" },
    ],
    な行: [
      { id: "nakano", name: "中野区", link: "/local/f282260-awaji" },
      { id: "nerima", name: "練馬区", link: "/local/f282260-awaji" },
    ],
    は行: [
      { id: "hachioji", name: "八王子市", link: "/local/f282260-awaji" },
      { id: "hamura", name: "羽村市", link: "/local/f282260-awaji" },
      { id: "higashikurume", name: "東久留米市", link: "/local/f282260-awaji" },
      { id: "higashimurayama", name: "東村山市", link: "/local/f282260-awaji" },
      { id: "higashiyamato", name: "東大和市", link: "/local/f282260-awaji" },
      { id: "hino", name: "日野市", link: "/local/f282260-awaji" },
      { id: "fuchu", name: "府中市", link: "/local/f282260-awaji" },
      { id: "fussa", name: "福生市", link: "/local/f282260-awaji" },
      { id: "bunkyo", name: "文京区", link: "/local/f282260-awaji" },
    ],
    ま行: [
      { id: "machida", name: "町田市", link: "/local/f282260-awaji" },
      { id: "mizuho", name: "瑞穂町", link: "/local/f282260-awaji" },
      { id: "mitaka", name: "三鷹市", link: "/local/f282260-awaji" },
      { id: "minato", name: "港区", link: "/local/f282260-awaji" },
      { id: "musashino", name: "武蔵野市", link: "/local/f282260-awaji" },
      { id: "musashimurayama", name: "武蔵村山市", link: "/local/f282260-awaji" },
      { id: "meguro", name: "目黒区", link: "/local/f282260-awaji" },
    ],
    や行: [],
    ら行: [],
    わ行: [],
  },

  // 島根県の市町村データ
  shimane: {
    あ行: [
      { id: "izumo", name: "出雲市", link: "/local/f282260-awaji" },
      { id: "oda", name: "大田市", link: "/local/f282260-awaji" },
      { id: "okuizumo", name: "奥出雲町", link: "/local/f282260-awaji" },
      { id: "onan", name: "邑南町", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kakinoki", name: "柿木村", link: "/local/f282260-awaji" },
      { id: "kawamoto", name: "川本町", link: "/local/f282260-awaji" },
      { id: "gotsu", name: "江津市", link: "/local/f282260-awaji" },
    ],
    さ行: [],
    た行: [{ id: "tsuwano", name: "津和野町", link: "/local/f282260-awaji" }],
    な行: [{ id: "nishinoshima", name: "西ノ島町", link: "/local/f282260-awaji" }],
    は行: [
      { id: "hamada", name: "浜田市", link: "/local/f282260-awaji" },
      { id: "hirata", name: "平田市", link: "/local/f282260-awaji" },
    ],
    ま行: [
      { id: "masuda", name: "益田市", link: "/local/f282260-awaji" },
      { id: "matsue", name: "松江市", link: "/local/f282260-awaji" },
    ],
    や行: [{ id: "yasugi", name: "安来市", link: "/local/f282260-awaji" }],
    ら行: [],
    わ行: [],
  },
  // 茨城県、栃木県、群馬県、埼玉県、千葉県、神奈川県、新潟県、富山県、石川県、福井県、山梨県、岐阜県、静岡県のデータを追加します。
  // prefectureMunicipalities オブジェクトに以下のデータを追加します。

  // 茨城県の市町村データを追加
  ibaraki: {
    あ行: [
      { id: "ishioka", name: "石岡市", link: "/local/f282260-awaji" },
      { id: "itako", name: "潮来市", link: "/local/f282260-awaji" },
      { id: "inashiki", name: "稲敷市", link: "/local/f282260-awaji" },
      { id: "omitama", name: "小美玉市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kasama", name: "笠間市", link: "/local/f282260-awaji" },
      { id: "kasumigaura", name: "かすみがうら市", link: "/local/f282260-awaji" },
      { id: "koga", name: "古河市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "sakuragawa", name: "桜川市", link: "/local/f282260-awaji" },
      { id: "shimotsuma", name: "下妻市", link: "/local/f282260-awaji" },
      { id: "joso", name: "常総市", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "takahagi", name: "高萩市", link: "/local/f282260-awaji" },
      { id: "tsukuba", name: "つくば市", link: "/local/f282260-awaji" },
      { id: "tsuchiura", name: "土浦市", link: "/local/f282260-awaji" },
      { id: "toride", name: "取手市", link: "/local/f282260-awaji" },
    ],
    な行: [
      { id: "namegata", name: "行方市", link: "/local/f282260-awaji" },
      { id: "naka", name: "那珂市", link: "/local/f282260-awaji" },
    ],
    は行: [
      { id: "hitachi", name: "日立市", link: "/local/f282260-awaji" },
      { id: "hitachinaka", name: "ひたちなか市", link: "/local/f282260-awaji" },
      { id: "hitachiomiya", name: "常陸大宮市", link: "/local/f282260-awaji" },
      { id: "hitachiota", name: "常陸太田市", link: "/local/f282260-awaji" },
    ],
    ま行: [
      { id: "mito", name: "水戸市", link: "/local/f282260-awaji" },
      { id: "moriya", name: "守谷市", link: "/local/f282260-awaji" },
    ],
    や行: [
      { id: "yuki", name: "結城市", link: "/local/f282260-awaji" },
      { id: "yachimata", name: "八千代町", link: "/local/f282260-awaji" },
    ],
    ら行: [{ id: "ryugasaki", name: "龍ケ崎市", link: "/local/f282260-awaji" }],
    わ行: [],
  },

  // 栃木県の市町村データを追加
  tochigi: {
    あ行: [{ id: "ashikaga", name: "足利市", link: "/local/f282260-awaji" }],
    か行: [{ id: "kanuma", name: "鹿沼市", link: "/local/f282260-awaji" }],
    さ行: [
      { id: "sano", name: "佐野市", link: "/local/f282260-awaji" },
      { id: "sakura", name: "さくら市", link: "/local/f282260-awaji" },
      { id: "shimotsuke", name: "下野市", link: "/local/f282260-awaji" },
    ],
    た行: [{ id: "tochigi", name: "栃木市", link: "/local/f282260-awaji" }],
    な行: [
      { id: "nasushiobara", name: "那須塩原市", link: "/local/f282260-awaji" },
      { id: "nikko", name: "日光市", link: "/local/f282260-awaji" },
    ],
    は行: [],
    ま行: [{ id: "moka", name: "真岡市", link: "/local/f282260-awaji" }],
    や行: [{ id: "yaita", name: "矢板市", link: "/local/f282260-awaji" }],
    ら行: [],
    わ行: [{ id: "utsunomiya", name: "宇都宮市", link: "/local/f282260-awaji" }],
  },

  // 群馬県の市町村データを追加
  gunma: {
    あ行: [
      { id: "annaka", name: "安中市", link: "/local/f282260-awaji" },
      { id: "isesaki", name: "伊勢崎市", link: "/local/f282260-awaji" },
    ],
    か行: [{ id: "kiryu", name: "桐生市", link: "/local/f282260-awaji" }],
    さ行: [{ id: "shibukawa", name: "渋川市", link: "/local/f282260-awaji" }],
    た行: [
      { id: "takasaki", name: "高崎市", link: "/local/f282260-awaji" },
      { id: "tatebayashi", name: "館林市", link: "/local/f282260-awaji" },
      { id: "tomioka", name: "富岡市", link: "/local/f282260-awaji" },
    ],
    な行: [{ id: "numata", name: "沼田市", link: "/local/f282260-awaji" }],
    は行: [{ id: "fujioka", name: "藤岡市", link: "/local/f282260-awaji" }],
    ま行: [
      { id: "maebashi", name: "前橋市", link: "/local/f282260-awaji" },
      { id: "midori", name: "みどり市", link: "/local/f282260-awaji" },
    ],
    や行: [],
    ら行: [],
    わ行: [{ id: "ota", name: "太田市", link: "/local/f282260-awaji" }],
  },

  // 埼玉県の市町村データを追加
  saitama: {
    あ行: [
      { id: "ageo", name: "上尾市", link: "/local/f282260-awaji" },
      { id: "asaka", name: "朝霞市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kasukabe", name: "春日部市", link: "/local/f282260-awaji" },
      { id: "kawagoe", name: "川越市", link: "/local/f282260-awaji" },
      { id: "kawaguchi", name: "川口市", link: "/local/f282260-awaji" },
      { id: "kazo", name: "加須市", link: "/local/f282260-awaji" },
      { id: "kitamoto", name: "北本市", link: "/local/f282260-awaji" },
      { id: "koshigaya", name: "越谷市", link: "/local/f282260-awaji" },
      { id: "kounosu", name: "鴻巣市", link: "/local/f282260-awaji" },
      { id: "kuki", name: "久喜市", link: "/local/f282260-awaji" },
      { id: "kumagaya", name: "熊谷市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "sakado", name: "坂戸市", link: "/local/f282260-awaji" },
      { id: "saitama", name: "さいたま市", link: "/local/f282260-awaji" },
      { id: "sayama", name: "狭山市", link: "/local/f282260-awaji" },
      { id: "shiki", name: "志木市", link: "/local/f282260-awaji" },
      { id: "soka", name: "草加市", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "toda", name: "戸田市", link: "/local/f282260-awaji" },
      { id: "tokigawa", name: "ときがわ町", link: "/local/f282260-awaji" },
      { id: "tokorozawa", name: "所沢市", link: "/local/f282260-awaji" },
    ],
    な行: [{ id: "niiza", name: "新座市", link: "/local/f282260-awaji" }],
    は行: [
      { id: "hanno", name: "飯能市", link: "/local/f282260-awaji" },
      { id: "hidaka", name: "日高市", link: "/local/f282260-awaji" },
      { id: "higashimatsuyama", name: "東松山市", link: "/local/f282260-awaji" },
      { id: "honjo", name: "本庄市", link: "/local/f282260-awaji" },
      { id: "fukaya", name: "深谷市", link: "/local/f282260-awaji" },
    ],
    ま行: [{ id: "misato", name: "三郷市", link: "/local/f282260-awaji" }],
    や行: [{ id: "yoshikawa", name: "吉川市", link: "/local/f282260-awaji" }],
    ら行: [],
    わ行: [{ id: "warabi", name: "蕨市", link: "/local/f282260-awaji" }],
  },

  // 千葉県の市町村データを追加
  chiba: {
    あ行: [
      { id: "abiko", name: "我孫子市", link: "/local/f282260-awaji" },
      { id: "asahi", name: "旭市", link: "/local/f282260-awaji" },
      { id: "inzai", name: "印西市", link: "/local/f282260-awaji" },
      { id: "urayasu", name: "浦安市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kashiwa", name: "柏市", link: "/local/f282260-awaji" },
      { id: "katsuura", name: "勝浦市", link: "/local/f282260-awaji" },
      { id: "katori", name: "香取市", link: "/local/f282260-awaji" },
      { id: "kamogawa", name: "鴨川市", link: "/local/f282260-awaji" },
      { id: "kamagaya", name: "鎌ケ谷市", link: "/local/f282260-awaji" },
      { id: "kimitsu", name: "君津市", link: "/local/f282260-awaji" },
      { id: "kisarazu", name: "木更津市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "sakura", name: "佐倉市", link: "/local/f282260-awaji" },
      { id: "sanmu", name: "山武市", link: "/local/f282260-awaji" },
      { id: "shiroi", name: "白井市", link: "/local/f282260-awaji" },
      { id: "sodegaura", name: "袖ケ浦市", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "tateyama", name: "館山市", link: "/local/f282260-awaji" },
      { id: "chiba", name: "千葉市", link: "/local/f282260-awaji" },
      { id: "choshi", name: "銚子市", link: "/local/f282260-awaji" },
      { id: "chosei", name: "長生村", link: "/local/f282260-awaji" },
    ],
    な行: [
      { id: "narita", name: "成田市", link: "/local/f282260-awaji" },
      { id: "narashino", name: "習志野市", link: "/local/f282260-awaji" },
    ],
    は行: [
      { id: "matsudo", name: "松戸市", link: "/local/f282260-awaji" },
      { id: "minamiboso", name: "南房総市", link: "/local/f282260-awaji" },
      { id: "mobara", name: "茂原市", link: "/local/f282260-awaji" },
      { id: "funabashi", name: "船橋市", link: "/local/f282260-awaji" },
    ],
    ま行: [],
    や行: [
      { id: "yachiyo", name: "八千代市", link: "/local/f282260-awaji" },
      { id: "yotsukaido", name: "四街道市", link: "/local/f282260-awaji" },
    ],
    ら行: [],
    わ行: [],
  },

  // 神奈川県の市町村データを追加
  kanagawa: {
    あ行: [
      { id: "atsugi", name: "厚木市", link: "/local/f282260-awaji" },
      { id: "ayase", name: "綾瀬市", link: "/local/f282260-awaji" },
      { id: "isehara", name: "伊勢原市", link: "/local/f282260-awaji" },
      { id: "ebina", name: "海老名市", link: "/local/f282260-awaji" },
      { id: "odawara", name: "小田原市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kawasaki", name: "川崎市", link: "/local/f282260-awaji" },
      { id: "kamakura", name: "鎌倉市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "sagamihara", name: "相模原市", link: "/local/f282260-awaji" },
      { id: "zama", name: "座間市", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "chigasaki", name: "茅ヶ崎市", link: "/local/f282260-awaji" },
      { id: "tsurumi", name: "鶴見区", link: "/local/f282260-awaji" },
    ],
    な行: [],
    は行: [
      { id: "hadano", name: "秦野市", link: "/local/f282260-awaji" },
      { id: "hiratsuka", name: "平塚市", link: "/local/f282260-awaji" },
      { id: "fujisawa", name: "藤沢市", link: "/local/f282260-awaji" },
    ],
    ま行: [
      { id: "miura", name: "三浦市", link: "/local/f282260-awaji" },
      { id: "minamiashigara", name: "南足柄市", link: "/local/f282260-awaji" },
    ],
    や行: [
      { id: "yamato", name: "大和市", link: "/local/f282260-awaji" },
      { id: "yokohama", name: "横浜市", link: "/local/f282260-awaji" },
      { id: "yokosuka", name: "横須賀市", link: "/local/f282260-awaji" },
    ],
    ら行: [],
    わ行: [],
  },

  // 新潟県の市町村データを追加
  niigata: {
    あ行: [
      { id: "agano", name: "阿賀野市", link: "/local/f282260-awaji" },
      { id: "itoigawa", name: "糸魚川市", link: "/local/f282260-awaji" },
      { id: "uonuma", name: "魚沼市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kashiwazaki", name: "柏崎市", link: "/local/f282260-awaji" },
      { id: "kamo", name: "加茂市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "sanjo", name: "三条市", link: "/local/f282260-awaji" },
      { id: "shibata", name: "新発田市", link: "/local/f282260-awaji" },
      { id: "joetsu", name: "上越市", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "tainai", name: "胎内市", link: "/local/f282260-awaji" },
      { id: "tsubame", name: "燕市", link: "/local/f282260-awaji" },
      { id: "tokamachi", name: "十日町市", link: "/local/f282260-awaji" },
    ],
    な行: [
      { id: "nagaoka", name: "長岡市", link: "/local/f282260-awaji" },
      { id: "niigata", name: "新潟市", link: "/local/f282260-awaji" },
    ],
    は行: [],
    ま行: [
      { id: "mitsuke", name: "見附市", link: "/local/f282260-awaji" },
      { id: "myoko", name: "妙高市", link: "/local/f282260-awaji" },
      { id: "murakami", name: "村上市", link: "/local/f282260-awaji" },
    ],
    や行: [],
    ら行: [],
    わ行: [],
  },

  // 富山県の市町村データを追加
  toyama: {
    あ行: [],
    か行: [{ id: "kurobe", name: "黒部市", link: "/local/f282260-awaji" }],
    さ行: [],
    た行: [
      { id: "takaoka", name: "高岡市", link: "/local/f282260-awaji" },
      { id: "tonami", name: "砺波市", link: "/local/f282260-awaji" },
      { id: "toyama", name: "富山市", link: "/local/f282260-awaji" },
    ],
    な行: [
      { id: "namerikawa", name: "滑川市", link: "/local/f282260-awaji" },
      { id: "nanto", name: "南砺市", link: "/local/f282260-awaji" },
    ],
    は行: [{ id: "himi", name: "氷見市", link: "/local/f282260-awaji" }],
    ま行: [],
    や行: [],
    ら行: [],
    わ行: [],
  },

  // 石川県の市町村データを追加
  ishikawa: {
    あ行: [],
    か行: [
      { id: "kanazawa", name: "金沢市", link: "/local/f282260-awaji" },
      { id: "kahoku", name: "かほく市", link: "/local/f282260-awaji" },
      { id: "kaga", name: "加賀市", link: "/local/f282260-awaji" },
      { id: "komatsu", name: "小松市", link: "/local/f282260-awaji" },
    ],
    さ行: [{ id: "suzu", name: "珠洲市", link: "/local/f282260-awaji" }],
    た行: [],
    な行: [
      { id: "nanao", name: "七尾市", link: "/local/f282260-awaji" },
      { id: "nonoichi", name: "野々市市", link: "/local/f282260-awaji" },
      { id: "nomi", name: "能美市", link: "/local/f282260-awaji" },
    ],
    は行: [
      { id: "hakui", name: "羽咋市", link: "/local/f282260-awaji" },
      { id: "hakusan", name: "白山市", link: "/local/f282260-awaji" },
    ],
    ま行: [],
    や行: [],
    ら行: [],
    わ行: [{ id: "wajima", name: "輪島市", link: "/local/f282260-awaji" }],
  },

  // 福井県の市町村データを追加
  fukui: {
    あ行: [
      { id: "awara", name: "あわら市", link: "/local/f282260-awaji" },
      { id: "echizen", name: "越前市", link: "/local/f282260-awaji" },
      { id: "obama", name: "小浜市", link: "/local/f282260-awaji" },
    ],
    か行: [{ id: "katsuyama", name: "勝山市", link: "/local/f282260-awaji" }],
    さ行: [{ id: "sabae", name: "鯖江市", link: "/local/f282260-awaji" }],
    た行: [{ id: "tsuruga", name: "敦賀市", link: "/local/f282260-awaji" }],
    な行: [],
    は行: [{ id: "fukui", name: "福井市", link: "/local/f282260-awaji" }],
    ま行: [],
    や行: [],
    ら行: [],
    わ行: [],
  },

  // 山梨県の市町村データを追加
  yamanashi: {
    あ行: [],
    か行: [
      { id: "kai", name: "甲斐市", link: "/local/f282260-awaji" },
      { id: "kofu", name: "甲府市", link: "/local/f282260-awaji" },
      { id: "koshu", name: "甲州市", link: "/local/f282260-awaji" },
    ],
    さ行: [],
    た行: [{ id: "tsuru", name: "都留市", link: "/local/f282260-awaji" }],
    な行: [
      { id: "nirasaki", name: "韮崎市", link: "/local/f282260-awaji" },
      { id: "nanbu", name: "南部町", link: "/local/f282260-awaji" },
    ],
    は行: [
      { id: "hokuto", name: "北杜市", link: "/local/f282260-awaji" },
      { id: "fuefuki", name: "笛吹市", link: "/local/f282260-awaji" },
    ],
    ま行: [],
    や行: [{ id: "yamanashi", name: "山梨市", link: "/local/f282260-awaji" }],
    ら行: [],
    わ行: [{ id: "uenohara", name: "上野原市", link: "/local/f282260-awaji" }],
  },

  // 岐阜県の市町村データを追加
  gifu: {
    あ行: [
      { id: "ena", name: "恵那市", link: "/local/f282260-awaji" },
      { id: "ogaki", name: "大垣市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kakamigahara", name: "各務原市", link: "/local/f282260-awaji" },
      { id: "kani", name: "可児市", link: "/local/f282260-awaji" },
      { id: "kaizu", name: "海津市", link: "/local/f282260-awaji" },
      { id: "gero", name: "下呂市", link: "/local/f282260-awaji" },
      { id: "gifu", name: "岐阜市", link: "/local/f282260-awaji" },
    ],
    さ行: [],
    た行: [
      { id: "tajimi", name: "多治見市", link: "/local/f282260-awaji" },
      { id: "takayama", name: "高山市", link: "/local/f282260-awaji" },
      { id: "toki", name: "土岐市", link: "/local/f282260-awaji" },
    ],
    な行: [],
    は行: [{ id: "hida", name: "飛騨市", link: "/local/f282260-awaji" }],
    ま行: [
      { id: "minokamo", name: "美濃加茂市", link: "/local/f282260-awaji" },
      { id: "mino", name: "美濃市", link: "/local/f282260-awaji" },
      { id: "mizunami", name: "瑞浪市", link: "/local/f282260-awaji" },
      { id: "motosu", name: "本巣市", link: "/local/f282260-awaji" },
    ],
    や行: [{ id: "yamagata", name: "山県市", link: "/local/f282260-awaji" }],
    ら行: [],
    わ行: [],
  },

  // 静岡県の市町村データを追加
  shizuoka: {
    あ行: [
      { id: "atami", name: "熱海市", link: "/local/f282260-awaji" },
      { id: "ito", name: "伊東市", link: "/local/f282260-awaji" },
      { id: "izunokuni", name: "伊豆の国市", link: "/local/f282260-awaji" },
      { id: "iwata", name: "磐田市", link: "/local/f282260-awaji" },
      { id: "omaezaki", name: "御前崎市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kakegawa", name: "掛川市", link: "/local/f282260-awaji" },
      { id: "kosai", name: "湖西市", link: "/local/f282260-awaji" },
      { id: "gotemba", name: "御殿場市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "shimada", name: "島田市", link: "/local/f282260-awaji" },
      { id: "susono", name: "裾野市", link: "/local/f282260-awaji" },
    ],
    た行: [],
    な行: [{ id: "numazu", name: "沼津市", link: "/local/f282260-awaji" }],
    は行: [
      { id: "hamamatsu", name: "浜松市", link: "/local/f282260-awaji" },
      { id: "fukuroi", name: "袋井市", link: "/local/f282260-awaji" },
      { id: "fuji", name: "富士市", link: "/local/f282260-awaji" },
      { id: "fujinomiya", name: "富士宮市", link: "/local/f282260-awaji" },
    ],
    ま行: [
      { id: "makinohara", name: "牧之原市", link: "/local/f282260-awaji" },
      { id: "mishima", name: "三島市", link: "/local/f282260-awaji" },
    ],
    や行: [],
    ら行: [],
    わ行: [],
  },

  // 愛知県のデータを完成させ、その他の都道府県データを追加します

  // 愛知県の市町村データを完成させる（途中で切れていたため）
  aichi: {
    あ行: [
      { id: "aisai", name: "愛西市", link: "/local/f282260-awaji" },
      { id: "ama", name: "あま市", link: "/local/f282260-awaji" },
      { id: "anjo", name: "安城市", link: "/local/f282260-awaji" },
      { id: "ichinomiya", name: "一宮市", link: "/local/f282260-awaji" },
      { id: "inazawa", name: "稲沢市", link: "/local/f282260-awaji" },
      { id: "inuyama", name: "犬山市", link: "/local/f282260-awaji" },
      { id: "iwakura", name: "岩倉市", link: "/local/f282260-awaji" },
      { id: "obu", name: "大府市", link: "/local/f282260-awaji" },
      { id: "okazaki", name: "岡崎市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kasugai", name: "春日井市", link: "/local/f282260-awaji" },
      { id: "kariya", name: "刈谷市", link: "/local/f282260-awaji" },
      { id: "kiyosu", name: "清須市", link: "/local/f282260-awaji" },
      { id: "komaki", name: "小牧市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "shinshiro", name: "新城市", link: "/local/f282260-awaji" },
      { id: "seto", name: "瀬戸市", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "tahara", name: "田原市", link: "/local/f282260-awaji" },
      { id: "chiryu", name: "知立市", link: "/local/f282260-awaji" },
      { id: "tsushima", name: "津島市", link: "/local/f282260-awaji" },
      { id: "tokoname", name: "常滑市", link: "/local/f282260-awaji" },
      { id: "toyoake", name: "豊明市", link: "/local/f282260-awaji" },
      { id: "toyohashi", name: "豊橋市", link: "/local/f282260-awaji" },
      { id: "toyokawa", name: "豊川市", link: "/local/f282260-awaji" },
      { id: "toyota", name: "豊田市", link: "/local/f282260-awaji" },
    ],
    な行: [
      { id: "nagakute", name: "長久手市", link: "/local/f282260-awaji" },
      { id: "nagoya", name: "名古屋市", link: "/local/f282260-awaji" },
      { id: "nishio", name: "西尾市", link: "/local/f282260-awaji" },
    ],
    は行: [
      { id: "handa", name: "半田市", link: "/local/f282260-awaji" },
      { id: "hekinan", name: "碧南市", link: "/local/f282260-awaji" },
    ],
    ま行: [{ id: "miyoshi", name: "みよし市", link: "/local/f282260-awaji" }],
    や行: [{ id: "yatomi", name: "弥富市", link: "/local/f282260-awaji" }],
    ら行: [],
    わ行: [],
  },

  // 三重県の市町村データを追加
  mie: {
    あ行: [
      { id: "iga", name: "伊賀市", link: "/local/f282260-awaji" },
      { id: "ise", name: "伊勢市", link: "/local/f282260-awaji" },
      { id: "inabe", name: "いなべ市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kameyama", name: "亀山市", link: "/local/f282260-awaji" },
      { id: "kumano", name: "熊野市", link: "/local/f282260-awaji" },
    ],
    さ行: [{ id: "suzuka", name: "鈴鹿市", link: "/local/f282260-awaji" }],
    た行: [
      { id: "tsu", name: "津市", link: "/local/f282260-awaji" },
      { id: "toba", name: "鳥羽市", link: "/local/f282260-awaji" },
    ],
    な行: [{ id: "nabari", name: "名張市", link: "/local/f282260-awaji" }],
    は行: [{ id: "matsusaka", name: "松阪市", link: "/local/f282260-awaji" }],
    ま行: [],
    や行: [{ id: "yokkaichi", name: "四日市市", link: "/local/f282260-awaji" }],
    ら行: [],
    わ行: [],
  },

  // 滋賀県の市町村データを追加
  shiga: {
    あ行: [
      { id: "otsu", name: "大津市", link: "/local/f282260-awaji" },
      { id: "omihachiman", name: "近江八幡市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kusatsu", name: "草津市", link: "/local/f282260-awaji" },
      { id: "konan", name: "湖南市", link: "/local/f282260-awaji" },
      { id: "koka", name: "甲賀市", link: "/local/f282260-awaji" },
    ],
    さ行: [],
    た行: [{ id: "takashima", name: "高島市", link: "/local/f282260-awaji" }],
    な行: [{ id: "nagahama", name: "長浜市", link: "/local/f282260-awaji" }],
    は行: [
      { id: "higashiomi", name: "東近江市", link: "/local/f282260-awaji" },
      { id: "hikone", name: "彦根市", link: "/local/f282260-awaji" },
    ],
    ま行: [{ id: "moriyama", name: "守山市", link: "/local/f282260-awaji" }],
    や行: [],
    ら行: [{ id: "ritto", name: "栗東市", link: "/local/f282260-awaji" }],
    わ行: [],
  },

  // 京都府の市町村データを追加
  kyoto: {
    あ行: [
      { id: "ayabe", name: "綾部市", link: "/local/f282260-awaji" },
      { id: "uji", name: "宇治市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kameoka", name: "亀岡市", link: "/local/f282260-awaji" },
      { id: "kyotanabe", name: "京田辺市", link: "/local/f282260-awaji" },
      { id: "kyotango", name: "京丹後市", link: "/local/f282260-awaji" },
      { id: "kyoto", name: "京都市", link: "/local/f282260-awaji" },
    ],
    さ行: [],
    た行: [],
    な行: [
      { id: "nagaokakyo", name: "長岡京市", link: "/local/f282260-awaji" },
      { id: "nantan", name: "南丹市", link: "/local/f282260-awaji" },
    ],
    は行: [{ id: "fukuchiyama", name: "福知山市", link: "/local/f282260-awaji" }],
    ま行: [
      { id: "maizuru", name: "舞鶴市", link: "/local/f282260-awaji" },
      { id: "miyazu", name: "宮津市", link: "/local/f282260-awaji" },
      { id: "muko", name: "向日市", link: "/local/f282260-awaji" },
    ],
    や行: [{ id: "yawata", name: "八幡市", link: "/local/f282260-awaji" }],
    ら行: [],
    わ行: [],
  },

  // 大阪府の市町村データを追加
  osaka: {
    あ行: [
      { id: "ibaraki", name: "茨木市", link: "/local/f282260-awaji" },
      { id: "izumi", name: "和泉市", link: "/local/f282260-awaji" },
      { id: "izumiotsu", name: "泉大津市", link: "/local/f282260-awaji" },
      { id: "izumisano", name: "泉佐野市", link: "/local/f282260-awaji" },
      { id: "osaka", name: "大阪市", link: "/local/f282260-awaji" },
      { id: "osakasayama", name: "大阪狭山市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kaizuka", name: "貝塚市", link: "/local/f282260-awaji" },
      { id: "kashiwara", name: "柏原市", link: "/local/f282260-awaji" },
      { id: "kadoma", name: "門真市", link: "/local/f282260-awaji" },
      { id: "kishiwada", name: "岸和田市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "sakai", name: "堺市", link: "/local/f282260-awaji" },
      { id: "shijonawate", name: "四條畷市", link: "/local/f282260-awaji" },
      { id: "suita", name: "吹田市", link: "/local/f282260-awaji" },
      { id: "settsu", name: "摂津市", link: "/local/f282260-awaji" },
      { id: "sennan", name: "泉南市", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "takaishi", name: "高石市", link: "/local/f282260-awaji" },
      { id: "takatsuki", name: "高槻市", link: "/local/f282260-awaji" },
      { id: "tondabayashi", name: "富田林市", link: "/local/f282260-awaji" },
      { id: "toyonaka", name: "豊中市", link: "/local/f282260-awaji" },
    ],
    な行: [{ id: "neyagawa", name: "寝屋川市", link: "/local/f282260-awaji" }],
    は行: [
      { id: "hannan", name: "阪南市", link: "/local/f282260-awaji" },
      { id: "higashiosaka", name: "東大阪市", link: "/local/f282260-awaji" },
      { id: "hirakata", name: "枚方市", link: "/local/f282260-awaji" },
      { id: "fujiidera", name: "藤井寺市", link: "/local/f282260-awaji" },
    ],
    ま行: [
      { id: "matsubara", name: "松原市", link: "/local/f282260-awaji" },
      { id: "minoh", name: "箕面市", link: "/local/f282260-awaji" },
    ],
    や行: [{ id: "yao", name: "八尾市", link: "/local/f282260-awaji" }],
    ら行: [],
    わ行: [],
  },

  // 兵庫県の市町村データを修正
  hyogo: {
    あ行: [
      { id: "amagasaki", name: "尼崎市", link: "/local/f282260-awaji" },
      { id: "akashi", name: "明石市", link: "/local/f282260-awaji" },
      { id: "asago", name: "朝来市", link: "/local/f282260-awaji" },
      { id: "itami", name: "伊丹市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kakogawa", name: "加古川市", link: "/local/f282260-awaji" },
      { id: "kasai", name: "加西市", link: "/local/f282260-awaji" },
      { id: "kato", name: "加東市", link: "/local/f282260-awaji" },
      { id: "kawanishi", name: "川西市", link: "/local/f282260-awaji" },
      { id: "kobe", name: "神戸市", link: "/local/f282260-awaji" },
    ],
    さ行: [{ id: "sasayama", name: "篠山市", link: "/local/f282260-awaji" }],
    た行: [
      { id: "takarazuka", name: "宝塚市", link: "/local/f282260-awaji" },
      { id: "tamba", name: "丹波市", link: "/local/f282260-awaji" },
      { id: "toyooka", name: "豊岡市", link: "/local/f282260-awaji" },
    ],
    な行: [{ id: "nishinomiya", name: "西宮市", link: "/local/f282260-awaji" }],
    は行: [{ id: "himeji", name: "姫路市", link: "/local/f282260-awaji" }],
    ま行: [{ id: "miki", name: "三木市", link: "/local/f282260-awaji" }],
    や行: [{ id: "yabu", name: "養父市", link: "/local/f282260-awaji" }],
    ら行: [],
    わ行: [],
  },

  // 奈良県の市町村データを追加
  nara: {
    あ行: [{ id: "ikoma", name: "生駒市", link: "/local/f282260-awaji" }],
    か行: [
      { id: "kashiba", name: "香芝市", link: "/local/f282260-awaji" },
      { id: "kashihara", name: "橿原市", link: "/local/f282260-awaji" },
      { id: "katsuragi", name: "葛城市", link: "/local/f282260-awaji" },
      { id: "gojo", name: "五條市", link: "/local/f282260-awaji" },
      { id: "gose", name: "御所市", link: "/local/f282260-awaji" },
    ],
    さ行: [{ id: "sakurai", name: "桜井市", link: "/local/f282260-awaji" }],
    た行: [{ id: "tenri", name: "天理市", link: "/local/f282260-awaji" }],
    な行: [{ id: "nara", name: "奈良市", link: "/local/f282260-awaji" }],
    は行: [],
    ま行: [],
    や行: [
      { id: "yamatokoriyama", name: "大和郡山市", link: "/local/f282260-awaji" },
      { id: "yamatotakada", name: "大和高田市", link: "/local/f282260-awaji" },
    ],
    ら行: [],
    わ行: [],
  },

  // 和歌山県の市町村データを追加
  wakayama: {
    あ行: [
      { id: "arida", name: "有田市", link: "/local/f282260-awaji" },
      { id: "iwade", name: "岩出市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kainan", name: "海南市", link: "/local/f282260-awaji" },
      { id: "kinokawa", name: "紀の川市", link: "/local/f282260-awaji" },
      { id: "kushimoto", name: "串本町", link: "/local/f282260-awaji" },
      { id: "koya", name: "高野町", link: "/local/f282260-awaji" },
      { id: "gobo", name: "御坊市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "shirahama", name: "白浜町", link: "/local/f282260-awaji" },
      { id: "susami", name: "すさみ町", link: "/local/f282260-awaji" },
    ],
    た行: [{ id: "tanabe", name: "田辺市", link: "/local/f282260-awaji" }],
    な行: [{ id: "nachikatsuura", name: "那智勝浦町", link: "/local/f282260-awaji" }],
    は行: [{ id: "hashimoto", name: "橋本市", link: "/local/f282260-awaji" }],
    ま行: [],
    や行: [],
    ら行: [],
    わ行: [{ id: "wakayama", name: "和歌山市", link: "/local/f282260-awaji" }],
  },

  // 鳥取県の市町村データを追加
  tottori: {
    あ行: [],
    か行: [{ id: "kurayoshi", name: "倉吉市", link: "/local/f282260-awaji" }],
    さ行: [{ id: "sakaiminato", name: "境港市", link: "/local/f282260-awaji" }],
    た行: [{ id: "tottori", name: "鳥取市", link: "/local/f282260-awaji" }],
    な行: [],
    は行: [],
    ま行: [],
    や行: [{ id: "yonago", name: "米子市", link: "/local/f282260-awaji" }],
    ら行: [],
    わ行: [],
  },

  // 岡山県の市町村データを追加
  okayama: {
    あ行: [
      { id: "akaiwa", name: "赤磐市", link: "/local/f282260-awaji" },
      { id: "asakuchi", name: "浅口市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kasaoka", name: "笠岡市", link: "/local/f282260-awaji" },
      { id: "kurashiki", name: "倉敷市", link: "/local/f282260-awaji" },
    ],
    さ行: [{ id: "soja", name: "総社市", link: "/local/f282260-awaji" }],
    た行: [
      { id: "takahashi", name: "高梁市", link: "/local/f282260-awaji" },
      { id: "tamano", name: "玉野市", link: "/local/f282260-awaji" },
      { id: "tsuyama", name: "津山市", link: "/local/f282260-awaji" },
    ],
    な行: [{ id: "niimi", name: "新見市", link: "/local/f282260-awaji" }],
    は行: [{ id: "bizen", name: "備前市", link: "/local/f282260-awaji" }],
    ま行: [
      { id: "maniwa", name: "真庭市", link: "/local/f282260-awaji" },
      { id: "mimasaka", name: "美作市", link: "/local/f282260-awaji" },
    ],
    や行: [],
    ら行: [],
    わ行: [{ id: "okayama", name: "岡山市", link: "/local/f282260-awaji" }],
  },

  // 広島県の市町村データを追加
  hiroshima: {
    あ行: [],
    か行: [],
    さ行: [],
    た行: [{ id: "takehara", name: "竹原市", link: "/local/f282260-awaji" }],
    な行: [],
    は行: [
      { id: "hatsukaichi", name: "廿日市市", link: "/local/f282260-awaji" },
      { id: "higashihiroshima", name: "東広島市", link: "/local/f282260-awaji" },
      { id: "hiroshima", name: "広島市", link: "/local/f282260-awaji" },
      { id: "fukuyama", name: "福山市", link: "/local/f282260-awaji" },
    ],
    ま行: [{ id: "mihara", name: "三原市", link: "/local/f282260-awaji" }],
    や行: [],
    ら行: [],
    わ行: [],
  },

  // 山口県の市町村データを追加
  yamaguchi: {
    あ行: [],
    か行: [],
    さ行: [
      { id: "shimonoseki", name: "下関市", link: "/local/f282260-awaji" },
      { id: "shunan", name: "周南市", link: "/local/f282260-awaji" },
    ],
    た行: [],
    な行: [],
    は行: [
      { id: "hagi", name: "萩市", link: "/local/f282260-awaji" },
      { id: "hikari", name: "光市", link: "/local/f282260-awaji" },
      { id: "hofu", name: "防府市", link: "/local/f282260-awaji" },
    ],
    ま行: [],
    や行: [
      { id: "yamaguchi", name: "山口市", link: "/local/f282260-awaji" },
      { id: "yanai", name: "柳井市", link: "/local/f282260-awaji" },
    ],
    ら行: [],
    わ行: [],
  },

  // 徳島県の市町村データを追加
  tokushima: {
    あ行: [
      { id: "anan", name: "阿南市", link: "/local/f282260-awaji" },
      { id: "awa", name: "阿波市", link: "/local/f282260-awaji" },
    ],
    か行: [{ id: "komatsushima", name: "小松島市", link: "/local/f282260-awaji" }],
    さ行: [],
    た行: [{ id: "tokushima", name: "徳島市", link: "/local/f282260-awaji" }],
    な行: [{ id: "naruto", name: "鳴門市", link: "/local/f282260-awaji" }],
    は行: [],
    ま行: [{ id: "miyoshi", name: "三好市", link: "/local/f282260-awaji" }],
    や行: [],
    ら行: [],
    わ行: [],
  },

  // 香川県の市町村データを追加
  kagawa: {
    あ行: [],
    か行: [
      { id: "kanonji", name: "観音寺市", link: "/local/f282260-awaji" },
      { id: "kagawa", name: "香川町", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "sakaide", name: "坂出市", link: "/local/f282260-awaji" },
      { id: "sanuki", name: "さぬき市", link: "/local/f282260-awaji" },
    ],
    た行: [{ id: "takamatsu", name: "高松市", link: "/local/f282260-awaji" }],
    な行: [],
    は行: [{ id: "higashikagawa", name: "東かがわ市", link: "/local/f282260-awaji" }],
    ま行: [
      { id: "marugame", name: "丸亀市", link: "/local/f282260-awaji" },
      { id: "mitoyo", name: "三豊市", link: "/local/f282260-awaji" },
    ],
    や行: [],
    ら行: [],
    わ行: [],
  },

  // 愛媛県の市町村データを追加
  ehime: {
    あ行: [
      { id: "imabari", name: "今治市", link: "/local/f282260-awaji" },
      { id: "iyo", name: "伊予市", link: "/local/f282260-awaji" },
    ],
    か行: [],
    さ行: [
      { id: "saijo", name: "西条市", link: "/local/f282260-awaji" },
      { id: "seiyo", name: "西予市", link: "/local/f282260-awaji" },
    ],
    た行: [{ id: "toon", name: "東温市", link: "/local/f282260-awaji" }],
    な行: [{ id: "niihama", name: "新居浜市", link: "/local/f282260-awaji" }],
    は行: [],
    ま行: [{ id: "matsuyama", name: "松山市", link: "/local/f282260-awaji" }],
    や行: [{ id: "yawatahama", name: "八幡浜市", link: "/local/f282260-awaji" }],
    ら行: [],
    わ行: [{ id: "uwajima", name: "宇和島市", link: "/local/f282260-awaji" }],
  },

  // 高知県の市町村データを追加
  kochi: {
    あ行: [{ id: "aki", name: "安芸市", link: "/local/f282260-awaji" }],
    か行: [
      { id: "kami", name: "香美市", link: "/local/f282260-awaji" },
      { id: "konan", name: "香南市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "sukumo", name: "宿毛市", link: "/local/f282260-awaji" },
      { id: "susaki", name: "須崎市", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "tosa", name: "土佐市", link: "/local/f282260-awaji" },
      { id: "tosashimizu", name: "土佐清水市", link: "/local/f282260-awaji" },
    ],
    な行: [{ id: "nankoku", name: "南国市", link: "/local/f282260-awaji" }],
    は行: [],
    ま行: [{ id: "muroto", name: "室戸市", link: "/local/f282260-awaji" }],
    や行: [],
    ら行: [],
    わ行: [{ id: "kochi", name: "高知市", link: "/local/f282260-awaji" }],
  },

  // 福岡県の市町村データを追加
  fukuoka: {
    あ行: [
      { id: "iizuka", name: "飯塚市", link: "/local/f282260-awaji" },
      { id: "ukiha", name: "うきは市", link: "/local/f282260-awaji" },
      { id: "ogori", name: "小郡市", link: "/local/f282260-awaji" },
      { id: "okawa", name: "大川市", link: "/local/f282260-awaji" },
      { id: "omuta", name: "大牟田市", link: "/local/f282260-awaji" },
      { id: "onga", name: "遠賀町", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kasuga", name: "春日市", link: "/local/f282260-awaji" },
      { id: "kama", name: "嘉麻市", link: "/local/f282260-awaji" },
      { id: "kurume", name: "久留米市", link: "/local/f282260-awaji" },
      { id: "keisen", name: "桂川町", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "sasaguri", name: "篠栗町", link: "/local/f282260-awaji" },
      { id: "shingu", name: "新宮町", link: "/local/f282260-awaji" },
      { id: "shime", name: "志免町", link: "/local/f282260-awaji" },
      { id: "sue", name: "須恵町", link: "/local/f282260-awaji" },
    ],
    た行: [
      { id: "tagawa", name: "田川市", link: "/local/f282260-awaji" },
      { id: "dazaifu", name: "太宰府市", link: "/local/f282260-awaji" },
      { id: "chikugo", name: "筑後市", link: "/local/f282260-awaji" },
      { id: "chikushino", name: "筑紫野市", link: "/local/f282260-awaji" },
    ],
    な行: [
      { id: "nakama", name: "中間市", link: "/local/f282260-awaji" },
      { id: "nogata", name: "直方市", link: "/local/f282260-awaji" },
    ],
    は行: [
      { id: "hisayama", name: "久山町", link: "/local/f282260-awaji" },
      { id: "hirokawa", name: "広川町", link: "/local/f282260-awaji" },
      { id: "fukuoka", name: "福岡市", link: "/local/f282260-awaji" },
      { id: "fukutsu", name: "福津市", link: "/local/f282260-awaji" },
      { id: "buzen", name: "豊前市", link: "/local/f282260-awaji" },
    ],
    ま行: [
      { id: "miyama", name: "みやま市", link: "/local/f282260-awaji" },
      { id: "miyawaka", name: "宮若市", link: "/local/f282260-awaji" },
      { id: "munakata", name: "宗像市", link: "/local/f282260-awaji" },
    ],
    や行: [
      { id: "yamada", name: "山田市", link: "/local/f282260-awaji" },
      { id: "yukuhashi", name: "行橋市", link: "/local/f282260-awaji" },
    ],
    ら行: [],
    わ行: [],
  },

  // 佐賀県の市町村データを追加
  saga: {
    あ行: [
      { id: "imari", name: "伊万里市", link: "/local/f282260-awaji" },
      { id: "ureshino", name: "嬉野市", link: "/local/f282260-awaji" },
      { id: "ogi", name: "小城市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "karatsu", name: "唐津市", link: "/local/f282260-awaji" },
      { id: "kanzaki", name: "神埼市", link: "/local/f282260-awaji" },
    ],
    さ行: [{ id: "saga", name: "佐賀市", link: "/local/f282260-awaji" }],
    た行: [
      { id: "takeo", name: "武雄市", link: "/local/f282260-awaji" },
      { id: "taku", name: "多久市", link: "/local/f282260-awaji" },
      { id: "tosu", name: "鳥栖市", link: "/local/f282260-awaji" },
    ],
    な行: [],
    は行: [],
    ま行: [],
    や行: [],
    ら行: [],
    わ行: [],
  },

  // 長崎県の市町村データを追加
  nagasaki: {
    あ行: [
      { id: "isahaya", name: "諫早市", link: "/local/f282260-awaji" },
      { id: "iki", name: "壱岐市", link: "/local/f282260-awaji" },
      { id: "omura", name: "大村市", link: "/local/f282260-awaji" },
    ],
    か行: [],
    さ行: [
      { id: "saikai", name: "西海市", link: "/local/f282260-awaji" },
      { id: "sasebo", name: "佐世保市", link: "/local/f282260-awaji" },
      { id: "shimabara", name: "島原市", link: "/local/f282260-awaji" },
    ],
    た行: [{ id: "tsushima", name: "対馬市", link: "/local/f282260-awaji" }],
    な行: [{ id: "nagasaki", name: "長崎市", link: "/local/f282260-awaji" }],
    は行: [{ id: "hirado", name: "平戸市", link: "/local/f282260-awaji" }],
    ま行: [{ id: "matsuura", name: "松浦市", link: "/local/f282260-awaji" }],
    や行: [],
    ら行: [],
    わ行: [],
  },

  // 熊本県の市町村データを追加
  kumamoto: {
    あ行: [
      { id: "amakusa", name: "天草市", link: "/local/f282260-awaji" },
      { id: "arao", name: "荒尾市", link: "/local/f282260-awaji" },
      { id: "aso", name: "阿蘇市", link: "/local/f282260-awaji" },
      { id: "uki", name: "宇城市", link: "/local/f282260-awaji" },
      { id: "uto", name: "宇土市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kamiamakusa", name: "上天草市", link: "/local/f282260-awaji" },
      { id: "kikuchi", name: "菊池市", link: "/local/f282260-awaji" },
      { id: "koshi", name: "合志市", link: "/local/f282260-awaji" },
    ],
    さ行: [],
    た行: [{ id: "tamana", name: "玉名市", link: "/local/f282260-awaji" }],
    な行: [],
    は行: [{ id: "hitoyoshi", name: "人吉市", link: "/local/f282260-awaji" }],
    ま行: [{ id: "minamata", name: "水俣市", link: "/local/f282260-awaji" }],
    や行: [
      { id: "yamaga", name: "山鹿市", link: "/local/f282260-awaji" },
      { id: "yatsushiro", name: "八代市", link: "/local/f282260-awaji" },
    ],
    ら行: [],
    わ行: [],
  },

  // 大分県の市町村データを追加
  oita: {
    あ行: [],
    か行: [],
    さ行: [{ id: "saiki", name: "佐伯市", link: "/local/f282260-awaji" }],
    た行: [
      { id: "taketa", name: "竹田市", link: "/local/f282260-awaji" },
      { id: "tsukumi", name: "津久見市", link: "/local/f282260-awaji" },
    ],
    な行: [{ id: "nakatsu", name: "中津市", link: "/local/f282260-awaji" }],
    は行: [
      { id: "hita", name: "日田市", link: "/local/f282260-awaji" },
      { id: "bungotakada", name: "豊後高田市", link: "/local/f282260-awaji" },
      { id: "bungoono", name: "豊後大野市", link: "/local/f282260-awaji" },
    ],
    ま行: [],
    や行: [],
    ら行: [],
    わ行: [],
  },

  // 宮崎県の市町村データを追加
  miyazaki: {
    あ行: [],
    か行: [],
    さ行: [{ id: "saito", name: "西都市", link: "/local/f282260-awaji" }],
    た行: [],
    な行: [
      { id: "nichinan", name: "日南市", link: "/local/f282260-awaji" },
      { id: "nobeoka", name: "延岡市", link: "/local/f282260-awaji" },
    ],
    は行: [{ id: "hyuga", name: "日向市", link: "/local/f282260-awaji" }],
    ま行: [
      { id: "miyakonojo", name: "都城市", link: "/local/f282260-awaji" },
      { id: "miyazaki", name: "宮崎市", link: "/local/f282260-awaji" },
    ],
    や行: [],
    ら行: [],
    わ行: [],
  },

  // 鹿児島県の市町村データを追加
  kagoshima: {
    あ行: [
      { id: "akune", name: "阿久根市", link: "/local/f282260-awaji" },
      { id: "amami", name: "奄美市", link: "/local/f282260-awaji" },
      { id: "ichikikushikino", name: "いちき串木野市", link: "/local/f282260-awaji" },
      { id: "izumi", name: "出水市", link: "/local/f282260-awaji" },
    ],
    か行: [
      { id: "kagoshima", name: "鹿児島市", link: "/local/f282260-awaji" },
      { id: "kanoya", name: "鹿屋市", link: "/local/f282260-awaji" },
      { id: "kirishima", name: "霧島市", link: "/local/f282260-awaji" },
    ],
    さ行: [
      { id: "satsumasendai", name: "薩摩川内市", link: "/local/f282260-awaji" },
      { id: "shibushi", name: "志布志市", link: "/local/f282260-awaji" },
    ],
    た行: [{ id: "tarumizu", name: "垂水市", link: "/local/f282260-awaji" }],
    な行: [{ id: "nishinoomote", name: "西之表市", link: "/local/f282260-awaji" }],
    は行: [{ id: "hioki", name: "日置市", link: "/local/f282260-awaji" }],
    ま行: [
      { id: "makurazaki", name: "枕崎市", link: "/local/f282260-awaji" },
      { id: "minamikyushu", name: "南九州市", link: "/local/f282260-awaji" },
      { id: "minamisatsuma", name: "南さつま市", link: "/local/f282260-awaji" },
    ],
    や行: [],
    ら行: [],
    わ行: [],
  },

  // 沖縄県の市町村データを追加
  okinawa: {
    あ行: [
      { id: "itoman", name: "糸満市", link: "/local/f282260-awaji" },
      { id: "urasoe", name: "浦添市", link: "/local/f282260-awaji" },
      { id: "uruma", name: "うるま市", link: "/local/f282260-awaji" },
      { id: "okinawa", name: "沖縄市", link: "/local/f282260-awaji" },
    ],
    か行: [{ id: "ginowan", name: "宜野湾市", link: "/local/f282260-awaji" }],
    さ行: [],
    た行: [{ id: "tomigusuku", name: "豊見城市", link: "/local/f282260-awaji" }],
    な行: [
      { id: "nago", name: "名護市", link: "/local/f282260-awaji" },
      { id: "nanjo", name: "南城市", link: "/local/f282260-awaji" },
    ],
    は行: [],
    ま行: [{ id: "miyakojima", name: "宮古島市", link: "/local/f282260-awaji" }],
    や行: [],
    ら行: [],
    わ行: [],
  },
}

// Fix the function to ensure it's properly exported and handles the case when data exists
export const getMunicipalityData = (prefectureCode: string): MunicipalityGroup => {
  // If data exists for this prefecture, return it
  if (prefectureMunicipalities[prefectureCode]) {
    return prefectureMunicipalities[prefectureCode]
  }

  // Otherwise return a default empty structure
  return {
    あ行: [],
    か行: [],
    さ行: [],
    た行: [],
    な行: [],
    は行: [],
    ま行: [],
    や行: [],
    ら行: [],
    わ行: [],
  }
}
