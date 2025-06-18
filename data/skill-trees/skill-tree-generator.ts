// 技能樹自動生成器
import type { SkillTree, SkillLevel, Skill } from './index'

interface SkillTemplate {
  name: string
  description: string
  category: string
  baseExp: number
}

// 通用技能樹生成函數
export function generateSkillTree(
  treeName: string,
  description: string,
  icon: string,
  color: string,
  skillCategories: Record<string, SkillTemplate[]>
): SkillTree {
  const levels: SkillLevel[] = []
  
  // 生成 10 個等級階段，每階段涵蓋 Lv.1-100
  const levelRanges = [
    { name: '基礎入門', range: [1, 10], multiplier: 1 },
    { name: '初級發展', range: [11, 20], multiplier: 1.5 },
    { name: '中級進階', range: [21, 35], multiplier: 2 },
    { name: '高級專精', range: [36, 50], multiplier: 2.5 },
    { name: '專業領域', range: [51, 65], multiplier: 3 },
    { name: '專家級別', range: [66, 75], multiplier: 3.5 },
    { name: '大師境界', range: [76, 85], multiplier: 4 },
    { name: '宗師級別', range: [86, 95], multiplier: 4.5 },
    { name: '傳奇境界', range: [96, 99], multiplier: 5 },
    { name: '超凡入聖', range: [100, 100], multiplier: 6 }
  ]
  
  levelRanges.forEach((levelInfo, levelIndex) => {
    const skills: Skill[] = []
    const categoriesArray = Object.entries(skillCategories)
    
    // 為每個等級階段生成技能
    categoriesArray.forEach(([categoryName, templates], categoryIndex) => {
      templates.forEach((template, templateIndex) => {
        // 為每個模板在不同等級生成變化版本
        levelInfo.range.forEach((level, rangeIndex) => {
          if (rangeIndex < templates.length || level === levelInfo.range[0]) {
            const skillId = `${treeName.toLowerCase().replace(/\s+/g, '-')}-${categoryName.toLowerCase().replace(/\s+/g, '-')}-${template.name.toLowerCase().replace(/\s+/g, '-')}-lv${level}`
            
            // 生成前置技能（基於前一個等級的相似技能）
            const requiredSkills: string[] = []
            if (level > 1) {
              const prevLevel = level - 1
              if (prevLevel >= levelInfo.range[0] - 10) { // 前面等級範圍內
                const prevSkillId = `${treeName.toLowerCase().replace(/\s+/g, '-')}-${categoryName.toLowerCase().replace(/\s+/g, '-')}-${template.name.toLowerCase().replace(/\s+/g, '-')}-lv${prevLevel}`
                requiredSkills.push(prevSkillId)
              }
            }
            
            skills.push({
              id: skillId,
              name: `${template.name} Lv.${level}`,
              description: `${template.description} (等級 ${level})`,
              exp: Math.round(template.baseExp * levelInfo.multiplier * (1 + level * 0.1)),
              requiredSkills,
              category: template.category
            })
          }
        })
      })
    })
    
    if (skills.length > 0) {
      levels.push({
        name: levelInfo.name,
        requiredLevel: levelInfo.range[0],
        skills
      })
    }
  })
  
  return {
    name: treeName,
    description,
    icon,
    color,
    levels
  }
}

// 預定義的技能模板庫
export const commonSkillTemplates = {
  // 工程類通用技能
  engineering: {
    '基礎理論': [
      { name: '數學基礎', description: '掌握工程數學基本概念', category: '理論基礎', baseExp: 100 },
      { name: '物理原理', description: '理解相關物理定律', category: '理論基礎', baseExp: 100 },
      { name: '化學知識', description: '了解化學基本原理', category: '理論基礎', baseExp: 80 }
    ],
    '實務技能': [
      { name: '實驗設計', description: '設計和執行實驗', category: '實務操作', baseExp: 150 },
      { name: '數據分析', description: '分析實驗和測試數據', category: '分析技能', baseExp: 120 },
      { name: '報告撰寫', description: '撰寫技術報告', category: '溝通技能', baseExp: 100 }
    ],
    '專業工具': [
      { name: 'CAD設計', description: '使用CAD軟體進行設計', category: '設計工具', baseExp: 200 },
      { name: '模擬分析', description: '使用模擬軟體分析', category: '分析工具', baseExp: 250 },
      { name: '程式應用', description: '應用程式解決工程問題', category: '程式技能', baseExp: 180 }
    ]
  },
  
  // 理學類通用技能
  science: {
    '理論基礎': [
      { name: '學科理論', description: '掌握學科核心理論', category: '理論知識', baseExp: 120 },
      { name: '研究方法', description: '了解科學研究方法', category: '研究技能', baseExp: 150 },
      { name: '文獻研讀', description: '閱讀和理解學術文獻', category: '學術技能', baseExp: 100 }
    ],
    '實驗技能': [
      { name: '實驗操作', description: '熟練實驗室操作', category: '實驗技能', baseExp: 200 },
      { name: '儀器使用', description: '操作專業儀器設備', category: '技術操作', baseExp: 180 },
      { name: '數據處理', description: '處理和分析實驗數據', category: '數據技能', baseExp: 160 }
    ],
    '應用發展': [
      { name: '應用研究', description: '將理論應用於實際問題', category: '應用技能', baseExp: 220 },
      { name: '創新思維', description: '培養創新解決問題能力', category: '創新技能', baseExp: 180 },
      { name: '跨域整合', description: '整合不同領域知識', category: '整合技能', baseExp: 200 }
    ]
  },
  
  // 人文社會類通用技能
  humanities: {
    '基礎素養': [
      { name: '批判思維', description: '培養批判性思考能力', category: '思維技能', baseExp: 120 },
      { name: '邏輯分析', description: '運用邏輯分析問題', category: '分析技能', baseExp: 110 },
      { name: '文化理解', description: '理解文化背景和脈絡', category: '文化素養', baseExp: 100 }
    ],
    '研究技能': [
      { name: '資料蒐集', description: '蒐集和整理研究資料', category: '研究技能', baseExp: 150 },
      { name: '質性分析', description: '進行質性資料分析', category: '分析技能', baseExp: 180 },
      { name: '田野調查', description: '進行實地調查研究', category: '調查技能', baseExp: 200 }
    ],
    '表達溝通': [
      { name: '學術寫作', description: '撰寫學術論文', category: '寫作技能', baseExp: 160 },
      { name: '口頭報告', description: '進行學術口頭報告', category: '表達技能', baseExp: 140 },
      { name: '討論辯論', description: '參與學術討論與辯論', category: '溝通技能', baseExp: 130 }
    ]
  }
}
