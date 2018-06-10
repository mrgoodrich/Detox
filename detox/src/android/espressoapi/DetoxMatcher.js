/**

	This code is generated.
	For more information see generation/README.md.
*/


function sanitize_matcher(matcherThunk) {
  const matcher = typeof matcherThunk === 'function' ? matcherThunk() : matcherThunk;
  if (matcher.type) {
    return matcher.value;
  }

  const originalMatcher = typeof matcher._call === 'function' ? matcher._call() : matcher._call;
  return originalMatcher.type ? originalMatcher.value : originalMatcher;
} 
class DetoxMatcher {
  static matcherForText(text) {
    if (typeof text !== "string") throw new Error("text should be a string, but got " + (text + (" (" + (typeof text + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForText",
      args: [text]
    };
  }

  static matcherForContentDescription(contentDescription) {
    if (typeof contentDescription !== "string") throw new Error("contentDescription should be a string, but got " + (contentDescription + (" (" + (typeof contentDescription + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForContentDescription",
      args: [contentDescription]
    };
  }

  static matcherForTestId(testId) {
    if (typeof testId !== "string") throw new Error("testId should be a string, but got " + (testId + (" (" + (typeof testId + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForTestId",
      args: [testId]
    };
  }

  static matcherForAnd(m1, m2) {
    if ((typeof m1 !== 'object' || typeof m1.constructor !== 'function' || m1.constructor.name.indexOf('Matcher') === -1) && (typeof m1 !== 'object' || m1.type !== 'Invocation' || typeof m1.value !== 'object' || typeof m1.value.target !== 'object' || m1.value.target.value.indexOf('Matcher') === -1) && (typeof m1 !== 'function' || typeof m1() !== 'object' || typeof m1().constructor !== 'function' || m1().constructor.name.indexOf('Matcher') === -1)) {
      let additionalErrorInfo = '';
      let item = m1;

      if (typeof item === 'function') {
        item = item();
        additionalErrorInfo += 'it is a function which returns "' + item + '" and ';
      }

      if (typeof item === 'object') {
        additionalErrorInfo += typeof item.constructor === 'object' ? 'the constructor is no object' : 'it has a wrong class name: "' + item.constructor.name + '"';
        additionalErrorInfo += 'The current value is ' + JSON.stringify(item);
      } else {
        additionalErrorInfo += 'it is no object';
      }

      throw new Error('m1 should be an instance of Matcher, got "' + m1 + '", it appears that ' + additionalErrorInfo);
    }

    if ((typeof m2 !== 'object' || typeof m2.constructor !== 'function' || m2.constructor.name.indexOf('Matcher') === -1) && (typeof m2 !== 'object' || m2.type !== 'Invocation' || typeof m2.value !== 'object' || typeof m2.value.target !== 'object' || m2.value.target.value.indexOf('Matcher') === -1) && (typeof m2 !== 'function' || typeof m2() !== 'object' || typeof m2().constructor !== 'function' || m2().constructor.name.indexOf('Matcher') === -1)) {
      let additionalErrorInfo = '';
      let item = m2;

      if (typeof item === 'function') {
        item = item();
        additionalErrorInfo += 'it is a function which returns "' + item + '" and ';
      }

      if (typeof item === 'object') {
        additionalErrorInfo += typeof item.constructor === 'object' ? 'the constructor is no object' : 'it has a wrong class name: "' + item.constructor.name + '"';
        additionalErrorInfo += 'The current value is ' + JSON.stringify(item);
      } else {
        additionalErrorInfo += 'it is no object';
      }

      throw new Error('m2 should be an instance of Matcher, got "' + m2 + '", it appears that ' + additionalErrorInfo);
    }

    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForAnd",
      args: [{
        type: "Invocation",
        value: sanitize_matcher(m1)
      }, {
        type: "Invocation",
        value: sanitize_matcher(m2)
      }]
    };
  }

  static matcherForOr(m1, m2) {
    if ((typeof m1 !== 'object' || typeof m1.constructor !== 'function' || m1.constructor.name.indexOf('Matcher') === -1) && (typeof m1 !== 'object' || m1.type !== 'Invocation' || typeof m1.value !== 'object' || typeof m1.value.target !== 'object' || m1.value.target.value.indexOf('Matcher') === -1) && (typeof m1 !== 'function' || typeof m1() !== 'object' || typeof m1().constructor !== 'function' || m1().constructor.name.indexOf('Matcher') === -1)) {
      let additionalErrorInfo = '';
      let item = m1;

      if (typeof item === 'function') {
        item = item();
        additionalErrorInfo += 'it is a function which returns "' + item + '" and ';
      }

      if (typeof item === 'object') {
        additionalErrorInfo += typeof item.constructor === 'object' ? 'the constructor is no object' : 'it has a wrong class name: "' + item.constructor.name + '"';
        additionalErrorInfo += 'The current value is ' + JSON.stringify(item);
      } else {
        additionalErrorInfo += 'it is no object';
      }

      throw new Error('m1 should be an instance of Matcher, got "' + m1 + '", it appears that ' + additionalErrorInfo);
    }

    if ((typeof m2 !== 'object' || typeof m2.constructor !== 'function' || m2.constructor.name.indexOf('Matcher') === -1) && (typeof m2 !== 'object' || m2.type !== 'Invocation' || typeof m2.value !== 'object' || typeof m2.value.target !== 'object' || m2.value.target.value.indexOf('Matcher') === -1) && (typeof m2 !== 'function' || typeof m2() !== 'object' || typeof m2().constructor !== 'function' || m2().constructor.name.indexOf('Matcher') === -1)) {
      let additionalErrorInfo = '';
      let item = m2;

      if (typeof item === 'function') {
        item = item();
        additionalErrorInfo += 'it is a function which returns "' + item + '" and ';
      }

      if (typeof item === 'object') {
        additionalErrorInfo += typeof item.constructor === 'object' ? 'the constructor is no object' : 'it has a wrong class name: "' + item.constructor.name + '"';
        additionalErrorInfo += 'The current value is ' + JSON.stringify(item);
      } else {
        additionalErrorInfo += 'it is no object';
      }

      throw new Error('m2 should be an instance of Matcher, got "' + m2 + '", it appears that ' + additionalErrorInfo);
    }

    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForOr",
      args: [{
        type: "Invocation",
        value: sanitize_matcher(m1)
      }, {
        type: "Invocation",
        value: sanitize_matcher(m2)
      }]
    };
  }

  static matcherForNot(m) {
    if ((typeof m !== 'object' || typeof m.constructor !== 'function' || m.constructor.name.indexOf('Matcher') === -1) && (typeof m !== 'object' || m.type !== 'Invocation' || typeof m.value !== 'object' || typeof m.value.target !== 'object' || m.value.target.value.indexOf('Matcher') === -1) && (typeof m !== 'function' || typeof m() !== 'object' || typeof m().constructor !== 'function' || m().constructor.name.indexOf('Matcher') === -1)) {
      let additionalErrorInfo = '';
      let item = m;

      if (typeof item === 'function') {
        item = item();
        additionalErrorInfo += 'it is a function which returns "' + item + '" and ';
      }

      if (typeof item === 'object') {
        additionalErrorInfo += typeof item.constructor === 'object' ? 'the constructor is no object' : 'it has a wrong class name: "' + item.constructor.name + '"';
        additionalErrorInfo += 'The current value is ' + JSON.stringify(item);
      } else {
        additionalErrorInfo += 'it is no object';
      }

      throw new Error('m should be an instance of Matcher, got "' + m + '", it appears that ' + additionalErrorInfo);
    }

    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForNot",
      args: [{
        type: "Invocation",
        value: sanitize_matcher(m)
      }]
    };
  }

  static matcherWithAncestor(m, ancestorMatcher) {
    if ((typeof m !== 'object' || typeof m.constructor !== 'function' || m.constructor.name.indexOf('Matcher') === -1) && (typeof m !== 'object' || m.type !== 'Invocation' || typeof m.value !== 'object' || typeof m.value.target !== 'object' || m.value.target.value.indexOf('Matcher') === -1) && (typeof m !== 'function' || typeof m() !== 'object' || typeof m().constructor !== 'function' || m().constructor.name.indexOf('Matcher') === -1)) {
      let additionalErrorInfo = '';
      let item = m;

      if (typeof item === 'function') {
        item = item();
        additionalErrorInfo += 'it is a function which returns "' + item + '" and ';
      }

      if (typeof item === 'object') {
        additionalErrorInfo += typeof item.constructor === 'object' ? 'the constructor is no object' : 'it has a wrong class name: "' + item.constructor.name + '"';
        additionalErrorInfo += 'The current value is ' + JSON.stringify(item);
      } else {
        additionalErrorInfo += 'it is no object';
      }

      throw new Error('m should be an instance of Matcher, got "' + m + '", it appears that ' + additionalErrorInfo);
    }

    if ((typeof ancestorMatcher !== 'object' || typeof ancestorMatcher.constructor !== 'function' || ancestorMatcher.constructor.name.indexOf('Matcher') === -1) && (typeof ancestorMatcher !== 'object' || ancestorMatcher.type !== 'Invocation' || typeof ancestorMatcher.value !== 'object' || typeof ancestorMatcher.value.target !== 'object' || ancestorMatcher.value.target.value.indexOf('Matcher') === -1) && (typeof ancestorMatcher !== 'function' || typeof ancestorMatcher() !== 'object' || typeof ancestorMatcher().constructor !== 'function' || ancestorMatcher().constructor.name.indexOf('Matcher') === -1)) {
      let additionalErrorInfo = '';
      let item = ancestorMatcher;

      if (typeof item === 'function') {
        item = item();
        additionalErrorInfo += 'it is a function which returns "' + item + '" and ';
      }

      if (typeof item === 'object') {
        additionalErrorInfo += typeof item.constructor === 'object' ? 'the constructor is no object' : 'it has a wrong class name: "' + item.constructor.name + '"';
        additionalErrorInfo += 'The current value is ' + JSON.stringify(item);
      } else {
        additionalErrorInfo += 'it is no object';
      }

      throw new Error('ancestorMatcher should be an instance of Matcher, got "' + ancestorMatcher + '", it appears that ' + additionalErrorInfo);
    }

    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherWithAncestor",
      args: [{
        type: "Invocation",
        value: sanitize_matcher(m)
      }, {
        type: "Invocation",
        value: sanitize_matcher(ancestorMatcher)
      }]
    };
  }

  static matcherWithDescendant(m, descendantMatcher) {
    if ((typeof m !== 'object' || typeof m.constructor !== 'function' || m.constructor.name.indexOf('Matcher') === -1) && (typeof m !== 'object' || m.type !== 'Invocation' || typeof m.value !== 'object' || typeof m.value.target !== 'object' || m.value.target.value.indexOf('Matcher') === -1) && (typeof m !== 'function' || typeof m() !== 'object' || typeof m().constructor !== 'function' || m().constructor.name.indexOf('Matcher') === -1)) {
      let additionalErrorInfo = '';
      let item = m;

      if (typeof item === 'function') {
        item = item();
        additionalErrorInfo += 'it is a function which returns "' + item + '" and ';
      }

      if (typeof item === 'object') {
        additionalErrorInfo += typeof item.constructor === 'object' ? 'the constructor is no object' : 'it has a wrong class name: "' + item.constructor.name + '"';
        additionalErrorInfo += 'The current value is ' + JSON.stringify(item);
      } else {
        additionalErrorInfo += 'it is no object';
      }

      throw new Error('m should be an instance of Matcher, got "' + m + '", it appears that ' + additionalErrorInfo);
    }

    if ((typeof descendantMatcher !== 'object' || typeof descendantMatcher.constructor !== 'function' || descendantMatcher.constructor.name.indexOf('Matcher') === -1) && (typeof descendantMatcher !== 'object' || descendantMatcher.type !== 'Invocation' || typeof descendantMatcher.value !== 'object' || typeof descendantMatcher.value.target !== 'object' || descendantMatcher.value.target.value.indexOf('Matcher') === -1) && (typeof descendantMatcher !== 'function' || typeof descendantMatcher() !== 'object' || typeof descendantMatcher().constructor !== 'function' || descendantMatcher().constructor.name.indexOf('Matcher') === -1)) {
      let additionalErrorInfo = '';
      let item = descendantMatcher;

      if (typeof item === 'function') {
        item = item();
        additionalErrorInfo += 'it is a function which returns "' + item + '" and ';
      }

      if (typeof item === 'object') {
        additionalErrorInfo += typeof item.constructor === 'object' ? 'the constructor is no object' : 'it has a wrong class name: "' + item.constructor.name + '"';
        additionalErrorInfo += 'The current value is ' + JSON.stringify(item);
      } else {
        additionalErrorInfo += 'it is no object';
      }

      throw new Error('descendantMatcher should be an instance of Matcher, got "' + descendantMatcher + '", it appears that ' + additionalErrorInfo);
    }

    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherWithDescendant",
      args: [{
        type: "Invocation",
        value: sanitize_matcher(m)
      }, {
        type: "Invocation",
        value: sanitize_matcher(descendantMatcher)
      }]
    };
  }

  static matcherForClass(className) {
    if (typeof className !== "string") throw new Error("className should be a string, but got " + (className + (" (" + (typeof className + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForClass",
      args: [className]
    };
  }

  static matcherForSufficientlyVisible() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForSufficientlyVisible",
      args: []
    };
  }

  static matcherForNotVisible() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForNotVisible",
      args: []
    };
  }

  static matcherForNotNull() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForNotNull",
      args: []
    };
  }

  static matcherForNull() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForNull",
      args: []
    };
  }

  static matcherForAtIndex(index, innerMatcher) {
    if (typeof index !== "number") throw new Error("index should be a number, but got " + (index + (" (" + (typeof index + ")"))));

    if ((typeof innerMatcher !== 'object' || typeof innerMatcher.constructor !== 'function' || innerMatcher.constructor.name.indexOf('Matcher') === -1) && (typeof innerMatcher !== 'object' || innerMatcher.type !== 'Invocation' || typeof innerMatcher.value !== 'object' || typeof innerMatcher.value.target !== 'object' || innerMatcher.value.target.value.indexOf('Matcher') === -1) && (typeof innerMatcher !== 'function' || typeof innerMatcher() !== 'object' || typeof innerMatcher().constructor !== 'function' || innerMatcher().constructor.name.indexOf('Matcher') === -1)) {
      let additionalErrorInfo = '';
      let item = innerMatcher;

      if (typeof item === 'function') {
        item = item();
        additionalErrorInfo += 'it is a function which returns "' + item + '" and ';
      }

      if (typeof item === 'object') {
        additionalErrorInfo += typeof item.constructor === 'object' ? 'the constructor is no object' : 'it has a wrong class name: "' + item.constructor.name + '"';
        additionalErrorInfo += 'The current value is ' + JSON.stringify(item);
      } else {
        additionalErrorInfo += 'it is no object';
      }

      throw new Error('innerMatcher should be an instance of Matcher, got "' + innerMatcher + '", it appears that ' + additionalErrorInfo);
    }

    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForAtIndex",
      args: [{
        type: "Integer",
        value: index
      }, {
        type: "Invocation",
        value: sanitize_matcher(innerMatcher)
      }]
    };
  }

  static matcherForAnything() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForAnything",
      args: []
    };
  }

}

module.exports = DetoxMatcher;