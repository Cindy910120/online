// 書法技能樹
export const calligraphySkills = {
  name: '書法藝術',
  description: '傳統書法與現代手寫字藝術，培養文字美感與文化涵養',
  icon: '✍️',
  color: '#374151',
  levels: [
    {
      name: '書法入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'calli_posture_basic',
          name: '正確坐姿與握筆',
          description: '書法的基本姿勢與毛筆握法',
          exp: 3,
          requiredSkills: [],
          category: '基礎姿勢'
        },
        {
          id: 'calli_stroke_basic',
          name: '基本筆畫',
          description: '橫、豎、撇、捺等基本筆畫練習',
          exp: 4,
          requiredSkills: ['calli_posture_basic'],
          category: '筆畫技法'
        },
        {
          id: 'calli_structure_basic',
          name: '字體結構',
          description: '漢字的間架結構與比例關係',
          exp: 5,
          requiredSkills: ['calli_stroke_basic'],
          category: '字體結構'
        },
        {
          id: 'calli_regular_script',
          name: '楷書基礎',
          description: '楷書的基本寫法與規範',
          exp: 6,
          requiredSkills: ['calli_structure_basic'],
          category: '楷書'
        },
        {
          id: 'calli_tools_knowledge',
          name: '文房四寶',
          description: '筆墨紙硯的選擇與保養',
          exp: 3,
          requiredSkills: [],
          category: '工具知識'
        }
      ]
    },
    {
      name: '書體學習 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'calli_regular_advanced',
          name: '楷書進階',
          description: '楷書的變化與個人風格發展',
          exp: 8,
          requiredSkills: ['calli_regular_script'],
          category: '楷書'
        },
        {
          id: 'calli_running_script',
          name: '行書學習',
          description: '行書的筆法與連帶技巧',
          exp: 10,
          requiredSkills: ['calli_regular_advanced'],
          category: '行書'
        },
        {
          id: 'calli_cursive_basic',
          name: '草書入門',
          description: '草書的基本筆法與簡化原理',
          exp: 12,
          requiredSkills: ['calli_running_script'],
          category: '草書'
        },
        {
          id: 'calli_seal_script',
          name: '篆書學習',
          description: '篆書的古雅風格與筆法特點',
          exp: 10,
          requiredSkills: ['calli_regular_advanced'],
          category: '篆書'
        },
        {
          id: 'calli_clerical_script',
          name: '隸書學習',
          description: '隸書的波磔特色與漢代風格',
          exp: 9,
          requiredSkills: ['calli_regular_advanced'],
          category: '隸書'
        },
        {
          id: 'calli_modern_handwriting',
          name: '現代手寫字',
          description: '現代中文美術字與創意字體',
          exp: 7,
          requiredSkills: ['calli_regular_script'],
          category: '現代書法'
        }
      ]
    },
    {
      name: '書法創作 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'calli_composition_design',
          name: '章法佈局',
          description: '書法作品的整體佈局與空間安排',
          exp: 15,
          requiredSkills: ['calli_running_script'],
          category: '創作技法'
        },
        {
          id: 'calli_poetry_writing',
          name: '詩詞書寫',
          description: '古詩詞的書法表現與意境傳達',
          exp: 14,
          requiredSkills: ['calli_composition_design'],
          category: '文學書法'
        },
        {
          id: 'calli_couplet_creation',
          name: '對聯創作',
          description: '對聯的書寫技巧與創作方法',
          exp: 12,
          requiredSkills: ['calli_composition_design'],
          category: '對聯書法'
        },
        {
          id: 'calli_ink_technique',
          name: '墨法運用',
          description: '濃淡乾濕的墨色變化技巧',
          exp: 16,
          requiredSkills: ['calli_cursive_basic'],
          category: '墨法技巧'
        },
        {
          id: 'calli_seal_carving',
          name: '篆刻基礎',
          description: '印章設計與篆刻技法',
          exp: 18,
          requiredSkills: ['calli_seal_script'],
          category: '篆刻藝術'
        },
        {
          id: 'calli_english_calligraphy',
          name: '英文書法',
          description: '西洋書法與花體字技巧',
          exp: 10,
          requiredSkills: ['calli_modern_handwriting'],
          category: '西洋書法'
        }
      ]
    },
    {
      name: '書法藝術家 (Lv.41-60)',
      requiredLevel: 41,
      skills: [
        {
          id: 'calli_personal_style',
          name: '個人書風',
          description: '建立獨特的個人書法風格',
          exp: 25,
          requiredSkills: ['calli_ink_technique', 'calli_poetry_writing'],
          category: '藝術成就'
        },
        {
          id: 'calli_exhibition',
          name: '書法展覽',
          description: '個人書法作品展的策劃與執行',
          exp: 30,
          requiredSkills: ['calli_personal_style'],
          category: '專業發展'
        },
        {
          id: 'calli_teaching',
          name: '書法教學',
          description: '書法技藝傳承與教學指導',
          exp: 22,
          requiredSkills: ['calli_seal_carving'],
          category: '專業發展'
        },
        {
          id: 'calli_cultural_research',
          name: '書法文化研究',
          description: '書法史論與文化內涵研究',
          exp: 28,
          requiredSkills: ['calli_exhibition'],
          category: '學術研究'
        }
      ]
    }
  ]
}
