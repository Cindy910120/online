// 技能樹統整檔案 - 匯入所有技能樹
import { electricalEngineeringSkills } from './electrical-engineering'
import { computerScienceSkills } from './computer-science'
import { mechanicalEngineeringSkills } from './mechanical-engineering'
import { chemicalEngineeringSkills } from './chemical-engineering'
import { civilEngineeringSkills } from './civil-engineering'
import { materialsEngineeringSkills } from './materials-engineering'
import { mathematicsSkills } from './mathematics'
import { physicsSkills } from './physics'
import { medicineSkills } from './medicine'
import { architectureSkills } from './architecture'
import { psychologySkills } from './psychology'
import { businessAdministrationSkills } from './business-administration'
import { hobbySkills } from './hobby-skills'
import { fitnessSkills } from './fitness-skills'
import { languageSkills } from './language-skills'
import { softSkills } from './soft-skills'

// 技能樹介面定義
export interface Skill {
  id: string
  name: string
  description: string
  exp: number
  requiredSkills: string[]
  category: string
}

export interface SkillLevel {
  name: string
  requiredLevel: number
  skills: Skill[]
}

export interface SkillTree {
  name: string
  description: string
  icon: string
  color: string
  levels: SkillLevel[]
}

// 技能樹配置集合
export const skillTreesCollection: Record<string, SkillTree> = {
  // 工程學群
  '電機工程': electricalEngineeringSkills,
  '資訊工程': computerScienceSkills,
  '機械工程': mechanicalEngineeringSkills,
  '化學工程': chemicalEngineeringSkills,
  '土木工程': civilEngineeringSkills,
  '材料工程': materialsEngineeringSkills,
  
  // 數理化學群
  '數學': mathematicsSkills,
  '物理學': physicsSkills,
  
  // 醫藥衛生學群
  '醫學': medicineSkills,
  
  // 建築與設計學群
  '建築學': architectureSkills,
  
  // 社會與心理學群
  '心理學': psychologySkills,
  
  // 管理學群
  '企業管理': businessAdministrationSkills,
  
  // 通用技能
  '興趣技能': hobbySkills,
  '體能健康': fitnessSkills,
  '語言能力': languageSkills,
  '軟技能': softSkills
}

// 為了向後相容，保持原有的 skillTreesConfig 格式
export const skillTreesConfig = Object.fromEntries(
  Object.entries(skillTreesCollection).map(([key, tree]) => [
    key,
    {
      name: tree.name,
      levels: tree.levels.map(level => ({
        name: level.name,
        skills: level.skills.map(skill => ({
          id: skill.id,
          name: skill.name,
          description: skill.description,
          exp: skill.exp,
          completed: false,
          available: level.requiredLevel <= 1 // 第一級技能預設為可用
        }))
      }))
    }
  ])
)

// 輔助函數：根據科系獲取對應的技能樹
export function getSkillTreeByMajor(major: string): SkillTree | null {
  const majorMap: Record<string, string> = {
    // 工程學群
    'computer-science': '資訊工程',
    'electrical-engineering': '電機工程',
    'mechanical-engineering': '機械工程',
    'chemical-engineering': '化學工程',
    'civil-engineering': '土木工程',
    'materials-engineering': '材料工程',
    
    // 數理化學群
    'mathematics': '數學',
    'physics': '物理學',
    'chemistry': '化學工程', // 化學可對應到化學工程
    'earth-science': '土木工程', // 地球科學可對應到土木工程
    
    // 醫藥衛生學群
    'medicine': '醫學',
    'nursing': '醫學',
    'pharmacy': '醫學',
    'public-health': '醫學',
    'medical-technology': '醫學',
    
    // 建築與設計學群
    'architecture': '建築學',
    'landscape': '建築學',
    'interior-design': '建築學',
    'industrial-design': '建築學',
    
    // 社會與心理學群
    'psychology': '心理學',
    'sociology': '心理學',
    'social-work': '心理學',
    'anthropology': '心理學',
    
    // 管理學群
    'business-administration': '企業管理',
    'marketing': '企業管理',
    'human-resources': '企業管理',
    'logistics': '企業管理',
    
    // 中文別名對應
    '電機工程': '電機工程',
    '電機': '電機工程',
    '資訊工程': '資訊工程',
    '資工': '資訊工程',
    '資科': '資訊工程',
    '計算機科學': '資訊工程',
    '機械工程': '機械工程',
    '機械': '機械工程',
    '化學工程': '化學工程',
    '化工': '化學工程',
    '土木工程': '土木工程',
    '土木': '土木工程',
    '材料工程': '材料工程',
    '材料': '材料工程',
    '數學': '數學',
    '物理學': '物理學',
    '物理': '物理學',
    '醫學': '醫學',
    '建築學': '建築學',
    '建築': '建築學',
    '心理學': '心理學',
    '心理': '心理學',
    '企業管理': '企業管理',
    '管理': '企業管理'
  }
  
  const skillTreeKey = majorMap[major] || '資訊工程' // 預設為資訊工程
  return skillTreesCollection[skillTreeKey]
}

