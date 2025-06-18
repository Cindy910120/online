// 研究學習技能樹
export const researchSkills = {
  name: '研究學習',
  description: '培養獨立研究與深度學習的能力',
  icon: '🔬',
  color: '#0f766e',
  levels: [
    {
      name: '研究入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'research_information_search',
          name: '資訊搜尋',
          description: '有效的網路與資料庫搜尋技巧',
          exp: 4,
          requiredSkills: [],
          category: '搜尋技能'
        },
        {
          id: 'research_source_evaluation',
          name: '資料評估',
          description: '判斷資訊來源的可信度與品質',
          exp: 6,
          requiredSkills: ['research_information_search'],
          category: '評估技能'
        },
        {
          id: 'research_organization_basic',
          name: '資料整理',
          description: '有系統地整理與分類研究資料',
          exp: 5,
          requiredSkills: ['research_source_evaluation'],
          category: '組織技能'
        },
        {
          id: 'research_question_formulation',
          name: '問題設定',
          description: '提出有意義的研究問題',
          exp: 7,
          requiredSkills: [],
          category: '思考技能'
        }
      ]
    },
    {
      name: '研究進階 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'research_methodology_basic',
          name: '研究方法',
          description: '學習基礎研究方法與設計',
          exp: 12,
          requiredSkills: ['research_question_formulation'],
          category: '方法技能'
        },
        {
          id: 'research_data_analysis',
          name: '資料分析',
          description: '分析研究數據與資料的技巧',
          exp: 15,
          requiredSkills: ['research_organization_basic'],
          category: '分析技能'
        },
        {
          id: 'research_academic_writing',
          name: '學術寫作',
          description: '撰寫研究報告與論文的技巧',
          exp: 18,
          requiredSkills: ['research_methodology_basic'],
          category: '寫作技能'
        }
      ]
    },
    {
      name: '研究專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'research_project_management',
          name: '研究專案管理',
          description: '管理大型研究專案的能力',
          exp: 20,
          requiredSkills: ['research_data_analysis'],
          category: '管理技能'
        },
        {
          id: 'research_publication',
          name: '研究發表',
          description: '發表研究成果的技巧',
          exp: 25,
          requiredSkills: ['research_academic_writing'],
          category: '發表技能'
        },
        {
          id: 'research_collaboration',
          name: '研究合作',
          description: '與他人協作進行研究的能力',
          exp: 22,
          requiredSkills: ['research_project_management'],
          category: '合作技能'
        }
      ]
    }
  ]
}
