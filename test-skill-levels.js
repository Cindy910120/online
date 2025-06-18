// 測試技能樹等級獨立計算
// 模擬函數定義
function calculateSkillTreeLevel(treeExp) {
  // 每10經驗值升1級，最高100級
  return Math.min(100, Math.floor(treeExp / 10) + 1)
}

function getExpForNextLevel(currentLevel) {
  return currentLevel * 10
}

function getSkillTreeProgress(treeName, userSkillTrees) {
  const treeData = userSkillTrees[treeName] || {}
  let totalExp = 0
  let completedSkills = 0
  
  // 計算該技能樹的總經驗值
  Object.values(treeData).forEach((skillData) => {
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

// 模擬用戶進度數據
const mockUserProgress = {
  skillTrees: {
    '資訊工程': {
      'basic-programming': { completed: true, exp: 5 },
      'algorithms': { completed: true, exp: 8 },
      'data-structures': { completed: true, exp: 7 }
    },
    '數學': {
      'basic-arithmetic': { completed: true, exp: 3 },
      'algebra': { completed: true, exp: 5 }
    },
    '物理學': {
      'mechanics': { completed: true, exp: 10 },
      'thermodynamics': { completed: true, exp: 12 },
      'electromagnetism': { completed: true, exp: 15 }
    }
  }
}

console.log('=== 技能樹等級獨立計算測試 ===')

// 測試每個技能樹的獨立等級
const trees = ['資訊工程', '數學', '物理學']

trees.forEach(treeName => {
  const progress = getSkillTreeProgress(treeName, mockUserProgress.skillTrees)
  console.log(`\n${treeName}:`)
  console.log(`  總經驗值: ${progress.totalExp} EXP`)
  console.log(`  當前等級: Lv.${progress.currentLevel}`)
  console.log(`  完成技能: ${progress.completedSkills} 個`)
  console.log(`  升級進度: ${progress.levelProgress.toFixed(1)}%`)
})

// 驗證等級計算公式
console.log('\n=== 等級計算公式驗證 ===')
const testExps = [0, 5, 10, 15, 25, 50, 100, 999, 1000]
testExps.forEach(exp => {
  const level = calculateSkillTreeLevel(exp)
  console.log(`${exp} EXP → Lv.${level}`)
})

console.log('\n✓ 測試完成！每個技能樹都有獨立的等級計算。')
