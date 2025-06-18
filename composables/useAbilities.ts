import type { SkillMapping, UserAbilities, AbilityConfig } from '~/types/academic'

// 能力分數計算配置
export const skillToAbilityMapping: SkillMapping = {
  // 程式設計相關
  '程式設計': [
    { skill: 'technical', weight: 0.8, description: '技術能力' },
    { skill: 'analytical', weight: 0.7, description: '分析能力' },
    { skill: 'mathematical', weight: 0.6, description: '數理能力' }
  ],
  '軟體開發': [
    { skill: 'technical', weight: 0.9, description: '技術能力' },
    { skill: 'analytical', weight: 0.7, description: '分析能力' },
    { skill: 'practical', weight: 0.6, description: '實務能力' }
  ],
  '演算法': [
    { skill: 'analytical', weight: 0.9, description: '分析能力' },
    { skill: 'mathematical', weight: 0.8, description: '數理能力' },
    { skill: 'technical', weight: 0.7, description: '技術能力' }
  ],
  
  // 工程相關
  '機械設計': [
    { skill: 'technical', weight: 0.8, description: '技術能力' },
    { skill: 'practical', weight: 0.7, description: '實務能力' },
    { skill: 'mathematical', weight: 0.6, description: '數理能力' }
  ],
  '電路設計': [
    { skill: 'technical', weight: 0.8, description: '技術能力' },
    { skill: 'analytical', weight: 0.7, description: '分析能力' },
    { skill: 'mathematical', weight: 0.6, description: '數理能力' }
  ],
  
  // 醫學相關
  '臨床診斷': [
    { skill: 'analytical', weight: 0.8, description: '分析能力' },
    { skill: 'communication', weight: 0.7, description: '溝通能力' },
    { skill: 'research', weight: 0.6, description: '研究能力' }
  ],
  '護理技能': [
    { skill: 'communication', weight: 0.8, description: '溝通能力' },
    { skill: 'practical', weight: 0.7, description: '實務能力' },
    { skill: 'social', weight: 0.6, description: '社會能力' }
  ],
  
  // 商業管理相關
  '策略規劃': [
    { skill: 'analytical', weight: 0.8, description: '分析能力' },
    { skill: 'leadership', weight: 0.7, description: '領導能力' },
    { skill: 'business', weight: 0.9, description: '商業能力' }
  ],
  '團隊領導': [
    { skill: 'leadership', weight: 0.9, description: '領導能力' },
    { skill: 'communication', weight: 0.8, description: '溝通能力' },
    { skill: 'social', weight: 0.7, description: '社會能力' }
  ],
  '市場分析': [
    { skill: 'analytical', weight: 0.8, description: '分析能力' },
    { skill: 'business', weight: 0.9, description: '商業能力' },
    { skill: 'research', weight: 0.6, description: '研究能力' }
  ],
  
  // 財經相關
  '財務分析': [
    { skill: 'analytical', weight: 0.9, description: '分析能力' },
    { skill: 'mathematical', weight: 0.8, description: '數理能力' },
    { skill: 'business', weight: 0.7, description: '商業能力' }
  ],
  '投資決策': [
    { skill: 'analytical', weight: 0.8, description: '分析能力' },
    { skill: 'business', weight: 0.9, description: '商業能力' },
    { skill: 'mathematical', weight: 0.7, description: '數理能力' }
  ],
  
  // 藝術設計相關
  '平面設計': [
    { skill: 'creative', weight: 0.9, description: '創意能力' },
    { skill: 'artistic', weight: 0.8, description: '藝術能力' },
    { skill: 'technical', weight: 0.6, description: '技術能力' }
  ],
  '建築設計': [
    { skill: 'creative', weight: 0.8, description: '創意能力' },
    { skill: 'technical', weight: 0.7, description: '技術能力' },
    { skill: 'mathematical', weight: 0.6, description: '數理能力' }
  ],
  '繪畫技法': [
    { skill: 'artistic', weight: 0.9, description: '藝術能力' },
    { skill: 'creative', weight: 0.8, description: '創意能力' },
    { skill: 'practical', weight: 0.5, description: '實務能力' }
  ],
  
  // 語言文學相關
  '英語聽說讀寫': [
    { skill: 'linguistic', weight: 0.9, description: '語言能力' },
    { skill: 'communication', weight: 0.7, description: '溝通能力' },
    { skill: 'research', weight: 0.5, description: '研究能力' }
  ],
  '文學分析': [
    { skill: 'analytical', weight: 0.8, description: '分析能力' },
    { skill: 'linguistic', weight: 0.7, description: '語言能力' },
    { skill: 'creative', weight: 0.6, description: '創意能力' }
  ],
  '翻譯技巧': [
    { skill: 'linguistic', weight: 0.9, description: '語言能力' },
    { skill: 'communication', weight: 0.7, description: '溝通能力' },
    { skill: 'analytical', weight: 0.6, description: '分析能力' }
  ],
  
  // 教育相關
  '教學設計': [
    { skill: 'communication', weight: 0.8, description: '溝通能力' },
    { skill: 'creative', weight: 0.7, description: '創意能力' },
    { skill: 'social', weight: 0.6, description: '社會能力' }
  ],
  '班級經營': [
    { skill: 'leadership', weight: 0.8, description: '領導能力' },
    { skill: 'communication', weight: 0.7, description: '溝通能力' },
    { skill: 'social', weight: 0.8, description: '社會能力' }
  ],
  
  // 法律相關
  '法條解釋': [
    { skill: 'analytical', weight: 0.9, description: '分析能力' },
    { skill: 'research', weight: 0.8, description: '研究能力' },
    { skill: 'communication', weight: 0.6, description: '溝通能力' }
  ],
  '法庭辯論': [
    { skill: 'communication', weight: 0.9, description: '溝通能力' },
    { skill: 'analytical', weight: 0.8, description: '分析能力' },
    { skill: 'leadership', weight: 0.6, description: '領導能力' }
  ],
  
  // 科學研究相關
  '實驗設計': [
    { skill: 'research', weight: 0.9, description: '研究能力' },
    { skill: 'analytical', weight: 0.8, description: '分析能力' },
    { skill: 'practical', weight: 0.7, description: '實務能力' }
  ],
  '統計分析': [
    { skill: 'analytical', weight: 0.9, description: '分析能力' },
    { skill: 'mathematical', weight: 0.8, description: '數理能力' },
    { skill: 'research', weight: 0.7, description: '研究能力' }
  ],
  
  // 傳播媒體相關
  '新聞採訪': [
    { skill: 'communication', weight: 0.8, description: '溝通能力' },
    { skill: 'research', weight: 0.7, description: '研究能力' },
    { skill: 'social', weight: 0.6, description: '社會能力' }
  ],
  '廣告企劃': [
    { skill: 'creative', weight: 0.8, description: '創意能力' },
    { skill: 'business', weight: 0.7, description: '商業能力' },
    { skill: 'communication', weight: 0.6, description: '溝通能力' }
  ],
  
  // 社會服務相關
  '社會工作': [
    { skill: 'social', weight: 0.9, description: '社會能力' },
    { skill: 'communication', weight: 0.8, description: '溝通能力' },
    { skill: 'analytical', weight: 0.6, description: '分析能力' }
  ],
  '心理評估': [
    { skill: 'analytical', weight: 0.8, description: '分析能力' },
    { skill: 'communication', weight: 0.7, description: '溝通能力' },
    { skill: 'research', weight: 0.6, description: '研究能力' }
  ],
  
  // 農業生物相關
  '作物栽培': [
    { skill: 'practical', weight: 0.8, description: '實務能力' },
    { skill: 'research', weight: 0.6, description: '研究能力' },
    { skill: 'analytical', weight: 0.5, description: '分析能力' }
  ],
  '生物實驗': [
    { skill: 'research', weight: 0.8, description: '研究能力' },
    { skill: 'practical', weight: 0.7, description: '實務能力' },
    { skill: 'analytical', weight: 0.6, description: '分析能力' }
  ],
  
  // 觀光休閒相關
  '旅遊規劃': [
    { skill: 'communication', weight: 0.7, description: '溝通能力' },
    { skill: 'business', weight: 0.6, description: '商業能力' },
    { skill: 'creative', weight: 0.6, description: '創意能力' }
  ],
  '飯店管理': [
    { skill: 'leadership', weight: 0.7, description: '領導能力' },
    { skill: 'business', weight: 0.8, description: '商業能力' },
    { skill: 'communication', weight: 0.7, description: '溝通能力' }
  ],
  
  // 環境科學相關
  '環境監測': [
    { skill: 'research', weight: 0.8, description: '研究能力' },
    { skill: 'analytical', weight: 0.7, description: '分析能力' },
    { skill: 'practical', weight: 0.6, description: '實務能力' }
  ],
  '生態調查': [
    { skill: 'research', weight: 0.8, description: '研究能力' },
    { skill: 'practical', weight: 0.7, description: '實務能力' },
    { skill: 'analytical', weight: 0.6, description: '分析能力' }
  ]
}

