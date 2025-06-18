// 資訊工程技能樹
export const computerScienceSkills = {
  name: '資訊工程',
  description: '程式設計與電腦科學相關技能',
  icon: '💻',
  color: '#3b82f6',
  levels: [
    {
      name: '程式基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'cs_basic_syntax',
          name: '程式語法基礎',
          description: '掌握基本程式語法與概念',
          exp: 5,
          requiredSkills: [],
          category: '程式設計'
        },
        {
          id: 'cs_variables_types',
          name: '變數與資料型態',
          description: '理解各種資料型態的使用',
          exp: 6,
          requiredSkills: ['cs_basic_syntax'],
          category: '程式設計'
        },
        {
          id: 'cs_control_flow',
          name: '流程控制',
          description: '條件判斷與迴圈結構',
          exp: 8,
          requiredSkills: ['cs_variables_types'],
          category: '程式設計'
        },
        {
          id: 'cs_functions',
          name: '函數與模組',
          description: '函數定義與模組化程式設計',
          exp: 10,
          requiredSkills: ['cs_control_flow'],
          category: '程式設計'
        },
        {
          id: 'cs_debugging',
          name: '程式除錯',
          description: '除錯技巧與工具使用',
          exp: 7,
          requiredSkills: ['cs_functions'],
          category: '開發技能'
        }
      ]
    },
    {
      name: '資料結構 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'cs_arrays_lists',
          name: '陣列與串列',
          description: '線性資料結構的實作與應用',
          exp: 12,
          requiredSkills: ['cs_debugging'],
          category: '資料結構'
        },
        {
          id: 'cs_stacks_queues',
          name: '堆疊與佇列',
          description: 'LIFO與FIFO資料結構',
          exp: 15,
          requiredSkills: ['cs_arrays_lists'],
          category: '資料結構'
        },
        {
          id: 'cs_linked_lists',
          name: '連結串列',
          description: '動態記憶體配置與指標操作',
          exp: 18,
          requiredSkills: ['cs_stacks_queues'],
          category: '資料結構'
        },
        {
          id: 'cs_trees',
          name: '樹狀結構',
          description: '二元樹與樹的遍歷方法',
          exp: 20,
          requiredSkills: ['cs_linked_lists'],
          category: '資料結構'
        },
        {
          id: 'cs_hash_tables',
          name: '雜湊表',
          description: '雜湊函數與碰撞處理',
          exp: 22,
          requiredSkills: ['cs_trees'],
          category: '資料結構'
        }
      ]
    },
    {
      name: '演算法設計 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'cs_sorting',
          name: '排序演算法',
          description: '各種排序方法的實作與比較',
          exp: 25,
          requiredSkills: ['cs_hash_tables'],
          category: '演算法'
        },
        {
          id: 'cs_searching',
          name: '搜尋演算法',
          description: '線性與二元搜尋方法',
          exp: 28,
          requiredSkills: ['cs_sorting'],
          category: '演算法'
        },
        {
          id: 'cs_recursion',
          name: '遞迴演算法',
          description: '遞迴思維與分治法',
          exp: 30,
          requiredSkills: ['cs_searching'],
          category: '演算法'
        },
        {
          id: 'cs_dynamic_programming',
          name: '動態規劃',
          description: '最佳化問題的解法',
          exp: 35,
          requiredSkills: ['cs_recursion'],
          category: '演算法'
        },
        {
          id: 'cs_graph_algorithms',
          name: '圖形演算法',
          description: 'DFS、BFS與最短路徑',
          exp: 38,
          requiredSkills: ['cs_dynamic_programming'],
          category: '演算法'
        }
      ]
    },
    {
      name: '物件導向 (Lv.41-55)',
      requiredLevel: 41,
      skills: [
        {
          id: 'cs_oop_concepts',
          name: 'OOP基本概念',
          description: '封裝、繼承、多型的理解',
          exp: 40,
          requiredSkills: ['cs_graph_algorithms'],
          category: '物件導向'
        },
        {
          id: 'cs_class_design',
          name: '類別設計',
          description: '設計良好的類別結構',
          exp: 42,
          requiredSkills: ['cs_oop_concepts'],
          category: '物件導向'
        },
        {
          id: 'cs_inheritance',
          name: '繼承與多型',
          description: '進階OOP特性的應用',
          exp: 45,
          requiredSkills: ['cs_class_design'],
          category: '物件導向'
        },
        {
          id: 'cs_design_patterns',
          name: '設計模式',
          description: '常用的軟體設計模式',
          exp: 48,
          requiredSkills: ['cs_inheritance'],
          category: '軟體設計'
        },
        {
          id: 'cs_uml',
          name: 'UML建模',
          description: '統一建模語言的使用',
          exp: 50,
          requiredSkills: ['cs_design_patterns'],
          category: '軟體設計'
        }
      ]
    },
    {
      name: '軟體工程 (Lv.56-70)',
      requiredLevel: 56,
      skills: [
        {
          id: 'cs_version_control',
          name: '版本控制',
          description: 'Git與團隊協作工具',
          exp: 52,
          requiredSkills: ['cs_uml'],
          category: '開發工具'
        },
        {
          id: 'cs_testing',
          name: '軟體測試',
          description: '單元測試與整合測試',
          exp: 55,
          requiredSkills: ['cs_version_control'],
          category: '品質保證'
        },
        {
          id: 'cs_agile',
          name: '敏捷開發',
          description: 'Scrum與敏捷開發方法',
          exp: 58,
          requiredSkills: ['cs_testing'],
          category: '專案管理'
        },
        {
          id: 'cs_cicd',
          name: 'CI/CD流程',
          description: '持續整合與部署',
          exp: 60,
          requiredSkills: ['cs_agile'],
          category: 'DevOps'
        },
        {
          id: 'cs_code_review',
          name: '程式碼審查',
          description: '程式品質檢查與重構',
          exp: 62,
          requiredSkills: ['cs_cicd'],
          category: '品質保證'
        }
      ]
    },
    {
      name: '系統開發 (Lv.71-85)',
      requiredLevel: 71,
      skills: [
        {
          id: 'cs_databases',
          name: '資料庫系統',
          description: 'SQL與NoSQL資料庫設計',
          exp: 65,
          requiredSkills: ['cs_code_review'],
          category: '資料管理'
        },
        {
          id: 'cs_web_development',
          name: '網頁開發',
          description: '前後端分離架構設計',
          exp: 68,
          requiredSkills: ['cs_databases'],
          category: '網頁技術'
        },
        {
          id: 'cs_api_design',
          name: 'API設計',
          description: 'RESTful API與GraphQL',
          exp: 70,
          requiredSkills: ['cs_web_development'],
          category: '系統整合'
        },
        {
          id: 'cs_microservices',
          name: '微服務架構',
          description: '分散式系統設計',
          exp: 75,
          requiredSkills: ['cs_api_design'],
          category: '系統架構'
        },
        {
          id: 'cs_cloud_computing',
          name: '雲端運算',
          description: 'AWS/Azure雲端服務',
          exp: 78,
          requiredSkills: ['cs_microservices'],
          category: '雲端技術'
        }
      ]
    },
    {
      name: '專業領域 (Lv.86-100)',
      requiredLevel: 86,
      skills: [
        {
          id: 'cs_machine_learning',
          name: '機器學習',
          description: '監督式與非監督式學習',
          exp: 80,
          requiredSkills: ['cs_cloud_computing'],
          category: '人工智慧'
        },
        {
          id: 'cs_deep_learning',
          name: '深度學習',
          description: '神經網路與深度學習框架',
          exp: 85,
          requiredSkills: ['cs_machine_learning'],
          category: '人工智慧'
        },
        {
          id: 'cs_blockchain',
          name: '區塊鏈技術',
          description: '分散式帳本與智能合約',
          exp: 88,
          requiredSkills: ['cs_deep_learning'],
          category: '新興技術'
        },
        {
          id: 'cs_cybersecurity',
          name: '資訊安全',
          description: '網路安全與加密技術',
          exp: 90,
          requiredSkills: ['cs_blockchain'],
          category: '資訊安全'
        },
        {
          id: 'cs_research_innovation',
          name: '研究創新',
          description: '技術研發與論文發表',
          exp: 100,
          requiredSkills: ['cs_cybersecurity'],
          category: '學術研究'
        }
      ]
    }
  ]
}
