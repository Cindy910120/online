// 閱讀技能樹
export const readingSkills = {
  name: '閱讀素養',
  description: '培養閱讀理解能力與知識吸收技巧',
  icon: '📚',
  color: '#059669',
  levels: [
    {
      name: '閱讀基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'reading_speed_basic',
          name: '閱讀速度',
          description: '提升基本閱讀速度與流暢度',
          exp: 3,
          requiredSkills: [],
          category: '基礎技能'
        },
        {
          id: 'reading_comprehension',
          name: '理解能力',
          description: '文本理解與重點抓取',
          exp: 5,
          requiredSkills: ['reading_speed_basic'],
          category: '理解技巧'
        },
        {
          id: 'reading_note_taking',
          name: '閱讀筆記',
          description: '有效的閱讀筆記與重點整理',
          exp: 4,
          requiredSkills: ['reading_comprehension'],
          category: '記錄技巧'
        },
        {
          id: 'reading_genre_variety',
          name: '多元閱讀',
          description: '接觸不同類型的書籍與文本',
          exp: 6,
          requiredSkills: [],
          category: '閱讀廣度'
        }
      ]
    },
    {
      name: '閱讀進階 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'reading_critical_thinking',
          name: '批判思考',
          description: '對文本內容進行批判性分析',
          exp: 10,
          requiredSkills: ['reading_note_taking'],
          category: '思考技能'
        },
        {
          id: 'reading_speed_advanced',
          name: '快速閱讀',
          description: '高效閱讀技巧與速讀方法',
          exp: 12,
          requiredSkills: ['reading_genre_variety'],
          category: '效率技巧'
        },
        {
          id: 'reading_research_skills',
          name: '研究閱讀',
          description: '學術文獻與專業資料的閱讀',
          exp: 15,
          requiredSkills: ['reading_critical_thinking'],
          category: '專業技能'
        }
      ]
    },
    {
      name: '閱讀專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'reading_analysis_writing',
          name: '分析寫作',
          description: '將閱讀內容轉化為分析文章',
          exp: 18,
          requiredSkills: ['reading_research_skills'],
          category: '輸出技能'
        },
        {
          id: 'reading_knowledge_synthesis',
          name: '知識整合',
          description: '整合多本書籍的知識體系',
          exp: 20,
          requiredSkills: ['reading_speed_advanced'],
          category: '整合技能'
        },
        {
          id: 'reading_teaching_sharing',
          name: '知識分享',
          description: '將閱讀所得分享給他人',
          exp: 22,
          requiredSkills: ['reading_analysis_writing'],
          category: '分享技能'
        }
      ]
    }
  ]
}