// 興趣對應能力加成
export const interestToAbilityMapping: SkillMapping = {
  '音樂': [
    { skill: 'artistic', weight: 0.7, description: '藝術能力' },
    { skill: 'creative', weight: 0.6, description: '創意能力' }
  ],
  '繪畫': [
    { skill: 'artistic', weight: 0.8, description: '藝術能力' },
    { skill: 'creative', weight: 0.7, description: '創意能力' }
  ],
  '運動': [
    { skill: 'practical', weight: 0.6, description: '實務能力' },
    { skill: 'leadership', weight: 0.5, description: '領導能力' }
  ],
  '閱讀': [
    { skill: 'research', weight: 0.6, description: '研究能力' },
    { skill: 'linguistic', weight: 0.5, description: '語言能力' }
  ],
  '寫作': [
    { skill: 'creative', weight: 0.7, description: '創意能力' },
    { skill: 'linguistic', weight: 0.6, description: '語言能力' }
  ],
  '攝影': [
    { skill: 'artistic', weight: 0.6, description: '藝術能力' },
    { skill: 'creative', weight: 0.5, description: '創意能力' }
  ],
  '程式設計': [
    { skill: 'technical', weight: 0.7, description: '技術能力' },
    { skill: 'analytical', weight: 0.6, description: '分析能力' }
  ],
  '投資理財': [
    { skill: 'business', weight: 0.7, description: '商業能力' },
    { skill: 'analytical', weight: 0.6, description: '分析能力' }
  ],
  '語言學習': [
    { skill: 'linguistic', weight: 0.8, description: '語言能力' },
    { skill: 'communication', weight: 0.5, description: '溝通能力' }
  ],
  '旅遊': [
    { skill: 'social', weight: 0.5, description: '社會能力' },
    { skill: 'communication', weight: 0.4, description: '溝通能力' }
  ]
}

