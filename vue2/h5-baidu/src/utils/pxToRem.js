const getFontSize = (fontSize) => {
  return parseInt(fontSize / 10 + '', 10) * 10;
};
// @ts-ignore
((win, lib) => {
  const doc = win.document;
  const docEl = doc.documentElement;
  let metaEl = doc.querySelector('meta[name="viewport"]');
  const flexibleEl = doc.querySelector('meta[name="flexible"]');
  let dpr = 0;
  let scale = 0;
  let tid;
  const flexible = lib.flexible || (lib.flexible = {});

  if (metaEl) {
    const content = metaEl.getAttribute('content') || '';
    const match = content.match(/initial-scale=([\d.]+)/);
    if (match) {
      scale = parseFloat(match[1]);
      dpr = parseInt(1 / scale + '', 10);
    }
  } else if (flexibleEl) {
    const content = flexibleEl.getAttribute('content');
    if (content) {
      const initialDpr = content.match(/initial-dpr=([\d.]+)/);
      const maximumDpr = content.match(/maximum-dpr=([\d.]+)/);
      if (initialDpr) {
        dpr = parseFloat(initialDpr[1]);
        scale = parseFloat((1 / dpr).toFixed(2));
      }
      if (maximumDpr) {
        dpr = parseFloat(maximumDpr[1]);
        scale = parseFloat((1 / dpr).toFixed(2));
      }
    }
  }

  if (!dpr && !scale) {
    const isIPhone = win.navigator.appVersion.match(/iphone/gi);
    const devicePixelRatio = win.devicePixelRatio;
    if (isIPhone) {
      // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
      if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
        dpr = 3;
      } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
        dpr = 2;
      } else {
        dpr = 1;
      }
    } else {
      // 其他设备下，仍旧使用1倍的方案
      dpr = 1;
    }
    scale = 1 / dpr;
  }

  docEl.setAttribute('data-dpr', dpr + '');
  if (!metaEl) {
    // @ts-ignore
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale
      + ', minimum-scale=' + scale
      + ', user-scalable=no');
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl);
    } else {
      const wrap = doc.createElement('div');
      wrap.appendChild(metaEl);
      doc.write(wrap.innerHTML);
    }
  }

  const refreshRem = () => {
    let width = docEl.getBoundingClientRect().width;
    // 适配平板
    if (width / dpr > 750) {
      width = 750 * dpr;
    }
    const rem = 100 * (width / 750);
    if (docEl) {
      docEl.style.fontSize = getFontSize(rem) + 'px';
    }
    // @ts-ignore
    flexible.rem = win.rem = rem;
  };

  win.addEventListener('resize', () => {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);

  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = getFontSize(12 * dpr) + 'px';
  } else {
    doc.addEventListener('DOMContentLoaded', () => {
      doc.body.style.fontSize = getFontSize(12 * dpr) + 'px';
    }, false);
  }


  refreshRem();

  // @ts-ignore
  flexible.dpr = win.dpr = dpr;
  flexible.refreshRem = refreshRem;
  flexible.rem2px = function (d) {
    let val = parseFloat(d) * this.rem + '';
    if (typeof d === 'string' && d.match(/rem$/)) {
      val += 'px';
    }
    return val;
  };
  flexible.px2rem = function (d) {
    let val = parseFloat(d) / this.rem + '';
    if (typeof d === 'string' && d.match(/px$/)) {
      val += 'rem';
    }
    return val;
  };
// @ts-ignore
})(window, window.lib || (window.lib = {}));

const getRootElementFontSize = () => {
  // Returns a number
  return parseFloat(
    // of the computed font-size, so in px
    // @ts-ignore
    getComputedStyle(
      // for the root <html> element
      // @ts-ignore
      document.documentElement,
    ).fontSize,
  );
};

export const convertRem = (value) => {
  return value * getRootElementFontSize();
};
