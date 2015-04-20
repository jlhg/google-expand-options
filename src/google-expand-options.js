'use strict';

// Remove element
var removeElement = function(element) {
  element.parentNode.removeChild(element);
};

// Home page
var linkList = document.getElementById('gbzc');
var moreLinks = document.getElementById('gbmm');
var expandOnHomePage = function() {
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
var searchOptionMenu = document.getElementById('hdtb-msb');
var searchMore = document.getElementById('hdtb-more');
var searchMoreItems = document.getElementById('hdtb-more-mn');
var searchTool = document.getElementById('hdtb-tls');
var expandOnSearchPage = function() {
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
  var item;
  var itemLink;
  var leftCol;
  var searchFilter;

  while (searchMoreItems.childNodes.length > 0) {
    item = searchMoreItems.firstChild;
    searchOptionMenu.insertBefore(item, searchTool);
  }

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
          ndLink.style.lineHeight = '17px';
          ndLink.style.display = 'block';
          ndLink.style.color = '#777';
          ndLink.style.padding = '6px 44px 6px 30px';
          ndLink.style.textDecoration = 'none';
          ndLink.style.backgroundColor = 'inherit';
          ndLink.onmouseover = function(e) {
            e.target.style.backgroundColor = '#f1f1f1';
          };
          ndLink.onmouseout = function(e) {
            e.target.style.backgroundColor = '#fff';
          };
        }
      } else {
        nd.style.lineHeight = '17px';
        nd.style.display = 'block';
        nd.style.padding = '6px 44px 6px 30px';
        nd.style.textDecoration = 'none';
        nd.style.color = '#DD4B39';
        nd.style.fontWeight = 'bold';
      }
    }
    leftCol.appendChild(searchFilter);
  }

  rcnt.insertBefore(leftCol, rcnt.firstChild);

  removeElement(searchMore);
  removeElement(searchMoreItems);
  removeElement(searchTool);
  removeElement(searchToolDropMenu);
};

// Main
(function main() {
  if (linkList && moreLinks) {
    expandOnHomePage();
  }

  if (searchOptionMenu && searchMore && searchTool) {
    expandOnSearchPage();
  }
})();
