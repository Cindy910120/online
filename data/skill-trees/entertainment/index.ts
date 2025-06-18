// 娛樂休閒技能樹統整檔案
import { gamingSkills } from './gaming-skills'
import { collectingSkills } from './collecting-skills'
import { travelSkills } from './travel-skills'

// 匯出所有娛樂休閒技能樹
export {
  gamingSkills,
  collectingSkills,
  travelSkills
}

// 娛樂休閒技能樹集合
export const entertainmentSkillTrees = {
  '遊戲娛樂': gamingSkills,
  '收藏嗜好': collectingSkills,
  '旅遊探索': travelSkills
}

// 獲取所有娛樂休閒技能樹
export function getAllEntertainmentSkillTrees() {
  return Object.values(entertainmentSkillTrees)
}

// 根據娛樂休閒興趣獲取對應技能樹
export function getEntertainmentSkillTreeByInterest(interest: string) {
  const entertainmentInterestMap: Record<string, string> = {
    // 遊戲相關
    '遊戲': '遊戲娛樂',
    '電玩': '遊戲娛樂',
    '手遊': '遊戲娛樂',
    '電競': '遊戲娛樂',
    '桌遊': '遊戲娛樂',
    '棋類': '遊戲娛樂',
    '撲克': '遊戲娛樂',
    '麻將': '遊戲娛樂',
    '線上遊戲': '遊戲娛樂',
    'Switch': '遊戲娛樂',
    'PS': '遊戲娛樂',
    'Xbox': '遊戲娛樂',
    
    // 收藏相關
    '收藏': '收藏嗜好',
    '集郵': '收藏嗜好',
    '郵票': '收藏嗜好',
    '錢幣': '收藏嗜好',
    '古董': '收藏嗜好',
    '公仔': '收藏嗜好',
    '模型': '收藏嗜好',
    '玩具': '收藏嗜好',
    '卡片': '收藏嗜好',
    '書籍收藏': '收藏嗜好',
    '唱片': '收藏嗜好',
    '藝術品': '收藏嗜好',
    
    // 旅遊相關
    '旅遊': '旅遊探索',
    '旅行': '旅遊探索',
    '自助旅行': '旅遊探索',
    '背包客': '旅遊探索',
    '深度旅遊': '旅遊探索',
    '國外旅遊': '旅遊探索',
    '國內旅遊': '旅遊探索',
    '露營': '旅遊探索',
    '登山': '旅遊探索',
    '健行': '旅遊探索',
    '探險': '旅遊探索'
  }
  
  const skillTreeName = entertainmentInterestMap[interest]
  return skillTreeName ? entertainmentSkillTrees[skillTreeName as keyof typeof entertainmentSkillTrees] : null
}
