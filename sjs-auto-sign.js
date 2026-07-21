// ==UserScript==
// @name         sjs自动签到
// @version      1.4.3
// @description  在 sjs 的 k_misign 签到页自动签到
// @author       白洲アズサ & Codex
// @icon         data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABILAAASCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAACQAAAAkAAAAJAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAC8AAAAwAAAAMAAAAC3AAAAmQAAAGwAAAAdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZwAAAP8gICD/LCws/yEhIf8VFRX/AgIC/gAAANAAAABHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAAAAJkAAACWAAAAlgAAAJYAAACYAAAAcQAAAAUAAAAAAAAAAAAAAAAAAAB9CQkJ/7CwsP/t7e3/5OTk/9PT0/+NjY3/Gxsb/wAAANUAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACWAwMD/xoaGv8eHh7/HBwc/wYGBv8AAADQAAAARgAAAD8AAAA/AAAAQgAAAMImJib/4+Pj//////////////////////+SkpL/AQEB/wAAAG0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJYXFxf/wcHB/+Tk5P/S0tL/LS0t/wAAAP0AAAD2AAAA9gAAAPYAAAD2AAAA/V1dXf/19fX/9vb2//r6+v///////////8rKyv8PDw//AAAAlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlhoaGv/b29v///////f39/+Xl5f/eXl5/3t7e/97e3v/e3t7/3t7e/98fHz/f39//0RERP88PDz/goKC//39/f//////4ODg/x0dHf8AAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACWGhoa/9vb2//////////////////////////////////////////////////AwMD/CQkJ/wAAAP9OTk7/+vr6///////h4eH/Hh4e/wAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJYaGhr/29vb////////////+Pj4//b29v/29vb/9vb2//r6+v///////////8DAwP8JCQn/AAAA/05OTv/6+vr//////+Hh4f8eHh7/AAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlhoaGv/b29v///////Pz8/9mZmb/PT09/z8/P/88PDz/hYWF//7+/v//////wMDA/wkJCf8AAAD/Tk5O//r6+v//////4eHh/x4eHv8AAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACWGhoa/9vb2///////7u7u/zMzM/8AAAD/AAAA/wAAAP9cXFz//f39///////AwMD/CQkJ/wAAAP9OTk7/+vr6///////h4eH/Hh4e/wAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJYaGhr/29vb///////4+Pj/q6ur/5WVlf+Wlpb/lJSU/7y8vP/+/v7//////8DAwP8JCQn/AAAA/05OTv/6+vr//////+Hh4f8eHh7/AAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlhoaGv/b29v/////////////////////////////////////////////////wMDA/wkJCf8AAAD/Tk5O//r6+v//////4eHh/x4eHv8AAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD0AAADDGBgY/83Nzf/y8vL/8PDw//Dw8P/w8PD/8PDw//Dw8P/w8PD/8PDw//Pz8/+0tLT/CAgI/wAAAP9OTk7/+vr6///////h4eH/Hh4e/wAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlgAAAP8GBgb/Li4u/zc3N/83Nzf/Nzc3/zc3N/83Nzf/Nzc3/zc3N/83Nzf/ODg4/ykpKf8CAgL/AAAA/05OTv/6+vr//////+Hh4f8eHh7/AAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACWDg4O/4eHh/+goKD/np6e/56env+enp7/np6e/56env+enp7/np6e/56env+enp7/oqKi/25ubv8AAAD/Tk5O//r6+v//////4eHh/x4eHv8AAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJYYGBj/2NjY////////////////////////////////////////////////////////////sbGx/wEBAf9OTk7/+vr6///////h4eH/Hh4e/wAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAArxUVFf+9vb3/4uLi/+Dg4P/g4OD/4ODg/+Dg4P/g4OD/4ODg/+Dg4P/g4OD/4ODg/+Tk5P+ampr/AAAA/05OTv/6+vr//////+Hh4f8eHh7/AAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAADABQUF/yQkJP8qKir/Kioq/yoqKv8qKir/Kioq/yoqKv8qKir/Kioq/yoqKv8qKir/Kioq/yAgIP8ICAj/V1dX//r6+v//////4eHh/x4eHv8AAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAAMAvLy//u7u7/8LCwv/CwsL/wsLC/8LCwv/CwsL/wsLC/8LCwv/CwsL/wsLC/8LCwv/CwsL/wsLC/8PDw//X19f//v7+///////h4eH/Hh4e/wAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAAAAwD4+Pv/29vb//////////////////////////////////////////////////////////////////////////////////////+Hh4f8eHh7/AAAAlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAADAOjo6/+np6f/z8/P/8vLy//Ly8v/y8vL/8vLy//Ly8v/y8vL/8vLy//Ly8v/y8vL/8vLy//Ly8v/y8vL/8vLy//Ly8v/09PT/1dXV/xwcHP8AAACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAAMAMDAz/NjY2/zk5Of85OTn/OTk5/zk5Of85OTn/OTk5/zk5Of85OTn/OTk5/zk5Of85OTn/OTk5/zk5Of85OTn/OTk5/zk5Of8wMDD/BgYG/wAAAJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAkAAAAMMAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADDAAAAcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////4H///+Af///gD/8A4Af/AAAH/wAAB/8AAAf/AAAH/wAAB/8AAAf/AAAH/wAAB/8AAAf+AAAH/gAAB/4AAAf+AAAH/AAAB/wAAAf8AAAH/AAAB/wAAAf8AAAH/AAAB/wAAAf//////////////////////////8=
// @include      /^https:\/\/(www\.)?sjs[^/]*\.(?:com|net)\/(?:k_misign-sign\.html.*|plugin\.php.*)$/
// @include      /^https:\/\/(www\.)?sjslt\.cc\/(?:k_misign-sign\.html.*|plugin\.php.*)$/
// @include      /^https:\/\/(www\.)?xsijishe\.(?:ink|net)\/(?:k_misign-sign\.html.*|plugin\.php.*)$/
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const storageKey = 'isSigned';
  const LOG_PREFIX = '[sjs-auto-sign]';
  const MIDNIGHT_CALIBRATION_MS = 8000;

  const log = (...args) => console.log(LOG_PREFIX, ...args);
  const warn = (...args) => console.warn(LOG_PREFIX, ...args);

  function isSignPage() {
    const path = location.pathname.replace(/\/+$/, '');
    return path.endsWith('/k_misign-sign.html')
      || (path.endsWith('/plugin.php') && new URLSearchParams(location.search).get('id') === 'k_misign:sign');
  }

  function isSigned(text) {
    return /签到排名|今日排名|已签到/.test(text || '');
  }

  function isSuccess(text) {
    return /CDATA\[\]/.test(text || '');
  }

  function getFormatedDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`
  }

  function msToHHmmss(ms) {
    if (typeof ms !== 'number' || ms < 0) {
      return 'NaN';
    }
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  function msUntilNextSignTime(now = Date.now()) {
    return (86400000 - (now + 28800000) % 86400000);
  }

  function scheduleMidnightSign() {
    const now = Date.now();
    const delay = msUntilNextSignTime(now);
    const targetTime = now + delay;
    const calibrationDelay = Math.max(0, delay - MIDNIGHT_CALIBRATION_MS);
    log(`已设置明天 0 点自动签到，约 ${msToHHmmss(delay)} 后执行。`);

    setTimeout(() => {
      const calibratedDelay = Math.max(0, targetTime - Date.now());
      log(`已校准剩余时间，约 ${msToHHmmss(calibratedDelay)} 后执行。`);

      setTimeout(async () => {
        log('到达 0 点，调用接口签到。');
        try {
          await run({ checkSigned: false });
        } catch (error) {
          warn('0 点自动签到失败：', error);
        } finally {
          scheduleMidnightSign();
        }
      }, calibratedDelay);
    }, calibrationDelay);
  }

  function getFormhashFromText(text) {
    const patterns = [
      /name=["']formhash["'][^>]*value=["']([^"']+)["']/i,
      /formhash=([a-z0-9]{6,})/i,
      /formhash\s*[:=]\s*["']?([a-z0-9]{6,})/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        return decodeURIComponent(match[1]);
      }
    }

    return '';
  }

  function getFormhashFromDocument() {
    const input = document.querySelector('input[name="formhash"]');
    if (input && input.value) {
      return input.value;
    }

    return getFormhashFromText(document.documentElement.innerHTML);
  }

  async function fetchText(url, options = {}) {
    const response = await fetch(url, {
      credentials: 'include',
      cache: 'no-store',
      ...options,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        ...(options.headers || {}),
      },
    });

    const text = await response.text();
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${text.slice(0, 160)}`);
    }
    return text;
  }

  async function ensureFormhash() {
    const current = getFormhashFromDocument();
    if (current) {
      return current;
    }

    const signPageUrl = new URL('/k_misign-sign.html', location.origin);
    const html = await fetchText(signPageUrl.toString(), {
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });

    return getFormhashFromText(html);
  }

  async function sign(formhash) {
    const endpoint = new URL('/plugin.php', location.origin);
    endpoint.searchParams.set('id', 'k_misign:sign');
    endpoint.searchParams.set('operation', 'qiandao');
    endpoint.searchParams.set('formhash', formhash);
    endpoint.searchParams.set('format', 'empty');
    endpoint.searchParams.set('_', String(Date.now()));

    return fetchText(endpoint.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json,text/javascript,text/html,*/*;q=0.8',
      },
    });
  }

  async function run({ checkSigned = true } = {}) {
    if (checkSigned) {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const data = JSON.parse(stored);
        if (data[getFormatedDate()]) {
          warn('今日已签，跳过。');
          return;
        }
      }

      const pageText = document.body ? document.body.innerText : '';
      if (isSigned(pageText)) {
        localStorage.setItem(storageKey, JSON.stringify({ [getFormatedDate()]: true }));
        warn('今日已签，跳过。');
        return;
      }
    }

    const formhash = await ensureFormhash();
    if (!formhash) {
      warn('未找到 formhash，可能尚未登录或页面结构已变化。');
      return;
    }

    const result = await sign(formhash);
    log('签到接口返回：', result.slice(0, 100));

    if (isSuccess(result)) {
      localStorage.setItem(storageKey, JSON.stringify({ [getFormatedDate()]: true }));
      log('签到成功。');
      return;
    }

    if (isSigned(result)) {
      localStorage.setItem(storageKey, JSON.stringify({ [getFormatedDate()]: true }));
      warn('今日已签。');
      return;
    }

    warn('未能确认签到成功，请查看接口返回。');
  }

  if (!isSignPage()) {
    return;
  }

  run().catch((error) => warn('签到失败：', error));
  scheduleMidnightSign();
})();
