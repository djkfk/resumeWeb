export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '史文峰'
export const headline = '后端工程师'
export const introduction =
  "您好，我叫史文峰，是一名专注于 Java 后端开发程序员,就读于武昌首义学院,目前是一名大三学生"
export const email = '2782038308@qq.com'
export const githubUsername = ''

// about page
export const aboutMeHeadline = '关于我'
export const aboutParagraphs = [
  "热爱软件开发技术，追求极客精神，希望能够成长为一名优秀的程序员；",
  "具有较好的沟通表达能力，在学校中，经常作为班级代表出席班级活动、校级活动，并收到大家和老师喜欢；",
  "喜欢运动，尤其是羽毛球,还参加过马拉松比赛,并成功完赛",
]

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'QQ',
    icon: 'qq',
    href: 'mailto:2782038308@qq.com',
  },
  {
    name: 'Phone',
    icon: 'phone',
    href: 'tel:19888482633',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'java',
  'spring',
  'mysql',
  'redis',
  'rocketmq',
  'springboot',
  'springsecurity',
  'mybatis',
  'nginx',
  'vuejs',
  'docker',
  'git',
  'visualstudiocode',
  'linux',
  'html5',
  'css3',
  'javascript',
  'nacos',
  'gateway',
  'sentinel',
]
