// 旅遊技能樹
export const travelSkills = {
  name: '旅遊探索',
  description: '旅行規劃與探索世界的技能',
  icon: '✈️',
  color: '#0891b2',
  levels: [
    {
      name: '旅遊入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'travel_planning_basic',
          name: '基礎規劃',
          description: '制定簡單的旅行計畫',
          exp: 4,
          requiredSkills: [],
          category: '規劃技能'
        },
        {
          id: 'travel_budget_management',
          name: '預算管理',
          description: '有效控制旅行預算',
          exp: 5,
          requiredSkills: ['travel_planning_basic'],
          category: '財務管理'
        },
        {
          id: 'travel_booking_skills',
          name: '訂房訂票',
          description: '熟練使用各種預訂平台',
          exp: 3,
          requiredSkills: ['travel_budget_management'],
          category: '預訂技能'
        },
        {
          id: 'travel_packing_efficiency',
          name: '有效打包',
          description: '高效率的行李整理技巧',
          exp: 4,
          requiredSkills: [],
          category: '準備技能'
        }
      ]
    },
    {
      name: '旅遊進階 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'travel_cultural_adaptation',
          name: '文化適應',
          description: '快速適應不同文化環境',
          exp: 10,
          requiredSkills: ['travel_booking_skills'],
          category: '文化技能'
        },
        {
          id: 'travel_photography_documentation',
          name: '旅遊記錄',
          description: '用攝影與文字記錄旅行',
          exp: 8,
          requiredSkills: ['travel_packing_efficiency'],
          category: '記錄技能'
        },
        {
          id: 'travel_problem_solving',
          name: '問題解決',
          description: '處理旅行中的突發狀況',
          exp: 12,
          requiredSkills: ['travel_cultural_adaptation'],
          category: '應變能力'
        }
      ]
    },
    {
      name: '旅遊專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'travel_deep_exploration',
          name: '深度探索',
          description: '深入了解當地文化與歷史',
          exp: 15,
          requiredSkills: ['travel_photography_documentation'],
          category: '深度體驗'
        },
        {
          id: 'travel_guide_skills',
          name: '導遊技能',
          description: '為他人規劃與帶領旅行',
          exp: 18,
          requiredSkills: ['travel_problem_solving'],
          category: '指導技能'
        },
        {
          id: 'travel_content_sharing',
          name: '旅遊分享',
          description: '分享旅行經驗與攻略',
          exp: 20,
          requiredSkills: ['travel_deep_exploration'],
          category: '分享技能'
        }
      ]
    }
  ]
}
