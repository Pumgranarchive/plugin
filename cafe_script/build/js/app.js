(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Pumgrana Plugin
 *
 */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Plugin = function Plugin() {
    _classCallCheck(this, Plugin);

    Sprint('body').append('\n            <div class="Pumgrana">\n                <div class="Pumgrana_content">\n                    <a href="#/" class="Toogle" aria-label="Ouvrir"></a>\n                    <div class="Header">\n                        <a aria-label="Go back" href="#/" class="Header_back"></a>\n                        <span class="Header_url">source.com</span>\n                        <span class="Header_title">Breast Bancer Treatment & Management</span>\n                        <svg class="Header_bookmark -active" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">\n                            <title>View all your bookmarks</title>\n                            <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#DCDCDC" fill="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"/>\n                        </svg>\n                    </div>\n                    <div class="Resultats">\n                        <h1 class="Resultats_title">\n                            Related contents\n                        </h1>\n                        <input type="text" name="search" placeholder="Search ..." class="Search">\n                        <a href="#" class="Item">\n                            <svg class="Item_bookmark -active" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">\n                                <title>View all your bookmarks</title>\n                                <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#DCDCDC" fill="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"/>\n                            </svg>\n                            <span class="Item_url">source.com</span>\n                            <h2 class="Item_title">Content 4 facilis num dipit, quat nim niate facilis</h2>\n                            <p class="Item_description">\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit ...\n                            </p>\n                            <span class="Item_tag">Tag 1</span>\n                            <span class="Item_tag">Tag 2</span>\n                            <span class="Item_tag">Tag 3</span>\n                        </a> \n                        <a href="#" class="Item -visited">\n                            <svg class="Item_bookmark" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">\n                                <title>View all your bookmarks</title>\n                                <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#DCDCDC" fill="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"/>\n                            </svg>\n                            <span class="Item_url">source.com</span>\n                            <h2 class="Item_title">Content 4 facilis num dipit, quat nim niate facilis</h2>\n                            <p class="Item_description">\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit ...\n                            </p>\n                            <span class="Item_tag">Tag 1</span>\n                            <span class="Item_tag">Tag 2</span>\n                        </a>\n                        <a href="#" class="Item">\n                            <svg class="Item_bookmark" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">\n                                <title>View all your bookmarks</title>\n                                <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#DCDCDC" fill="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"/>\n                            </svg>\n                            <span class="Item_url">source.com</span>\n                            <h2 class="Item_title">Content 4 facilis num dipit, quat nim niate facilis</h2>\n                            <p class="Item_description">\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit ...\n                            </p>\n                            <span class="Item_tag">Tag 1</span>\n                            <span class="Item_tag">Tag 2</span>\n                        </a>\n                        <a href="#" class="Item">\n                            <svg class="Item_bookmark" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">\n                                <title>View all your bookmarks</title>\n                                <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#DCDCDC" fill="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"/>\n                            </svg>\n                            <span class="Item_url">source.com</span>\n                            <h2 class="Item_title">Content 4 facilis num dipit, quat nim niate facilis</h2>\n                            <p class="Item_description">\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit ...\n                            </p>\n                            <span class="Item_tag">Tag 1</span>\n                            <span class="Item_tag">Tag 2</span>\n                        </a>\n                        <a href="#" class="Item">\n                            <svg class="Pumgrana_Item_bookmark" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">\n                                <title>View all your bookmarks</title>\n                                <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#DCDCDC" fill="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"/>\n                            </svg>\n                            <span class="Item_url">source.com</span>\n                            <h2 class="Item_title">Content 4 facilis num dipit, quat nim niate facilis</h2>\n                            <p class="Item_description">\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit ...\n                            </p>\n                            <span class="Item_tag">Tag 1</span>\n                            <span class="Item_tag">Tag 2</span>\n                        </a>\n                    </div>\n                    <div class="Footer">\n                        <a class="Footer_viewBookmarks -active" href="#/pumpgrana/all" title="View all your bookmarks">\n                            <svg width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">\n                                <title>View all your bookmarks</title>\n                                <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#D2D2D2" fill="#EBEBEB" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"/>\n                            </svg>\n                        </a>\n                        <a class="Footer_website" href="#/pumgrana/website" title="Aller sur Pumgrana"></a>\n                    </div>\n                </div>\n            </div>\n        ');
};

var Pumgrana = new Plugin();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxTaXRlc1xcd3d3XFxQdW1ncmFuYVxcUGx1Z2ludjJcXG5vZGVfbW9kdWxlc1xcZ3VscC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkQ6L0Ryb3Bib3gvU2l0ZXMvd3d3L1B1bWdyYW5hL1BsdWdpbnYyL3NyYy9qcy9mYWtlXzNlYTEzY2E1LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0lDS00sTUFBTSxHQUVJLFNBRlYsTUFBTSxHQUVNOzBCQUZaLE1BQU07O0FBSUosVUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sMnhQQWdHbkIsQ0FBQztDQUVOOztBQUdMLElBQUksUUFBUSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIFB1bWdyYW5hIFBsdWdpblxyXG4gKlxyXG4gKi9cclxuIFxyXG5jbGFzcyBQbHVnaW57XHJcbiBcclxuICAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgICAgICBTcHJpbnQoJ2JvZHknKS5hcHBlbmQoYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUHVtZ3JhbmFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJQdW1ncmFuYV9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMvXCIgY2xhc3M9XCJUb29nbGVcIiBhcmlhLWxhYmVsPVwiT3V2cmlyXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgYXJpYS1sYWJlbD1cIkdvIGJhY2tcIiBocmVmPVwiIy9cIiBjbGFzcz1cIkhlYWRlcl9iYWNrXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkhlYWRlcl91cmxcIj5zb3VyY2UuY29tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkhlYWRlcl90aXRsZVwiPkJyZWFzdCBCYW5jZXIgVHJlYXRtZW50ICYgTWFuYWdlbWVudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cIkhlYWRlcl9ib29rbWFyayAtYWN0aXZlXCIgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNSAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5WaWV3IGFsbCB5b3VyIGJvb2ttYXJrczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMuNDM3IDFoOC4xMjZMMTQgMy40NVYxOWwtNC4wNjMtMy4yNzNMNS44NzUgMTlWMy40NUwzLjQzNyAxIDEgMy40NVY5LjE4aDQuODc1XCIgc3Ryb2tlPVwiI0RDRENEQ1wiIGZpbGw9XCIjRkZGRkZGXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlJlc3VsdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJSZXN1bHRhdHNfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbGF0ZWQgY29udGVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIC4uLlwiIGNsYXNzPVwiU2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJJdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiSXRlbV9ib29rbWFyayAtYWN0aXZlXCIgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNSAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+VmlldyBhbGwgeW91ciBib29rbWFya3M8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMy40MzcgMWg4LjEyNkwxNCAzLjQ1VjE5bC00LjA2My0zLjI3M0w1Ljg3NSAxOVYzLjQ1TDMuNDM3IDEgMSAzLjQ1VjkuMThoNC44NzVcIiBzdHJva2U9XCIjRENEQ0RDXCIgZmlsbD1cIiNGRkZGRkZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkl0ZW1fdXJsXCI+c291cmNlLmNvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIkl0ZW1fdGl0bGVcIj5Db250ZW50IDQgZmFjaWxpcyBudW0gZGlwaXQsIHF1YXQgbmltIG5pYXRlIGZhY2lsaXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJJdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgYSBkaWFtIGxlY3R1cy4gU2VkIHNpdCBhbWV0IGlwc3VtIG1hdXJpcy4gTWFlY2VuYXMgY29uZ3VlIGxpZ3VsYSBhYyBxdWFtIHZpdmVycmEgbmVjIGNvbnNlY3RldHVyIGFudGUgaGVuZHJlcml0IC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJJdGVtX3RhZ1wiPlRhZyAxPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJJdGVtX3RhZ1wiPlRhZyAyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJJdGVtX3RhZ1wiPlRhZyAzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiSXRlbSAtdmlzaXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cIkl0ZW1fYm9va21hcmtcIiB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1IDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5WaWV3IGFsbCB5b3VyIGJvb2ttYXJrczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zLjQzNyAxaDguMTI2TDE0IDMuNDVWMTlsLTQuMDYzLTMuMjczTDUuODc1IDE5VjMuNDVMMy40MzcgMSAxIDMuNDVWOS4xOGg0Ljg3NVwiIHN0cm9rZT1cIiNEQ0RDRENcIiBmaWxsPVwiI0ZGRkZGRlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiSXRlbV91cmxcIj5zb3VyY2UuY29tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiSXRlbV90aXRsZVwiPkNvbnRlbnQgNCBmYWNpbGlzIG51bSBkaXBpdCwgcXVhdCBuaW0gbmlhdGUgZmFjaWxpczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIkl0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEb25lYyBhIGRpYW0gbGVjdHVzLiBTZWQgc2l0IGFtZXQgaXBzdW0gbWF1cmlzLiBNYWVjZW5hcyBjb25ndWUgbGlndWxhIGFjIHF1YW0gdml2ZXJyYSBuZWMgY29uc2VjdGV0dXIgYW50ZSBoZW5kcmVyaXQgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkl0ZW1fdGFnXCI+VGFnIDE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkl0ZW1fdGFnXCI+VGFnIDI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIkl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJJdGVtX2Jvb2ttYXJrXCIgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxNSAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+VmlldyBhbGwgeW91ciBib29rbWFya3M8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMy40MzcgMWg4LjEyNkwxNCAzLjQ1VjE5bC00LjA2My0zLjI3M0w1Ljg3NSAxOVYzLjQ1TDMuNDM3IDEgMSAzLjQ1VjkuMThoNC44NzVcIiBzdHJva2U9XCIjRENEQ0RDXCIgZmlsbD1cIiNGRkZGRkZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkl0ZW1fdXJsXCI+c291cmNlLmNvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIkl0ZW1fdGl0bGVcIj5Db250ZW50IDQgZmFjaWxpcyBudW0gZGlwaXQsIHF1YXQgbmltIG5pYXRlIGZhY2lsaXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJJdGVtX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgYSBkaWFtIGxlY3R1cy4gU2VkIHNpdCBhbWV0IGlwc3VtIG1hdXJpcy4gTWFlY2VuYXMgY29uZ3VlIGxpZ3VsYSBhYyBxdWFtIHZpdmVycmEgbmVjIGNvbnNlY3RldHVyIGFudGUgaGVuZHJlcml0IC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJJdGVtX3RhZ1wiPlRhZyAxPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJJdGVtX3RhZ1wiPlRhZyAyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJJdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiSXRlbV9ib29rbWFya1wiIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlZpZXcgYWxsIHlvdXIgYm9va21hcmtzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMuNDM3IDFoOC4xMjZMMTQgMy40NVYxOWwtNC4wNjMtMy4yNzNMNS44NzUgMTlWMy40NUwzLjQzNyAxIDEgMy40NVY5LjE4aDQuODc1XCIgc3Ryb2tlPVwiI0RDRENEQ1wiIGZpbGw9XCIjRkZGRkZGXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJJdGVtX3VybFwiPnNvdXJjZS5jb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJJdGVtX3RpdGxlXCI+Q29udGVudCA0IGZhY2lsaXMgbnVtIGRpcGl0LCBxdWF0IG5pbSBuaWF0ZSBmYWNpbGlzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiSXRlbV9kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIERvbmVjIGEgZGlhbSBsZWN0dXMuIFNlZCBzaXQgYW1ldCBpcHN1bSBtYXVyaXMuIE1hZWNlbmFzIGNvbmd1ZSBsaWd1bGEgYWMgcXVhbSB2aXZlcnJhIG5lYyBjb25zZWN0ZXR1ciBhbnRlIGhlbmRyZXJpdCAuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiSXRlbV90YWdcIj5UYWcgMTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiSXRlbV90YWdcIj5UYWcgMjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiSXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cIlB1bWdyYW5hX0l0ZW1fYm9va21hcmtcIiB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDE1IDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5WaWV3IGFsbCB5b3VyIGJvb2ttYXJrczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zLjQzNyAxaDguMTI2TDE0IDMuNDVWMTlsLTQuMDYzLTMuMjczTDUuODc1IDE5VjMuNDVMMy40MzcgMSAxIDMuNDVWOS4xOGg0Ljg3NVwiIHN0cm9rZT1cIiNEQ0RDRENcIiBmaWxsPVwiI0ZGRkZGRlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiSXRlbV91cmxcIj5zb3VyY2UuY29tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiSXRlbV90aXRsZVwiPkNvbnRlbnQgNCBmYWNpbGlzIG51bSBkaXBpdCwgcXVhdCBuaW0gbmlhdGUgZmFjaWxpczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIkl0ZW1fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEb25lYyBhIGRpYW0gbGVjdHVzLiBTZWQgc2l0IGFtZXQgaXBzdW0gbWF1cmlzLiBNYWVjZW5hcyBjb25ndWUgbGlndWxhIGFjIHF1YW0gdml2ZXJyYSBuZWMgY29uc2VjdGV0dXIgYW50ZSBoZW5kcmVyaXQgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkl0ZW1fdGFnXCI+VGFnIDE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkl0ZW1fdGFnXCI+VGFnIDI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiRm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiRm9vdGVyX3ZpZXdCb29rbWFya3MgLWFjdGl2ZVwiIGhyZWY9XCIjL3B1bXBncmFuYS9hbGxcIiB0aXRsZT1cIlZpZXcgYWxsIHlvdXIgYm9va21hcmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTUgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlZpZXcgYWxsIHlvdXIgYm9va21hcmtzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMuNDM3IDFoOC4xMjZMMTQgMy40NVYxOWwtNC4wNjMtMy4yNzNMNS44NzUgMTlWMy40NUwzLjQzNyAxIDEgMy40NVY5LjE4aDQuODc1XCIgc3Ryb2tlPVwiI0QyRDJEMlwiIGZpbGw9XCIjRUJFQkVCXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiRm9vdGVyX3dlYnNpdGVcIiBocmVmPVwiIy9wdW1ncmFuYS93ZWJzaXRlXCIgdGl0bGU9XCJBbGxlciBzdXIgUHVtZ3JhbmFcIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYCk7XHJcblxyXG4gICAgfTtcclxufVxyXG4gXHJcbnZhciBQdW1ncmFuYSA9IG5ldyBQbHVnaW4oKTsiXX0=
