// 軟技能樹
export const softSkills = {
  name: '軟技能',
  description: '人際溝通與職場關鍵技能',
  icon: '🤝',
  color: '#8b5cf6',
  levels: [
    {
      name: '個人基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'soft_time_management',
          name: '時間管理',
          description: '學習有效的時間規劃和管理技巧',
          exp: 5,
          requiredSkills: [],
          category: '個人效率'
        },
        {
          id: 'soft_self_awareness',
          name: '自我認知',
          description: '了解自己的優勢與劣勢',
          exp: 6,
          requiredSkills: [],
          category: '自我發展'
        },
        {
          id: 'soft_goal_setting',
          name: '目標設定',
          description: '設定SMART目標與執行計劃',
          exp: 7,
          requiredSkills: ['soft_self_awareness'],
          category: '目標管理'
        },
        {
          id: 'soft_stress_management',
          name: '壓力管理',
          description: '有效處理工作與生活壓力',
          exp: 8,
          requiredSkills: ['soft_time_management'],
          category: '情緒管理'
        }
      ]
    },
    {
      name: '溝通技能 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'soft_active_listening',
          name: '積極傾聽',
          description: '專注聆聽並理解他人觀點',
          exp: 12,
          requiredSkills: ['soft_goal_setting'],
          category: '溝通基礎'
        },
        {
          id: 'soft_verbal_communication',
          name: '口語溝通',
          description: '清晰有效的口語表達',
          exp: 14,
          requiredSkills: ['soft_active_listening'],
          category: '語言表達'
        },
        {
          id: 'soft_non_verbal',
          name: '非語言溝通',
          description: '肢體語言與表情管理',
          exp: 13,
          requiredSkills: ['soft_stress_management'],
          category: '非語言技巧'
        },
        {
          id: 'soft_written_communication',
          name: '書面溝通',
          description: '專業email與文件寫作',
          exp: 16,
          requiredSkills: ['soft_verbal_communication'],
          category: '書面表達'
        },
        {
          id: 'soft_feedback',
          name: '建設性回饋',
          description: '給予與接受有效回饋',
          exp: 15,
          requiredSkills: ['soft_non_verbal'],
          category: '回饋技巧'
        }
      ]
    },
    {
      name: '團隊協作 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'soft_teamwork',
          name: '團隊合作',
          description: '在團隊中有效協作',
          exp: 22,
          requiredSkills: ['soft_written_communication', 'soft_feedback'],
          category: '團隊技能'
        },
        {
          id: 'soft_empathy',
          name: '同理心',
          description: '理解並關懷他人感受',
          exp: 25,
          requiredSkills: ['soft_teamwork'],
          category: '人際理解'
        },
        {
          id: 'soft_conflict_resolution',
          name: '衝突解決',
          description: '化解團隊衝突與分歧',
          exp: 28,
          requiredSkills: ['soft_empathy'],
          category: '衝突管理'
        },
        {
          id: 'soft_collaboration',
          name: '跨部門協作',
          description: '與不同部門有效合作',
          exp: 30,
          requiredSkills: ['soft_conflict_resolution'],
          category: '協作技能'
        },
        {
          id: 'soft_networking',
          name: '人脈建立',
          description: '建立並維護專業人際關係',
          exp: 32,
          requiredSkills: ['soft_collaboration'],
          category: '關係經營'
        }
      ]
    },
    {
      name: '領導基礎 (Lv.41-55)',
      requiredLevel: 41,
      skills: [
        {
          id: 'soft_influence',
          name: '影響力',
          description: '說服與影響他人的能力',
          exp: 35,
          requiredSkills: ['soft_networking'],
          category: '影響技巧'
        },
        {
          id: 'soft_delegation',
          name: '任務委派',
          description: '有效分配工作與責任',
          exp: 38,
          requiredSkills: ['soft_influence'],
          category: '工作分配'
        },
        {
          id: 'soft_motivation',
          name: '激勵技巧',
          description: '激勵團隊成員達成目標',
          exp: 40,
          requiredSkills: ['soft_delegation'],
          category: '團隊激勵'
        },
        {
          id: 'soft_decision_making',
          name: '決策能力',
          description: '在複雜情況下做出正確決策',
          exp: 42,
          requiredSkills: ['soft_motivation'],
          category: '決策技能'
        },
        {
          id: 'soft_coaching',
          name: '教練技能',
          description: '指導與培育團隊成員',
          exp: 45,
          requiredSkills: ['soft_decision_making'],
          category: '人才培育'
        }
      ]
    },
    {
      name: '專業領導 (Lv.56-70)',
      requiredLevel: 56,
      skills: [
        {
          id: 'soft_strategic_thinking',
          name: '策略思維',
          description: '制定長期策略與規劃',
          exp: 50,
          requiredSkills: ['soft_coaching'],
          category: '策略規劃'
        },
        {
          id: 'soft_change_management',
          name: '變革管理',
          description: '領導組織變革與轉型',
          exp: 55,
          requiredSkills: ['soft_strategic_thinking'],
          category: '變革領導'
        },
        {
          id: 'soft_emotional_intelligence',
          name: '情緒智商',
          description: '管理自己與他人的情緒',
          exp: 52,
          requiredSkills: ['soft_strategic_thinking'],
          category: '情緒管理'
        },
        {
          id: 'soft_performance_management',
          name: '績效管理',
          description: '評估與提升團隊績效',
          exp: 58,
          requiredSkills: ['soft_change_management'],
          category: '績效優化'
        },
        {
          id: 'soft_cultural_competence',
          name: '文化敏感度',
          description: '在多元文化環境中領導',
          exp: 60,
          requiredSkills: ['soft_emotional_intelligence'],
          category: '多元管理'
        }
      ]
    },
    {
      name: '高階管理 (Lv.71-85)',
      requiredLevel: 71,
      skills: [
        {
          id: 'soft_visionary_leadership',
          name: '願景領導',
          description: '建立並傳達組織願景',
          exp: 65,
          requiredSkills: ['soft_performance_management', 'soft_cultural_competence'],
          category: '願景管理'
        },
        {
          id: 'soft_crisis_management',
          name: '危機管理',
          description: '在危機中保持冷靜並做出決策',
          exp: 68,
          requiredSkills: ['soft_visionary_leadership'],
          category: '危機應對'
        },
        {
          id: 'soft_innovation_leadership',
          name: '創新領導',
          description: '推動組織創新與變革',
          exp: 70,
          requiredSkills: ['soft_crisis_management'],
          category: '創新管理'
        },
        {
          id: 'soft_stakeholder_management',
          name: '利害關係人管理',
          description: '管理複雜的利害關係人關係',
          exp: 72,
          requiredSkills: ['soft_innovation_leadership'],
          category: '關係管理'
        },
        {
          id: 'soft_global_leadership',
          name: '全球領導力',
          description: '在全球化環境中領導',
          exp: 75,
          requiredSkills: ['soft_stakeholder_management'],
          category: '全球管理'
        }
      ]
    },
    {
      name: '軟技能大師 (Lv.86-100)',
      requiredLevel: 86,
      skills: [
        {
          id: 'soft_thought_leadership',
          name: '思想領導力',
          description: '成為行業思想領袖',
          exp: 85,
          requiredSkills: ['soft_global_leadership'],
          category: '思想領導'
        },
        {
          id: 'soft_organizational_development',
          name: '組織發展',
          description: '設計與優化組織結構',
          exp: 88,
          requiredSkills: ['soft_thought_leadership'],
          category: '組織設計'
        },
        {
          id: 'soft_executive_presence',
          name: '高管風範',
          description: '展現高階主管的領導氣質',
          exp: 90,
          requiredSkills: ['soft_organizational_development'],
          category: '領導風範'
        },
        {
          id: 'soft_legacy_building',
          name: '傳承建立',
          description: '建立持久的領導影響力',
          exp: 95,
          requiredSkills: ['soft_executive_presence'],
          category: '影響傳承'
        },
        {
          id: 'soft_transformational_leadership',
          name: '轉型領導大師',
          description: '引領行業與社會變革',
          exp: 100,
          requiredSkills: ['soft_legacy_building'],
          category: '變革領袖'
        }
      ]
    }
  ]
}
