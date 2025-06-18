import type { SkillTree } from './index'

// 土木工程技能樹
export const civilEngineeringSkills: SkillTree = {
  name: '土木工程',
  description: '結構工程、大地工程、水利工程等專業技能樹',
  icon: '🏗️',
  color: '#8B4513',
  levels: [
    {
      name: '基礎入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'civil-basic-math',
          name: '工程數學',
          description: '掌握土木工程所需的數學基礎',
          exp: 100,
          requiredSkills: [],
          category: '基礎理論'
        },
        {
          id: 'civil-physics',
          name: '力學原理',
          description: '理解靜力學和動力學基本原理',
          exp: 120,
          requiredSkills: ['civil-basic-math'],
          category: '基礎理論'
        },
        {
          id: 'civil-materials',
          name: '材料認識',
          description: '了解常用建築材料特性',
          exp: 110,
          requiredSkills: [],
          category: '材料知識'
        },
        {
          id: 'civil-drawing',
          name: '工程製圖',
          description: '學習基本工程圖繪製',
          exp: 150,
          requiredSkills: [],
          category: '設計技能'
        }
      ]
    },
    {
      name: '初級發展 (Lv.11-20)',
      requiredLevel: 11,
      skills: [
        {
          id: 'civil-mechanics',
          name: '材料力學',
          description: '分析材料在力作用下的行為',
          exp: 200,
          requiredSkills: ['civil-physics'],
          category: '結構分析'
        },
        {
          id: 'civil-surveying',
          name: '工程測量',
          description: '掌握測量儀器使用和測量技術',
          exp: 180,
          requiredSkills: ['civil-drawing'],
          category: '測量技能'
        },
        {
          id: 'civil-concrete',
          name: '混凝土技術',
          description: '學習混凝土配比和施工',
          exp: 170,
          requiredSkills: ['civil-materials'],
          category: '材料技術'
        },
        {
          id: 'civil-cad',
          name: 'AutoCAD基礎',
          description: '使用AutoCAD繪製工程圖',
          exp: 220,
          requiredSkills: ['civil-drawing'],
          category: '設計工具'
        }
      ]
    },
    {
      name: '中級進階 (Lv.21-35)',
      requiredLevel: 21,
      skills: [
        {
          id: 'civil-structural',
          name: '結構分析',
          description: '分析結構物受力和變形',
          exp: 300,
          requiredSkills: ['civil-mechanics'],
          category: '結構工程'
        },
        {
          id: 'civil-foundation',
          name: '基礎工程',
          description: '設計和施工建築基礎',
          exp: 280,
          requiredSkills: ['civil-mechanics'],
          category: '大地工程'
        },
        {
          id: 'civil-hydraulics',
          name: '水力學',
          description: '研究水流運動規律',
          exp: 250,
          requiredSkills: ['civil-physics'],
          category: '水利工程'
        },
        {
          id: 'civil-construction',
          name: '施工技術',
          description: '學習施工方法和管理',
          exp: 320,
          requiredSkills: ['civil-concrete'],
          category: '施工管理'
        }
      ]
    },
    {
      name: '高級專精 (Lv.36-50)',
      requiredLevel: 36,
      skills: [
        {
          id: 'civil-steel',
          name: '鋼結構設計',
          description: '設計鋼構建築結構',
          exp: 400,
          requiredSkills: ['civil-structural'],
          category: '結構設計'
        },
        {
          id: 'civil-bridge',
          name: '橋樑工程',
          description: '設計和建造橋樑',
          exp: 450,
          requiredSkills: ['civil-structural'],
          category: '橋樑工程'
        },
        {
          id: 'civil-transportation',
          name: '交通工程',
          description: '規劃和設計交通系統',
          exp: 380,
          requiredSkills: ['civil-surveying'],
          category: '交通工程'
        },
        {
          id: 'civil-water-supply',
          name: '給排水系統',
          description: '設計建築給排水系統',
          exp: 350,
          requiredSkills: ['civil-hydraulics'],
          category: '水利工程'
        }
      ]
    },
    {
      name: '專業領域 (Lv.51-65)',
      requiredLevel: 51,
      skills: [
        {
          id: 'civil-earthquake',
          name: '耐震設計',
          description: '設計抗震建築結構',
          exp: 500,
          requiredSkills: ['civil-steel'],
          category: '結構工程'
        },
        {
          id: 'civil-highrise',
          name: '高層建築',
          description: '設計高層建築結構',
          exp: 550,
          requiredSkills: ['civil-steel'],
          category: '結構工程'
        },
        {
          id: 'civil-dam',
          name: '水壩工程',
          description: '設計和建造水壩',
          exp: 600,
          requiredSkills: ['civil-water-supply'],
          category: '水利工程'
        },
        {
          id: 'civil-tunnel',
          name: '隧道工程',
          description: '設計和建造隧道',
          exp: 580,
          requiredSkills: ['civil-foundation'],
          category: '大地工程'
        }
      ]
    },
    {
      name: '專家級別 (Lv.66-75)',
      requiredLevel: 66,
      skills: [
        {
          id: 'civil-smart-city',
          name: '智慧城市',
          description: '規劃智慧城市基礎設施',
          exp: 700,
          requiredSkills: ['civil-transportation'],
          category: '都市規劃'
        },
        {
          id: 'civil-green-building',
          name: '綠建築設計',
          description: '設計環保節能建築',
          exp: 650,
          requiredSkills: ['civil-highrise'],
          category: '永續設計'
        },
        {
          id: 'civil-bim',
          name: 'BIM技術',
          description: '使用BIM進行建築資訊模型',
          exp: 720,
          requiredSkills: ['civil-cad'],
          category: '數位工具'
        }
      ]
    },
    {
      name: '大師境界 (Lv.76-85)',
      requiredLevel: 76,
      skills: [
        {
          id: 'civil-megaproject',
          name: '大型工程管理',
          description: '管理大型基礎建設專案',
          exp: 800,
          requiredSkills: ['civil-smart-city'],
          category: '專案管理'
        },
        {
          id: 'civil-innovation',
          name: '工程創新',
          description: '開發創新工程技術',
          exp: 850,
          requiredSkills: ['civil-bim'],
          category: '技術創新'
        }
      ]
    },
    {
      name: '宗師級別 (Lv.86-95)',
      requiredLevel: 86,
      skills: [
        {
          id: 'civil-research',
          name: '工程研究',
          description: '進行土木工程前沿研究',
          exp: 900,
          requiredSkills: ['civil-innovation'],
          category: '學術研究'
        },
        {
          id: 'civil-consulting',
          name: '工程顧問',
          description: '提供專業工程諮詢服務',
          exp: 950,
          requiredSkills: ['civil-megaproject'],
          category: '專業服務'
        }
      ]
    },
    {
      name: '傳奇境界 (Lv.96-99)',
      requiredLevel: 96,
      skills: [
        {
          id: 'civil-master',
          name: '土木工程大師',
          description: '成為土木工程領域權威',
          exp: 1000,
          requiredSkills: ['civil-research', 'civil-consulting'],
          category: '大師級別'
        }
      ]
    },
    {
      name: '超凡入聖 (Lv.100)',
      requiredLevel: 100,
      skills: [
        {
          id: 'civil-legend',
          name: '土木工程傳奇',
          description: '開創土木工程新時代',
          exp: 1500,
          requiredSkills: ['civil-master'],
          category: '傳奇成就'
        }
      ]
    }
  ]
}
