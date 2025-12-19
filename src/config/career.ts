// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: '知伴 LearnMate',
      title: '后端开发工程师',
      logo: 'laptop',
      start: '2025/9',
      end: '2025/11'
    },
    {
      company: '云味通订餐平台',
      title: '后端开发工程师',
      logo: 'laptop',
      start: '2025/7',
      end: '2025/8'
    }
  ]