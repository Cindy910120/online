// 冥想靜心技能樹
export const meditationSkills = {
  name: '冥想靜心',
  description: '透過冥想與靜心練習，達到內心平靜與專注',
  icon: '🕯️',
  color: '#7c3aed',
  levels: [
    {
      name: '冥想入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'meditation_posture_basic',
          name: '正確坐姿',
          description: '學習冥想的基本姿勢與準備',
          exp: 3,
          requiredSkills: [],
          category: '基礎姿勢'
        },
        {
          id: 'meditation_breathing_focus',
          name: '呼吸專注',
          description: '專注於呼吸的基礎冥想練習',
          exp: 5,
          requiredSkills: ['meditation_posture_basic'],
          category: '專注技巧'
        },
        {
          id: 'meditation_guided_practice',
          name: '引導冥想',
          description: '跟隨引導音頻進行冥想練習',
          exp: 4,
          requiredSkills: ['meditation_breathing_focus'],
          category: '輔助練習'
        },
        {
          id: 'meditation_daily_routine',
          name: '日常練習',
          description: '建立規律的每日冥想習慣',
          exp: 6,
          requiredSkills: ['meditation_guided_practice'],
          category: '習慣養成'
        }
      ]
    },
    {
      name: '冥想進階 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'meditation_mindfulness_body',
          name: '身體掃描',
          description: '全身覺察與身體掃描冥想',
          exp: 10,
          requiredSkills: ['meditation_daily_routine'],
          category: '身體覺察'
        },
        {
          id: 'meditation_loving_kindness',
          name: '慈愛冥想',
          description: '培養慈愛與同理心的冥想練習',
          exp: 12,
          requiredSkills: ['meditation_mindfulness_body'],
          category: '情感修習'
        },
        {
          id: 'meditation_concentration_samatha',
          name: '專注禪修',
          description: '深度專注力的禪修練習',
          exp: 15,
          requiredSkills: ['meditation_loving_kindness'],
          category: '專注修習'
        }
      ]
    },
    {
      name: '冥想專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'meditation_insight_vipassana',
          name: '內觀禪修',
          description: '深入覺察實相的內觀修習',
          exp: 18,
          requiredSkills: ['meditation_concentration_samatha'],
          category: '內觀修習'
        },
        {
          id: 'meditation_retreat_experience',
          name: '禪修營經驗',
          description: '參與長期禪修營的深度體驗',
          exp: 20,
          requiredSkills: ['meditation_insight_vipassana'],
          category: '深度修習'
        },
        {
          id: 'meditation_teaching_guidance',
          name: '冥想指導',
          description: '指導他人冥想練習的能力',
          exp: 22,
          requiredSkills: ['meditation_retreat_experience'],
          category: '指導技能'
        }
      ]
    }
  ]
}
