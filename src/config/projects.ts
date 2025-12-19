// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "奖项与荣誉"
export const awardsIntro = "个人获奖情况"

export const awards: Array<ActivityItemType> = [
  {
    name: '"我梦见—楚天创客"大赛',
    description: '省级铜奖',
    date: '2025/7/3',
    location: '',
  },
]

// Research & Projects
export const projectHeadLine = "项目经验"
export const projectIntro = "参与的主要项目"

export const projects: Array<ProjectItemType> = [
  {
    name: '知伴 LearnMate',
    description: '随着数字化教育需求的持续增长，为响应社会发展需求，我们创新性地推出了智能化在线学习平台。' +
    '核心技术架构：Spring Boot、Spring cloud、Mybatis一plus、Mysql、Redis、Redisson、caffeine、RabbitMq、Xxl一job。'+
    '主要工作：在项目中主要参与了学习服务和用户成长体系两个核心模块中的api开发并封装一个多级缓存组件。'+
    '技术描述：断点续播、积分异步处理、实时排行榜、多级缓存。',
    link: { href: '', label: '' },
    tags: ['Spring Boot', 'Spring Cloud', 'MyBatis Plus', 'Redis', 'RabbitMQ', 'XXL-Job']
  },
  {
    name: '云味通订餐平台',
    description: '包括系统管理后台和移动端应用两部分。管理后台供企业员工使用，可对餐厅分类、菜品、套餐、订单、员工等进行管理维护。移动端供消费者使用，可浏览菜品、添加购物车、下单等。技术栈：SpringBoot、Mybatis、MySQL、Redis、JWT、Nginx、Maven。主要工作：缓存设计、缓存穿透防护、用户认证、防重复下单、实时通信、构建管理。',
    link: { href: '', label: '' },
    tags: ['Spring Boot', 'MyBatis', 'MySQL', 'Redis', 'JWT', 'Nginx', 'Maven']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "兴趣爱好"
export const activitiesIntro = "个人兴趣爱好"

export const activities: Array<ActivityItemType> = [
  {
    name: '热爱软件开发技术',
    description: '追求极客精神，希望能够成长为一名优秀的程序员',
    date: '',
    location: '',
  },
  {
    name: '具有较好的沟通表达能力',
    description: '在学校中，经常作为班级代表出席班级活动、校级活动，并收到大家和老师喜欢',
    date: '',
    location: '',
  },
  {
    name: '喜欢体育运动',
    description: '尤其是羽毛球,大一期间还参加过马拉松比赛,并成功完赛',
    date: '',
    location: '',
  },
]
