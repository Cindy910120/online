// 台灣大學18學群分類體系類型定義

export interface AcademicCategory {
  id: string
  name: string
  description: string
  subcategories: AcademicSubcategory[]
}

export interface AcademicSubcategory {
  id: string
  name: string
  description: string
  relatedSkills: string[]
  careerPaths: string[]
}

export interface UserAbilities {
  analytical: number      // 分析能力
  creative: number        // 創意能力
  technical: number       // 技術能力
  communication: number   // 溝通能力
  leadership: number      // 領導能力
  research: number        // 研究能力
  practical: number       // 實務能力
  mathematical: number    // 數理能力
  linguistic: number      // 語言能力
  artistic: number        // 藝術能力
  social: number          // 社會能力
  business: number        // 商業能力
}

export interface AbilityConfig {
  skill: keyof UserAbilities
  weight: number
  description: string
}

export interface SkillMapping {
  [key: string]: AbilityConfig[]
}

export interface UserProfile {
  uid: string
  email: string
  name: string
  nickname?: string
  education?: string
  major?: string
  height?: string
  weight?: string
  skills?: string[]
  interests?: string[]
  birthday?: string
  abilities?: UserAbilities
  createdAt?: Date
  updatedAt?: Date
}
