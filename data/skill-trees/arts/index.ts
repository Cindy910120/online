// 藝術技能樹統整檔案
import { photographySkills } from './photography-skills'
import { drawingPaintingSkills } from './drawing-painting-skills'
import { calligraphySkills } from './calligraphy-skills'
import { handicraftSkills } from './handicraft-skills'

// 匯出所有藝術技能樹
export {
  photographySkills,
  drawingPaintingSkills,
  calligraphySkills,
  handicraftSkills
}

// 藝術技能樹集合
export const artSkillTrees = {
  '攝影藝術': photographySkills,
  '繪畫藝術': drawingPaintingSkills,
  '書法藝術': calligraphySkills,
  '手工藝術': handicraftSkills
}

// 獲取所有藝術技能樹
export function getAllArtSkillTrees() {
  return Object.values(artSkillTrees)
}

// 根據藝術興趣獲取對應技能樹
export function getArtSkillTreeByInterest(interest: string) {
  const artInterestMap: Record<string, string> = {
    // 攝影相關
    '攝影': '攝影藝術',
    '風景攝影': '攝影藝術',
    '人像攝影': '攝影藝術',
    '街拍': '攝影藝術',
    '商業攝影': '攝影藝術',
    '紀實攝影': '攝影藝術',
    
    // 繪畫相關
    '繪畫': '繪畫藝術',
    '畫畫': '繪畫藝術',
    '素描': '繪畫藝術',
    '水彩': '繪畫藝術',
    '油畫': '繪畫藝術',
    '數位畫': '繪畫藝術',
    '數位繪圖': '繪畫藝術',
    '插畫': '繪畫藝術',
    
    // 書法相關
    '書法': '書法藝術',
    '手寫字': '書法藝術',
    '毛筆字': '書法藝術',
    '硬筆書法': '書法藝術',
    '英文書法': '書法藝術',
    
    // 手工藝相關
    '手工藝': '手工藝術',
    '編織': '手工藝術',
    '刺繡': '手工藝術',
    '陶藝': '手工藝術',
    '黏土': '手工藝術',
    '手作飾品': '手工藝術',
    '首飾設計': '手工藝術',
    '木工': '手工藝術',
    '皮革工藝': '手工藝術',
    '金工': '手工藝術'
  }
    const skillTreeName = artInterestMap[interest]
  return skillTreeName ? artSkillTrees[skillTreeName as keyof typeof artSkillTrees] : null
}
