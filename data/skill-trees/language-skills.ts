// 語言能力技能樹
export const languageSkills = {
  name: '語言能力',
  description: '多語言學習與溝通技能',
  icon: '🌍',
  color: '#10b981',
  levels: [
    {
      name: '基礎語言 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'lang_english_basic',
          name: '英語基礎',
          description: '掌握基本英語語法和常用詞彙',
          exp: 5,
          requiredSkills: [],
          category: '英語學習'
        },
        {
          id: 'lang_pronunciation',
          name: '發音練習',
          description: '改善發音準確性與語調',
          exp: 6,
          requiredSkills: [],
          category: '語音訓練'
        },
        {
          id: 'lang_listening',
          name: '聽力訓練',
          description: '提升英語聽力理解能力',
          exp: 7,
          requiredSkills: ['lang_pronunciation'],
          category: '聽力技能'
        },
        {
          id: 'lang_reading_basic',
          name: '基礎閱讀',
          description: '理解簡單英文文章與資訊',
          exp: 8,
          requiredSkills: ['lang_english_basic'],
          category: '閱讀理解'
        }
      ]
    },
    {
      name: '語言運用 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'lang_speaking',
          name: '口語表達',
          description: '流利的英語口語溝通',
          exp: 12,
          requiredSkills: ['lang_listening'],
          category: '口語技能'
        },
        {
          id: 'lang_writing_basic',
          name: '基礎寫作',
          description: '撰寫簡單的英文文章',
          exp: 15,
          requiredSkills: ['lang_reading_basic'],
          category: '寫作技能'
        },
        {
          id: 'lang_vocabulary',
          name: '詞彙擴充',
          description: '增加學術與專業詞彙量',
          exp: 14,
          requiredSkills: ['lang_speaking'],
          category: '詞彙學習'
        },
        {
          id: 'lang_grammar',
          name: '進階語法',
          description: '掌握複雜英語語法結構',
          exp: 16,
          requiredSkills: ['lang_writing_basic'],
          category: '語法學習'
        },
        {
          id: 'lang_japanese_basic',
          name: '日語入門',
          description: '學習日語五十音和基本會話',
          exp: 10,
          requiredSkills: [],
          category: '日語學習'
        }
      ]
    },
    {
      name: '多語言發展 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'lang_business_english',
          name: '商務英語',
          description: '商業環境中的專業英語溝通',
          exp: 25,
          requiredSkills: ['lang_vocabulary', 'lang_grammar'],
          category: '專業英語'
        },
        {
          id: 'lang_academic_writing',
          name: '學術寫作',
          description: '學術論文與報告撰寫',
          exp: 28,
          requiredSkills: ['lang_business_english'],
          category: '學術英語'
        },
        {
          id: 'lang_japanese_intermediate',
          name: '日語進階',
          description: '日語N3-N2水準的語法與會話',
          exp: 22,
          requiredSkills: ['lang_japanese_basic'],
          category: '日語學習'
        },
        {
          id: 'lang_korean_basic',
          name: '韓語入門',
          description: '學習韓語字母和基本會話',
          exp: 18,
          requiredSkills: ['lang_japanese_basic'],
          category: '韓語學習'
        },
        {
          id: 'lang_chinese_advanced',
          name: '中文進階',
          description: '提升中文表達與文學鑑賞能力',
          exp: 20,
          requiredSkills: ['lang_academic_writing'],
          category: '中文學習'
        }
      ]
    },
    {
      name: '高級語言技能 (Lv.41-55)',
      requiredLevel: 41,
      skills: [
        {
          id: 'lang_presentation',
          name: '英語簡報',
          description: '用英語進行專業簡報',
          exp: 35,
          requiredSkills: ['lang_academic_writing'],
          category: '表達技能'
        },
        {
          id: 'lang_debate',
          name: '英語辯論',
          description: '參與英語辯論與討論',
          exp: 38,
          requiredSkills: ['lang_presentation'],
          category: '思辨技能'
        },
        {
          id: 'lang_german_basic',
          name: '德語入門',
          description: '學習德語基礎語法與會話',
          exp: 30,
          requiredSkills: ['lang_korean_basic'],
          category: '德語學習'
        },
        {
          id: 'lang_french_basic',
          name: '法語入門',
          description: '學習法語基礎與發音',
          exp: 32,
          requiredSkills: ['lang_german_basic'],
          category: '法語學習'
        },
        {
          id: 'lang_japanese_advanced',
          name: '日語高級',
          description: '達到日語N1水準',
          exp: 40,
          requiredSkills: ['lang_japanese_intermediate'],
          category: '日語學習'
        }
      ]
    },
    {
      name: '專業語言應用 (Lv.56-70)',
      requiredLevel: 56,
      skills: [
        {
          id: 'lang_translation_basic',
          name: '基礎翻譯',
          description: '中英文筆譯技能',
          exp: 45,
          requiredSkills: ['lang_debate'],
          category: '翻譯技能'
        },
        {
          id: 'lang_interpretation',
          name: '口譯入門',
          description: '基礎同步與逐步口譯',
          exp: 50,
          requiredSkills: ['lang_translation_basic'],
          category: '口譯技能'
        },
        {
          id: 'lang_technical_writing',
          name: '技術文件寫作',
          description: '專業技術文件的撰寫',
          exp: 48,
          requiredSkills: ['lang_translation_basic'],
          category: '專業寫作'
        },
        {
          id: 'lang_cross_cultural',
          name: '跨文化溝通',
          description: '不同文化背景的溝通技巧',
          exp: 52,
          requiredSkills: ['lang_japanese_advanced', 'lang_french_basic'],
          category: '文化理解'
        },
        {
          id: 'lang_multilingual',
          name: '多語言切換',
          description: '流利運用多種語言',
          exp: 55,
          requiredSkills: ['lang_cross_cultural'],
          category: '多語能力'
        }
      ]
    },
    {
      name: '語言專精 (Lv.71-85)',
      requiredLevel: 71,
      skills: [
        {
          id: 'lang_professional_translation',
          name: '專業翻譯',
          description: '商務與技術領域的專業翻譯',
          exp: 65,
          requiredSkills: ['lang_interpretation', 'lang_technical_writing'],
          category: '專業翻譯'
        },
        {
          id: 'lang_conference_interpretation',
          name: '會議口譯',
          description: '國際會議同步口譯',
          exp: 70,
          requiredSkills: ['lang_professional_translation'],
          category: '高級口譯'
        },
        {
          id: 'lang_literary_translation',
          name: '文學翻譯',
          description: '文學作品的翻譯與創作',
          exp: 68,
          requiredSkills: ['lang_professional_translation'],
          category: '文學翻譯'
        },
        {
          id: 'lang_language_teaching',
          name: '語言教學',
          description: '多語言教學法與課程設計',
          exp: 72,
          requiredSkills: ['lang_multilingual'],
          category: '教學技能'
        },
        {
          id: 'lang_linguistics',
          name: '語言學研究',
          description: '語言學理論與研究方法',
          exp: 75,
          requiredSkills: ['lang_conference_interpretation'],
          category: '學術研究'
        }
      ]
    },
    {
      name: '語言大師 (Lv.86-100)',
      requiredLevel: 86,
      skills: [
        {
          id: 'lang_polyglot',
          name: '多語言專家',
          description: '精通5種以上語言',
          exp: 85,
          requiredSkills: ['lang_language_teaching', 'lang_literary_translation'],
          category: '多語專精'
        },
        {
          id: 'lang_cultural_ambassador',
          name: '文化大使',
          description: '促進國際文化交流',
          exp: 88,
          requiredSkills: ['lang_linguistics'],
          category: '文化交流'
        },
        {
          id: 'lang_ai_language',
          name: 'AI語言技術',
          description: '語言AI技術的研發與應用',
          exp: 92,
          requiredSkills: ['lang_polyglot'],
          category: '技術創新'
        },
        {
          id: 'lang_global_communication',
          name: '全球溝通領袖',
          description: '引領國際溝通標準',
          exp: 95,
          requiredSkills: ['lang_cultural_ambassador'],
          category: '國際領導'
        },
        {
          id: 'lang_language_innovation',
          name: '語言創新大師',
          description: '創新語言學習方法與理論',
          exp: 100,
          requiredSkills: ['lang_ai_language', 'lang_global_communication'],
          category: '創新研究'
        }
      ]
    }
  ]
}
