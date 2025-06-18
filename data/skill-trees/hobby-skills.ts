// 興趣技能樹
export const hobbySkills = {
  name: '興趣技能',
  description: '培養興趣愛好與創意技能',
  icon: '🎨',
  color: '#ec4899',
  levels: [
    {
      name: '創意啟蒙 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'hobby_drawing_basic',
          name: '基礎繪畫',
          description: '學習線條、形狀與比例',
          exp: 5,
          requiredSkills: [],
          category: '視覺藝術'
        },
        {
          id: 'hobby_music_basic',
          name: '音樂基礎',
          description: '認識音符、節拍與樂理',
          exp: 6,
          requiredSkills: [],
          category: '音樂藝術'
        },
        {
          id: 'hobby_writing_basic',
          name: '創意寫作',
          description: '故事創作與文字表達',
          exp: 7,
          requiredSkills: [],
          category: '文學創作'
        },
        {
          id: 'hobby_photography',
          name: '攝影基礎',
          description: '構圖、光線與攝影技巧',
          exp: 8,
          requiredSkills: [],
          category: '視覺藝術'
        },
        {
          id: 'hobby_crafts',
          name: '手工藝製作',
          description: '各種DIY手工藝品製作',
          exp: 6,
          requiredSkills: [],
          category: '手工藝術'
        }
      ]
    },
    {
      name: '技能發展 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'hobby_digital_art',
          name: '數位繪畫',
          description: '使用繪圖軟體創作',
          exp: 12,
          requiredSkills: ['hobby_drawing_basic'],
          category: '數位藝術'
        },
        {
          id: 'hobby_instrument',
          name: '樂器演奏',
          description: '學習一種樂器的演奏',
          exp: 15,
          requiredSkills: ['hobby_music_basic'],
          category: '音樂表演'
        },
        {
          id: 'hobby_video_editing',
          name: '影片剪輯',
          description: '影片編輯與後製技巧',
          exp: 18,
          requiredSkills: ['hobby_photography'],
          category: '多媒體'
        },
        {
          id: 'hobby_cooking',
          name: '烹飪技藝',
          description: '各國料理的製作技巧',
          exp: 14,
          requiredSkills: ['hobby_crafts'],
          category: '生活技能'
        },
        {
          id: 'hobby_gardening',
          name: '園藝栽培',
          description: '植物種植與照護',
          exp: 16,
          requiredSkills: ['hobby_crafts'],
          category: '生活技能'
        }
      ]
    },
    {
      name: '進階創作 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'hobby_3d_modeling',
          name: '3D建模',
          description: '三維模型設計與渲染',
          exp: 25,
          requiredSkills: ['hobby_digital_art'],
          category: '數位創作'
        },
        {
          id: 'hobby_animation',
          name: '動畫製作',
          description: '2D/3D動畫創作',
          exp: 30,
          requiredSkills: ['hobby_video_editing', 'hobby_3d_modeling'],
          category: '動畫藝術'
        },
        {
          id: 'hobby_music_composition',
          name: '音樂創作',
          description: '原創音樂的作曲與編曲',
          exp: 28,
          requiredSkills: ['hobby_instrument'],
          category: '音樂創作'
        },
        {
          id: 'hobby_novel_writing',
          name: '小說創作',
          description: '長篇小說的構思與寫作',
          exp: 32,
          requiredSkills: ['hobby_writing_basic'],
          category: '文學創作'
        },
        {
          id: 'hobby_game_design',
          name: '遊戲設計',
          description: '遊戲機制與關卡設計',
          exp: 35,
          requiredSkills: ['hobby_animation'],
          category: '遊戲開發'
        }
      ]
    },
    {
      name: '專業技能 (Lv.41-55)',
      requiredLevel: 41,
      skills: [
        {
          id: 'hobby_ui_design',
          name: 'UI/UX設計',
          description: '使用者介面與體驗設計',
          exp: 38,
          requiredSkills: ['hobby_game_design'],
          category: '設計思維'
        },
        {
          id: 'hobby_brand_design',
          name: '品牌設計',
          description: '企業識別與品牌視覺設計',
          exp: 42,
          requiredSkills: ['hobby_ui_design'],
          category: '商業設計'
        },
        {
          id: 'hobby_podcast',
          name: '播客製作',
          description: '音頻節目企劃與製作',
          exp: 40,
          requiredSkills: ['hobby_music_composition'],
          category: '媒體製作'
        },
        {
          id: 'hobby_film_making',
          name: '電影製作',
          description: '劇本、拍攝、剪輯完整流程',
          exp: 45,
          requiredSkills: ['hobby_animation'],
          category: '影視創作'
        },
        {
          id: 'hobby_social_media',
          name: '社群媒體經營',
          description: '內容策劃與社群行銷',
          exp: 38,
          requiredSkills: ['hobby_brand_design'],
          category: '數位行銷'
        }
      ]
    },
    {
      name: '創業技能 (Lv.56-70)',
      requiredLevel: 56,
      skills: [
        {
          id: 'hobby_business_plan',
          name: '商業企劃',
          description: '商業模式設計與市場分析',
          exp: 50,
          requiredSkills: ['hobby_social_media'],
          category: '創業技能'
        },
        {
          id: 'hobby_product_design',
          name: '產品設計',
          description: '從概念到實現的產品開發',
          exp: 55,
          requiredSkills: ['hobby_business_plan'],
          category: '產品開發'
        },
        {
          id: 'hobby_marketing',
          name: '市場行銷',
          description: '行銷策略與推廣技巧',
          exp: 52,
          requiredSkills: ['hobby_business_plan'],
          category: '行銷推廣'
        },
        {
          id: 'hobby_crowdfunding',
          name: '群眾募資',
          description: '募資活動的策劃與執行',
          exp: 58,
          requiredSkills: ['hobby_marketing'],
          category: '資金籌措'
        },
        {
          id: 'hobby_startup',
          name: '新創經營',
          description: '創業團隊管理與營運',
          exp: 62,
          requiredSkills: ['hobby_crowdfunding'],
          category: '企業管理'
        }
      ]
    },
    {
      name: '影響力建立 (Lv.71-85)',
      requiredLevel: 71,
      skills: [
        {
          id: 'hobby_teaching',
          name: '技能教學',
          description: '線上課程設計與教學',
          exp: 65,
          requiredSkills: ['hobby_startup'],
          category: '知識分享'
        },
        {
          id: 'hobby_workshop',
          name: '工作坊主持',
          description: '實體活動策劃與主持',
          exp: 68,
          requiredSkills: ['hobby_teaching'],
          category: '活動企劃'
        },
        {
          id: 'hobby_mentoring',
          name: '指導與諮詢',
          description: '專業指導與職涯諮詢',
          exp: 70,
          requiredSkills: ['hobby_workshop'],
          category: '人才培育'
        },
        {
          id: 'hobby_community',
          name: '社群建立',
          description: '興趣社群的創建與經營',
          exp: 72,
          requiredSkills: ['hobby_mentoring'],
          category: '社群經營'
        },
        {
          id: 'hobby_collaboration',
          name: '跨域合作',
          description: '與不同領域專家的合作',
          exp: 75,
          requiredSkills: ['hobby_community'],
          category: '協作能力'
        }
      ]
    },
    {
      name: '大師級創作 (Lv.86-100)',
      requiredLevel: 86,
      skills: [
        {
          id: 'hobby_exhibition',
          name: '作品展覽',
          description: '個人作品展的策劃與執行',
          exp: 80,
          requiredSkills: ['hobby_collaboration'],
          category: '作品展示'
        },
        {
          id: 'hobby_awards',
          name: '競賽獲獎',
          description: '參與並獲得專業競賽獎項',
          exp: 85,
          requiredSkills: ['hobby_exhibition'],
          category: '專業認可'
        },
        {
          id: 'hobby_publication',
          name: '作品出版',
          description: '書籍、專輯或作品集出版',
          exp: 88,
          requiredSkills: ['hobby_awards'],
          category: '作品發行'
        },
        {
          id: 'hobby_international',
          name: '國際交流',
          description: '參與國際性的藝術與文化交流',
          exp: 92,
          requiredSkills: ['hobby_publication'],
          category: '國際視野'
        },
        {
          id: 'hobby_legacy',
          name: '文化傳承',
          description: '建立個人品牌與文化影響力',
          exp: 100,
          requiredSkills: ['hobby_international'],
          category: '文化影響'
        }
      ]
    }
  ]
}
