// an example to create a new mapping `ctrl-y`
mapkey("<Ctrl-y>", "Show me the money", function() {
  Front.showPopup(
    "a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close)."
  );
});

// an example to replace `T` with `gt`, click `Default mappings` to see how `T` works.
map("gt", "T");

// an example to remove mapkey `Ctrl-i`
unmap("<Ctrl-i>");
unmap("gs");
mapkey(
  "zz",
  "Choose a tab",
  function() {
    Front.chooseTab();
  },
  { domain: /github\.com/i }
);
mapkey(
  "zz",
  "Show usage",
  function() {
    Front.showUsage();
  },
  { domain: /google\.com/i }
);
// mapkey('gS', '#12View page source', function() {
//    RUNTIME("viewSource", { tab: { tabbed: true }});
// });
mapkey("gs", "#12Open Vivaldi Settings", function() {
  tabOpenLink("vivaldi://settings/");
});
mapkey("gS", "#12Open Chrome Settings", function() {
  tabOpenLink("chrome://settings/");
});

mapkey("gS", "#12Open Chrome Settings", function() {
  tabOpenLink("chrome://settings/");
});

mapkey("sc", "#12Search current site", function() {
  tabOpenLink("https://google.com/search?q=site:" + location.hostname + " ");
});

// click `Save` button to make above settings to take effect.
Hints.style(`
    // border: solid 1px #ff5555;
    // border-radius: 100px;
    // padding: 4px;
    // color: #ffbaba;
    // background: none;
    // background-color: #000000;
    // font-family: Fira Code;
    border: solid 1px #ff5555;
    border-radius: 100px;
    padding: 4px;
    color: #ff0000;
    background: none;
    background-color: #ffffff;
    font-family: Fira Code;
    box-shadow: rgb(255, 7, 7) 0px 3px 7px 0px;
`);

settings.theme = `
.sk_theme input {
    font-family: "Fira Code";
}
.sk_theme .url {
    font-size: 10px;
}
#sk_omnibarSearchResult li div.url {
    font-weight: normal;
}
.sk_theme .omnibar_timestamp {
    font-size: 11px;
    font-weight: bold;
}
.sk_theme .omnibar_visitcount {
    font-size: 11px;
    font-weight: bold;
}
body {
    font-family: "Fira Code", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 14px;
}
kbd {
    font: 11px "Fira Code", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}
#sk_omnibarSearchArea .prompt, #sk_omnibarSearchArea .resultPage {
    font-size: 12px;
}
.sk_theme {
    background: #282a36;
    color: #f8f8f2;
}
.sk_theme tbody {
    color: #ff5555;
}
.sk_theme input {
    color: #ffb86c;
}
.sk_theme .url {
    color: #6272a4;
}
#sk_omnibarSearchResult>ul>li {
    background: #282a36;
}
#sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: #282a36;
}
.sk_theme .annotation {
    color: #6272a4;
}
.sk_theme .focused {
    background: #44475a !important;
}
.sk_theme kbd {
    background: #f8f8f2;
    color: #44475a;
}
.sk_theme .frame {
    background: #8178DE9E;
}
.sk_theme .omnibar_highlight {
    color: #8be9fd;
}
.sk_theme .omnibar_folder {
    color: #ff79c6;
}
.sk_theme .omnibar_timestamp {
    color: #bd93f9;
}
.sk_theme .omnibar_visitcount {
    color: #f1fa8c;
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: #282a36;
}
.sk_theme .prompt, .sk_theme .resultPage {
    color: #50fa7b;
}
.sk_theme .feature_name {
    color: #ff5555;
}
.sk_omnibar_middle #sk_omnibarSearchArea {
    border-bottom: 1px solid #282a36;
}
#sk_status {
    border: 1px solid #282a36;
}
#sk_richKeystroke {
    background: #282a36;
    box-shadow: 0px 2px 10px rgba(40, 42, 54, 0.8);
}
#sk_richKeystroke kbd>.candidates {
    color: #ff5555;
}
#sk_keystroke {
    background-color: #282a36;
    color: #f8f8f2;
}
kbd {
    border: solid 1px #f8f8f2;
    border-bottom-color: #f8f8f2;
    box-shadow: inset 0 -1px 0 #f8f8f2;
}
#sk_frame {
    border: 4px solid #ff5555;
    background: #8178DE9E;
    box-shadow: 0px 0px 10px #DA3C0DCC;
}
#sk_banner {
    border: 1px solid #282a36;
    background: rgb(68, 71, 90);
}
div.sk_tabs_bg {
    background: #f8f8f2;
}
div.sk_tab {
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#6272a4), color-stop(100%,#44475a));
}
div.sk_tab_title {
    color: #f8f8f2;
}
div.sk_tab_url {
    color: #8be9fd;
}
div.sk_tab_hint {
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f1fa8c), color-stop(100%,#ffb86c));
    color: #282a36;
    border: solid 1px #282a36;
}
#sk_bubble {
    border: 1px solid #f8f8f2;
    color: #282a36;
    background-color: #f8f8f2;
}
#sk_bubble * {
    color: #282a36 !important;
}
div.sk_arrow[dir=down]>div:nth-of-type(1) {
    border-top: 12px solid #f8f8f2;
}
div.sk_arrow[dir=up]>div:nth-of-type(1) {
    border-bottom: 12px solid #f8f8f2;
}
div.sk_arrow[dir=down]>div:nth-of-type(2) {
    border-top: 10px solid #f8f8f2;
}
div.sk_arrow[dir=up]>div:nth-of-type(2) {
    border-bottom: 10px solid #f8f8f2;
}

div.myHint {
  position: absolute;
  display: block;
  font-size: 8pt;
  font-weight: bold;
  color: rgb(255, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 7px 0px;
  width: auto;
  padding: 0px 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, red),
    color-stop(100%, blue)
  );
  border-image: initial;
  border-radius: 3px;
  border: solid 1px #282a36;
}

}`;
