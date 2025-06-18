import type { SkillTree } from './index'

// 企業管理學類技能樹
export const businessAdministrationSkills: SkillTree = {
  name: '企業管理',
  description: '策略管理、組織行為、營運管理等專業技能樹',
  icon: '💼',
  color: '#2E8B57',
  levels: [
    {
      name: '基礎入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'business-principles',
          name: '管理學原理',
          description: '學習管理學基本概念和理論',
          exp: 100,
          requiredSkills: [],
          category: '管理基礎'
        },
        {
          id: 'business-economics',
          name: '經濟學基礎',
          description: '了解經濟學基本原理',
          exp: 110,
          requiredSkills: [],
          category: '經濟基礎'
        },
        {
          id: 'business-accounting',
          name: '會計學基礎',
          description: '掌握基本會計概念',
          exp: 120,
          requiredSkills: [],
          category: '財務基礎'
        },
        {
          id: 'business-communication',
          name: '商業溝通',
          description: '學習有效的商業溝通技巧',
          exp: 90,
          requiredSkills: [],
          category: '溝通技能'
        }
      ]
    },
    {
      name: '初級發展 (Lv.11-20)',
      requiredLevel: 11,
      skills: [
        {
          id: 'business-organization',
          name: '組織行為',
          description: '研究組織中的人員行為',
          exp: 180,
          requiredSkills: ['business-principles'],
          category: '組織管理'
        },
        {
          id: 'business-marketing-basic',
          name: '行銷學基礎',
          description: '學習行銷基本概念',
          exp: 170,
          requiredSkills: ['business-economics'],
          category: '行銷管理'
        },
        {
          id: 'business-finance',
          name: '財務管理',
          description: '掌握企業財務管理',
          exp: 200,
          requiredSkills: ['business-accounting'],
          category: '財務管理'
        },
        {
          id: 'business-leadership',
          name: '領導統御',
          description: '培養領導能力',
          exp: 160,
          requiredSkills: ['business-communication'],
          category: '領導技能'
        }
      ]
    },
    {
      name: '中級進階 (Lv.21-35)',
      requiredLevel: 21,
      skills: [
        {
          id: 'business-strategy',
          name: '策略管理',
          description: '制定和執行企業策略',
          exp: 300,
          requiredSkills: ['business-organization'],
          category: '策略規劃'
        },
        {
          id: 'business-operations',
          name: '營運管理',
          description: '優化企業營運流程',
          exp: 280,
          requiredSkills: ['business-marketing-basic'],
          category: '營運管理'
        },
        {
          id: 'business-hr',
          name: '人力資源管理',
          description: '管理企業人力資源',
          exp: 320,
          requiredSkills: ['business-leadership'],
          category: '人資管理'
        },
        {
          id: 'business-analysis',
          name: '商業分析',
          description: '分析商業數據和趨勢',
          exp: 250,
          requiredSkills: ['business-finance'],
          category: '數據分析'
        }
      ]
    },
    {
      name: '高級專精 (Lv.36-50)',
      requiredLevel: 36,
      skills: [
        {
          id: 'business-innovation',
          name: '創新管理',
          description: '推動企業創新和變革',
          exp: 400,
          requiredSkills: ['business-strategy'],
          category: '創新管理'
        },
        {
          id: 'business-quality',
          name: '品質管理',
          description: '建立品質管理系統',
          exp: 380,
          requiredSkills: ['business-operations'],
          category: '品質管理'
        },
        {
          id: 'business-talent',
          name: '人才發展',
          description: '規劃員工發展和培訓',
          exp: 420,
          requiredSkills: ['business-hr'],
          category: '人才管理'
        },
        {
          id: 'business-intelligence',
          name: '商業智慧',
          description: '運用BI工具進行決策',
          exp: 350,
          requiredSkills: ['business-analysis'],
          category: '商業智慧'
        }
      ]
    },
    {
      name: '專業領域 (Lv.51-65)',
      requiredLevel: 51,
      skills: [
        {
          id: 'business-transformation',
          name: '企業轉型',
          description: '領導企業數位轉型',
          exp: 500,
          requiredSkills: ['business-innovation'],
          category: '企業轉型'
        },
        {
          id: 'business-lean',
          name: '精實管理',
          description: '實施精實生產和管理',
          exp: 480,
          requiredSkills: ['business-quality'],
          category: '精實管理'
        },
        {
          id: 'business-agile',
          name: '敏捷管理',
          description: '採用敏捷管理方法',
          exp: 520,
          requiredSkills: ['business-talent'],
          category: '敏捷管理'
        },
        {
          id: 'business-data-driven',
          name: '數據驅動決策',
          description: '建立數據驅動的決策文化',
          exp: 550,
          requiredSkills: ['business-intelligence'],
          category: '數據決策'
        }
      ]
    },
    {
      name: '專家級別 (Lv.66-75)',
      requiredLevel: 66,
      skills: [
        {
          id: 'business-ecosystem',
          name: '生態系統管理',
          description: '管理商業生態系統',
          exp: 700,
          requiredSkills: ['business-transformation'],
          category: '生態管理'
        },
        {
          id: 'business-consulting',
          name: '管理顧問',
          description: '提供專業管理諮詢',
          exp: 650,
          requiredSkills: ['business-lean'],
          category: '顧問服務'
        },
        {
          id: 'business-platform',
          name: '平台策略',
          description: '開發平台商業模式',
          exp: 680,
          requiredSkills: ['business-data-driven'],
          category: '平台策略'
        }
      ]
    },
    {
      name: '大師境界 (Lv.76-85)',
      requiredLevel: 76,
      skills: [
        {
          id: 'business-visionary',
          name: '願景領導',
          description: '建立企業長期願景',
          exp: 800,
          requiredSkills: ['business-ecosystem'],
          category: '願景領導'
        },
        {
          id: 'business-thought-leadership',
          name: '思想領導',
          description: '在管理領域建立思想領導力',
          exp: 850,
          requiredSkills: ['business-consulting'],
          category: '思想領導'
        }
      ]
    },
    {
      name: '宗師級別 (Lv.86-95)',
      requiredLevel: 86,
      skills: [
        {
          id: 'business-industry-shaper',
          name: '產業塑造者',
          description: '重塑整個產業格局',
          exp: 900,
          requiredSkills: ['business-visionary'],
          category: '產業影響'
        },
        {
          id: 'business-global-impact',
          name: '全球影響力',
          description: '在全球商業界產生重大影響',
          exp: 950,
          requiredSkills: ['business-thought-leadership'],
          category: '全球影響'
        }
      ]
    },
    {
      name: '傳奇境界 (Lv.96-99)',
      requiredLevel: 96,
      skills: [
        {
          id: 'business-master',
          name: '管理大師',
          description: '成為世界級管理大師',
          exp: 1000,
          requiredSkills: ['business-industry-shaper', 'business-global-impact'],
          category: '大師級別'
        }
      ]
    },
    {
      name: '超凡入聖 (Lv.100)',
      requiredLevel: 100,
      skills: [
        {
          id: 'business-legend',
          name: '管理傳奇',
          description: '改變管理理論和實務',
          exp: 1500,
          requiredSkills: ['business-master'],
          category: '傳奇成就'
        }
      ]
    }
  ]
}
