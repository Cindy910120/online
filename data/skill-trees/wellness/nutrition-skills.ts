// 營養健康技能樹
export const nutritionSkills = {
  name: '營養健康',
  description: '學習營養知識，培養健康的飲食習慣',
  icon: '🥗',
  color: '#059669',
  levels: [
    {
      name: '營養基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'nutrition_macro_understanding',
          name: '營養素認識',
          description: '了解三大營養素與微量元素',
          exp: 4,
          requiredSkills: [],
          category: '基礎知識'
        },
        {
          id: 'nutrition_food_groups',
          name: '食物分類',
          description: '認識各類食物的營養特性',
          exp: 5,
          requiredSkills: ['nutrition_macro_understanding'],
          category: '食物知識'
        },
        {
          id: 'nutrition_portion_control',
          name: '份量控制',
          description: '學習適當的食物份量與比例',
          exp: 6,
          requiredSkills: ['nutrition_food_groups'],
          category: '飲食管理'
        },
        {
          id: 'nutrition_hydration',
          name: '水分攝取',
          description: '維持適當的每日水分補充',
          exp: 3,
          requiredSkills: [],
          category: '基本需求'
        }
      ]
    },
    {
      name: '營養進階 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'nutrition_meal_planning',
          name: '餐點規劃',
          description: '設計均衡營養的一日三餐',
          exp: 10,
          requiredSkills: ['nutrition_portion_control'],
          category: '餐點設計'
        },
        {
          id: 'nutrition_label_reading',
          name: '營養標示解讀',
          description: '正確解讀食品營養標示',
          exp: 8,
          requiredSkills: ['nutrition_hydration'],
          category: '食品知識'
        },
        {
          id: 'nutrition_supplement_knowledge',
          name: '營養補充品',
          description: '了解營養補充品的使用時機',
          exp: 12,
          requiredSkills: ['nutrition_meal_planning'],
          category: '補充知識'
        }
      ]
    },
    {
      name: '營養專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'nutrition_special_diet',
          name: '特殊飲食',
          description: '設計特定目標的飲食計畫',
          exp: 15,
          requiredSkills: ['nutrition_label_reading'],
          category: '專業設計'
        },
        {
          id: 'nutrition_metabolism_understanding',
          name: '代謝機制',
          description: '深入了解人體營養代謝',
          exp: 18,
          requiredSkills: ['nutrition_supplement_knowledge'],
          category: '深度知識'
        },
        {
          id: 'nutrition_counseling_basic',
          name: '營養諮詢',
          description: '基礎的營養諮詢與建議能力',
          exp: 20,
          requiredSkills: ['nutrition_special_diet'],
          category: '諮詢技能'
        }
      ]
    }
  ]
}
