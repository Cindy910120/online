// 運動技能樹
export const sportsSkills = {
  name: '運動競技',
  description: '各類運動技能與競技能力培養',
  icon: '⚽',
  color: '#dc2626',
  levels: [
    {
      name: '運動入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'sports_basic_coordination',
          name: '身體協調',
          description: '基礎身體協調性與平衡感',
          exp: 4,
          requiredSkills: [],
          category: '基礎能力'
        },
        {
          id: 'sports_running_basic',
          name: '跑步基礎',
          description: '正確跑步姿勢與呼吸技巧',
          exp: 5,
          requiredSkills: [],
          category: '有氧運動'
        },
        {
          id: 'sports_basketball_basic',
          name: '籃球入門',
          description: '籃球基本運球與投籃動作',
          exp: 6,
          requiredSkills: ['sports_basic_coordination'],
          category: '球類運動'
        },
        {
          id: 'sports_football_basic',
          name: '足球入門',
          description: '足球基本控球與傳球技巧',
          exp: 6,
          requiredSkills: ['sports_basic_coordination'],
          category: '球類運動'
        },
        {
          id: 'sports_swimming_basic',
          name: '游泳基礎',
          description: '水性訓練與基本泳姿',
          exp: 8,
          requiredSkills: [],
          category: '水上運動'
        },
        {
          id: 'sports_tennis_basic',
          name: '網球入門',
          description: '網球基本握拍與正手揮拍',
          exp: 7,
          requiredSkills: ['sports_basic_coordination'],
          category: '球類運動'
        },
        {
          id: 'sports_tabletennis_basic',
          name: '桌球入門',
          description: '桌球基本握拍與球感訓練',
          exp: 5,
          requiredSkills: ['sports_basic_coordination'],
          category: '球類運動'
        },
        {
          id: 'sports_badminton_basic',
          name: '羽毛球入門',
          description: '羽毛球基本握拍與發球技巧',
          exp: 6,
          requiredSkills: ['sports_basic_coordination'],
          category: '球類運動'
        },
        {
          id: 'sports_volleyball_basic',
          name: '排球入門',
          description: '排球基本托球與發球動作',
          exp: 6,
          requiredSkills: ['sports_basic_coordination'],
          category: '球類運動'
        },
        {
          id: 'sports_cycling_basic',
          name: '自行車騎乘',
          description: '自行車基礎騎乘與平衡',
          exp: 5,
          requiredSkills: ['sports_basic_coordination'],
          category: '自行車運動'
        }
      ]
    },
    {
      name: '技能發展 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'sports_tennis_basic',
          name: '網球技巧',
          description: '網球正手、反手與發球基礎',
          exp: 12,
          requiredSkills: ['sports_basic_coordination'],
          category: '球拍運動'
        },
        {
          id: 'sports_table_tennis',
          name: '桌球技術',
          description: '桌球基本技術與戰術',
          exp: 10,
          requiredSkills: ['sports_basic_coordination'],
          category: '球拍運動'
        },
        {
          id: 'sports_basketball_intermediate',
          name: '籃球進階',
          description: '籃球戰術與團隊配合',
          exp: 15,
          requiredSkills: ['sports_basketball_basic'],
          category: '團隊球類'
        },
        {
          id: 'sports_football_intermediate',
          name: '足球進階',
          description: '足球戰術與位置技能',
          exp: 15,
          requiredSkills: ['sports_football_basic'],
          category: '團隊球類'
        },
        {
          id: 'sports_freestyle_swimming',
          name: '自由式精進',
          description: '自由式技術改善與速度提升',
          exp: 14,
          requiredSkills: ['sports_swimming_basic'],
          category: '競技游泳'
        },
        {
          id: 'sports_backstroke',
          name: '仰式泳技',
          description: '仰式泳姿技術與訓練',
          exp: 16,
          requiredSkills: ['sports_freestyle_swimming'],
          category: '競技游泳'
        },
        {
          id: 'sports_breaststroke',
          name: '蛙式技術',
          description: '蛙式泳姿與技術要領',
          exp: 18,
          requiredSkills: ['sports_backstroke'],
          category: '競技游泳'
        },
        {
          id: 'sports_mountain_biking',
          name: '登山車技術',
          description: '山地自行車騎乘與技巧',
          exp: 17,
          requiredSkills: ['sports_cycling_basic'],
          category: '極限自行車'
        },
        {
          id: 'sports_road_cycling',
          name: '公路車競速',
          description: '公路自行車競速技術',
          exp: 16,
          requiredSkills: ['sports_cycling_basic'],
          category: '競速自行車'
        },
        {
          id: 'sports_hiking_basic',
          name: '登山健行',
          description: '山林健行與戶外安全',
          exp: 13,
          requiredSkills: ['sports_running_basic'],
          category: '戶外運動'
        },
        {
          id: 'sports_martial_arts_basic',
          name: '武術基礎',
          description: '基礎武術動作與自衛技能',
          exp: 19,
          requiredSkills: ['sports_basic_coordination'],
          category: '武術格鬥'
        }
      ]
    },
    {
      name: '專項精進 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'sports_tennis_advanced',
          name: '網球競賽',
          description: '網球比賽戰術與心理素質',
          exp: 22,
          requiredSkills: ['sports_tennis_basic'],
          category: '競技球拍'
        },
        {
          id: 'sports_basketball_pro',
          name: '籃球專業',
          description: '專業籃球技術與比賽經驗',
          exp: 25,
          requiredSkills: ['sports_basketball_intermediate'],
          category: '職業球類'
        },
        {
          id: 'sports_football_pro',
          name: '足球專業',
          description: '職業足球水準與專業技能',
          exp: 25,
          requiredSkills: ['sports_football_intermediate'],
          category: '職業球類'
        },
        {
          id: 'sports_butterfly_stroke',
          name: '蝶式精通',
          description: '蝶式泳姿與高難度技術',
          exp: 28,
          requiredSkills: ['sports_breaststroke'],
          category: '競技游泳'
        },
        {
          id: 'sports_surfing',
          name: '衝浪技術',
          description: '衝浪基礎與海浪判讀',
          exp: 24,
          requiredSkills: ['sports_butterfly_stroke'],
          category: '極限水上'
        },
        {
          id: 'sports_diving',
          name: '潛水技能',
          description: '水肺潛水與海洋探索',
          exp: 26,
          requiredSkills: ['sports_surfing'],
          category: '水下運動'
        },
        {
          id: 'sports_triathlon',
          name: '鐵人三項',
          description: '游泳、自行車、跑步綜合訓練',
          exp: 30,
          requiredSkills: ['sports_road_cycling'],
          category: '耐力競技'
        },
        {
          id: 'sports_rock_climbing',
          name: '攀岩技術',
          description: '室內外攀岩技巧與安全',
          exp: 27,
          requiredSkills: ['sports_hiking_basic'],
          category: '極限運動'
        },
        {
          id: 'sports_mountaineering',
          name: '登山技術',
          description: '高山攀登與極地探險',
          exp: 32,
          requiredSkills: ['sports_rock_climbing'],
          category: '極限戶外'
        },
        {
          id: 'sports_karate',
          name: '空手道',
          description: '空手道技法與精神修練',
          exp: 23,
          requiredSkills: ['sports_martial_arts_basic'],
          category: '傳統武術'
        },
        {
          id: 'sports_taekwondo',
          name: '跆拳道',
          description: '跆拳道腿法與競技技術',
          exp: 21,
          requiredSkills: ['sports_martial_arts_basic'],
          category: '現代武術'
        },
        {
          id: 'sports_self_defense',
          name: '綜合格鬥',
          description: '現代自衛術與實戰技能',
          exp: 29,
          requiredSkills: ['sports_karate', 'sports_taekwondo'],
          category: '實戰技能'
        }
      ]
    },
    {
      name: '競技水準 (Lv.41-55)',
      requiredLevel: 41,
      skills: [
        {
          id: 'sports_professional_athlete',
          name: '職業選手',
          description: '專業運動員水準與競賽經驗',
          exp: 40,
          requiredSkills: ['sports_basketball_pro', 'sports_football_pro'],
          category: '職業競技'
        },
        {
          id: 'sports_olympic_swimming',
          name: '奧運游泳',
          description: '奧運級游泳技術與競賽心理',
          exp: 45,
          requiredSkills: ['sports_triathlon'],
          category: '奧運項目'
        },
        {
          id: 'sports_extreme_surfing',
          name: '極限衝浪',
          description: '大浪衝浪與極限挑戰',
          exp: 38,
          requiredSkills: ['sports_diving'],
          category: '極限挑戰'
        },
        {
          id: 'sports_expedition_leader',
          name: '探險領隊',
          description: '極地探險與登山隊領導',
          exp: 42,
          requiredSkills: ['sports_mountaineering'],
          category: '探險領導'
        },
        {
          id: 'sports_martial_arts_master',
          name: '武術大師',
          description: '武術各流派精通與教學',
          exp: 48,
          requiredSkills: ['sports_self_defense'],
          category: '武術造詣'
        },
        {
          id: 'sports_coach_certification',
          name: '專業教練',
          description: '運動教練資格與訓練方法',
          exp: 35,
          requiredSkills: ['sports_tennis_advanced'],
          category: '教練技能'
        }
      ]
    },
    {
      name: '運動傳奇 (Lv.56-70)',
      requiredLevel: 56,
      skills: [
        {
          id: 'sports_championship',
          name: '冠軍成就',
          description: '重要競賽冠軍與紀錄突破',
          exp: 55,
          requiredSkills: ['sports_professional_athlete'],
          category: '競技榮譽'
        },
        {
          id: 'sports_olympic_medal',
          name: '奧運獎牌',
          description: '奧運會獎牌獲得與國際榮譽',
          exp: 60,
          requiredSkills: ['sports_olympic_swimming'],
          category: '最高榮譽'
        },
        {
          id: 'sports_world_record',
          name: '世界紀錄',
          description: '創造或刷新世界運動紀錄',
          exp: 65,
          requiredSkills: ['sports_extreme_surfing'],
          category: '歷史成就'
        },
        {
          id: 'sports_exploration_achievement',
          name: '探險成就',
          description: '完成重要探險壯舉',
          exp: 52,
          requiredSkills: ['sports_expedition_leader'],
          category: '探險傳奇'
        },
        {
          id: 'sports_martial_arts_legend',
          name: '武術傳奇',
          description: '在武術界建立傳奇地位',
          exp: 58,
          requiredSkills: ['sports_martial_arts_master'],
          category: '武術傳承'
        },
        {
          id: 'sports_elite_coach',
          name: '頂級教練',
          description: '培養出眾多優秀運動員',
          exp: 50,
          requiredSkills: ['sports_coach_certification'],
          category: '教練成就'
        }
      ]
    },
    {
      name: '運動不朽 (Lv.71-100)',
      requiredLevel: 71,
      skills: [
        {
          id: 'sports_hall_of_fame',
          name: '名人堂',
          description: '進入運動名人堂的不朽榮譽',
          exp: 75,
          requiredSkills: ['sports_championship', 'sports_olympic_medal'],
          category: '永恆榮耀'
        },
        {
          id: 'sports_legend_status',
          name: '傳奇地位',
          description: '成為運動史上的傳奇人物',
          exp: 80,
          requiredSkills: ['sports_world_record'],
          category: '歷史地位'
        },
        {
          id: 'sports_pioneering_spirit',
          name: '開拓精神',
          description: '在運動領域開創新的可能性',
          exp: 70,
          requiredSkills: ['sports_exploration_achievement'],
          category: '創新貢獻'
        },
        {
          id: 'sports_cultural_impact',
          name: '文化影響',
          description: '對體育文化產生深遠影響',
          exp: 78,
          requiredSkills: ['sports_martial_arts_legend'],
          category: '文化傳承'
        },
        {
          id: 'sports_coaching_dynasty',
          name: '教練王朝',
          description: '建立教練傳承與訓練體系',
          exp: 72,
          requiredSkills: ['sports_elite_coach'],
          category: '教練傳承'
        },
        {
          id: 'sports_immortal_legacy',
          name: '不朽傳承',
          description: '留下永恆的運動精神與影響',
          exp: 100,
          requiredSkills: ['sports_hall_of_fame', 'sports_legend_status', 'sports_cultural_impact'],
          category: '永恆價值'
        }
      ]
    }
  ]
}
