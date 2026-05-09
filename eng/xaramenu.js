// Clean Text-Based Menu Engine
var lastWasMain = false;

function startMainMenu() { 
    document.write('<div class="modern-menu">');
    document.write('<button type="button" class="mobile-menu-toggle" aria-expanded="false">Navigation</button>');
    document.write('<ul class="modern-menu-list" style="list-style:none; padding:0; margin:0;">'); 
    lastWasMain = false;
}

function mainMenuItem(id, label, url) {
    if (lastWasMain) {
        document.write('</li>');
    }
    
    // Improved active state detection
    var activeClass = "";
    var currentPath = window.location.pathname;
    var fileName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    // Special case for root/home
    if ((fileName === "" || fileName === "indexeng.htm") && url === "indexeng.htm") {
        activeClass = " active";
    } else if (url !== "javascript:;" && url !== "#" && fileName === url) {
        activeClass = " active";
    }

    document.write('<li>');
    document.write('<a href="' + url + '" class="main-link' + activeClass + '">' + label + '</a>');
    lastWasMain = true;
}

function startSubmenu() { 
    document.write('<ul class="submenu">'); 
    lastWasMain = false; 
}

function submenuItem(text, url) {
    var activeStyle = "";
    var currentPath = window.location.pathname;
    var fileName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    if (fileName === url) {
        activeStyle = ' style="color:#CC0000; font-weight:bold; padding-left:5px;"';
    }
    document.write('<li><a href="' + url + '"' + activeStyle + '>' + text + '</a></li>');
}

function endSubmenu() { 
    document.write('</ul></li>'); 
    lastWasMain = false;
}

function endMainMenu() { 
    if (lastWasMain) {
        document.write('</li>');
    }
    document.write('</ul></div>'); 
    attachMobileMenuToggle();
}

function attachMobileMenuToggle() {
    var menu = document.querySelector(".modern-menu");
    if (!menu) return;

    var toggle = menu.querySelector(".mobile-menu-toggle");
    if (!toggle) return;

    toggle.onclick = function () {
        menu.classList.toggle("menu-open");
        toggle.setAttribute("aria-expanded", menu.classList.contains("menu-open") ? "true" : "false");
    };
}

function writeFooter() {
    var year = new Date().getFullYear();
    document.write('\u00A9 2006-' + year + ' Paintmari.com. All Rights Reserved.');
}
