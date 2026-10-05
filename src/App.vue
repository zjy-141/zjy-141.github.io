<template>
  <!-- 顶部风格切换器 -->
  <div class="theme-switcher">
    <span>选择风格预览：</span>
    <button @click="setTheme('github')" :class="{ active: currentTheme === 'github' }">GitHub 原生</button>
    <button @click="setTheme('cyberpunk')" :class="{ active: currentTheme === 'cyberpunk' }">赛博朋克</button>
    <button @click="setTheme('terminal')" :class="{ active: currentTheme === 'terminal' }">极简终端</button>
    <button @click="setTheme('glass')" :class="{ active: currentTheme === 'glass' }">现代毛玻璃</button>
  </div>

  <!-- 简历内容容器 -->
  <div class="resume-wrapper" :data-theme="currentTheme">
    <div class="container">
      
      <!-- 头部 -->
      <header class="card header">
        <h1>Hi, I'm 张继尧 (Zhang Jiyao)</h1>
        <p class="subtitle">西安交通大学 · 信息与计算科学 · 2025 – 2029</p>
        <p class="tagline">后端开发 / 本地大模型 / 机器学习 / 数学建模</p>
        
        <div class="badges">
          <a class="badge" href="mailto:zhangjiyao555@stu.xjtu.edu.cn">
            <img src="https://img.shields.io/badge/Email-zhangjiyao555@stu.xjtu.edu.cn-blue?style=flat-square&logo=maildotru&logoColor=white" alt="Email" />
          </a>
          <a class="badge" href="https://github.com/zjy-141" target="_blank">
            <img src="https://img.shields.io/badge/GitHub-zjy--141-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
          </a>
        </div>
      </header>

      <!-- 教育背景 -->
      <section class="card">
        <h2>教育背景</h2>
        <div class="item">
          <h3>西安交通大学 · 信息与计算科学专业 · 2025.09 – 2029.06（预期）</h3>
          <ul>
            <li><strong>核心课程</strong>：大学计算机-算法编程 98、高等代数与几何II-2 88、数学分析II-2 86、数论</li>
            <li><strong>英语</strong>：CET-4 已通过，CET-6 备考中</li>
            <li><strong>竞赛</strong>：全国大学生数学建模竞赛校赛三等奖（队长）</li>
          </ul>
        </div>
      </section>

      <!-- 技术栈 -->
      <section class="card">
        <h2>技术栈</h2>
        <div class="skills-group">
          <h3>编程语言与后端</h3>
          <div class="badges">
            <img src="https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white" />
            <img src="https://img.shields.io/badge/Gin-008ECF?style=flat-square&logo=go&logoColor=white" />
            <img src="https://img.shields.io/badge/Gorm-00ADD8?style=flat-square&logo=go&logoColor=white" />
            <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
            <img src="https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=black" />
          </div>
          <h3>数据库与部署</h3>
          <div class="badges">
            <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" />
            <img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black" />
            <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" />
          </div>
          <h3>大模型与机器学习</h3>
          <div class="badges">
            <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white" />
            <img src="https://img.shields.io/badge/Transformers-FFD21E?style=flat-square&logo=huggingface&logoColor=black" />
            <img src="https://img.shields.io/badge/PEFT-FF6F00?style=flat-square&logo=python&logoColor=white" />
          </div>
        </div>
      </section>

      <!-- 项目经历 -->
      <section class="card">
        <h2>项目经历</h2>
        
        <div class="project-item">
          <h3>本地大语言模型全流程实践（独立完成）</h3>
          <p class="project-sub">从零预训练 · SFT 微调 · RAG · LoRA/QLoRA · GGUF 部署</p>
          <ul>
            <li><strong>从零预训练</strong>：在 RTX 5060 Laptop (8GB 显存) 上完成 MiniMind 预训练，loss 从 7.69 降至 1.49。</li>
            <li><strong>指令微调 SFT</strong>：基于 LCCC-base 数据集，抽取 5 万条数据，解决 loss 不下降问题。</li>
            <li><strong>RAG 知识库问答</strong>：基于 LangChain + FAISS 实现文档切分与检索增强生成。</li>
            <li><strong>格式转换与部署</strong>：完成 GGUF 格式转换，部署至 WSL + Ollama，实现离线推理。</li>
          </ul>
          <p class="links">链接：
            <a href="https://github.com/zjy-141/minimind_try" target="_blank">minimind_try</a> · 
            <a href="https://github.com/zjy-141/finetune_qwen" target="_blank">finetune_qwen</a>
          </p>
        </div>

        <div class="project-item">
          <h3>图寻｜后端开发与架构设计</h3>
          <p class="project-sub">Go + Gin + Gorm + MySQL · RESTful API · 已上线</p>
          <ul>
            <li>独立负责全部后端开发与架构设计，采用 Controller-Service 分层架构。</li>
            <li>完成从需求分析到云服务器部署的全流程，已上线并投入校内使用。</li>
          </ul>
          <p class="links">链接：
            <a href="https://tuxun.tiaozhan.com" target="_blank">tuxun.tiaozhan.com</a> · 
            <a href="https://github.com/zjy-141/tu-xun" target="_blank">代码仓库</a>
          </p>
        </div>

        <div class="project-item">
          <h3>数学建模竞赛｜队长</h3>
          <p class="project-sub">选题决策 · 核心算法 · 团队统筹</p>
          <ul>
            <li>主导赛题研判与方向决策，负责核心算法设计与代码框架搭建。</li>
            <li>获校级三等奖，正带队备战全国大学生数学建模竞赛。</li>
          </ul>
        </div>
      </section>

      <!-- GitHub 统计 -->
      <section class="card text-center">
        <h2>GitHub 统计</h2>
        <div class="stats-grid">
          <img src="https://github-readme-stats.vercel.app/api?username=zjy-141&show_icons=true&theme=radical&hide_border=true" alt="GitHub Stats" />
        </div>
      </section>

      <!-- 页脚 -->
      <footer class="text-center footer">
        <p><strong>感谢访问！欢迎交流技术、项目与合作。</strong></p>
      </footer>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentTheme = ref('github') // 默认风格

