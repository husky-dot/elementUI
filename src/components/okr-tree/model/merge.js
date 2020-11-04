export default function(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    console.log('argumentsargumentsargumentsargumentsargumentsargumentsvv')
    console.log(arguments)
    let source = arguments[i] || {};
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }
  return target;
};
