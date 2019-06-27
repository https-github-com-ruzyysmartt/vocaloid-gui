import { trim } from 'lodash';

export default (...classNames: (string|undefined)[]) => {
    return trim(classNames.reduce((str, className) => (className ? str + ' ' + className : str), ''));
};