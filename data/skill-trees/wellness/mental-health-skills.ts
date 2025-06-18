// 心理健康技能樹
export const mentalHealthSkills = {
  name: '心理健康',
  description: '培養心理韌性與情緒管理能力',
  icon: '🧘',
  color: '#0891b2',
  levels: [
    {
      name: '心理基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'mental_self_awareness',
          name: '自我覺察',
          description: '認識自己的情緒與思考模式',
          exp: 4,
          requiredSkills: [],
          category: '自我認知'
        },
        {
          id: 'mental_emotion_recognition',
          name: '情緒識別',
          description: '準確識別與命名各種情緒',
          exp: 5,
          requiredSkills: ['mental_self_awareness'],
          category: '情緒技能'
        },
        {
          id: 'mental_breathing_basic',
          name: '呼吸練習',
          description: '基礎呼吸調節與放鬆技巧',
          exp: 3,
          requiredSkills: [],
          category: '放鬆技巧'
        },
        {
          id: 'mental_positive_thinking',
          name: '正向思考',
          description: '培養樂觀與正面的思考習慣',
          exp: 6,
          requiredSkills: ['mental_emotion_recognition'],
          category: '思維模式'
        }
      ]
    },
    {
      name: '心理進階 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'mental_stress_management',
          name: '壓力管理',
          description: '有效應對與管理生活壓力',
          exp: 10,
          requiredSkills: ['mental_breathing_basic'],
          category: '壓力應對'
        },
        {
          id: 'mental_mindfulness',
          name: '正念練習',
          description: '培養當下專注與覺察能力',
          exp: 12,
          requiredSkills: ['mental_positive_thinking'],
          category: '正念技巧'
        },
        {
          id: 'mental_cognitive_restructuring',
          name: '認知重構',
          description: '改變負面思考模式的技巧',
          exp: 15,
          requiredSkills: ['mental_stress_management'],
          category: '認知技巧'
        }
      ]
    },
    {
      name: '心理專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'mental_resilience_building',
          name: '韌性建構',
          description: '培養面對挫折的復原能力',
          exp: 18,
          requiredSkills: ['mental_mindfulness'],
          category: '心理韌性'
        },
        {
          id: 'mental_emotional_intelligence',
          name: '情緒智慧',
          description: '高度的情緒理解與運用能力',
          exp: 20,
          requiredSkills: ['mental_cognitive_restructuring'],
          category: '情緒技能'
        },
        {
          id: 'mental_counseling_basic',
          name: '助人技巧',
          description: '基礎的心理支持與助人技巧',
          exp: 22,
          requiredSkills: ['mental_resilience_building'],
          category: '助人技能'
        }
      ]
    }
  ]
}
