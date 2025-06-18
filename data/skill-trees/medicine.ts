import type { SkillTree } from './index'

// 醫學學類技能樹
export const medicineSkills: SkillTree = {
  name: '醫學',
  description: '臨床醫學、基礎醫學等專業技能樹',
  icon: '🩺',
  color: '#DC143C',
  levels: [
    {
      name: '基礎入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'medicine-anatomy',
          name: '人體解剖學',
          description: '學習人體結構和器官組織',
          exp: 100,
          requiredSkills: [],
          category: '基礎醫學'
        },
        {
          id: 'medicine-physiology',
          name: '生理學',
          description: '了解人體正常生理功能',
          exp: 110,
          requiredSkills: ['medicine-anatomy'],
          category: '基礎醫學'
        },
        {
          id: 'medicine-biochemistry',
          name: '生物化學',
          description: '學習人體生化反應',
          exp: 90,
          requiredSkills: [],
          category: '基礎醫學'
        },
        {
          id: 'medicine-ethics',
          name: '醫學倫理',
          description: '掌握醫療倫理和法規',
          exp: 80,
          requiredSkills: [],
          category: '醫學人文'
        }
      ]
    },
    {
      name: '初級發展 (Lv.11-20)',
      requiredLevel: 11,
      skills: [
        {
          id: 'medicine-pathology',
          name: '病理學',
          description: '研究疾病的發生和發展',
          exp: 180,
          requiredSkills: ['medicine-physiology'],
          category: '基礎醫學'
        },
        {
          id: 'medicine-pharmacology',
          name: '藥理學',
          description: '學習藥物作用機制',
          exp: 170,
          requiredSkills: ['medicine-biochemistry'],
          category: '基礎醫學'
        },
        {
          id: 'medicine-microbiology',
          name: '微生物學',
          description: '研究病原微生物',
          exp: 160,
          requiredSkills: ['medicine-biochemistry'],
          category: '基礎醫學'
        },
        {
          id: 'medicine-physical-exam',
          name: '理學檢查',
          description: '掌握基本身體檢查技能',
          exp: 200,
          requiredSkills: ['medicine-anatomy'],
          category: '臨床技能'
        }
      ]
    },
    {
      name: '中級進階 (Lv.21-35)',
      requiredLevel: 21,
      skills: [
        {
          id: 'medicine-internal',
          name: '內科學',
          description: '診斷和治療內科疾病',
          exp: 300,
          requiredSkills: ['medicine-pathology'],
          category: '臨床醫學'
        },
        {
          id: 'medicine-surgery',
          name: '外科學',
          description: '學習外科手術技能',
          exp: 350,
          requiredSkills: ['medicine-anatomy'],
          category: '臨床醫學'
        },
        {
          id: 'medicine-pediatrics',
          name: '小兒科學',
          description: '兒童疾病診斷和治療',
          exp: 280,
          requiredSkills: ['medicine-internal'],
          category: '臨床醫學'
        },
        {
          id: 'medicine-diagnostics',
          name: '診斷學',
          description: '綜合運用診斷技能',
          exp: 250,
          requiredSkills: ['medicine-physical-exam'],
          category: '診斷技能'
        }
      ]
    },
    {
      name: '高級專精 (Lv.36-50)',
      requiredLevel: 36,
      skills: [
        {
          id: 'medicine-cardiology',
          name: '心臟內科',
          description: '心血管疾病專科診療',
          exp: 400,
          requiredSkills: ['medicine-internal'],
          category: '專科醫學'
        },
        {
          id: 'medicine-neurology',
          name: '神經內科',
          description: '神經系統疾病診療',
          exp: 420,
          requiredSkills: ['medicine-internal'],
          category: '專科醫學'
        },
        {
          id: 'medicine-orthopedics',
          name: '骨科',
          description: '骨骼肌肉系統手術',
          exp: 450,
          requiredSkills: ['medicine-surgery'],
          category: '外科專科'
        },
        {
          id: 'medicine-emergency',
          name: '急診醫學',
          description: '急診搶救和創傷處理',
          exp: 380,
          requiredSkills: ['medicine-diagnostics'],
          category: '急診醫學'
        }
      ]
    },
    {
      name: '專業領域 (Lv.51-65)',
      requiredLevel: 51,
      skills: [
        {
          id: 'medicine-oncology',
          name: '腫瘤學',
          description: '癌症診斷和治療',
          exp: 500,
          requiredSkills: ['medicine-cardiology'],
          category: '專科醫學'
        },
        {
          id: 'medicine-neurosurgery',
          name: '神經外科',
          description: '腦部和脊髓手術',
          exp: 600,
          requiredSkills: ['medicine-neurology'],
          category: '外科專科'
        },
        {
          id: 'medicine-transplant',
          name: '器官移植',
          description: '器官移植手術和護理',
          exp: 650,
          requiredSkills: ['medicine-orthopedics'],
          category: '移植醫學'
        },
        {
          id: 'medicine-precision',
          name: '精準醫學',
          description: '個人化醫療和基因治療',
          exp: 550,
          requiredSkills: ['medicine-oncology'],
          category: '精準醫學'
        }
      ]
    },
    {
      name: '專家級別 (Lv.66-75)',
      requiredLevel: 66,
      skills: [
        {
          id: 'medicine-regenerative',
          name: '再生醫學',
          description: '幹細胞和組織再生治療',
          exp: 700,
          requiredSkills: ['medicine-transplant'],
          category: '再生醫學'
        },
        {
          id: 'medicine-telemedicine',
          name: '遠距醫療',
          description: '數位健康和遠端診療',
          exp: 650,
          requiredSkills: ['medicine-precision'],
          category: '數位醫療'
        },
        {
          id: 'medicine-ai-diagnosis',
          name: 'AI輔助診斷',
          description: '人工智慧醫療診斷',
          exp: 680,
          requiredSkills: ['medicine-precision'],
          category: 'AI醫療'
        }
      ]
    },
    {
      name: '大師境界 (Lv.76-85)',
      requiredLevel: 76,
      skills: [
        {
          id: 'medicine-innovation',
          name: '醫療創新',
          description: '開發新的治療方法',
          exp: 800,
          requiredSkills: ['medicine-regenerative'],
          category: '醫療創新'
        },
        {
          id: 'medicine-research',
          name: '醫學研究',
          description: '進行前沿醫學研究',
          exp: 850,
          requiredSkills: ['medicine-ai-diagnosis'],
          category: '醫學研究'
        }
      ]
    },
    {
      name: '宗師級別 (Lv.86-95)',
      requiredLevel: 86,
      skills: [
        {
          id: 'medicine-breakthrough',
          name: '醫學突破',
          description: '實現重大醫學突破',
          exp: 900,
          requiredSkills: ['medicine-innovation'],
          category: '醫學突破'
        },
        {
          id: 'medicine-leadership',
          name: '醫學領導',
          description: '領導醫學界發展',
          exp: 950,
          requiredSkills: ['medicine-research'],
          category: '學術領導'
        }
      ]
    },
    {
      name: '傳奇境界 (Lv.96-99)',
      requiredLevel: 96,
      skills: [
        {
          id: 'medicine-master',
          name: '醫學大師',
          description: '成為醫學界權威',
          exp: 1000,
          requiredSkills: ['medicine-breakthrough', 'medicine-leadership'],
          category: '大師級別'
        }
      ]
    },
    {
      name: '超凡入聖 (Lv.100)',
      requiredLevel: 100,
      skills: [
        {
          id: 'medicine-legend',
          name: '醫學傳奇',
          description: '改變醫學發展歷程',
          exp: 1500,
          requiredSkills: ['medicine-master'],
          category: '傳奇成就'
        }
      ]
    }
  ]
}
