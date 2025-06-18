// 記憶學習技能樹
export const memorySkills = {
  name: '記憶學習',
  description: '提升記憶力與學習效率的技巧',
  icon: '🧠',
  color: '#7c2d12',
  levels: [
    {
      name: '記憶基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'memory_attention_focus',
          name: '專注力訓練',
          description: '提升專注力與注意力持續時間',
          exp: 4,
          requiredSkills: [],
          category: '專注技能'
        },
        {
          id: 'memory_technique_basic',
          name: '記憶技巧',
          description: '基礎記憶法與助記技巧',
          exp: 5,
          requiredSkills: ['memory_attention_focus'],
          category: '記憶方法'
        },
        {
          id: 'memory_spaced_repetition',
          name: '間隔複習',
          description: '有效的間隔重複學習法',
          exp: 6,
          requiredSkills: ['memory_technique_basic'],
          category: '複習策略'
        },
        {
          id: 'memory_visual_association',
          name: '視覺聯想',
          description: '運用視覺圖像輔助記憶',
          exp: 5,
          requiredSkills: ['memory_technique_basic'],
          category: '聯想技巧'
        }
      ]
    },
    {
      name: '記憶進階 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'memory_palace_method',
          name: '記憶宮殿',
          description: '建構記憶宮殿的進階技巧',
          exp: 12,
          requiredSkills: ['memory_visual_association'],
          category: '進階方法'
        },
        {
          id: 'memory_mind_mapping',
          name: '心智圖法',
          description: '運用心智圖整理與記憶知識',
          exp: 10,
          requiredSkills: ['memory_spaced_repetition'],
          category: '圖像技巧'
        },
        {
          id: 'memory_active_recall',
          name: '主動回憶',
          description: '主動回憶測試與強化記憶',
          exp: 15,
          requiredSkills: ['memory_palace_method'],
          category: '回憶技巧'
        }
      ]
    },
    {
      name: '記憶專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'memory_speed_learning',
          name: '快速學習',
          description: '快速掌握新知識的學習法',
          exp: 18,
          requiredSkills: ['memory_mind_mapping'],
          category: '速學技巧'
        },
        {
          id: 'memory_long_term_retention',
          name: '長期記憶',
          description: '建立持久記憶的策略',
          exp: 20,
          requiredSkills: ['memory_active_recall'],
          category: '持久記憶'
        },
        {
          id: 'memory_teaching_techniques',
          name: '教學記憶',
          description: '教授他人有效記憶技巧',
          exp: 22,
          requiredSkills: ['memory_speed_learning'],
          category: '教學技能'
        }
      ]
    }
  ]
}
