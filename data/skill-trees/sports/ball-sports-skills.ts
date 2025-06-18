// 球類運動技能樹
export const ballSportsSkills = {
  name: '球類運動',
  description: '各種球類運動的技巧與戰術訓練',
  icon: '⚽',
  color: '#dc2626',
  levels: [
    {
      name: '球類基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'ball_hand_eye_coordination',
          name: '手眼協調',
          description: '基礎的手眼協調與反應訓練',
          exp: 4,
          requiredSkills: [],
          category: '基礎協調'
        },
        {
          id: 'ball_basic_catching',
          name: '接球技巧',
          description: '正確的接球姿勢與技巧',
          exp: 5,
          requiredSkills: ['ball_hand_eye_coordination'],
          category: '基本技巧'
        },
        {
          id: 'ball_basic_throwing',
          name: '投球技巧',
          description: '準確的投球動作與力道控制',
          exp: 6,
          requiredSkills: ['ball_basic_catching'],
          category: '基本技巧'
        },
        {
          id: 'ball_sport_rules',
          name: '運動規則',
          description: '了解各種球類運動的基本規則',
          exp: 3,
          requiredSkills: [],
          category: '規則知識'
        }
      ]
    },
    {
      name: '球類進階 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'ball_specialty_choice',
          name: '專項選擇',
          description: '選擇專精的球類運動項目',
          exp: 10,
          requiredSkills: ['ball_basic_throwing'],
          category: '專項發展'
        },
        {
          id: 'ball_tactical_awareness',
          name: '戰術意識',
          description: '理解比賽戰術與場上判斷',
          exp: 12,
          requiredSkills: ['ball_sport_rules'],
          category: '戰術理解'
        },
        {
          id: 'ball_team_coordination',
          name: '團隊配合',
          description: '與隊友的協作與配合技巧',
          exp: 15,
          requiredSkills: ['ball_specialty_choice'],
          category: '團隊技能'
        }
      ]
    },
    {
      name: '球類專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'ball_advanced_techniques',
          name: '高級技巧',
          description: '專項運動的高級技術動作',
          exp: 18,
          requiredSkills: ['ball_tactical_awareness'],
          category: '技術精進'
        },
        {
          id: 'ball_competition_experience',
          name: '比賽經驗',
          description: '正式比賽的參與與經驗累積',
          exp: 20,
          requiredSkills: ['ball_team_coordination'],
          category: '競賽經驗'
        },
        {
          id: 'ball_coaching_basic',
          name: '教練技能',
          description: '指導他人球類運動的基礎能力',
          exp: 22,
          requiredSkills: ['ball_advanced_techniques'],
          category: '指導技能'
        }
      ]
    }
  ]
}
