// Grok API Guide Custom JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // 添加平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 代码块一键复制功能增强
  const codeBlocks = document.querySelectorAll('.highlight');
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'md-clipboard';
    button.title = '复制代码';
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 00-2 2v14a2 2 0 002 2h11a2 2 0 002-2V5a2 2 0 00-2-2m-3 4H8V3h8v1z"/></svg>';

    button.addEventListener('click', () => {
      const code = block.querySelector('code');
      const text = code.textContent;

      navigator.clipboard.writeText(text).then(() => {
        const originalTitle = button.title;
        button.title = '已复制！';
        button.style.color = '#4caf50';

        setTimeout(() => {
          button.title = originalTitle;
          button.style.color = '';
        }, 2000);
      });
    });

    block.style.position = 'relative';
    block.appendChild(button);
  });

  // 表格响应式处理
  const tables = document.querySelectorAll('.md-typeset table');
  tables.forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    wrapper.style.overflowX = 'auto';
    wrapper.style.margin = '1rem 0';

    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  // 添加页面加载进度条
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: var(--md-primary-fg-color);
    z-index: 9999;
    transition: width 0.3s ease;
  `;
  document.body.appendChild(progressBar);

  let scrollProgress = 0;
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollProgress = (winScroll / height) * 100;
    progressBar.style.width = scrollProgress + '%';
  });

  // 深色模式检测
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-md-color-scheme', 'slate');
  }

  // 监听主题切换
  const toggleButtons = document.querySelectorAll('[data-md-component="palette"]');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentScheme = document.documentElement.getAttribute('data-md-color-scheme');
      const newScheme = currentScheme === 'default' ? 'slate' : 'default';
      document.documentElement.setAttribute('data-md-color-scheme', newScheme);

      // 保存用户偏好
      localStorage.setItem('theme', newScheme);
    });
  });

  // 恢复用户的主题偏好
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-md-color-scheme', savedTheme);
  }

  // 添加代码语言标识
  const codeElements = document.querySelectorAll('.highlight code');
  codeElements.forEach(code => {
    const classes = code.className.split(' ');
    const langClass = classes.find(c => c.startsWith('language-'));

    if (langClass) {
      const lang = langClass.replace('language-', '');
      const label = document.createElement('div');
      label.className = 'code-language';
      label.textContent = lang.toUpperCase();
      label.style.cssText = `
        position: absolute;
        top: 0;
        right: 0;
        background: var(--md-primary-fg-color);
        color: white;
        padding: 0.2rem 0.5rem;
        font-size: 0.7rem;
        border-radius: 0 8px 0 4px;
        font-weight: 600;
      `;

      const highlight = code.closest('.highlight');
      if (highlight) {
        highlight.style.position = 'relative';
        highlight.appendChild(label);
      }
    }
  });

  // 搜索功能增强
  const searchInput = document.querySelector('.md-search__input');
  if (searchInput) {
    searchInput.setAttribute('placeholder', '搜索文档...');
  }

  // 添加键盘快捷键
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K 聚焦搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchInput = document.querySelector('.md-search__input');
      if (searchInput) {
        searchInput.focus();
      }
    }
  });

  // 统计访问时间
  const startTime = Date.now();
  window.addEventListener('beforeunload', () => {
    const timeSpent = Date.now() - startTime;
    console.log(`用户停留时间: ${Math.round(timeSpent / 1000)}秒`);
  });

  // 图片懒加载
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});