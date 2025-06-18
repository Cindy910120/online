// 技能樹配置數據
export const skillTreesConfig = {
  '電機工程': {
    name: '電機工程技能樹',
    levels: [
      {
        name: '基礎課程 (Lv.1-20)',
        skills: [
          { 
            id: 'ee_math1', 
            name: '微積分 I', 
            description: '學習極限、微分與積分基礎理論，為後續工程數學奠定基礎', 
            exp: 2, 
            completed: false, 
            available: true 
          },
          { 
            id: 'ee_physics1', 
            name: '普通物理 I', 
            description: '掌握力學、波動、熱力學基礎概念', 
            exp: 2, 
            completed: false, 
            available: true 
          },
          { 
            id: 'ee_programming1', 
            name: 'C語言程式設計', 
            description: '學習程式語言基礎，培養邏輯思維和問題解決能力', 
            exp: 3, 
            completed: false, 
            available: true 
          }
        ]
      },
      {
        name: '核心專業 (Lv.21-60)',
        skills: [
          { 
            id: 'ee_circuit1', 
            name: '電路學 I', 
            description: '學習基本電路分析方法，掌握歐姆定律和基爾霍夫定律', 
            exp: 5, 
            completed: false, 
            available: false 
          },
          { 
            id: 'ee_circuit2', 
            name: '電路學 II', 
            description: '深入交流電路分析，學習相量法和頻域分析', 
            exp: 6, 
            completed: false, 
            available: false 
          },
          { 
            id: 'ee_electronics1', 
            name: '電子學 I', 
            description: '深入了解二極體和電晶體原理，學習基本放大器電路', 
            exp: 7, 
            completed: false, 
            available: false 
          },
          { 
            id: 'ee_electronics2', 
            name: '電子學 II', 
            description: '學習運算放大器和數位電路設計', 
            exp: 8, 
            completed: false, 
            available: false 
          },
          { 
            id: 'ee_signal1', 
            name: '信號與系統', 
            description: '掌握信號處理基礎理論，學習傅立葉變換和濾波器設計', 
            exp: 8, 
            completed: false, 
            available: false 
          }
        ]
      },
      {
        name: '進階應用 (Lv.61-100)',
        skills: [
          { 
            id: 'ee_power1', 
            name: '電力系統 I', 
            description: '學習電力工程應用，包括發電、輸電基礎', 
            exp: 10, 
            completed: false, 
            available: false 
          },
          { 
            id: 'ee_power2', 
            name: '電力系統 II', 
            description: '深入配電系統設計和電力品質分析', 
            exp: 12, 
            completed: false, 
            available: false 
          },
          { 
            id: 'ee_control1', 
            name: '控制系統 I', 
            description: '掌握自動控制理論，學習反饋控制基礎', 
            exp: 12, 
            completed: false, 
            available: false 
          },
          { 
            id: 'ee_control2', 
            name: '控制系統 II', 
            description: '學習現代控制理論和系統穩定性分析', 
            exp: 15, 
            completed: false, 
            available: false 
          },
          { 
            id: 'ee_machine1', 
            name: '電機機械', 
            description: '深入了解電動機械原理，學習馬達控制和驅動技術', 
            exp: 15, 
            completed: false, 
            available: false 
          }
        ]
      }
    ]
  },
  
  '資訊工程': {
    name: '資訊工程技能樹',
    levels: [
      {
        name: '基礎課程 (Lv.1-20)',
        skills: [
          { 
            id: 'cs_math1', 
            name: '離散數學', 
            description: '學習邏輯、集合論、圖論等計算機科學基礎數學', 
            exp: 2, 
            completed: false, 
            available: true 
          },
          { 
            id: 'cs_programming1', 
            name: 'Python程式設計', 
            description: '學習Python語言基礎語法和程式設計概念', 
            exp: 3, 
            completed: false, 
            available: true 
          },
          { 
            id: 'cs_programming2', 
            name: 'Java物件導向程式設計', 
            description: '掌握物件導向程式設計概念和Java語言', 
            exp: 4, 
            completed: false, 
            available: true 
          }
        ]
      },
      {
        name: '核心專業 (Lv.21-60)',
        skills: [
          { 
            id: 'cs_algorithm1', 
            name: '資料結構', 
            description: '學習陣列、鏈結串列、堆疊、佇列等基本資料結構', 
            exp: 6, 
            completed: false, 
            available: false 
          },
          { 
            id: 'cs_algorithm2', 
            name: '演算法設計', 
            description: '掌握排序、搜尋、動態規劃等經典演算法', 
            exp: 8, 
            completed: false, 
            available: false 
          },
          { 
            id: 'cs_database1', 
            name: '資料庫系統', 
            description: '學習關聯式資料庫設計和SQL語言', 
            exp: 6, 
            completed: false, 
            available: false 
          },
          { 
            id: 'cs_network1', 
            name: '計算機網路', 
            description: '了解網路協定、TCP/IP和網路安全基礎', 
            exp: 7, 
            completed: false, 
            available: false 
          },
          { 
            id: 'cs_os1', 
            name: '作業系統', 
            description: '學習程序管理、記憶體管理和檔案系統', 
            exp: 8, 
            completed: false, 
            available: false 
          }
        ]
      },
      {
        name: '進階應用 (Lv.61-100)',
        skills: [
          { 
            id: 'cs_ai1', 
            name: '人工智慧導論', 
            description: '學習機器學習基礎和AI應用', 
            exp: 12, 
            completed: false, 
            available: false 
          },
          { 
            id: 'cs_ml1', 
            name: '機器學習', 
            description: '深入學習監督式和非監督式學習演算法', 
            exp: 15, 
            completed: false, 
            available: false 
          },
          { 
            id: 'cs_web1', 
            name: 'Web應用開發', 
            description: '學習前端和後端Web開發技術', 
            exp: 10, 
            completed: false, 
            available: false 
          },
          { 
            id: 'cs_mobile1', 
            name: '行動應用開發', 
            description: '學習Android/iOS應用程式開發', 
            exp: 12, 
            completed: false, 
            available: false 
          },
          { 
            id: 'cs_security1', 
            name: '資訊安全', 
            description: '學習網路安全、加密技術和安全漏洞分析', 
            exp: 15, 
            completed: false, 
            available: false 
          }
        ]
      }
    ]
  },

  '興趣技能': {
    name: '興趣技能樹',
    levels: [
      {
        name: '創意技能',
        skills: [
          { 
            id: 'interest_music1', 
            name: '音樂基礎', 
            description: '學習樂理基礎和基本樂器演奏', 
            exp: 2, 
            completed: false, 
            available: true 
          },
          { 
            id: 'interest_art1', 
            name: '繪畫基礎', 
            description: '學習素描、色彩理論和基本繪畫技巧', 
            exp: 2, 
            completed: false, 
            available: true 
          },
          { 
            id: 'interest_photo1', 
            name: '攝影基礎', 
            description: '學習攝影構圖、光線運用和後製技巧', 
            exp: 3, 
            completed: false, 
            available: true 
          }
        ]
      },
      {
        name: '語言技能',
        skills: [
          { 
            id: 'interest_english1', 
            name: '英語會話', 
            description: '提升英語口說和聽力能力', 
            exp: 4, 
            completed: false, 
            available: true 
          },
          { 
            id: 'interest_japanese1', 
            name: '日語入門', 
            description: '學習日語五十音和基本會話', 
            exp: 3, 
            completed: false, 
            available: true 
          },
          { 
            id: 'interest_korean1', 
            name: '韓語入門', 
            description: '學習韓語字母和基本會話', 
            exp: 3, 
            completed: false, 
            available: true 
          }
        ]
      }
    ]
  },

  '體能技能': {
    name: '體能技能樹',
    levels: [
      {
        name: '基礎體能',
        skills: [
          { 
            id: 'fitness_cardio1', 
            name: '有氧運動基礎', 
            description: '建立跑步、游泳等有氧運動習慣', 
            exp: 2, 
            completed: false, 
            available: true 
          },
          { 
            id: 'fitness_strength1', 
            name: '重量訓練入門', 
            description: '學習基本重量訓練動作和安全知識', 
            exp: 3, 
            completed: false, 
            available: true 
          },
          { 
            id: 'fitness_flexibility1', 
            name: '柔軟度訓練', 
            description: '學習伸展運動和瑜伽基礎動作', 
            exp: 2, 
            completed: false, 
            available: true 
          }
        ]
      },
      {
        name: '專項運動',
        skills: [
          { 
            id: 'fitness_basketball1', 
            name: '籃球技巧', 
            description: '學習籃球基本技巧和戰術', 
            exp: 4, 
            completed: false, 
            available: false 
          },
          { 
            id: 'fitness_badminton1', 
            name: '羽球技巧', 
            description: '學習羽球基本技巧和戰術', 
            exp: 4, 
            completed: false, 
            available: false 
          },
          { 
            id: 'fitness_swimming1', 
            name: '游泳技巧', 
            description: '學習各種泳姿和提升游泳技術', 
            exp: 5, 
            completed: false, 
            available: false 
          }
        ]      }
    ]
  },

  '語言能力': {
    name: '語言能力技能樹',
    levels: [
      {
        name: '基礎語言 (Lv.1-30)',
        skills: [
          { 
            id: 'lang_english_basic', 
            name: '英語基礎', 
            description: '掌握基本英語語法和常用詞彙', 
            exp: 3, 
            completed: false, 
            available: true 
          },
          { 
            id: 'lang_english_speaking', 
            name: '英語口說', 
            description: '提升英語口語表達能力', 
            exp: 4, 
            completed: false, 
            available: true 
          },
          { 
            id: 'lang_english_writing', 
            name: '英語寫作', 
            description: '學習英語寫作技巧和格式', 
            exp: 4, 
            completed: false, 
            available: true 
          }
        ]
      },
      {
        name: '進階語言 (Lv.31-70)',
        skills: [
          { 
            id: 'lang_japanese_basic', 
            name: '日語基礎', 
            description: '學習平假名、片假名和基本語法', 
            exp: 5, 
            completed: false, 
            available: false 
          },
          { 
            id: 'lang_korean_basic', 
            name: '韓語基礎', 
            description: '學習韓語字母和基本對話', 
            exp: 5, 
            completed: false, 
            available: false 
          },
          { 
            id: 'lang_professional_english', 
            name: '商務英語', 
            description: '學習商務場合的英語應用', 
            exp: 6, 
            completed: false, 
            available: false 
          }
        ]
      },
      {
        name: '專精語言 (Lv.71-100)',
        skills: [
          { 
            id: 'lang_translation', 
            name: '翻譯技能', 
            description: '培養專業翻譯能力', 
            exp: 8, 
            completed: false, 
            available: false 
          },
          { 
            id: 'lang_interpretation', 
            name: '口譯技能', 
            description: '學習同步和逐步口譯', 
            exp: 10, 
            completed: false, 
            available: false 
          }
        ]
      }
    ]
  },

  '軟技能': {
    name: '軟技能技能樹',
    levels: [
      {
        name: '個人技能 (Lv.1-30)',
        skills: [
          { 
            id: 'soft_time_management', 
            name: '時間管理', 
            description: '學習有效的時間規劃和管理技巧', 
            exp: 3, 
            completed: false, 
            available: true 
          },
          { 
            id: 'soft_critical_thinking', 
            name: '批判性思維', 
            description: '培養邏輯思考和分析能力', 
            exp: 4, 
            completed: false, 
            available: true 
          },
          { 
            id: 'soft_self_learning', 
            name: '自主學習', 
            description: '建立有效的學習方法和習慣', 
            exp: 3, 
            completed: false, 
            available: true 
          }
        ]
      },
      {
        name: '人際技能 (Lv.31-70)',
        skills: [
          { 
            id: 'soft_communication', 
            name: '溝通技巧', 
            description: '提升口語和書面溝通能力', 
            exp: 5, 
            completed: false, 
            available: false 
          },
          { 
            id: 'soft_teamwork', 
            name: '團隊合作', 
            description: '學習在團隊中有效協作', 
            exp: 5, 
            completed: false, 
            available: false 
          },
          { 
            id: 'soft_leadership', 
            name: '領導能力', 
            description: '培養領導和管理技能', 
            exp: 6, 
            completed: false, 
            available: false 
          }
        ]
      },
      {
        name: '職場技能 (Lv.71-100)',
        skills: [
          { 
            id: 'soft_presentation', 
            name: '簡報技巧', 
            description: '掌握專業簡報設計和演示', 
            exp: 7, 
            completed: false, 
            available: false 
          },
          { 
            id: 'soft_negotiation', 
            name: '談判技巧', 
            description: '學習商務談判和協商策略', 
            exp: 8, 
            completed: false, 
            available: false 
          },
          { 
            id: 'soft_project_management', 
            name: '專案管理', 
            description: '掌握專案規劃和執行管理', 
            exp: 10, 
            completed: false, 
            available: false 
          }
        ]
      }
    ]
  }
}

// 獲取對應科系的技能樹
export function getSkillTreeByMajor(major: string) {
  const majorKey = Object.keys(skillTreesConfig).find(key => major.includes(key.substring(0, 2)))
  return majorKey ? skillTreesConfig[majorKey as keyof typeof skillTreesConfig] : skillTreesConfig['資訊工程'] // 預設
}

// 獲取所有技能樹列表
export function getAllSkillTrees() {
  return Object.values(skillTreesConfig)
}
