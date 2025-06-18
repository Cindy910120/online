// 手工藝技能樹
export const handicraftSkills = {
  name: '手工藝術',
  description: '各種手工創作技能，從編織到陶藝，培養手作能力與創造力',
  icon: '🧵',
  color: '#8b5cf6',
  levels: [
    {
      name: '手作入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'craft_basic_tools',
          name: '基礎工具使用',
          description: '各種手工工具的正確使用方法',
          exp: 3,
          requiredSkills: [],
          category: '工具技能'
        },
        {
          id: 'craft_paper_folding',
          name: '摺紙藝術',
          description: '基礎摺紙技巧與造型創作',
          exp: 4,
          requiredSkills: ['craft_basic_tools'],
          category: '紙藝'
        },
        {
          id: 'craft_knitting_basic',
          name: '編織入門',
          description: '基本針法與簡單編織作品',
          exp: 5,
          requiredSkills: ['craft_basic_tools'],
          category: '編織工藝'
        },
        {
          id: 'craft_clay_modeling',
          name: '黏土塑形',
          description: '黏土基礎塑形與造型技巧',
          exp: 4,
          requiredSkills: ['craft_basic_tools'],
          category: '陶土工藝'
        },
        {
          id: 'craft_embroidery_basic',
          name: '刺繡基礎',
          description: '基本刺繡針法與圖案製作',
          exp: 5,
          requiredSkills: ['craft_basic_tools'],
          category: '刺繡工藝'
        }
      ]
    },
    {
      name: '工藝技法 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'craft_knitting_advanced',
          name: '進階編織',
          description: '複雜針法與毛衣等大型作品製作',
          exp: 10,
          requiredSkills: ['craft_knitting_basic'],
          category: '編織工藝'
        },
        {
          id: 'craft_pottery_wheel',
          name: '陶器拉坯',
          description: '陶輪操作與器型塑造技巧',
          exp: 12,
          requiredSkills: ['craft_clay_modeling'],
          category: '陶瓷工藝'
        },
        {
          id: 'craft_jewelry_making',
          name: '首飾製作',
          description: '串珠、金工等飾品製作技法',
          exp: 9,
          requiredSkills: ['craft_basic_tools'],
          category: '飾品工藝'
        },
        {
          id: 'craft_embroidery_advanced',
          name: '立體刺繡',
          description: '立體刺繡與複雜圖案技巧',
          exp: 11,
          requiredSkills: ['craft_embroidery_basic'],
          category: '刺繡工藝'
        },
        {
          id: 'craft_woodworking_basic',
          name: '木工基礎',
          description: '基礎木工技巧與簡單作品製作',
          exp: 8,
          requiredSkills: ['craft_basic_tools'],
          category: '木工藝'
        },
        {
          id: 'craft_leather_working',
          name: '皮革工藝',
          description: '皮革裁切、縫製與裝飾技巧',
          exp: 10,
          requiredSkills: ['craft_basic_tools'],
          category: '皮革工藝'
        }
      ]
    },
    {
      name: '專業工藝 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'craft_textile_design',
          name: '織品設計',
          description: '織品圖案設計與創意編織',
          exp: 15,
          requiredSkills: ['craft_knitting_advanced'],
          category: '織品設計'
        },
        {
          id: 'craft_ceramic_glazing',
          name: '陶瓷釉彩',
          description: '釉藥調配與燒製技術',
          exp: 16,
          requiredSkills: ['craft_pottery_wheel'],
          category: '陶瓷工藝'
        },
        {
          id: 'craft_metal_working',
          name: '金工技藝',
          description: '金屬加工與精緻首飾製作',
          exp: 18,
          requiredSkills: ['craft_jewelry_making'],
          category: '金工藝術'
        },
        {
          id: 'craft_fiber_art',
          name: '纖維藝術',
          description: '現代纖維藝術創作與裝置',
          exp: 17,
          requiredSkills: ['craft_embroidery_advanced'],
          category: '現代工藝'
        },
        {
          id: 'craft_furniture_making',
          name: '家具製作',
          description: '實用家具的設計與製作',
          exp: 20,
          requiredSkills: ['craft_woodworking_basic'],
          category: '木工藝'
        },
        {
          id: 'craft_leather_goods',
          name: '皮革商品',
          description: '專業皮革商品設計與製作',
          exp: 14,
          requiredSkills: ['craft_leather_working'],
          category: '皮革工藝'
        }
      ]
    },
    {
      name: '工藝大師 (Lv.41-60)',
      requiredLevel: 41,
      skills: [
        {
          id: 'craft_innovation_design',
          name: '創新設計',
          description: '傳統工藝的現代創新與應用',
          exp: 25,
          requiredSkills: ['craft_textile_design', 'craft_fiber_art'],
          category: '創新設計'
        },
        {
          id: 'craft_business_development',
          name: '工藝創業',
          description: '手工藝品牌經營與市場開發',
          exp: 22,
          requiredSkills: ['craft_metal_working', 'craft_ceramic_glazing'],
          category: '商業發展'
        },
        {
          id: 'craft_workshop_teaching',
          name: '工藝教學',
          description: '手工藝技能傳授與工作坊經營',
          exp: 20,
          requiredSkills: ['craft_furniture_making'],
          category: '技藝傳承'
        },
        {
          id: 'craft_cultural_preservation',
          name: '文化傳承',
          description: '傳統工藝文化的保存與發揚',
          exp: 30,
          requiredSkills: ['craft_innovation_design'],
          category: '文化貢獻'
        }
      ]
    }
  ]
}
