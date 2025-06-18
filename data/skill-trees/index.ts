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
// 新增的興趣技能樹
import { artCreationSkills } from './art-creation-skills'
import { performingArtsSkills } from './performing-arts-skills'
import { knowledgeLearningSkills } from './knowledge-learning-skills'
import { wellnessSkills } from './wellness-skills'
import { sportsSkills } from './sports-skills'
import { entertainmentLeisureSkills } from './entertainment-leisure-skills'

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
  '軟技能': softSkills,
  
  // 新增的專門興趣技能樹
  //'藝術與創作': artCreationSkills,
  '表演藝術': performingArtsSkills,
  '知識學習': knowledgeLearningSkills,
  '身心健康': wellnessSkills,
  '運動競技': sportsSkills,
  '娛樂休閒': entertainmentLeisureSkills
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
  console.log('🔍 getSkillTreeByMajor 接收到的科系參數:', major)
  
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
    'logistics': '企業管理',    // 中文別名對應
    '電機工程': '電機工程',
    '電機工程學群': '電機工程',
    '電機工程學類': '電機工程',  // 對應 academic-groups.ts 中的實際名稱
    '電機': '電機工程',
    '資訊工程': '資訊工程',
    '資訊工程學群': '資訊工程',
    '資訊工程學類': '資訊工程',  // 對應 academic-groups.ts 中的實際名稱
    '資工': '資訊工程',
    '資科': '資訊工程',
    '計算機科學': '資訊工程',
    '機械工程': '機械工程',
    '機械工程學群': '機械工程',
    '機械工程學類': '機械工程',  // 對應 academic-groups.ts 中的實際名稱
    '機械': '機械工程',
    '化學工程': '化學工程',
    '化學工程學群': '化學工程',
    '化學工程學類': '化學工程',  // 對應 academic-groups.ts 中的實際名稱
    '化工': '化學工程',
    '土木工程': '土木工程',
    '土木工程學群': '土木工程',
    '土木工程學類': '土木工程',  // 對應 academic-groups.ts 中的實際名稱
    '土木': '土木工程',
    '材料工程': '材料工程',
    '材料工程學群': '材料工程',
    '材料工程學類': '材料工程',  // 對應 academic-groups.ts 中的實際名稱
    '材料': '材料工程',
    '數學': '數學',
    '數學學類': '數學',  // 對應 academic-groups.ts 中的實際名稱
    '數理化學群': '數學',
    '物理學': '物理學',
    '物理學類': '物理學',  // 對應 academic-groups.ts 中的實際名稱
    '物理': '物理學',
    '醫學': '醫學',
    '醫學學類': '醫學',  // 對應 academic-groups.ts 中的實際名稱
    '醫藥衛生學群': '醫學',
    '建築學': '建築學',
    '建築與設計學群': '建築學',
    '建築': '建築學',
    '心理學': '心理學',
    '社會與心理學群': '心理學',
    '心理': '心理學',
    '企業管理': '企業管理',
    '管理學群': '企業管理',
    '管理': '企業管理'}
  
  console.log('🎯 科系對應映射查找結果:', {
    輸入科系: major,
    映射結果: majorMap[major],
    最終技能樹: majorMap[major] || '資訊工程'
  })
  
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
    // 🎨 藝術與創作類
    '繪畫': '藝術與創作',
    '畫畫': '藝術與創作',
    '美術': '藝術與創作',
    '水彩': '藝術與創作',
    '油畫': '藝術與創作',
    '數位畫': '藝術與創作',
    '數位繪圖': '藝術與創作',
    'digital art': '藝術與創作',
    '插畫': '藝術與創作',
    '素描': '藝術與創作',
    '攝影': '藝術與創作',
    '風景攝影': '藝術與創作',
    '人像攝影': '藝術與創作',
    '街拍': '藝術與創作',
    '紀實攝影': '藝術與創作',
    '商業攝影': '藝術與創作',
    '書法': '藝術與創作',
    '手寫字': '藝術與創作',
    '毛筆字': '藝術與創作',
    '硬筆書法': '藝術與創作',
    '手工藝': '藝術與創作',
    '編織': '藝術與創作',
    '黏土': '藝術與創作',
    '陶藝': '藝術與創作',
    '刺繡': '藝術與創作',
    '手作飾品': '藝術與創作',
    '手作': '藝術與創作',
    '首飾設計': '藝術與創作',
    '皮革工藝': '藝術與創作',
    '木工': '藝術與創作',
    '雕刻': '藝術與創作',
    
    // 🎼 表演藝術類
    '唱歌': '表演藝術',
    '歌唱': '表演藝術',
    '合唱': '表演藝術',
    '音樂': '表演藝術',
    '音樂創作': '表演藝術',
    '作詞': '表演藝術',    '作曲': '表演藝術',
    '編曲': '表演藝術',
    '音樂編曲': '表演藝術',
    '音樂製作': '表演藝術',
    '樂器演奏': '表演藝術',
    '鋼琴': '表演藝術',
    '吉他': '表演藝術',
    '小提琴': '表演藝術',
    '大提琴': '表演藝術',
    '薩克斯風': '表演藝術',
    '長笛': '表演藝術',
    '爵士鼓': '表演藝術',
    '烏克麗麗': '表演藝術',
    '電子琴': '表演藝術',
    '管樂器': '表演藝術',
    '弦樂器': '表演藝術',
    '打擊樂器': '表演藝術',
    '舞蹈': '表演藝術',
    '跳舞': '表演藝術',
    '街舞': '表演藝術',
    '芭蕾': '表演藝術',
    '民族舞': '表演藝術',
    '現代舞': '表演藝術',
    '爵士舞': '表演藝術',
    '拉丁舞': '表演藝術',
    'K-pop舞蹈': '表演藝術',
    '國標舞': '表演藝術',
    '戲劇': '表演藝術',
    '表演': '表演藝術',
    '話劇': '表演藝術',
    '音樂劇': '表演藝術',
    '舞台劇': '表演藝術',
    '魔術': '表演藝術',
    '雜技': '表演藝術',
    
    // 📚 知識學習類
    '閱讀': '知識學習',
    '讀書': '知識學習',
    '小說': '知識學習',
    '文學': '知識學習',
    '詩詞': '知識學習',
    '散文': '知識學習',
    '歷史': '知識學習',
    '歷史研究': '知識學習',
    '古代史': '知識學習',
    '近代史': '知識學習',
    '世界史': '知識學習',
    '中國史': '知識學習',
    '哲學': '知識學習',
    '心理學研究': '知識學習',
    '社會學': '知識學習',
    '人類學': '知識學習',
    '語言學習': '知識學習',
    '英文': '知識學習',
    '英語': '知識學習',
    '日文': '知識學習',
    '日語': '知識學習',
    '韓文': '知識學習',
    '韓語': '知識學習',
    '西班牙文': '知識學習',
    '法文': '知識學習',
    '德文': '知識學習',
    '中文': '知識學習',
    '多國語言': '知識學習',
    '寫作': '知識學習',
    '創作': '知識學習',
    '小說創作': '知識學習',
    '詩': '知識學習',
    '部落格': '知識學習',
    'blog': '知識學習',
    '日記': '知識學習',
    '劇本創作': '知識學習',
    '解謎': '知識學習',
    '邏輯遊戲': '知識學習',
    '益智遊戲': '知識學習',
    '數獨': '知識學習',
    '象棋': '知識學習',
    '圍棋': '知識學習',
    '西洋棋': '知識學習',
    '推理': '知識學習',
    '謎題': '知識學習',
    '科學研究': '知識學習',
    '學術研究': '知識學習',
    '天文學': '知識學習',
    '生物學': '知識學習',
    '化學': '知識學習',
    '物理': '知識學習',
    '地理': '知識學習',    
    // 🧘‍♀️ 身心健康類
    '瑜珈': '身心健康',
    '瑜伽': '身心健康',
    'yoga': '身心健康',
    '冥想': '身心健康',
    '靜坐': '身心健康',
    '正念': '身心健康',
    '禪修': '身心健康',
    '營養': '身心健康',
    '飲食管理': '身心健康',
    '健康飲食': '身心健康',
    '素食': '身心健康',
    '料理': '身心健康',
    '烹飪': '身心健康',
    '園藝': '身心健康',
    '種植': '身心健康',
    '植物照顧': '身心健康',
    '多肉植物': '身心健康',
    '花藝': '身心健康',
    '插花': '身心健康',
    '戶外散步': '身心健康',
    '散步': '身心健康',
    '自然療癒': '身心健康',
    '森林浴': '身心健康',
    '芳療': '身心健康',
    '按摩': '身心健康',
    '放鬆': '身心健康',
    '壓力管理': '身心健康',
    
    // ⚽ 運動類
    '運動': '運動競技',
    '健身': '運動競技',
    '重訓': '運動競技',
    '重量訓練': '運動競技',
    '肌力訓練': '運動競技',
    '有氧運動': '運動競技',
    '球類運動': '運動競技',
    '籃球': '運動競技',
    '足球': '運動競技',
    '網球': '運動競技',
    '桌球': '運動競技',
    '乒乓球': '運動競技',
    '羽毛球': '運動競技',
    '排球': '運動競技',
    '棒球': '運動競技',
    '高爾夫': '運動競技',
    '水上運動': '運動競技',
    '游泳': '運動競技',
    '衝浪': '運動競技',
    '潛水': '運動競技',
    '滑水': '運動競技',
    '溯溪': '運動競技',
    '登山': '運動競技',
    '爬山': '運動競技',
    '健行': '運動競技',
    '徒步': '運動競技',
    '攀岩': '運動競技',
    '自行車': '運動競技',
    '單車': '運動競技',
    '腳踏車': '運動競技',
    '公路車': '運動競技',
    '登山車': '運動競技',
    '武術': '運動競技',
    '自衛術': '運動競技',
    '跆拳道': '運動競技',
    '空手道': '運動競技',
    '柔道': '運動競技',
    '拳擊': '運動競技',
    '太極': '運動競技',
    '詠春': '運動競技',
    '跑步': '運動競技',
    '慢跑': '運動競技',
    '馬拉松': '運動競技',
    '路跑': '運動競技',
    '瑜珈健身': '運動競技',
    '皮拉提斯': '運動競技',
    '極限運動': '運動競技',
    '滑板': '運動競技',
    '直排輪': '運動競技',    
    // 🎮 娛樂與休閒類
    '打電動': '娛樂休閒',
    '電競': '娛樂休閒',
    '遊戲': '娛樂休閒',
    'PC遊戲': '娛樂休閒',
    'Switch': '娛樂休閒',
    '手遊': '娛樂休閒',
    '手機遊戲': '娛樂休閒',
    '主機遊戲': '娛樂休閒',
    'PS5': '娛樂休閒',
    'Xbox': '娛樂休閒',
    '線上遊戲': '娛樂休閒',
    '單機遊戲': '娛樂休閒',
    '桌遊': '娛樂休閒',
    '卡牌遊戲': '娛樂休閒',
    '桌上遊戲': '娛樂休閒',
    '大富翁': '娛樂休閒',
    '狼人殺': '娛樂休閒',
    '劇本殺': '娛樂休閒',
    '看電影': '娛樂休閒',
    '追劇': '娛樂休閒',
    '電影': '娛樂休閒',
    '影集': '娛樂休閒',
    '動畫': '娛樂休閒',
    '動漫': '娛樂休閒',
    '日劇': '娛樂休閒',
    '韓劇': '娛樂休閒',
    '美劇': '娛樂休閒',
    '紀錄片': '娛樂休閒',
    '模型': '娛樂休閒',
    '公仔收集': '娛樂休閒',
    '手辦': '娛樂休閒',
    '鋼彈': '娛樂休閒',
    '鋼彈模型': '娛樂休閒',
    '動漫周邊': '娛樂休閒',
    'ACG': '娛樂休閒',
    '模型製作': '娛樂休閒',
    '拼圖': '娛樂休閒',
    '樂高': '娛樂休閒',
    'LEGO': '娛樂休閒',
    '旅行': '娛樂休閒',
    '旅遊': '娛樂休閒',
    '背包客': '娛樂休閒',
    '自助旅行': '娛樂休閒',
    '國內旅遊': '娛樂休閒',
    '國外旅遊': '娛樂休閒',
    '露營': '娛樂休閒',
    '野餐': '娛樂休閒',
    '觀光': '娛樂休閒',
    '美食': '娛樂休閒',
    '咖啡': '娛樂休閒',
    '品酒': '娛樂休閒',
    '茶道': '娛樂休閒',
    
    // 其他技能對應
    '程式設計': '資訊工程',
    '編程': '資訊工程',
    '程式': '資訊工程',
    'coding': '資訊工程'
  }
  
  const skillTreeKey = interestMap[interest] || '興趣技能'
  return skillTreesCollection[skillTreeKey]
}

