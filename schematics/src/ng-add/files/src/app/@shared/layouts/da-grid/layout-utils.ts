import { ElementRef, Renderer2 } from '@angular/core';
import { DaBreakpoint, DaBreakpoints, DaMergedProperty } from './layout.types';

export function parseFlex(flex: any): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  } else if (typeof flex === 'string') {
    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
      return `0 0 ${flex}`;
    }
  }
  return flex;
}

export function setGridClass(context: any, elementRef: ElementRef, renderer: Renderer2): void {
  const breakpoints = ['Ms', 'Mm', 'Ml', 'Xs', 'Sm', 'Md', 'Lg', 'Xl'];
  const classPrefixMap: any = {
    daOffset: 'dl-offset-',
    daAlign: 'dl-align-items-',
    daJustify: 'dl-justify-content-',
    daAlignSelf: 'dl-align-self-',
    daOrder: 'dl-order-',
  };
  const tempClassMap: any = {};
  if (context.daSpan !== undefined) {
    const className = context.daSpan === 0 ? `dl-d-none` : `dl-col-${context.daSpan}`;
    tempClassMap[className] = true;
  }
  breakpoints.forEach((point) => {
    const sizeName = 'da' + point;
    point = point.toLowerCase();
    if (context[sizeName] !== undefined) {
      if (typeof context[sizeName] === 'number') {
        const className = context[sizeName] === 0 ? `dl-d-${point}-none` : `dl-col-${point}-${context[sizeName]}`;
        tempClassMap[className] = true;
      } else {
        const mergedProperty: any = context[sizeName] as DaMergedProperty;
        if (mergedProperty.hasOwnProperty('span')) {
          const className = mergedProperty['span'] === 0 ? `dl-d-${point}-none` : `dl-col-${point}-${mergedProperty['span']}`;
          tempClassMap[className] = true;
        }
        for (const prefix in classPrefixMap) {
          if (mergedProperty.hasOwnProperty(prefix.slice(2).toLowerCase())) {
            const className = classPrefixMap[prefix] + mergedProperty[prefix.slice(2).toLowerCase()];
            tempClassMap[className] = true;
          }
        }
      }
    }
  });

  for (const prefix in classPrefixMap) {
    if (context[prefix] !== undefined) {
      const className = classPrefixMap[prefix] + context[prefix];
      tempClassMap[className] = true;
    }
    breakpoints.forEach((point) => {
      const name = prefix + point;
      point = point.toLowerCase();
      if (context[name] !== undefined) {
        const className = classPrefixMap[prefix] + `${point}-${context[name]}`;
        tempClassMap[className] = true;
      }
    });
  }

  if (context.classMap) {
    for (const className in context.classMap) {
      if (context.classMap.hasOwnProperty(className)) {
        renderer.removeClass(elementRef.nativeElement, className);
      }
    }
  }

  context.classMap = { ...tempClassMap };
  for (const className in context.classMap) {
    if (context.classMap.hasOwnProperty(className) && context.classMap[className]) {
      renderer.addClass(elementRef.nativeElement, className);
    }
  }
}

export function setScreenPointFlex(point: DaBreakpoint, context: any, elementRef: ElementRef, renderer: Renderer2): void {
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

export function setScreenPointElementsSpaceAndGutter(
  items: HTMLElement[],
  point: DaBreakpoint,
  dir: string,
  context: any,
  renderer: Renderer2
): void {
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

export function setScreenPointStyle(point: DaBreakpoint, context: any, elementRef: ElementRef, renderer: Renderer2): void {
  let styleName;
  let style = context['daStyle'];

  for (const tempPoint of DaBreakpoints) {
    styleName = 'daStyle' + firstLetterToUpperCase(tempPoint);
    style = context[styleName] !== undefined ? { ...style, ...context[styleName] } : style;
    if (tempPoint === point) {
      break;
    }
  }

  for (const key of Object.keys(context.$currentDaStyle || {})) {
    // use Object.keys to fix tslint error.
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
