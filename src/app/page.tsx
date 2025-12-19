import { Container } from '@/components/layout/Container'
import Newsletter from '@/components/home/Newsletter'
import SocialLinks from '@/components/home/SocialLinks'
import { headline, introduction } from '@/config/infoConfig'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ActivityCard } from '@/components/home/ActivityCard'
import { projectHeadLine, projectIntro, projects, techIcons } from '@/config/infoConfig'
import { awards, awardsHeadLine, awardsIntro, activities, activitiesHeadLine, activitiesIntro } from '@/config/projects'
import IconCloud from "@/components/ui/icon-cloud"
import { Award, Briefcase, Heart, Code } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        {/* personal info */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className='md:mt-20'>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl opacity-80">
              {headline}
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              {introduction}
            </p>
            <SocialLinks className='md:mt-24'/>
          </div>
          <div className="relative flex size-full items-center justify-center overflow-hidden w-full px-20 md:px-0 md:w-2/3 ml-auto md:mr-8">
            <IconCloud iconSlugs={techIcons} />
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-gray-700">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-100 mb-4 text-white">
            <Code size={28}/>
            技术栈展示
          </h2>
          
          {/* Skills Categories */}
          <div className="space-y-8">
            {/* Backend Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4">后端技术</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                  { name: 'Java', proficiency: '熟悉' },
                  { name: 'Spring Boot', proficiency: '熟悉' },
                  { name: 'Spring Cloud', proficiency: '熟悉' },
                  { name: 'Spring Security', proficiency: '熟悉' },
                  { name: 'MyBatis/MyBatis Plus', proficiency: '熟悉' },
                ].map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center p-3 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-all duration-200">
                    <span className="text-sm font-medium text-white">{skill.name}</span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${skill.proficiency === '掌握' ? 'bg-green-500 text-white' : skill.proficiency === '熟悉' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-white'}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-4">数据库技术</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'MySQL', proficiency: '熟悉' },
                  { name: 'Redis', proficiency: '熟悉' },
                ].map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center p-3 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-all duration-200">
                    <span className="text-sm font-medium text-white">{skill.name}</span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${skill.proficiency === '掌握' ? 'bg-green-500 text-white' : skill.proficiency === '熟悉' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-white'}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Queue */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-4">消息中间件</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'RocketMQ', proficiency: '了解' },
                  { name: 'RabbitMQ', proficiency: '掌握' },
                ].map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center p-3 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-all duration-200">
                    <span className="text-sm font-medium text-white">{skill.name}</span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${skill.proficiency === '掌握' ? 'bg-green-500 text-white' : skill.proficiency === '熟悉' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-white'}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-teal-400 mb-4">前端技术</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Vue.js', proficiency: '熟悉' },
                  { name: 'HTML/CSS3', proficiency: '熟悉' },
                  { name: 'JavaScript', proficiency: '熟悉' },
                  { name: 'Element Plus', proficiency: '掌握' },
                ].map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center p-3 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-all duration-200">
                    <span className="text-sm font-medium text-white">{skill.name}</span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${skill.proficiency === '掌握' ? 'bg-green-500 text-white' : skill.proficiency === '熟悉' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-white'}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-4">开发工具与运维</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Git', proficiency: '掌握' },
                  { name: 'Docker', proficiency: '掌握' },
                  { name: 'Nginx', proficiency: '熟悉' },
                  { name: 'Linux', proficiency: '掌握' },
                  { name: 'IDEA', proficiency: '熟悉' },
                ].map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center p-3 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-all duration-200">
                    <span className="text-sm font-medium text-white">{skill.name}</span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${skill.proficiency === '掌握' ? 'bg-green-500 text-white' : skill.proficiency === '熟悉' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-white'}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Research & Projects */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Briefcase size={28}/>
            {projectHeadLine}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {projectIntro}
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} titleAs='h3'/>
            ))}
          </ul>
        </div>

        {/* Hobbies & Volunteer */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Heart size={28}/>
            {activitiesHeadLine}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {activitiesIntro}
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {activities.map((activity) => (
              <ActivityCard key={activity.name} activity={activity} titleAs='h3'/>
            ))}
          </ul>
        </div>

        {/* Awards */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Award size={28}/>
            {awardsHeadLine}
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {awards.map((award) => (
              <ActivityCard key={award.name} activity={award} titleAs='h3'/>
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}
