export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  category: 'learning' | 'skill' | 'task' | 'social' | 'time' | 'special' | 'milestone'
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  condition: {
    type: 'skill_count' | 'skill_level' | 'task_complete' | 'exp_total' | 'level_reach' | 'time_spent' | 'consecutive_days' | 'tree_complete' | 'custom_task' | 'profile_complete' | 'first_time' | 'category_master' | 'perfect_score' | 'speed_run' | 'dedication'
    target: number | string
    data?: any
  }
  reward: {
    exp: number
    title?: string
  }
  unlocked: boolean
  unlockedAt?: Date
  progress: number
  hidden?: boolean
}

export const achievements: Achievement[] = [
  // 學習類成就 (Learning)
  {
    id: 'first_skill',
    name: '初學者',
    description: '完成第一個技能學習',
    icon: '🌱',
    category: 'learning',
    rarity: 'common',
    condition: { type: 'skill_count', target: 1 },
    reward: { exp: 10 },
    unlocked: false,
    progress: 0
  },
  {
    id: 'skill_collector',
    name: '技能收集家',
    description: '掌握10個不同技能',
    icon: '📚',
    category: 'learning',
    rarity: 'common',
    condition: { type: 'skill_count', target: 10 },
    reward: { exp: 50 },
    unlocked: false,
    progress: 0
  },
  {
    id: 'knowledge_seeker',
    name: '知識探索者',
    description: '掌握25個技能',
    icon: '🔍',
    category: 'learning',
    rarity: 'rare',
    condition: { type: 'skill_count', target: 25 },
    reward: { exp: 100, title: '探索者' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'master_learner',
    name: '學習大師',
    description: '掌握50個技能',
    icon: '🎓',
    category: 'learning',
    rarity: 'epic',
    condition: { type: 'skill_count', target: 50 },
    reward: { exp: 200, title: '學習大師' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'omniscient',
    name: '博學者',
    description: '掌握100個技能',
    icon: '🧠',
    category: 'learning',
    rarity: 'legendary',
    condition: { type: 'skill_count', target: 100 },
    reward: { exp: 500, title: '博學者' },
    unlocked: false,
    progress: 0
  },

  // 技能樹類成就 (Skill)
  {
    id: 'first_tree_complete',
    name: '樹木養成者',
    description: '完成第一個技能樹',
    icon: '🌳',
    category: 'skill',
    rarity: 'rare',
    condition: { type: 'tree_complete', target: 1 },
    reward: { exp: 75 },
    unlocked: false,
    progress: 0
  },
  {
    id: 'forest_guardian',
    name: '森林守護者',
    description: '完成3個技能樹',
    icon: '🌲',
    category: 'skill',
    rarity: 'epic',
    condition: { type: 'tree_complete', target: 3 },
    reward: { exp: 150, title: '守護者' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'cs_specialist',
    name: '程式專家',
    description: '完成電腦科學技能樹',
    icon: '💻',
    category: 'skill',
    rarity: 'rare',
    condition: { type: 'tree_complete', target: '電腦科學' },
    reward: { exp: 100, title: '程式專家' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'art_master',
    name: '藝術大師',
    description: '完成所有藝術相關技能樹',
    icon: '🎨',
    category: 'skill',
    rarity: 'epic',
    condition: { type: 'category_master', target: 'arts' },
    reward: { exp: 200, title: '藝術大師' },
    unlocked: false,
    progress: 0
  },

  // 任務類成就 (Task)
  {
    id: 'first_task',
    name: '任務新手',
    description: '完成第一個任務',
    icon: '✅',
    category: 'task',
    rarity: 'common',
    condition: { type: 'task_complete', target: 1 },
    reward: { exp: 10 },
    unlocked: false,
    progress: 0
  },
  {
    id: 'task_runner',
    name: '任務執行者',
    description: '完成10個任務',
    icon: '🏃',
    category: 'task',
    rarity: 'common',
    condition: { type: 'task_complete', target: 10 },
    reward: { exp: 50 },
    unlocked: false,
    progress: 0
  },
  {
    id: 'task_master',
    name: '任務大師',
    description: '完成50個任務',
    icon: '🏆',
    category: 'task',
    rarity: 'rare',
    condition: { type: 'task_complete', target: 50 },
    reward: { exp: 150, title: '任務大師' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'legendary_tasker',
    name: '傳說任務者',
    description: '完成100個任務',
    icon: '👑',
    category: 'task',
    rarity: 'legendary',
    condition: { type: 'task_complete', target: 100 },
    reward: { exp: 300, title: '傳說任務者' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'custom_creator',
    name: '自主規劃者',
    description: '創建10個自訂任務',
    icon: '📝',
    category: 'task',
    rarity: 'rare',
    condition: { type: 'custom_task', target: 10 },
    reward: { exp: 75, title: '規劃者' },
    unlocked: false,
    progress: 0
  },

  // 等級與經驗類成就 (Milestone)
  {
    id: 'level_5',
    name: '初出茅廬',
    description: '達到等級5',
    icon: '⭐',
    category: 'milestone',
    rarity: 'common',
    condition: { type: 'level_reach', target: 5 },
    reward: { exp: 25 },
    unlocked: false,
    progress: 0
  },
  {
    id: 'level_10',
    name: '小有成就',
    description: '達到等級10',
    icon: '🌟',
    category: 'milestone',
    rarity: 'common',
    condition: { type: 'level_reach', target: 10 },
    reward: { exp: 50 },
    unlocked: false,
    progress: 0
  },
  {
    id: 'level_25',
    name: '實力認證',
    description: '達到等級25',
    icon: '💫',
    category: 'milestone',
    rarity: 'rare',
    condition: { type: 'level_reach', target: 25 },
    reward: { exp: 100, title: '認證專家' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'level_50',
    name: '資深學者',
    description: '達到等級50',
    icon: '✨',
    category: 'milestone',
    rarity: 'epic',
    condition: { type: 'level_reach', target: 50 },
    reward: { exp: 200, title: '資深學者' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'level_100',
    name: '終極大師',
    description: '達到滿級100',
    icon: '🌠',
    category: 'milestone',
    rarity: 'legendary',
    condition: { type: 'level_reach', target: 100 },
    reward: { exp: 500, title: '終極大師' },
    unlocked: false,
    progress: 0
  },

  // 時間與毅力類成就 (Time)
  {
    id: 'first_week',
    name: '堅持一周',
    description: '連續登入7天',
    icon: '📅',
    category: 'time',
    rarity: 'common',
    condition: { type: 'consecutive_days', target: 7 },
    reward: { exp: 30 },
    unlocked: false,
    progress: 0
  },
  {
    id: 'monthly_dedication',
    name: '月度堅持',
    description: '連續登入30天',
    icon: '🗓️',
    category: 'time',
    rarity: 'rare',
    condition: { type: 'consecutive_days', target: 30 },
    reward: { exp: 100, title: '堅持者' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'annual_commitment',
    name: '年度承諾',
    description: '連續登入365天',
    icon: '🎯',
    category: 'time',
    rarity: 'legendary',
    condition: { type: 'consecutive_days', target: 365 },
    reward: { exp: 1000, title: '不懈追求者' },
    unlocked: false,
    progress: 0
  },

  // 特殊成就 (Special)
  {
    id: 'profile_complete',
    name: '個人檔案完善',
    description: '完整填寫個人資料',
    icon: '👤',
    category: 'special',
    rarity: 'common',
    condition: { type: 'profile_complete', target: 1 },
    reward: { exp: 20 },
    unlocked: false,
    progress: 0
  },
  {
    id: 'first_login',
    name: '初來乍到',
    description: '第一次登入系統',
    icon: '🚪',
    category: 'special',
    rarity: 'common',
    condition: { type: 'first_time', target: 'login' },
    reward: { exp: 5 },
    unlocked: false,
    progress: 0
  },
  {
    id: 'perfect_week',
    name: '完美一周',
    description: '一周內每天都完成至少一個任務',
    icon: '🔥',
    category: 'special',
    rarity: 'rare',
    condition: { type: 'perfect_score', target: 7 },
    reward: { exp: 80, title: '完美主義者' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'speed_learner',
    name: '速學達人',
    description: '一天內掌握5個技能',
    icon: '⚡',
    category: 'special',
    rarity: 'epic',
    condition: { type: 'speed_run', target: 5 },
    reward: { exp: 120, title: '速學達人' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'night_owl',
    name: '夜貓子',
    description: '在深夜(23:00-06:00)完成10個任務',
    icon: '🦉',
    category: 'special',
    rarity: 'rare',
    condition: { type: 'time_spent', target: 10, data: { timeRange: 'night' } },
    reward: { exp: 60, title: '夜貓子' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'early_bird',
    name: '早起鳥',
    description: '在早晨(06:00-09:00)完成10個任務',
    icon: '🐦',
    category: 'special',
    rarity: 'rare',
    condition: { type: 'time_spent', target: 10, data: { timeRange: 'morning' } },
    reward: { exp: 60, title: '早起鳥' },
    unlocked: false,
    progress: 0
  },

  // 社交類成就 (Social) - 為未來擴展預留
  {
    id: 'social_starter',
    name: '社交新手',
    description: '分享第一個成就',
    icon: '👥',
    category: 'social',
    rarity: 'common',
    condition: { type: 'first_time', target: 'share' },
    reward: { exp: 15 },
    unlocked: false,
    progress: 0,
    hidden: true
  },

  // 更多學習相關成就
  {
    id: 'math_genius',
    name: '數學天才',
    description: '完成數學技能樹',
    icon: '🔢',
    category: 'skill',
    rarity: 'rare',
    condition: { type: 'tree_complete', target: '數學' },
    reward: { exp: 100, title: '數學天才' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'language_master',
    name: '語言大師',
    description: '完成語言技能技能樹',
    icon: '🗣️',
    category: 'skill',
    rarity: 'rare',
    condition: { type: 'tree_complete', target: '語言技能' },
    reward: { exp: 100, title: '語言大師' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'fitness_guru',
    name: '健身達人',
    description: '完成健身技能技能樹',
    icon: '💪',
    category: 'skill',
    rarity: 'rare',
    condition: { type: 'tree_complete', target: '健身技能' },
    reward: { exp: 100, title: '健身達人' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'music_virtuoso',
    name: '音樂家',
    description: '完成音樂技能技能樹',
    icon: '🎵',
    category: 'skill',
    rarity: 'rare',
    condition: { type: 'tree_complete', target: '音樂技能' },
    reward: { exp: 100, title: '音樂家' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'psychology_expert',
    name: '心理學專家',
    description: '完成心理學技能樹',
    icon: '🧠',
    category: 'skill',
    rarity: 'rare',
    condition: { type: 'tree_complete', target: '心理學' },
    reward: { exp: 100, title: '心理學專家' },
    unlocked: false,
    progress: 0
  },

  // 工程類專業成就
  {
    id: 'engineer_basic',
    name: '工程師入門',
    description: '完成任一工程類技能樹',
    icon: '⚙️',
    category: 'skill',
    rarity: 'rare',
    condition: { type: 'category_master', target: 'engineering' },
    reward: { exp: 100, title: '工程師' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'medical_expert',
    name: '醫學專家',
    description: '完成醫學技能樹',
    icon: '⚕️',
    category: 'skill',
    rarity: 'epic',
    condition: { type: 'tree_complete', target: '醫學' },
    reward: { exp: 150, title: '醫學專家' },
    unlocked: false,
    progress: 0
  },

  // 綜合性成就
  {
    id: 'well_rounded',
    name: '全面發展',
    description: '在每個技能類別都至少掌握5個技能',
    icon: '🎭',
    category: 'learning',
    rarity: 'epic',
    condition: { type: 'category_master', target: 'all_categories' },
    reward: { exp: 200, title: '全才' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'dedication_master',
    name: '奉獻大師',
    description: '累積學習時間超過100小時',
    icon: '⏰',
    category: 'time',
    rarity: 'epic',
    condition: { type: 'time_spent', target: 6000 }, // 100小時 = 6000分鐘
    reward: { exp: 250, title: '奉獻大師' },
    unlocked: false,
    progress: 0
  },

  // 連擊類成就
  {
    id: 'combo_starter',
    name: '連擊新手',
    description: '連續3天完成任務',
    icon: '🔄',
    category: 'time',
    rarity: 'common',
    condition: { type: 'consecutive_days', target: 3 },
    reward: { exp: 20 },
    unlocked: false,
    progress: 0
  },
  {
    id: 'multitasker',
    name: '多工達人',
    description: '同時進行5個任務',
    icon: '🎪',
    category: 'task',
    rarity: 'rare',
    condition: { type: 'task_complete', target: 5, data: { simultaneous: true } },
    reward: { exp: 80, title: '多工達人' },
    unlocked: false,
    progress: 0
  },

  // 特殊挑戰成就
  {
    id: 'marathon_learner',
    name: '學習馬拉松',
    description: '一天內學習超過6小時',
    icon: '🏃‍♂️',
    category: 'time',
    rarity: 'epic',
    condition: { type: 'time_spent', target: 360, data: { single_day: true } },
    reward: { exp: 150, title: '馬拉松學習者' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'explorer',
    name: '探索者',
    description: '嘗試所有不同類型的技能樹',
    icon: '🗺️',
    category: 'learning',
    rarity: 'epic',
    condition: { type: 'category_master', target: 'explore_all' },
    reward: { exp: 180, title: '探索者' },
    unlocked: false,
    progress: 0
  },

  // 創新類成就
  {
    id: 'innovator',
    name: '創新者',
    description: '創建50個自訂任務',
    icon: '💡',
    category: 'task',
    rarity: 'epic',
    condition: { type: 'custom_task', target: 50 },
    reward: { exp: 200, title: '創新者' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'completionist',
    name: '完美主義者',
    description: '解鎖所有其他成就',
    icon: '💎',
    category: 'special',
    rarity: 'legendary',
    condition: { type: 'category_master', target: 'all_achievements' },
    reward: { exp: 1000, title: '完美主義者' },
    unlocked: false,
    progress: 0,
    hidden: true
  },

  // 效率類成就
  {
    id: 'efficiency_expert',
    name: '效率專家',
    description: '平均任務完成時間少於預估時間的80%',
    icon: '📈',
    category: 'special',
    rarity: 'rare',
    condition: { type: 'perfect_score', target: 80, data: { type: 'efficiency' } },
    reward: { exp: 90, title: '效率專家' },
    unlocked: false,
    progress: 0
  },
  {
    id: 'consistent_performer',
    name: '穩定表現者',
    description: '連續30天每天至少完成一個技能學習',
    icon: '📊',
    category: 'time',
    rarity: 'epic',
    condition: { type: 'consecutive_days', target: 30, data: { requirement: 'daily_skill' } },
    reward: { exp: 120, title: '穩定表現者' },
    unlocked: false,
    progress: 0
  }
]

export const achievementCategories = {
  learning: { name: '學習成就', icon: '📚', color: 'blue' },
  skill: { name: '技能成就', icon: '🎯', color: 'green' },
  task: { name: '任務成就', icon: '✅', color: 'yellow' },
  social: { name: '社交成就', icon: '👥', color: 'purple' },
  time: { name: '時間成就', icon: '⏰', color: 'orange' },
  special: { name: '特殊成就', icon: '⭐', color: 'red' },
  milestone: { name: '里程碑', icon: '🏆', color: 'gold' }
}

export const rarityConfig = {
  common: { name: '普通', color: 'gray', borderColor: '#6b7280' },
  rare: { name: '稀有', color: 'blue', borderColor: '#3b82f6' },
  epic: { name: '史詩', color: 'purple', borderColor: '#8b5cf6' },
  legendary: { name: '傳說', color: 'yellow', borderColor: '#f59e0b' }
}
