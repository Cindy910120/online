// 表演藝術技能樹
export const performingArtsSkills = {
  name: '表演藝術',
  description: '培養音樂、舞蹈、戲劇等表演技能',
  icon: '🎭',
  color: '#8b5cf6',
  levels: [
    {
      name: '表演基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'perform_vocal_basic',
          name: '發聲練習',
          description: '正確發聲技巧與氣息控制',
          exp: 4,
          requiredSkills: [],
          category: '聲樂基礎'
        },
        {
          id: 'perform_rhythm_sense',
          name: '節拍感訓練',
          description: '音樂節奏感與拍子練習',
          exp: 3,
          requiredSkills: [],
          category: '音樂基礎'
        },
        {
          id: 'perform_body_movement',
          name: '身體律動',
          description: '基礎肢體協調與節拍配合',
          exp: 4,
          requiredSkills: ['perform_rhythm_sense'],
          category: '舞蹈基礎'
        },
        {
          id: 'perform_simple_magic',
          name: '簡易魔術',
          description: '基礎魔術技巧與表演練習',
          exp: 5,
          requiredSkills: [],
          category: '魔術藝術'
        },
        {
          id: 'perform_stage_presence',
          name: '台風練習',
          description: '克服怯場與基本台風訓練',
          exp: 6,
          requiredSkills: [],
          category: '表演技巧'
        },
        {
          id: 'perform_piano_basic',
          name: '鋼琴入門',
          description: '基礎鋼琴指法與音階練習',
          exp: 8,
          requiredSkills: ['perform_rhythm_sense'],
          category: '鍵盤樂器'
        },
        {
          id: 'perform_guitar_basic',
          name: '吉他入門',
          description: '基礎和弦與彈奏技巧',
          exp: 7,
          requiredSkills: ['perform_rhythm_sense'],
          category: '弦樂器'
        },
        {
          id: 'perform_ukulele_basic',
          name: '烏克麗麗入門',
          description: '基礎四弦琴彈奏技巧',
          exp: 5,
          requiredSkills: ['perform_rhythm_sense'],
          category: '弦樂器'
        },
        {
          id: 'perform_violin_basic',
          name: '小提琴入門',
          description: '基礎運弓與音準練習',
          exp: 10,
          requiredSkills: ['perform_rhythm_sense'],
          category: '弦樂器'
        }
      ]
    },
    {
      name: '技能培養 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'perform_solo_singing',
          name: '獨唱技巧',
          description: '個人歌唱技巧與歌曲詮釋',
          exp: 8,
          requiredSkills: ['perform_vocal_basic'],
          category: '聲樂表演'
        },
        {
          id: 'perform_choir_singing',
          name: '合唱技巧',
          description: '合聲技巧與團體協調',
          exp: 10,
          requiredSkills: ['perform_solo_singing'],
          category: '聲樂表演'
        },
        {
          id: 'perform_piano_basic',
          name: '鋼琴入門',
          description: '鋼琴基礎演奏技巧',
          exp: 12,
          requiredSkills: ['perform_rhythm_sense'],
          category: '鍵盤樂器'
        },
        {
          id: 'perform_guitar_basic',
          name: '吉他入門',
          description: '民謠吉他基礎彈奏',
          exp: 10,
          requiredSkills: ['perform_rhythm_sense'],
          category: '弦樂器'
        },
        {
          id: 'perform_violin_basic',
          name: '小提琴入門',
          description: '小提琴基礎演奏技法',
          exp: 15,
          requiredSkills: ['perform_rhythm_sense'],
          category: '弦樂器'
        },
        {
          id: 'perform_street_dance',
          name: '街舞基礎',
          description: 'Hip-Hop、Breaking等街舞動作',
          exp: 12,
          requiredSkills: ['perform_body_movement'],
          category: '現代舞蹈'
        },
        {
          id: 'perform_ballet_basic',
          name: '芭蕾基本功',
          description: '芭蕾舞基礎動作與形體訓練',
          exp: 14,
          requiredSkills: ['perform_body_movement'],
          category: '古典舞蹈'
        },
        {
          id: 'perform_folk_dance',
          name: '民族舞蹈',
          description: '各地民族舞蹈學習',
          exp: 11,
          requiredSkills: ['perform_body_movement'],
          category: '傳統舞蹈'
        },
        {
          id: 'perform_acting_basic',
          name: '表演基礎',
          description: '情感表達與角色扮演',
          exp: 13,
          requiredSkills: ['perform_stage_presence'],
          category: '戲劇表演'
        },
        {
          id: 'perform_card_magic',
          name: '撲克魔術',
          description: '撲克牌魔術技巧與表演',
          exp: 16,
          requiredSkills: ['perform_simple_magic'],
          category: '魔術藝術'
        }
      ]
    },
    {
      name: '進階演出 (Lv.26-40)',
      requiredLevel: 26,
      skills: [
        {
          id: 'perform_music_theory',
          name: '音樂理論',
          description: '和聲、調性等音樂理論學習',
          exp: 18,
          requiredSkills: ['perform_piano_basic'],
          category: '音樂素養'
        },
        {
          id: 'perform_songwriting',
          name: '歌曲創作',
          description: '原創歌曲作詞作曲',
          exp: 22,
          requiredSkills: ['perform_music_theory'],
          category: '音樂創作'
        },
        {
          id: 'perform_piano_advanced',
          name: '鋼琴演奏',
          description: '古典與流行鋼琴演奏技巧',
          exp: 20,
          requiredSkills: ['perform_music_theory'],
          category: '鍵盤樂器'
        },
        {
          id: 'perform_guitar_advanced',
          name: '吉他演奏',
          description: '電吉他、指彈等進階技巧',
          exp: 18,
          requiredSkills: ['perform_guitar_basic'],
          category: '弦樂器'
        },
        {
          id: 'perform_violin_advanced',
          name: '小提琴演奏',
          description: '古典小提琴曲目演奏',
          exp: 25,
          requiredSkills: ['perform_violin_basic'],
          category: '弦樂器'
        },
        {
          id: 'perform_contemporary_dance',
          name: '現代舞',
          description: '現代舞技巧與即興創作',
          exp: 19,
          requiredSkills: ['perform_street_dance', 'perform_ballet_basic'],
          category: '現代舞蹈'
        },
        {
          id: 'perform_choreography',
          name: '舞蹈編排',
          description: '舞蹈動作設計與編排技巧',
          exp: 23,
          requiredSkills: ['perform_contemporary_dance'],
          category: '舞蹈創作'
        },
        {
          id: 'perform_method_acting',
          name: '方法演技',
          description: '深層角色分析與情感投入',
          exp: 21,
          requiredSkills: ['perform_acting_basic'],
          category: '戲劇表演'
        },
        {
          id: 'perform_stage_magic',
          name: '舞台魔術',
          description: '大型道具魔術與舞台表演',
          exp: 24,
          requiredSkills: ['perform_card_magic'],
          category: '魔術藝術'
        },
        {
          id: 'perform_voice_acting',
          name: '配音技巧',
          description: '聲音演技與角色配音',
          exp: 17,
          requiredSkills: ['perform_choir_singing'],
          category: '聲音表演'
        }
      ]
    },
    {
      name: '專業演出 (Lv.41-55)',
      requiredLevel: 41,
      skills: [
        {
          id: 'perform_concert_performance',
          name: '音樂會演出',
          description: '正式音樂會的演出經驗',
          exp: 30,
          requiredSkills: ['perform_piano_advanced', 'perform_violin_advanced'],
          category: '專業演出'
        },
        {
          id: 'perform_band_formation',
          name: '樂團組建',
          description: '組建樂團與團體演出協調',
          exp: 28,
          requiredSkills: ['perform_guitar_advanced'],
          category: '團體表演'
        },
        {
          id: 'perform_music_production',
          name: '音樂製作',
          description: '編曲、錄音與音樂後製',
          exp: 35,
          requiredSkills: ['perform_songwriting'],
          category: '音樂技術'
        },
        {
          id: 'perform_dance_company',
          name: '舞團演出',
          description: '專業舞團參與與表演',
          exp: 32,
          requiredSkills: ['perform_choreography'],
          category: '專業舞蹈'
        },
        {
          id: 'perform_theater_production',
          name: '劇場製作',
          description: '完整戲劇製作參與',
          exp: 38,
          requiredSkills: ['perform_method_acting'],
          category: '戲劇製作'
        },
        {
          id: 'perform_tv_film_acting',
          name: '影視演出',
          description: '電視、電影演出技巧',
          exp: 40,
          requiredSkills: ['perform_theater_production'],
          category: '影視表演'
        },
        {
          id: 'perform_illusion_show',
          name: '大型幻術秀',
          description: '專業魔術表演與劇場效果',
          exp: 42,
          requiredSkills: ['perform_stage_magic'],
          category: '專業魔術'
        },
        {
          id: 'perform_voice_over_pro',
          name: '專業配音',
          description: '商業配音與聲音品牌塑造',
          exp: 33,
          requiredSkills: ['perform_voice_acting'],
          category: '聲音專業'
        }
      ]
    },
    {
      name: '藝術成就 (Lv.56-70)',
      requiredLevel: 56,
      skills: [
        {
          id: 'perform_album_release',
          name: '專輯發行',
          description: '個人或團體專輯製作發行',
          exp: 48,
          requiredSkills: ['perform_music_production'],
          category: '音樂成就'
        },
        {
          id: 'perform_concert_tour',
          name: '巡迴演出',
          description: '大型巡迴演唱會策劃執行',
          exp: 52,
          requiredSkills: ['perform_concert_performance'],
          category: '演出成就'
        },
        {
          id: 'perform_dance_award',
          name: '舞蹈競賽',
          description: '重要舞蹈比賽獲獎',
          exp: 45,
          requiredSkills: ['perform_dance_company'],
          category: '競技成就'
        },
        {
          id: 'perform_acting_award',
          name: '演技獎項',
          description: '戲劇或影視表演獎項',
          exp: 55,
          requiredSkills: ['perform_tv_film_acting'],
          category: '表演榮譽'
        },
        {
          id: 'perform_magic_competition',
          name: '魔術大賽',
          description: '國際魔術比賽參與',
          exp: 50,
          requiredSkills: ['perform_illusion_show'],
          category: '魔術成就'
        },
        {
          id: 'perform_arts_education',
          name: '藝術教育',
          description: '表演藝術教學與指導',
          exp: 43,
          requiredSkills: ['perform_voice_over_pro'],
          category: '教育傳承'
        }
      ]
    },
    {
      name: '藝術傳奇 (Lv.71-100)',
      requiredLevel: 71,
      skills: [
        {
          id: 'perform_signature_style',
          name: '個人風格',
          description: '建立獨特的表演風格',
          exp: 60,
          requiredSkills: ['perform_album_release'],
          category: '藝術成就'
        },
        {
          id: 'perform_international_fame',
          name: '國際知名度',
          description: '獲得國際藝術界認可',
          exp: 70,
          requiredSkills: ['perform_concert_tour'],
          category: '國際成就'
        },
        {
          id: 'perform_cultural_impact',
          name: '文化影響',
          description: '對表演藝術文化產生重大影響',
          exp: 75,
          requiredSkills: ['perform_acting_award'],
          category: '文化貢獻'
        },
        {
          id: 'perform_arts_innovation',
          name: '藝術創新',
          description: '在表演藝術領域創造新形式',
          exp: 80,
          requiredSkills: ['perform_dance_award', 'perform_magic_competition'],
          category: '創新成就'
        },
        {
          id: 'perform_master_class',
          name: '大師課程',
          description: '舉辦國際大師班與工作坊',
          exp: 65,
          requiredSkills: ['perform_arts_education'],
          category: '教育傳承'
        },
        {
          id: 'perform_hall_of_fame',
          name: '名人堂入選',
          description: '表演藝術名人堂認可',
          exp: 85,
          requiredSkills: ['perform_signature_style', 'perform_international_fame'],
          category: '最高榮譽'
        },
        {
          id: 'perform_eternal_legacy',
          name: '永恆傳承',
          description: '建立跨世代的藝術影響力',
          exp: 100,
          requiredSkills: ['perform_cultural_impact', 'perform_arts_innovation', 'perform_master_class'],
          category: '傳奇成就'
        }
      ]
    }
  ]
}
