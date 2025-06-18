// 運動競技技能樹統整檔案
import { ballSportsSkills } from './ball-sports-skills'
import { waterSportsSkills } from './water-sports-skills'
import { trackFieldSkills } from './track-field-skills'

// 匯出所有運動競技技能樹
export {
  ballSportsSkills,
  waterSportsSkills,
  trackFieldSkills
}

// 運動競技技能樹集合
export const sportsSkillTrees = {
  '球類運動': ballSportsSkills,
  '水上運動': waterSportsSkills,
  '田徑運動': trackFieldSkills
}

// 獲取所有運動競技技能樹
export function getAllSportsSkillTrees() {
  return Object.values(sportsSkillTrees)
}

// 根據運動興趣獲取對應技能樹
export function getSportsSkillTreeByInterest(interest: string) {
  const sportsInterestMap: Record<string, string> = {
    // 球類運動相關
    '籃球': '球類運動',
    '足球': '球類運動',
    '排球': '球類運動',
    '棒球': '球類運動',
    '網球': '球類運動',
    '桌球': '球類運動',
    '羽毛球': '球類運動',
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
    
    // 田徑運動相關
    '跑步': '田徑運動',
    '馬拉松': '田徑運動',
    '短跑': '田徑運動',
    '長跑': '田徑運動',
    '跳高': '田徑運動',
    '跳遠': '田徑運動',
    '鉛球': '田徑運動',
    '標槍': '田徑運動',
    '鐵餅': '田徑運動',
    '十項全能': '田徑運動'
  }
  
  const skillTreeName = sportsInterestMap[interest]
  return skillTreeName ? sportsSkillTrees[skillTreeName as keyof typeof sportsSkillTrees] : null
}
