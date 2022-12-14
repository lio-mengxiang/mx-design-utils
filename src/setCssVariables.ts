import { isObject } from './is';

/**
 * 更换css变量的方法
 */
export function setCssVariables(variables: Record<string, any>, root = document.body) {
  if (variables && isObject(variables)) {
    Object.keys(variables).forEach((themKey) => {
      root.style.setProperty(themKey, variables[themKey]);
    });
  }
}
