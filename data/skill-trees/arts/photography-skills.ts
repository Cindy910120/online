// 攝影技能樹
export const photographySkills = {
  name: '攝影藝術',
  description: '培養攝影技術與視覺美感，從基礎操作到專業創作',
  icon: '📸',
  color: '#6b7280',
  levels: [
    {
      name: '攝影入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'photo_camera_basics',
          name: '相機基礎操作',
          description: '相機的基本設定與操作方式',
          exp: 3,
          requiredSkills: [],
          category: '器材操作'
        },
        {
          id: 'photo_composition_rule',
          name: '構圖法則',
          description: '三分法、對角線、黃金比例等基礎構圖技巧',
          exp: 4,
          requiredSkills: ['photo_camera_basics'],
          category: '構圖技巧'
        },
        {
          id: 'photo_exposure_basics',
          name: '曝光基礎',
          description: '光圈、快門、ISO的基本概念與運用',
          exp: 5,
          requiredSkills: ['photo_camera_basics'],
          category: '曝光技術'
        },
        {
          id: 'photo_focus_basics',
          name: '對焦技巧',
          description: '自動對焦與手動對焦的運用',
          exp: 4,
          requiredSkills: ['photo_camera_basics'],
          category: '對焦技術'
        },
        {
          id: 'photo_light_observation',
          name: '光線觀察',
          description: '認識自然光與人工光的特性',
          exp: 3,
          requiredSkills: [],
          category: '用光技巧'
        }
      ]
    },
    {
      name: '攝影技法 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'photo_portrait_technique',
          name: '人像攝影技法',
          description: '人像拍攝的姿勢引導與光影運用',
          exp: 8,
          requiredSkills: ['photo_composition_rule', 'photo_light_observation'],
          category: '人像攝影'
        },
        {
          id: 'photo_landscape_technique',
          name: '風景攝影技法',
          description: '風景拍攝的時機掌握與景深運用',
          exp: 8,
          requiredSkills: ['photo_exposure_basics', 'photo_light_observation'],
          category: '風景攝影'
        },
        {
          id: 'photo_street_technique',
          name: '街拍技法',
          description: '街頭攝影的瞬間捕捉與故事性表達',
          exp: 9,
          requiredSkills: ['photo_focus_basics', 'photo_composition_rule'],
          category: '街頭攝影'
        },
        {
          id: 'photo_macro_technique',
          name: '微距攝影',
          description: '近距離拍攝的技巧與器材運用',
          exp: 10,
          requiredSkills: ['photo_focus_basics', 'photo_exposure_basics'],
          category: '特殊攝影'
        },
        {
          id: 'photo_night_technique',
          name: '夜間攝影',
          description: '低光環境下的拍攝技巧',
          exp: 12,
          requiredSkills: ['photo_exposure_basics'],
          category: '特殊攝影'
        },
        {
          id: 'photo_editing_basics',
          name: '基礎後製',
          description: 'Lightroom 或其他軟體的基礎修圖技巧',
          exp: 8,
          requiredSkills: ['photo_exposure_basics'],
          category: '後製處理'
        }
      ]
    },
    {
      name: '專業攝影 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'photo_commercial_portrait',
          name: '商業人像攝影',
          description: '專業人像拍攝與燈光配置',
          exp: 15,
          requiredSkills: ['photo_portrait_technique'],
          category: '商業攝影'
        },
        {
          id: 'photo_product_photography',
          name: '商品攝影',
          description: '商品拍攝的燈光與背景設計',
          exp: 14,
          requiredSkills: ['photo_macro_technique'],
          category: '商業攝影'
        },
        {
          id: 'photo_documentary',
          name: '紀實攝影',
          description: '社會紀實與生活記錄攝影',
          exp: 16,
          requiredSkills: ['photo_street_technique'],
          category: '紀實攝影'
        },
        {
          id: 'photo_wedding_photography',
          name: '婚禮攝影',
          description: '婚禮紀錄的技巧與流程規劃',
          exp: 18,
          requiredSkills: ['photo_portrait_technique', 'photo_documentary'],
          category: '活動攝影'
        },
        {
          id: 'photo_advanced_editing',
          name: '進階後製',
          description: 'Photoshop 合成與創意後製技巧',
          exp: 12,
          requiredSkills: ['photo_editing_basics'],
          category: '後製處理'
        },
        {
          id: 'photo_color_grading',
          name: '色彩調色',
          description: '專業色彩校正與風格調色',
          exp: 10,
          requiredSkills: ['photo_editing_basics'],
          category: '後製處理'
        }
      ]
    },
    {
      name: '攝影藝術家 (Lv.41-60)',
      requiredLevel: 41,
      skills: [
        {
          id: 'photo_personal_style',
          name: '個人風格發展',
          description: '建立獨特的攝影風格與視覺語言',
          exp: 20,
          requiredSkills: ['photo_advanced_editing', 'photo_color_grading'],
          category: '藝術創作'
        },
        {
          id: 'photo_exhibition_planning',
          name: '攝影展覽策劃',
          description: '個人攝影展的企劃與執行',
          exp: 25,
          requiredSkills: ['photo_personal_style'],
          category: '專業發展'
        },
        {
          id: 'photo_teaching',
          name: '攝影教學',
          description: '攝影技巧教學與工作坊帶領',
          exp: 18,
          requiredSkills: ['photo_commercial_portrait', 'photo_product_photography'],
          category: '專業發展'
        },
        {
          id: 'photo_publication',
          name: '攝影出版',
          description: '攝影集出版與媒體合作',
          exp: 22,
          requiredSkills: ['photo_exhibition_planning'],
          category: '專業發展'
        }
      ]
    }
  ]
}
