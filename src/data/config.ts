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
  { category: "大模型与机器学习", items: ["PyTorch", "Transformers", "PEFT", "Unsloth", "llama.cpp", "TensorBoard", "Ollama"] },
  { category: "前端框架", items: ["Vue3"] }
],

  // 项目
  projects: [
  {
    name: "本地大语言模型全流程实践",
    description: "从零预训练 · SFT 指令微调 · LoRA/QLoRA · GGUF 转换 · Ollama 部署。在 RTX 5060 Laptop（8GB 显存，sm_120）单卡上独立打通全链路：MiniMind 预训练 127 万条，loss 由 7.69 降至 1.49；LCCC-base 中文 SFT 中定位学习率过低（1e-5 → 5e-5）并修正；用 Unsloth + QLoRA 微调 Qwen3-4B-Instruct-2507，自研清洗脚本保留率 98.48%，最终经 llama.cpp 转 GGUF 部署至 WSL Ollama。",
    links: [
      { label: "minimind_try", url: "https://github.com/zjy-141/minimind_try" },
      { label: "finetune_qwen", url: "https://github.com/zjy-141/finetune_qwen" }
    ],
    skills: ["PyTorch", "Transformers", "PEFT", "Unsloth", "llama.cpp", "Ollama"]
  },
  {
    name: "CIFAR-10 多模型图像分类",
    description: "PyTorch + TensorBoard：手写 Dataset、固定随机种子划分数据，封装统一训练引擎（ETA 估算、最优 Checkpoint、TensorBoard 记录）。从零实现 Softmax 回归 / MLP / LeNet / Small CNN / Modern CNN，准确率由 36.5% 提升至 87.9%；BatchNorm × Dropout 消融实验定位最优正则组合（82.6% → 87.9%），并结合 Macro-F1 与混淆矩阵分析卷积归纳偏置的作用。",
    links: [
      { label: "deep_learning_try", url: "https://github.com/zjy-141/deep_learning_try" }
    ],
    skills: ["PyTorch", "TensorBoard", "CNN"]
  },
  {
    name: "学术术语解释器（AI Agent 技能）",
    description: "独立撰写的 Agent 技能规范（700 余行 SKILL.md）：把跨学科术语解释约束为六步流程——优先级评分提取术语、每个术语 ≥2 次联网交叉验证、20 学科靶向路由、六大模块决策树、递归澄清、Markdown/PDF 输出；并设计 PDF 四级降级链与公式复杂度分级。获 2026 第三届教育信息技术应用创新大赛全国总决赛二等奖（A 组，队长），配套 Vue3 产品介绍页支持技能包一键下载。",
    links: [
      { label: "explainer_skill", url: "https://github.com/zjy-141/explainer_skill" },
      { label: "在线演示", url: "https://zjy-141.github.io/explainer_skill/" }
    ],
    skills: ["Agent Skill", "Prompt Engineering", "Vue3"]
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
      dateRange: "2026.07 – 2026.09",
      bullets: [
        "主导赛题研判与方向决策，负责核心算法设计与代码框架搭建",
        "带队获 2026 年全国大学生数学建模竞赛陕西赛区一等奖（本科生组），校内选拔获校赛三等奖"
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
        "全国大学生数学建模竞赛陕西赛区一等奖（本科生组，队长）、校赛三等奖"
      ]
    }
  ]
}