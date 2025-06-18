import type { SkillTree } from './index'

// 物理學類技能樹
export const physicsSkills: SkillTree = {
  name: '物理學',
  description: '理論物理、應用物理、光電物理等專業技能樹',
  icon: '⚛️',
  color: '#4169E1',
  levels: [
    {
      name: '基礎入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'physics-mechanics',
          name: '力學',
          description: '掌握牛頓力學基本定律',
          exp: 100,
          requiredSkills: [],
          category: '古典物理'
        },
        {
          id: 'physics-thermodynamics',
          name: '熱力學',
          description: '學習熱力學定律和統計力學',
          exp: 110,
          requiredSkills: [],
          category: '古典物理'
        },
        {
          id: 'physics-electricity',
          name: '電磁學',
          description: '理解電場和磁場理論',
          exp: 120,
          requiredSkills: [],
          category: '古典物理'
        },
        {
          id: 'physics-waves',
          name: '波動學',
          description: '學習波的傳播和干涉現象',
          exp: 90,
          requiredSkills: [],
          category: '古典物理'
        }
      ]
    },
    {
      name: '初級發展 (Lv.11-20)',
      requiredLevel: 11,
      skills: [
        {
          id: 'physics-quantum-intro',
          name: '量子物理導論',
          description: '了解量子力學基本概念',
          exp: 200,
          requiredSkills: ['physics-waves'],
          category: '現代物理'
        },
        {
          id: 'physics-relativity',
          name: '相對論',
          description: '學習狹義和廣義相對論',
          exp: 180,
          requiredSkills: ['physics-mechanics'],
          category: '現代物理'
        },
        {
          id: 'physics-optics',
          name: '光學',
          description: '研究光的性質和光學儀器',
          exp: 170,
          requiredSkills: ['physics-electricity'],
          category: '光學物理'
        },
        {
          id: 'physics-lab',
          name: '物理實驗',
          description: '掌握基本物理實驗技能',
          exp: 160,
          requiredSkills: [],
          category: '實驗技能'
        }
      ]
    },
    {
      name: '中級進階 (Lv.21-35)',
      requiredLevel: 21,
      skills: [
        {
          id: 'physics-quantum-mechanics',
          name: '量子力學',
          description: '深入學習量子力學理論',
          exp: 300,
          requiredSkills: ['physics-quantum-intro'],
          category: '量子物理'
        },
        {
          id: 'physics-statistical-mechanics',
          name: '統計力學',
          description: '用統計方法研究多體系統',
          exp: 280,
          requiredSkills: ['physics-thermodynamics'],
          category: '統計物理'
        },
        {
          id: 'physics-solid-state',
          name: '固態物理',
          description: '研究固體材料的物理性質',
          exp: 320,
          requiredSkills: ['physics-quantum-mechanics'],
          category: '凝聚態物理'
        },
        {
          id: 'physics-electrodynamics',
          name: '電動力學',
          description: '研究電磁場的動力學',
          exp: 290,
          requiredSkills: ['physics-relativity'],
          category: '場論'
        }
      ]
    },
    {
      name: '高級專精 (Lv.36-50)',
      requiredLevel: 36,
      skills: [
        {
          id: 'physics-particle',
          name: '粒子物理',
          description: '研究基本粒子和相互作用',
          exp: 400,
          requiredSkills: ['physics-quantum-mechanics'],
          category: '高能物理'
        },
        {
          id: 'physics-nuclear',
          name: '原子核物理',
          description: '研究原子核結構和核反應',
          exp: 380,
          requiredSkills: ['physics-quantum-mechanics'],
          category: '核物理'
        },
        {
          id: 'physics-condensed-matter',
          name: '凝聚態物理',
          description: '研究多體量子系統',
          exp: 450,
          requiredSkills: ['physics-solid-state'],
          category: '凝聚態物理'
        },
        {
          id: 'physics-laser',
          name: '雷射物理',
          description: '研究雷射原理和應用',
          exp: 350,
          requiredSkills: ['physics-optics'],
          category: '光學物理'
        }
      ]
    },
    {
      name: '專業領域 (Lv.51-65)',
      requiredLevel: 51,
      skills: [
        {
          id: 'physics-field-theory',
          name: '量子場論',
          description: '研究量子場的理論',
          exp: 500,
          requiredSkills: ['physics-particle'],
          category: '理論物理'
        },
        {
          id: 'physics-cosmology',
          name: '宇宙學',
          description: '研究宇宙的起源和演化',
          exp: 480,
          requiredSkills: ['physics-relativity'],
          category: '天體物理'
        },
        {
          id: 'physics-superconductivity',
          name: '超導物理',
          description: '研究超導現象和應用',
          exp: 550,
          requiredSkills: ['physics-condensed-matter'],
          category: '凝聚態物理'
        },
        {
          id: 'physics-plasma',
          name: '電漿物理',
          description: '研究電漿態物質',
          exp: 420,
          requiredSkills: ['physics-electrodynamics'],
          category: '電漿物理'
        }
      ]
    },
    {
      name: '專家級別 (Lv.66-75)',
      requiredLevel: 66,
      skills: [
        {
          id: 'physics-string-theory',
          name: '弦理論',
          description: '研究統一理論的候選',
          exp: 700,
          requiredSkills: ['physics-field-theory'],
          category: '理論物理'
        },
        {
          id: 'physics-quantum-gravity',
          name: '量子重力',
          description: '尋求重力的量子理論',
          exp: 650,
          requiredSkills: ['physics-cosmology'],
          category: '理論物理'
        },
        {
          id: 'physics-quantum-computing',
          name: '量子計算',
          description: '開發量子資訊技術',
          exp: 680,
          requiredSkills: ['physics-superconductivity'],
          category: '量子技術'
        }
      ]
    },
    {
      name: '大師境界 (Lv.76-85)',
      requiredLevel: 76,
      skills: [
        {
          id: 'physics-unified-theory',
          name: '統一理論',
          description: '尋求物理學大統一理論',
          exp: 800,
          requiredSkills: ['physics-string-theory'],
          category: '理論物理'
        },
        {
          id: 'physics-experimental-design',
          name: '實驗設計',
          description: '設計重大物理實驗',
          exp: 850,
          requiredSkills: ['physics-quantum-computing'],
          category: '實驗物理'
        }
      ]
    },
    {
      name: '宗師級別 (Lv.86-95)',
      requiredLevel: 86,
      skills: [
        {
          id: 'physics-paradigm-shift',
          name: '典範轉移',
          description: '引領物理學典範轉移',
          exp: 900,
          requiredSkills: ['physics-unified-theory'],
          category: '理論突破'
        },
        {
          id: 'physics-discovery',
          name: '重大發現',
          description: '做出改變世界的物理發現',
          exp: 950,
          requiredSkills: ['physics-experimental-design'],
          category: '科學發現'
        }
      ]
    },
    {
      name: '傳奇境界 (Lv.96-99)',
      requiredLevel: 96,
      skills: [
        {
          id: 'physics-master',
          name: '物理學大師',
          description: '成為物理學領域泰斗',
          exp: 1000,
          requiredSkills: ['physics-paradigm-shift', 'physics-discovery'],
          category: '大師級別'
        }
      ]
    },
    {
      name: '超凡入聖 (Lv.100)',
      requiredLevel: 100,
      skills: [
        {
          id: 'physics-legend',
          name: '物理學傳奇',
          description: '開創物理學新紀元',
          exp: 1500,
          requiredSkills: ['physics-master'],
          category: '傳奇成就'
        }
      ]
    }
  ]
}
