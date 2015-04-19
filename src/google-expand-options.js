var linkList = document.getElementById('gbzc');
var moreLinks = document.getElementById('gbmm');

if (linkList && moreLinks) {
  linkList.removeChild(linkList.lastChild);

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
      moreLinks.removeChild(option);
    }
  }
}
