// 知識學習技能樹統整檔案
import { readingSkills } from './reading-skills'
import { researchSkills } from './research-skills'
import { memorySkills } from './memory-skills'

// 匯出所有知識學習技能樹
export {
  readingSkills,
  researchSkills,
  memorySkills
}

// 知識學習技能樹集合
export const knowledgeLearningSkillTrees = {
  '閱讀素養': readingSkills,
  '研究學習': researchSkills,
  '記憶學習': memorySkills
}

// 獲取所有知識學習技能樹
export function getAllKnowledgeLearningSkillTrees() {
  return Object.values(knowledgeLearningSkillTrees)
}

// 根據知識學習興趣獲取對應技能樹
export function getKnowledgeLearningSkillTreeByInterest(interest: string) {
  const knowledgeInterestMap: Record<string, string> = {
    // 閱讀相關
    '閱讀': '閱讀素養',
    '看書': '閱讀素養',
    '讀書': '閱讀素養',
    '文學': '閱讀素養',
    '小說': '閱讀素養',
    '散文': '閱讀素養',
    '詩詞': '閱讀素養',
    '哲學': '閱讀素養',
    '歷史': '閱讀素養',
    '傳記': '閱讀素養',
    
    // 研究相關
    '研究': '研究學習',
    '學術研究': '研究學習',
    '論文': '研究學習',
    '分析': '研究學習',
    '調查': '研究學習',
    '實驗': '研究學習',
    '學術寫作': '研究學習',
    '資料分析': '研究學習',
    '統計': '研究學習',
    
    // 記憶學習相關
    '記憶': '記憶學習',
    '背書': '記憶學習',
    '學習方法': '記憶學習',
    '考試': '記憶學習',
    '複習': '記憶學習',
    '記憶法': '記憶學習',
    '心智圖': '記憶學習',
    '筆記': '記憶學習',
    '學習技巧': '記憶學習'
  }
  
  const skillTreeName = knowledgeInterestMap[interest]
  return skillTreeName ? knowledgeLearningSkillTrees[skillTreeName as keyof typeof knowledgeLearningSkillTrees] : null
}
