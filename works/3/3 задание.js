(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"3 задание_atlas_1", frames: [[0,0,1796,1718]]},
		{name:"3 задание_atlas_2", frames: [[0,0,1373,1106],[1375,0,88,89]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.глазик = function() {
	this.initialize(ss["3 задание_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3фонproblembocom = function() {
	this.initialize(img._3фонproblembocom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2256,1268);


(lib.крыло = function() {
	this.initialize(ss["3 задание_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gthcs = function() {
	this.initialize(img.gthcs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1767,2226);


(lib.rjktcj = function() {
	this.initialize(ss["3 задание_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.крыло();
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,449,429.5), null);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.rjktcj();
	this.instance.setTransform(-24.65,-24.9,0.56,0.56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-24.9,49.3,49.9);


(lib.крыло_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.setTransform(-224.45,0,1,1,0,0,0,224.5,214.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-3.4286,x:-224.4,y:8.5},0).wait(1).to({rotation:-6.8571,y:16.9},0).wait(1).to({rotation:-10.2857,y:25.35},0).wait(1).to({rotation:-13.7143,x:-224.45,y:33.9},0).wait(1).to({rotation:-17.1429,y:42.3},0).wait(1).to({rotation:-20.5714,x:-224.4,y:50.7},0).wait(1).to({rotation:-24,x:-224.45,y:59.25},0).wait(1).to({rotation:-20,x:-224.4,y:49.3},0).wait(1).to({rotation:-16,y:39.5},0).wait(1).to({rotation:-12,y:29.65},0).wait(1).to({rotation:-8,y:19.75},0).wait(1).to({rotation:-4,x:-224.45,y:9.9},0).wait(1).to({rotation:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-516.9,-229.2,584.8,576);


(lib.колесо = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:17.95},0).wait(1).to({rotation:35.9},0).wait(1).to({rotation:53.85},0).wait(1).to({rotation:71.8},0).wait(1).to({rotation:89.75},0).wait(1).to({rotation:107.7},0).wait(1).to({rotation:125.65},0).wait(1).to({rotation:143.6},0).wait(1).to({rotation:161.55},0).wait(1).to({rotation:179.5},0).wait(1).to({rotation:197.45},0).wait(1).to({rotation:215.4},0).wait(1).to({rotation:233.35},0).wait(1).to({rotation:251.3},0).wait(1).to({rotation:269.25},0).wait(1).to({rotation:287.2},0).wait(1).to({rotation:305.15},0).wait(1).to({rotation:323.1},0).wait(1).to({rotation:341.05},0).wait(1).to({rotation:359},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-34.7,69.5,69.5);


(lib.глазикскрыльями = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// крыло
	this.instance = new lib.крыло_1("synched",0);
	this.instance.setTransform(-237.35,-61.25,1,1,0,0,0,-224.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(86));

	// глаз
	this.instance_1 = new lib.глазик();
	this.instance_1.setTransform(-161.8,-165.95,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(86));

	// Слой_8
	this.instance_2 = new lib.крыло_1("synched",0);
	this.instance_2.setTransform(237.35,2.5,1,1,0,0,180,-224.5,58.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(86));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-529.7,-290.4,1059.5,580.9);


(lib.персысколесами = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// колесо
	this.instance = new lib.колесо("synched",0);
	this.instance.setTransform(63.9,161.85);

	this.instance_1 = new lib.колесо("synched",0);
	this.instance_1.setTransform(-39.2,161.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(86));

	// персы
	this.instance_2 = new lib.gthcs();
	this.instance_2.setTransform(-220.85,-278.25,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(86));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.8,-278.2,441.70000000000005,556.5);


// stage content:
(lib._3задание = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// мелкие
	this.instance = new lib.глазикскрыльями("synched",0);
	this.instance.setTransform(-308.65,145.05,0.5363,0.5363,0,0,0,0.2,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).wait(1).to({regX:0,regY:0,rotation:0.8192,x:-264.98,y:146.5504,startPosition:1},0).wait(1).to({rotation:1.6384,x:-221.21,y:148.1008,startPosition:2},0).wait(1).to({rotation:2.4577,x:-177.4399,y:149.6512,startPosition:3},0).wait(1).to({rotation:3.2769,x:-133.6698,y:151.2016,startPosition:4},0).wait(1).to({rotation:4.0961,x:-89.8997,y:152.7521,startPosition:5},0).wait(1).to({rotation:4.9153,x:-46.1296,y:154.3025,startPosition:6},0).wait(1).to({rotation:5.7346,x:-2.3595,y:155.853,startPosition:7},0).wait(1).to({rotation:6.5538,x:41.4107,y:157.4035,startPosition:8},0).wait(1).to({rotation:7.373,x:85.1808,y:158.954,startPosition:9},0).wait(1).to({rotation:8.1922,x:128.951,y:160.5045,startPosition:10},0).wait(1).to({rotation:9.0115,x:172.7213,y:162.055,startPosition:11},0).wait(1).to({rotation:9.8307,x:216.4915,y:163.6056,startPosition:12},0).wait(1).to({rotation:10.6499,x:260.2618,y:165.1561,startPosition:13},0).wait(1).to({rotation:11.4691,x:304.032,y:166.7067,startPosition:14},0).wait(1).to({rotation:12.2884,x:347.8023,y:168.2572,startPosition:15},0).wait(1).to({rotation:13.1076,x:391.5726,y:169.8078,startPosition:16},0).wait(1).to({rotation:13.9268,x:435.343,y:171.3585,startPosition:17},0).wait(1).to({rotation:11.2208,x:479.1086,y:172.9148,startPosition:18},0).wait(1).to({rotation:8.5148,x:522.8745,y:174.4712,startPosition:19},0).wait(1).to({rotation:5.8089,x:566.6406,y:176.0279,startPosition:20},0).wait(1).to({rotation:3.1029,x:610.4069,y:177.5847,startPosition:21},0).wait(1).to({rotation:0.3969,x:654.1734,y:179.1416,startPosition:22},0).wait(1).to({rotation:-2.3091,x:697.9402,y:180.6986,startPosition:23},0).wait(1).to({rotation:-5.015,x:741.7073,y:182.2557,startPosition:24},0).wait(1).to({rotation:-7.721,x:785.4745,y:183.813,startPosition:25},0).wait(1).to({rotation:-10.427,x:829.2421,y:185.3703,startPosition:26},0).wait(1).to({rotation:-11.5528,x:914.6095,y:155.8164,startPosition:27},0).wait(1).to({rotation:-12.6785,x:990.5384,y:137.1487,startPosition:28},0).wait(1).to({rotation:-13.8043,x:1057.1153,y:129.333,startPosition:29},0).wait(1).to({rotation:-14.93,x:1114.3898,y:132.3794,startPosition:30},0).wait(1).to({rotation:-16.0558,x:1176.8706,y:142.4818,startPosition:31},0).wait(1).to({rotation:-17.1815,x:1239.3514,y:152.5841,startPosition:32},0).wait(1).to({rotation:-18.3073,x:1301.8323,y:162.6864,startPosition:33},0).wait(1).to({rotation:-19.4331,x:1364.3133,y:172.7887,startPosition:34},0).wait(1).to({rotation:-20.5588,x:1426.7942,y:182.8911,startPosition:35},0).wait(1).to({rotation:-21.6846,x:1489.2753,y:192.9934,startPosition:36},0).wait(1).to({rotation:-22.8103,x:1551.7563,y:203.0958,startPosition:37},0).wait(1).to({rotation:-23.9361,x:1614.2375,y:213.1981,startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1));

	// Слой_3
	this.instance_1 = new lib.глазикскрыльями("synched",0);
	this.instance_1.setTransform(-582.75,265.3,0.3254,0.3254);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).wait(1).to({rotation:0.9374,x:-532.6312,y:268.3875,startPosition:1},0).wait(1).to({rotation:1.8749,x:-482.5125,y:271.475,startPosition:2},0).wait(1).to({rotation:2.8123,x:-432.3937,y:274.5625,startPosition:3},0).wait(1).to({rotation:3.7497,x:-382.275,y:277.65,startPosition:4},0).wait(1).to({rotation:4.6872,x:-332.1562,y:280.7375,startPosition:5},0).wait(1).to({rotation:5.6246,x:-282.0375,y:283.825,startPosition:6},0).wait(1).to({rotation:6.562,x:-231.9187,y:286.9125,startPosition:7},0).wait(1).to({rotation:7.4995,x:-181.8,y:290,startPosition:8},0).wait(1).to({rotation:8.4369,x:-131.6812,y:293.0875,startPosition:9},0).wait(1).to({rotation:9.3743,x:-81.5625,y:296.175,startPosition:10},0).wait(1).to({rotation:10.3117,x:-31.4437,y:299.2625,startPosition:11},0).wait(1).to({rotation:11.2492,x:18.675,y:302.35,startPosition:12},0).wait(1).to({rotation:12.1866,x:68.7938,y:305.4375,startPosition:13},0).wait(1).to({rotation:13.124,x:118.9125,y:308.525,startPosition:14},0).wait(1).to({rotation:14.0615,x:169.0313,y:311.6125,startPosition:15},0).wait(1).to({rotation:14.9989,x:219.15,y:314.7,startPosition:16},0).wait(1).to({rotation:11.9989,x:274.531,y:327.3037,startPosition:17},0).wait(1).to({rotation:8.9988,x:330.1612,y:337.9138,startPosition:18},0).wait(1).to({rotation:5.9988,x:386.0384,y:346.5312,startPosition:19},0).wait(1).to({rotation:2.9988,x:442.1639,y:353.1574,startPosition:20},0).wait(1).to({rotation:-0.0012,x:498.5392,y:357.7936,startPosition:21},0).wait(1).to({rotation:-3.0013,x:555.1654,y:360.441,startPosition:22},0).wait(1).to({rotation:-6.0013,x:612.0441,y:361.1002,startPosition:23},0).wait(1).to({rotation:-9.0013,x:669.1767,y:359.772,startPosition:24},0).wait(1).to({rotation:-12.0014,x:726.5645,y:356.4569,startPosition:25},0).wait(1).to({rotation:-15.0014,x:784.2091,y:351.1549,startPosition:26},0).wait(1).to({x:842.112,y:343.8661,startPosition:27},0).wait(1).to({x:900.2747,y:334.5904,startPosition:28},0).wait(1).to({x:958.6987,y:323.3272,startPosition:29},0).wait(1).to({x:1017.3857,y:310.076,startPosition:30},0).wait(1).to({x:1076.3372,y:294.8359,startPosition:31},0).wait(1).to({x:1135.5549,y:277.6059,startPosition:32},0).wait(1).to({x:1195.0404,y:258.3847,startPosition:33},0).wait(1).to({x:1254.7954,y:237.1709,startPosition:34},0).wait(1).to({x:1314.8218,y:213.9627,startPosition:35},0).wait(1).to({x:1375.1211,y:188.7582,startPosition:36},0).wait(1).to({x:1435.6953,y:161.5554,startPosition:37},0).wait(1).to({x:1496.55,y:132.35,startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1));

	// Слой_2
	this.instance_2 = new lib.глазикскрыльями("synched",0);
	this.instance_2.setTransform(-254.85,414.15,0.3351,0.3351);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).wait(1).to({scaleX:0.3352,scaleY:0.3352,rotation:0.4605,x:-203.8167,y:408.2208,startPosition:1},0).wait(1).to({rotation:0.9209,x:-152.7833,y:402.2917,startPosition:2},0).wait(1).to({rotation:1.3814,x:-101.75,y:396.3625,startPosition:3},0).wait(1).to({rotation:1.8419,x:-50.7167,y:390.4333,startPosition:4},0).wait(1).to({rotation:2.3023,x:0.3167,y:384.5042,startPosition:5},0).wait(1).to({rotation:2.7628,x:51.35,y:378.575,startPosition:6},0).wait(1).to({rotation:3.2233,x:102.3833,y:372.6458,startPosition:7},0).wait(1).to({rotation:3.6838,x:153.4167,y:366.7167,startPosition:8},0).wait(1).to({rotation:4.1442,x:204.45,y:360.7875,startPosition:9},0).wait(1).to({rotation:4.6047,x:255.4833,y:354.8583,startPosition:10},0).wait(1).to({rotation:5.0652,x:306.5167,y:348.9292,startPosition:11},0).wait(1).to({rotation:5.5256,x:357.55,y:343,startPosition:12},0).wait(1).to({rotation:4.1593,x:406.3862,y:350.9436,startPosition:13},0).wait(1).to({rotation:2.7929,x:455.0897,y:357.9484,startPosition:14},0).wait(1).to({rotation:1.4265,x:503.6578,y:364.0144,startPosition:15},0).wait(1).to({rotation:0.0602,x:552.0916,y:369.1422,startPosition:16},0).wait(1).to({rotation:-1.3062,x:600.3922,y:373.3326,startPosition:17},0).wait(1).to({rotation:-2.6726,x:648.5607,y:376.586,startPosition:18},0).wait(1).to({rotation:-4.0389,x:696.5982,y:378.9027,startPosition:19},0).wait(1).to({rotation:-5.4053,x:744.5056,y:380.2834,startPosition:20},0).wait(1).to({rotation:-6.7717,x:792.2841,y:380.7281,startPosition:21},0).wait(1).to({rotation:-8.138,x:839.9346,y:380.2371,startPosition:22},0).wait(1).to({rotation:-9.5044,x:887.4582,y:378.8107,startPosition:23},0).wait(1).to({rotation:-10.8708,x:934.8559,y:376.4489,startPosition:24},0).wait(1).to({rotation:-12.2371,x:982.1287,y:373.1517,startPosition:25},0).wait(1).to({rotation:-13.6035,x:1029.2776,y:368.9191,startPosition:26},0).wait(1).to({rotation:-14.9699,x:1076.3035,y:363.7509,startPosition:27},0).wait(1).to({rotation:-16.3362,x:1123.2075,y:357.647,startPosition:28},0).wait(1).to({rotation:-17.7026,x:1169.9904,y:350.6071,startPosition:29},0).wait(1).to({rotation:-19.069,x:1216.6533,y:342.631,startPosition:30},0).wait(1).to({rotation:-20.4353,x:1263.1971,y:333.718,startPosition:31},0).wait(1).to({rotation:-21.8017,x:1309.6228,y:323.8679,startPosition:32},0).wait(1).to({rotation:-23.1681,x:1355.9312,y:313.0801,startPosition:33},0).wait(1).to({rotation:-24.5344,x:1402.1232,y:301.354,startPosition:34},0).wait(1).to({rotation:-25.9008,x:1448.1999,y:288.6888,startPosition:35},0).wait(1).to({rotation:-27.2672,x:1494.1621,y:275.0838,startPosition:36},0).wait(1).to({rotation:-28.6335,x:1540.0107,y:260.5383,startPosition:37},0).wait(1).to({rotation:-29.9999,x:1585.75,y:245.05,startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1));

	// глазик_с_крыльями
	this.instance_3 = new lib.глазикскрыльями("synched",0);
	this.instance_3.setTransform(-486.7,237.9,0.76,0.76);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({_off:false},0).to({regX:-0.1,regY:0.1,x:400.3,y:231.3,startPosition:34},34).to({regX:0.1,regY:0.2,rotation:4.9991,x:713.55,y:337.6,startPosition:46},12).to({regX:0,regY:0,rotation:-12.9991,x:1913.8,y:85,startPosition:60},46).wait(1));

	// Слой_13
	this.instance_4 = new lib.персысколесами("synched",9);
	this.instance_4.setTransform(779.75,480.55);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(96).to({_off:false},0).wait(1).to({x:806.6023,y:474.9919,startPosition:10},0).wait(1).to({x:833.4547,y:469.4337,startPosition:11},0).wait(1).to({x:860.307,y:463.8756,startPosition:12},0).wait(1).to({x:887.1593,y:458.3174,startPosition:13},0).wait(1).to({x:914.0116,y:452.7593,startPosition:14},0).wait(1).to({x:940.864,y:447.2012,startPosition:15},0).wait(1).to({x:967.7163,y:441.643,startPosition:16},0).wait(1).to({x:994.5686,y:436.0849,startPosition:17},0).wait(1).to({x:1021.4209,y:430.5267,startPosition:18},0).wait(1).to({x:1048.2733,y:424.9686,startPosition:19},0).wait(1).to({x:1075.1256,y:419.4105,startPosition:20},0).wait(1).to({x:1101.9779,y:413.8523,startPosition:21},0).wait(1).to({x:1128.8302,y:408.2942,startPosition:22},0).wait(1).to({x:1155.6826,y:402.736,startPosition:23},0).wait(1).to({x:1182.5349,y:397.1779,startPosition:24},0).wait(1).to({x:1209.3872,y:391.6198,startPosition:25},0).wait(1).to({x:1236.2395,y:386.0616,startPosition:26},0).wait(1).to({x:1263.0919,y:380.5035,startPosition:27},0).wait(1).to({x:1289.9442,y:374.9453,startPosition:28},0).wait(1).to({x:1316.7965,y:369.3872,startPosition:29},0).wait(1).to({x:1343.6488,y:363.8291,startPosition:30},0).wait(1).to({x:1370.5012,y:358.2709,startPosition:31},0).wait(1).to({x:1397.3535,y:352.7128,startPosition:32},0).wait(1).to({x:1424.2058,y:347.1547,startPosition:33},0).wait(1).to({x:1451.0581,y:341.5965,startPosition:34},0).wait(1).to({x:1477.9105,y:336.0384,startPosition:35},0).wait(1).to({x:1504.7628,y:330.4802,startPosition:36},0).wait(1).to({x:1531.6151,y:324.9221,startPosition:37},0).wait(1).to({x:1558.4674,y:319.364,startPosition:38},0).wait(1).to({x:1585.3198,y:313.8058,startPosition:39},0).wait(1).to({x:1612.1721,y:308.2477,startPosition:40},0).wait(1).to({x:1639.0244,y:302.6895,startPosition:41},0).wait(1).to({x:1665.8767,y:297.1314,startPosition:42},0).wait(1).to({x:1692.7291,y:291.5733,startPosition:43},0).wait(1).to({x:1719.5814,y:286.0151,startPosition:44},0).wait(1).to({x:1746.4337,y:280.457,startPosition:45},0).wait(1).to({x:1773.286,y:274.8988,startPosition:46},0).wait(1).to({x:1800.1384,y:269.3407,startPosition:47},0).wait(1).to({x:1826.9907,y:263.7826,startPosition:48},0).wait(1).to({x:1853.843,y:258.2244,startPosition:49},0).wait(1).to({x:1880.6953,y:252.6663,startPosition:50},0).wait(1).to({x:1907.5477,y:247.1081,startPosition:51},0).wait(1).to({x:1934.4,y:241.55,startPosition:52},0).wait(1));

	// персы_с_колесами
	this.instance_5 = new lib.персысколесами("synched",0);
	this.instance_5.setTransform(-152.5,495.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:763.55,startPosition:9},95).to({_off:true},1).wait(44));

	// фон
	this.instance_6 = new lib._3фонproblembocom();
	this.instance_6.setTransform(0,-3,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(140));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-197.6,210.6,2455.9,562.9);
// library properties:
lib.properties = {
	id: 'B1C5187ED7B6B648843BFBB429E0276B',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_3фонproblembocom.jpg", id:"_3фонproblembocom"},
		{src:"images/gthcs.png", id:"gthcs"},
		{src:"images/3 задание_atlas_1.png", id:"3 задание_atlas_1"},
		{src:"images/3 задание_atlas_2.png", id:"3 задание_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B1C5187ED7B6B648843BFBB429E0276B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;