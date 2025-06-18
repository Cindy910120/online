// 遊戲技能樹
export const gamingSkills = {
  name: '遊戲娛樂',
  description: '各種遊戲的技巧與策略思維培養',
  icon: '🎮',
  color: '#7c3aed',
  levels: [
    {
      name: '遊戲入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'gaming_basic_controls',
          name: '基礎操作',
          description: '掌握各種遊戲平台的基本操作',
          exp: 3,
          requiredSkills: [],
          category: '操作技能'
        },
        {
          id: 'gaming_game_understanding',
          name: '遊戲理解',
          description: '快速理解遊戲規則與機制',
          exp: 4,
          requiredSkills: ['gaming_basic_controls'],
          category: '理解能力'
        },
        {
          id: 'gaming_hand_eye_coordination',
          name: '手眼協調',
          description: '提升遊戲中的反應速度與準確度',
          exp: 6,
          requiredSkills: ['gaming_game_understanding'],
          category: '反應技能'
        },
        {
          id: 'gaming_patience_focus',
          name: '專注耐心',
          description: '培養長時間專注遊戲的能力',
          exp: 5,
          requiredSkills: [],
          category: '心理素質'
        }
      ]
    },
    {
      name: '遊戲進階 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'gaming_strategy_thinking',
          name: '策略思維',
          description: '培養遊戲中的戰略規劃能力',
          exp: 10,
          requiredSkills: ['gaming_hand_eye_coordination'],
          category: '策略技能'
        },
        {
          id: 'gaming_team_coordination',
          name: '團隊協作',
          description: '多人遊戲中的團隊合作技巧',
          exp: 12,
          requiredSkills: ['gaming_patience_focus'],
          category: '社交技能'
        },
        {
          id: 'gaming_genre_mastery',
          name: '類型專精',
          description: '專精某種遊戲類型的技巧',
          exp: 15,
          requiredSkills: ['gaming_strategy_thinking'],
          category: '專精技能'
        }
      ]
    },
    {
      name: '遊戲專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'gaming_competitive_play',
          name: '競技遊戲',
          description: '參與電競比賽的技能',
          exp: 18,
          requiredSkills: ['gaming_team_coordination'],
          category: '競技能力'
        },
        {
          id: 'gaming_content_creation',
          name: '遊戲內容創作',
          description: '製作遊戲相關的影片或直播',
          exp: 20,
          requiredSkills: ['gaming_genre_mastery'],
          category: '創作技能'
        },
        {
          id: 'gaming_game_design',
          name: '遊戲設計',
          description: '理解並設計遊戲機制',
          exp: 22,
          requiredSkills: ['gaming_competitive_play'],
          category: '設計技能'
        }
      ]
    }
  ]
}
