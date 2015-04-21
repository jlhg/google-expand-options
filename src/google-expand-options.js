'use strict';

// Remove element
var removeElement = function removeElement(element) {
  element.parentNode.removeChild(element);
};

// Start mutation observer
var startObserver = function startObserver(observer, target, config) {
  observer.observe(target, config);
};

// Stop mutation observer
var stopObserver = function stopObserver(observer) {
  observer.disconnect();
}

// Home page
var linkList = document.getElementById('gbzc');
var moreLinks = document.getElementById('gbmm');
var expandOnHomePage = function expandOnHomePage() {
  removeElement(linkList.lastChild);

  var gbtb2;
  var gbts;
  var option;
  var optionLink;
  while (moreLinks.childNodes.length > 0) {
    option = moreLinks.firstChild;
    optionLink = option.firstChild;

    if (optionLink.textContent) {
      option.className = 'gbt';

      if (optionLink.className.indexOf('gbp1') > -1) {
        optionLink.className = 'gbzt gbz0l gbp1';
      } else {
        optionLink.className = 'gbzt';
      }

      gbtb2 = document.createElement('span');
      gbtb2.className = 'gbtb2';

      gbts = document.createElement('span');
      gbts.className = 'gbts';
      gbts.textContent = optionLink.textContent;
      optionLink.text = '';

      optionLink.appendChild(gbtb2);
      optionLink.appendChild(gbts);
      linkList.appendChild(option);
    } else {
      removeElement(option);
    }
  }
};

