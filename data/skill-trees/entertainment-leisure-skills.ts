// 娛樂與休閒技能樹
export const entertainmentLeisureSkills = {
  name: '娛樂休閒',
  description: '培養遊戲、收藏、旅行等休閒娛樂技能',
  icon: '🎮',
  color: '#10b981',
  levels: [
    {
      name: '休閒入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'leisure_gaming_basic',
          name: '遊戲基礎',
          description: '基本遊戲操作與遊戲素養',
          exp: 3,
          requiredSkills: [],
          category: '電子遊戲'
        },
        {
          id: 'leisure_board_games',
          name: '桌遊體驗',
          description: '各類桌上遊戲規則學習',
          exp: 4,
          requiredSkills: [],
          category: '桌上遊戲'
        },
        {
          id: 'leisure_movie_watching',
          name: '電影欣賞',
          description: '培養電影品味與觀影習慣',
          exp: 3,
          requiredSkills: [],
          category: '影視娛樂'
        },
        {
          id: 'leisure_model_basic',
          name: '模型入門',
          description: '簡單模型組裝與基礎工具使用',
          exp: 5,
          requiredSkills: [],
          category: '模型收藏'
        },
        {
          id: 'leisure_travel_planning',
          name: '旅行規劃',
          description: '基礎行程規劃與旅遊準備',
          exp: 6,
          requiredSkills: [],
          category: '旅遊探索'
        },
        {
          id: 'leisure_pc_gaming',
          name: 'PC遊戲',
          description: '電腦遊戲操作與平台使用',
          exp: 4,
          requiredSkills: ['leisure_gaming_basic'],
          category: '電子遊戲'
        },
        {
          id: 'leisure_console_gaming',
          name: '主機遊戲',
          description: 'PlayStation、Xbox、Switch等主機遊戲',
          exp: 4,
          requiredSkills: ['leisure_gaming_basic'],
          category: '電子遊戲'
        },
        {
          id: 'leisure_mobile_gaming',
          name: '手機遊戲',
          description: '手機遊戲技巧與策略運用',
          exp: 3,
          requiredSkills: ['leisure_gaming_basic'],
          category: '電子遊戲'
        },
        {
          id: 'leisure_card_games',
          name: '卡牌遊戲',
          description: '各類卡牌遊戲規則與策略',
          exp: 5,
          requiredSkills: ['leisure_board_games'],
          category: '桌上遊戲'
        },
        {
          id: 'leisure_drama_watching',
          name: '追劇技能',
          description: '影集、戲劇欣賞與評析',
          exp: 3,
          requiredSkills: ['leisure_movie_watching'],
          category: '影視娛樂'
        },
        {
          id: 'leisure_anime_appreciation',
          name: '動漫欣賞',
          description: '動畫與漫畫欣賞與文化理解',
          exp: 4,
          requiredSkills: ['leisure_movie_watching'],
          category: '影視娛樂'
        },
        {
          id: 'leisure_gundam_models',
          name: '鋼彈模型',
          description: '鋼彈模型組裝與改造技巧',
          exp: 8,
          requiredSkills: ['leisure_model_basic'],
          category: '模型收藏'
        },
        {
          id: 'leisure_figure_collecting',
          name: '公仔收藏',
          description: '動漫公仔收藏與保養知識',
          exp: 5,
          requiredSkills: ['leisure_model_basic'],
          category: '模型收藏'
        }
      ]
    },
    {
      name: '興趣發展 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'leisure_pc_gaming',
          name: 'PC遊戲精通',
          description: '各類PC遊戲的深度體驗',
          exp: 8,
          requiredSkills: ['leisure_gaming_basic'],
          category: 'PC遊戲'
        },
        {
          id: 'leisure_console_gaming',
          name: '主機遊戲',
          description: 'PlayStation、Xbox、Switch等主機遊戲',
          exp: 10,
          requiredSkills: ['leisure_gaming_basic'],
          category: '主機遊戲'
        },
        {
          id: 'leisure_mobile_gaming',
          name: '手機遊戲',
          description: '手遊競技與策略遊戲精通',
          exp: 7,
          requiredSkills: ['leisure_gaming_basic'],
          category: '手機遊戲'
        },
        {
          id: 'leisure_strategy_board',
          name: '策略桌遊',
          description: '複雜策略桌遊與競技技巧',
          exp: 12,
          requiredSkills: ['leisure_board_games'],
          category: '策略遊戲'
        },
        {
          id: 'leisure_card_games',
          name: '卡牌遊戲',
          description: '各類集換式卡牌遊戲',
          exp: 11,
          requiredSkills: ['leisure_board_games'],
          category: '卡牌遊戲'
        },
        {
          id: 'leisure_film_analysis',
          name: '電影分析',
          description: '電影技法分析與影評寫作',
          exp: 9,
          requiredSkills: ['leisure_movie_watching'],
          category: '影視評論'
        },
        {
          id: 'leisure_tv_series',
          name: '影集追劇',
          description: '影集品味與系列作品深度理解',
          exp: 8,
          requiredSkills: ['leisure_movie_watching'],
          category: '影視娛樂'
        },
        {
          id: 'leisure_gundam_models',
          name: '鋼彈模型',
          description: '鋼彈模型製作與改造技術',
          exp: 13,
          requiredSkills: ['leisure_model_basic'],
          category: '模型製作'
        },
        {
          id: 'leisure_anime_figures',
          name: '動漫公仔',
          description: '動漫周邊收藏與鑑賞',
          exp: 10,
          requiredSkills: ['leisure_model_basic'],
          category: '收藏嗜好'
        },
        {
          id: 'leisure_domestic_travel',
          name: '國內旅遊',
          description: '深度國內旅遊與在地文化體驗',
          exp: 12,
          requiredSkills: ['leisure_travel_planning'],
          category: '國內旅遊'
        },
        {
          id: 'leisure_backpacking',
          name: '背包客體驗',
          description: '預算旅行與獨立旅遊技能',
          exp: 15,
          requiredSkills: ['leisure_travel_planning'],
          category: '自助旅行'
        }
      ]
    },
    {
      name: '深度體驗 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'leisure_esports',
          name: '電競技能',
          description: '競技遊戲專精與電競參與',
          exp: 18,
          requiredSkills: ['leisure_pc_gaming'],
          category: '電競競技'
        },
        {
          id: 'leisure_game_streaming',
          name: '遊戲實況',
          description: '遊戲直播與內容創作',
          exp: 20,
          requiredSkills: ['leisure_console_gaming'],
          category: '遊戲內容'
        },
        {
          id: 'leisure_game_development',
          name: '遊戲開發',
          description: '獨立遊戲開發與設計',
          exp: 25,
          requiredSkills: ['leisure_mobile_gaming'],
          category: '遊戲創作'
        },
        {
          id: 'leisure_board_game_design',
          name: '桌遊設計',
          description: '原創桌遊設計與測試',
          exp: 22,
          requiredSkills: ['leisure_strategy_board'],
          category: '遊戲設計'
        },
        {
          id: 'leisure_tournament_play',
          name: '競賽參與',
          description: '桌遊卡牌競賽與錦標賽',
          exp: 19,
          requiredSkills: ['leisure_card_games'],
          category: '競技遊戲'
        },
        {
          id: 'leisure_film_criticism',
          name: '影評寫作',
          description: '專業影評與電影評論',
          exp: 17,
          requiredSkills: ['leisure_film_analysis'],
          category: '影視評論'
        },
        {
          id: 'leisure_content_creation',
          name: '影視內容創作',
          description: '影視相關內容創作與分享',
          exp: 21,
          requiredSkills: ['leisure_tv_series'],
          category: '內容創作'
        },
        {
          id: 'leisure_model_customization',
          name: '模型改造',
          description: '進階模型改造與塗裝技術',
          exp: 24,
          requiredSkills: ['leisure_gundam_models'],
          category: '模型工藝'
        },
        {
          id: 'leisure_collection_management',
          name: '收藏管理',
          description: '收藏品管理與價值評估',
          exp: 16,
          requiredSkills: ['leisure_anime_figures'],
          category: '收藏專業'
        },
        {
          id: 'leisure_cultural_tourism',
          name: '文化旅遊',
          description: '深度文化旅遊與歷史探索',
          exp: 20,
          requiredSkills: ['leisure_domestic_travel'],
          category: '文化體驗'
        },
        {
          id: 'leisure_international_travel',
          name: '國際旅遊',
          description: '跨國旅遊與異文化體驗',
          exp: 26,
          requiredSkills: ['leisure_backpacking'],
          category: '國際探索'
        }
      ]
    },
    {
      name: '專業發展 (Lv.41-55)',
      requiredLevel: 41,
      skills: [
        {
          id: 'leisure_pro_gamer',
          name: '職業選手',
          description: '成為職業電競選手',
          exp: 35,
          requiredSkills: ['leisure_esports'],
          category: '職業電競'
        },
        {
          id: 'leisure_game_journalist',
          name: '遊戲媒體',
          description: '遊戲新聞與媒體工作',
          exp: 30,
          requiredSkills: ['leisure_game_streaming'],
          category: '遊戲媒體'
        },
        {
          id: 'leisure_indie_publisher',
          name: '獨立發行',
          description: '獨立遊戲發行與行銷',
          exp: 40,
          requiredSkills: ['leisure_game_development'],
          category: '遊戲產業'
        },
        {
          id: 'leisure_game_publisher',
          name: '桌遊出版',
          description: '桌遊出版與商業化',
          exp: 38,
          requiredSkills: ['leisure_board_game_design'],
          category: '桌遊產業'
        },
        {
          id: 'leisure_tournament_organizer',
          name: '賽事主辦',
          description: '大型遊戲賽事組織與管理',
          exp: 32,
          requiredSkills: ['leisure_tournament_play'],
          category: '賽事管理'
        },
        {
          id: 'leisure_film_festival',
          name: '影展策劃',
          description: '電影節策劃與影視活動組織',
          exp: 33,
          requiredSkills: ['leisure_film_criticism'],
          category: '影視活動'
        },
        {
          id: 'leisure_media_production',
          name: '媒體製作',
          description: '影視媒體製作與節目企劃',
          exp: 36,
          requiredSkills: ['leisure_content_creation'],
          category: '媒體產業'
        },
        {
          id: 'leisure_model_competition',
          name: '模型競賽',
          description: '模型製作競賽與獎項',
          exp: 34,
          requiredSkills: ['leisure_model_customization'],
          category: '競技成就'
        },
        {
          id: 'leisure_auction_expert',
          name: '拍賣專家',
          description: '收藏品拍賣與鑑定專業',
          exp: 28,
          requiredSkills: ['leisure_collection_management'],
          category: '收藏專業'
        },
        {
          id: 'leisure_travel_writer',
          name: '旅遊作家',
          description: '旅遊寫作與旅遊媒體工作',
          exp: 31,
          requiredSkills: ['leisure_cultural_tourism'],
          category: '旅遊媒體'
        },
        {
          id: 'leisure_tour_guide',
          name: '專業導遊',
          description: '國際導遊與文化交流專家',
          exp: 29,
          requiredSkills: ['leisure_international_travel'],
          category: '旅遊服務'
        }
      ]
    },
    {
      name: '行業影響 (Lv.56-70)',
      requiredLevel: 56,
      skills: [
        {
          id: 'leisure_esports_team',
          name: '電競戰隊',
          description: '組建或管理頂級電競戰隊',
          exp: 48,
          requiredSkills: ['leisure_pro_gamer'],
          category: '電競管理'
        },
        {
          id: 'leisure_gaming_influencer',
          name: '遊戲意見領袖',
          description: '在遊戲界具有重要影響力',
          exp: 45,
          requiredSkills: ['leisure_game_journalist'],
          category: '行業影響'
        },
        {
          id: 'leisure_game_studio',
          name: '遊戲工作室',
          description: '創立成功的遊戲開發工作室',
          exp: 55,
          requiredSkills: ['leisure_indie_publisher'],
          category: '創業成就'
        },
        {
          id: 'leisure_board_game_empire',
          name: '桌遊帝國',
          description: '建立桌遊產業影響力',
          exp: 52,
          requiredSkills: ['leisure_game_publisher'],
          category: '產業領導'
        },
        {
          id: 'leisure_global_tournament',
          name: '國際賽事',
          description: '主辦世界級遊戲競賽',
          exp: 50,
          requiredSkills: ['leisure_tournament_organizer'],
          category: '國際影響'
        },
        {
          id: 'leisure_film_industry',
          name: '影視產業',
          description: '在影視產業具有重要地位',
          exp: 47,
          requiredSkills: ['leisure_film_festival'],
          category: '產業地位'
        },
        {
          id: 'leisure_media_mogul',
          name: '媒體大亨',
          description: '媒體帝國建立與影響力',
          exp: 58,
          requiredSkills: ['leisure_media_production'],
          category: '媒體帝國'
        },
        {
          id: 'leisure_model_master',
          name: '模型大師',
          description: '在模型界享有大師地位',
          exp: 43,
          requiredSkills: ['leisure_model_competition'],
          category: '工藝大師'
        },
        {
          id: 'leisure_collection_legend',
          name: '收藏傳奇',
          description: '成為收藏界的傳奇人物',
          exp: 46,
          requiredSkills: ['leisure_auction_expert'],
          category: '收藏成就'
        },
        {
          id: 'leisure_travel_icon',
          name: '旅遊偶像',
          description: '成為旅遊界的知名人物',
          exp: 44,
          requiredSkills: ['leisure_travel_writer'],
          category: '旅遊影響'
        },
        {
          id: 'leisure_hospitality_empire',
          name: '旅遊帝國',
          description: '建立旅遊服務產業帝國',
          exp: 53,
          requiredSkills: ['leisure_tour_guide'],
          category: '旅遊產業'
        }
      ]
    },
    {
      name: '娛樂傳奇 (Lv.71-100)',
      requiredLevel: 71,
      skills: [
        {
          id: 'leisure_entertainment_empire',
          name: '娛樂帝國',
          description: '建立跨領域娛樂產業帝國',
          exp: 75,
          requiredSkills: ['leisure_game_studio', 'leisure_media_mogul'],
          category: '產業帝國'
        },
        {
          id: 'leisure_cultural_phenomenon',
          name: '文化現象',
          description: '創造影響一代人的文化現象',
          exp: 80,
          requiredSkills: ['leisure_gaming_influencer', 'leisure_film_industry'],
          category: '文化影響'
        },
        {
          id: 'leisure_global_influence',
          name: '全球影響力',
          description: '在全球娛樂文化中具有重要影響',
          exp: 85,
          requiredSkills: ['leisure_global_tournament', 'leisure_collection_legend'],
          category: '全球影響'
        },
        {
          id: 'leisure_innovation_pioneer',
          name: '創新先驅',
          description: '引領娛樂產業創新與變革',
          exp: 90,
          requiredSkills: ['leisure_board_game_empire', 'leisure_travel_icon'],
          category: '創新領導'
        },
        {
          id: 'leisure_lifestyle_guru',
          name: '生活風格大師',
          description: '定義時代生活方式與娛樂文化',
          exp: 95,
          requiredSkills: ['leisure_model_master', 'leisure_hospitality_empire'],
          category: '生活影響'
        },
        {
          id: 'leisure_eternal_legend',
          name: '永恆傳奇',
          description: '成為娛樂史上的不朽傳奇',
          exp: 100,
          requiredSkills: ['leisure_entertainment_empire', 'leisure_cultural_phenomenon', 'leisure_global_influence'],
          category: '傳奇成就'
        }
      ]
    }
  ]
}
