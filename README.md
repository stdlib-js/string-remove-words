<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Remove Words

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Remove a list of words from a string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-remove-words
```

</section>

<section class="usage">

## Usage

```javascript
var removeWords = require( '@stdlib/string-remove-words' );
```

#### removeWords( str, words\[, ignoreCase] )

Removes all occurrences of the given `words` from a `string`.

```javascript
var str = 'beep boop Foo bar';
var out = removeWords( str, [ 'boop', 'foo' ] );
// returns 'beep  Foo bar'
```

By default, words are removed from an input `string` in case of an exact match. To perform a case-insensitive replace operation, set `ignoreCase` to `true`.

```javascript
var str = 'beep boop Foo bar';
var out = removeWords( str, [ 'boop', 'foo' ], true );
// returns 'beep   bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var removeWords = require( '@stdlib/string-remove-words' );
var stopwords = require( '@stdlib/datasets-stopwords-en' );
var inmap = require( '@stdlib/utils-inmap' );
var spam = require( '@stdlib/datasets-spam-assassin' );

var corpus = spam();
var words = stopwords();

function remove( mail, idx ) {
    var newText = removeWords( mail.text, words );
    console.log( 'After removing stop words, email %d contains %d characters. Originally, it contained %d.', idx, newText.length, mail.text.length );
    mail.text = newText;
}

inmap( corpus, remove );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/string-remove-words
```

</section>

<section class="usage">

### Usage

```text
Usage: remove-words [options] [<string>] --words=<string>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --words w1,w2,...     Comma-separated list of words.
         --ignore-case         Perform case-insensitive replace operation.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ remove-words 'beep! boop!!!' --words='beep,boop'
! !!!
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep! boop!!!' | remove-words --words='BEEP,BOOP' --ignore-case
! !!!
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-remove-words.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-remove-words

[test-image]: https://github.com/stdlib-js/string-remove-words/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/string-remove-words/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-remove-words/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-remove-words?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-remove-words.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-remove-words/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-remove-words/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