// Search page
var expandOnSearchPage = function expandOnSearchPage(mutations, observer) {
  var searchOptionMenu = document.getElementById('hdtb-msb');
  var searchMore = document.getElementById('hdtb-more');
  var searchMoreItems = document.getElementById('hdtb-more-mn');
  var searchMoreItemLinks = document.getElementsByClassName('q');
  var searchTool = document.getElementById('hdtb-tls');
  var searchFilters = document.getElementsByClassName('hdtbU');
  var searchToolDropMenu = document.getElementById('hdtbMenus');
  var rcnt = document.getElementById('rcnt');
  var slimAppbar = document.getElementById('slim_appbar');
  var centerCol = document.getElementById('center_col');
  var footcnt = document.getElementById('footcnt');
  var nycp = document.getElementById('nycp');
  var nyccur = document.getElementById('nyccur');
  var rhs = document.getElementById('rhs');
  var i;
  var j;
  var k;
  var nd;
  var ndLinks;
  var ndLink;
  var leftCol;
  var searchFilter;

  var isElement = function isElement(variable) {
    if (variable && (variable.nodeType || variable.length)) {
      return true;
    } else {
      return false;
    }
  }

  var ready = function ready() {
    if ([searchOptionMenu,
         searchMore,
         searchMoreItems,
         searchMoreItemLinks,
         searchTool,
         searchFilters,
         searchToolDropMenu,
         rcnt,
         slimAppbar,
         centerCol,
         footcnt,
         nycp,
         nyccur,
         rhs
        ].every(isElement)) {
      return true;
    } else {
      return false;
    }
  };

  mutations.forEach(function(mutation) {
    for (i = 0; i < mutation.addedNodes.length; ++i) {
      switch (mutation.addedNodes[i].id) {
      case 'hdtb-msb':
        searchOptionMenu = document.getElementById('hdtb-msb');
        continue;
      case 'hdtb-more':
        searchMore = document.getElementById('hdtb-more');
        break;
      case 'hdtb-more-mn':
        searchMoreItems = document.getElementById('hdtb-more-mn');
        continue;
      case 'hdtb-tls':
        searchTool = document.getElementById('hdtb-tls');
        continue;
      case 'hdtbMenus':
        searchToolDropMenu = document.getElementById('hdtbMenus');
        continue;
      case 'rcnt':
        rcnt = document.getElementById('rcnt');
        continue;
      case 'slim_appbar':
        slimAppbar = document.getElementById('slim_appbar');
        continue;
      case 'center_col':
        centerCol = document.getElementById('center_col');
        continue;
      case 'footcnt':
        footcnt = document.getElementById('footcnt');
        continue;
      case 'nycp':
        nycp = document.getElementById('nycp');
        continue;
      case 'nycuur':
        nyccur = document.getElementById('nyccur');
        continue;
      case 'rhs':
        rhs = document.getElementById('rhs');
        continue;
      }

      switch(mutation.addedNodes[i].className) {
      case 'hdtbU':
        searchFilters = document.getElementsByClassName('hdtbU');
        continue;
      case 'q':
        searchMoreItemLinks = document.getElementsByClassName('q');
      }
    }
  })

  var styleSelectedLink = function styleCurrentLink(element) {
    element.style.lineHeight = '17px';
    element.style.display = 'block';
    element.style.color = '#777';
    element.style.padding = '6px 44px 6px 30px';
    element.style.textDecoration = 'none';
    element.style.backgroundColor = 'inherit';
    element.onmouseover = function(e) {
      e.target.style.backgroundColor = '#f1f1f1';
    };
    element.onmouseout = function(e) {
      e.target.style.backgroundColor = '#fff';
    };
  };

  var styleUnSelectedLink = function styleUnSelectedLink(element) {
    element.style.lineHeight = '17px';
    element.style.display = 'block';
    element.style.padding = '6px 44px 6px 30px';
    element.style.textDecoration = 'none';
    element.style.color = '#DD4B39';
    element.style.fontWeight = 'bold';
  }

  var expandSearchMoreItems = function() {
    while (searchMoreItems.childNodes.length > 0) {
      searchOptionMenu.insertBefore(searchMoreItems.firstChild, searchTool);
    }
  }

  if (ready()) {
    expandSearchMoreItems();

    for (i of [searchOptionMenu.firstChild, slimAppbar, footcnt]) {
      i.style.marginLeft = '200px';
    }

    centerCol.style.marginLeft = '200px';

    if (nycp && nyccur) {
      for (i of [nycp, nyccur]) {
        i.style.marginLeft = '113px';
      }
    }

    rhs.style.marginLeft = '782px';

    leftCol = document.getElementsByClassName('.geo-leftcol');
    if (leftCol.length) {
      removeElement(leftCol);
    }

    leftCol = document.createElement('div');
    leftCol.className = 'geo-leftcol';
    leftCol.style.width = '200px';
    leftCol.style.float = 'left';
    leftCol.style.position = 'absolute';

    for (i = 0; i < searchFilters.length; ++i) {
      searchFilter = searchFilters.item(i).cloneNode(true);
      searchFilter.className = 'geo-ul';
      searchFilter.style.marginBottom = '20px';
      for (j = 0; j < searchFilter.childNodes.length; ++j) {
        nd = searchFilter.childNodes[j];
        nd.className = 'geo-li';

        ndLinks = nd.getElementsByTagName('a');
        if (ndLinks.length) {
          for (k = 0; k < ndLinks.length; ++k) {
            ndLink = ndLinks.item(k);
            styleSelectedLink(ndLink);
            ndLink.addEventListener('click', function(element) {
              startObserver(observer, expandOnSearchPageTarget, expandOnSearchPageConfig);
            });
          }
        } else {
          styleUnSelectedLink(nd);
        }
      }
      leftCol.appendChild(searchFilter);
    }

    rcnt.insertBefore(leftCol, rcnt.firstChild);

    // removeElement(searchMore);
    // removeElement(searchMoreItems);
    // searchMore.style.display = 'none';
    // removeElement(searchTool);
    // removeElement(searchToolDropMenu);

    observer.disconnect();
  }
};
var expandOnSearchPageObserver = new MutationObserver(expandOnSearchPage);
var expandOnSearchPageTarget = document;
var expandOnSearchPageConfig = { childList: true, attributes: true, subtree: true };


// Main
(function main() {
  if (linkList && moreLinks) {
    expandOnHomePage();
  }
  startObserver(expandOnSearchPageObserver, expandOnSearchPageTarget, expandOnSearchPageConfig);
})();
