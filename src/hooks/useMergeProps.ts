import { useMemo } from 'react';

export default function useMergeProps<PropsType>(
  componentProps: PropsType,
  defaultProps: Partial<PropsType>,
  globalComponentConfig: Partial<PropsType>
): PropsType {
  const _defaultProps = useMemo(() => {
    return { ...defaultProps, ...globalComponentConfig };
  }, [defaultProps, globalComponentConfig]);

  return { ..._defaultProps, ...componentProps };
}