// 輔助函數：獲取所有技能樹列表
export function getAllSkillTrees(): SkillTree[] {
  return Object.values(skillTreesCollection)
}

// 輔助函數：根據技能樹名稱獲取技能樹
export function getSkillTreeByName(name: string): SkillTree | null {
  return skillTreesCollection[name] || null
}

// 輔助函數：獲取技能樹的總技能數
export function getSkillTreeTotalSkills(treeName: string): number {
  const tree = skillTreesCollection[treeName]
  if (!tree) return 0
  
  return tree.levels.reduce((total, level) => total + level.skills.length, 0)
}

// 輔助函數：計算技能樹的等級（基於該技能樹的經驗值）
export function calculateSkillTreeLevel(treeExp: number): number {
  // 每10經驗值升1級，最高100級
  return Math.min(100, Math.floor(treeExp / 10) + 1)
}

// 輔助函數：計算升級到下一級所需的經驗值
export function getExpForNextLevel(currentLevel: number): number {
  return currentLevel * 10
}

// 輔助函數：根據技能樹等級獲取可用的技能
export function getAvailableSkillsByLevel(treeName: string, treeLevel: number): Skill[] {
  const tree = skillTreesCollection[treeName]
  if (!tree) return []
  
  const availableSkills: Skill[] = []
  
  tree.levels.forEach(level => {
    if (level.requiredLevel <= treeLevel) {
      availableSkills.push(...level.skills)
    }
  })
  
  return availableSkills
}

// 輔助函數：獲取技能樹的經驗值和等級資訊
export function getSkillTreeProgress(treeName: string, userSkillTrees: any) {
  const treeData = userSkillTrees[treeName] || {}
  let totalExp = 0
  let completedSkills = 0
  
  // 計算該技能樹的總經驗值
  Object.values(treeData).forEach((skillData: any) => {
    if (skillData.completed && skillData.exp) {
      totalExp += skillData.exp
      completedSkills++
    }
  })
  
  const currentLevel = calculateSkillTreeLevel(totalExp)
  const nextLevelExp = getExpForNextLevel(currentLevel)
  const currentLevelExp = (currentLevel - 1) * 10
  const expInCurrentLevel = totalExp - currentLevelExp
  const expNeededForLevel = nextLevelExp - currentLevelExp
  const levelProgress = Math.min(100, (expInCurrentLevel / expNeededForLevel) * 100)
  
  return {
    totalExp,
    currentLevel,
    nextLevelExp,
    levelProgress,
    completedSkills
  }
}

// 輔助函數：檢查技能是否滿足前置條件
export function checkSkillPrerequisites(
  treeName: string, 
  skillId: string, 
  completedSkills: string[]
): boolean {
  const tree = skillTreesCollection[treeName]
  if (!tree) return false
  
  let targetSkill: Skill | null = null
  
  // 找到目標技能
  for (const level of tree.levels) {
    const skill = level.skills.find(s => s.id === skillId)
    if (skill) {
      targetSkill = skill
      break
    }
  }
  
  if (!targetSkill) return false
  
  // 檢查所有前置技能是否都已完成
  return targetSkill.requiredSkills.every(requiredId => 
    completedSkills.includes(requiredId)
  )
}

// 輔助函數：獲取技能樹統計資訊
export function getSkillTreeStats(treeName: string) {
  const tree = skillTreesCollection[treeName]
  if (!tree) return null
  
  const stats = {
    totalSkills: 0,
    totalExp: 0,
    levelBreakdown: [] as Array<{
      name: string,
      requiredLevel: number,
      skillCount: number,
      totalExp: number
    }>
  }
  
  tree.levels.forEach(level => {
    const levelSkillCount = level.skills.length
    const levelTotalExp = level.skills.reduce((sum, skill) => sum + skill.exp, 0)
    
    stats.totalSkills += levelSkillCount
    stats.totalExp += levelTotalExp
    
    stats.levelBreakdown.push({
      name: level.name,
      requiredLevel: level.requiredLevel,
      skillCount: levelSkillCount,
      totalExp: levelTotalExp
    })
  })
  
  return stats
}

