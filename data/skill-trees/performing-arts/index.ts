// 表演藝術技能樹統整檔案
import { musicSkills } from './music-skills'
import { danceSkills } from './dance-skills'
import { theaterSkills } from './theater-skills'

// 匯出所有表演藝術技能樹
export {
  musicSkills,
  danceSkills,
  theaterSkills
}

// 表演藝術技能樹集合
export const performingArtsSkillTrees = {
  '音樂藝術': musicSkills,
  '舞蹈藝術': danceSkills,
  '戲劇表演': theaterSkills
}

// 獲取所有表演藝術技能樹
export function getAllPerformingArtsSkillTrees() {
  return Object.values(performingArtsSkillTrees)
}

// 根據表演藝術興趣獲取對應技能樹
export function getPerformingArtsSkillTreeByInterest(interest: string) {
  const performingArtsInterestMap: Record<string, string> = {
    // 音樂相關
    '音樂': '音樂藝術',
    '樂器': '音樂藝術',
    '吉他': '音樂藝術',
    '鋼琴': '音樂藝術',
    '小提琴': '音樂藝術',
    '爵士鼓': '音樂藝術',
    '唱歌': '音樂藝術',
    '聲樂': '音樂藝術',
    '作曲': '音樂藝術',
    '編曲': '音樂藝術',
    '音樂製作': '音樂藝術',
    
    // 舞蹈相關
    '舞蹈': '舞蹈藝術',
    '跳舞': '舞蹈藝術',
    '芭蕾': '舞蹈藝術',
    '現代舞': '舞蹈藝術',
    '爵士舞': '舞蹈藝術',
    '街舞': '舞蹈藝術',
    '拉丁舞': '舞蹈藝術',
    '國標舞': '舞蹈藝術',
    '民族舞': '舞蹈藝術',
    '編舞': '舞蹈藝術',
    
    // 戲劇相關
    '戲劇': '戲劇表演',
    '表演': '戲劇表演',
    '話劇': '戲劇表演',
    '音樂劇': '戲劇表演',
    '即興劇': '戲劇表演',
    '演技': '戲劇表演',
    '導演': '戲劇表演',
    '舞台劇': '戲劇表演'
  }
  
  const skillTreeName = performingArtsInterestMap[interest]
  return skillTreeName ? performingArtsSkillTrees[skillTreeName as keyof typeof performingArtsSkillTrees] : null
}
