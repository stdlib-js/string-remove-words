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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Remove Words

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Remove a list of words from a string.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import removeWords from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-words@v0.1.0-esm/index.mjs';
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import removeWords from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-words@v0.1.0-esm/index.mjs';
import stopwords from 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-stopwords-en@esm/index.mjs';
import inmap from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inmap@esm/index.mjs';
import spam from 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-spam-assassin@esm/index.mjs';

var corpus = spam();
var words = stopwords();

function remove( mail, idx ) {
    var newText = removeWords( mail.text, words );
    console.log( 'After removing stop words, email %d contains %d characters. Originally, it contained %d.', idx, newText.length, mail.text.length );
    mail.text = newText;
}

inmap( corpus, remove );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-remove-words.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-remove-words

[test-image]: https://github.com/stdlib-js/string-remove-words/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/string-remove-words/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-remove-words/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-remove-words?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-remove-words.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-remove-words/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-remove-words#cli
[cli-url]: https://github.com/stdlib-js/string-remove-words/tree/cli
[@stdlib/string-remove-words]: https://github.com/stdlib-js/string-remove-words/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-remove-words/tree/deno
[umd-url]: https://github.com/stdlib-js/string-remove-words/tree/umd
[esm-url]: https://github.com/stdlib-js/string-remove-words/tree/esm
[branches-url]: https://github.com/stdlib-js/string-remove-words/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-remove-words/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
