import type { SkillTree } from './index'

// 建築學類技能樹
export const architectureSkills: SkillTree = {
  name: '建築學',
  description: '建築設計、都市設計、建築技術等專業技能樹',
  icon: '🏛️',
  color: '#8B4513',
  levels: [
    {
      name: '基礎入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'arch-drawing',
          name: '建築繪圖',
          description: '學習手繪和基本建築圖繪製',
          exp: 100,
          requiredSkills: [],
          category: '設計技能'
        },
        {
          id: 'arch-geometry',
          name: '建築幾何',
          description: '掌握空間幾何和比例概念',
          exp: 90,
          requiredSkills: [],
          category: '基礎理論'
        },
        {
          id: 'arch-history',
          name: '建築史',
          description: '了解建築發展歷史和風格',
          exp: 80,
          requiredSkills: [],
          category: '建築文化'
        },
        {
          id: 'arch-materials',
          name: '建築材料',
          description: '認識各種建築材料特性',
          exp: 110,
          requiredSkills: [],
          category: '材料知識'
        }
      ]
    },
    {
      name: '初級發展 (Lv.11-20)',
      requiredLevel: 11,
      skills: [
        {
          id: 'arch-design-basic',
          name: '設計基礎',
          description: '學習建築設計基本原理',
          exp: 200,
          requiredSkills: ['arch-drawing'],
          category: '設計理論'
        },
        {
          id: 'arch-cad',
          name: 'CAD製圖',
          description: '使用AutoCAD繪製建築圖',
          exp: 180,
          requiredSkills: ['arch-drawing'],
          category: '數位工具'
        },
        {
          id: 'arch-structure-basic',
          name: '結構基礎',
          description: '了解建築結構基本概念',
          exp: 170,
          requiredSkills: ['arch-materials'],
          category: '結構知識'
        },
        {
          id: 'arch-space',
          name: '空間設計',
          description: '學習空間組織和流線設計',
          exp: 190,
          requiredSkills: ['arch-geometry'],
          category: '空間設計'
        }
      ]
    },
    {
      name: '中級進階 (Lv.21-35)',
      requiredLevel: 21,
      skills: [
        {
          id: 'arch-residential',
          name: '住宅設計',
          description: '設計住宅建築',
          exp: 300,
          requiredSkills: ['arch-design-basic'],
          category: '建築設計'
        },
        {
          id: 'arch-commercial',
          name: '商業建築',
          description: '設計商業和辦公建築',
          exp: 320,
          requiredSkills: ['arch-space'],
          category: '建築設計'
        },
        {
          id: 'arch-3d-modeling',
          name: '3D建模',
          description: '使用3D軟體建立建築模型',
          exp: 280,
          requiredSkills: ['arch-cad'],
          category: '數位工具'
        },
        {
          id: 'arch-environment',
          name: '環境控制',
          description: '學習建築環境和氣候設計',
          exp: 250,
          requiredSkills: ['arch-structure-basic'],
          category: '環境設計'
        }
      ]
    },
    {
      name: '高級專精 (Lv.36-50)',
      requiredLevel: 36,
      skills: [
        {
          id: 'arch-public',
          name: '公共建築',
          description: '設計公共和文化建築',
          exp: 400,
          requiredSkills: ['arch-commercial'],
          category: '建築設計'
        },
        {
          id: 'arch-urban-design',
          name: '都市設計',
          description: '進行都市規劃和設計',
          exp: 450,
          requiredSkills: ['arch-residential'],
          category: '都市設計'
        },
        {
          id: 'arch-sustainability',
          name: '永續建築',
          description: '設計環保和節能建築',
          exp: 380,
          requiredSkills: ['arch-environment'],
          category: '永續設計'
        },
        {
          id: 'arch-visualization',
          name: '建築視覺化',
          description: '製作建築效果圖和動畫',
          exp: 350,
          requiredSkills: ['arch-3d-modeling'],
          category: '視覺呈現'
        }
      ]
    },
    {
      name: '專業領域 (Lv.51-65)',
      requiredLevel: 51,
      skills: [
        {
          id: 'arch-landmark',
          name: '地標建築',
          description: '設計具有象徵意義的建築',
          exp: 500,
          requiredSkills: ['arch-public'],
          category: '標誌設計'
        },
        {
          id: 'arch-smart-city',
          name: '智慧城市',
          description: '規劃智慧城市建築',
          exp: 550,
          requiredSkills: ['arch-urban-design'],
          category: '智慧設計'
        },
        {
          id: 'arch-green-certification',
          name: '綠建築認證',
          description: '取得綠建築認證資格',
          exp: 480,
          requiredSkills: ['arch-sustainability'],
          category: '專業認證'
        },
        {
          id: 'arch-parametric',
          name: '參數化設計',
          description: '使用參數化設計工具',
          exp: 520,
          requiredSkills: ['arch-visualization'],
          category: '數位設計'
        }
      ]
    },
    {
      name: '專家級別 (Lv.66-75)',
      requiredLevel: 66,
      skills: [
        {
          id: 'arch-innovation',
          name: '建築創新',
          description: '開發創新建築技術',
          exp: 700,
          requiredSkills: ['arch-parametric'],
          category: '技術創新'
        },
        {
          id: 'arch-master-planning',
          name: '總體規劃',
          description: '進行大型區域規劃',
          exp: 650,
          requiredSkills: ['arch-smart-city'],
          category: '規劃設計'
        },
        {
          id: 'arch-restoration',
          name: '古蹟修復',
          description: '修復歷史建築',
          exp: 680,
          requiredSkills: ['arch-green-certification'],
          category: '文化保存'
        }
      ]
    },
    {
      name: '大師境界 (Lv.76-85)',
      requiredLevel: 76,
      skills: [
        {
          id: 'arch-visionary',
          name: '前瞻設計',
          description: '創造未來建築願景',
          exp: 800,
          requiredSkills: ['arch-innovation'],
          category: '願景設計'
        },
        {
          id: 'arch-leadership',
          name: '設計領導',
          description: '領導大型設計團隊',
          exp: 850,
          requiredSkills: ['arch-master-planning'],
          category: '團隊領導'
        }
      ]
    },
    {
      name: '宗師級別 (Lv.86-95)',
      requiredLevel: 86,
      skills: [
        {
          id: 'arch-paradigm',
          name: '典範建立',
          description: '建立建築設計新典範',
          exp: 900,
          requiredSkills: ['arch-visionary'],
          category: '典範創新'
        },
        {
          id: 'arch-global-impact',
          name: '全球影響',
          description: '在全球建築界產生影響',
          exp: 950,
          requiredSkills: ['arch-leadership'],
          category: '國際影響'
        }
      ]
    },
    {
      name: '傳奇境界 (Lv.96-99)',
      requiredLevel: 96,
      skills: [
        {
          id: 'arch-master',
          name: '建築大師',
          description: '成為世界級建築大師',
          exp: 1000,
          requiredSkills: ['arch-paradigm', 'arch-global-impact'],
          category: '大師級別'
        }
      ]
    },
    {
      name: '超凡入聖 (Lv.100)',
      requiredLevel: 100,
      skills: [
        {
          id: 'arch-legend',
          name: '建築傳奇',
          description: '成為建築史上的傳奇人物',
          exp: 1500,
          requiredSkills: ['arch-master'],
          category: '傳奇成就'
        }
      ]
    }
  ]
}
