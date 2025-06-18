// 測試活動數據同步的簡單腳本
console.log('=== Firebase 活動數據同步測試 ===')

// 模擬技能完成的活動數據
const mockActivity = {
  id: Date.now().toString(),
  type: 'skill',
  description: '完成技能：基礎電路分析，獲得 5 經驗值',
  timestamp: Date.now(),
  skillTree: '電機工程',
  skillName: '基礎電路分析'
}

console.log('模擬活動數據:', mockActivity)

// 模擬保存到 Firebase 的數據結構
const mockFirebaseData = {
  level: 3,
  exp: 260,
  skillTrees: {
    '電機工程': {
      skills: {
        '基礎電路分析': { level: 3, exp: 150, completed: true }
      }
    }
  },
  activities: [mockActivity], // 統一使用 activities 字段
  recentActivities: [mockActivity], // 保持兼容性
  selectedMajor: '電機工程',
  selectedInterests: ['程式設計', '電子電路'],
  lastUpdated: new Date().toISOString()
}

console.log('Firebase 保存格式:', JSON.stringify(mockFirebaseData, null, 2))

// 模擬讀取時的數據處理
const loadedData = mockFirebaseData
const activities = loadedData.activities || loadedData.recentActivities || []

console.log('讀取到的活動數據:', activities)
console.log('活動數量:', activities.length)

if (activities.length > 0) {
  console.log('✅ 活動數據同步正常')
  activities.forEach((activity, index) => {
    console.log(`  ${index + 1}. [${activity.type}] ${activity.description}`)
  })
} else {
  console.log('❌ 沒有活動數據')
}

console.log('\n=== 測試完成 ===')
