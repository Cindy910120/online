import type { SkillTree } from './index'

// 材料工程技能樹
export const materialsEngineeringSkills: SkillTree = {
  name: '材料工程',
  description: '金屬材料、陶瓷材料、高分子材料等專業技能樹',
  icon: '🔬',
  color: '#4682B4',
  levels: [
    {
      name: '基礎入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'materials-chemistry',
          name: '材料化學',
          description: '了解材料的化學組成和性質',
          exp: 100,
          requiredSkills: [],
          category: '基礎科學'
        },
        {
          id: 'materials-physics',
          name: '材料物理',
          description: '理解材料的物理特性',
          exp: 110,
          requiredSkills: [],
          category: '基礎科學'
        },
        {
          id: 'materials-crystal',
          name: '結晶學基礎',
          description: '學習晶體結構和缺陷',
          exp: 120,
          requiredSkills: ['materials-physics'],
          category: '結構科學'
        },
        {
          id: 'materials-safety',
          name: '實驗室安全',
          description: '掌握材料實驗室安全規範',
          exp: 80,
          requiredSkills: [],
          category: '安全知識'
        }
      ]
    },
    {
      name: '初級發展 (Lv.11-20)',
      requiredLevel: 11,
      skills: [
        {
          id: 'materials-metals',
          name: '金屬材料',
          description: '學習金屬材料特性和應用',
          exp: 180,
          requiredSkills: ['materials-crystal'],
          category: '金屬材料'
        },
        {
          id: 'materials-ceramics',
          name: '陶瓷材料',
          description: '了解陶瓷材料結構和性質',
          exp: 170,
          requiredSkills: ['materials-chemistry'],
          category: '陶瓷材料'
        },
        {
          id: 'materials-polymers',
          name: '高分子材料',
          description: '學習高分子材料基礎',
          exp: 160,
          requiredSkills: ['materials-chemistry'],
          category: '高分子材料'
        },
        {
          id: 'materials-testing',
          name: '材料測試',
          description: '掌握基本材料測試方法',
          exp: 200,
          requiredSkills: ['materials-safety'],
          category: '測試技術'
        }
      ]
    },
    {
      name: '中級進階 (Lv.21-35)',
      requiredLevel: 21,
      skills: [
        {
          id: 'materials-heat-treatment',
          name: '熱處理技術',
          description: '掌握金屬熱處理工藝',
          exp: 250,
          requiredSkills: ['materials-metals'],
          category: '加工工藝'
        },
        {
          id: 'materials-composites',
          name: '複合材料',
          description: '學習複合材料設計和製造',
          exp: 280,
          requiredSkills: ['materials-polymers'],
          category: '複合材料'
        },
        {
          id: 'materials-characterization',
          name: '材料表徵',
          description: '使用儀器分析材料結構',
          exp: 300,
          requiredSkills: ['materials-testing'],
          category: '分析技術'
        },
        {
          id: 'materials-processing',
          name: '材料加工',
          description: '學習材料成型和加工技術',
          exp: 270,
          requiredSkills: ['materials-metals'],
          category: '加工技術'
        }
      ]
    },
    {
      name: '高級專精 (Lv.36-50)',
      requiredLevel: 36,
      skills: [
        {
          id: 'materials-alloy-design',
          name: '合金設計',
          description: '設計新型金屬合金',
          exp: 400,
          requiredSkills: ['materials-heat-treatment'],
          category: '材料設計'
        },
        {
          id: 'materials-nano',
          name: '奈米材料',
          description: '研究奈米尺度材料',
          exp: 450,
          requiredSkills: ['materials-characterization'],
          category: '奈米技術'
        },
        {
          id: 'materials-electronic',
          name: '電子材料',
          description: '開發電子器件材料',
          exp: 420,
          requiredSkills: ['materials-ceramics'],
          category: '電子材料'
        },
        {
          id: 'materials-biomaterials',
          name: '生物材料',
          description: '研究生醫應用材料',
          exp: 380,
          requiredSkills: ['materials-composites'],
          category: '生物材料'
        }
      ]
    },
    {
      name: '專業領域 (Lv.51-65)',
      requiredLevel: 51,
      skills: [
        {
          id: 'materials-smart',
          name: '智慧材料',
          description: '開發具有智慧功能的材料',
          exp: 500,
          requiredSkills: ['materials-electronic'],
          category: '功能材料'
        },
        {
          id: 'materials-energy',
          name: '能源材料',
          description: '研究能源存儲和轉換材料',
          exp: 550,
          requiredSkills: ['materials-nano'],
          category: '能源材料'
        },
        {
          id: 'materials-aerospace',
          name: '航太材料',
          description: '開發航太應用材料',
          exp: 600,
          requiredSkills: ['materials-alloy-design'],
          category: '航太材料'
        },
        {
          id: 'materials-surface',
          name: '表面工程',
          description: '改善材料表面性質',
          exp: 480,
          requiredSkills: ['materials-processing'],
          category: '表面技術'
        }
      ]
    },
    {
      name: '專家級別 (Lv.66-75)',
      requiredLevel: 66,
      skills: [
        {
          id: 'materials-computational',
          name: '計算材料學',
          description: '使用計算方法設計材料',
          exp: 700,
          requiredSkills: ['materials-smart'],
          category: '計算科學'
        },
        {
          id: 'materials-additive',
          name: '積層製造',
          description: '3D列印材料和工藝',
          exp: 650,
          requiredSkills: ['materials-aerospace'],
          category: '製造技術'
        },
        {
          id: 'materials-sustainability',
          name: '永續材料',
          description: '開發環保可持續材料',
          exp: 680,
          requiredSkills: ['materials-energy'],
          category: '永續科技'
        }
      ]
    },
    {
      name: '大師境界 (Lv.76-85)',
      requiredLevel: 76,
      skills: [
        {
          id: 'materials-innovation',
          name: '材料創新',
          description: '開創新材料領域',
          exp: 800,
          requiredSkills: ['materials-computational'],
          category: '技術創新'
        },
        {
          id: 'materials-industry',
          name: '產業應用',
          description: '將研究成果產業化',
          exp: 850,
          requiredSkills: ['materials-additive'],
          category: '產業化'
        }
      ]
    },
    {
      name: '宗師級別 (Lv.86-95)',
      requiredLevel: 86,
      skills: [
        {
          id: 'materials-research-leader',
          name: '研究領導',
          description: '領導材料科學研究團隊',
          exp: 900,
          requiredSkills: ['materials-innovation'],
          category: '學術領導'
        },
        {
          id: 'materials-future',
          name: '未來材料',
          description: '探索未來材料技術',
          exp: 950,
          requiredSkills: ['materials-industry'],
          category: '前瞻技術'
        }
      ]
    },
    {
      name: '傳奇境界 (Lv.96-99)',
      requiredLevel: 96,
      skills: [
        {
          id: 'materials-master',
          name: '材料工程大師',
          description: '成為材料工程領域權威',
          exp: 1000,
          requiredSkills: ['materials-research-leader', 'materials-future'],
          category: '大師級別'
        }
      ]
    },
    {
      name: '超凡入聖 (Lv.100)',
      requiredLevel: 100,
      skills: [
        {
          id: 'materials-legend',
          name: '材料工程傳奇',
          description: '改變材料科學發展方向',
          exp: 1500,
          requiredSkills: ['materials-master'],
          category: '傳奇成就'
        }
      ]
    }
  ]
}
