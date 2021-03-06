'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.render = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    default_options: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/default_options.html');
        var expected = grunt.file.read('test/expected/default_options.html');
        test.equal(actual, expected, 'By default input is passed to output "as is"');

        test.done();
    },
    ejs: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/ejs.html');
        var expected = grunt.file.read('test/expected/ejs.html');
        test.equal(actual, expected, 'EJS template rendered');

        test.done();
    },
    yaml: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/yaml.html');
        var expected = grunt.file.read('test/expected/yaml.html');
        test.equal(actual, expected, 'Reads YAML data file');

        test.done();
    },
    swig: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/swig.html').trim();
        var expected = grunt.file.read('test/expected/swig.html').trim();
        test.equal(actual, expected, 'SWIG template rendered');

        test.done();
    }
};
