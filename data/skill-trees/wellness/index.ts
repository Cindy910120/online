// 身心健康技能樹統整檔案
import { mentalHealthSkills } from './mental-health-skills'
import { meditationSkills } from './meditation-skills'
import { nutritionSkills } from './nutrition-skills'

// 匯出所有身心健康技能樹
export {
  mentalHealthSkills,
  meditationSkills,
  nutritionSkills
}

// 身心健康技能樹集合
export const wellnessSkillTrees = {
  '心理健康': mentalHealthSkills,
  '冥想靜心': meditationSkills,
  '營養健康': nutritionSkills
}

// 獲取所有身心健康技能樹
export function getAllWellnessSkillTrees() {
  return Object.values(wellnessSkillTrees)
}

// 根據身心健康興趣獲取對應技能樹
export function getWellnessSkillTreeByInterest(interest: string) {
  const wellnessInterestMap: Record<string, string> = {
    // 心理健康相關
    '心理健康': '心理健康',
    '情緒管理': '心理健康',
    '壓力管理': '心理健康',
    '正念': '心理健康',
    '自我成長': '心理健康',
    '心理諮商': '心理健康',
    '情緒智商': '心理健康',
    '韌性': '心理健康',
    '正向心理學': '心理健康',
    
    // 冥想靜心相關
    '冥想': '冥想靜心',
    '靜心': '冥想靜心',
    '禪修': '冥想靜心',
    '打坐': '冥想靜心',
    '內觀': '冥想靜心',
    '禪定': '冥想靜心',
    '瑜伽冥想': '冥想靜心',
    '正念冥想': '冥想靜心',
    '身心靈': '冥想靜心',
    
    // 營養健康相關
    '營養': '營養健康',
    '健康飲食': '營養健康',
    '營養學': '營養健康',
    '飲食管理': '營養健康',
    '營養師': '營養健康',
    '食物營養': '營養健康',
    '減重': '營養健康',
    '增重': '營養健康',
    '營養補充': '營養健康',
    '健康管理': '營養健康'
  }
  
  const skillTreeName = wellnessInterestMap[interest]
  return skillTreeName ? wellnessSkillTrees[skillTreeName as keyof typeof wellnessSkillTrees] : null
}
