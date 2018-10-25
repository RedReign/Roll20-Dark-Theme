// ==UserScript==
// @name          Roll20 Dark
// @namespace     https://openuserjs.org/scripts/RedReign/Roll20_Dark
// @description	  A dark theme for Roll20.net.
// @author        RedReign
// @include       https://app.roll20.net/editor*
// @run-at        document-start
// @version       2018.10.25.1
// @license       GPL-3.0-or-later
// ==/UserScript==
(function() {var css =`
body {
background:url(http://subtlepatterns.com/patterns/dark_leather.png)!important;
}

#floatingtoolbar, #floatinglayerbar {
	background-color:hsl(0,0%,10%) !important;
	border: none !important;
	box-shadow: none !important;
	width: 40px !important;
}

#floatingtoolbar div.submenu {
	left: 40px !important;
	padding: 0 !important;
	top: 0 !important;
}

#floatingtoolbar div.submenu .pictos, #floatingtoolbar div.submenu .pictosthree, #floatingtoolbar div.submenu .pictostwo {
	left: 15px !important;
	position: absolute !important;
	text-align: center !important;
	width: 20px !important;
}

#floatingtoolbar div.submenu ul {
	background-color:#333 !important;
	border: 0 !important;
	border-radius: 0 !important;
	padding: 0 !important;
	width: 190px !important;
}

#floatingtoolbar div.submenu ul li {
	color:hsl(0,0%,80%) !important;
	padding-left: 45px !important;
	padding-right: 20px !important;
}

#floatingtoolbar li.activebutton,
#floatingtoolbar li:hover
#floatingtoolbar div.submenu ul li:hover,
#floatinglayerbar li:hover,
#editinglayer.map div.submenu li.choosemap,
#editinglayer.objects div.submenu li.chooseobjects,
#editinglayer.foreground div.submenu li.chooseforeground,
#editinglayer.gmlayer div.submenu li.choosegmlayer,
#editinglayer.walls div.submenu li.choosewalls,
#editinglayer.weather div.submenu li.chooseweather,
#floatinglayerbar.map li.choosemap,
#floatinglayerbar.objects li.chooseobjects,
#floatinglayerbar.gmlayer li.choosegmlayer,
#floatinglayerbar.walls li.choosewalls,
#floatinglayerbar.weather li.chooseweather,
#floatinglayerbar.foreground li.chooseforeground,
#measure li.activerulermode {
background-color: #282150 !important;
}

#floatingtoolbar div.submenu ul li span {
	padding: 0 !important;
}

#floatingtoolbar li, #floatinglayerbar li {
	border: 0 !important;
	color:hsl(0,0%,80%) !important;
}

#floatingtoolbar li.activebutton,
#floatingtoolbar li:hover {
background-color: #282150 !important;
}

#page-toolbar {
	background-color:hsl(0,0%,10%) !important;
	border-radius: 0 !important;
}

#page-toolbar .availablepage {
	box-sizing: border-box !important;
}

#page-toolbar .availablepage span {
	color:hsl(0,0%,80%) !important;
	font-size: 12px !important;
}

#page-toolbar .handle {
	background:hsl(0,0%,10%) !important;
	border:1px solid hsl(0,0%,0%)!important;
	border-radius: 0 0 100% 100% !important;
	color:hsl(0,0%,80%) !important;
}

#editor-wrapper {
	overflow:scroll!important; /// CHANGE HIDDEN TO SCROLL FOR SCROLLBARS
}

.ui-widget-content {
	color:hsl(0,0%,75%)!important;
	border:1px solid black!important;
	background:hsl(0,0%,10%)!important;
}

.ui-dialog-titlebar-close {
	background:hsl(0,0%,80%)!important;
}

#rightsidebar {
	background-color:hsl(0,0%,0%)!important;
}

#sidebarcontrol {
	opacity: .7 !important;
	padding: 0 !important;
	-webkit-transform: translateX(0) rotate(-90deg) !important;
	-moz-transform: translateX(0) rotate(-90deg) !important;
	width: 50px !important;
	text-align: center !important;
	border:1px solid hsl(0,0%,0%)!important;
	font-size: 10px !important;
	color:hsl(0,0%,80%) !important;
	background-color:hsl(0,0%,10%) !important;
	height: 24px !important;
	line-height: 35px !important;
	text-transform: uppercase !important;
	letter-spacing: 2px !important;
	-webkit-transform-origin: 100% 100% !important;
	-moz-transform-origin: 100% 100% !important;
	border-radius: 100% 100% 0 0 !important;
	top: 50% !important;
	margin-top: -62.5px !important;
	transition: width, margin-top, opacity, height, font-size .5s,.5s,.5s,.5s,.5s !important;
}

#sidebarcontrol:hover {
	opacity: 1 !important;
	width: 75px !important;
	margin-top: -75px !important;
	height: 28px !important;
	font-size: 14px !important;
	transition: width, margin-top, opacity, height, font-size .5s,.5s,.5s,.5s,.5s !important;
}

#sidebarcontrol .fonticon-menu {
	display: none !important;
}

#sidebarcontrol:after {
	content: \'Menu\' !important;
}

code {
	color:hsl(0,0%,750%)!important;
	background-color:hsl(0,0%,10%)!important;
	border:1px solid hsl(0,0%,0%)!important;
}

#textchat .formula,#textchat .rolled {
	background:hsl(0,0%,10%)!important;
	border:1px solid hsl(0,0%,0%)!important;
}

#textchat .message {
	color:hsl(0,0%,80%)!important;
	background-color:hsl(0,0%,10%)!important;
	border:none!important;
	border-right:1px solid hsl(0,0%,50%)!important;
   height: auto !important;
   padding-top: 0px !important;
}

#textchat .by {
	color:hsl(44,63%,63%)!important;
}

#textchat .rolled {
	color:hsl(0,0%,75%)!important;
}

#textchat .message.system .spacer {
	background-color:hsl(0,0%,50%)!important;
}

#textchat .message.system {
	color:hsl(360,100%,100%)!important;
}

#textchat .userscript-sharelink {
	background-color:black !important;
}

#textchat .userscript-commandintro {
	color:hsl(360,100%,100%)!important;
}

#textchat .message.rollresult {
	color:hsl(0,0%,75%)!important;
}

#textchat .message.private .spacer {
	background-color:hsl(0,0%,50%)!important;
}

#textchat .message.rollresult .spacer {
	background-color:hsl(0,48%,40%)!important;
}

#textchat .message .spacer {
	background-color:hsl(0,0%,50%)!important;
	margin-right:-5px!important;
	height:1px!important;
}

#textchat .message.emote {
	color:hsl(30,40%,45%)!important;
}

#textchat .message.emote .spacer {
	background-color:hsl(0,0%,50%)!important;
}

#rightsidebar ul.tabmenu {
	top:2px!important;
	right:1px!important;
	background-color:hsl(0,0%,10%)!important;
}

.ui-tabs .ui-tabs-nav {
	padding:1px 5px!important;
	border-bottom:none!important;
}

.ui-state-default,.ui-widget-content .ui-state-default,.ui-widget-header .ui-state-default {
	box-shadow:none !important;
	text-shadow:none !important;
}

#textchat-input {
	width:300px!important;
	right:0!important;
	bottom:0!important;
	background-color:hsl(0,0%,10%)!important;
	padding:12px 1px 5px 5px!important;
	margin:0 -5px 0 0!important;
	border-top:0 solid hsl(0,0%,0%)!important;
	text-align:left!important;
}

.btn {
background-image: none !important;
	text-shadow:none!important;
}

.btn:hover {
	color:hsl(0,0%,100%)!important;
}

textarea,select,input,table,
.ui-dialog .btn:not(.sheet-wrapper-button),
#textchat-input .btn,
#rightsidebar .btn,
.tokenactions .btn {
	 background-color:hsl(0,0%,10%)!important;
	 color:hsl(0,0%,75%)!important;
	 border-color:black!important;
}

.ui-dialog-buttonset button[type='button']:hover,
.ui-dialog .btn:not(.sheet-wrapper-button):hover,
#textchat-input .btn:hover,
#rightsidebar .btn:hover,
.tokenactions .btn:hover {
	background-color:hsl(0,0%,20%)!important;
	color:hsl(0,0%,100%)!important;
}

.diceroll .didroll {
	text-shadow:0 0 10px hsl(0,0%,0%)!important;
	color:hsl(0,0%,75%)!important;
}

.diceroll.critfail .didroll {
	text-shadow:0 0 10px hsl(0,100%,50%)!important;
	color:hsl(0,80%,50%)!important;
}

.diceroll.critsuccess .didroll {
	text-shadow:0 0 10px hsl(100,50%,50%)!important;
	color:hsl(100,50%,50%)!important;
}

.diceroll.importantroll .didroll {
	text-shadow:0 0 10px hsl(240,100%,65%)!important;
	color:hsl(240,100%,65%)!important;
}

.ui-dialog .ui-dialog-buttonpane {
	background-color:hsl(0,0%,15%)!important;
	border-top:none!important;
	box-shadow:none!important;
}

.ui-dialog .ui-dialog-titlebar {
	border:none!important;
	background-color:hsl(0,0%,15%)!important;
}

#initiativewindow ul li {
	border-bottom:1px solid hsl(0,0%,10%)!important;
	background-color:hsl(0,0%,25%)!important;
	text-shadow:none!important;
}

#initiativewindow ul li:first-child {
	background-color:hsl(100,30%,25%)!important;
}

.ui-widget-content a,.ui-dialog .ui-dialog-title,label,h1,h2,h3,h4,h5,h6 {
	color:hsl(0,0%,75%)!important;
}

hr {
	border-color:hsl(0,0%,15%)!important;
}

.table-striped tbody tr:nth-child(odd) td,.table-striped tbody tr:nth-child(odd) th {
	background-color:hsl(0,0%,25%)!important;
}

.table tbody tr:hover td,.table tbody tr:hover th {
	background-color:hsl(0,0%,30%)!important;
}

.table th,.table td {
	border-color:hsl(0,0%,10%)!important;
	background-color:hsl(0,0%,25%)!important;
}

#imagedialog .searchbox {
	background:none!important;
}

#textchat .inlinerollresult {
	background-color: hsl(0, 0%, 10%) !important;
	border: 2px solid hsl(50, 30%, 30%) !important;
	color:hsl(0,0%,90%) !important;
}

#textchat .inlinerollresult.importantroll {
	border: 2px solid hsl(240, 100%, 65%) !important;
}

#textchat .inlinerollresult.fullcrit {
	border: 2px solid hsl(104, 79%, 39%) !important;
}

#textchat .inlinerollresult.fullfail {
	border: 2px solid hsl(0, 79%, 39%) !important;
}

div.dd-content {
	color:hsl(0,0%,75%) !important;
}

div.dd-content:hover {
	background-color:hsl(0,0%,40%) !important;
}

[class=\'sheet-row\'] {
	color:hsl(0,0%,50%) !important;
//    padding-top: 5px !important;
//    padding-bottom: 5px !important;
}

.ui-tabs .ui-tabs-nav li:hover,
.ui-tabs .ui-tabs-nav li a:hover {
	background: hsl(0,0%,20%) !important;
	border-bottom: 2px solid hsl(44,63%,63%) !important;
}

li.ui-tabs-active.ui-state-active:focus {
	outline: none;
}

li.ui-tabs-active.ui-state-active:focus {
	border-color: transparent !important;
	outline: none;
}

li.ui-tabs-active.ui-state-active:hover,
li.ui-tabs-active.ui-state-active > a:hover {
	color:hsl(0,0%,100%) !important;
}

li.ui-tabs-active.ui-state-active > a {
	outline: none;
	border-bottom: 2px solid hsl(44,63%,63%) !important;
	color:hsl(0,0%,96%) !important;
}

.dd-item.character > div.dd-content > .name {
	color:hsl(214,100%,79%) !important;
}

.dd-item.handout .dd-content > .name {
	color:hsl(214,100%,79%) !important
}

.sheet-container {
	background-color:hsl(0,0%,10%) !important;

}

.sheet-desc {
	color:hsl(0,0%,75%) !important;
}

.sheet-header {
	color:hsl(0,0%,100%) !important;
}

.sheet-rolltemplate-dmg {
	margin-top: 10px;
}

.sheet-rolltemplate-dmg > .sheet-desc {
	background-color: transparent !important;
}

.sheet-sublabel {
	margin-top: 3px !important;
}

.sheet-rolltemplate-npc,
.sheet-rolltemplate-npcaction .sheet-container,
.sheet-rolltemplate-npcatk,
.sheet-rolltemplate-npcdmg,
.sheet-rolltemplate-simple {
	border-color:hsl(0,0%,50%) !important;
	background-color:transparent !important;
}

.charsheet .sheet-red,
.charsheet .sheet-npc .sheet-display .sheet-red input,
.charsheet .sheet-npc .sheet-display .sheet-red span {
	color:hsl(0,0%,100%) !important;
}

.sheet-display .sheet-row > span:nth-child(1) {
	color:hsl(0,100%,50%) !important;
}

[name=\attr_name_display\]  {
	color:hsl(0,100%,50%) !important;
	font-weight: bold;
}

.charsheet .sheet-options .sheet-row > span, [name=\attr_name\] {
	color:hsl(0,0%,100%) !important;
}

[name=\attr_desc\]  {
	color:hsl(0,0%,80%) !important;
}

.charsheet .sheet-triangle,
.sheet-row.sheet-actiontitle,
.charsheet .sheet-header input,
.charsheet .sheet-header select,
.charsheet .sheet-hp .sheet-top input,
.charsheet .sheet-hdice-dsaves-container .sheet-top input[type=text] {
	border-color:hsl(0,0%,25%) !important
}

.sheet-value > input {
	background-color: transparent !important;
	color:hsl(0,0%,0%) !important;
}

.sheet-rolltemplate-atk .sheet-sublabel span,
.sheet-rolltemplate-atkdmg .sheet-sublabel span,
.sheet-rolltemplate-dmg .sheet-sublabel span,
.charsheet {
	color:hsl(0,0%,80%) !important;
}

.ui-autocomplete-input {
	color:hsl(0,0%,80%) !important;
}

textarea {
	color:hsl(0,0%,100%) !important;
}

.nav.nav-tabs > li.active > a {
	color:hsl(0,0%,96%) !important;
	font-weight: bold;
	background-color: transparent;
	border-bottom: 2px solid hsl(44,63%,63%) !important;
}
.sheet-spell-level input {
	background-color:hsl(300,100%,50%) !important;
	color:hsl(300,100%,50%) !important;
}

.sheet-spell-level .sheet-expended {
	border-left: none !important;
}

.repcontainer {
	margin-top: 10px;
}

.repcontrol {
	margin-bottom: 5px;
}

.sheet-title > button {
	height: 40px;
}

.sheet-attr-container > button > input {
	min-width: 20px !important;
}

.dd-sortablehandle {
	color: whitesmoke !important;
}

.sheet-spell-level .sheet-label {
	color:hsl(0,0%,0%) !important;
}

.sheet-spellcard.btn.ui-draggable {
	background-color:transparent !important;
}

.nav-tabs {
	border-color:hsl(0,0%,47%) !important;
}

.nav-tabs>.active>a,
.nav-tabs>.active>a:hover {
	background-color: transparent !important;
	border-color:transparent !important;
}

.nav-tabs a:hover,
.nav-tabs a:hover {
	background-color: transparent !important;
	border-color:hsl(0,0%,100%) !important;
	border-bottom: 1px solid hsl(0,0%,100%) !important;
	color:hsl(0,0%,80%) !important;
}

.inlinerollresult {
	margin: 3px !important;
}

.sheet-rolltemplate-npc,
.sheet-rolltemplate-npcaction .sheet-container,
.sheet-rolltemplate-npcatk {
	width: 180px;
	margin-top: 5px;
}

.sheet-desc span.inlinerollresult {
	padding-top: 5px !important;
	padding-bottom: 5px !important;
}

.sheet-savedc span.inlinerollresult {
	padding: 4px !important;
}

.sheet-savedc > span,
.sheet-save .sheet-label > span,
.sheet-rolltemplate-simple .sheet-label > span,
.message .sheet-rolltemplate-simple .sheet-header > span,
.message .sheet-rolltemplate-npc .sheet-header, [name=\'roll_npc_dex\'] > span:first-child,
[name=\'roll_npc_str\'] > span:first-child, [name=\'roll_npc_cha\'] > span:first-child,
[name=\'roll_npc_wis\'] > span:first-child, [name=\'roll_npc_int\'] > span:first-child,
[name=\'roll_npc_con\'] > span:first-child, [type=\'roll\'], [name=\attr_npcd_name\] {
	color:hsl(44,63%,63%) !important;
	border-color:hsl(0,0%,50%) !important;
}

#textchat .message {
	padding-top: 3px;
}

.message.general {
	overflow-x: hidden;
	height: 31px;
}

#imagedialog #librarysearchroot .googleresult {
	background-color:hsl(0,0%,10%) !important;
}

#imagedialog #librarysearchroot .marketplacead {
	background-color:hsl(0,0%,10%) !important;
}

#imagedialog #librarysearchroot .expandsearch {
	background-color:hsl(0,0%,10%) !important;
}

#imagedialog #librarysearchroot .alert.orange {
	background-color:hsl(0,0%,10%) !important;
	color:hsl(0,0%,80%) !important;
	border-color:transparent !important;
	text-shadow:none !important;
}

.sheet-arrow-right {
	border-color:hsl(0,55%,45%) !important;
}

.sheet-italics {
	color:hsl(0,0%,70%) !important;
}

.sheet-bold {
	color:hsl(0,0%,90%) !important;
}

.sheet-damagetemplate > .sheet-result:not(:last-child) {
	border-bottom: 1px solid hsl(0,50%,50%);
}

.sheet-rolltemplate-atkdmg .sheet-damagetemplate .sheet-result,
.sheet-rolltemplate-dmg .sheet-damagetemplate .sheet-result {
	padding-bottom: 5px;
}

.sheet-action sheet-compendium-drop-target ui-droppable {
	color:hsl(300,100%,50%);
}

.charsheet .sheet-attacks .sheet-options-flag:checked + span,
.charsheet .sheet-spell .sheet-options-flag:checked + span,
.charsheet .sheet-tool .sheet-options-flag:checked + span,
.charsheet .sheet-npc .sheet-npc_options-flag:checked + span,
.charsheet .sheet-trait .sheet-options-flag:checked + span,
.charsheet .sheet-action .sheet-options-flag:checked + span,
.charsheet .sheet-equipment .sheet-inventorysubflag:checked + span {
	color:hsl(44,63%,63%) !important;
}

.charsheet .sheet-attacks .sheet-options-flag + span,
.charsheet .sheet-spell .sheet-options-flag + span,
.charsheet .sheet-tool .sheet-options-flag + span,
.charsheet .sheet-npc .sheet-npc_options-flag + span,
.charsheet .sheet-trait .sheet-options-flag + span,
.charsheet .sheet-action .sheet-options-flag + span,
.charsheet .sheet-equipment .sheet-inventorysubflag + span {
	color:hsl(44,63%,63%) !important;
}

.keywords,
#player_displayname,
#videobroadcasttype,
#videoreceivetype,
#videoplayersize,
#videoplayerlocation,
.videotech,
#videobandwidth,
#movablevideo,
#globalvolume,
#decksize {
	background-color:hsl(0,0%,10%) !important;
	color:hsl(0,0%,75%) !important;
}

.sheet-rolltemplate-spell {
	margin-top: 10px;
}

.sheet-tab-button.sheet-core,
.sheet-advantagetoggle {
	margin-top: 1px !important;
}

.avatar {
	margin-top: 1px;
}

.charsheet .sheet-advantagetoggle input[type=radio]:checked + span,
.charsheet input[type=radio].sheet-tab-button:checked + span {
	background-color:hsl(44,63%,63%) !important;
	color:hsl(0,0%,0%) !important;
}

.charsheet .sheet-body {
	margin-top: 25px !important;
}

.charsheet .repcontrol .repcontrol_add:before {
	background-color:hsl(122,46%,54%) !important;
	margin-right: 5px;
}

.charsheet .repcontrol .repcontrol_edit:after {
	background-color:hsl(30,90%,59%) !important;
	margin-left: 5px;
}

.sheet-cantrips {
	background-color:hsl(0,0%,10%) !important;
	border: 1px solid #000 !important;
}

.ui-dialog .charsheet input[type=number] {
	width: 3.5em;
	background-color:transparent !important; //FIXES USES ON CHARACTER SHEET
	color:hsl(0,0%,96%) !important;
}

.sheet-total,
.sheet-expended {
	border-bottom: 1px solid hsl(0,0%,96%) !important;
}

.charsheet .sheet-spell-level .sheet-total,
.charsheet .sheet-spell-level .sheet-expended {
	display: inline-block;
	border-bottom: 1px solid hsl(0,0%,0%)!important;
	height: 25px;
	border-radius: 5px;
	text-align: center;
	margin-left: -20px;
	background-color:transparent !important;
}

.charsheet .sheet-header .sheet-header-info select {
	padding-left: 5px !important;
	padding-right: 5px !important;
}

.charsheet .sheet-cantrips > .sheet-label {
	color:hsl(0,0%,96%) !important;
	font-weight: 300 !important;
}

input[name=\attr_gp\] {
	color:hsl(51,100%,50%) !important;
}

input[name=\attr_pp\] {
	color:hsl(40,5%,89%) !important;
}

[type=\'roll\'] > span, .sheet-attr {
	color:hsl(0,0%,100%) !important;
}

input[name=\attr_sp\] {
	color:hsl(0,0%,75%) !important;
}

input[name=\attr_cp\] {
	color:hsl(29,57%,46%) !important;
}

.attributesabilities .abil {
	background-color: transparent !important;
}


[name=\roll_death_save\], [name=\roll_hit_dice\]  {
	color:hsl(0,0%,100%) !important;
}

[name=\attr_ac\], [name=\attr_initiative_bonus\], [name=\attr_speed\] {
	color:hsl(0,0%,100%) !important;
}

.sheet-label {
	color:hsl(0,0%,80%);
}

#measure img {
	-webkit-filter: brightness(2.3) !important;
}

.sheet-wide {
	color:hsl(0,0%,90%) !important;
}

//
//
// RED'S EDITS
// Remove the slashes at the beginning of the next three lines if you are cool and want to feel like you're playing Maplestory TTG
//body, a:hover {
//cursor: url(http://cur.cursors-4u.net/games/gam-4/gam308.cur), progress !important;
//}

.ui-dialog-buttonset button[type='button'],
.ui-dialog-buttonset > button {
background-color: #1a1a1a !important;
border: 1px solid black !important;
line-height: 18px;
border-radius: 4px !important;
padding: 4px 10px 4px !important;
box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05) !important;
}

li.handout.compendium-item .namecontainer {
box-shadow: none !important;
}


#measure.activebutton > img {
-webkit-filter: brightness(0) !important;
}

#measure:not(.activebutton) > img {
opacity: 1 !important;
-webkit-filter: brightness(2.5) !important;
}
.searchbox > input,
.content > #player-search {
background-color: #444 !important;
color: hsl(0,0%,0%) !important;
}

table.config-table tbody tr:nth-child(2n+1) {
background-color: hsl(0,0%,20%) !important;
}

.charsheet .sheet-death-saving-throws-proficiency-wrapper .sheet-round-checkbox-wrapper span {
background-color: #1a1a1a;
}
.dd-handle {
color: transparent !important;
background-color: #444 !important;
}

#secondary-toolbar {
background-color:#222 !important;
}

#secondary-toolbar li{
border-right: 1px solid #000 !important;
}

#measure_sticky_clear {
background-color: #111 !important;
border-color: black !important;
}

.dd-list .journalitem .name, .dd-list .library-item .name {
position: static !important;
}

#textchat .message.you {
	color:hsl(0,0%,80%)!important;
	background-color:hsl(250,25%,15%)!important;
}

#textchat .message.emote {
	background-color:hsl(20,25%,15%)!important;
}

#textchat .message.private {
	background-color:hsl(58,25%,15%)!important;
}

.dd-item.handout .dd-content .redactor_editor > .name {
	background-color:hsl(0,0%,20%) !important
}
li.search-choice {
background-color: #333 !important;
background-image: linear-gradient(#444444 20%,#404040 50%,#383838 52%,#3e3e3e 100%) !important;
color: #ccc !important;
}

.textboxlist-bit-box {
background: #223 !important;
}

.textboxlist-bits {
border: 1px solid #000 !important;
}

.chosen-container-multi .chosen-choices {
border: 1px solid #000 !important;
}

.textboxlist-autocomplete-placeholder, .textboxlist-autocomplete-results {
opacity: 1 !important;
filter: alpha(opacity=100) !important;
background: #111 !important;
-webkit-box-shadow: 0 3px 3px #222 !important;
-moz-box-shadow: 0 3px 3px #222 !important;
box-shadow: 0 3px 3px #222 !important;
}

.redactor_editor.content {
	background-color: hsl(0,0%,10%) !important;
}

.handouteditor .dropbox {
background-color: #111 !important;
}

.note-editor.note-frame .note-editing-area .note-editable {
color: inherit !important;
}

.note-editor .panel-default > .panel-heading {
background-color: #2a2a2a !important;
border-color: #111 !important;
}

.note-statusbar > .note-resizebar {
background-color: #111 !important;
}

.note-editor.note-frame {
border: 1px solid #000 !important;
}

#containerdiv,
.redactor_box, .redactor_editor, .redactor_editor:focus, div[contenteditable], div[contenteditable]:focus {
	background: #1a1a1a !important;
}

.charactereditor .avatar {
background-color: #1a1a1a !important;
}

img[src='/images/handout.png'] {
	content: url('https://i.imgur.com/zM79lGs.png')!important;
}

img[src='/images/character.png'] {
	content: url('https://i.imgur.com/nZ5EHJd.png')!important;
}

.dd-item .playerdots {
background-color: transparent !important;
}

.chosen-container-multi .chosen-choices {
background-color: #1a1a1a !important;
background-image: none !important;
}

.textboxlist-bit-editable {
border: 1px solid #aaaaaa !important;
}

.artr__side {
    background-color: #1a1a1a !important;
}

.artr__item__top,
.artr__item__bottom {
    background-color:#222 !important;
}

.artr__side__tag[data-state="1"] {
	background-image: linear-gradient(#2a2a2a, #337ab7) !important;
}

.artr__side__tag[data-state="2"] {
	background-image: linear-gradient(#2a2a2a, #8a1a1b) !important;
}

.charsheet {
background: #1a1a1a !important;
}
[type='roll'] > span, .sheet-attr, .sheet-bold span {
color: hsl(0,0%,80%) !important
}

.charsheet .sheet-pseudo-button-wrapper > span {
background-color: #444 !important;
}

.charsheet .sheet-pseudo-button-wrapper input[type='radio']:checked + span,
.charsheet .sheet-pseudo-button-wrapper.sheet-visible-button > span[class='sheet-small-label'],
.charsheet .sheet-pseudo-button-wrapper input[type='radio']:checked + span[class='sheet-pc sheet-bold'],
.charsheet .sheet-pseudo-button-wrapper input:checked + span,
.charsheet .sheet-spells .sheet-pseudo-button-wrapper input:checked + span[class='sheet-bold'],
.charsheet div .sheet-pseudo-button-wrapper input[value='settings']:checked + span[class='sheet-pictos'],
.charsheet .sheet-pseudo-button-wrapper input[type='radio']:checked ~ span[class='sheet-npc sheet-bold'],
.charsheet .sheet-pseudo-button-wrapper.sheet-visible-button > input[name$='_rest'] + span {
background-color: #313b92 !important;
}

.sheet-shaped-row .sheet-toggle-edit-mode + span {
background-color: transparent !important;
}

.charsheet .sheet-section-npc .sheet-top-stats {
color: #a1311d !important;
}

.charsheet .sheet-round-checkbox-wrapper input:checked + .sheet-pseudo-circle,
.charsheet .sheet-skill-proficiency[value='proficient'] + span {
background-color: #64b342 !important;
}

.charsheet .sheet-bubble-radio-clear[value='0'] + span.sheet-bubble-clear{
background-color:#1a1a1a !important
}

.charsheet .sheet-round-checkbox-wrapper .sheet-pseudo-circle,
.charsheet .sheet-bubble {
border: 1px solid #444 !important;
}

.charsheet .sheet-wrap-box-title {
text-shadow: none !important;
}

.charsheet .sheet-inspiration-label [type='checkbox']:checked + span {
background: url('http://imgsrv.roll20.net/?src=i.imgur.com/o20JTtU.png') center center no-repeat !important;
-webkit-filter: invert(80%)
}
.charsheet .sheet-gray-background-wrapper {
background-color: #333 !important;
}

.sheet-hit-dice, .sheet-death-saving-throws, .sheet-rest, .sheet-heart, .sheet-shield, .sheet-initiative, .sheet-speed {
background-color: #333 !important
}

.ui-dialog .charsheet .sheet-shaped-row input[type='number'] {
color: hsl(0,0%,80%) !important;
}

.charsheet span[class^='sheet-toggle-'] {
background-color: #444 !important
}

.charsheet .sheet-spells input[type='checkbox']:checked + span,
.charsheet .sheet-spells .sheet-prepared-matters input:checked + span,
.charsheet .sheet-spells input.sheet-toggle-concentration:checked + span.sheet-toggle-concentration,
.charsheet .sheet-spells input.sheet-toggle-ritual:checked + span.sheet-toggle-ritual,
.charsheet .sheet-spells input[class^='sheet-toggle-filter']:checked + span[class^='sheet-toggle-filter'],
.charsheet .sheet-spells input[class^='sheet-toggle-spells-filter']:checked + span[class^='sheet-toggle-spells-filter'],
.charsheet .sheet-spells input[type='checkbox']:checked + span[data-i18n='RITUAL'] {
background-color: #591209 !important;
}

.charsheet .sheet-spells input[type='checkbox'] + span{
background-color: #444 !important;
}

.charsheet .sheet-bubble {
background-color: #444 !important;
}

.charsheet .sheet-bubble-radio-clear:checked ~ .sheet-bubble-radio + .sheet-bubble,
.charsheet .sheet-bubble-radio:checked ~ .sheet-bubble-radio + .sheet-bubble {
background-color: #1a1a1a !important;
}

button[name^='roll_shaped_coinage'] {
background-color: transparent !important;
}

.charsheet label[class^='sheet-slide-toggle-'] {
box-shadow:none !important;
}

.charsheet .sheet-section-settings .sheet-wrap-box {
background-color: #1a1a1a !important;
}

.charsheet .sheet-zebra-rows .sheet-shaped-row:nth-child(2n),
.sheet-rolltemplate-5e-shaped .sheet-zebra {
background-color: #242424 !important;
}

.ui-dialog .charsheet .repcontainer .repitem .itemcontrol {
background-color: rgba(120,120,80,0.40) !important;
}

.charsheet .sheet-classes-select-wrapper {
background: #1a1a1a !important;
}

.sheet-rolltemplate-5e-shaped .sheet-rt-content {
color:hsl(0,0%,80%) !important;
}

.sheet-rolltemplate-5e-shaped .sheet-rt-title {
color: #a11504 !important
}

.charsheet .sheet-shaped-row div span.sheet-heading {
background-color: transparent !important;
}

.charsheet .sheet-section-npc .sheet-npc-content-wrap {
background:#1a1a1a repeat !important;
}

.charsheet .sheet-character-name {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/17bf440add2e0cdb5a6c9395961d272d/raw/8c2b58046ddde9e09d761c3c53d344e2f6d6b35f/nameRibbon.svg') no-repeat !important;
}

.charsheet .sheet-character-header {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/9514856f2d94e236e6614837cc0a3c26/raw/3a0ea72082aa81ee145d6c327994e23ffe72a83c/topRibbonBackground.svg') no-repeat !important;
}

.charsheet .sheet-pointy-end-box-bottom-left, .charsheet .sheet-pointy-end-box-bottom-right, .charsheet .sheet-pointy-end-box-top-left, .charsheet .sheet-pointy-end-box-top-right {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/c245d2673c0c466e4d99a157ad3c6a78/raw/1900f19c90dfd932c64177eed5d04cb0cc5f079f/pointyEndBoxCorner.svg') no-repeat !important;
}

.charsheet .sheet-pointy-end-box-expand-bottom, .charsheet .sheet-pointy-end-box-expand-top {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/d6c1be48e337fece14f2350d84730caf/raw/a298e60d99cfd43270bbeafeca1859fe4ef29593/pointyEndBoxExpandTop.svg') repeat-x !important;
}

.charsheet .sheet-pointy-end-box-expand-left, .charsheet .sheet-pointy-end-box-expand-right {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/a0ecf0168d1d9e909d127714fe5f4068/raw/024f2e0f366b6a5ce3eb828e91068cf483b8b90b/pointyEndBoxSideExpand.svg') left repeat-y !important;
}

.charsheet .sheet-right-ribbon {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/17f52b1c4f990cff3bf04c1ca14426e1/raw/c05dc454460d84b752b8c8841333f5f85d928094/rightRibbon.svg') no-repeat !important;
}

.charsheet .sheet-inspiration {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/5df74f374d39064c79790bba913c462a/raw/cb7a46e757ae6aad8f3383c2269d8e3a4b444f37/inspiration.svg') no-repeat !important;
}

.charsheet .sheet-very-boring-box-bottom-left, .charsheet .sheet-very-boring-box-bottom-right, .charsheet .sheet-very-boring-box-top-left, .charsheet .sheet-very-boring-box-top-right {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/a669b42284ba13ceeb4d5d1d4850b0d7/raw/ab40b145a497fddc5246b11ac22e6786f7971aa8/veryBoringBoxCorner.svg') no-repeat !important;
}

.charsheet .sheet-very-boring-box-expand-bottom, .charsheet .sheet-very-boring-box-expand-top {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/01e52f5edeea446319b96bf2e21e6723/raw/fa8e5ac2ccd63ffa7a82d7f183e26234efde55d5/veryBoringBoxLineBottomExpand.svg') repeat-x !important;
}

.charsheet .sheet-very-boring-box-expand-left, .charsheet .sheet-very-boring-box-expand-right {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/1441163b95e39a7aa9e4cb0b387eb536/raw/247464bd86f8b2d767413e902a79cb36bd742dff/veryBoringBoxLineExpand.svg') repeat-y !important;
}

.charsheet .sheet-abilities-background {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/095e81e22e2394519fff623894d4e257/raw/23590048548cd1ed67f993350a00dd031f38c47b/abilityBackgroundEnd.svg') center top no-repeat,url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/87436c1c4cdd24af9cf5b20d9079748a/raw/da1e96f25151a6eef9af6e815309b8a50ca29f96/abilityBackgroundEndBottom.svg') center bottom no-repeat,#333 !important;
}

.charsheet .sheet-ability-wrapper {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/57a9b42ab7b021fb2697b775b313a2a9/raw/4d84509e6800707db142128d418d90b345682b92/ability.svg') no-repeat !important;
}

.charsheet .sheet-shield {
background: #333 url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/0b95c6cdcaec13307e4f00d7bd3205f2/raw/5877203d71ac280e988e43abf27fdaceeefce836/ac.svg') no-repeat !important;
}

.charsheet .sheet-heart {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/e24e1aaf31d9a4c23960414afad1145b/raw/a8f266bbbf9408f91b7b9f50dfa5cff41463968c/heart.svg') no-repeat !important;
}

.charsheet .sheet-gray-background-bottom-left, .charsheet .sheet-gray-background-bottom-right, .charsheet .sheet-gray-background-top-left, .charsheet .sheet-gray-background-top-right {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/e36989cf8004ae96734de8330375a810/raw/8470eb7d7b3f4771f429f7d22b6d50525966a735/grayBackgroundCorner.svg') no-repeat !important;
}

.sheet-heart button {
background-color: transparent !important;
}

.charsheet .sheet-death-saving-throws, .charsheet .sheet-hit-dice, .charsheet .sheet-initiative, .charsheet .sheet-rest, .charsheet .sheet-speed {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/cef80b44113b2b25d6a563861ef54275/raw/b1219d2ba4a3f721df88e4a4aea5790b412bb05c/box.svg') no-repeat !important;
}

.charsheet .sheet-indented-box-horizontal-bottom-left, .charsheet .sheet-indented-box-horizontal-bottom-right, .charsheet .sheet-indented-box-horizontal-rounded-bottom-left, .charsheet .sheet-indented-box-horizontal-rounded-bottom-right, .charsheet .sheet-indented-box-horizontal-rounded-bottom-top-left, .charsheet .sheet-indented-box-horizontal-rounded-bottom-top-right, .charsheet .sheet-indented-box-horizontal-top-left, .charsheet .sheet-indented-box-horizontal-top-right {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/7802ae10fa22c302eb173ead628c83e1/raw/0aabdf83a688dcadb5979edadfd359670102c856/indentedBoxHorizontalCorner.svg') no-repeat !important;
}

.charsheet .sheet-indented-box-horizontal-rounded-bottom-bottom-left, .charsheet .sheet-indented-box-horizontal-rounded-bottom-bottom-right, .charsheet .sheet-indented-box-horizontal-rounded-top-left, .charsheet .sheet-indented-box-horizontal-rounded-top-right {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/92c7126f6400f44fed1e3cfe18814693/raw/0c708896da0a0c16f83fd29b97a4fa351cda0e18/indentedBoxHorizontalRoundedTopCorner.svg') no-repeat !important;
}

.charsheet .sheet-indented-box-horizontal-expand-bottom, .charsheet .sheet-indented-box-horizontal-expand-top, .charsheet .sheet-indented-box-horizontal-rounded-bottom-expand-bottom, .charsheet .sheet-indented-box-horizontal-rounded-bottom-expand-top, .charsheet .sheet-indented-box-horizontal-rounded-expand-bottom, .charsheet .sheet-indented-box-horizontal-rounded-expand-top,
.charsheet .sheet-indented-box-horizontal-rounded-bottom-expand-left, .charsheet .sheet-indented-box-horizontal-rounded-bottom-expand-right, .charsheet .sheet-indented-box-horizontal-rounded-expand-left, .charsheet .sheet-indented-box-horizontal-rounded-expand-right,
.charsheet .sheet-indented-box-horizontal-expand-left, .charsheet .sheet-indented-box-horizontal-expand-right {
background-color: #1a1a1a !important;
}

.charsheet .sheet-boring-box-top-left, .charsheet .sheet-boring-box-top-right,
.sheet-rolltemplate-5e-shaped .sheet-boring-box-top-left, .sheet-rolltemplate-5e-shaped .sheet-boring-box-top-right {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/fab3aa13509f03ee01b42964993a5588/raw/81b4a1a231bf7b33bdf5d48367bc0b8fcdb3b5cc/boringBoxTopCornerWhite.svg') no-repeat !important;
}

.charsheet .sheet-boring-box-expand-bottom, .charsheet .sheet-boring-box-expand-top,
.sheet-rolltemplate-5e-shaped .sheet-boring-box-expand-bottom, .sheet-rolltemplate-5e-shaped .sheet-boring-box-expand-top {
background: #1a1a1a url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/a63fee182682ed9f41a8e35954cbd35f/raw/cdb0c1a5947549633aa106df9015b9a50e488698/boringBoxTopBottomExpandWhite.svg') repeat-x !important;
}

.charsheet .sheet-boring-box-expand-left, .charsheet .sheet-boring-box-expand-right,
.sheet-rolltemplate-5e-shaped .sheet-boring-box-expand-left, .sheet-rolltemplate-5e-shaped .sheet-boring-box-expand-right {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/ca1db5c4e2e117b7501f390198f2760b/raw/510b4fcf14727a574d2b26ceaa238c5a34407bea/boringBoxSideExpandWhite.svg') repeat-y !important;
}

.charsheet .sheet-boring-box-bottom-left, .charsheet .sheet-boring-box-bottom-right,
.sheet-rolltemplate-5e-shaped .sheet-boring-box-bottom-left, .sheet-rolltemplate-5e-shaped .sheet-boring-box-bottom-right {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/0bf33662756f948ed17fcc49aa9cf908/raw/8b37d710faa267102508f8adefb0a60fd47ca08c/boringBoxBottomCornerWhite.svg') no-repeat !important;
}

.charsheet .sheet-modifier-long {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/97f47eeab64b20a9bb6c96c0be676fc5/raw/f5a240e73953285bfd9e3bff40b46d9241424ba8/modifierLong.svg') no-repeat !important;
}

.charsheet .sheet-modifier-short {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/7e006f6645f31f0e785e93ecf5c6d4f0/raw/c944f70f1669619b11367ca89bf9894804f7ccf7/modifierShort.svg') no-repeat !important;
}

.charsheet .sheet-spell-level-title-background-left-no-number, .charsheet .sheet-spell-level-title-background-right {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/d36565260acd415583c935b1bd9a1b76/raw/c494b45fd6478592ef53d4c7c1617693a9df8344/spellcastingTitleRight.svg') no-repeat !important;
}

.charsheet .sheet-spell-level-title-background-expand {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/bc92bb122820840be2883a930a3a178c/raw/4b692304ee3860a228c60e9683af2dabd2d91052/spellcastingTitleExpand.svg') repeat-x !important;
}

.charsheet .sheet-spell-level-title-background-left {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/a188dc921c2c5bb6cae4a33b322ba7b2/raw/205ced227f5a6cb2109cdc8da12c2321fb65c709/spellcastingTitleLeft.svg') no-repeat !important;
}

.charsheet .sheet-modifier {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/53588b14e229d520daa7974051f9e42d/raw/1cf648aa6f111e1d5e380eaaaa7287555f9479c9/modifier.svg') no-repeat !important;
}

.charsheet .sheet-copper, .charsheet .sheet-silver, .charsheet .sheet-electrum, .charsheet .sheet-gold, .charsheet .sheet-platinum {
background: url('http://imgsrv.roll20.net/?src=cdn.rawgit.com/RedReign/7ddb096717c32ed8ab64478918cdf44f/raw/4ca07b33a0f792570a4690665e40299b0fb17a4e/copper.svg') no-repeat !important;
}

.charsheet .sheet-indented-box-expand-bottom, .charsheet .sheet-indented-box-expand-top,
.charsheet .sheet-max-hp-wrapper, .charsheet .sheet-temp-hp-wrapper {
background-color: #1a1a1a !important;
}

.charsheet .sheet-indented-box-expand-left, .charsheet .sheet-indented-box-expand-right, .charsheet .sheet-box-middle,
.sheet-rolltemplate-5e-shaped .sheet-box-middle {
background-color: #1a1a1a !important;
}

.sheet-inspiration-left, .sheet-inspiration-right, .sheet-proficiency-bonus button, .sheet-shaped-version > button {
background-color: transparent !important;
}
.sheet-shaped-version > button > span {
text-shadow: 1px 1px #1a1a1a;
}

//
//
//
// OGL TIME HERE WE GO
//
//
//
div.sheet-licensecontainer div.sheet-page.sheet-core > div.sheet-header,
div.sheet-licensecontainer div.sheet-page.sheet-bio > div.sheet-header,
div.sheet-licensecontainer div.sheet-page.sheet-spells > div.sheet-header,
div.sheet-licensecontainer div.sheet-page.sheet-options > div.sheet-header {
background: url('https://i.imgur.com/ZgqX8uA.png') top left round !important;
}

.sheet-rolltemplate-spell .sheet-container,
.sheet-rolltemplate-npc, .sheet-rolltemplate-npcaction .sheet-container, .sheet-rolltemplate-npcatk, .sheet-rolltemplate-npcdmg, .sheet-rolltemplate-traits {
background: #222 url('https://i.imgur.com/n7ohb4t.png') repeat scroll left top !important;
}

div.sheet-rolltemplate-simple div.sheet-container {
background: url('https://i.imgur.com/3kpSjGA.png') top left round !important;
}

div.sheet-rolltemplate-atk div.sheet-desc.sheet-info .sheet-middle,
div.sheet-rolltemplate-atkdmg div.sheet-desc.sheet-info .sheet-middle,
div.sheet-rolltemplate-dmg div.sheet-desc.sheet-info .sheet-middle,
div.sheet-rolltemplate-desc div.sheet-desc.sheet-info .sheet-middle {
background: url('https://i.imgur.com/Go3pzMs.png') top left round !important;
}

div.sheet-rolltemplate-atk div.sheet-desc.sheet-info .sheet-top,
div.sheet-rolltemplate-atkdmg div.sheet-desc.sheet-info .sheet-top,
div.sheet-rolltemplate-dmg div.sheet-desc.sheet-info .sheet-top,
div.sheet-rolltemplate-desc div.sheet-desc.sheet-info .sheet-top {
background: url('https://i.imgur.com/rkDqD03.png') top left round !important;
}

div.sheet-rolltemplate-atk div.sheet-desc.sheet-info .sheet-bottom,
div.sheet-rolltemplate-atkdmg div.sheet-desc.sheet-info .sheet-bottom,
div.sheet-rolltemplate-dmg div.sheet-desc.sheet-info .sheet-bottom,
div.sheet-rolltemplate-desc div.sheet-desc.sheet-info .sheet-bottom {
background: url('https://i.imgur.com/JxZD8LX.png') top left round !important;
}

.charsheet .sheet-spell input[type='checkbox']:checked ~ span.sheet-prep {
background-color: hsl(44,63%,63%) !important
}

.sheet-page.sheet-core .sheet-header .sheet-name-container img {
display: block;
-moz-box-sizing: border-box;
box-sizing: border-box;
background: url(http://imgsrv.roll20.net/?src=i.imgur.com/rzVfqwl.png) no-repeat;
width: 250px; /* Width of new image */
height: 45px; /* Height of new image */
padding-left: 250px; /* Equal to width of new image */
}

.charsheet .sheet-attr-mod,
.charsheet .sheet-insp-prof-container .sheet-value {
background-color: #1a1a1a !important;
}

.charsheet .sheet-insp-prof-container .sheet-value input[type='checkbox'] ~ span {
-webkit-filter: invert(80%) !important;
}

.charsheet .sheet-level::before {
color: #111 !important;
}

.charsheet .sheet-coin {
    background-color: #2a2a2a;
}

.sheet-trait:hover,
.sheet-item input,
.sheet-display > .sheet-title,
.sheet-display > span[name*='attr_'],
.sheet-display > button span[name*='attr_'],
.sheet-display > button input[name*='attr_'],
.charsheet .sheet-coin {
	background-color: #2a2a2a !important;
}

.charsheet .sheet-display > button .sheet-spellname[name='attr_spellname'] {
    background-color: transparent !important;
}

.ui-dialog .btn[name='roll_spell'] {
    border-color: transparent !important
}

.charsheet input[type='radio'].sheet-tab-button + span,
.charsheet .sheet-advantagetoggle input[type='radio'] + span {
    background-color: #666 !important;
}

div.sheet-rolltemplate-atk div.sheet-container, div.sheet-rolltemplate-atkdmg div.sheet-container.sheet-atk, div.sheet-rolltemplate-dmg div.sheet-atk {
    background: url('https://i.imgur.com/KphynRx.png') top left round !important;
}

div.sheet-rolltemplate-dmg div.sheet-container, div.sheet-rolltemplate-atkdmg div.sheet-container.sheet-damagetemplate {
    background: url('https://i.imgur.com/g6uwvqk.png') top left round !important;
}

.sheet-damagetemplate > .sheet-result:not(:last-child) {
    border-bottom: 1px solid #000 !important;
}

.charsheet .sheet-level::after {
    border-left: 20px solid #2a2a2a !important;
}
`;
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.innerText = css;
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
(function(){
const el = document.createElement("link");
el.rel = "stylesheet";
el.href = "/css/licensed5ednd.css";
document.head.appendChild(el)
})();
