import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiFigma, SiGit,
  SiMongodb, SiExpress, SiPython, SiJavascript,
  SiCplusplus, SiRust, SiNodedotjs, SiDjango, SiAmazon,
  SiMicrosoftazure, SiVercel, SiNetlify, SiPostgresql, SiMysql,
  SiFirebase, SiJenkins, SiKubernetes, SiAnsible, SiVisualstudiocode,
  SiGithub, SiIntellijidea
} from 'react-icons/si'
import {Shield, Lock, Key, Users, Coffee } from 'lucide-react'


export default function Skills() {
  // Redesigned skills section with comprehensive tech stack
  const webSkills = [
    {
      category: 'Languages',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, level: 'Advanced' },
        { name: 'TypeScript', icon: SiTypescript, level: 'Advanced' },
        { name: 'Python', icon: SiPython, level: 'Advanced' },
        { name: 'Java', icon: Coffee, level: 'Intermediate' },
        { name: 'C/C++', icon: SiCplusplus, level: 'Intermediate' },
        { name: 'Rust', icon: SiRust, level: 'Beginner' },
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'Next.js', icon: SiNextdotjs, level: 'Advanced' },
        { name: 'React.js', icon: SiReact, level: 'Advanced' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced' },
        { name: 'ShadCN', icon: SiReact, level: 'Advanced' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 'Advanced' },
        { name: 'Express.js', icon: SiExpress, level: 'Advanced' },
        { name: 'Django', icon: SiDjango, level: 'Intermediate' },
        { name: 'Rocket', icon: SiRust, level: 'Beginner' },
      ]
    },
    {
      category: 'Security & Auth',
      skills: [
        { name: 'OAuth 2.0', icon: Shield, level: 'Advanced' },
        { name: 'JWT Tokens', icon: Key, level: 'Advanced' },
        { name: 'Session Mgmt', icon: Lock, level: 'Advanced' },
        { name: 'RBAC', icon: Users, level: 'Intermediate' },
      ]
    },
    {
      category: 'Cloud',
      skills: [
        { name: 'AWS', icon: SiAmazon, level: 'Intermediate' },
        { name: 'MS Azure', icon: SiMicrosoftazure, level: 'Intermediate' },
        { name: 'Vercel', icon: SiVercel, level: 'Advanced' },
        { name: 'Netlify', icon: SiNetlify, level: 'Advanced' },
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 'Advanced' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 'Intermediate' },
        { name: 'MySQL', icon: SiMysql, level: 'Intermediate' },
        { name: 'Firebase', icon: SiFirebase, level: 'Intermediate' },
      ]
    },
    {
      category: 'DevOps',
      skills: [
        { name: 'Git', icon: SiGit, level: 'Advanced' },
        { name: 'Jenkins', icon: SiJenkins, level: 'Intermediate' },
        { name: 'Kubernetes', icon: SiKubernetes, level: 'Beginner' },
        { name: 'Ansible', icon: SiAnsible, level: 'Beginner' },
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'VS Code', icon: SiVisualstudiocode, level: 'Advanced' },
        { name: 'GitHub', icon: SiGithub, level: 'Advanced' },
        { name: 'Figma', icon: SiFigma, level: 'Advanced' },
        { name: 'IntelliJ IDEA', icon: SiIntellijidea, level: 'Intermediate' },
      ]
    }
  ];
  return (
    <>
    {/* Skills Section */}
      <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 sm:py-16 lg:py-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 animate-fade-in-down text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 xl:gap-6 2xl:gap-8">            {webSkills.map((group) => (
            <div key={group.category} className="mb-4 sm:mb-6 lg:mb-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6 lg:mb-6 justify-center sm:justify-start lg:justify-center xl:justify-start">
                {/* Category Icon with color */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-12 xl:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg border border-blue-200/50">
                  {group.category === 'Languages' && <SiJavascript className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6" style={{ color: '#F7DF1E' }} />}
                  {group.category === 'Frontend' && <SiReact className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6" style={{ color: '#61DAFB' }} />}
                  {group.category === 'Backend' && <SiNodedotjs className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6" style={{ color: '#339933' }} />}
                  {group.category === 'Security & Auth' && <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6" style={{ color: '#FF6B6B' }} />}
                  {group.category === 'Cloud' && <SiAmazon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6" style={{ color: '#FF9900' }} />}
                  {group.category === 'Databases' && <SiMongodb className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6" style={{ color: '#47A248' }} />}
                  {group.category === 'DevOps' && <SiGit className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6" style={{ color: '#F05032' }} />}
                  {group.category === 'Tools' && <SiVisualstudiocode className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6" style={{ color: '#007ACC' }} />}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl xl:text-lg 2xl:text-xl font-bold text-blue-700">{group.category}</h3>
              </div>                <div className="skills-grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 xl:gap-3 2xl:gap-4">
                {group.skills.map((skill, index) => {
                  let iconColor = '#60A5FA'; // default blue
                  // Languages
                  if (skill.name === 'JavaScript') iconColor = '#F7DF1E';
                  else if (skill.name === 'TypeScript') iconColor = '#3178C6';
                  else if (skill.name === 'Python') iconColor = '#3776AB';
                  else if (skill.name === 'Java') iconColor = '#ED8B00';
                  else if (skill.name === 'C/C++') iconColor = '#00599C';
                  else if (skill.name === 'Rust') iconColor = '#000000';
                  // Frontend
                  else if (skill.name === 'Next.js') iconColor = '#000000';
                  else if (skill.name === 'React.js') iconColor = '#61DAFB';
                  else if (skill.name === 'Tailwind CSS') iconColor = '#38BDF8';
                  else if (skill.name === 'ShadCN') iconColor = '#000000';
                  // Backend
                  else if (skill.name === 'Node.js') iconColor = '#339933';
                  else if (skill.name === 'Express.js') iconColor = '#000000';
                  else if (skill.name === 'Django') iconColor = '#092E20';
                  else if (skill.name === 'Rocket') iconColor = '#D22D32';
                  // Security & Auth
                  else if (skill.name === 'OAuth 2.0') iconColor = '#FF6B6B';
                  else if (skill.name === 'JWT Tokens') iconColor = '#000000';
                  else if (skill.name === 'Session Mgmt') iconColor = '#4CAF50';
                  else if (skill.name === 'RBAC') iconColor = '#9C27B0';
                  // Cloud
                  else if (skill.name === 'AWS') iconColor = '#FF9900';
                  else if (skill.name === 'MS Azure') iconColor = '#0078D4';
                  else if (skill.name === 'Vercel') iconColor = '#000000';
                  else if (skill.name === 'Netlify') iconColor = '#00C7B7';
                  // Databases
                  else if (skill.name === 'MongoDB') iconColor = '#47A248';
                  else if (skill.name === 'PostgreSQL') iconColor = '#336791';
                  else if (skill.name === 'MySQL') iconColor = '#4479A1';
                  else if (skill.name === 'Firebase') iconColor = '#FFCA28';
                  // DevOps
                  else if (skill.name === 'Git') iconColor = '#F05032';
                  else if (skill.name === 'Jenkins') iconColor = '#D33833';
                  else if (skill.name === 'Kubernetes') iconColor = '#326CE5';
                  else if (skill.name === 'Ansible') iconColor = '#EE0000';
                  // Tools
                  else if (skill.name === 'VS Code') iconColor = '#007ACC';
                  else if (skill.name === 'GitHub') iconColor = '#181717';
                  else if (skill.name === 'Figma') iconColor = '#A259FF';
                  else if (skill.name === 'IntelliJ IDEA') iconColor = '#000000';
                  return (
                    <div 
                      key={skill.name} 
                      className={`skill-card flex flex-col items-center bg-white/90 backdrop-blur-sm border border-blue-100/50 rounded-xl px-2 py-3 sm:px-3 sm:py-4 lg:px-4 lg:py-5 xl:px-3 xl:py-4 2xl:px-4 2xl:py-5 shadow-lg hover:shadow-xl hover:shadow-blue-200/60 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] xl:min-h-[140px] 2xl:min-h-[160px] group relative overflow-hidden`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/30 transition-all duration-500 rounded-xl"></div>
                      
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 flex items-center justify-center mb-1 sm:mb-2 lg:mb-3 xl:mb-2 2xl:mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10" color={iconColor} />
                      </div>
                      <span className="font-semibold text-xs sm:text-sm lg:text-base xl:text-sm 2xl:text-base mb-1 sm:mb-2 lg:mb-3 xl:mb-2 2xl:mb-3 text-center leading-tight px-1 relative z-10">{skill.name}</span>
                      <div className="w-full h-1.5 sm:h-2 lg:h-2.5 xl:h-2 2xl:h-2.5 bg-blue-100 rounded-full overflow-hidden mb-1 sm:mb-2 lg:mb-3 xl:mb-2 2xl:mb-3 relative z-10">
                        <div
                          className={
                            skill.level === 'Advanced'
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full w-full animate-fade-in-right'
                              : skill.level === 'Intermediate'
                              ? 'bg-gradient-to-r from-blue-400 to-blue-500 h-full rounded-full w-2/3 animate-fade-in-right'
                              : 'bg-gradient-to-r from-blue-300 to-blue-400 h-full rounded-full w-1/3 animate-fade-in-right'
                          }
                        ></div>
                      </div>
                      <span className={`relative z-10 font-bold text-xs ${
                        skill.level === 'Beginner' ? 'text-red-500' :
                        skill.level === 'Intermediate' ? 'text-yellow-500' :
                        'text-green-600'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}