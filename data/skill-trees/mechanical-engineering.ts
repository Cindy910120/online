// 機械工程技能樹
export const mechanicalEngineeringSkills = {
  name: '機械工程',
  description: '機械設計、製造與自動化相關技能',
  icon: '⚙️',
  color: '#64748b',
  levels: [
    {
      name: '工程基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'me_math_basic',
          name: '工程數學基礎',
          description: '微積分、線性代數與工程應用',
          exp: 5,
          requiredSkills: [],
          category: '數學基礎'
        },
        {
          id: 'me_physics_mechanics',
          name: '工程力學',
          description: '靜力學、動力學基本概念',
          exp: 6,
          requiredSkills: [],
          category: '力學基礎'
        },
        {
          id: 'me_materials_basic',
          name: '材料科學基礎',
          description: '金屬材料性質與應用',
          exp: 7,
          requiredSkills: ['me_physics_mechanics'],
          category: '材料科學'
        },
        {
          id: 'me_drawing_basic',
          name: '工程製圖',
          description: '技術圖面繪製與讀圖',
          exp: 8,
          requiredSkills: ['me_math_basic'],
          category: '設計繪圖'
        }
      ]
    },
    {
      name: '設計與分析 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'me_cad_2d',
          name: '2D CAD設計',
          description: 'AutoCAD 2D繪圖技能',
          exp: 12,
          requiredSkills: ['me_drawing_basic'],
          category: '電腦輔助設計'
        },
        {
          id: 'me_mechanics_strength',
          name: '材料力學',
          description: '應力、應變與材料強度分析',
          exp: 15,
          requiredSkills: ['me_materials_basic'],
          category: '力學分析'
        },
        {
          id: 'me_thermodynamics',
          name: '熱力學',
          description: '熱力循環與能源轉換',
          exp: 14,
          requiredSkills: ['me_physics_mechanics'],
          category: '熱流學'
        },
        {
          id: 'me_fluid_mechanics',
          name: '流體力學',
          description: '流體性質與流動分析',
          exp: 16,
          requiredSkills: ['me_thermodynamics'],
          category: '熱流學'
        },
        {
          id: 'me_machine_elements',
          name: '機械元件設計',
          description: '齒輪、軸承、螺絲等元件設計',
          exp: 18,
          requiredSkills: ['me_mechanics_strength'],
          category: '機械設計'
        }
      ]
    },
    {
      name: '專業設計 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'me_cad_3d',
          name: '3D CAD設計',
          description: 'SolidWorks、Pro/E等3D建模',
          exp: 25,
          requiredSkills: ['me_cad_2d', 'me_machine_elements'],
          category: '3D設計'
        },
        {
          id: 'me_kinematics',
          name: '機構學',
          description: '機構運動分析與合成',
          exp: 28,
          requiredSkills: ['me_machine_elements'],
          category: '機構設計'
        },
        {
          id: 'me_vibration',
          name: '振動學',
          description: '機械振動分析與控制',
          exp: 30,
          requiredSkills: ['me_kinematics'],
          category: '動力學'
        },
        {
          id: 'me_heat_transfer',
          name: '熱傳學',
          description: '傳導、對流、輻射熱傳',
          exp: 32,
          requiredSkills: ['me_fluid_mechanics'],
          category: '熱流學'
        },
        {
          id: 'me_machine_design',
          name: '機械設計',
          description: '完整機械系統設計',
          exp: 35,
          requiredSkills: ['me_cad_3d', 'me_vibration'],
          category: '系統設計'
        }
      ]
    },
    {
      name: '製造技術 (Lv.41-55)',
      requiredLevel: 41,
      skills: [
        {
          id: 'me_manufacturing',
          name: '製造程序',
          description: '切削、成型、焊接等製造技術',
          exp: 38,
          requiredSkills: ['me_machine_design'],
          category: '製造技術'
        },
        {
          id: 'me_cnc_programming',
          name: 'CNC程式設計',
          description: '數控機床程式撰寫',
          exp: 42,
          requiredSkills: ['me_manufacturing'],
          category: '數控技術'
        },
        {
          id: 'me_quality_control',
          name: '品質管制',
          description: '統計品管與量測技術',
          exp: 40,
          requiredSkills: ['me_manufacturing'],
          category: '品質管理'
        },
        {
          id: 'me_automation_basic',
          name: '自動化基礎',
          description: 'PLC控制與感測器應用',
          exp: 45,
          requiredSkills: ['me_cnc_programming'],
          category: '自動化技術'
        },
        {
          id: 'me_cae_analysis',
          name: 'CAE分析',
          description: '有限元素法結構分析',
          exp: 48,
          requiredSkills: ['me_machine_design'],
          category: '工程分析'
        }
      ]
    },
    {
      name: '先進技術 (Lv.56-70)',
      requiredLevel: 56,
      skills: [
        {
          id: 'me_robotics',
          name: '機器人學',
          description: '機器人運動學與控制',
          exp: 50,
          requiredSkills: ['me_automation_basic'],
          category: '機器人技術'
        },
        {
          id: 'me_additive_manufacturing',
          name: '3D列印技術',
          description: '積層製造技術與應用',
          exp: 52,
          requiredSkills: ['me_cae_analysis'],
          category: '先進製造'
        },
        {
          id: 'me_smart_manufacturing',
          name: '智慧製造',
          description: 'Industry 4.0與IoT應用',
          exp: 55,
          requiredSkills: ['me_robotics'],
          category: '智慧製造'
        },
        {
          id: 'me_optimization',
          name: '設計最佳化',
          description: '多目標最佳化設計',
          exp: 58,
          requiredSkills: ['me_additive_manufacturing'],
          category: '最佳化設計'
        },
        {
          id: 'me_renewable_energy',
          name: '再生能源技術',
          description: '風力、太陽能機械系統',
          exp: 60,
          requiredSkills: ['me_smart_manufacturing'],
          category: '能源技術'
        }
      ]
    },
    {
      name: '專精領域 (Lv.71-85)',
      requiredLevel: 71,
      skills: [
        {
          id: 'me_micro_machining',
          name: '微機械加工',
          description: '微奈米級精密加工技術',
          exp: 65,
          requiredSkills: ['me_optimization'],
          category: '精密加工'
        },
        {
          id: 'me_bio_mechanics',
          name: '生物力學',
          description: '醫療器材與生物機械',
          exp: 68,
          requiredSkills: ['me_renewable_energy'],
          category: '生醫工程'
        },
        {
          id: 'me_aerospace',
          name: '航太工程',
          description: '航空航天機械系統',
          exp: 70,
          requiredSkills: ['me_micro_machining'],
          category: '航太技術'
        },
        {
          id: 'me_smart_materials',
          name: '智慧材料應用',
          description: '形狀記憶合金與智慧材料',
          exp: 72,
          requiredSkills: ['me_bio_mechanics'],
          category: '先進材料'
        },
        {
          id: 'me_digital_twin',
          name: '數位雙生技術',
          description: '虛實整合與預測性維護',
          exp: 75,
          requiredSkills: ['me_aerospace'],
          category: '數位技術'
        }
      ]
    },
    {
      name: '機械大師 (Lv.86-100)',
      requiredLevel: 86,
      skills: [
        {
          id: 'me_innovation_leader',
          name: '技術創新領導',
          description: '領導機械技術創新專案',
          exp: 85,
          requiredSkills: ['me_smart_materials', 'me_digital_twin'],
          category: '創新領導'
        },
        {
          id: 'me_sustainable_design',
          name: '永續設計大師',
          description: '環保與永續機械設計',
          exp: 88,
          requiredSkills: ['me_innovation_leader'],
          category: '永續發展'
        },
        {
          id: 'me_ai_integration',
          name: 'AI機械整合',
          description: '人工智慧與機械系統整合',
          exp: 92,
          requiredSkills: ['me_sustainable_design'],
          category: 'AI整合'
        },
        {
          id: 'me_research_pioneer',
          name: '研究先驅',
          description: '前瞻機械技術研究',
          exp: 95,
          requiredSkills: ['me_ai_integration'],
          category: '學術研究'
        },
        {
          id: 'me_industry_transformer',
          name: '產業變革者',
          description: '引領機械工業革命',
          exp: 100,
          requiredSkills: ['me_research_pioneer'],
          category: '產業領導'
        }
      ]
    }
  ]
}
