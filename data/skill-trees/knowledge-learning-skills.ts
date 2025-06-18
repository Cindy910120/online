// 知識學習技能樹
export const knowledgeLearningSkills = {
  name: '知識學習',
  description: '培養閱讀、寫作、語言與研究技能',
  icon: '📚',
  color: '#0ea5e9',
  levels: [
    {
      name: '學習基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'knowledge_reading_habit',
          name: '閱讀習慣',
          description: '建立每日閱讀習慣與專注力',
          exp: 3,
          requiredSkills: [],
          category: '閱讀技能'
        },
        {
          id: 'knowledge_note_taking',
          name: '筆記技巧',
          description: '有效記錄與整理學習內容',
          exp: 4,
          requiredSkills: ['knowledge_reading_habit'],
          category: '學習方法'
        },
        {
          id: 'knowledge_basic_writing',
          name: '基礎寫作',
          description: '文字表達與基本寫作技巧',
          exp: 5,
          requiredSkills: ['knowledge_note_taking'],
          category: '寫作技能'
        },
        {
          id: 'knowledge_logic_puzzles',
          name: '邏輯遊戲',
          description: '數獨、填字遊戲等邏輯思維訓練',
          exp: 4,
          requiredSkills: [],
          category: '邏輯思維'
        },
        {
          id: 'knowledge_basic_research',
          name: '資料搜尋',
          description: '有效搜尋與評估資訊來源',
          exp: 5,
          requiredSkills: ['knowledge_note_taking'],
          category: '研究技能'
        }
      ]
    },
    {
      name: '深度學習 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'knowledge_fiction_reading',
          name: '小說閱讀',
          description: '文學作品深度閱讀與分析',
          exp: 8,
          requiredSkills: ['knowledge_reading_habit'],
          category: '文學素養'
        },
        {
          id: 'knowledge_history_study',
          name: '歷史研究',
          description: '歷史事件分析與時代脈絡理解',
          exp: 10,
          requiredSkills: ['knowledge_basic_research'],
          category: '人文學科'
        },
        {
          id: 'knowledge_philosophy_study',
          name: '哲學思辨',
          description: '哲學思想學習與批判思考',
          exp: 12,
          requiredSkills: ['knowledge_logic_puzzles'],
          category: '人文學科'
        },
        {
          id: 'knowledge_psychology_study',
          name: '心理學學習',
          description: '人類行為與心理現象研究',
          exp: 11,
          requiredSkills: ['knowledge_basic_research'],
          category: '社會科學'
        },
        {
          id: 'knowledge_english_study',
          name: '英語學習',
          description: '英語聽說讀寫能力提升',
          exp: 13,
          requiredSkills: ['knowledge_basic_writing'],
          category: '語言學習'
        },
        {
          id: 'knowledge_japanese_study',
          name: '日語學習',
          description: '日語基礎與文化理解',
          exp: 14,
          requiredSkills: ['knowledge_english_study'],
          category: '語言學習'
        },
        {
          id: 'knowledge_spanish_study',
          name: '西班牙語學習',
          description: '西班牙語基礎與拉丁文化',
          exp: 15,
          requiredSkills: ['knowledge_english_study'],
          category: '語言學習'
        },
        {
          id: 'knowledge_creative_writing',
          name: '創意寫作',
          description: '散文、詩歌等創意文體寫作',
          exp: 16,
          requiredSkills: ['knowledge_fiction_reading'],
          category: '寫作技能'
        },
        {
          id: 'knowledge_chess',
          name: '象棋圍棋',
          description: '策略棋類遊戲與思維訓練',
          exp: 12,
          requiredSkills: ['knowledge_logic_puzzles'],
          category: '策略思維'
        },
        {
          id: 'knowledge_science_study',
          name: '科學研究',
          description: '自然科學現象觀察與實驗',
          exp: 18,
          requiredSkills: ['knowledge_psychology_study'],
          category: '自然科學'
        }
      ]
    },
    {
      name: '專業發展 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'knowledge_literary_analysis',
          name: '文學評論',
          description: '文學作品深度分析與評論寫作',
          exp: 20,
          requiredSkills: ['knowledge_creative_writing'],
          category: '文學研究'
        },
        {
          id: 'knowledge_academic_writing',
          name: '學術寫作',
          description: '論文寫作與學術研究方法',
          exp: 25,
          requiredSkills: ['knowledge_literary_analysis'],
          category: '學術技能'
        },
        {
          id: 'knowledge_historical_research',
          name: '史學研究',
          description: '史料分析與歷史研究方法',
          exp: 22,
          requiredSkills: ['knowledge_history_study'],
          category: '史學方法'
        },
        {
          id: 'knowledge_philosophical_writing',
          name: '哲學論述',
          description: '哲學論文與思辨文章寫作',
          exp: 24,
          requiredSkills: ['knowledge_philosophy_study'],
          category: '哲學研究'
        },
        {
          id: 'knowledge_multilingual',
          name: '多語能力',
          description: '掌握三種以上語言能力',
          exp: 28,
          requiredSkills: ['knowledge_japanese_study', 'knowledge_spanish_study'],
          category: '語言專精'
        },
        {
          id: 'knowledge_translation',
          name: '翻譯技能',
          description: '多語言翻譯與跨文化理解',
          exp: 30,
          requiredSkills: ['knowledge_multilingual'],
          category: '語言應用'
        },
        {
          id: 'knowledge_blog_writing',
          name: '部落格寫作',
          description: '網路寫作與內容經營',
          exp: 18,
          requiredSkills: ['knowledge_creative_writing'],
          category: '數位寫作'
        },
        {
          id: 'knowledge_novel_writing',
          name: '小說創作',
          description: '長篇小說構思與創作',
          exp: 35,
          requiredSkills: ['knowledge_blog_writing'],
          category: '文學創作'
        },
        {
          id: 'knowledge_competitive_chess',
          name: '競技棋藝',
          description: '參與棋類競賽與高段技巧',
          exp: 26,
          requiredSkills: ['knowledge_chess'],
          category: '競技思維'
        },
        {
          id: 'knowledge_scientific_method',
          name: '科學方法',
          description: '實驗設計與科學研究方法',
          exp: 32,
          requiredSkills: ['knowledge_science_study'],
          category: '研究方法'
        }
      ]
    },
    {
      name: '專家水準 (Lv.41-55)',
      requiredLevel: 41,
      skills: [
        {
          id: 'knowledge_book_publishing',
          name: '出版著作',
          description: '書籍出版與作品發表',
          exp: 40,
          requiredSkills: ['knowledge_novel_writing'],
          category: '出版成就'
        },
        {
          id: 'knowledge_literary_awards',
          name: '文學獎項',
          description: '獲得重要文學獎項認可',
          exp: 45,
          requiredSkills: ['knowledge_book_publishing'],
          category: '文學榮譽'
        },
        {
          id: 'knowledge_academic_publication',
          name: '學術發表',
          description: '期刊論文發表與學術貢獻',
          exp: 42,
          requiredSkills: ['knowledge_academic_writing'],
          category: '學術成就'
        },
        {
          id: 'knowledge_historical_discovery',
          name: '史學發現',
          description: '重要史料發現或歷史研究突破',
          exp: 48,
          requiredSkills: ['knowledge_historical_research'],
          category: '史學貢獻'
        },
        {
          id: 'knowledge_philosophical_theory',
          name: '哲學理論',
          description: '原創哲學理論或思想體系',
          exp: 50,
          requiredSkills: ['knowledge_philosophical_writing'],
          category: '哲學創新'
        },
        {
          id: 'knowledge_interpretation',
          name: '專業口譯',
          description: '同步口譯與國際會議翻譯',
          exp: 38,
          requiredSkills: ['knowledge_translation'],
          category: '語言專業'
        },
        {
          id: 'knowledge_chess_master',
          name: '棋藝大師',
          description: '獲得棋類大師段位或稱號',
          exp: 44,
          requiredSkills: ['knowledge_competitive_chess'],
          category: '競技成就'
        },
        {
          id: 'knowledge_research_innovation',
          name: '研究創新',
          description: '重要科學發現或研究方法創新',
          exp: 52,
          requiredSkills: ['knowledge_scientific_method'],
          category: '科學貢獻'
        }
      ]
    },
    {
      name: '知識權威 (Lv.56-70)',
      requiredLevel: 56,
      skills: [
        {
          id: 'knowledge_bestseller',
          name: '暢銷作家',
          description: '作品成為暢銷書並廣受歡迎',
          exp: 55,
          requiredSkills: ['knowledge_literary_awards'],
          category: '商業成功'
        },
        {
          id: 'knowledge_professor',
          name: '學術教授',
          description: '大學教授職位與學術領導',
          exp: 58,
          requiredSkills: ['knowledge_academic_publication'],
          category: '學術地位'
        },
        {
          id: 'knowledge_expert_consultant',
          name: '專家顧問',
          description: '成為領域專家與政策顧問',
          exp: 52,
          requiredSkills: ['knowledge_historical_discovery'],
          category: '社會影響'
        },
        {
          id: 'knowledge_thought_leader',
          name: '思想領袖',
          description: '在哲學或思想界具有影響力',
          exp: 60,
          requiredSkills: ['knowledge_philosophical_theory'],
          category: '思想影響'
        },
        {
          id: 'knowledge_international_translator',
          name: '國際翻譯家',
          description: '重要文學作品翻譯與跨文化交流',
          exp: 48,
          requiredSkills: ['knowledge_interpretation'],
          category: '文化交流'
        },
        {
          id: 'knowledge_chess_grandmaster',
          name: '棋類特級大師',
          description: '世界級棋類競賽成就',
          exp: 62,
          requiredSkills: ['knowledge_chess_master'],
          category: '世界級成就'
        },
        {
          id: 'knowledge_scientific_breakthrough',
          name: '科學突破',
          description: '重大科學發現或理論突破',
          exp: 70,
          requiredSkills: ['knowledge_research_innovation'],
          category: '科學革命'
        }
      ]
    },
    {
      name: '知識傳奇 (Lv.71-100)',
      requiredLevel: 71,
      skills: [
        {
          id: 'knowledge_cultural_icon',
          name: '文化符號',
          description: '成為時代文化象徵與精神領袖',
          exp: 75,
          requiredSkills: ['knowledge_bestseller'],
          category: '文化影響'
        },
        {
          id: 'knowledge_academic_legacy',
          name: '學術遺產',
          description: '建立影響深遠的學術傳統',
          exp: 80,
          requiredSkills: ['knowledge_professor'],
          category: '學術傳承'
        },
        {
          id: 'knowledge_intellectual_movement',
          name: '思想運動',
          description: '引領重要思想或社會運動',
          exp: 85,
          requiredSkills: ['knowledge_thought_leader'],
          category: '社會變革'
        },
        {
          id: 'knowledge_cross_cultural_bridge',
          name: '文化橋樑',
          description: '促進重要跨文化理解與交流',
          exp: 65,
          requiredSkills: ['knowledge_international_translator'],
          category: '文化融合'
        },
        {
          id: 'knowledge_nobel_prize',
          name: '諾貝爾等級成就',
          description: '獲得諾貝爾獎等世界最高榮譽',
          exp: 95,
          requiredSkills: ['knowledge_scientific_breakthrough'],
          category: '最高榮譽'
        },
        {
          id: 'knowledge_immortal_wisdom',
          name: '不朽智慧',
          description: '創造跨時代的知識與智慧',
          exp: 100,
          requiredSkills: ['knowledge_cultural_icon', 'knowledge_academic_legacy', 'knowledge_intellectual_movement'],
          category: '永恆價值'
        }
      ]
    }
  ]
}
