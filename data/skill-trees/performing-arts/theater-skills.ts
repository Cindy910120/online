// 戲劇表演技能樹
export const theaterSkills = {
  name: '戲劇表演',
  description: '戲劇表演技巧、角色詮釋與舞台藝術',
  icon: '🎭',
  color: '#7c3aed',
  levels: [
    {
      name: '表演入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'theater_voice_projection',
          name: '聲音投射',
          description: '正確的發聲與音量控制',
          exp: 5,
          requiredSkills: [],
          category: '聲音技巧'
        },
        {
          id: 'theater_body_language',
          name: '肢體語言',
          description: '用身體動作表達情感',
          exp: 4,
          requiredSkills: [],
          category: '肢體表演'
        },
        {
          id: 'theater_emotion_basic',
          name: '情感表達',
          description: '基礎情感的表演與詮釋',
          exp: 6,
          requiredSkills: ['theater_voice_projection'],
          category: '情感技巧'
        },
        {
          id: 'theater_stage_awareness',
          name: '舞台意識',
          description: '對舞台空間與觀眾的認知',
          exp: 5,
          requiredSkills: ['theater_body_language'],
          category: '舞台技巧'
        }
      ]
    },
    {
      name: '表演進階 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'theater_character_analysis',
          name: '角色分析',
          description: '深入分析與理解角色背景',
          exp: 10,
          requiredSkills: ['theater_emotion_basic'],
          category: '角色建構'
        },
        {
          id: 'theater_improvisation',
          name: '即興表演',
          description: '無劇本的即興創作能力',
          exp: 12,
          requiredSkills: ['theater_stage_awareness'],
          category: '即興技巧'
        },
        {
          id: 'theater_dialogue_delivery',
          name: '台詞詮釋',
          description: '台詞的節奏、語調與情感表達',
          exp: 15,
          requiredSkills: ['theater_character_analysis'],
          category: '台詞技巧'
        }
      ]
    },
    {
      name: '表演專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'theater_directing_basic',
          name: '導演基礎',
          description: '基礎導演技巧與作品指導',
          exp: 18,
          requiredSkills: ['theater_improvisation'],
          category: '導演技能'
        },
        {
          id: 'theater_method_acting',
          name: '方法表演',
          description: '深度角色融入與情感記憶',
          exp: 20,
          requiredSkills: ['theater_dialogue_delivery'],
          category: '表演方法'
        },
        {
          id: 'theater_production_management',
          name: '製作管理',
          description: '戲劇製作的整體規劃與管理',
          exp: 22,
          requiredSkills: ['theater_directing_basic'],
          category: '製作技能'
        }
      ]
    }
  ]
}
