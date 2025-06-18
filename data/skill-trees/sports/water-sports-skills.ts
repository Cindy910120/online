// 水上運動技能樹
export const waterSportsSkills = {
  name: '水上運動',
  description: '游泳與各種水上活動的技能訓練',
  icon: '🏊',
  color: '#0891b2',
  levels: [
    {
      name: '水性培養 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'water_safety_basic',
          name: '水中安全',
          description: '基本的水中安全知識與自救',
          exp: 5,
          requiredSkills: [],
          category: '安全知識'
        },
        {
          id: 'water_floating_basic',
          name: '漂浮技巧',
          description: '學會在水中放鬆漂浮',
          exp: 6,
          requiredSkills: ['water_safety_basic'],
          category: '基本水性'
        },
        {
          id: 'water_breathing_control',
          name: '呼吸控制',
          description: '水中正確的呼吸節奏與技巧',
          exp: 7,
          requiredSkills: ['water_floating_basic'],
          category: '呼吸技巧'
        },
        {
          id: 'water_basic_kicks',
          name: '基本踢水',
          description: '各種基本踢水動作',
          exp: 8,
          requiredSkills: ['water_breathing_control'],
          category: '動作技巧'
        }
      ]
    },
    {
      name: '游泳技能 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'water_freestyle_basic',
          name: '自由式入門',
          description: '學習自由式的基本動作',
          exp: 12,
          requiredSkills: ['water_basic_kicks'],
          category: '泳式學習'
        },
        {
          id: 'water_backstroke_basic',
          name: '仰式入門',
          description: '學習仰式的基本動作',
          exp: 12,
          requiredSkills: ['water_freestyle_basic'],
          category: '泳式學習'
        },
        {
          id: 'water_endurance_training',
          name: '游泳耐力',
          description: '提升游泳的持續距離與時間',
          exp: 15,
          requiredSkills: ['water_backstroke_basic'],
          category: '體能訓練'
        }
      ]
    },
    {
      name: '水上專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'water_advanced_strokes',
          name: '進階泳式',
          description: '蛙式、蝶式等進階游泳技巧',
          exp: 18,
          requiredSkills: ['water_endurance_training'],
          category: '技術進階'
        },
        {
          id: 'water_competitive_swimming',
          name: '競技游泳',
          description: '參與游泳比賽的技能',
          exp: 20,
          requiredSkills: ['water_advanced_strokes'],
          category: '競技能力'
        },
        {
          id: 'water_water_sports',
          name: '水上活動',
          description: '衝浪、划船等其他水上運動',
          exp: 22,
          requiredSkills: ['water_competitive_swimming'],
          category: '多元發展'
        }
      ]
    }
  ]
}
