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
// 新增的細分興趣技能樹
import { artSkillTrees } from './arts'
import { performingArtsSkillTrees } from './performing-arts'
import { knowledgeLearningSkillTrees } from './knowledge-learning'
import { wellnessSkillTrees } from './wellness'
import { sportsSkillTrees } from './sports'
import { entertainmentSkillTrees } from './entertainment'

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
  '軟技能': softSkills,    // 新增的細分專門興趣技能樹
  // 藝術類
  '攝影藝術': artSkillTrees['攝影藝術'],
  '繪畫藝術': artSkillTrees['繪畫藝術'],
  '書法藝術': artSkillTrees['書法藝術'],
  '手工藝術': artSkillTrees['手工藝術'],
  
  // 表演藝術類
  '音樂藝術': performingArtsSkillTrees['音樂藝術'],
  '舞蹈藝術': performingArtsSkillTrees['舞蹈藝術'],
  '戲劇表演': performingArtsSkillTrees['戲劇表演'],
  
  // 知識學習類
  '閱讀素養': knowledgeLearningSkillTrees['閱讀素養'],
  '研究學習': knowledgeLearningSkillTrees['研究學習'],
  '記憶學習': knowledgeLearningSkillTrees['記憶學習'],
  
  // 身心健康類
  '心理健康': wellnessSkillTrees['心理健康'],
  '冥想靜心': wellnessSkillTrees['冥想靜心'],
  '營養健康': wellnessSkillTrees['營養健康'],
  
  // 運動競技類
  '球類運動': sportsSkillTrees['球類運動'],
  '水上運動': sportsSkillTrees['水上運動'],
  '田徑運動': sportsSkillTrees['田徑運動'],
  
  // 娛樂休閒類
  '遊戲娛樂': entertainmentSkillTrees['遊戲娛樂'],
  '收藏嗜好': entertainmentSkillTrees['收藏嗜好'],
  '旅遊探索': entertainmentSkillTrees['旅遊探索']
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
  const interestMap: Record<string, string> = {    // 🎨 藝術與創作類
    '繪畫': '繪畫藝術',
    '畫畫': '繪畫藝術',
    '美術': '繪畫藝術',
    '水彩': '繪畫藝術',
    '油畫': '繪畫藝術',
    '數位畫': '繪畫藝術',
    '數位繪圖': '繪畫藝術',
    'digital art': '繪畫藝術',
    '插畫': '繪畫藝術',
    '素描': '繪畫藝術',
    '攝影': '攝影藝術',
    '風景攝影': '攝影藝術',
    '人像攝影': '攝影藝術',
    '街拍': '攝影藝術',
    '紀實攝影': '攝影藝術',
    '商業攝影': '攝影藝術',
    '書法': '書法藝術',
    '手寫字': '書法藝術',
    '毛筆字': '書法藝術',
    '硬筆書法': '書法藝術',
    '手工藝': '手工藝術',
    '編織': '手工藝術',
    '黏土': '手工藝術',
    '陶藝': '手工藝術',
    '刺繡': '手工藝術',
    '手作飾品': '手工藝術',
    '手作': '手工藝術',
    '首飾設計': '手工藝術',
    '皮革工藝': '手工藝術',
    '木工': '手工藝術',
    '雕刻': '手工藝術',
      // 🎼 表演藝術類
    // 音樂相關
    '音樂': '音樂藝術',
    '唱歌': '音樂藝術',
    '歌唱': '音樂藝術',
    '合唱': '音樂藝術',
    '聲樂': '音樂藝術',
    '音樂創作': '音樂藝術',
    '作詞': '音樂藝術',
    '作曲': '音樂藝術',
    '編曲': '音樂藝術',
    '音樂編曲': '音樂藝術',
    '音樂製作': '音樂藝術',
    '樂器演奏': '音樂藝術',
    '鋼琴': '音樂藝術',
    '吉他': '音樂藝術',
    '小提琴': '音樂藝術',
    '大提琴': '音樂藝術',
    '薩克斯風': '音樂藝術',
    '長笛': '音樂藝術',
    '爵士鼓': '音樂藝術',
    '烏克麗麗': '音樂藝術',
    '電子琴': '音樂藝術',
    '管樂器': '音樂藝術',
    '弦樂器': '音樂藝術',
    '打擊樂器': '音樂藝術',
    
    // 舞蹈相關
    '舞蹈': '舞蹈藝術',
    '跳舞': '舞蹈藝術',
    '街舞': '舞蹈藝術',
    '芭蕾': '舞蹈藝術',
    '民族舞': '舞蹈藝術',
    '現代舞': '舞蹈藝術',
    '爵士舞': '舞蹈藝術',
    '拉丁舞': '舞蹈藝術',
    'K-pop舞蹈': '舞蹈藝術',
    '國標舞': '舞蹈藝術',
    '編舞': '舞蹈藝術',
    
    // 戲劇相關
    '戲劇': '戲劇表演',
    '表演': '戲劇表演',
    '話劇': '戲劇表演',
    '音樂劇': '戲劇表演',
    '舞台劇': '戲劇表演',
    '即興劇': '戲劇表演',
    '演技': '戲劇表演',
    '導演': '戲劇表演',
    '魔術': '戲劇表演',
    '雜技': '戲劇表演',
      // 📚 知識學習類
    // 閱讀相關
    '閱讀': '閱讀素養',
    '讀書': '閱讀素養',
    '看書': '閱讀素養',
    '小說': '閱讀素養',
    '文學': '閱讀素養',
    '詩詞': '閱讀素養',
    '散文': '閱讀素養',
    '傳記': '閱讀素養',
    
    // 研究學習相關  
    '研究': '研究學習',
    '學術研究': '研究學習',
    '歷史研究': '研究學習',
    '科學研究': '研究學習',
    '論文': '研究學習',
    '分析': '研究學習',
    '調查': '研究學習',
    '實驗': '研究學習',
    '學術寫作': '研究學習',
    '資料分析': '研究學習',
    '統計': '研究學習',
    '歷史': '研究學習',
    '古代史': '研究學習',
    '近代史': '研究學習',
    '世界史': '研究學習',
    '中國史': '研究學習',
    '哲學': '研究學習',
    '心理學研究': '研究學習',
    '社會學': '研究學習',
    '人類學': '研究學習',
    '天文學': '研究學習',
    '生物學': '研究學習',
    '化學': '研究學習',
    '物理': '研究學習',
    '地理': '研究學習',
    
    // 記憶學習相關
    '記憶': '記憶學習',
    '背書': '記憶學習',
    '學習方法': '記憶學習',
    '考試': '記憶學習',
    '複習': '記憶學習',
    '記憶法': '記憶學習',
    '心智圖': '記憶學習',
    '筆記': '記憶學習',
    '學習技巧': '記憶學習',
    '語言學習': '記憶學習',
    '英文': '記憶學習',
    '英語': '記憶學習',
    '日文': '記憶學習',
    '日語': '記憶學習',
    '韓文': '記憶學習',
    '韓語': '記憶學習',
    '西班牙文': '記憶學習',
    '法文': '記憶學習',
    '德文': '記憶學習',
    '中文': '記憶學習',
    '多國語言': '記憶學習',
    '寫作': '閱讀素養',
    '創作': '閱讀素養',
    '小說創作': '閱讀素養',
    '詩': '閱讀素養',
    '部落格': '閱讀素養',
    'blog': '閱讀素養',
    '日記': '閱讀素養',
    '劇本創作': '閱讀素養',
    '解謎': '記憶學習',
    '邏輯遊戲': '記憶學習',
    '益智遊戲': '記憶學習',
    '數獨': '記憶學習',
    '象棋': '記憶學習',
    '圍棋': '記憶學習',
    '西洋棋': '記憶學習',
    '推理': '記憶學習',
    '謎題': '記憶學習',    // 🧘‍♀️ 身心健康類
    // 心理健康相關
    '心理健康': '心理健康',
    '情緒管理': '心理健康',
    '壓力管理': '心理健康',
    '自我成長': '心理健康',
    
    // 冥想靜心相關
    '瑜珈': '冥想靜心',
    '瑜伽': '冥想靜心',
    'yoga': '冥想靜心',
    '冥想': '冥想靜心',
    '靜坐': '冥想靜心',
    '正念': '冥想靜心',
    '禪修': '冥想靜心',
    '放鬆': '冥想靜心',
    
    // 營養健康相關
    '營養': '營養健康',
    '飲食管理': '營養健康',
    '健康飲食': '營養健康',
    '素食': '營養健康',
    '料理': '營養健康',
    '烹飪': '營養健康',
    '園藝': '營養健康',
    '種植': '營養健康',
    '植物照顧': '營養健康',
    '多肉植物': '營養健康',
    '花藝': '營養健康',
    '插花': '營養健康',
    '戶外散步': '營養健康',
    '散步': '營養健康',
    '自然療癒': '營養健康',
    '森林浴': '營養健康',
    '芳療': '營養健康',
    '按摩': '營養健康',
      // ⚽ 運動類
    // 球類運動相關
    '球類運動': '球類運動',
    '籃球': '球類運動',
    '足球': '球類運動',
    '網球': '球類運動',
    '桌球': '球類運動',
    '乒乓球': '球類運動',
    '羽毛球': '球類運動',
    '排球': '球類運動',
    '棒球': '球類運動',
    '高爾夫': '球類運動',
    '撞球': '球類運動',
    '手球': '球類運動',
    
    // 水上運動相關
    '游泳': '水上運動',
    '潛水': '水上運動',
    '衝浪': '水上運動',
    '划船': '水上運動',
    '水球': '水上運動',
    '跳水': '水上運動',
    '帆船': '水上運動',
    '立槳': '水上運動',
    '滑水': '水上運動',
    '溯溪': '水上運動',
    
    // 田徑運動相關
    '運動': '田徑運動',
    '健身': '田徑運動',
    '重訓': '田徑運動',
    '重量訓練': '田徑運動',
    '肌力訓練': '田徑運動',
    '有氧運動': '田徑運動',
    '跑步': '田徑運動',
    '慢跑': '田徑運動',
    '馬拉松': '田徑運動',
    '路跑': '田徑運動',
    '短跑': '田徑運動',
    '長跑': '田徑運動',
    '跳高': '田徑運動',
    '跳遠': '田徑運動',
    '鉛球': '田徑運動',
    '標槍': '田徑運動',
    '鐵餅': '田徑運動',
    '十項全能': '田徑運動',
    '登山': '田徑運動',
    '爬山': '田徑運動',
    '健行': '田徑運動',
    '徒步': '田徑運動',
    '攀岩': '田徑運動',
    '自行車': '田徑運動',
    '單車': '田徑運動',
    '腳踏車': '田徑運動',
    '公路車': '田徑運動',
    '登山車': '田徑運動',
    '武術': '田徑運動',
    '自衛術': '田徑運動',
    '跆拳道': '田徑運動',
    '空手道': '田徑運動',
    '柔道': '田徑運動',
    '拳擊': '田徑運動',
    '太極': '田徑運動',
    '詠春': '田徑運動',
    '瑜珈健身': '田徑運動',
    '皮拉提斯': '田徑運動',
    '極限運動': '田徑運動',
    '滑板': '田徑運動',
    '直排輪': '田徑運動',    // 🎮 娛樂與休閒類
    // 遊戲相關
    '遊戲': '遊戲娛樂',
    '電玩': '遊戲娛樂',
    '打電動': '遊戲娛樂',
    '電競': '遊戲娛樂',
    'PC遊戲': '遊戲娛樂',
    'Switch': '遊戲娛樂',
    '手遊': '遊戲娛樂',
    '手機遊戲': '遊戲娛樂',
    '主機遊戲': '遊戲娛樂',
    'PS5': '遊戲娛樂',
    'PS': '遊戲娛樂',
    'Xbox': '遊戲娛樂',
    '線上遊戲': '遊戲娛樂',
    '單機遊戲': '遊戲娛樂',
    '桌遊': '遊戲娛樂',
    '卡牌遊戲': '遊戲娛樂',
    '桌上遊戲': '遊戲娛樂',
    '大富翁': '遊戲娛樂',
    '狼人殺': '遊戲娛樂',
    '劇本殺': '遊戲娛樂',
    '棋類': '遊戲娛樂',
    '撲克': '遊戲娛樂',
    '麻將': '遊戲娛樂',
    
    // 收藏相關
    '收藏': '收藏嗜好',
    '集郵': '收藏嗜好',
    '郵票': '收藏嗜好',
    '錢幣': '收藏嗜好',
    '古董': '收藏嗜好',
    '模型': '收藏嗜好',
    '公仔收集': '收藏嗜好',
    '公仔': '收藏嗜好',
    '手辦': '收藏嗜好',
    '鋼彈': '收藏嗜好',
    '鋼彈模型': '收藏嗜好',
    '動漫周邊': '收藏嗜好',
    'ACG': '收藏嗜好',
    '模型製作': '收藏嗜好',
    '拼圖': '收藏嗜好',
    '樂高': '收藏嗜好',
    'LEGO': '收藏嗜好',
    '玩具': '收藏嗜好',
    '卡片': '收藏嗜好',
    '書籍收藏': '收藏嗜好',
    '唱片': '收藏嗜好',
    '藝術品': '收藏嗜好',
    
    // 旅遊相關
    '旅行': '旅遊探索',
    '旅遊': '旅遊探索',
    '背包客': '旅遊探索',
    '自助旅行': '旅遊探索',
    '國內旅遊': '旅遊探索',
    '國外旅遊': '旅遊探索',
    '深度旅遊': '旅遊探索',
    '露營': '旅遊探索',
    '野餐': '旅遊探索',
    '觀光': '旅遊探索',
    '探險': '旅遊探索',
    
    // 其他娛樂
    '看電影': '收藏嗜好',
    '追劇': '收藏嗜好',
    '電影': '收藏嗜好',
    '影集': '收藏嗜好',
    '動畫': '收藏嗜好',
    '動漫': '收藏嗜好',
    '日劇': '收藏嗜好',
    '韓劇': '收藏嗜好',
    '美劇': '收藏嗜好',
    '紀錄片': '收藏嗜好',
    '美食': '營養健康',
    '咖啡': '收藏嗜好',
    '品酒': '收藏嗜好',
    '茶道': '收藏嗜好',
    
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
    ].filter(Boolean),    '專門興趣': [
      // 藝術創作類
      skillTreesCollection['攝影藝術'],
      skillTreesCollection['繪畫藝術'],
      skillTreesCollection['書法藝術'],
      skillTreesCollection['手工藝術'],
      
      // 表演藝術類
      skillTreesCollection['音樂藝術'],
      skillTreesCollection['舞蹈藝術'],
      skillTreesCollection['戲劇表演'],
      
      // 知識學習類
      skillTreesCollection['閱讀素養'],
      skillTreesCollection['研究學習'],
      skillTreesCollection['記憶學習'],
      
      // 身心健康類
      skillTreesCollection['心理健康'],
      skillTreesCollection['冥想靜心'],
      skillTreesCollection['營養健康'],
      
      // 運動競技類
      skillTreesCollection['球類運動'],
      skillTreesCollection['水上運動'],
      skillTreesCollection['田徑運動'],
      
      // 娛樂休閒類
      skillTreesCollection['遊戲娛樂'],
      skillTreesCollection['收藏嗜好'],
      skillTreesCollection['旅遊探索']
    ].filter(Boolean)
  }
}

// 導出預設配置（向後相容）
export default skillTreesConfig
