// 身心健康技能樹（擴展版）
export const wellnessSkills = {
  name: '身心健康',
  description: '身心平衡、健康生活與自然療癒技能',
  icon: '🧘‍♀️',
  color: '#059669',
  levels: [
    {
      name: '健康啟蒙 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'wellness_mindful_breathing',
          name: '正念呼吸',
          description: '基礎呼吸覺察與放鬆技巧',
          exp: 4,
          requiredSkills: [],
          category: '冥想基礎'
        },
        {
          id: 'wellness_basic_yoga',
          name: '瑜珈入門',
          description: '基本瑜珈體位與伸展動作',
          exp: 5,
          requiredSkills: [],
          category: '瑜珈練習'
        },
        {
          id: 'wellness_nutrition_awareness',
          name: '營養認知',
          description: '基礎營養知識與健康飲食概念',
          exp: 4,
          requiredSkills: [],
          category: '營養管理'
        },
        {
          id: 'wellness_plant_care_basic',
          name: '植物照護',
          description: '室內植物基礎照護技巧',
          exp: 5,
          requiredSkills: [],
          category: '園藝療癒'
        },
        {
          id: 'wellness_nature_walk',
          name: '自然散步',
          description: '戶外散步與自然觀察習慣',
          exp: 3,
          requiredSkills: [],
          category: '自然療癒'
        },
        {
          id: 'wellness_basic_fitness',
          name: '基礎體能',
          description: '簡單體能活動與身體活動',
          exp: 6,
          requiredSkills: [],
          category: '體能維護'
        }
      ]
    },
    {
      name: '身心調和 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'wellness_meditation',
          name: '靜坐冥想',
          description: '定期冥想練習與心靈沉澱',
          exp: 10,
          requiredSkills: ['wellness_mindful_breathing'],
          category: '冥想深化'
        },
        {
          id: 'wellness_hatha_yoga',
          name: '哈達瑜珈',
          description: '傳統瑜珈體系與體位法練習',
          exp: 12,
          requiredSkills: ['wellness_basic_yoga'],
          category: '瑜珈精進'
        },
        {
          id: 'wellness_vinyasa_yoga',
          name: '流動瑜珈',
          description: '動態瑜珈與呼吸流動配合',
          exp: 14,
          requiredSkills: ['wellness_hatha_yoga'],
          category: '瑜珈精進'
        },
        {
          id: 'wellness_strength_training',
          name: '肌力訓練',
          description: '重量訓練與肌肉發展',
          exp: 15,
          requiredSkills: ['wellness_basic_fitness'],
          category: '體能強化'
        },
        {
          id: 'wellness_meal_planning',
          name: '餐食規劃',
          description: '健康餐食計劃與營養搭配',
          exp: 11,
          requiredSkills: ['wellness_nutrition_awareness'],
          category: '營養實踐'
        },
        {
          id: 'wellness_herbal_knowledge',
          name: '草本知識',
          description: '香草植物認識與運用',
          exp: 13,
          requiredSkills: ['wellness_plant_care_basic'],
          category: '自然療法'
        },
        {
          id: 'wellness_indoor_garden',
          name: '室內園藝',
          description: '室內花園設計與管理',
          exp: 16,
          requiredSkills: ['wellness_plant_care_basic'],
          category: '園藝技能'
        },
        {
          id: 'wellness_forest_bathing',
          name: '森林浴',
          description: '森林療癒與自然冥想',
          exp: 9,
          requiredSkills: ['wellness_nature_walk'],
          category: '自然療癒'
        },
        {
          id: 'wellness_hiking',
          name: '健行登山',
          description: '山林健行與戶外活動',
          exp: 17,
          requiredSkills: ['wellness_nature_walk'],
          category: '戶外運動'
        }
      ]
    },
    {
      name: '深度修練 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'wellness_vipassana',
          name: '內觀冥想',
          description: '深度內觀與自我覺察練習',
          exp: 22,
          requiredSkills: ['wellness_meditation'],
          category: '冥想深化'
        },
        {
          id: 'wellness_mindfulness_daily',
          name: '正念生活',
          description: '將正念融入日常生活各個層面',
          exp: 20,
          requiredSkills: ['wellness_vipassana'],
          category: '生活實踐'
        },
        {
          id: 'wellness_ashtanga_yoga',
          name: '阿斯湯加瑜珈',
          description: '進階動態瑜珈序列練習',
          exp: 25,
          requiredSkills: ['wellness_vinyasa_yoga'],
          category: '瑜珈進階'
        },
        {
          id: 'wellness_yin_yoga',
          name: '陰瑜珈',
          description: '深層伸展與經絡調理',
          exp: 18,
          requiredSkills: ['wellness_vinyasa_yoga'],
          category: '瑜珈療癒'
        },
        {
          id: 'wellness_functional_training',
          name: '功能性訓練',
          description: '日常生活動作模式強化',
          exp: 21,
          requiredSkills: ['wellness_strength_training'],
          category: '運動科學'
        },
        {
          id: 'wellness_sports_nutrition',
          name: '運動營養',
          description: '運動前後營養補充策略',
          exp: 19,
          requiredSkills: ['wellness_meal_planning'],
          category: '專業營養'
        },
        {
          id: 'wellness_superfood_diet',
          name: '超級食物',
          description: '超級食物認識與功能性飲食',
          exp: 17,
          requiredSkills: ['wellness_meal_planning'],
          category: '功能營養'
        },
        {
          id: 'wellness_herbal_medicine',
          name: '草本療法',
          description: '草本植物的藥用價值與應用',
          exp: 23,
          requiredSkills: ['wellness_herbal_knowledge'],
          category: '自然療法'
        },
        {
          id: 'wellness_organic_farming',
          name: '有機種植',
          description: '有機農法與可持續園藝',
          exp: 24,
          requiredSkills: ['wellness_indoor_garden'],
          category: '永續農業'
        },
        {
          id: 'wellness_outdoor_leadership',
          name: '戶外領導',
          description: '戶外活動領導與安全管理',
          exp: 26,
          requiredSkills: ['wellness_hiking'],
          category: '戶外技能'
        },
        {
          id: 'wellness_nature_therapy',
          name: '自然療法',
          description: '運用自然環境進行身心療癒',
          exp: 20,
          requiredSkills: ['wellness_forest_bathing'],
          category: '療癒實踐'
        }
      ]
    },
    {
      name: '專業實踐 (Lv.41-55)',
      requiredLevel: 41,
      skills: [
        {
          id: 'wellness_meditation_teacher',
          name: '冥想指導',
          description: '冥想教學與引導技巧',
          exp: 32,
          requiredSkills: ['wellness_mindfulness_daily'],
          category: '教學技能'
        },
        {
          id: 'wellness_yoga_instructor',
          name: '瑜珈教師',
          description: '瑜珈教學與課程設計',
          exp: 35,
          requiredSkills: ['wellness_ashtanga_yoga', 'wellness_yin_yoga'],
          category: '專業教學'
        },
        {
          id: 'wellness_personal_trainer',
          name: '私人教練',
          description: '個人化健身指導與訓練規劃',
          exp: 38,
          requiredSkills: ['wellness_functional_training'],
          category: '健身專業'
        },
        {
          id: 'wellness_nutritionist',
          name: '營養師',
          description: '專業營養諮詢與飲食指導',
          exp: 40,
          requiredSkills: ['wellness_sports_nutrition', 'wellness_superfood_diet'],
          category: '營養專業'
        },
        {
          id: 'wellness_herbalist',
          name: '草本療法師',
          description: '專業草本治療與自然療法',
          exp: 42,
          requiredSkills: ['wellness_herbal_medicine'],
          category: '自然療法'
        },
        {
          id: 'wellness_permaculture',
          name: '永續農業',
          description: '永續農業設計與生態系統建立',
          exp: 45,
          requiredSkills: ['wellness_organic_farming'],
          category: '生態永續'
        },
        {
          id: 'wellness_outdoor_educator',
          name: '戶外教育',
          description: '戶外教育課程設計與執行',
          exp: 37,
          requiredSkills: ['wellness_outdoor_leadership'],
          category: '教育專業'
        },
        {
          id: 'wellness_therapy_practitioner',
          name: '療癒師',
          description: '整合性身心療癒服務',
          exp: 39,
          requiredSkills: ['wellness_nature_therapy'],
          category: '療癒專業'
        }
      ]
    },
    {
      name: '健康導師 (Lv.56-70)',
      requiredLevel: 56,
      skills: [
        {
          id: 'wellness_retreat_leader',
          name: '靜修營領導',
          description: '身心靈靜修營設計與帶領',
          exp: 50,
          requiredSkills: ['wellness_meditation_teacher', 'wellness_yoga_instructor'],
          category: '整合領導'
        },
        {
          id: 'wellness_holistic_coach',
          name: '整體健康教練',
          description: '全人健康指導與生活方式設計',
          exp: 55,
          requiredSkills: ['wellness_personal_trainer', 'wellness_nutritionist'],
          category: '整合健康'
        },
        {
          id: 'wellness_research',
          name: '健康研究',
          description: '身心健康領域研究與創新',
          exp: 48,
          requiredSkills: ['wellness_herbalist'],
          category: '學術研究'
        },
        {
          id: 'wellness_community_builder',
          name: '健康社群',
          description: '健康生活社群建立與經營',
          exp: 52,
          requiredSkills: ['wellness_permaculture'],
          category: '社群影響'
        },
        {
          id: 'wellness_program_director',
          name: '健康計劃總監',
          description: '大型健康促進計劃管理',
          exp: 46,
          requiredSkills: ['wellness_outdoor_educator'],
          category: '計劃管理'
        },
        {
          id: 'wellness_healing_center',
          name: '療癒中心',
          description: '療癒中心創建與營運',
          exp: 58,
          requiredSkills: ['wellness_therapy_practitioner'],
          category: '事業發展'
        }
      ]
    },
    {
      name: '健康革命 (Lv.71-100)',
      requiredLevel: 71,
      skills: [
        {
          id: 'wellness_global_teacher',
          name: '國際導師',
          description: '成為國際知名的健康導師',
          exp: 65,
          requiredSkills: ['wellness_retreat_leader'],
          category: '國際影響'
        },
        {
          id: 'wellness_movement_leader',
          name: '健康運動領袖',
          description: '引領全球健康生活運動',
          exp: 70,
          requiredSkills: ['wellness_holistic_coach'],
          category: '社會影響'
        },
        {
          id: 'wellness_innovation',
          name: '健康創新',
          description: '革命性健康方法與技術創新',
          exp: 75,
          requiredSkills: ['wellness_research'],
          category: '科技創新'
        },
        {
          id: 'wellness_sustainable_society',
          name: '永續社會',
          description: '建立永續健康的社會模式',
          exp: 80,
          requiredSkills: ['wellness_community_builder'],
          category: '社會變革'
        },
        {
          id: 'wellness_policy_influence',
          name: '政策影響',
          description: '影響健康政策與公共衛生',
          exp: 68,
          requiredSkills: ['wellness_program_director'],
          category: '政策影響'
        },
        {
          id: 'wellness_healing_revolution',
          name: '療癒革命',
          description: '改變醫療保健系統與療癒方式',
          exp: 85,
          requiredSkills: ['wellness_healing_center'],
          category: '醫療變革'
        },
        {
          id: 'wellness_consciousness_shift',
          name: '意識轉變',
          description: '促進人類意識與生活方式的根本轉變',
          exp: 100,
          requiredSkills: ['wellness_global_teacher', 'wellness_movement_leader', 'wellness_innovation'],
          category: '意識革命'
        }
      ]
    }
  ]
}
