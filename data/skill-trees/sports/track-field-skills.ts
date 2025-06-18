// 田徑運動技能樹
export const trackFieldSkills = {
  name: '田徑運動',
  description: '跑步、跳躍、投擲等田徑運動技能',
  icon: '🏃',
  color: '#f59e0b',
  levels: [
    {
      name: '基礎體能 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'track_running_posture',
          name: '跑步姿勢',
          description: '正確的跑步姿勢與步伐',
          exp: 4,
          requiredSkills: [],
          category: '基礎技巧'
        },
        {
          id: 'track_breathing_rhythm',
          name: '呼吸節奏',
          description: '跑步時的正確呼吸方式',
          exp: 5,
          requiredSkills: ['track_running_posture'],
          category: '呼吸技巧'
        },
        {
          id: 'track_endurance_basic',
          name: '基礎耐力',
          description: '建立基本的跑步耐力',
          exp: 8,
          requiredSkills: ['track_breathing_rhythm'],
          category: '體能建構'
        },
        {
          id: 'track_warm_up',
          name: '暖身運動',
          description: '運動前的正確暖身與伸展',
          exp: 3,
          requiredSkills: [],
          category: '運動準備'
        }
      ]
    },
    {
      name: '專項技能 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'track_speed_training',
          name: '速度訓練',
          description: '提升跑步速度的專項訓練',
          exp: 12,
          requiredSkills: ['track_endurance_basic'],
          category: '速度發展'
        },
        {
          id: 'track_jumping_basic',
          name: '跳躍技巧',
          description: '立定跳遠、跳高等跳躍技能',
          exp: 10,
          requiredSkills: ['track_warm_up'],
          category: '跳躍技能'
        },
        {
          id: 'track_throwing_basic',
          name: '投擲技巧',
          description: '鉛球、標槍等投擲運動基礎',
          exp: 15,
          requiredSkills: ['track_speed_training'],
          category: '投擲技能'
        }
      ]
    },
    {
      name: '競技專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'track_race_strategy',
          name: '競賽策略',
          description: '比賽中的戰術與配速策略',
          exp: 18,
          requiredSkills: ['track_jumping_basic'],
          category: '競賽技巧'
        },
        {
          id: 'track_record_pursuit',
          name: '成績追求',
          description: '追求個人最佳成績的訓練',
          exp: 20,
          requiredSkills: ['track_throwing_basic'],
          category: '成績提升'
        },
        {
          id: 'track_coaching_knowledge',
          name: '訓練知識',
          description: '運動訓練的科學知識與方法',
          exp: 22,
          requiredSkills: ['track_race_strategy'],
          category: '專業知識'
        }
      ]
    }
  ]
}
