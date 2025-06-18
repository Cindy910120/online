import type { SkillTree } from './index'

// 數學學類技能樹
export const mathematicsSkills: SkillTree = {
  name: '數學',
  description: '純數學、應用數學、統計學等專業技能樹',
  icon: '📐',
  color: '#FF6347',
  levels: [
    {
      name: '基礎入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'math-calculus',
          name: '微積分',
          description: '掌握微分和積分基本概念',
          exp: 100,
          requiredSkills: [],
          category: '分析學'
        },
        {
          id: 'math-linear-algebra',
          name: '線性代數',
          description: '學習向量、矩陣和線性變換',
          exp: 110,
          requiredSkills: [],
          category: '代數學'
        },
        {
          id: 'math-discrete',
          name: '離散數學',
          description: '學習組合、圖論等離散結構',
          exp: 90,
          requiredSkills: [],
          category: '離散數學'
        },
        {
          id: 'math-logic',
          name: '數理邏輯',
          description: '掌握邏輯推理和證明方法',
          exp: 120,
          requiredSkills: [],
          category: '邏輯學'
        }
      ]
    },
    {
      name: '初級發展 (Lv.11-20)',
      requiredLevel: 11,
      skills: [
        {
          id: 'math-real-analysis',
          name: '實分析',
          description: '深入研究實數函數理論',
          exp: 200,
          requiredSkills: ['math-calculus'],
          category: '分析學'
        },
        {
          id: 'math-abstract-algebra',
          name: '抽象代數',
          description: '學習群、環、體等代數結構',
          exp: 180,
          requiredSkills: ['math-linear-algebra'],
          category: '代數學'
        },
        {
          id: 'math-probability',
          name: '機率論',
          description: '掌握機率理論基礎',
          exp: 170,
          requiredSkills: ['math-calculus'],
          category: '機率統計'
        },
        {
          id: 'math-geometry',
          name: '幾何學',
          description: '學習歐幾里得幾何和解析幾何',
          exp: 160,
          requiredSkills: ['math-linear-algebra'],
          category: '幾何學'
        }
      ]
    },
    {
      name: '中級進階 (Lv.21-35)',
      requiredLevel: 21,
      skills: [
        {
          id: 'math-complex-analysis',
          name: '複分析',
          description: '研究複數函數理論',
          exp: 300,
          requiredSkills: ['math-real-analysis'],
          category: '分析學'
        },
        {
          id: 'math-differential-equations',
          name: '微分方程',
          description: '求解常微分和偏微分方程',
          exp: 280,
          requiredSkills: ['math-real-analysis'],
          category: '應用數學'
        },
        {
          id: 'math-statistics',
          name: '數理統計',
          description: '學習統計推論和假設檢定',
          exp: 250,
          requiredSkills: ['math-probability'],
          category: '機率統計'
        },
        {
          id: 'math-topology',
          name: '拓撲學',
          description: '研究空間的連續性質',
          exp: 320,
          requiredSkills: ['math-geometry'],
          category: '拓撲學'
        }
      ]
    },
    {
      name: '高級專精 (Lv.36-50)',
      requiredLevel: 36,
      skills: [
        {
          id: 'math-functional-analysis',
          name: '泛函分析',
          description: '研究無限維向量空間',
          exp: 400,
          requiredSkills: ['math-complex-analysis'],
          category: '分析學'
        },
        {
          id: 'math-number-theory',
          name: '數論',
          description: '研究整數的性質',
          exp: 380,
          requiredSkills: ['math-abstract-algebra'],
          category: '數論'
        },
        {
          id: 'math-numerical-analysis',
          name: '數值分析',
          description: '開發數值計算方法',
          exp: 350,
          requiredSkills: ['math-differential-equations'],
          category: '計算數學'
        },
        {
          id: 'math-algebraic-topology',
          name: '代數拓撲',
          description: '用代數方法研究拓撲空間',
          exp: 450,
          requiredSkills: ['math-topology'],
          category: '拓撲學'
        }
      ]
    },
    {
      name: '專業領域 (Lv.51-65)',
      requiredLevel: 51,
      skills: [
        {
          id: 'math-differential-geometry',
          name: '微分幾何',
          description: '用微積分方法研究幾何',
          exp: 500,
          requiredSkills: ['math-functional-analysis'],
          category: '幾何學'
        },
        {
          id: 'math-algebraic-geometry',
          name: '代數幾何',
          description: '用代數方法研究幾何對象',
          exp: 550,
          requiredSkills: ['math-number-theory'],
          category: '幾何學'
        },
        {
          id: 'math-mathematical-physics',
          name: '數學物理',
          description: '應用數學解決物理問題',
          exp: 480,
          requiredSkills: ['math-numerical-analysis'],
          category: '應用數學'
        },
        {
          id: 'math-stochastic-processes',
          name: '隨機過程',
          description: '研究隨機現象的時間演化',
          exp: 520,
          requiredSkills: ['math-statistics'],
          category: '機率論'
        }
      ]
    },
    {
      name: '專家級別 (Lv.66-75)',
      requiredLevel: 66,
      skills: [
        {
          id: 'math-category-theory',
          name: '範疇論',
          description: '研究數學結構之間的關係',
          exp: 700,
          requiredSkills: ['math-algebraic-topology'],
          category: '基礎數學'
        },
        {
          id: 'math-harmonic-analysis',
          name: '調和分析',
          description: '研究函數的頻域性質',
          exp: 650,
          requiredSkills: ['math-differential-geometry'],
          category: '分析學'
        },
        {
          id: 'math-computational',
          name: '計算數學',
          description: '開發高效數值算法',
          exp: 680,
          requiredSkills: ['math-mathematical-physics'],
          category: '計算數學'
        }
      ]
    },
    {
      name: '大師境界 (Lv.76-85)',
      requiredLevel: 76,
      skills: [
        {
          id: 'math-research',
          name: '數學研究',
          description: '進行原創數學研究',
          exp: 800,
          requiredSkills: ['math-category-theory'],
          category: '學術研究'
        },
        {
          id: 'math-interdisciplinary',
          name: '跨領域應用',
          description: '將數學應用於其他領域',
          exp: 850,
          requiredSkills: ['math-computational'],
          category: '應用數學'
        }
      ]
    },
    {
      name: '宗師級別 (Lv.86-95)',
      requiredLevel: 86,
      skills: [
        {
          id: 'math-conjecture',
          name: '猜想證明',
          description: '證明重要數學猜想',
          exp: 900,
          requiredSkills: ['math-research'],
          category: '理論突破'
        },
        {
          id: 'math-theory-development',
          name: '理論發展',
          description: '建立新的數學理論',
          exp: 950,
          requiredSkills: ['math-interdisciplinary'],
          category: '理論創新'
        }
      ]
    },
    {
      name: '傳奇境界 (Lv.96-99)',
      requiredLevel: 96,
      skills: [
        {
          id: 'math-master',
          name: '數學大師',
          description: '成為數學領域權威學者',
          exp: 1000,
          requiredSkills: ['math-conjecture', 'math-theory-development'],
          category: '大師級別'
        }
      ]
    },
    {
      name: '超凡入聖 (Lv.100)',
      requiredLevel: 100,
      skills: [
        {
          id: 'math-legend',
          name: '數學傳奇',
          description: '改變數學發展歷程',
          exp: 1500,
          requiredSkills: ['math-master'],
          category: '傳奇成就'
        }
      ]
    }
  ]
}
