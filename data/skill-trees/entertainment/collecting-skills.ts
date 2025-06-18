// 收藏技能樹
export const collectingSkills = {
  name: '收藏嗜好',
  description: '各種收藏品的鑑賞與管理技能',
  icon: '🎭',
  color: '#dc2626',
  levels: [
    {
      name: '收藏入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'collecting_interest_identification',
          name: '興趣確立',
          description: '確定自己的收藏興趣與方向',
          exp: 3,
          requiredSkills: [],
          category: '方向選擇'
        },
        {
          id: 'collecting_basic_knowledge',
          name: '基礎知識',
          description: '學習收藏品的基本知識',
          exp: 5,
          requiredSkills: ['collecting_interest_identification'],
          category: '知識學習'
        },
        {
          id: 'collecting_condition_assessment',
          name: '品相評估',
          description: '判斷收藏品的品質與狀況',
          exp: 6,
          requiredSkills: ['collecting_basic_knowledge'],
          category: '評估技能'
        },
        {
          id: 'collecting_storage_basic',
          name: '基礎保存',
          description: '正確保存收藏品的方法',
          exp: 4,
          requiredSkills: ['collecting_condition_assessment'],
          category: '保存技能'
        }
      ]
    },
    {
      name: '收藏進階 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'collecting_market_research',
          name: '市場研究',
          description: '了解收藏品的市場價值與趨勢',
          exp: 10,
          requiredSkills: ['collecting_storage_basic'],
          category: '市場知識'
        },
        {
          id: 'collecting_authenticity_verification',
          name: '真偽鑑定',
          description: '識別收藏品的真假與年代',
          exp: 15,
          requiredSkills: ['collecting_market_research'],
          category: '鑑定技能'
        },
        {
          id: 'collecting_network_building',
          name: '人脈建立',
          description: '建立收藏家與商家的人際網絡',
          exp: 12,
          requiredSkills: ['collecting_authenticity_verification'],
          category: '社交技能'
        }
      ]
    },
    {
      name: '收藏專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'collecting_expert_knowledge',
          name: '專家知識',
          description: '成為特定領域的收藏專家',
          exp: 18,
          requiredSkills: ['collecting_network_building'],
          category: '專業知識'
        },
        {
          id: 'collecting_investment_strategy',
          name: '投資策略',
          description: '制定收藏品的投資與交易策略',
          exp: 20,
          requiredSkills: ['collecting_expert_knowledge'],
          category: '投資技能'
        },
        {
          id: 'collecting_exhibition_organization',
          name: '展覽策劃',
          description: '策劃與舉辦收藏品展覽',
          exp: 22,
          requiredSkills: ['collecting_investment_strategy'],
          category: '策展技能'
        }
      ]
    }
  ]
}
