type ConstructOptions = {
  target?: new () => any,
  args?: any[],
  newTarget?: new () => any,
  callback: () => void
}

declare function construct(options: ConstructOptions): any

export = construct