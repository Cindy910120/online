// 藝術與創作技能樹 - 包含繪畫、攝影、書法、手工藝等創作技能
export const artCreationSkills = {
  name: '藝術與創作',
  description: '培養視覺藝術、攝影、書法與手工創作技能',
  icon: '🎨',
  color: '#f59e0b',
  levels: [
    {
      name: '藝術基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'art_line_drawing',
          name: '線條練習',
          description: '基礎線條控制與筆觸練習',
          exp: 3,
          requiredSkills: [],
          category: '繪畫基礎'
        },
        {
          id: 'art_shape_form',
          name: '形狀與形體',
          description: '幾何形狀與立體感表現',
          exp: 4,
          requiredSkills: ['art_line_drawing'],
          category: '繪畫基礎'
        },
        {
          id: 'art_color_basics',
          name: '色彩基礎',
          description: '色彩理論與色輪認識',
          exp: 5,
          requiredSkills: ['art_shape_form'],
          category: '色彩學'
        },
        {
          id: 'art_photo_composition',
          name: '攝影構圖',
          description: '三分法、對角線等基礎構圖技巧',
          exp: 4,
          requiredSkills: [],
          category: '攝影技術'
        },
        {
          id: 'art_calligraphy_basic',
          name: '書法入門',
          description: '正確握筆姿勢與基本筆畫',
          exp: 5,
          requiredSkills: ['art_line_drawing'],
          category: '書法藝術'
        },
        {
          id: 'art_simple_crafts',
          name: '簡易手工',
          description: '基礎剪紙、摺紙與簡單飾品製作',
          exp: 4,
          requiredSkills: [],
          category: '手工藝術'
        },
        {
          id: 'art_knitting_basic',
          name: '編織入門',
          description: '基本編織針法與簡單作品',
          exp: 5,
          requiredSkills: [],
          category: '編織工藝'
        },
        {
          id: 'art_clay_basic',
          name: '黏土塑形',
          description: '黏土基礎塑形與手感訓練',
          exp: 4,
          requiredSkills: [],
          category: '陶藝雕塑'
        },
        {
          id: 'art_embroidery_basic',
          name: '刺繡基礎',
          description: '基本刺繡針法與圖案製作',
          exp: 5,
          requiredSkills: [],
          category: '刺繡工藝'
        }
      ]
    },
    {
      name: '技法學習 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'art_watercolor',
          name: '水彩畫技法',
          description: '水彩基礎技法與渲染技巧',
          exp: 8,
          requiredSkills: ['art_color_basics'],
          category: '傳統繪畫'
        },
        {
          id: 'art_oil_painting',
          name: '油畫基礎',
          description: '油畫顏料運用與基礎技法',
          exp: 10,
          requiredSkills: ['art_watercolor'],
          category: '傳統繪畫'
        },
        {
          id: 'art_digital_painting',
          name: '數位繪畫',
          description: '使用 Photoshop、Procreate 等軟體數位創作',
          exp: 12,
          requiredSkills: ['art_color_basics'],
          category: '數位藝術'
        },
        {
          id: 'art_portrait_photo',
          name: '人像攝影',
          description: '人像拍攝技巧與光影運用',
          exp: 9,
          requiredSkills: ['art_photo_composition'],
          category: '攝影技術'
        },
        {
          id: 'art_landscape_photo',
          name: '風景攝影',
          description: '風景拍攝與自然光運用',
          exp: 8,
          requiredSkills: ['art_photo_composition'],
          category: '攝影技術'
        },
        {
          id: 'art_street_photo',
          name: '街拍攝影',
          description: '街頭攝影技巧與瞬間捕捉',
          exp: 9,
          requiredSkills: ['art_photo_composition'],
          category: '攝影技術'
        },
        {
          id: 'art_chinese_calligraphy',
          name: '中文書法',
          description: '楷書、行書等中文書法練習',
          exp: 10,
          requiredSkills: ['art_calligraphy_basic'],
          category: '書法藝術'
        },
        {
          id: 'art_english_calligraphy',
          name: '英文書法',
          description: '英文美術字與花體字練習',
          exp: 8,
          requiredSkills: ['art_calligraphy_basic'],
          category: '書法藝術'
        },
        {
          id: 'art_knitting_advanced',
          name: '編織技藝',
          description: '毛線編織與針織技法',
          exp: 12,
          requiredSkills: ['art_knitting_basic'],
          category: '編織工藝'
        },
        {
          id: 'art_jewelry_making',
          name: '手作飾品',
          description: '串珠、金工等飾品製作技法',
          exp: 10,
          requiredSkills: ['art_simple_crafts'],
          category: '飾品工藝'
        },
        {
          id: 'art_pottery',
          name: '陶藝製作',
          description: '陶器拉坯與燒製技術',
          exp: 15,
          requiredSkills: ['art_clay_basic'],
          category: '陶藝雕塑'
        },
        {
          id: 'art_embroidery_advanced',
          name: '進階刺繡',
          description: '複雜刺繡圖案與立體繡法',
          exp: 12,
          requiredSkills: ['art_embroidery_basic'],
          category: '刺繡工藝'
        }
      ]
    },
    {
      name: '進階創作 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'art_illustration',
          name: '插畫設計',
          description: '商業插畫與故事插圖創作',
          exp: 18,
          requiredSkills: ['art_digital_painting'],
          category: '商業設計'
        },
        {
          id: 'art_concept_art',
          name: '概念藝術',
          description: '遊戲、電影概念設計',
          exp: 20,
          requiredSkills: ['art_digital_painting'],
          category: '商業設計'
        },
        {
          id: 'art_commercial_photo',
          name: '商業攝影',
          description: '產品攝影與商業人像拍攝',
          exp: 15,
          requiredSkills: ['art_portrait_photo', 'art_landscape_photo'],
          category: '攝影技術'
        },
        {
          id: 'art_documentary_photo',
          name: '紀實攝影',
          description: '社會紀實與生活記錄攝影',
          exp: 16,
          requiredSkills: ['art_street_photo'],
          category: '攝影技術'
        },
        {
          id: 'art_master_calligraphy',
          name: '書法創作',
          description: '草書、篆書等高階書法創作',
          exp: 18,
          requiredSkills: ['art_chinese_calligraphy'],
          category: '書法藝術'
        },
        {
          id: 'art_handwriting_design',
          name: '手寫字設計',
          description: '創意手寫字體與字型設計',
          exp: 14,
          requiredSkills: ['art_english_calligraphy'],
          category: '書法藝術'
        },
        {
          id: 'art_textile_design',
          name: '織品設計',
          description: '織品圖案設計與創意編織',
          exp: 16,
          requiredSkills: ['art_knitting_advanced'],
          category: '編織工藝'
        },
        {
          id: 'art_jewelry_design',
          name: '首飾設計',
          description: '專業首飾設計與金工技術',
          exp: 18,
          requiredSkills: ['art_jewelry_making'],
          category: '飾品工藝'
        },
        {
          id: 'art_ceramic_art',
          name: '陶瓷藝術',
          description: '藝術陶瓷創作與釉彩技術',
          exp: 20,
          requiredSkills: ['art_pottery'],
          category: '陶藝雕塑'
        },
        {
          id: 'art_fiber_art',
          name: '纖維藝術',
          description: '立體刺繡與纖維藝術創作',
          exp: 18,
          requiredSkills: ['art_embroidery_advanced'],
          category: '刺繡工藝'
        }
      ]
    },
    {
      name: '專業創作 (Lv.41-60)',
      requiredLevel: 41,
      skills: [
        {
          id: 'art_gallery_exhibition',
          name: '藝廊展覽',
          description: '個人作品展覽規劃與策展',
          exp: 25,
          requiredSkills: ['art_illustration', 'art_concept_art'],
          category: '專業發展'
        },
        {
          id: 'art_photography_studio',
          name: '攝影工作室',
          description: '專業攝影工作室經營與管理',
          exp: 22,
          requiredSkills: ['art_commercial_photo'],
          category: '專業發展'
        },
        {
          id: 'art_calligraphy_teaching',
          name: '書法教學',
          description: '書法教學技巧與課程設計',
          exp: 20,
          requiredSkills: ['art_master_calligraphy'],
          category: '專業發展'
        },
        {
          id: 'art_craft_business',
          name: '手工藝創業',
          description: '手工藝品牌經營與行銷',
          exp: 24,
          requiredSkills: ['art_jewelry_design', 'art_textile_design'],
          category: '專業發展'
        },
        {
          id: 'art_mixed_media',
          name: '混合媒材創作',
          description: '多種媒材結合的當代藝術創作',
          exp: 28,
          requiredSkills: ['art_ceramic_art', 'art_fiber_art'],
          category: '當代藝術'
        },
        {
          id: 'art_digital_portfolio',
          name: '數位作品集',
          description: '專業數位作品集製作與網路展示',
          exp: 18,
          requiredSkills: ['art_illustration'],
          category: '專業發展'
        }
      ]
    },
    {
      name: '藝術大師 (Lv.61-80)',
      requiredLevel: 61,
      skills: [
        {
          id: 'art_signature_style',
          name: '個人風格',
          description: '發展獨特的個人藝術風格',
          exp: 35,
          requiredSkills: ['art_gallery_exhibition'],
          category: '藝術成就'
        },
        {
          id: 'art_international_recognition',
          name: '國際認可',
          description: '參與國際藝術展覽或比賽獲獎',
          exp: 40,
          requiredSkills: ['art_signature_style'],
          category: '藝術成就'
        },
        {
          id: 'art_cultural_impact',
          name: '文化影響',
          description: '作品對文化社會產生影響力',
          exp: 45,
          requiredSkills: ['art_international_recognition'],
          category: '藝術成就'
        },
        {
          id: 'art_legacy_creation',
          name: '藝術傳承',
          description: '建立藝術學派或培養下一代藝術家',
          exp: 50,
          requiredSkills: ['art_cultural_impact'],
          category: '藝術成就'
        }
      ]
    }
  ]
}
