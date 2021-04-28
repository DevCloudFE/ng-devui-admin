import { DaBreakpoints } from './layout.types';

export function parseFlex(flex): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  } else if (typeof flex === 'string') {
    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
      return `0 0 ${flex}`;
    }
  }
  return flex;
}

export function setGridClass(context, elementRef, renderer): void {
  const breakpoints = ['Ms', 'Mm', 'Ml', 'Xs', 'Sm', 'Md', 'Lg', 'Xl'];

  if (context.daSpan !== undefined) {
    renderer.addClass(elementRef.nativeElement, context.daSpan === 0 ? `dl-d-none` : `dl-col-${context.daSpan}`);
  }
  breakpoints.forEach(point => {
    const sizeName = 'da' + point;
    point = point.toLowerCase();
    if (context[sizeName] !== undefined) {
      renderer.addClass(elementRef.nativeElement, context[sizeName] === 0 ? `dl-d-${point}-none` : `dl-col-${point}-${context[sizeName]}`);
    }
  });

  if (context.daOffset !== undefined) {
    renderer.addClass(elementRef.nativeElement, `dl-offset-${context.daOffset}`);
  }
  breakpoints.forEach(point => {
    const offsetName = 'daOffset' + point;
    point = point.toLowerCase();
    if (context[offsetName] !== undefined) {
      renderer.addClass(elementRef.nativeElement, `dl-offset-${point}-${context[offsetName]}`);
    }
  });

  if (context.daAlign !== undefined) {
    renderer.addClass(elementRef.nativeElement, `dl-align-items-${context.daAlign}`);
  }
  breakpoints.forEach(point => {
    const alignName = 'daAlign' + point;
    point = point.toLowerCase();
    if (context[alignName] !== undefined) {
      renderer.addClass(elementRef.nativeElement, `dl-align-items-${point}-${context[alignName]}`);
    }
  });

  if (context.daJustify !== undefined) {
    renderer.addClass(elementRef.nativeElement, `dl-justify-content-${context.daJustify}`);
  }
  breakpoints.forEach(point => {
    const justifyName = 'daJustify' + point;
    point = point.toLowerCase();
    if (context[justifyName] !== undefined) {
      renderer.addClass(elementRef.nativeElement, `dl-justify-content-${point}-${context.daJustify}`);
    }
  });

  if (context.daAlignSelf !== undefined) {
    renderer.addClass(elementRef.nativeElement, `dl-align-self-${context.daAlignSelf}`);
  }
  breakpoints.forEach(point => {
    const alignSelfName = 'daAlignSelf' + point;
    point = point.toLowerCase();
    if (context[alignSelfName] !== undefined) {
      renderer.addClass(elementRef.nativeElement, `dl-align-self-${alignSelfName}-${context[alignSelfName]}`);
    }
  });

  if (context.daOrder !== undefined) {
    renderer.addClass(elementRef.nativeElement, `dl-order-${context.daOrder}`);
  }
  breakpoints.forEach(point => {
    const orderName = 'daOrder' + point;
    point = point.toLowerCase();
    if (context[orderName] !== undefined) {
      renderer.addClass(elementRef.nativeElement, `dl-order-${point}-${context[orderName]}`);
    }
  });
}

export function setScreenPointFlex(point, context, elementRef, renderer): void {
  let flexName;
  let flex;

  for (const tempPoint of DaBreakpoints) {
    flexName = 'daFlex' + firstLetterToUpperCase(tempPoint);
    flex = context[flexName] !== undefined ? context[flexName] : flex;
    if (tempPoint === point) {
      flex = flex === undefined ? context['daFlex'] : flex;
      break;
    }
  }

  renderer.setStyle(elementRef.nativeElement, 'flex', parseFlex(flex));
}

export function setScreenPointElementsSpaceAndGutter(items, point, dir, context, renderer): void {
  let spaceName, space, gutterName, gutter;


  for (const tempPoint of DaBreakpoints) {
    spaceName = 'daSpace' + firstLetterToUpperCase(tempPoint);
    gutterName = 'daGutter' + firstLetterToUpperCase(tempPoint);
    space = context[spaceName] !== undefined ? context[spaceName] : space;
    gutter = context[gutterName] !== undefined ? context[gutterName] : gutter;
    if (tempPoint === point) {
      space = space === undefined ? context['daSpace'] : space;
      gutter = gutter === undefined ? context['daGutter'] : gutter;
      break;
    }
  }

  const spaces = Array.isArray(space) ? [...space] : [space];
  const gutters = Array.isArray(gutter) ? [...gutter] : [gutter];

  for (let i = spaces.length - 1; i < items.length - 1; i++) {
    if (Array.isArray(space)) {
      spaces.push(0);
    } else {
      spaces.push(space);
    }
  }

  for (let i = 0; i < items.length; i++) {
      renderer.setStyle(items[i], 'padding-left', gutters[0] / 2 + 'px');
      renderer.setStyle(items[i], 'padding-right', gutters[0] / 2 + 'px');
    if (gutters[1]) {
      renderer.setStyle(items[i], 'padding-top', gutters[1] / 2 + 'px');
      renderer.setStyle(items[i], 'padding-bottom', gutters[1] / 2 + 'px');
    }
  }

  for (let i = 0; i < items.length - 1; i++) {
    if (dir === 'row') {
      renderer.setStyle(items[i], 'margin-right', spaces[i] + 'px');
    } else if (dir === 'col') {
      renderer.setStyle(items[i], 'margin-bottom', spaces[i] + 'px');
    }
  }
}

export function setScreenPointStyle(point, context, elementRef, renderer): void {
  let styleName;
  let style = context['daStyle'];

  for (const tempPoint of DaBreakpoints) {
    styleName = 'daStyle' + firstLetterToUpperCase(tempPoint);
    style = context[styleName] !== undefined ? {...style, ...context[styleName]} : style;
    if (tempPoint === point) {
      break;
    }
  }

  for (const key of Object.keys(context.$currentDaStyle || {})) { // use Object.keys to fix tslint error.
    renderer.removeStyle(elementRef.nativeElement, key);
  }

  for (const key of Object.keys(style || {})) {
    renderer.setStyle(elementRef.nativeElement, key, style[key]);
  }
  context.$currentDaStyle = style;
}

function firstLetterToUpperCase(str: string): string {
  const tempArr = str.split('');
  tempArr[0] = tempArr[0].toUpperCase();

  return tempArr.join('');
}