// 輔助函數：根據學系和興趣推薦技能樹
export function recommendSkillTrees(major?: string, interests?: string[]): SkillTree[] {
  console.log('🚀 recommendSkillTrees 被呼叫，參數:', { major, interests })
  
  const recommendedTrees: SkillTree[] = []
  const addedTreeNames = new Set<string>()
  
  // 根據學系推薦
  if (major) {
    console.log('📚 處理學系推薦，學系:', major)
    const majorTree = getSkillTreeByMajor(major)
    console.log('📚 學系對應結果:', majorTree?.name || '無對應技能樹')
    if (majorTree && !addedTreeNames.has(majorTree.name)) {
      recommendedTrees.push(majorTree)
      addedTreeNames.add(majorTree.name)
      console.log('✅ 學系技能樹已添加:', majorTree.name)
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
  }    // 如果沒有推薦到任何技能樹，提供預設推薦
  if (recommendedTrees.length === 0) {
    console.log('⚠️ 沒有找到任何推薦技能樹，使用預設推薦')
    const defaultTrees = ['資訊工程', '軟技能', '語言能力', '身心健康']
    defaultTrees.forEach(treeName => {
      const tree = skillTreesCollection[treeName]
      if (tree && !addedTreeNames.has(tree.name)) {
        recommendedTrees.push(tree)
        addedTreeNames.add(tree.name)
      }
    })
  } else {
    console.log('✅ 找到推薦技能樹:', recommendedTrees.map(t => t.name))
  }
  
  // 總是包含軟技能和語言能力（如果還沒包含的話）
  const essentialTrees = ['軟技能', '語言能力']
  essentialTrees.forEach(treeName => {
    const tree = skillTreesCollection[treeName]
    if (tree && !addedTreeNames.has(tree.name) && recommendedTrees.length < 6) {
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
    ].filter(Boolean),    '通用技能': [
      skillTreesCollection['興趣技能'],
      skillTreesCollection['體能健康'],
      skillTreesCollection['語言能力'],
      skillTreesCollection['軟技能']
    ].filter(Boolean),
    '專門興趣': [
      skillTreesCollection['藝術與創作'],
      skillTreesCollection['表演藝術'],
      skillTreesCollection['知識學習'],
      skillTreesCollection['身心健康'],
      skillTreesCollection['運動競技'],
      skillTreesCollection['娛樂休閒']
    ].filter(Boolean)
  }
}

// 導出預設配置（向後相容）
export default skillTreesConfig
