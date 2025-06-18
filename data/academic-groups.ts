import type { AcademicCategory } from '~/types/academic'

// 台灣大學18學群完整分類資料庫
export const taiwanAcademicGroups: AcademicCategory[] = [
  {
    id: 'engineering',
    name: '工程學群',
    description: '以數學與科學的基礎知識與方法解決問題，改善人類生活品質',
    subcategories: [
      {
        id: 'computer-science',
        name: '資訊工程學類',
        description: '計算機科學、軟體工程、人工智慧等',
        relatedSkills: ['程式設計', '演算法', '系統分析', '軟體開發', '資料庫', '網路安全'],
        careerPaths: ['軟體工程師', '系統分析師', '資料科學家', 'AI工程師', '網路安全專家']
      },
      {
        id: 'electrical-engineering',
        name: '電機工程學類',
        description: '電力系統、電子電路、通訊工程等',
        relatedSkills: ['電路設計', '控制系統', '通訊工程', '微處理器', '電力系統'],
        careerPaths: ['電機工程師', '通訊工程師', '控制工程師', '電力工程師']
      },
      {
        id: 'mechanical-engineering',
        name: '機械工程學類',
        description: '機械設計、熱力學、流體力學等',
        relatedSkills: ['機械設計', 'CAD/CAM', '熱傳學', '材料科學', '自動化'],
        careerPaths: ['機械工程師', '自動化工程師', '產品設計師', '製程工程師']
      },
      {
        id: 'chemical-engineering',
        name: '化學工程學類',
        description: '化學程序設計、反應工程、分離技術等',
        relatedSkills: ['化學反應', '程序設計', '質量傳遞', '熱量傳遞', '分離技術'],
        careerPaths: ['化工工程師', '程序工程師', '環保工程師', '材料工程師']
      },
      {
        id: 'civil-engineering',
        name: '土木工程學類',
        description: '結構工程、大地工程、水利工程等',
        relatedSkills: ['結構分析', '工程測量', '材料力學', '水利工程', '交通工程'],
        careerPaths: ['土木工程師', '結構工程師', '水利工程師', '交通工程師']
      },
      {
        id: 'materials-engineering',
        name: '材料工程學類',
        description: '金屬材料、陶瓷材料、高分子材料等',
        relatedSkills: ['材料科學', '金屬加工', '陶瓷技術', '高分子化學', '奈米材料'],
        careerPaths: ['材料工程師', '研發工程師', '品質工程師', '製程工程師']
      }
    ]
  },
  {
    id: 'math-physics',
    name: '數理化學群',
    description: '以數學、物理、化學等基礎科學為主的學習領域',
    subcategories: [
      {
        id: 'mathematics',
        name: '數學學類',
        description: '純數學、應用數學、統計學等',
        relatedSkills: ['數學分析', '統計分析', '數值計算', '機率理論', '線性代數'],
        careerPaths: ['數學家', '統計師', '精算師', '資料分析師', '研究員']
      },
      {
        id: 'physics',
        name: '物理學類',
        description: '理論物理、應用物理、光電物理等',
        relatedSkills: ['物理實驗', '量子力學', '電磁學', '熱力學', '光學'],
        careerPaths: ['物理學家', '光電工程師', '研發工程師', '科學研究員']
      },
      {
        id: 'chemistry',
        name: '化學學類',
        description: '有機化學、無機化學、分析化學等',
        relatedSkills: ['化學實驗', '有機合成', '分析化學', '儀器分析', '材料化學'],
        careerPaths: ['化學家', '分析師', '研發人員', '品管人員']
      },
      {
        id: 'earth-science',
        name: '地球科學學類',
        description: '地質學、大氣科學、海洋科學等',
        relatedSkills: ['地質調查', '氣象觀測', '地理資訊系統', '環境監測', '遙感探測'],
        careerPaths: ['地質師', '氣象師', '環境顧問', '地理資訊分析師']
      }
    ]
  },
  {
    id: 'medicine',
    name: '醫藥衛生學群',
    description: '以人類身心健康為主要關注焦點的學習領域',
    subcategories: [
      {
        id: 'medicine',
        name: '醫學學類',
        description: '臨床醫學、基礎醫學等',
        relatedSkills: ['臨床診斷', '醫學知識', '病理分析', '手術技能', '醫療倫理'],
        careerPaths: ['醫師', '外科醫師', '內科醫師', '專科醫師']
      },
      {
        id: 'nursing',
        name: '護理學類',
        description: '基礎護理、臨床護理、社區護理等',
        relatedSkills: ['護理技能', '病患照護', '健康評估', '護理管理', '衛生教育'],
        careerPaths: ['護理師', '護理長', '護理督導', '社區護理師']
      },
      {
        id: 'pharmacy',
        name: '藥學學類',
        description: '藥物學、藥劑學、臨床藥學等',
        relatedSkills: ['藥物調劑', '藥理學', '藥物分析', '臨床藥學', '藥事管理'],
        careerPaths: ['藥師', '臨床藥師', '藥事管理師', '研發藥師']
      },
      {
        id: 'public-health',
        name: '公共衛生學類',
        description: '流行病學、環境衛生、衛生政策等',
        relatedSkills: ['流行病調查', '健康促進', '衛生統計', '環境衛生', '衛生政策'],
        careerPaths: ['公衛專家', '流行病學家', '衛生官員', '健康管理師']
      },
      {
        id: 'medical-technology',
        name: '醫學技術學類',
        description: '醫檢技術、放射技術、復健技術等',
        relatedSkills: ['醫學檢驗', '影像技術', '復健治療', '實驗室技術', '醫療儀器'],
        careerPaths: ['醫檢師', '放射師', '物理治療師', '職能治療師']
      }
    ]
  },
  {
    id: 'life-science',
    name: '生命科學學群',
    description: '以動植物、微生物的構造、功能與相互關係為主要研究對象',
    subcategories: [
      {
        id: 'biology',
        name: '生物學類',
        description: '一般生物學、分子生物學、細胞生物學等',
        relatedSkills: ['生物實驗', '分子技術', '細胞培養', '基因工程', '生物資訊'],
        careerPaths: ['生物學家', '研究員', '生技工程師', '品管員']
      },
      {
        id: 'biotechnology',
        name: '生物科技學類',
        description: '基因工程、生物製藥、農業生技等',
        relatedSkills: ['基因工程', '蛋白質工程', '發酵技術', '生物製藥', '組織工程'],
        careerPaths: ['生技工程師', '研發人員', '生產管理', '技術顧問']
      },
      {
        id: 'ecology',
        name: '生態學類',
        description: '生態系統、環境生物學、保育生物學等',
        relatedSkills: ['生態調查', '環境監測', '保育規劃', '生物多樣性', '生態復育'],
        careerPaths: ['生態學家', '環境顧問', '保育專家', '自然解說員']
      }
    ]
  },
  {
    id: 'agriculture',
    name: '生物資源學群',
    description: '以農、林、漁、牧等生物資源的開發、生產與應用為主',
    subcategories: [
      {
        id: 'agriculture',
        name: '農業學類',
        description: '作物科學、土壤科學、植物病理等',
        relatedSkills: ['作物栽培', '土壤管理', '植物保護', '農業機械', '農場管理'],
        careerPaths: ['農業技師', '農場經理', '農業顧問', '作物育種家']
      },
      {
        id: 'forestry',
        name: '森林學類',
        description: '森林經營、木材科學、森林保護等',
        relatedSkills: ['森林經營', '木材加工', '森林保護', '生態復育', '測量技術'],
        careerPaths: ['森林技師', '林業經理', '環境顧問', '木材工程師']
      },
      {
        id: 'fisheries',
        name: '漁業學類',
        description: '水產養殖、海洋漁業、水產加工等',
        relatedSkills: ['水產養殖', '漁業管理', '水產加工', '海洋調查', '漁具漁法'],
        careerPaths: ['水產技師', '養殖管理', '漁業顧問', '海洋調查員']
      },
      {
        id: 'animal-science',
        name: '畜牧學類',
        description: '動物科學、畜產加工、動物營養等',
        relatedSkills: ['動物飼養', '畜產加工', '動物營養', '繁殖技術', '畜牧管理'],
        careerPaths: ['畜牧技師', '動物營養師', '畜產加工', '牧場經理']
      }
    ]
  },
  {
    id: 'earth-environment',
    name: '地球與環境學群',
    description: '以地球科學、環境科學、地理學等為主要學習內容',
    subcategories: [
      {
        id: 'geography',
        name: '地理學類',
        description: '自然地理、人文地理、地理資訊系統等',
        relatedSkills: ['地理資訊系統', '遙感探測', '空間分析', '地圖製作', '田野調查'],
        careerPaths: ['地理學家', 'GIS分析師', '都市規劃師', '環境顧問']
      },
      {
        id: 'environmental-science',
        name: '環境科學學類',
        description: '環境監測、污染防治、環境管理等',
        relatedSkills: ['環境監測', '污染防治', '環境評估', '廢棄物處理', '環境法規'],
        careerPaths: ['環境工程師', '環境顧問', '污染防治專家', '環評師']
      },
      {
        id: 'atmospheric-science',
        name: '大氣科學學類',
        description: '氣象學、氣候學、大氣物理等',
        relatedSkills: ['氣象觀測', '氣候分析', '數值預報', '大氣模式', '氣象儀器'],
        careerPaths: ['氣象師', '氣候學家', '環境顧問', '氣象預報員']
      }
    ]
  },
  {
    id: 'architecture-design',
    name: '建築與設計學群',
    description: '以建築、景觀、室內設計、工業設計等空間與產品設計為主',
    subcategories: [
      {
        id: 'architecture',
        name: '建築學類',
        description: '建築設計、都市設計、建築技術等',
        relatedSkills: ['建築設計', 'CAD繪圖', '結構分析', '建築法規', '工程管理'],
        careerPaths: ['建築師', '都市規劃師', '建築設計師', '工程顧問']
      },
      {
        id: 'landscape',
        name: '景觀學類',
        description: '景觀設計、景觀規劃、園藝設計等',
        relatedSkills: ['景觀設計', '植栽設計', '環境規劃', '景觀工程', '生態設計'],
        careerPaths: ['景觀設計師', '景觀規劃師', '園藝設計師', '環境顧問']
      },
      {
        id: 'interior-design',
        name: '室內設計學類',
        description: '室內設計、室內裝修、空間規劃等',
        relatedSkills: ['室內設計', '空間規劃', '材料應用', '照明設計', '工程監造'],
        careerPaths: ['室內設計師', '空間設計師', '展場設計師', '裝修工程師']
      },
      {
        id: 'industrial-design',
        name: '工業設計學類',
        description: '產品設計、造型設計、人因工程等',
        relatedSkills: ['產品設計', '3D建模', '人因工程', '材料應用', '原型製作'],
        careerPaths: ['工業設計師', '產品設計師', '造型設計師', 'UX設計師']
      }
    ]
  },
  {
    id: 'arts',
    name: '藝術學群',
    description: '以創作、表演、美學、藝術行政為主要學習內容',
    subcategories: [
      {
        id: 'fine-arts',
        name: '美術學類',
        description: '繪畫、雕塑、版畫、數位藝術等',
        relatedSkills: ['繪畫技法', '雕塑技術', '數位創作', '藝術史', '美學理論'],
        careerPaths: ['藝術家', '美術教師', '藝術顧問', '策展人']
      },
      {
        id: 'music',
        name: '音樂學類',
        description: '作曲、演奏、音樂學、音樂治療等',
        relatedSkills: ['樂器演奏', '作曲編曲', '音樂理論', '音響技術', '音樂教學'],
        careerPaths: ['音樂家', '作曲家', '音樂教師', '音響工程師']
      },
      {
        id: 'performing-arts',
        name: '表演學類',
        description: '戲劇、舞蹈、電影、廣播電視等',
        relatedSkills: ['表演技巧', '劇本創作', '舞蹈編排', '影像製作', '聲音表演'],
        careerPaths: ['演員', '導演', '編劇', '舞蹈家', '製作人']
      },
      {
        id: 'applied-arts',
        name: '應用藝術學類',
        description: '廣告設計、商業設計、多媒體設計等',
        relatedSkills: ['平面設計', '廣告企劃', '多媒體製作', '品牌設計', '數位行銷'],
        careerPaths: ['平面設計師', '廣告創意', '多媒體設計師', '品牌經理']
      }
    ]
  },
  {
    id: 'social-psychology',
    name: '社會與心理學群',
    description: '以人類社會現象、心理歷程為主要研究對象',
    subcategories: [
      {
        id: 'psychology',
        name: '心理學類',
        description: '一般心理學、臨床心理學、諮商心理學等',
        relatedSkills: ['心理評估', '心理治療', '統計分析', '研究方法', '心理測驗'],
        careerPaths: ['心理師', '諮商師', '人力資源', '市場研究員']
      },
      {
        id: 'sociology',
        name: '社會學類',
        description: '社會理論、社會調查、社會工作等',
        relatedSkills: ['社會調查', '統計分析', '社會工作', '政策分析', '田野研究'],
        careerPaths: ['社會學家', '社會工作者', '政策分析師', 'NGO工作者']
      },
      {
        id: 'social-work',
        name: '社會工作學類',
        description: '個案工作、團體工作、社區工作等',
        relatedSkills: ['個案管理', '團體領導', '社區組織', '諮商技巧', '福利服務'],
        careerPaths: ['社會工作師', '個案管理師', '社福機構主管', '政策規劃師']
      },
      {
        id: 'anthropology',
        name: '人類學類',
        description: '文化人類學、考古學、語言學等',
        relatedSkills: ['田野調查', '文化分析', '考古發掘', '語言分析', '民族誌'],
        careerPaths: ['人類學家', '考古學家', '文化顧問', '博物館研究員']
      }
    ]
  },
  {
    id: 'mass-communication',
    name: '大眾傳播學群',
    description: '以傳播理論、媒體實務、資訊傳播為主要學習內容',
    subcategories: [
      {
        id: 'journalism',
        name: '新聞學類',
        description: '新聞採訪、新聞寫作、媒體倫理等',
        relatedSkills: ['新聞採訪', '新聞寫作', '攝影攝像', '編輯技能', '媒體倫理'],
        careerPaths: ['記者', '編輯', '主播', '新聞製作人']
      },
      {
        id: 'advertising',
        name: '廣告學類',
        description: '廣告企劃、創意發想、媒體策略等',
        relatedSkills: ['廣告企劃', '創意發想', '文案撰寫', '媒體策略', '市場分析'],
        careerPaths: ['廣告企劃', '創意總監', '文案企劃', '媒體企劃']
      },
      {
        id: 'public-relations',
        name: '公關學類',
        description: '公關策略、危機處理、品牌管理等',
        relatedSkills: ['公關策略', '危機處理', '活動企劃', '媒體關係', '品牌管理'],
        careerPaths: ['公關經理', '品牌經理', '活動企劃', '媒體關係專員']
      },
      {
        id: 'digital-media',
        name: '數位媒體學類',
        description: '網路媒體、社群媒體、數位內容等',
        relatedSkills: ['網站設計', '社群經營', '數位行銷', '內容製作', '數據分析'],
        careerPaths: ['數位行銷專員', '社群經理', '內容創作者', '網站設計師']
      }
    ]
  },
  {
    id: 'foreign-languages',
    name: '外語學群',
    description: '以外國語文聽說讀寫能力訓練及語言學為主',
    subcategories: [
      {
        id: 'english',
        name: '英語學類',
        description: '英語文學、英語教學、翻譯學等',
        relatedSkills: ['英語聽說讀寫', '英語教學', '翻譯技巧', '文學分析', '跨文化溝通'],
        careerPaths: ['英語教師', '翻譯員', '國際事務', '外商公司職員']
      },
      {
        id: 'japanese',
        name: '日語學類',
        description: '日語文學、日語教學、日本文化等',
        relatedSkills: ['日語聽說讀寫', '日語教學', '翻譯技巧', '日本文化', '商務日語'],
        careerPaths: ['日語教師', '翻譯員', '國際貿易', '觀光導遊']
      },
      {
        id: 'other-languages',
        name: '其他語言學類',
        description: '德語、法語、西班牙語、韓語等',
        relatedSkills: ['多國語言', '翻譯技巧', '文化研究', '國際關係', '語言教學'],
        careerPaths: ['語言教師', '翻譯員', '外交官', '國際組織職員']
      },
      {
        id: 'linguistics',
        name: '語言學類',
        description: '理論語言學、應用語言學、語音學等',
        relatedSkills: ['語音分析', '語法研究', '語言習得', '計算語言學', '語言政策'],
        careerPaths: ['語言學家', '語言治療師', 'NLP工程師', '語言政策研究員']
      }
    ]
  },
  {
    id: 'literature-history',
    name: '文史哲學群',
    description: '以文學、歷史、哲學的人文素養及思辨能力為主',
    subcategories: [
      {
        id: 'chinese-literature',
        name: '中國語文學類',
        description: '中國文學、古典文學、現代文學等',
        relatedSkills: ['文學分析', '古文閱讀', '文字學', '創作寫作', '文獻研究'],
        careerPaths: ['中文教師', '文字工作者', '編輯', '文史研究員']
      },
      {
        id: 'history',
        name: '歷史學類',
        description: '中國史、世界史、考古學等',
        relatedSkills: ['史料分析', '文獻研究', '田野調查', '考古技術', '史學方法'],
        careerPaths: ['歷史學家', '博物館研究員', '文史工作者', '考古學家']
      },
      {
        id: 'philosophy',
        name: '哲學學類',
        description: '西方哲學、中國哲學、邏輯學等',
        relatedSkills: ['邏輯思辨', '哲學分析', '倫理思考', '概念分析', '批判思維'],
        careerPaths: ['哲學教師', '倫理顧問', '思想研究員', '文化評論家']
      },
      {
        id: 'library-science',
        name: '圖書資訊學類',
        description: '圖書館學、資訊科學、檔案學等',
        relatedSkills: ['資訊組織', '資料庫管理', '數位典藏', '資訊檢索', '知識管理'],
        careerPaths: ['圖書館員', '資訊管理師', '檔案管理員', '知識管理師']
      }
    ]
  },
  {
    id: 'education',
    name: '教育學群',
    description: '以培育各階段教育工作人員以及教育學術研究人才為主',
    subcategories: [
      {
        id: 'elementary-education',
        name: '教育學類',
        description: '教育心理學、教育行政、課程設計等',
        relatedSkills: ['教學設計', '班級經營', '學習評量', '教育心理', '課程規劃'],
        careerPaths: ['教師', '教育行政', '課程設計師', '教育研究員']
      },
      {
        id: 'special-education',
        name: '特殊教育學類',
        description: '身心障礙教育、資優教育、早期療育等',
        relatedSkills: ['特教知能', '個別化教學', '輔助技術', '行為改變', '家庭諮詢'],
        careerPaths: ['特教老師', '治療師', '社工師', '早療師']
      },
      {
        id: 'preschool-education',
        name: '幼兒教育學類',
        description: '幼兒發展、幼兒教學、親子教育等',
        relatedSkills: ['幼兒發展', '遊戲設計', '親師溝通', '教具製作', '幼兒保育'],
        careerPaths: ['幼教老師', '托育人員', '親子館老師', '兒童發展師']
      },
      {
        id: 'physical-education',
        name: '體育學類',
        description: '運動科學、體育教學、運動管理等',
        relatedSkills: ['運動技能', '體適能', '運動傷害', '運動心理', '運動管理'],
        careerPaths: ['體育老師', '運動教練', '健身教練', '運動管理師']
      }
    ]
  },
  {
    id: 'law-politics',
    name: '法政學群',
    description: '以法律系統、政治制度、公共政策為主要學習內容',
    subcategories: [
      {
        id: 'law',
        name: '法律學類',
        description: '民法、刑法、憲法、商事法等',
        relatedSkills: ['法條解釋', '案例分析', '法庭辯論', '契約撰寫', '法律研究'],
        careerPaths: ['律師', '法官', '檢察官', '法務專員']
      },
      {
        id: 'political-science',
        name: '政治學類',
        description: '政治理論、國際關係、公共行政等',
        relatedSkills: ['政策分析', '國際關係', '政治理論', '公共行政', '選舉事務'],
        careerPaths: ['政治人物', '外交官', '公務員', '政策分析師']
      },
      {
        id: 'public-administration',
        name: '行政學類',
        description: '公共管理、人事行政、財政學等',
        relatedSkills: ['行政管理', '人事管理', '財政分析', '政策執行', '公共服務'],
        careerPaths: ['公務員', '行政主管', '人事專員', '政策研究員']
      },
      {
        id: 'international-relations',
        name: '國際事務學類',
        description: '國際關係、外交學、區域研究等',
        relatedSkills: ['國際關係', '外語能力', '文化理解', '談判技巧', '政策分析'],
        careerPaths: ['外交官', '國際組織職員', '國際貿易', '國際NGO工作者']
      }
    ]
  },
  {
    id: 'management',
    name: '管理學群',
    description: '以培養規劃、組織、領導、管控等管理能力為主',
    subcategories: [
      {
        id: 'business-administration',
        name: '企業管理學類',
        description: '策略管理、組織行為、營運管理等',
        relatedSkills: ['策略規劃', '團隊領導', '專案管理', '組織管理', '決策分析'],
        careerPaths: ['管理顧問', '企業主管', '專案經理', 'CEO']
      },
      {
        id: 'marketing',
        name: '行銷學類',
        description: '消費者行為、品牌管理、數位行銷等',
        relatedSkills: ['市場分析', '品牌管理', '消費者研究', '數位行銷', '銷售技巧'],
        careerPaths: ['行銷經理', '品牌經理', '市場研究員', '業務經理']
      },
      {
        id: 'human-resources',
        name: '人力資源學類',
        description: '人才招募、培訓發展、薪酬管理等',
        relatedSkills: ['人才招募', '績效管理', '教育訓練', '勞資關係', '組織發展'],
        careerPaths: ['人資經理', '招募專員', '培訓師', '組織發展顧問']
      },
      {
        id: 'logistics',
        name: '運輸物流學類',
        description: '供應鏈管理、物流管理、運輸規劃等',
        relatedSkills: ['供應鏈管理', '物流規劃', '庫存管理', '運輸管理', '成本控制'],
        careerPaths: ['物流經理', '供應鏈管理師', '運輸規劃師', '倉儲經理']
      }
    ]
  },
  {
    id: 'finance',
    name: '財經學群',
    description: '以金融、財務、經濟、統計為主要學習領域',
    subcategories: [
      {
        id: 'economics',
        name: '經濟學類',
        description: '總體經濟、個體經濟、計量經濟等',
        relatedSkills: ['經濟分析', '統計分析', '市場預測', '政策分析', '數據建模'],
        careerPaths: ['經濟學家', '市場分析師', '政策研究員', '金融分析師']
      },
      {
        id: 'finance',
        name: '財務金融學類',
        description: '投資學、公司理財、衍生性商品等',
        relatedSkills: ['財務分析', '投資決策', '風險管理', '金融商品', '資產配置'],
        careerPaths: ['財務經理', '投資分析師', '理財顧問', '基金經理']
      },
      {
        id: 'accounting',
        name: '會計學類',
        description: '財務會計、管理會計、審計學等',
        relatedSkills: ['財務報表', '成本分析', '稅務規劃', '內控制度', '審計技能'],
        careerPaths: ['會計師', '財務主管', '稽核師', '稅務顧問']
      },
      {
        id: 'statistics',
        name: '統計學類',
        description: '數理統計、應用統計、大數據分析等',
        relatedSkills: ['統計分析', '數據挖掘', '機器學習', 'R/Python', '調查設計'],
        careerPaths: ['資料科學家', '統計師', '市場研究員', '精算師']
      },
      {
        id: 'insurance',
        name: '保險學類',
        description: '保險學、風險管理、精算學等',
        relatedSkills: ['風險評估', '精算技能', '保險商品', '理賠處理', '法規知識'],
        careerPaths: ['精算師', '保險經紀', '理賠調查員', '風險管理師']
      }
    ]
  },
  {
    id: 'recreation-sports',
    name: '遊憩與運動學群',
    description: '以觀光旅遊、餐旅服務、運動競技、休閒遊憩為主',
    subcategories: [
      {
        id: 'tourism',
        name: '觀光學類',
        description: '觀光事業、旅遊規劃、觀光行銷等',
        relatedSkills: ['旅遊規劃', '導遊技能', '觀光行銷', '文化解說', '服務管理'],
        careerPaths: ['導遊', '領隊', '旅行社經理', '觀光局職員']
      },
      {
        id: 'hospitality',
        name: '餐旅學類',
        description: '旅館管理、餐飲管理、會展管理等',
        relatedSkills: ['飯店管理', '餐飲服務', '會展規劃', '客戶服務', '營運管理'],
        careerPaths: ['飯店經理', '餐廳經理', '會展企劃', '客服經理']
      },
      {
        id: 'sports-management',
        name: '運動管理學類',
        description: '運動產業、運動行銷、場館管理等',
        relatedSkills: ['運動行銷', '賽事規劃', '場館管理', '運動媒體', '運動經紀'],
        careerPaths: ['運動經紀人', '賽事經理', '運動行銷', '場館經理']
      },
      {
        id: 'recreation',
        name: '休閒遊憩學類',
        description: '休閒規劃、遊憩資源、休閒產業等',
        relatedSkills: ['休閒規劃', '活動設計', '遊程規劃', '休閒教育', '戶外活動'],
        careerPaths: ['休閒規劃師', '活動企劃', '戶外教育', '休閒產業經理']
      }
    ]
  },
  {
    id: 'information',
    name: '資訊學群',
    description: '以電腦軟體設計、網路工程、多媒體應用為主要學習內容',
    subcategories: [
      {
        id: 'computer-science-info',
        name: '資訊工程學類',
        description: '程式設計、演算法、軟體工程等',
        relatedSkills: ['程式設計', '軟體開發', '資料結構', '演算法', '系統設計'],
        careerPaths: ['軟體工程師', '系統分析師', '程式設計師', '軟體架構師']
      },
      {
        id: 'information-management',
        name: '資訊管理學類',
        description: '資訊系統、資料庫、企業資源規劃等',
        relatedSkills: ['資訊系統', '資料庫管理', 'ERP系統', '專案管理', '系統分析'],
        careerPaths: ['資訊經理', 'MIS工程師', 'ERP顧問', '系統管理師']
      },
      {
        id: 'multimedia',
        name: '多媒體學類',
        description: '數位內容、動畫設計、互動媒體等',
        relatedSkills: ['動畫製作', '影像處理', '互動設計', '3D建模', '遊戲設計'],
        careerPaths: ['多媒體設計師', '動畫師', '遊戲設計師', 'UI/UX設計師']
      },
      {
        id: 'network-engineering',
        name: '網路工程學類',
        description: '網路架構、網路安全、雲端技術等',
        relatedSkills: ['網路架構', '網路安全', '雲端技術', '系統管理', '資安技術'],
        careerPaths: ['網路工程師', '資安工程師', '雲端架構師', '系統管理員']
      }
    ]
  }
]