const setTheme = (theme) => {
  currentTheme.value = theme
}
</script>

<style>
/* 全局重置 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
}

/* =========================================
   风格切换器样式
   ========================================= */
.theme-switcher {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  padding: 10px 20px;
  border-radius: 30px;
  display: flex;
  gap: 10px;
  z-index: 1000;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-family: system-ui, sans-serif;
  font-size: 14px;
  align-items: center;
}

.theme-switcher button {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ccc;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.theme-switcher button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.theme-switcher button.active {
  background: #fff;
  color: #000;
  border-color: #fff;
}

/* =========================================
   四种主题的 CSS 变量定义
   ========================================= */
.resume-wrapper {
  min-height: 100vh;
  transition: all 0.5s ease;
  padding-top: 80px;
}

/* 1. GitHub 原生极客风 */
[data-theme="github"] {
  --bg: #0d1117;
  --card-bg: #161b22;
  --text: #c9d1d9;
  --title: #ffffff;
  --accent: #58a6ff;
  --border: #30363d;
  --radius: 8px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  --card-border: 1px solid var(--border);
}
[data-theme="github"] .resume-wrapper { background-color: var(--bg); }

/* 2. 赛博朋克/霓虹科技风 */
[data-theme="cyberpunk"] {
  --bg: #0a0a0a;
  --card-bg: #111111;
  --text: #e0e0e0;
  --title: #00f0ff;
  --accent: #ff00ff;
  --border: #00f0ff;
  --radius: 4px;
  --font-family: 'Courier New', Courier, monospace;
  --card-shadow: 0 0 15px rgba(0, 240, 255, 0.15);
  --card-border: 1px solid rgba(0, 240, 255, 0.3);
}
[data-theme="cyberpunk"] .resume-wrapper { 
  background-color: var(--bg);
  background-image: linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
}
[data-theme="cyberpunk"] h1, [data-theme="cyberpunk"] h2 { text-shadow: 0 0 8px var(--title); }
[data-theme="cyberpunk"] .card:hover { box-shadow: 0 0 20px rgba(255, 0, 255, 0.2); }

/* 3. 极简终端/命令行风 */
[data-theme="terminal"] {
  --bg: #000000;
  --card-bg: #000000;
  --text: #33ff00;
  --title: #33ff00;
  --accent: #33ff00;
  --border: #33ff00;
  --radius: 0px;
  --font-family: 'Fira Code', 'JetBrains Mono', 'Courier New', monospace;
  --card-shadow: none;
  --card-border: 1px solid var(--border);
}
[data-theme="terminal"] .resume-wrapper { background-color: var(--bg); }
[data-theme="terminal"] h1::before { content: "> "; }
[data-theme="terminal"] h2::before { content: "$ "; }
[data-theme="terminal"] ul { list-style-type: none; }
[data-theme="terminal"] ul li::before { content: "- "; }

/* 4. 现代毛玻璃/高级极客风 */
[data-theme="glass"] {
  --bg: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
  --card-bg: rgba(255, 255, 255, 0.03);
  --text: #94a3b8;
  --title: #f8fafc;
  --accent: #a78bfa;
  --border: rgba(255, 255, 255, 0.1);
  --radius: 16px;
  --font-family: system-ui, -apple-system, sans-serif;
  --card-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  --card-border: 1px solid var(--border);
}
[data-theme="glass"] .resume-wrapper { background: var(--bg); background-attachment: fixed; }

/* =========================================
   通用组件样式（使用变量）
   ========================================= */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: var(--font-family);
  color: var(--text);
  line-height: 1.6;
}

.card {
  background-color: var(--card-bg);
  border: var(--card-border);
  border-radius: var(--radius);
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
}

/* 毛玻璃特有属性 */
[data-theme="glass"] .card {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: opacity 0.3s;
}
a:hover { opacity: 0.8; text-decoration: underline; }

h1, h2, h3 { color: var(--title); margin-bottom: 1rem; }
h2 { border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; }

.badge img { height: 24px; margin: 0.2rem; border-radius: 4px; }
.badges { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 0.5rem; }

.header { text-align: center; }
.subtitle { font-size: 1.1rem; color: var(--text); opacity: 0.8; margin-bottom: 0.5rem; }
.tagline { font-size: 1.1rem; font-weight: 600; color: var(--accent); margin-bottom: 1.5rem; }

.item, .project-item { margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px dashed var(--border); }
.item:last-child, .project-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

.project-sub { font-style: italic; opacity: 0.7; font-size: 0.9rem; margin-bottom: 0.5rem; }

ul { padding-left: 1.5rem; margin-top: 0.5rem; }
li { margin-bottom: 0.5rem; }

.skills-group h3 { font-size: 1rem; margin-top: 1.5rem; margin-bottom: 0.5rem; }
.links { margin-top: 1rem; font-weight: 500; }

.text-center { text-align: center; }
.stats-grid { display: flex; justify-content: center; margin-top: 1rem; }
.stats-grid img { max-width: 100%; height: auto; }

.footer { margin-top: 3rem; padding-bottom: 3rem; opacity: 0.8; }
</style>