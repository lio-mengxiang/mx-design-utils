function execLoop({ regexp, text, handleFn }: { regexp: RegExp; text: string; handleFn: (data: RegExpExecArray | null) => any }) {
  let result;
  while ((result = regexp.exec(text)) !== null) {
    // 处理 result
    handleFn(result);
  }
}
