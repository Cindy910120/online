// 體能健康技能樹
export const fitnessSkills = {
  name: '體能健康',
  description: '身體素質與健康管理技能',
  icon: '🏃',
  color: '#10b981',
  levels: [
    {
      name: '健康基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'fitness_walking',
          name: '健走習慣',
          description: '每日步行運動的建立',
          exp: 5,
          requiredSkills: [],
          category: '有氧運動'
        },
        {
          id: 'fitness_stretching',
          name: '基礎伸展',
          description: '柔軟度訓練與伸展運動',
          exp: 6,
          requiredSkills: [],
          category: '柔軟度'
        },
        {
          id: 'fitness_breathing',
          name: '呼吸練習',
          description: '正確的呼吸方法與技巧',
          exp: 5,
          requiredSkills: [],
          category: '基本技能'
        },
        {
          id: 'fitness_posture',
          name: '姿勢矯正',
          description: '正確的站姿、坐姿與行走',
          exp: 7,
          requiredSkills: ['fitness_stretching'],
          category: '體態調整'
        },
        {
          id: 'fitness_hydration',
          name: '水分補充',
          description: '正確的飲水習慣與時機',
          exp: 4,
          requiredSkills: [],
          category: '營養健康'
        }
      ]
    },
    {
      name: '體能訓練 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'fitness_jogging',
          name: '慢跑訓練',
          description: '有氧耐力的建立與提升',
          exp: 12,
          requiredSkills: ['fitness_walking'],
          category: '有氧運動'
        },
        {
          id: 'fitness_bodyweight',
          name: '徒手訓練',
          description: '伏地挺身、仰臥起坐等基本動作',
          exp: 15,
          requiredSkills: ['fitness_posture'],
          category: '肌力訓練'
        },
        {
          id: 'fitness_yoga_basic',
          name: '基礎瑜珈',
          description: '瑜珈基本體位與呼吸配合',
          exp: 18,
          requiredSkills: ['fitness_breathing', 'fitness_stretching'],
          category: '身心平衡'
        },
        {
          id: 'fitness_nutrition',
          name: '營養規劃',
          description: '均衡飲食與營養素搭配',
          exp: 14,
          requiredSkills: ['fitness_hydration'],
          category: '營養健康'
        },
        {
          id: 'fitness_sleep',
          name: '睡眠管理',
          description: '優質睡眠習慣的建立',
          exp: 16,
          requiredSkills: ['fitness_nutrition'],
          category: '生活習慣'
        }
      ]
    },
    {
      name: '專項發展 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'fitness_weight_training',
          name: '重量訓練',
          description: '槓鈴、啞鈴等器械訓練',
          exp: 25,
          requiredSkills: ['fitness_bodyweight'],
          category: '肌力訓練'
        },
        {
          id: 'fitness_running',
          name: '長跑訓練',
          description: '馬拉松等長距離跑步',
          exp: 28,
          requiredSkills: ['fitness_jogging'],
          category: '耐力運動'
        },
        {
          id: 'fitness_swimming',
          name: '游泳技能',
          description: '各種泳式的學習與精進',
          exp: 30,
          requiredSkills: ['fitness_running'],
          category: '水上運動'
        },
        {
          id: 'fitness_yoga_advanced',
          name: '進階瑜珈',
          description: '高難度體位與冥想練習',
          exp: 32,
          requiredSkills: ['fitness_yoga_basic'],
          category: '身心平衡'
        },
        {
          id: 'fitness_martial_arts',
          name: '武術基礎',
          description: '基本武術動作與技巧',
          exp: 35,
          requiredSkills: ['fitness_weight_training'],
          category: '格鬥技能'
        }
      ]
    },
    {
      name: '運動競技 (Lv.41-55)',
      requiredLevel: 41,
      skills: [
        {
          id: 'fitness_team_sports',
          name: '團體運動',
          description: '籃球、足球等團隊運動',
          exp: 38,
          requiredSkills: ['fitness_martial_arts'],
          category: '團隊運動'
        },
        {
          id: 'fitness_climbing',
          name: '攀岩技能',
          description: '室內外攀岩技巧與安全',
          exp: 42,
          requiredSkills: ['fitness_swimming'],
          category: '極限運動'
        },
        {
          id: 'fitness_cycling',
          name: '自行車運動',
          description: '長距離騎乘與競速技巧',
          exp: 40,
          requiredSkills: ['fitness_running'],
          category: '耐力運動'
        },
        {
          id: 'fitness_dance',
          name: '舞蹈技能',
          description: '各種舞蹈風格的學習',
          exp: 45,
          requiredSkills: ['fitness_yoga_advanced'],
          category: '藝術運動'
        },
        {
          id: 'fitness_crossfit',
          name: 'CrossFit訓練',
          description: '高強度間歇訓練',
          exp: 48,
          requiredSkills: ['fitness_team_sports'],
          category: '綜合訓練'
        }
      ]
    },
    {
      name: '專業指導 (Lv.56-70)',
      requiredLevel: 56,
      skills: [
        {
          id: 'fitness_personal_training',
          name: '個人教練',
          description: '健身指導與訓練計劃設計',
          exp: 50,
          requiredSkills: ['fitness_crossfit'],
          category: '專業指導'
        },
        {
          id: 'fitness_group_fitness',
          name: '團體課程指導',
          description: '團體健身課程的設計與帶領',
          exp: 55,
          requiredSkills: ['fitness_dance'],
          category: '團體指導'
        },
        {
          id: 'fitness_rehabilitation',
          name: '運動復健',
          description: '運動傷害預防與復健',
          exp: 58,
          requiredSkills: ['fitness_personal_training'],
          category: '運動醫學'
        },
        {
          id: 'fitness_nutrition_coaching',
          name: '營養諮詢',
          description: '運動營養與飲食指導',
          exp: 52,
          requiredSkills: ['fitness_group_fitness'],
          category: '營養指導'
        },
        {
          id: 'fitness_sports_psychology',
          name: '運動心理學',
          description: '心理素質訓練與指導',
          exp: 60,
          requiredSkills: ['fitness_rehabilitation'],
          category: '心理訓練'
        }
      ]
    },
    {
      name: '競技專精 (Lv.71-85)',
      requiredLevel: 71,
      skills: [
        {
          id: 'fitness_competition',
          name: '競技參賽',
          description: '參與各類體育競賽',
          exp: 65,
          requiredSkills: ['fitness_sports_psychology'],
          category: '競技表現'
        },
        {
          id: 'fitness_coaching',
          name: '教練技能',
          description: '運動隊伍的訓練與指導',
          exp: 68,
          requiredSkills: ['fitness_competition'],
          category: '教練發展'
        },
        {
          id: 'fitness_sports_science',
          name: '運動科學',
          description: '運動生理學與訓練科學',
          exp: 70,
          requiredSkills: ['fitness_coaching'],
          category: '科學訓練'
        },
        {
          id: 'fitness_biomechanics',
          name: '生物力學',
          description: '動作分析與技術優化',
          exp: 72,
          requiredSkills: ['fitness_sports_science'],
          category: '動作分析'
        },
        {
          id: 'fitness_performance',
          name: '運動表現',
          description: '頂級運動員的表現水準',
          exp: 75,
          requiredSkills: ['fitness_biomechanics'],
          category: '頂尖表現'
        }
      ]
    },
    {
      name: '健康領導 (Lv.86-100)',
      requiredLevel: 86,
      skills: [
        {
          id: 'fitness_wellness_program',
          name: '健康計劃設計',
          description: '企業與社區健康計劃',
          exp: 80,
          requiredSkills: ['fitness_performance'],
          category: '健康推廣'
        },
        {
          id: 'fitness_research',
          name: '運動研究',
          description: '運動科學研究與發表',
          exp: 85,
          requiredSkills: ['fitness_wellness_program'],
          category: '學術研究'
        },
        {
          id: 'fitness_innovation',
          name: '訓練創新',
          description: '新穎訓練方法的開發',
          exp: 88,
          requiredSkills: ['fitness_research'],
          category: '創新發展'
        },
        {
          id: 'fitness_mentorship',
          name: '專業導師',
          description: '培育下一代健身專業人才',
          exp: 92,
          requiredSkills: ['fitness_innovation'],
          category: '人才培育'
        },
        {
          id: 'fitness_legacy',
          name: '健康典範',
          description: '成為健康生活的典範與領導者',
          exp: 100,
          requiredSkills: ['fitness_mentorship'],
          category: '典範建立'
        }
      ]
    }
  ]
}
