// 電機工程技能樹
export const electricalEngineeringSkills = {
  name: '電機工程',
  description: '電機工程相關技能與知識',
  icon: '⚡',
  color: '#f59e0b',
  levels: [
    {
      name: '基礎電學 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'ee_basic_ohm',
          name: '歐姆定律',
          description: '理解電壓、電流、電阻的基本關係',
          exp: 5,
          requiredSkills: [],
          category: '基礎理論'
        },
        {
          id: 'ee_basic_kirchhoff',
          name: '基爾霍夫定律',
          description: '掌握電路分析的基本定律',
          exp: 8,
          requiredSkills: ['ee_basic_ohm'],
          category: '基礎理論'
        },
        {
          id: 'ee_dc_circuits',
          name: '直流電路分析',
          description: '分析直流電路的方法與技巧',
          exp: 10,
          requiredSkills: ['ee_basic_kirchhoff'],
          category: '電路分析'
        },
        {
          id: 'ee_resistor_networks',
          name: '電阻網路',
          description: '串聯、並聯電阻的計算與分析',
          exp: 6,
          requiredSkills: ['ee_basic_ohm'],
          category: '電路分析'
        }
      ]
    },
    {
      name: '進階電路 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'ee_ac_circuits',
          name: '交流電路',
          description: '理解交流電的基本概念與分析方法',
          exp: 15,
          requiredSkills: ['ee_dc_circuits'],
          category: '電路分析'
        },
        {
          id: 'ee_complex_impedance',
          name: '複數阻抗',
          description: '使用複數分析交流電路',
          exp: 18,
          requiredSkills: ['ee_ac_circuits'],
          category: '數學工具'
        },
        {
          id: 'ee_phasor_analysis',
          name: '相量分析',
          description: '使用相量圖分析交流電路',
          exp: 20,
          requiredSkills: ['ee_complex_impedance'],
          category: '分析方法'
        },
        {
          id: 'ee_rlc_circuits',
          name: 'RLC電路',
          description: '電阻、電感、電容組合電路分析',
          exp: 22,
          requiredSkills: ['ee_phasor_analysis'],
          category: '電路分析'
        },
        {
          id: 'ee_resonance',
          name: '共振電路',
          description: '理解串聯與並聯共振現象',
          exp: 25,
          requiredSkills: ['ee_rlc_circuits'],
          category: '特殊電路'
        }
      ]
    },
    {
      name: '電子電路 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'ee_diodes',
          name: '二極體電路',
          description: '掌握二極體的特性與應用',
          exp: 28,
          requiredSkills: ['ee_resonance'],
          category: '電子元件'
        },
        {
          id: 'ee_transistors',
          name: '電晶體基礎',
          description: '理解BJT與FET的工作原理',
          exp: 30,
          requiredSkills: ['ee_diodes'],
          category: '電子元件'
        },
        {
          id: 'ee_amplifiers',
          name: '放大器設計',
          description: '設計基本的放大器電路',
          exp: 35,
          requiredSkills: ['ee_transistors'],
          category: '類比電路'
        },
        {
          id: 'ee_op_amps',
          name: '運算放大器',
          description: '理解運算放大器的特性與應用',
          exp: 32,
          requiredSkills: ['ee_amplifiers'],
          category: '積體電路'
        },
        {
          id: 'ee_filters',
          name: '濾波器設計',
          description: '設計主動與被動濾波器',
          exp: 38,
          requiredSkills: ['ee_op_amps'],
          category: '信號處理'
        }
      ]
    },
    {
      name: '數位電路 (Lv.41-55)',
      requiredLevel: 41,
      skills: [
        {
          id: 'ee_logic_gates',
          name: '邏輯閘',
          description: '理解基本邏輯閘的功能',
          exp: 40,
          requiredSkills: ['ee_filters'],
          category: '數位邏輯'
        },
        {
          id: 'ee_boolean_algebra',
          name: '布林代數',
          description: '掌握布林代數運算規則',
          exp: 42,
          requiredSkills: ['ee_logic_gates'],
          category: '數學工具'
        },
        {
          id: 'ee_combinational',
          name: '組合邏輯電路',
          description: '設計組合邏輯電路',
          exp: 45,
          requiredSkills: ['ee_boolean_algebra'],
          category: '數位設計'
        },
        {
          id: 'ee_sequential',
          name: '序向邏輯電路',
          description: '設計正反器與計數器',
          exp: 48,
          requiredSkills: ['ee_combinational'],
          category: '數位設計'
        },
        {
          id: 'ee_state_machines',
          name: '狀態機設計',
          description: '設計有限狀態機',
          exp: 50,
          requiredSkills: ['ee_sequential'],
          category: '系統設計'
        }
      ]
    },
    {
      name: '電力系統 (Lv.56-70)',
      requiredLevel: 56,
      skills: [
        {
          id: 'ee_transformers',
          name: '變壓器原理',
          description: '理解變壓器的工作原理與特性',
          exp: 55,
          requiredSkills: ['ee_state_machines'],
          category: '電力設備'
        },
        {
          id: 'ee_induction_motors',
          name: '感應馬達',
          description: '感應馬達的結構與控制',
          exp: 58,
          requiredSkills: ['ee_transformers'],
          category: '電機設備'
        },
        {
          id: 'ee_power_electronics',
          name: '電力電子',
          description: '功率半導體元件與電路',
          exp: 60,
          requiredSkills: ['ee_induction_motors'],
          category: '電力轉換'
        },
        {
          id: 'ee_inverters',
          name: '變頻器設計',
          description: '設計DC/AC變頻器',
          exp: 65,
          requiredSkills: ['ee_power_electronics'],
          category: '電力轉換'
        },
        {
          id: 'ee_renewable_energy',
          name: '再生能源系統',
          description: '太陽能與風力發電系統',
          exp: 68,
          requiredSkills: ['ee_inverters'],
          category: '新能源'
        }
      ]
    },
    {
      name: '控制系統 (Lv.71-85)',
      requiredLevel: 71,
      skills: [
        {
          id: 'ee_control_theory',
          name: '控制理論基礎',
          description: '古典控制理論與系統穩定性',
          exp: 70,
          requiredSkills: ['ee_renewable_energy'],
          category: '控制理論'
        },
        {
          id: 'ee_pid_control',
          name: 'PID控制器',
          description: '設計與調整PID控制器',
          exp: 72,
          requiredSkills: ['ee_control_theory'],
          category: '控制器設計'
        },
        {
          id: 'ee_state_space',
          name: '狀態空間分析',
          description: '現代控制理論方法',
          exp: 75,
          requiredSkills: ['ee_pid_control'],
          category: '現代控制'
        },
        {
          id: 'ee_optimal_control',
          name: '最優控制',
          description: '最優控制理論與應用',
          exp: 78,
          requiredSkills: ['ee_state_space'],
          category: '高級控制'
        },
        {
          id: 'ee_adaptive_control',
          name: '適應性控制',
          description: '自適應控制系統設計',
          exp: 80,
          requiredSkills: ['ee_optimal_control'],
          category: '智能控制'
        }
      ]
    },
    {
      name: '專精領域 (Lv.86-100)',
      requiredLevel: 86,
      skills: [
        {
          id: 'ee_signal_processing',
          name: '數位信號處理',
          description: 'DSP理論與FPGA實現',
          exp: 85,
          requiredSkills: ['ee_adaptive_control'],
          category: '信號處理'
        },
        {
          id: 'ee_embedded_systems',
          name: '嵌入式系統',
          description: '微控制器系統設計',
          exp: 88,
          requiredSkills: ['ee_signal_processing'],
          category: '嵌入式'
        },
        {
          id: 'ee_communication',
          name: '通訊系統',
          description: '數位通訊與網路系統',
          exp: 90,
          requiredSkills: ['ee_embedded_systems'],
          category: '通訊技術'
        },
        {
          id: 'ee_ai_hardware',
          name: 'AI硬體加速',
          description: '神經網路硬體實現',
          exp: 95,
          requiredSkills: ['ee_communication'],
          category: '人工智慧'
        },
        {
          id: 'ee_research_project',
          name: '研究專案',
          description: '獨立研究與創新設計',
          exp: 100,
          requiredSkills: ['ee_ai_hardware'],
          category: '研究創新'
        }
      ]
    }
  ]
}
