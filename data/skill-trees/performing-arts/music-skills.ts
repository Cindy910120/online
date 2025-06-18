// 音樂技能樹
export const musicSkills = {
  name: '音樂藝術',
  description: '樂器演奏、聲樂、音樂理論與創作能力',
  icon: '🎵',
  color: '#8b5cf6',
  levels: [
    {
      name: '音樂入門 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'music_notation_basic',
          name: '音符識讀',
          description: '基礎樂譜閱讀與音符認識',
          exp: 4,
          requiredSkills: [],
          category: '音樂理論'
        },
        {
          id: 'music_rhythm_basic',
          name: '節拍練習',
          description: '基本節拍與節奏感訓練',
          exp: 3,
          requiredSkills: [],
          category: '節奏感'
        },
        {
          id: 'music_vocal_breathing',
          name: '正確發聲',
          description: '正確的發聲技巧與呼吸控制',
          exp: 5,
          requiredSkills: [],
          category: '聲樂技巧'
        },
        {
          id: 'music_instrument_choice',
          name: '樂器入門',
          description: '選擇適合的樂器並學習基礎演奏',
          exp: 6,
          requiredSkills: ['music_notation_basic'],
          category: '樂器演奏'
        }
      ]
    },
    {
      name: '音樂進階 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'music_scale_practice',
          name: '音階練習',
          description: '各種音階的熟練演奏',
          exp: 8,
          requiredSkills: ['music_instrument_choice'],
          category: '技巧提升'
        },
        {
          id: 'music_chord_basic',
          name: '和弦理論',
          description: '基礎和弦構成與進行',
          exp: 10,
          requiredSkills: ['music_notation_basic'],
          category: '音樂理論'
        },
        {
          id: 'music_ensemble_basic',
          name: '合奏入門',
          description: '與他人協作演奏的技巧',
          exp: 12,
          requiredSkills: ['music_rhythm_basic', 'music_scale_practice'],
          category: '合作演奏'
        }
      ]
    },
    {
      name: '音樂專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'music_composition_basic',
          name: '作曲入門',
          description: '基礎作曲技巧與旋律創作',
          exp: 15,
          requiredSkills: ['music_chord_basic'],
          category: '創作技能'
        },
        {
          id: 'music_performance_solo',
          name: '獨奏表演',
          description: '獨立完整曲目演奏能力',
          exp: 18,
          requiredSkills: ['music_ensemble_basic'],
          category: '表演技巧'
        },
        {
          id: 'music_recording_basic',
          name: '錄音技術',
          description: '基礎錄音與音樂製作',
          exp: 20,
          requiredSkills: ['music_performance_solo'],
          category: '音樂製作'
        }
      ]
    }
  ]
}
