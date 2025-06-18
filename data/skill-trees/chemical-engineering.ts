// 化學工程技能樹
export const chemicalEngineeringSkills = {
  name: '化學工程',
  description: '化學程序設計與化工製程技術',
  icon: '🧪',
  color: '#059669',
  levels: [
    {
      name: '化工基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'che_chemistry_basic',
          name: '普通化學',
          description: '化學基本原理與反應',
          exp: 5,
          requiredSkills: [],
          category: '化學基礎'
        },
        {
          id: 'che_math_engineering',
          name: '工程數學',
          description: '微積分與線性代數應用',
          exp: 6,
          requiredSkills: [],
          category: '數學基礎'
        },
        {
          id: 'che_physics_basic',
          name: '物理化學基礎',
          description: '熱力學與動力學基本概念',
          exp: 7,
          requiredSkills: ['che_chemistry_basic'],
          category: '物理化學'
        },
        {
          id: 'che_organic_chemistry',
          name: '有機化學',
          description: '有機化合物結構與反應',
          exp: 8,
          requiredSkills: ['che_chemistry_basic'],
          category: '有機化學'
        }
      ]
    },
    {
      name: '程序基礎 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'che_material_balance',
          name: '物料平衡',
          description: '化工程序物料計算',
          exp: 12,
          requiredSkills: ['che_math_engineering'],
          category: '程序計算'
        },
        {
          id: 'che_energy_balance',
          name: '能量平衡',
          description: '化工程序能量計算',
          exp: 15,
          requiredSkills: ['che_physics_basic', 'che_material_balance'],
          category: '程序計算'
        },
        {
          id: 'che_thermodynamics',
          name: '化工熱力學',
          description: '相平衡與化學平衡',
          exp: 18,
          requiredSkills: ['che_energy_balance'],
          category: '熱力學'
        },
        {
          id: 'che_fluid_mechanics',
          name: '化工流體力學',
          description: '流體流動與輸送現象',
          exp: 16,
          requiredSkills: ['che_material_balance'],
          category: '傳遞現象'
        },
        {
          id: 'che_reaction_engineering',
          name: '反應工程',
          description: '化學反應器設計與分析',
          exp: 20,
          requiredSkills: ['che_organic_chemistry', 'che_thermodynamics'],
          category: '反應工程'
        }
      ]
    },
    {
      name: '傳遞現象 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'che_heat_transfer',
          name: '熱傳遞',
          description: '傳導、對流、輻射熱傳',
          exp: 25,
          requiredSkills: ['che_fluid_mechanics', 'che_thermodynamics'],
          category: '熱傳遞'
        },
        {
          id: 'che_mass_transfer',
          name: '質量傳遞',
          description: '擴散與對流質傳',
          exp: 28,
          requiredSkills: ['che_heat_transfer'],
          category: '質量傳遞'
        },
        {
          id: 'che_separation_processes',
          name: '分離程序',
          description: '蒸餾、萃取、吸收等分離技術',
          exp: 30,
          requiredSkills: ['che_mass_transfer'],
          category: '分離技術'
        },
        {
          id: 'che_reactor_design',
          name: '反應器設計',
          description: '各種反應器設計與最佳化',
          exp: 32,
          requiredSkills: ['che_reaction_engineering', 'che_heat_transfer'],
          category: '反應器設計'
        },
        {
          id: 'che_process_control',
          name: '程序控制',
          description: '自動控制系統設計',
          exp: 35,
          requiredSkills: ['che_separation_processes'],
          category: '程序控制'
        }
      ]
    },
    {
      name: '程序設計 (Lv.41-55)',
      requiredLevel: 41,
      skills: [
        {
          id: 'che_process_design',
          name: '程序設計',
          description: '完整化工程序流程設計',
          exp: 38,
          requiredSkills: ['che_reactor_design', 'che_process_control'],
          category: '程序設計'
        },
        {
          id: 'che_equipment_design',
          name: '設備設計',
          description: '化工設備機械設計',
          exp: 42,
          requiredSkills: ['che_process_design'],
          category: '設備設計'
        },
        {
          id: 'che_safety_engineering',
          name: '化工安全',
          description: '製程安全分析與管理',
          exp: 40,
          requiredSkills: ['che_process_design'],
          category: '安全工程'
        },
        {
          id: 'che_environmental',
          name: '環境化工',
          description: '污染防治與環保技術',
          exp: 45,
          requiredSkills: ['che_safety_engineering'],
          category: '環境工程'
        },
        {
          id: 'che_economics',
          name: '化工經濟',
          description: '成本估算與經濟評估',
          exp: 38,
          requiredSkills: ['che_equipment_design'],
          category: '工程經濟'
        }
      ]
    },
    {
      name: '先進技術 (Lv.56-70)',
      requiredLevel: 56,
      skills: [
        {
          id: 'che_catalysis',
          name: '催化工程',
          description: '催化劑設計與催化反應',
          exp: 50,
          requiredSkills: ['che_environmental'],
          category: '催化技術'
        },
        {
          id: 'che_biotechnology',
          name: '生化工程',
          description: '生物反應器與發酵技術',
          exp: 52,
          requiredSkills: ['che_economics'],
          category: '生化技術'
        },
        {
          id: 'che_materials_engineering',
          name: '材料化工',
          description: '高分子材料與奈米材料',
          exp: 55,
          requiredSkills: ['che_catalysis'],
          category: '材料技術'
        },
        {
          id: 'che_membrane_technology',
          name: '薄膜技術',
          description: '薄膜分離與膜反應器',
          exp: 58,
          requiredSkills: ['che_biotechnology'],
          category: '薄膜技術'
        },
        {
          id: 'che_microreactor',
          name: '微反應器技術',
          description: '微化工與程序強化',
          exp: 60,
          requiredSkills: ['che_materials_engineering'],
          category: '微化工'
        }
      ]
    },
    {
      name: '專精領域 (Lv.71-85)',
      requiredLevel: 71,
      skills: [
        {
          id: 'che_green_chemistry',
          name: '綠色化學',
          description: '永續化學製程設計',
          exp: 65,
          requiredSkills: ['che_membrane_technology'],
          category: '綠色技術'
        },
        {
          id: 'che_pharmaceutical',
          name: '製藥工程',
          description: '藥物製程開發與設計',
          exp: 68,
          requiredSkills: ['che_microreactor'],
          category: '製藥技術'
        },
        {
          id: 'che_energy_systems',
          name: '能源系統',
          description: '燃料電池與能源轉換',
          exp: 70,
          requiredSkills: ['che_green_chemistry'],
          category: '能源技術'
        },
        {
          id: 'che_smart_manufacturing',
          name: '智慧製造',
          description: 'AI在化工製程的應用',
          exp: 72,
          requiredSkills: ['che_pharmaceutical'],
          category: '智慧製造'
        },
        {
          id: 'che_molecular_engineering',
          name: '分子工程',
          description: '分子設計與工程',
          exp: 75,
          requiredSkills: ['che_energy_systems'],
          category: '分子工程'
        }
      ]
    },
    {
      name: '化工大師 (Lv.86-100)',
      requiredLevel: 86,
      skills: [
        {
          id: 'che_innovation_leadership',
          name: '技術創新領導',
          description: '領導化工技術突破',
          exp: 85,
          requiredSkills: ['che_smart_manufacturing', 'che_molecular_engineering'],
          category: '創新領導'
        },
        {
          id: 'che_sustainable_processes',
          name: '永續程序大師',
          description: '零廢棄化工程序設計',
          exp: 88,
          requiredSkills: ['che_innovation_leadership'],
          category: '永續發展'
        },
        {
          id: 'che_digital_transformation',
          name: '數位轉型專家',
          description: '化工4.0與數位化',
          exp: 92,
          requiredSkills: ['che_sustainable_processes'],
          category: '數位轉型'
        },
        {
          id: 'che_research_pioneer',
          name: '研究先驅',
          description: '前瞻化工技術研究',
          exp: 95,
          requiredSkills: ['che_digital_transformation'],
          category: '學術研究'
        },
        {
          id: 'che_industry_revolutionary',
          name: '產業革命家',
          description: '引領化工產業變革',
          exp: 100,
          requiredSkills: ['che_research_pioneer'],
          category: '產業領導'
        }
      ]
    }
  ]
}
