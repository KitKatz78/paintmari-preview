/*
 * gallery.js — Intercepts MagicThumb thumbnail clicks and opens
 * images in a dedicated viewer window (viewer.htm).
 *
 * Include this script at the bottom of every gallery page,
 * AFTER the gallery markup.
 */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var links = document.querySelectorAll('a.MagicThumb');
        if (!links.length) return;

        /* Build gallery data from the current page */
        var galleryData = [];
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            var caption = '';
            var span = link.querySelector('span');
            if (span) {
                caption = span.textContent.trim();
            }
            galleryData.push({
                url: link.href,      /* fully-resolved absolute URL */
                caption: caption
            });
        }

        /* Attach click handler to each thumbnail */
        for (var j = 0; j < links.length; j++) {
            (function (index) {
                links[index].addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    /* Store gallery data for the viewer */
                    try {
                        sessionStorage.setItem('galleryData', JSON.stringify(galleryData));
                        sessionStorage.setItem('galleryIndex', String(index));
                    } catch (err) {
                        /* sessionStorage blocked — fall back to simple new tab */
                        window.open(galleryData[index].url, '_blank');
                        return;
                    }

                    /* Compute path to viewer.htm at the project root */
                    var viewerPath = resolveViewerPath();

                    if (isMobileViewport()) {
                        window.location.href = viewerPath;
                        return;
                    }

                    /* Open viewer in a centred popup window */
                    var w = Math.round(screen.availWidth  * 0.88);
                    var h = Math.round(screen.availHeight * 0.88);
                    var left = Math.round((screen.availWidth  - w) / 2);
                    var top  = Math.round((screen.availHeight - h) / 2);

                    window.open(
                        viewerPath,
                        'paintmariGallery',
                        'width=' + w + ',height=' + h +
                        ',left=' + left + ',top=' + top +
                        ',resizable=yes,scrollbars=no,menubar=no,toolbar=no,location=no,status=no'
                    );
                });
            })(j);
        }
    });

    /**
     * Resolve the path to viewer.htm relative to the current page.
     * Pages live in /eng/ or /jap/ (one level deep) or /images/jap/ (two levels deep).
     */
    function resolveViewerPath() {
        var path = window.location.pathname.replace(/\\/g, '/').toLowerCase();

        if (path.indexOf('/images/jap/') !== -1) {
            return '../../viewer.htm';
        }
        if (path.indexOf('/eng/') !== -1 || path.indexOf('/jap/') !== -1) {
            return '../viewer.htm';
        }
        return 'viewer.htm';
    }

    function isMobileViewport() {
        return window.matchMedia && (
            window.matchMedia('(max-width: 768px)').matches ||
            window.matchMedia('(orientation: landscape) and (max-width: 1024px) and (max-height: 540px)').matches
        );
    }
})();
