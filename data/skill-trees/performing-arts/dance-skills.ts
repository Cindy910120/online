// 舞蹈技能樹
export const danceSkills = {
  name: '舞蹈藝術',
  description: '各種舞蹈形式的學習，培養肢體協調與表現力',
  icon: '💃',
  color: '#ec4899',
  levels: [
    {
      name: '舞蹈基礎 (Lv.1-10)',
      requiredLevel: 1,
      skills: [
        {
          id: 'dance_flexibility_basic',
          name: '基礎柔軟度',
          description: '身體柔軟度與基本伸展',
          exp: 4,
          requiredSkills: [],
          category: '身體素質'
        },
        {
          id: 'dance_rhythm_body',
          name: '身體節奏感',
          description: '音樂與身體動作的協調',
          exp: 5,
          requiredSkills: [],
          category: '節奏感'
        },
        {
          id: 'dance_basic_steps',
          name: '基本舞步',
          description: '各種舞蹈的基礎步法',
          exp: 6,
          requiredSkills: ['dance_rhythm_body'],
          category: '舞蹈技巧'
        },
        {
          id: 'dance_balance_control',
          name: '平衡控制',
          description: '身體重心控制與平衡感',
          exp: 5,
          requiredSkills: ['dance_flexibility_basic'],
          category: '身體控制'
        }
      ]
    },
    {
      name: '舞蹈進階 (Lv.11-25)',
      requiredLevel: 11,
      skills: [
        {
          id: 'dance_style_choice',
          name: '舞蹈風格選擇',
          description: '專精某種舞蹈風格（爵士、街舞、芭蕾等）',
          exp: 10,
          requiredSkills: ['dance_basic_steps'],
          category: '風格發展'
        },
        {
          id: 'dance_expression_emotion',
          name: '情感表達',
          description: '透過舞蹈表達情感與故事',
          exp: 12,
          requiredSkills: ['dance_balance_control'],
          category: '表現力'
        },
        {
          id: 'dance_partner_coordination',
          name: '雙人舞協調',
          description: '與舞伴的協作與配合',
          exp: 15,
          requiredSkills: ['dance_style_choice'],
          category: '合作技巧'
        }
      ]
    },
    {
      name: '舞蹈專精 (Lv.26-50)',
      requiredLevel: 26,
      skills: [
        {
          id: 'dance_choreography_basic',
          name: '編舞入門',
          description: '基礎編舞技巧與動作設計',
          exp: 18,
          requiredSkills: ['dance_expression_emotion'],
          category: '創作技能'
        },
        {
          id: 'dance_performance_stage',
          name: '舞台表演',
          description: '正式舞台演出能力',
          exp: 20,
          requiredSkills: ['dance_partner_coordination'],
          category: '表演技巧'
        },
        {
          id: 'dance_teaching_basic',
          name: '舞蹈教學',
          description: '教授他人舞蹈的技巧',
          exp: 22,
          requiredSkills: ['dance_choreography_basic'],
          category: '教學技能'
        }
      ]
    }
  ]
}
