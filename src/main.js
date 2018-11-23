var parseSrcset = require('./parse-srcset');

module.exports.parse = parseSrcset;

/**
  generate a string based on [{url: _, d: _, w: _, h:_}, ...].
**/
module.exports.stringify = function(parsedSrcset, throwOnError) {
  return Array.isArray(parsedSrcset) && parsedSrcset
    .map(function(el) {
      if (!el.url) {
        throw new Error('URL is required.');
      }

      const ret = [el.url];

      if (el.w) {
        ret.push(el.w + 'w');
      }

      if (el.h) {
        ret.push(el.h + 'h');
      }

      if (el.d) {
        ret.push(el.d + 'x');
      }

      return ret.join(' ');
    })
    .join(', ');
};
