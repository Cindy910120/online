// 測試細分技能樹的興趣映射功能
import { getSkillTreeByInterest } from './data/skill-trees/index.ts'

// 測試各種興趣是否正確映射到細分技能樹
const testInterests = [
  // 藝術類測試
  { interest: '攝影', expected: '攝影藝術' },
  { interest: '繪畫', expected: '繪畫藝術' },
  { interest: '書法', expected: '書法藝術' },
  { interest: '手工藝', expected: '手工藝術' },
  
  // 表演藝術類測試  
  { interest: '音樂', expected: '音樂藝術' },
  { interest: '舞蹈', expected: '舞蹈藝術' },
  { interest: '戲劇', expected: '戲劇表演' },
  { interest: '鋼琴', expected: '音樂藝術' },
  { interest: '街舞', expected: '舞蹈藝術' },
  
  // 知識學習類測試
  { interest: '閱讀', expected: '閱讀素養' },
  { interest: '研究', expected: '研究學習' },
  { interest: '記憶', expected: '記憶學習' },
  { interest: '英文', expected: '記憶學習' },
  
  // 身心健康類測試
  { interest: '冥想', expected: '冥想靜心' },
  { interest: '瑜伽', expected: '冥想靜心' },
  { interest: '營養', expected: '營養健康' },
  { interest: '情緒管理', expected: '心理健康' },
  
  // 運動類測試
  { interest: '籃球', expected: '球類運動' },
  { interest: '游泳', expected: '水上運動' },
  { interest: '跑步', expected: '田徑運動' },
  
  // 娛樂休閒類測試
  { interest: '遊戲', expected: '遊戲娛樂' },
  { interest: '收藏', expected: '收藏嗜好' },
  { interest: '旅遊', expected: '旅遊探索' },
]

console.log('=== 細分技能樹興趣映射測試 ===')

let passCount = 0
let failCount = 0

testInterests.forEach(({ interest, expected }) => {
  const result = getSkillTreeByInterest(interest)
  const actualName = result?.name || 'null'
  
  if (actualName === expected) {
    console.log(`✅ ${interest} -> ${actualName}`)
    passCount++
  } else {
    console.log(`❌ ${interest} -> ${actualName} (期望: ${expected})`)
    failCount++
  }
})

console.log(`\n=== 測試結果 ===`)
console.log(`✅ 通過: ${passCount}`)
console.log(`❌ 失敗: ${failCount}`)
console.log(`總計: ${passCount + failCount}`)

if (failCount === 0) {
  console.log('\n🎉 所有測試通過！細分技能樹興趣映射功能正常運作！')
} else {
  console.log('\n⚠️ 有部分測試失敗，請檢查興趣映射設定')
}
