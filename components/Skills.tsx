import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiFigma, SiGit,
  SiMongodb, SiExpress, SiPython, SiJavascript,
  SiCplusplus, SiRust, SiNodedotjs, SiDjango,
  SiMicrosoftazure, SiVercel, SiNetlify, SiPostgresql, SiMysql,
  SiFirebase, SiJenkins, SiKubernetes, SiAnsible, SiVisualstudiocode,
  SiGithub, SiIntellijidea, SiShadcnui,
  SiExpo,
  SiAndroidstudio,
  SiFlutter
} from 'react-icons/si'
import { MdOutlineScreenSearchDesktop, MdOutlineSecurity } from 'react-icons/md';
import { FaServer, FaDatabase, FaFileCode, FaTools } from 'react-icons/fa';
import { VscAzureDevops } from 'react-icons/vsc';
import { TbDeviceMobileCode } from 'react-icons/tb';
import { IoMdCloud } from 'react-icons/io';
import { IoRocketSharp } from 'react-icons/io5';
import { FaAws, FaJava } from "react-icons/fa6";
import {Shield, Lock, Key, Users} from 'lucide-react'
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";


import { useState, useRef, useEffect } from 'react';
import { motion} from 'framer-motion';

export default function Skills() {
  // Keen slider for mobile
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 3, spacing: 8 },
    mode: "free",
  });

  // Auto-rotate slider
  useEffect(() => {
    if (!slider || !slider.current) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 2000); // 2 seconds per slide
    return () => clearInterval(interval);
  }, [slider]);

  const webSkills = [
    {
      category: 'Languages',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, level: 'Advanced' },
        { name: 'TypeScript', icon: SiTypescript, level: 'Advanced' },
        { name: 'Python', icon: SiPython, level: 'Advanced' },
        { name: 'Java', icon: FaJava, level: 'Intermediate' },
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
        { name: 'ShadCN', icon: SiShadcnui, level: 'Advanced' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 'Advanced' },
        { name: 'Express.js', icon: SiExpress, level: 'Advanced' },
        { name: 'Django', icon: SiDjango, level: 'Intermediate' },
        { name: 'Rocket', icon: IoRocketSharp, level: 'Beginner' },
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
        { name: 'AWS', icon: FaAws, level: 'Intermediate' },
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
    },
    {
      category: 'Mobile App Development',
      skills: [
        { name: 'React Native', icon: SiReact, level: 'Intermediate' },
        { name: 'Flutter', icon: SiFlutter, level: 'Beginner' },
        { name: 'Expo', icon: SiExpo, level: 'Beginner' },
        { name: 'Android Studio', icon: SiAndroidstudio, level: 'Beginner' },
      ]
    }
  ];

  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);
  const selectedGroup = webSkills[selectedCategoryIdx];

  // For mouse wheel support
  const circleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        setSelectedCategoryIdx((prev) => (prev + 1) % webSkills.length);
      } else if (e.deltaY < 0) {
        setSelectedCategoryIdx((prev) => (prev - 1 + webSkills.length) % webSkills.length);
      }
    };
    const el = circleRef.current;
    if (el) {
      el.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (el) {
        el.removeEventListener('wheel', handleWheel);
      }
    };
  }, [webSkills.length]);

  // Track previous index for shortest rotation
  const prevIdxRef = useRef(selectedCategoryIdx);
  const rotationRef = useRef(((-selectedCategoryIdx * (360 / webSkills.length)) + 90));

  // Calculate shortest rotation angle
  function getShortestRotation(prevIdx: number, newIdx: number, total: number) {
    const prevAngle = (-prevIdx * (360 / total)) + 90;
    const newAngle = (-newIdx * (360 / total)) + 90;
    let diff = newAngle - prevAngle;
    // Wrap around for shortest path
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    return rotationRef.current + diff;
  }

  // Compute rotation for framer-motion
  const [rotation, setRotation] = useState(((-selectedCategoryIdx * (360 / webSkills.length)) + 90));
  useEffect(() => {
    const newRotation = getShortestRotation(prevIdxRef.current, selectedCategoryIdx, webSkills.length);
    setRotation(newRotation);
    console.log(`Rotation updated: ${newRotation} degrees`);
    rotationRef.current = newRotation;
    prevIdxRef.current = selectedCategoryIdx;
  }, [selectedCategoryIdx, webSkills.length]);

  return (
    <section id="skills" className="container bg-gradient-to-br from-white to-blue-100 h-[calc(100vh-4rem)] w-full flex items-center">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Circular Category Slider - half visible, rotates */}
        <div className="relative hidden md:flex items-center justify-center w-[18rem] h-full">
          <motion.div
            ref={circleRef}
            className="absolute w-[36rem] h-[36rem] -left-[22rem] flex items-center justify-center"
            style={{
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.7)',
              boxShadow: '0 4px 32px #60A5FA22',
              border: '2px solid #60A5FA33',
              overflow: 'visible',
            }}
            tabIndex={0}
            animate={{
              rotate: rotation
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
          >
            {webSkills.map((group, idx) => {
              const angle = (360 / webSkills.length) * idx;
              const rad = (angle * Math.PI) / 180;
              const r = 270;
              const x = 288 + r * Math.cos(rad - Math.PI / 2);
              const y = 288 + r * Math.sin(rad - Math.PI / 2);
              const isSelected = idx === selectedCategoryIdx;
              return (
                <motion.button
                  key={group.category}
                  className={`absolute flex flex-col items-center justify-center rounded-2xl border-2 shadow-lg bg-white/80 hover:bg-blue-100 ${isSelected ? 'border-blue-500 scale-110 z-20' : 'border-blue-200 scale-100 z-10'} w-24 h-24`}
                  style={{
                    left: x - 48,
                    top: y - 48,
                    boxShadow: isSelected ? '0 0 0 4px #60A5FA33' : undefined,
                  }}
                  animate={{ rotate: rotation * -1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  onClick={() => setSelectedCategoryIdx(idx)}
                  aria-label={group.category}
                >
                  {/* Category Icon */}
                  {group.category === 'Languages' && <FaFileCode className="w-9 h-9" style={{ color: '#3178C6' }} />}
                  {group.category === 'Frontend' && <MdOutlineScreenSearchDesktop className="w-9 h-9" style={{ color: '#61DAFB' }} />}
                  {group.category === 'Backend' && <FaServer className="w-9 h-9" style={{ color: '#339933' }} />}
                  {group.category === 'Security & Auth' && <MdOutlineSecurity className="w-9 h-9" style={{ color: '#FF6B6B' }} />}
                  {group.category === 'Cloud' && <IoMdCloud className="w-9 h-9" style={{ color: '#FF9900' }} />}
                  {group.category === 'Databases' && <FaDatabase className="w-9 h-9" style={{ color: '#336791' }} />}
                  {group.category === 'DevOps' && <VscAzureDevops className="w-9 h-9" style={{ color: '#0078D4' }} />}
                  {group.category === 'Tools' && <FaTools className="w-9 h-9" style={{ color: '#A259FF' }} />}
                  {group.category === 'Mobile App Development' && <TbDeviceMobileCode className="w-9 h-9" style={{ color: '#3DDC84' }} />}
                  <span className={`text-base font-bold mt-1 ${isSelected ? 'text-blue-700' : 'text-blue-400'}`}>{group.category.split(' ')[0]}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
        {/* Mobile Category Slider - keen-slider infinite */}
        <div className="md:hidden w-full py-4 px-2 mb-2 bg-white">
          <div ref={sliderRef} className="keen-slider">
            {webSkills.map((group, idx) => {
              const isSelected = idx === selectedCategoryIdx;
              return (
                <div className="keen-slider__slide py-2 px-2" key={group.category}>
                  <button
                    className={`flex flex-col items-center justify-center rounded-xl border-2 bg-white/80 hover:bg-blue-100 transition-all duration-200 min-w-[72px] w-16 h-16 ${isSelected ? 'border-blue-500 scale-110' : 'border-blue-200 scale-100'}`}
                    style={{ boxShadow: isSelected ? '0 0 0 4px #60A5FA33' : undefined }}
                    onClick={() => setSelectedCategoryIdx(idx)}
                    aria-label={group.category}
                  >
                    {/* Category Icon */}
                    {group.category === 'Languages' && <FaFileCode className="w-4 h-4" style={{ color: '#3178C6' }} />}
                    {group.category === 'Frontend' && <MdOutlineScreenSearchDesktop className="w-4 h-4" style={{ color: '#61DAFB' }} />}
                    {group.category === 'Backend' && <FaServer className="w-4 h-4" style={{ color: '#339933' }} />}
                    {group.category === 'Security & Auth' && <MdOutlineSecurity className="w-4 h-4" style={{ color: '#FF6B6B' }} />}
                    {group.category === 'Cloud' && <IoMdCloud className="w-4 h-4" style={{ color: '#FF9900' }} />}
                    {group.category === 'Databases' && <FaDatabase className="w-4 h-4" style={{ color: '#336791' }} />}
                    {group.category === 'DevOps' && <VscAzureDevops className="w-4 h-4" style={{ color: '#0078D4' }} />}
                    {group.category === 'Tools' && <FaTools className="w-4 h-4" style={{ color: '#A259FF' }} />}
                    {group.category === 'Mobile App Development' && <TbDeviceMobileCode className="w-4 h-4" style={{ color: '#3DDC84' }} />}
                    <span className={`text-xs font-bold mt-1 ${isSelected ? 'text-blue-700' : 'text-blue-400'}`}>{group.category.split(' ')[0]}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        {/* Skills Display - Modern Grid Layout */}
        <div className="md:flex-1 flex flex-col justify-center items-center px-2 py-4 sm:px-4 sm:py-8">
          <div className="mb-6 sm:mb-8 flex flex-col items-center">
            <div className="flex items-center gap-3 sm:gap-4 mb-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-blue-50 shadow-lg border border-blue-300">
                {selectedGroup.category === 'Languages' && <FaFileCode className="w-8 h-8" style={{ color: '#3178C6' }} />}
                {selectedGroup.category === 'Frontend' && <MdOutlineScreenSearchDesktop className="w-8 h-8" style={{ color: '#61DAFB' }} />}
                {selectedGroup.category === 'Backend' && <FaServer className="w-8 h-8" style={{ color: '#339933' }} />}
                {selectedGroup.category === 'Security & Auth' && <MdOutlineSecurity className="w-8 h-8" style={{ color: '#FF6B6B' }} />}
                {selectedGroup.category === 'Cloud' && <IoMdCloud className="w-8 h-8" style={{ color: '#FF9900' }} />}
                {selectedGroup.category === 'Databases' && <FaDatabase className="w-8 h-8" style={{ color: '#336791' }} />}
                {selectedGroup.category === 'DevOps' && <VscAzureDevops className="w-8 h-8" style={{ color: '#0078D4' }} />}
                {selectedGroup.category === 'Tools' && <FaTools className="w-8 h-8" style={{ color: '#A259FF' }} />}
                {selectedGroup.category === 'Mobile App Development' && <TbDeviceMobileCode className="w-8 h-8" style={{ color: '#3DDC84' }} />}
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-blue-800 tracking-tight">{selectedGroup.category}</h3>
            </div>
            <span className="text-sm sm:text-base text-blue-500 font-medium">Explore my skills in {selectedGroup.category.toLowerCase()}.</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full sm:max-w-4xl">
            {selectedGroup.skills.map((skill, index) => {
              let iconColor = '#60A5FA';
              if (skill.name === 'JavaScript') iconColor = '#F7DF1E';
              else if (skill.name === 'TypeScript') iconColor = '#3178C6';
              else if (skill.name === 'Python') iconColor = '#3776AB';
              else if (skill.name === 'Java') iconColor = '#ED8B00';
              else if (skill.name === 'C/C++') iconColor = '#00599C';
              else if (skill.name === 'Rust') iconColor = '#000000';
              else if (skill.name === 'Next.js') iconColor = '#000000';
              else if (skill.name === 'React.js') iconColor = '#61DAFB';
              else if (skill.name === 'Tailwind CSS') iconColor = '#38BDF8';
              else if (skill.name === 'ShadCN') iconColor = '#000000';
              else if (skill.name === 'Node.js') iconColor = '#339933';
              else if (skill.name === 'Express.js') iconColor = '#000000';
              else if (skill.name === 'Django') iconColor = '#092E20';
              else if (skill.name === 'Rocket') iconColor = '#D22D32';
              else if (skill.name === 'OAuth 2.0') iconColor = '#FF6B6B';
              else if (skill.name === 'JWT Tokens') iconColor = '#000000';
              else if (skill.name === 'Session Mgmt') iconColor = '#4CAF50';
              else if (skill.name === 'RBAC') iconColor = '#9C27B0';
              else if (skill.name === 'AWS') iconColor = '#FF9900';
              else if (skill.name === 'MS Azure') iconColor = '#0078D4';
              else if (skill.name === 'Vercel') iconColor = '#000000';
              else if (skill.name === 'Netlify') iconColor = '#00C7B7';
              else if (skill.name === 'MongoDB') iconColor = '#47A248';
              else if (skill.name === 'PostgreSQL') iconColor = '#336791';
              else if (skill.name === 'MySQL') iconColor = '#4479A1';
              else if (skill.name === 'Firebase') iconColor = '#FFCA28';
              else if (skill.name === 'Git') iconColor = '#F05032';
              else if (skill.name === 'Jenkins') iconColor = '#D33833';
              else if (skill.name === 'Kubernetes') iconColor = '#326CE5';
              else if (skill.name === 'Ansible') iconColor = '#EE0000';
              else if (skill.name === 'VS Code') iconColor = '#007ACC';
              else if (skill.name === 'GitHub') iconColor = '#181717';
              else if (skill.name === 'Figma') iconColor = '#A259FF';
              else if (skill.name === 'IntelliJ IDEA') iconColor = '#000000';
              else if (skill.name === 'React Native') iconColor = '#61DAFB';
              else if (skill.name === 'Flutter') iconColor = '#02569B';
              else if (skill.name === 'Expo') iconColor = '#000020';
              else if (skill.name === 'Android Studio') iconColor = '#3DDC84';
              return (
                <div
                  key={skill.name}
                  className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-3 sm:p-5 border border-blue-100 group relative"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className='flex flex-row sm:flex-col gap-4 sm:gap-0 items-center justify-start sm:justify-center w-full px-1 sm:px-0'>
                    <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-blue-50 mb-2 sm:mb-3 border border-blue-200 group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-5 h-5 sm:w-8 sm:h-8" color={iconColor} />
                    </div>
                    <span className="font-semibold text-sm sm:text-base text-blue-700 mb-1 sm:mb-2 text-center">{skill.name}</span>
                  </div>
                  <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden mb-1 sm:mb-2">
                    <div
                      className={
                        skill.level === 'Advanced'
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full w-full'
                          : skill.level === 'Intermediate'
                          ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full w-2/3'
                          : 'bg-gradient-to-r from-red-300 to-red-400 h-full rounded-full w-1/3'
                      }
                    ></div>
                  </div>
                  <span className={`font-bold text-xs sm:text-xs ${
                    skill.level === 'Beginner' ? 'text-red-500' :
                    skill.level === 'Intermediate' ? 'text-yellow-500' :
                    'text-green-600'
                  }`}>
                    {skill.level}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}