import type { SkillTree } from './index'

// 心理學類技能樹
export const psychologySkills: SkillTree = {
  name: '心理學',
  description: '一般心理學、臨床心理學、諮商心理學等專業技能樹',
  icon: '🧠',
  color: '#9370DB',
  levels: [
    {
      name: '基礎入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'psych-general',
          name: '普通心理學',
          description: '學習心理學基本概念和理論',
          exp: 100,
          requiredSkills: [],
          category: '基礎理論'
        },
        {
          id: 'psych-research-methods',
          name: '心理研究法',
          description: '掌握心理學研究方法',
          exp: 110,
          requiredSkills: [],
          category: '研究方法'
        },
        {
          id: 'psych-statistics',
          name: '心理統計',
          description: '學習心理學統計分析',
          exp: 120,
          requiredSkills: ['psych-research-methods'],
          category: '統計分析'
        },
        {
          id: 'psych-ethics',
          name: '心理倫理',
          description: '了解心理學專業倫理',
          exp: 80,
          requiredSkills: [],
          category: '專業倫理'
        }
      ]
    },
    {
      name: '初級發展 (Lv.11-20)',
      requiredLevel: 11,
      skills: [
        {
          id: 'psych-developmental',
          name: '發展心理學',
          description: '研究人類發展歷程',
          exp: 180,
          requiredSkills: ['psych-general'],
          category: '發展心理'
        },
        {
          id: 'psych-cognitive',
          name: '認知心理學',
          description: '研究認知過程和機制',
          exp: 190,
          requiredSkills: ['psych-general'],
          category: '認知心理'
        },
        {
          id: 'psych-social',
          name: '社會心理學',
          description: '研究社會環境對行為的影響',
          exp: 170,
          requiredSkills: ['psych-general'],
          category: '社會心理'
        },
        {
          id: 'psych-testing',
          name: '心理測驗',
          description: '學習心理測驗編製和使用',
          exp: 200,
          requiredSkills: ['psych-statistics'],
          category: '心理測量'
        }
      ]
    },
    {
      name: '中級進階 (Lv.21-35)',
      requiredLevel: 21,
      skills: [
        {
          id: 'psych-abnormal',
          name: '變態心理學',
          description: '研究心理異常現象',
          exp: 300,
          requiredSkills: ['psych-developmental'],
          category: '臨床心理'
        },
        {
          id: 'psych-personality',
          name: '人格心理學',
          description: '研究個人特質和人格結構',
          exp: 280,
          requiredSkills: ['psych-cognitive'],
          category: '人格心理'
        },
        {
          id: 'psych-counseling-basic',
          name: '諮商技巧',
          description: '學習基本諮商和治療技巧',
          exp: 350,
          requiredSkills: ['psych-social'],
          category: '諮商治療'
        },
        {
          id: 'psych-assessment',
          name: '心理衡鑑',
          description: '進行心理評估和診斷',
          exp: 320,
          requiredSkills: ['psych-testing'],
          category: '心理評估'
        }
      ]
    },
    {
      name: '高級專精 (Lv.36-50)',
      requiredLevel: 36,
      skills: [
        {
          id: 'psych-clinical',
          name: '臨床心理學',
          description: '診斷和治療心理疾病',
          exp: 400,
          requiredSkills: ['psych-abnormal'],
          category: '臨床心理'
        },
        {
          id: 'psych-therapy',
          name: '心理治療',
          description: '掌握各種心理治療方法',
          exp: 450,
          requiredSkills: ['psych-counseling-basic'],
          category: '心理治療'
        },
        {
          id: 'psych-organizational',
          name: '組織心理學',
          description: '應用心理學於組織管理',
          exp: 380,
          requiredSkills: ['psych-personality'],
          category: '應用心理'
        },
        {
          id: 'psych-neuropsychology',
          name: '神經心理學',
          description: '研究大腦與行為關係',
          exp: 420,
          requiredSkills: ['psych-assessment'],
          category: '神經心理'
        }
      ]
    },
    {
      name: '專業領域 (Lv.51-65)',
      requiredLevel: 51,
      skills: [
        {
          id: 'psych-child-clinical',
          name: '兒童臨床',
          description: '專精兒童心理問題治療',
          exp: 500,
          requiredSkills: ['psych-clinical'],
          category: '專科治療'
        },
        {
          id: 'psych-family-therapy',
          name: '家族治療',
          description: '進行家庭系統治療',
          exp: 550,
          requiredSkills: ['psych-therapy'],
          category: '專科治療'
        },
        {
          id: 'psych-industrial',
          name: '工業心理學',
          description: '應用於人力資源和工作場所',
          exp: 480,
          requiredSkills: ['psych-organizational'],
          category: '工業心理'
        },
        {
          id: 'psych-rehabilitation',
          name: '復健心理學',
          description: '協助身心障礙者復健',
          exp: 520,
          requiredSkills: ['psych-neuropsychology'],
          category: '復健心理'
        }
      ]
    },
    {
      name: '專家級別 (Lv.66-75)',
      requiredLevel: 66,
      skills: [
        {
          id: 'psych-supervision',
          name: '督導技能',
          description: '指導其他心理師發展',
          exp: 700,
          requiredSkills: ['psych-family-therapy'],
          category: '專業督導'
        },
        {
          id: 'psych-research-advanced',
          name: '高階研究',
          description: '進行心理學前沿研究',
          exp: 650,
          requiredSkills: ['psych-industrial'],
          category: '學術研究'
        },
        {
          id: 'psych-program-development',
          name: '方案發展',
          description: '開發心理健康服務方案',
          exp: 680,
          requiredSkills: ['psych-rehabilitation'],
          category: '方案設計'
        }
      ]
    },
    {
      name: '大師境界 (Lv.76-85)',
      requiredLevel: 76,
      skills: [
        {
          id: 'psych-theory-development',
          name: '理論發展',
          description: '發展新的心理學理論',
          exp: 800,
          requiredSkills: ['psych-research-advanced'],
          category: '理論創新'
        },
        {
          id: 'psych-policy-influence',
          name: '政策影響',
          description: '影響心理健康政策制定',
          exp: 850,
          requiredSkills: ['psych-program-development'],
          category: '政策影響'
        }
      ]
    },
    {
      name: '宗師級別 (Lv.86-95)',
      requiredLevel: 86,
      skills: [
        {
          id: 'psych-paradigm-shift',
          name: '典範轉移',
          description: '引領心理學典範轉移',
          exp: 900,
          requiredSkills: ['psych-theory-development'],
          category: '典範創新'
        },
        {
          id: 'psych-global-leader',
          name: '國際領導',
          description: '在國際心理學界擔任領導',
          exp: 950,
          requiredSkills: ['psych-policy-influence'],
          category: '國際領導'
        }
      ]
    },
    {
      name: '傳奇境界 (Lv.96-99)',
      requiredLevel: 96,
      skills: [
        {
          id: 'psych-master',
          name: '心理學大師',
          description: '成為心理學領域權威',
          exp: 1000,
          requiredSkills: ['psych-paradigm-shift', 'psych-global-leader'],
          category: '大師級別'
        }
      ]
    },
    {
      name: '超凡入聖 (Lv.100)',
      requiredLevel: 100,
      skills: [
        {
          id: 'psych-legend',
          name: '心理學傳奇',
          description: '改變人類對心理的理解',
          exp: 1500,
          requiredSkills: ['psych-master'],
          category: '傳奇成就'
        }
      ]
    }
  ]
}
