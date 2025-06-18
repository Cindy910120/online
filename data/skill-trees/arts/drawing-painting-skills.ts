// 繪畫技能樹
export const drawingPaintingSkills = {
  name: '繪畫藝術',
  description: '從基礎素描到專業繪畫，培養視覺藝術創作能力',
  icon: '🎨',
  color: '#f59e0b',
  levels: [
    {
      name: '繪畫基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'draw_line_control',
          name: '線條控制',
          description: '基礎線條練習與筆觸控制',
          exp: 3,
          requiredSkills: [],
          category: '基礎技法'
        },
        {
          id: 'draw_shape_form',
          name: '形狀與比例',
          description: '幾何形狀與物體比例觀察',
          exp: 4,
          requiredSkills: ['draw_line_control'],
          category: '基礎技法'
        },
        {
          id: 'draw_light_shadow',
          name: '光影基礎',
          description: '明暗關係與陰影表現',
          exp: 5,
          requiredSkills: ['draw_shape_form'],
          category: '明暗技法'
        },
        {
          id: 'draw_perspective_basic',
          name: '基礎透視',
          description: '一點透視與二點透視原理',
          exp: 6,
          requiredSkills: ['draw_shape_form'],
          category: '透視技法'
        },
        {
          id: 'draw_color_theory',
          name: '色彩理論',
          description: '色彩基礎知識與色輪運用',
          exp: 4,
          requiredSkills: [],
          category: '色彩學'
        }
      ]
    },
    {
      name: '媒材技法 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'draw_pencil_advanced',
          name: '素描進階',
          description: '鉛筆素描的深度技巧與質感表現',
          exp: 8,
          requiredSkills: ['draw_light_shadow'],
          category: '素描技法'
        },
        {
          id: 'draw_watercolor_basic',
          name: '水彩基礎',
          description: '水彩基本技法與濕畫法',
          exp: 10,
          requiredSkills: ['draw_color_theory'],
          category: '水彩技法'
        },
        {
          id: 'draw_oil_painting_basic',
          name: '油畫基礎',
          description: '油畫顏料特性與基本技法',
          exp: 12,
          requiredSkills: ['draw_color_theory', 'draw_light_shadow'],
          category: '油畫技法'
        },
        {
          id: 'draw_digital_basic',
          name: '數位繪畫基礎',
          description: '繪圖軟體操作與數位筆刷運用',
          exp: 9,
          requiredSkills: ['draw_color_theory'],
          category: '數位繪畫'
        },
        {
          id: 'draw_acrylic_basic',
          name: '壓克力顏料',
          description: '壓克力顏料的特性與應用技巧',
          exp: 8,
          requiredSkills: ['draw_color_theory'],
          category: '繪畫技法'
        },
        {
          id: 'draw_charcoal_pastel',
          name: '炭筆與粉彩',
          description: '炭筆與粉彩的表現技巧',
          exp: 7,
          requiredSkills: ['draw_pencil_advanced'],
          category: '素描技法'
        }
      ]
    },
    {
      name: '專業創作 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'draw_portrait_painting',
          name: '人物肖像',
          description: '人物肖像的比例與表情捕捉',
          exp: 15,
          requiredSkills: ['draw_pencil_advanced', 'draw_oil_painting_basic'],
          category: '人物繪畫'
        },
        {
          id: 'draw_landscape_painting',
          name: '風景繪畫',
          description: '自然風景的色彩與氛圍表現',
          exp: 14,
          requiredSkills: ['draw_watercolor_basic', 'draw_perspective_basic'],
          category: '風景繪畫'
        },
        {
          id: 'draw_still_life',
          name: '靜物繪畫',
          description: '靜物的質感與光影表現',
          exp: 12,
          requiredSkills: ['draw_oil_painting_basic'],
          category: '靜物繪畫'
        },
        {
          id: 'draw_digital_illustration',
          name: '數位插畫',
          description: '商業插畫與角色設計',
          exp: 16,
          requiredSkills: ['draw_digital_basic'],
          category: '數位繪畫'
        },
        {
          id: 'draw_abstract_art',
          name: '抽象繪畫',
          description: '抽象藝術的創作理念與技法',
          exp: 18,
          requiredSkills: ['draw_acrylic_basic', 'draw_color_theory'],
          category: '現代藝術'
        },
        {
          id: 'draw_mixed_media',
          name: '混合媒材',
          description: '多種媒材結合的創作技巧',
          exp: 20,
          requiredSkills: ['draw_charcoal_pastel', 'draw_acrylic_basic'],
          category: '實驗技法'
        }
      ]
    },
    {
      name: '繪畫大師 (Lv.41-60)',
      requiredLevel: 41,
      skills: [
        {
          id: 'draw_personal_style',
          name: '個人風格',
          description: '發展獨特的個人繪畫風格',
          exp: 25,
          requiredSkills: ['draw_portrait_painting', 'draw_abstract_art'],
          category: '藝術成就'
        },
        {
          id: 'draw_art_exhibition',
          name: '個人畫展',
          description: '策劃個人繪畫作品展覽',
          exp: 30,
          requiredSkills: ['draw_personal_style'],
          category: '專業發展'
        },
        {
          id: 'draw_art_teaching',
          name: '繪畫教學',
          description: '美術教學與技法指導',
          exp: 22,
          requiredSkills: ['draw_mixed_media'],
          category: '專業發展'
        },
        {
          id: 'draw_commercial_art',
          name: '商業美術',
          description: '商業插畫與設計合作',
          exp: 20,
          requiredSkills: ['draw_digital_illustration'],
          category: '專業發展'
        }
      ]
    }
  ]
}
