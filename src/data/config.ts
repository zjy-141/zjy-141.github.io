// src/data/config.ts
export const siteConfig = {
  // 基本信息
  name: "张继尧 (Zhang Jiyao)",
  title: "西安交通大学 · 信息与计算科学 · 2025 – 2029",
  description: "后端开发 / 本地大模型 / 机器学习 / 数学建模",
  accentColor: "#58a6ff", 

  // 社交链接
social: {
  email: "zhangjiyao555@stu.xjtu.edu.cn",
  github: "https://github.com/zjy-141",
},

  // 关于我
  aboutMe: "喜欢从零搭建系统，也喜欢把模型真正跑起来。对后端工程、大模型训练与推理、机器学习底层原理有持续兴趣。正在自学机器学习，逐步建立算法与模型背后的数学直觉。相信可复现、可维护、可解释的工程实践。",

  // 技能
skills: [
  { category: "编程语言与后端", items: ["Go", "Gin", "Gorm", "Python", "C"] },
  { category: "数据库与部署", items: ["MySQL", "Linux", "Git"] },
  { category: "大模型与机器学习", items: ["PyTorch", "Transformers", "PEFT"] },
  { category: "前端框架", items: ["React", "Vue3"] }
],

  // 项目
  projects: [
  {
    name: "本地大语言模型全流程实践",
    description: "从零预训练 · SFT 微调 · RAG · LoRA/QLoRA · GGUF 部署。在 RTX 5060 Laptop (8GB 显存) 上完成 MiniMind 预训练，loss 从 7.69 降至 1.49。",
    links: [
      { label: "minimind_try", url: "https://github.com/zjy-141/minimind_try" },
      { label: "finetune_qwen", url: "https://github.com/zjy-141/finetune_qwen" }
    ],
    skills: ["PyTorch", "Transformers", "PEFT", "Ollama"]
  },
  {
    name: "图寻｜后端开发与架构设计",
    description: "独立负责全部后端开发与架构设计，采用 Controller-Service 分层架构。完成从需求分析到云服务器部署的全流程，已上线并投入校内使用。",
    links: [
      { label: "tuxun.tiaozhan.com", url: "https://tuxun.tiaozhan.com" },
      { label: "代码仓库", url: "https://github.com/zjy-141/tu-xun" }
    ],
    skills: ["Go", "Gin", "Gorm", "MySQL"]
  },
  {
    name: "西安交通大学社会实践平台",
    description: "负责社团现有网站的技术支持与日常维护，处理线上 Bug 与功能优化请求。熟悉生产环境代码调试流程与用户反馈驱动的迭代节奏。",
    links: [
      { label: "shijian.tiaozhan.com", url: "https://shijian.tiaozhan.com/" }
    ],
    skills: ["运维", "调试"]
  }
],

  // 经历
  experience: [
    {
      company: "数学建模竞赛",
      title: "队长",
      dateRange: "2025",
      bullets: [
        "主导赛题研判与方向决策，负责核心算法设计与代码框架搭建",
        "获校级三等奖，正带队备战全国大学生数学建模竞赛"
      ]
    }
  ],

  // 教育
  education: [
    {
      school: "西安交通大学",
      degree: "信息与计算科学专业",
      dateRange: "2025.09 – 2029.06（预期）",
      achievements: [
        "核心课程：大学计算机-算法编程 98、高等代数与几何II-2 88、数学分析II-2 86",
        "CET-4 已通过，CET-6 备考中",
        "全国大学生数学建模竞赛校赛三等奖（队长）"
      ]
    }
  ]
}