// 輔助函數：根據興趣獲取對應的技能樹
export function getSkillTreeByInterest(interest: string): SkillTree | null {
  const interestMap: Record<string, string> = {
    '繪畫': '興趣技能',
    '畫畫': '興趣技能',
    '美術': '興趣技能',
    '音樂': '興趣技能',
    '唱歌': '興趣技能',
    '舞蹈': '興趣技能',
    '攝影': '興趣技能',
    '寫作': '語言能力',
    '閱讀': '語言能力',
    '程式設計': '資訊工程',
    '編程': '資訊工程',
    '運動': '體能健康',
    '健身': '體能健康',
    '游泳': '體能健康',
    '跑步': '體能健康',
    '學語言': '語言能力',
    '英文': '語言能力',
    '日文': '語言能力',
    '料理': '興趣技能',
    '園藝': '興趣技能',
    '手作': '興趣技能',
    '遊戲': '興趣技能',
    '旅行': '軟技能'
  }
  
  const skillTreeKey = interestMap[interest] || '興趣技能'
  return skillTreesCollection[skillTreeKey]
}

// 輔助函數：根據學系和興趣推薦技能樹
export function recommendSkillTrees(major?: string, interests?: string[]): SkillTree[] {
  const recommendedTrees: SkillTree[] = []
  const addedTreeNames = new Set<string>()
  
  // 根據學系推薦
  if (major) {
    const majorTree = getSkillTreeByMajor(major)
    if (majorTree && !addedTreeNames.has(majorTree.name)) {
      recommendedTrees.push(majorTree)
      addedTreeNames.add(majorTree.name)
    }
  }
  
  // 根據興趣推薦
  if (interests && interests.length > 0) {
    interests.forEach(interest => {
      const interestTree = getSkillTreeByInterest(interest)
      if (interestTree && !addedTreeNames.has(interestTree.name)) {
        recommendedTrees.push(interestTree)
        addedTreeNames.add(interestTree.name)
      }
    })
  }
  
  // 如果沒有推薦到任何技能樹，提供預設推薦
  if (recommendedTrees.length === 0) {
    const defaultTrees = ['資訊工程', '軟技能', '語言能力']
    defaultTrees.forEach(treeName => {
      const tree = skillTreesCollection[treeName]
      if (tree && !addedTreeNames.has(tree.name)) {
        recommendedTrees.push(tree)
        addedTreeNames.add(tree.name)
      }
    })
  }
  
  // 總是包含軟技能和語言能力（如果還沒包含的話）
  const essentialTrees = ['軟技能', '語言能力']
  essentialTrees.forEach(treeName => {
    const tree = skillTreesCollection[treeName]
    if (tree && !addedTreeNames.has(tree.name)) {
      recommendedTrees.push(tree)
      addedTreeNames.add(tree.name)
    }
  })
  
  return recommendedTrees
}

// 輔助函數：根據學類 ID 獲取技能樹（與 academic-groups.ts 對應）
export function getSkillTreeByAcademicId(academicId: string): SkillTree | null {
  return getSkillTreeByMajor(academicId)
}

// 輔助函數：搜尋技能樹
export function searchSkillTrees(query: string): SkillTree[] {
  const searchResults: SkillTree[] = []
  const lowerQuery = query.toLowerCase()
  
  Object.values(skillTreesCollection).forEach(tree => {
    const treeName = tree.name.toLowerCase()
    const treeDesc = tree.description.toLowerCase()
    
    if (treeName.includes(lowerQuery) || treeDesc.includes(lowerQuery)) {
      searchResults.push(tree)
    }
  })
  
  return searchResults
}

// 輔助函數：獲取技能樹分類
export function getSkillTreesByCategory(): Record<string, SkillTree[]> {
  return {
    '工程學群': [
      skillTreesCollection['電機工程'],
      skillTreesCollection['資訊工程'],
      skillTreesCollection['機械工程'],
      skillTreesCollection['化學工程'],
      skillTreesCollection['土木工程'],
      skillTreesCollection['材料工程']
    ].filter(Boolean),
    '數理化學群': [
      skillTreesCollection['數學'],
      skillTreesCollection['物理學']
    ].filter(Boolean),
    '醫藥衛生學群': [
      skillTreesCollection['醫學']
    ].filter(Boolean),
    '建築與設計學群': [
      skillTreesCollection['建築學']
    ].filter(Boolean),
    '社會與心理學群': [
      skillTreesCollection['心理學']
    ].filter(Boolean),
    '管理學群': [
      skillTreesCollection['企業管理']
    ].filter(Boolean),
    '通用技能': [
      skillTreesCollection['興趣技能'],
      skillTreesCollection['體能健康'],
      skillTreesCollection['語言能力'],
      skillTreesCollection['軟技能']
    ].filter(Boolean)
  }
}

// 導出預設配置（向後相容）
export default skillTreesConfig
