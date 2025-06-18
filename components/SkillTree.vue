<template>
  <div class="skill-tree-container">
    <div class="tech-frame">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <svg class="w-6 h-6 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
          {{ skillTree.name }}
        </h2>
        
        <!-- 技能樹圖 -->
        <div class="space-y-8">
          <div v-for="(level, levelIndex) in skillTree.levels" :key="levelIndex" class="skill-level">
            <div class="flex items-center mb-6">
              <div class="tech-level-badge">
                {{ levelIndex + 1 }}
              </div>
              <h3 class="text-lg font-bold text-cyan-400 ml-4">{{ level.name }}</h3>
              <div class="flex-1 h-px bg-gray-600 ml-4"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                v-for="skill in level.skills" 
                :key="skill.id"                @click="handleSkillClick(skill)"
                :class="[
                  'skill-node cursor-pointer p-6 rounded-lg border-2 transition-all duration-300 transform hover:scale-105',
                  getSkillNodeClass(skill)
                ]"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <div class="flex items-center mb-2">
                      <h4 class="text-white font-medium flex-1">{{ skill.name }}</h4>
                      <div class="skill-status-icon ml-2">
                        <svg v-if="skill.completed" class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <svg v-else-if="skill.available" class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        <svg v-else class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                      </div>
                    </div>
                    
                    <p class="text-gray-400 text-sm mb-3 leading-relaxed">{{ skill.description }}</p>
                    
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-4">
                        <span class="text-xs text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded">
                          經驗: +{{ skill.exp }}
                        </span>
                        <span v-if="skill.completed" class="text-green-400 text-xs bg-green-400/20 px-2 py-1 rounded">
                          ✓ 已完成
                        </span>
                        <span v-else-if="!skill.available" class="text-gray-500 text-xs bg-gray-500/20 px-2 py-1 rounded">
                          🔒 未解鎖
                        </span>
                        <span v-else class="text-yellow-400 text-xs bg-yellow-400/20 px-2 py-1 rounded">
                          📚 可學習
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 技能連接線 (視覺效果) -->
                <div v-if="levelIndex < skillTree.levels.length - 1" class="skill-connection-line"></div>
              </div>
            </div>
            
            <!-- 層級間的連接線 -->
            <div v-if="levelIndex < skillTree.levels.length - 1" class="level-connection mt-8">
              <div class="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <div class="flex justify-center -mt-2">
                <div class="w-4 h-4 bg-cyan-400 rounded-full border-2 border-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tech-corner tech-corner-tl"></div>
      <div class="tech-corner tech-corner-tr"></div>
      <div class="tech-corner tech-corner-bl"></div>
      <div class="tech-corner tech-corner-br"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Skill {
  id: string
  name: string
  description: string
  exp: number
  completed?: boolean
  available?: boolean
  requiredSkills?: string[]
  category?: string
}

interface SkillLevel {
  name: string
  skills: Skill[]
}

interface SkillTree {
  name: string
  levels: SkillLevel[]
}

interface Props {
  skillTree: SkillTree
}

const props = defineProps<Props>()

const emit = defineEmits<{
  skillToggle: [skill: Skill]
}>()

const getSkillNodeClass = (skill: Skill) => {
  if (skill.completed) {
    return 'border-green-400 bg-green-400/10 shadow-lg shadow-green-400/20'
  } else if (skill.available) {
    return 'border-cyan-400 bg-cyan-400/5 hover:border-cyan-300 hover:bg-cyan-400/10 shadow-lg shadow-cyan-400/10'
  } else {
    return 'border-gray-600 bg-gray-800/30 opacity-60 cursor-not-allowed'
  }
}

const handleSkillClick = (skill: Skill) => {
  console.log('Skill clicked:', skill.name, 'Available:', skill.available, 'Completed:', skill.completed)
  if (skill.available && !skill.completed) {
    emit('skillToggle', skill)
  }
}
</script>

<style scoped>
.skill-tree-container {
  @apply w-full;
}

.tech-level-badge {
  @apply w-8 h-8 bg-cyan-400 text-black rounded-full flex items-center justify-center font-bold text-sm;
}

.skill-node {
  @apply relative overflow-hidden;
}

.skill-node::before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 transition-opacity duration-300;
}

.skill-node:hover::before {
  @apply opacity-100;
}

.skill-status-icon {
  @apply flex-shrink-0;
}

.skill-connection-line {
  @apply absolute bottom-0 left-1/2 w-px h-4 bg-cyan-400/50 transform -translate-x-1/2;
}

.level-connection {
  @apply relative;
}

/* 技能樹視覺效果 */
.skill-node {
  position: relative;
}

.skill-node::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 0.5rem;
}

.skill-node:hover::after {
  opacity: 1;
}
</style>