// 科系對應能力基礎分數
export const majorToAbilityMapping: { [key: string]: Partial<UserAbilities> } = {
  // 工程學群
  '資訊工程': { technical: 85, analytical: 80, mathematical: 75, practical: 70 },
  '電機工程': { technical: 80, analytical: 75, mathematical: 80, practical: 75 },
  '機械工程': { technical: 75, practical: 80, mathematical: 70, analytical: 70 },
  '化學工程': { technical: 75, analytical: 75, mathematical: 70, research: 70 },
  '土木工程': { technical: 70, practical: 80, mathematical: 70, analytical: 65 },
  
  // 商管學群
  '企業管理': { business: 85, leadership: 80, communication: 75, analytical: 70 },
  '財務金融': { business: 80, analytical: 85, mathematical: 80, research: 65 },
  '會計': { analytical: 80, mathematical: 75, business: 70, practical: 75 },
  '行銷': { business: 80, creative: 75, communication: 80, social: 70 },
  
  // 醫學相關
  '醫學': { analytical: 85, research: 80, communication: 75, practical: 80 },
  '護理': { communication: 85, social: 80, practical: 80, analytical: 65 },
  '藥學': { analytical: 80, research: 75, practical: 75, mathematical: 70 },
  
  // 文學語言
  '中國文學': { linguistic: 85, creative: 75, research: 70, communication: 70 },
  '英國語文': { linguistic: 90, communication: 80, research: 65, analytical: 65 },
  '日本語文': { linguistic: 85, communication: 75, research: 60, social: 65 },
  
  // 法政學群
  '法律': { analytical: 85, research: 80, communication: 75, leadership: 70 },
  '政治': { communication: 80, leadership: 80, analytical: 75, social: 80 },
  '行政管理': { leadership: 75, communication: 75, business: 70, analytical: 70 },
  
  // 理學群
  '數學': { mathematical: 95, analytical: 85, research: 75, technical: 65 },
  '物理': { mathematical: 90, analytical: 85, research: 80, technical: 70 },
  '化學': { analytical: 80, research: 85, mathematical: 75, practical: 70 },
  
  // 藝術學群
  '美術': { artistic: 90, creative: 85, practical: 65, communication: 60 },
  '音樂': { artistic: 90, creative: 80, communication: 70, practical: 65 },
  '設計': { creative: 85, artistic: 80, technical: 70, practical: 70 },
  
  // 教育學群
  '教育': { communication: 85, social: 80, leadership: 75, research: 70 },
  '幼兒教育': { communication: 80, social: 85, creative: 70, practical: 75 },
  '特殊教育': { communication: 85, social: 90, research: 70, analytical: 65 },
  
  // 社會心理學群
  '心理學': { analytical: 80, research: 80, communication: 75, social: 75 },
  '社會學': { analytical: 75, research: 80, social: 85, communication: 75 },
  '社會工作': { social: 90, communication: 85, analytical: 65, practical: 70 },
  
  // 傳播學群
  '新聞': { communication: 85, research: 75, social: 70, linguistic: 75 },
  '廣告': { creative: 80, communication: 75, business: 70, artistic: 70 },
  '公關': { communication: 85, social: 80, business: 70, leadership: 70 },
  
  // 生命科學
  '生物學': { research: 85, analytical: 80, practical: 75, mathematical: 65 },
  '生物科技': { research: 80, technical: 75, analytical: 75, practical: 70 },
  
  // 農業學群
  '農業': { practical: 80, research: 70, analytical: 65, technical: 60 },
  '森林': { practical: 75, research: 70, analytical: 65, technical: 60 },
  
  // 地球環境
  '地理': { research: 75, analytical: 70, practical: 65, technical: 60 },
  '環境科學': { research: 80, analytical: 75, practical: 70, technical: 65 },
  
  // 建築設計
  '建築': { creative: 80, technical: 75, mathematical: 70, artistic: 70 },
  '景觀': { creative: 75, artistic: 70, practical: 70, technical: 60 },
  '室內設計': { creative: 80, artistic: 75, practical: 70, technical: 65 },
  
  // 資訊學群
  '資訊管理': { technical: 80, analytical: 75, business: 70, practical: 70 },
  '多媒體': { creative: 80, technical: 75, artistic: 70, practical: 65 },
  
  // 觀光學群
  '觀光': { communication: 75, social: 75, business: 70, linguistic: 65 },
  '餐旅管理': { business: 75, communication: 75, practical: 80, leadership: 65 }
}

