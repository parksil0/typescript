interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}

var detailedItem: DetailDropdown<string> = {
  title: 'abcTitle',
  description: 'abcdDescription',
  value: 'abcdeValue',
  tag: 'abcdefTag',
}

// Best Common Type
var arr = [1,2,true,false,'hello!'];