// 基礎能力分數（未選擇科系時的預設值）
export const defaultAbilities: UserAbilities = {
  analytical: 50,
  creative: 50,
  technical: 50,
  communication: 50,
  leadership: 50,
  research: 50,
  practical: 50,
  mathematical: 50,
  linguistic: 50,
  artistic: 50,
  social: 50,
  business: 50
}

// 能力分數計算函數
export function calculateUserAbilities(
  major?: string,
  skills: string[] = [],
  interests: string[] = []
): UserAbilities {
  // 從科系獲得基礎能力分數
  let abilities: UserAbilities = major && majorToAbilityMapping[major] 
    ? { ...defaultAbilities, ...majorToAbilityMapping[major] }
    : { ...defaultAbilities }

  // 根據專長技能加成
  skills.forEach(skill => {
    const skillMappings = skillToAbilityMapping[skill]
    if (skillMappings) {
      skillMappings.forEach(mapping => {
        abilities[mapping.skill] += mapping.weight * 15 // 專長加成較高
      })
    }
  })

  // 根據興趣加成
  interests.forEach(interest => {
    const interestMappings = interestToAbilityMapping[interest]
    if (interestMappings) {
      interestMappings.forEach(mapping => {
        abilities[mapping.skill] += mapping.weight * 8 // 興趣加成較低
      })
    }
  })

  // 確保分數不超過100
  Object.keys(abilities).forEach(key => {
    const abilityKey = key as keyof UserAbilities
    abilities[abilityKey] = Math.min(100, Math.max(0, abilities[abilityKey]))
  })

  return abilities
}

// 能力分數說明
export const abilityDescriptions = {
  analytical: '分析思考與問題解決能力',
  creative: '創意發想與創新思維能力',
  technical: '技術實作與工具運用能力',
  communication: '溝通表達與人際互動能力',
  leadership: '領導統御與團隊管理能力',
  research: '研究調查與資料收集能力',
  practical: '實務操作與動手實作能力',
  mathematical: '數理邏輯與計算分析能力',
  linguistic: '語言文字與表達溝通能力',
  artistic: '藝術美感與創作表現能力',
  social: '社會關懷與人文素養能力',
  business: '商業思維與經營管理能力'
}
