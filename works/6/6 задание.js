(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"6 задание_atlas_1", frames: [[168,0,50,42],[0,0,166,243]]}
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



(lib.головаpngкопия = function() {
	this.initialize(ss["6 задание_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.крыло = function() {
	this.initialize(ss["6 задание_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.крылышко = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(29.9,-87.5,0.36,0.36,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-87.5,59.7,87.5);


(lib.голова = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.головаpngкопия();
	this.instance.setTransform(-10,-16.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-16.8,20,16.8);


(lib.бабочка = function(mode,startPosition,loop,reversed) {
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
	this.ikNode_98 = new lib.голова("synched",0);
	this.ikNode_98.name = "ikNode_98";
	this.ikNode_98.setTransform(0,-72,1,1,0,0,0,0,-8.4);

	this.ikNode_99 = new lib.крылышко("synched",0);
	this.ikNode_99.name = "ikNode_99";
	this.ikNode_99.setTransform(-21.45,-69.9,0.9994,0.9994,0,-25.2321,154.7679,-23.8,-47.4);

	this.ikNode_101 = new lib.крылышко("synched",0);
	this.ikNode_101.name = "ikNode_101";
	this.ikNode_101.setTransform(22.2,-70.85,0.9996,0.9996,25.4056,0,0,-22.9,-47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_101,p:{regX:-22.9,scaleX:0.9996,scaleY:0.9996,rotation:25.4056,x:22.2,y:-70.85}},{t:this.ikNode_99,p:{scaleX:0.9994,scaleY:0.9994,skewX:-25.2321,skewY:154.7679,x:-21.45,y:-69.9,regY:-47.4}},{t:this.ikNode_98}]}).to({state:[{t:this.ikNode_101,p:{regX:-23,scaleX:0.9995,scaleY:0.9995,rotation:19.0534,x:21.1,y:-65.8}},{t:this.ikNode_99,p:{scaleX:0.9993,scaleY:0.9993,skewX:-18.9462,skewY:161.0538,x:-20.4,y:-64.95,regY:-47.4}},{t:this.ikNode_98}]},1).to({state:[{t:this.ikNode_101,p:{regX:-23,scaleX:0.9995,scaleY:0.9995,rotation:12.7013,x:18.55,y:-60.3}},{t:this.ikNode_99,p:{scaleX:0.9993,scaleY:0.9993,skewX:-12.6605,skewY:167.3395,x:-18.05,y:-59.9,regY:-47.4}},{t:this.ikNode_98}]},1).to({state:[{t:this.ikNode_101,p:{regX:-23,scaleX:0.9995,scaleY:0.9995,rotation:6.35,x:14.6,y:-55.8}},{t:this.ikNode_99,p:{scaleX:0.9993,scaleY:0.9993,skewX:-6.375,skewY:173.625,x:-14.45,y:-55.75,regY:-47.4}},{t:this.ikNode_98}]},1).to({state:[{t:this.ikNode_101,p:{regX:-23,scaleX:0.9995,scaleY:0.9995,rotation:0,x:10.25,y:-52.85}},{t:this.ikNode_99,p:{scaleX:0.9993,scaleY:0.9993,skewX:-0.0892,skewY:179.9108,x:-10.5,y:-52.8,regY:-47.4}},{t:this.ikNode_98}]},1).to({state:[{t:this.ikNode_101,p:{regX:-23,scaleX:0.9995,scaleY:0.9995,rotation:6.3009,x:14.6,y:-55.75}},{t:this.ikNode_99,p:{scaleX:0.9993,scaleY:0.9993,skewX:-6.3918,skewY:173.6082,x:-14.4,y:-55.7,regY:-47.4}},{t:this.ikNode_98}]},1).to({state:[{t:this.ikNode_101,p:{regX:-23,scaleX:0.9995,scaleY:0.9995,rotation:12.6033,x:18.55,y:-60.35}},{t:this.ikNode_99,p:{scaleX:0.9994,scaleY:0.9994,skewX:-12.6953,skewY:167.3047,x:-17.95,y:-59.9,regY:-47.3}},{t:this.ikNode_98}]},1).to({state:[{t:this.ikNode_101,p:{regX:-23,scaleX:0.9995,scaleY:0.9995,rotation:18.9068,x:21.05,y:-65.85}},{t:this.ikNode_99,p:{scaleX:0.9993,scaleY:0.9993,skewX:-18.9971,skewY:161.0029,x:-20.4,y:-65,regY:-47.4}},{t:this.ikNode_98}]},1).to({state:[{t:this.ikNode_101,p:{regX:-23,scaleX:0.9995,scaleY:0.9995,rotation:25.2107,x:22.05,y:-70.9}},{t:this.ikNode_99,p:{scaleX:0.9993,scaleY:0.9993,skewX:-25.2997,skewY:154.7003,x:-21.45,y:-69.8,regY:-47.4}},{t:this.ikNode_98}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-109.6,173.9,107.69999999999999);


// stage content:
(lib._6задание = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Каркас_33
	this.instance = new lib.бабочка("synched",0);
	this.instance.setTransform(1462.6,592.2,1,1,-90,0,0,0,-50.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({rotation:0,guide:{path:[1462.7,592.2,1383.7,597.1,1296.9,547.1,1263.1,527.5,1230.9,501.1,1204.2,479.3,1182.8,456.3,1117.2,385.5,1093.4,312.7,1084.1,284.1,1080.6,253.1,1079.5,243.8,1078.9,233.1,1078.1,218.6,1078.1,201.5,1078.1,148.3,1122.2,125,1137.9,116.8,1158,113.1,1172.2,110.4,1185.6,110.4,1204.3,110.4,1208.8,130.6,1210.5,138.2,1210.7,150.9,1210.8,158.3,1210.6,173.8,1210.6,207.7,1184.7,226.3,1161.5,242.9,1124.8,242.9,1101.2,242.9,1079,233.2,1079,233.2,1078.9,233.1,1060.2,224.9,1037.9,207.6,1026.4,198.5,995.5,171.3,966,145.2,945.7,129.7,878.7,78.5,799.5,51.9,694.3,16.5,550.9,16.5,485.7,16.5,436.6,35.3,392.6,52.2,359.8,85,331.8,112.8,309.3,155.1,293.2,185.4,274.1,235.5,268.9,249.2,258.8,276.4,249.8,300,243.1,315.8,224.7,359.4,205.2,386,181.1,419,149.3,435.6,113.4,454.4,64.4,454.4,37,454.4,-3.6,441.6,-35.5,431.5,-79.8,411.9,-90.8,407.1,-152,378.6,-190.8,360.6,-207.7,355,-207.7,353.2,-207.7,351.4], orient:'fixed'}},59).to({_off:true},1).wait(35));

	// Каркас_15
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFRgQQgKAUhGgCQg7ABgwgEQgjgDhFADIgrABQhzAHhKAQQhLASgbADQgcAEgQgIQgQgIArgSQArgRBogSQBpgUA6gBIAwgBQBigCBiACQBUAEAEAXg");
	this.shape.setTransform(425.5712,418.589);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlMAoQgQgIArgSQArgRBogSQBpgUA6gBIAwgBQBigCBiACQBUAEAEAXQgKAUhGgCQg7ABgwgEQgjgDhFADIgrABQhzAHhKAQQhLASgbADIgRABQgQAAgLgFg");
	this.shape_1.setTransform(425.5712,418.589);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AFQgRQgKAUhHgDQg6AAgwgFQgjgEhEADIgrADQhzAKhKASIhlAYQgbAEgRgHQgRgIArgTQArgTBogUQBngWA7gEIAwgCQEqgJgOAog");
	this.shape_2.setTransform(425.6636,419.0651);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AlLAuQgRgIArgTQArgTBogUQBngWA7gEIAwgCQEqgJgOAoQgKAUhHgDQg6AAgwgFQgjgEhEADIgrADQhzAKhKASIhlAYIgSACQgPAAgLgFg");
	this.shape_3.setTransform(425.6636,419.0651);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AFPgTQgLAUhGgDQg6AAgwgHQgjgEhDACIgrAFQhzAMhJAVIhkAbQgbAFgRgHQgRgHAqgUQArgVBngXQBmgZA7gFIAwgEQBjgEBhAGQBUAIAEAYg");
	this.shape_4.setTransform(425.7403,419.5909);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AlJA0QgRgHAqgUQArgVBngXQBmgZA7gFIAwgEQBjgEBhAGQBUAIAEAYQgLAUhGgDQg6AAgwgHQgjgEhDACIgrAFQhzAMhJAVIhkAbQgLACgKAAQgNAAgKgEg");
	this.shape_5.setTransform(425.7403,419.5909);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AFNgUQgLAUhGgEQg6gCgwgHQgjgEhCABIgrAGQhxAQhJAXIhkAeQgbAFgRgGQgRgGApgWQAqgWBngaQBlgcA7gHIAwgFQBjgFBhAJQBVAJADAZg");
	this.shape_6.setTransform(425.8509,420.0953);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AlIA6QgRgGApgWQAqgWBngaQBlgcA7gHIAwgFQBjgFBhAJQBVAJADAZQgLAUhGgEQg6gCgwgHQgjgEhCABIgrAGQhxAQhJAXIhkAeQgMACgLAAQgMAAgJgDg");
	this.shape_7.setTransform(425.8509,420.0953);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AFMgWQgLAVhGgGQg7gCgvgIQgjgFhBABIgrAHQhxAThIAZIhjAhQgbAHgRgGQgRgHAogWQAqgXBlgeQBlgeA7gJIAwgHQBjgFBhALQBVALADAZg");
	this.shape_8.setTransform(425.9965,420.6245);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AlGBAQgRgHAogWQAqgXBlgeQBlgeA7gJIAwgHQBjgFBhALQBVALADAZQgLAVhGgGQg7gCgvgIQgjgFhBABIgrAHQhxAThIAZIhjAhQgOAEgMAAQgKAAgIgDg");
	this.shape_9.setTransform(425.9965,420.6245);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AFKgXQgLAVhGgHQg7gDgvgJQgjgFhAAAIgqAIQhxAXhHAbIhiAkQgbAHgRgGQgSgFAogYQApgYBlghQBkghA6gLQAWgDAbgFQBigGBiAOQBUAMADAag");
	this.shape_10.setTransform(426.1207,421.118);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AlEBFQgSgFAogYQApgYBlghQBkghA6gLIAxgIQBigGBiAOQBUAMADAaQgLAVhGgHQg7gDgvgJQgjgFhAAAIgqAIQhxAXhHAbIhiAkQgPAEgMAAQgJAAgIgDg");
	this.shape_11.setTransform(426.1207,421.118);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AFIgYQgLAUhGgIQg6gEgwgIQgjgGg/gBIgqAJQhwAahGAeIhhAmQgbAIgRgFQgSgFAogZQAogZBjgkQBjgkA7gMQAVgFAbgFQBigHBiAQQBUAOADAbg");
	this.shape_12.setTransform(426.2683,421.6361);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AlCBLQgSgFAogZQAogZBjgkQBjgkA7gMIAwgKQBigHBiAQQBUAOADAbQgLAUhGgIQg6gEgwgIQgjgGg/gBIgqAJQhwAahGAeIhhAmQgRAFgNAAQgHAAgHgCg");
	this.shape_13.setTransform(426.2683,421.6361);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AFGgZQgMAUhGgJQg6gFgwgJQgigGg+gCIgqALQhvAdhGAfIhfApQgbAJgRgEQgSgFAngaQAngbBigmQBignA6gOQAVgFAcgGQBhgIBjATQBUAQADAbg");
	this.shape_14.setTransform(426.4633,422.1292);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AlABRQgSgFAngaQAngbBigmQBignA6gOIAxgLQBhgIBjATQBUAQADAbQgMAUhGgJQg6gFgwgJQgigGg+gCIgqALQhvAdhGAfIhfApQgSAGgNAAQgHAAgGgBg");
	this.shape_15.setTransform(426.4633,422.1292);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AFEgbQgMAUhGgJQg6gGgvgKQgjgGg9gDIgpAMQhvAghEAiIheAsQgaAJgSgEQgSgDAmgcQAmgbBhgqQBhgqA6gQQAVgGAbgGQBhgIBjAUQBVASACAbg");
	this.shape_16.setTransform(426.6357,422.6244);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ak9BWQgSgDAmgcQAmgbBhgqQBhgqA6gQIAwgMQBhgIBjAUQBVASACAbQgMAUhGgJQg6gGgvgKQgjgGg9gDIgpAMQhvAghEAiIheAsQgTAGgPAAIgKgBg");
	this.shape_17.setTransform(426.6357,422.6244);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AFCgcQgNAUhGgLQg6gGgvgKQgigIg8gEIgoAOQhuAkhEAjIhdAvQgaAKgSgDQgSgEAlgcQAmgdBggsQBfgsA5gSQAVgHAcgGQBhgKBiAXQBVATADAcg");
	this.shape_18.setTransform(426.8305,423.1436);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ak7BcQgSgEAlgcQAmgdBggsQBfgsA5gSQAVgHAcgGQBhgKBiAXQBVATADAcQgNAUhGgLQg6gGgvgKQgigIg8gEIgoAOQhuAkhEAjIhdAvQgUAHgPAAIgJAAg");
	this.shape_19.setTransform(426.8305,423.1436);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AFKgXQgLAVhGgHQg6gDgwgJQgjgFhAAAIgqAIQhxAXhHAbIhiAkQgbAHgRgGQgSgFAogYQApgYBlghQBkghA6gLQAWgDAbgFQBigGBiAOQBUAMADAag");
	this.shape_20.setTransform(426.1207,421.118);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AlEBFQgSgFAogYQApgYBlghQBkghA6gLIAxgIQBigGBiAOQBUAMADAaQgLAVhGgHQg6gDgwgJQgjgFhAAAIgqAIQhxAXhHAbIhiAkQgPAEgMAAQgJAAgIgDg");
	this.shape_21.setTransform(426.1207,421.118);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AFGgZQgMAUhFgJQg7gFgvgJQgjgGg+gCIgqALQhvAdhGAfIhfApQgbAJgRgEQgSgFAngaQAngbBigmQBignA6gOQAVgFAcgGQBhgIBjATQBUAQADAbg");
	this.shape_22.setTransform(426.4633,422.1292);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AlABRQgSgFAngaQAngbBigmQBignA6gOIAxgLQBhgIBjATQBUAQADAbQgMAUhFgJQg7gFgvgJQgjgGg+gCIgqALQhvAdhGAfIhfApQgSAGgNAAQgHAAgGgBg");
	this.shape_23.setTransform(426.4633,422.1292);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AFRgQQgKAUhGgDQg7ABgwgEQgjgDhEADIgrACQhzAHhLARQhKARgbAEQgcADgQgHQgRgIArgSQAsgRBogTQBngUA7gCIAwgBQBjgDBhADQBUAEAEAYg");
	this.shape_24.setTransform(425.5462,418.6575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AlLApQgRgIArgSQAsgRBogTQBngUA7gCIAwgBQBjgDBhADQBUAEAEAYQgKAUhGgDQg7ABgwgEQgjgDhEADIgrACQhzAHhLARQhKARgbAEIgQABQgRAAgLgFg");
	this.shape_25.setTransform(425.5462,418.6575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AFRgQQgKAUhHgDQg6ABgwgEQgjgEhEADIgsADQhzAHhKASIhlAWQgcADgQgHQgRgIArgTQArgRBpgUQBngTA7gDIAwgCQEogIgMAlg");
	this.shape_26.setTransform(425.5946,418.7481);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AlLArQgRgIArgTQArgRBpgUQBngTA7gDIAwgCQEogIgMAlQgKAUhHgDQg6ABgwgEQgjgEhEADIgsADQhzAHhKASIhlAWIgQAAQgRAAgLgEg");
	this.shape_27.setTransform(425.5946,418.7481);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AFQgQQgKAUhGgDQg7AAgwgEQgjgDhEACIgrADQhzAIhKASIhlAXQgcADgQgHQgRgIArgTQArgRBogVQBngUA7gDIAwgCQEpgJgNAng");
	this.shape_28.setTransform(425.6114,418.8347);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AlLAsQgRgIArgTQArgRBogVQBngUA7gDIAwgCQEpgJgNAnQgKAUhGgDQg7AAgwgEQgjgDhEACIgrADQhzAIhKASIhlAXIgQABQgRAAgLgFg");
	this.shape_29.setTransform(425.6114,418.8347);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AFQgRQgKAUhHgDQg6ABgwgFQgjgDhEACIgrAEQhzAIhKASIhlAYQgbADgRgHQgRgIArgTQArgSBogUQBngVA7gDIAwgDQEqgJgOAng");
	this.shape_30.setTransform(425.6007,418.938);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AlLAtQgRgIArgTQArgSBogUQBngVA7gDIAwgDQEqgJgOAnQgKAUhHgDQg6ABgwgFQgjgDhEACIgrAEQhzAIhKASIhlAYIgQABQgQAAgMgFg");
	this.shape_31.setTransform(425.6007,418.938);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AFQgRQgLAUhGgDQg6AAgwgFQgjgDhDACIgsAEQhzAJhKATIhlAXQgbAEgRgHQgQgIAqgTQArgSBogVQBngWA7gDIAwgDQEqgJgOAog");
	this.shape_32.setTransform(425.6257,419.0401);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AlLAuQgQgIAqgTQArgSBogVQBngWA7gDIAwgDQEqgJgOAoQgLAUhGgDQg6AAgwgFQgjgDhDACIgsAEQhzAJhKATIhlAXIgSACQgPAAgLgFg");
	this.shape_33.setTransform(425.6257,419.0401);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AFPgTQgKAUhGgDQg7AAgwgHQgjgDhCABIgsAFQhyAMhKAVIhkAaQgbAFgRgHQgRgHAqgUQAqgUBogYQBngYA6gFIAxgEQBigDBhAGQBUAHAEAYg");
	this.shape_34.setTransform(425.6923,419.5236);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AlJAzQgRgHAqgUQAqgUBogYQBngYA6gFIAxgEQBigDBhAGQBUAHAEAYQgKAUhGgDQg7AAgwgHQgjgDhCABIgsAFQhyAMhKAVIhkAaQgLACgJAAQgOAAgKgEg");
	this.shape_35.setTransform(425.6923,419.5236);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AFOgUQgLAUhGgEQg7gBgwgHQgigEhCABIgrAGQhzAPhIAWIhkAdQgbAGgRgHQgRgGApgWQAqgVBngaQBmgbA6gGIAxgFQBjgFBhAJQBUAJAEAYg");
	this.shape_36.setTransform(425.803,419.9732);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AlIA4QgRgGApgWQAqgVBngaQBmgbA6gGIAxgFQBjgFBhAJQBUAJAEAYQgLAUhGgEQg7gBgwgHQgigEhCABIgrAGQhzAPhIAWIhkAdQgMADgLAAQgMAAgJgEg");
	this.shape_37.setTransform(425.803,419.9732);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AFMgVQgNAZiugTQgjgFhBABIgrAGQhxAShJAZQhIAYgaAHQgcAGgRgFQgRgHApgWQAqgXBlgcQBmgeA6gIQAWgDAbgDQBigFBiALQBUAKADAZg");
	this.shape_38.setTransform(425.9009,420.4259);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AlHA+QgRgHApgWQAqgXBlgcQBmgeA6gIIAxgGQBigFBiALQBUAKADAZQgNAZiugTQgjgFhBABIgrAGQhxAShJAZQhIAYgaAHQgOADgMAAQgKAAgJgCg");
	this.shape_39.setTransform(425.9009,420.4259);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AFLgWQgLAUhGgGQg6gDgwgIQgjgFhAAAIgrAIQhxAVhIAaIhhAjQgcAGgRgFQgRgGAogXQApgYBlgfQBkggA8gKQAVgDAbgEQBigGBiAMQBUAMADAag");
	this.shape_40.setTransform(426.0465,420.8663);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AlFBDQgRgGAogXQApgYBlgfQBkggA8gKIAwgHQBigGBiAMQBUAMADAaQgLAUhGgGQg6gDgwgIQgjgFhAAAIgrAIQhxAVhIAaIhhAjQgPADgMAAQgKAAgIgCg");
	this.shape_41.setTransform(426.0465,420.8663);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AFJgXQgLAUhGgHQg6gEgwgIQgjgFg/gBIgqAJQhxAYhHAcIhhAlQgbAHgRgFQgRgGAngYQAogYBlgiQBjgjA7gLQAVgFAbgEQBigGBiAOQBUAOADAag");
	this.shape_42.setTransform(426.1692,421.3374);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AlDBIQgRgGAngYQAogYBlgiQBjgjA7gLIAwgJQBigGBiAOQBUAOADAaQgLAUhGgHQg6gEgwgIQgjgFg/gBIgqAJQhxAYhHAcIhhAlQgQAEgNAAQgIAAgHgCg");
	this.shape_43.setTransform(426.1692,421.3374);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("AFIgYQgMAUhGgIQg6gEgwgJQgjgGg+gCIgqAKQhwAbhGAeQhGAegaAJQgaAJgSgFQgRgFAmgZQAngaBkgkQBjgmA6gMQAVgFAbgFQBigHBiAQQBVAPADAbg");
	this.shape_44.setTransform(426.3396,421.7986);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AlBBNQgRgFAmgZQAngaBkgkQBjgmA6gMIAwgKQBigHBiAQQBVAPADAbQgMAUhGgIQg6gEgwgJQgjgGg+gCIgqAKQhwAbhGAeQhGAegaAJQgRAGgOAAQgHAAgGgCg");
	this.shape_45.setTransform(426.3396,421.7986);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AFGgaQgMAUhGgIQg6gFgwgKQgigGg+gCIgqALQhvAehFAgIhfApQgaAJgSgEQgSgFAngaQAmgbBjgnQBhgnA6gPQAVgFAcgGQBhgIBiATQBVAQADAbg");
	this.shape_46.setTransform(426.4883,422.243);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ak/BSQgSgFAngaQAmgbBjgnQBhgnA6gPIAxgLQBhgIBiATQBVAQADAbQgMAUhGgIQg6gFgwgKQgigGg+gCIgqALQhvAehFAgIhfApQgSAGgOAAIgMgBg");
	this.shape_47.setTransform(426.4883,422.243);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AFEgbQgMAUhGgKQg6gFgvgKQgjgHg9gDIgpAMQhvAhhEAiIheAsQgaAKgSgEQgSgEAmgcQAmgbBhgqQBhgqA6gQQAVgGAbgGQBhgJBjAVQBUASADAbg");
	this.shape_48.setTransform(426.6357,422.6847);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ak9BXQgSgEAmgcQAmgbBhgqQBhgqA6gQIAwgMQBhgJBjAVQBUASADAbQgMAUhGgKQg6gFgvgKQgjgHg9gDIgpAMQhvAhhEAiIheAsQgSAHgPAAIgLgBg");
	this.shape_49.setTransform(426.6357,422.6847);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19,p:{y:423.1436}},{t:this.shape_18,p:{y:423.1436}}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19,p:{y:423.1458}},{t:this.shape_18,p:{y:423.1458}}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_19,p:{y:423.1458}},{t:this.shape_18,p:{y:423.1458}}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_19,p:{y:423.1458}},{t:this.shape_18,p:{y:423.1458}}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Каркас_19
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AGXh1QgVAPg/ANIh8AYIikAeQgyAKguANQgyAOguASQhcAnhCAlQhEAngXgIQgXgIBkg8QBmg8BugkQAngNAogKQBOgWBbgOQCJgWBQgHQBQgHgVAPg");
	this.shape_50.setTransform(434.6866,452.4682);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AmWB/QgXgIBkg8QBmg8BugkQAngNAogKQBOgWBbgOQCJgWBQgHQBQgHgVAPQgVAPg/ANIh8AYIikAeQgyAKguANQgyAOguASQhcAnhCAlQg4AggaAAQgFAAgEgBg");
	this.shape_51.setTransform(434.6866,452.4682);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("AGUh8QgVAPg/AOIh8AXIikAeQgyAKgtAOQgxARguATQhZAphCApQhBAogYgGQgYgHBihAQBjg/BugpQAlgOApgMQBOgVBbgPQCJgVBQgIQBQgGgVAOg");
	this.shape_52.setTransform(434.9915,453.1194);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AmSCGQgYgHBihAQBjg/BugpQAlgOApgMQBOgVBbgPQCJgVBQgIQBQgGgVAOQgVAPg/AOIh8AXIikAeQgyAKgtAOQgxARguATQhZAphCApQg4AjgaAAIgHgBg");
	this.shape_53.setTransform(434.9915,453.1194);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("AGQiCQgVAPg+ANIh9AYIijAeQgyAKgtAOQgwASgtAWQhYAshAArQg/ArgZgFQgYgGBghEQBghDBsgtQAkgPAqgNQBPgWBbgOQCIgWBQgHQBRgHgWAPg");
	this.shape_54.setTransform(435.3366,453.7806);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AmPCNQgYgGBghEQBghDBsgtQAkgPAqgNQBPgWBbgOQCIgWBQgHQBRgHgWAPQgVAPg+ANIh9AYIijAeQgyAKgtAOQgwASgtAWQhYAshAArQg4AmgaAAIgGAAg");
	this.shape_55.setTransform(435.3366,453.7806);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("AGMiJQgVAPg+AOIh9AXIijAeQgyAKgsAPQgvAVgtAWQhVAwg/AtQg+AugYgEQgYgGBdhHQBdhHBqgxQAkgRAqgOQBPgVBbgPQCIgVBQgIQBRgGgWAOg");
	this.shape_56.setTransform(435.7054,454.4445);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AmLCUQgYgGBdhHQBdhHBqgxQAkgRAqgOQBPgVBbgPQCIgVBQgIQBRgGgWAOQgVAPg+AOIh9AXIijAeQgyAKgsAPQgvAVgtAWQhVAwg/AtQg4AqgZAAIgFAAg");
	this.shape_57.setTransform(435.7054,454.4445);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("AGIiPQgVAPg+ANIh9AYIijAeQgyAKgrAPQguAWgsAYQhUAzg8AwQg8AwgZgDQgYgFBahLQBahKBpg1QAjgSAqgPQBPgWBbgOQCIgWBQgHQBRgHgWAPg");
	this.shape_58.setTransform(436.1156,455.0613);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AmHCaQgYgFBahLQBahKBpg1QAjgSAqgPQBPgWBbgOQCIgWBQgHQBRgHgWAPQgVAPg+ANIh9AYIijAeQgyAKgrAPQguAWgsAYQhUAzg8AwQg4AtgZAAIgEAAg");
	this.shape_59.setTransform(436.1156,455.0613);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("AGEiWQgVAPg+AOIh9AXIijAeQgyAKgqAQQgtAYgrAaQhRA2g7AyQg7AzgYgDQgYgDBXhPQBXhOBmg5QAjgTAqgRQBPgVBbgPQCIgVBQgIQBRgGgWAOg");
	this.shape_60.setTransform(436.5421,455.7053);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AmCCgQgYgDBXhPQBXhOBmg5QAjgTAqgRQBPgVBbgPQCIgVBQgIQBRgGgWAOQgVAPg+AOIh9AXIijAeQgyAKgqAQQgtAYgrAaQhRA2g7AyQg4AxgZAAIgCgBg");
	this.shape_61.setTransform(436.5421,455.7053);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("AGAicQgVAPg/AOIh8AXIikAeQgyAKgoAQQgtAZgpAcQhQA6g4A0Qg4A1gZgCQgZgCBUhSQBUhSBkg8QAigVArgSQBOgVBbgPQCJgVBQgIQBQgGgVAOg");
	this.shape_62.setTransform(437,456.3015);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("Al+CmQgYgCBUhSQBUhSBkg8QAigVArgSQBOgVBbgPQCIgVBRgIQBQgGgWAOQgUAPg/AOIh9AXIijAeQgyAKgoAQQgtAZgqAcQhPA6g5A0Qg2A0gZAAIgCgBg");
	this.shape_63.setTransform(437,456.3015);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AF7iiQgVAPg/AOIh8AXIikAeQgyAKgnAQQgsAbgoAeQhOA9g2A2Qg2A3gZgBQgYgBBRhWQBQhUBihAQAhgXArgTQBOgVBbgPQCJgVBQgIQBQgGgVAOg");
	this.shape_64.setTransform(437.4671,456.9003);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Al5CsQgYgBBRhWQBQhUBihAQAhgWArgUQBOgVBbgPQCJgVBQgIQBQgGgVAOQgVAPg/AOIh8AYIikAdQgyALgnAPQgsAcgoAdQhOA9g2A2Qg1A3gZAAIgBgBg");
	this.shape_65.setTransform(437.4671,456.9003);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AF2inQgVAPg/ANIh8AYIikAeQgyAKgmAQQgqAdgoAfQhLBAg0A4Qg0A5gZAAQgYAABNhZQBOhXBfhFQAfgXAsgUQBOgWBbgOQCJgWBQgHQBQgHgVAPg");
	this.shape_66.setTransform(437.9574,457.4744);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("Ak/BZQBOhXBfhFQAfgXAsgUQBOgWBbgOQCJgWBQgHQBQgHgVAPQgVAPg/ANIh8AYIikAeQgyAKgmAQQgqAdgoAfQhLBAg0A4Qg0A5gZAAQgYAABNhZg");
	this.shape_67.setTransform(437.9574,457.4744);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AFxisQgVAPg/ANIh8AYIijAeQgzAKglAQQgqAfglAhQhIBCgzA6QgxA7gZABQgZABBKhcQBKhaBchIQAfgZAsgVQBOgWBbgOQCJgWBQgHQBQgHgVAPg");
	this.shape_68.setTransform(438.4719,457.9999);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("Ak9BdQBKhaBchJQAfgYAsgWQBOgVBbgPQCJgVBQgHQBQgHgVAPQgVAPg/ANIh8AYIijAeQgzAKglAQQgqAfglAhQhIBCgzA6QgxA7gZABIgBAAQgXAABJhbg");
	this.shape_69.setTransform(438.4719,457.9999);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AF7iiQgVAPg/AOIh8AXIikAeQgyAKgnAQQgsAbgoAeQhNA9g3A2Qg2A3gZgBQgYgBBRhWQBQhUBihAQAhgXArgTQBOgVBbgPQCJgVBQgIQBQgGgVAOg");
	this.shape_70.setTransform(437.4671,456.9003);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Al5CsQgYgBBRhWQBQhUBihAQAhgWArgUQBOgVBbgPQCJgVBQgIQBQgGgVAOQgVAPg/AOIh8AYIikAdQgyALgnAPQgsAcgoAdQhNA9g3A2Qg1A3gZAAIgBgBg");
	this.shape_71.setTransform(437.4671,456.9003);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AF2inQgVAPg/ANIh8AYIikAeQgyAKgmAQQgqAdgoAfQhLA/g0A5Qg0A5gZAAQgYAABNhZQBOhXBfhFQAfgXAsgUQBOgWBbgOQCJgWBQgHQBQgHgVAPg");
	this.shape_72.setTransform(437.9574,457.4744);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("Ak/BZQBOhXBfhFQAfgXAsgUQBOgWBbgOQCJgWBQgHQBQgHgVAPQgVAPg/ANIh8AYIikAeQgyAKgmAQQgqAdgoAfQhLA/g0A5Qg0A5gZAAQgYAABNhZg");
	this.shape_73.setTransform(437.9574,457.4744);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AFxisQgVAPg/ANIh8AYIijAeQgzAKglAQQgqAfglAhQhIBCgzA6QgxA6gZACQgZAABKhbQBKhaBchIQAfgZAsgVQBOgWBbgOQCJgWBQgHQBQgHgVAPg");
	this.shape_74.setTransform(438.4719,457.9994);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Ak9BdQBKhaBchIQAfgZAsgVQBOgWBbgOQCJgWBQgHQBQgHgVAPQgVAPg/ANIh8AYIijAeQgzAKglAQQgqAfglAhQhIBCgzA6QgxA6gZACQgZAABKhbg");
	this.shape_75.setTransform(438.4719,457.9994);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("AGXh1QgVAPg/ANIh8AYIikAeQgyAKguANQgyAOgvATQhaAlhEAmQhCAngYgIQgXgIBkg9QBlg7BvgkQAmgNApgKQBOgWBbgOQCJgWBQgHQBQgHgVAPg");
	this.shape_76.setTransform(434.6624,452.4682);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AmWB/QgXgIBkg9QBlg7BvgkQAmgNApgKQBOgWBbgOQCJgWBQgHQBQgHgVAPQgVAPg/ANIh8AYIikAeQgyAKguANQgyAOgvATQhaAlhEAmQg3AggaAAQgFAAgEgBg");
	this.shape_77.setTransform(434.6624,452.4682);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,1,1).p("AGXh1QgVAPg+ANIh9AYIijAeQgyAKgvANQgxAOgvATQhbAlhDAmQhDAngYgIQgXgIBlg9QBkg7BwgkQAlgNApgKQBPgWBbgOQCIgWBQgHQBRgHgWAPg");
	this.shape_78.setTransform(434.6383,452.4682);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AmWB/QgXgIBlg9QBkg7BwgkQAlgNApgKQBPgWBbgOQCIgWBQgHQBRgHgWAPQgVAPg+ANIh9AYIijAeQgyAKgvANQgxAOgvATQhbAlhDAmQg3AggbAAQgFAAgEgBg");
	this.shape_79.setTransform(434.6383,452.4682);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50}]}).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).wait(1));

	// Каркас_21
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1,1,1).p("AFki+QgPAUg5AcQg6Aeg5AaIiWBHQg8AdgxAcIgzAgQgmAZgfAXIgmAeQgnAjg1ALQgyAMBUhJIASgPQBMg9BVgxIBcgwQA8geBHggQB+g4BLgcQBNgcgSAUg");
	this.shape_80.setTransform(460.7766,478.0999);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AkyCJIASgPQBMg9BVgxIBcgwQA8gfBHgfQB+g4BLgcQBNgcgSAUQgPAUg5AcQg6Aeg5AZIiWBIQg8AdgxAcIgzAfQgmAagfAXIgmAeQgnAjg1ALIgLACQgbAABIg/g");
	this.shape_81.setTransform(460.7766,478.0999);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1,1,1).p("AFfjFQgPAUg5AcQg6Aeg5AaIiWBHQg8AdguAdIgzAjQgkAbgeAYIglAgQglAlg0ANQgxAOBPhMIASgQQBJhBBTg1QApgZAygaQA8geBHggQB+g4BLgcQBNgcgSAUg");
	this.shape_82.setTransform(461.2632,478.7736);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AkxCOIASgQQBJhBBTg1QApgZAygaQA8geBHggQB+g4BLgcQBNgcgSAUQgPAUg5AcQg6Aeg5AaIiWBHQg8AdguAdIgzAjQgkAbgeAYIglAgQglAlg0ANQgHACgFAAQgZAABDhAg");
	this.shape_83.setTransform(461.2632,478.7736);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1,1,1).p("AFajLQgPATg5AdQg6Aeg5AZIiWBIQg8AdgsAeIgxAlQgkAcgbAaIgkAiQgjAngzAPQgxARBMhQIARgRQBGhEBQg5QAogbAygbQA8gfBHggQB+g4BLgbQBNgdgSAVg");
	this.shape_84.setTransform(461.7932,479.438);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AkuCTIARgRQBGhEBQg5QAogbAygbQA8gfBHggQB+g4BLgbQBNgdgSAVQgPATg5AdQg6Aeg5AZIiWBIQg8AdgsAeIgxAlQgkAcgbAaIgkAiQgjAngzAPQgJADgEAAQgXAAA/hCg");
	this.shape_85.setTransform(461.7932,479.438);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(1,1,1).p("AFUjSQgPAUg5AcQg6Aeg5AaIiWBHQg8AegqAfIgvAnQgiAegbAbIghAkQgiAogyASQgwATBIhTIAQgSQBChIBOg8QAngdAygdQA8geBHggQB+g4BLgcQBNgcgSAUg");
	this.shape_86.setTransform(462.3529,480.0973);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AksCYIAQgSQBChIBOg8QAngdAygdQA8geBHggQB+g4BLgcQBNgcgSAUQgPAUg5AcQg6Aeg5AaIiWBHQg8AegqAfIgvAnQgiAegbAbIghAkQgiAogyASQgIAEgFAAQgVAAA6hEg");
	this.shape_87.setTransform(462.3529,480.0973);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1,1,1).p("AFOjYQgPATg5AdQg6Aeg5AZIiVBIQg9AegoAgIgsApQghAggZAcIggAmQggApgxAVQguAVBDhXIAPgTQA/hLBKg/QAlgfAzgeQA8gfBHggQB+g4BLgbQBNgdgSAVg");
	this.shape_88.setTransform(462.9645,480.7263);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AkpCcIAPgTQA/hLBKg/QAlgfAzgeQA8gfBHggQB+g4BLgbQBNgdgSAVQgPATg5AdQg6Aeg5AZIiVBIQg9AegoAgIgsApQghAggZAcIggAmQggApgxAVQgJAEgEAAQgUAAA2hGg");
	this.shape_89.setTransform(462.9645,480.7263);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1,1,1).p("AFIjeQgPATg5AdQg6Aeg5AZIiVBIQg9AeglAhIgrArQgfAhgYAeIgeAnQgdArgwAXQguAYA/haIAPgUQA6hOBHhDQAkghAzgfQA9gfBGggQB+g4BLgbQBNgdgSAVg");
	this.shape_90.setTransform(463.5801,481.3395);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AkmChIAPgUQA6hOBHhDQAkghAzgfQA9gfBGggQB+g4BLgbQBNgdgSAVQgPATg5AdQg6Aeg5AZIiVBIQg9AeglAhIgrArQgfAhgYAeIgeAnQgdArgwAXQgJAFgFAAQgTAAAyhHg");
	this.shape_91.setTransform(463.5801,481.3395);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1,1,1).p("AFCjkQgQATg5AdQg5Aeg6AZIiUBIQg+AegiAhIgpAuQgdAjgWAfIgcAoQgbAtgvAZQgtAZA7hcIANgVQA3hQBDhHQAigjAzggQA+gfBFggQB+g4BMgbQBMgdgRAVg");
	this.shape_92.setTransform(464.2393,481.9121);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AkiClIANgVQA3hQBDhHQAigjAzggQA+gfBFggQB+g4BMgbQBMgdgRAVQgQATg5AdQg5Aeg6AZIiUBIQg+AegiAhIgpAuQgdAjgWAfIgcAoQgbAtgvAZQgKAGgFAAQgSAAAvhJg");
	this.shape_93.setTransform(464.2393,481.9121);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1,1,1).p("AE7jpQgQATg5AdQg5Aeg6AZIiUBIQg+AeggAiQgUAYgSAYQgbAkgVAgIgaAqQgZAuguAbQgrAbA2hfIAMgVQAzhTBAhKQAggkAzgiQA+gfBFggQB+g4BMgbQBMgdgRAVg");
	this.shape_94.setTransform(464.9225,482.4437);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AkfCpIAMgVQAzhTBAhKQAggkAzgiQA+gfBFggQB+g4BMgbQBMgdgRAVQgQATg5AdQg5Aeg6AZIiUBIQg+AeggAiIgmAwQgbAkgVAgIgaAqQgZAuguAbQgJAGgFAAQgRAAAqhKg");
	this.shape_95.setTransform(464.9225,482.4437);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,1,1).p("AE0juQgQATg5AdQg5Aeg6AZIiUBIQg+AegdAjQgUAZgQAYQgaAmgTAhIgYAqQgXAwgsAdQgqAeAyhiIALgWQAuhVA9hNQAegmAzgjQA+gfBFggQB+g4BMgbQBMgdgRAVg");
	this.shape_96.setTransform(465.624,482.9374);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AkbCtIALgWQAuhVA9hNQAegmAzgjQA+gfBFggQB+g4BMgbQBMgdgRAVQgQATg5AdQg5Aeg6AZIiUBIQg+AegdAjQgUAZgQAYQgaAmgTAhIgYAqQgXAwgsAdQgJAHgFAAQgQAAAmhLg");
	this.shape_97.setTransform(465.624,482.9374);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(1,1,1).p("AEtjzQgQAUg5AcQg5Aeg6AaIiUBHQg+AegbAlIghAyQgYAmgSAiIgWAsQgUAwgrAgQgoAgAthlIAKgWQArhXA4hQQAcgnAzglQA+geBFggQB+g4BMgcQBMgcgRAUg");
	this.shape_98.setTransform(466.3287,483.397);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AkXCwIAKgWQArhXA4hQQAcgnAzglQA+geBFggQB+g4BMgcQBMgcgRAUQgQAUg5AcQg5Aeg6AaIiUBHQg+AegbAlIghAyQgYAmgSAiIgWAsQgUAwgrAgQgJAIgFAAQgQAAAjhNg");
	this.shape_99.setTransform(466.3287,483.397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80}]}).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).wait(1));

	// Каркас_23
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(1,1,1).p("AiUAVQirAmgRgYQgOgaB1gRQBigSB3gMIAFgBQA7gGBpACQBqADAuAMQAtALgPALQgQAIgcABQgbABhMgGQhMgEhzAJIgPABQhZAIgpAJg");
	this.shape_100.setTransform(791.6874,409.716);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AlQAjQgOgaB1gRQBigSB3gMIAFgBQA7gGBpACQBqADAuAMQAtALgPALQgQAIgcABQgbABhMgGQhMgEhzAJIgPABQhZAIgpAJQhpAYgvAAQgdAAgHgKg");
	this.shape_101.setTransform(791.6874,409.716);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(1,1,1).p("AiUAUQirAmgRgYQgUglFUglIAGAAQA6gFBqAGQBqAHAtAMQAsANgPAJQgQAJgbAAQgcAAhMgIQhLgHh0AFIgOABQhZAJgpAJg");
	this.shape_102.setTransform(791.6697,409.8509);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AlQAiQgUglFUglIAGAAQA6gFBqAGQBqAHAtAMQAsANgPAJQgQAJgbAAQgcAAhMgIQhLgHh0AFIgOABQhZAJgpAJQhpAXgvAAQgdAAgHgJg");
	this.shape_103.setTransform(791.6697,409.8509);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(1,1,1).p("AiUATQirAmgQgYQgOgaB0gTQBjgTB3gJIAGgBQA6gDBqAKQBpAKAtAOQAsAOgQAJQgQAJgbgBQgcgChLgKQhLgKh0ACIgOABQhZAIgpAJg");
	this.shape_104.setTransform(791.6115,409.9299);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AlPAhQgOgaB0gTQBjgTB3gJIAGgBQA6gDBqAKQBpAKAtAOQAsAOgQAJQgQAJgbgBQgcgChLgKQhLgKh0ACIgOABQhZAIgpAJQhoAXgvAAQgeAAgGgJg");
	this.shape_105.setTransform(791.6115,409.9299);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1,1,1).p("AiTATQirAmgQgYQgOgbB0gTQBjgTB3gJIAGAAQA7AABpAMQBpANAsAQQAsAPgQAJQgRAJgbgDQgbgChLgNQhLgNh0gBIgNAAQhZAJgpAJg");
	this.shape_106.setTransform(791.54,409.9886);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AlOAhQgOgbB0gTQBjgTB3gJIAGAAQA7AABpAMQBpANAsAQQAsAPgQAJQgRAJgbgDQgbgChLgNQhLgNh0gBIgNAAQhZAJgpAJQhpAXguAAQgeAAgGgJg");
	this.shape_107.setTransform(791.54,409.9886);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(1,1,1).p("AiSATQirAmgRgYQgOgbB1gUQBjgUB3gHIAGAAQA7ACBpAQQBoAQAsARQArARgQAIQgRAJgbgEQgcgDhKgQQhKgPh0gEIgMgBQhZAJgpAJg");
	this.shape_108.setTransform(791.4771,409.9895);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AlOAhQgOgbB1gUQBjgUB3gHIAGAAQA7ACBpAQQBoAQAsARQArARgQAIQgRAJgbgEQgcgDhKgQQhKgPh0gEIgMgBQhZAJgpAJQhpAXgvAAQgdAAgHgJg");
	this.shape_109.setTransform(791.4771,409.9895);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(1,1,1).p("AiRAOQirAmgRgYQgOgbB1gVQBjgUB3gGIAHABQA7ADBnATQBpAVArARQAqASgQAJQgRAHgbgEQgcgEhKgSQhJgSh0gHIgLgBQhZAIgpAJg");
	this.shape_110.setTransform(791.3709,410.4583);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AEfAtQgcgEhKgSQhJgSh0gHIgLgBQhZAIgpAJQirAmgRgYQgOgbB1gVQBjgUB3gGIAHABQA7ADBnATQBpAVArARQAqASgQAJQgMAFgPAAIgRgCg");
	this.shape_111.setTransform(791.3709,410.4583);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(1,1,1).p("AiQAJQirAmgRgYQgOgaB1gWQBjgVB4gFIAHABQA6AFBnAXQBnAXArAUQAqATgRAIQgRAHgbgFIhlgZQhIgUh0gMQgIgBgCAAQhZAIgpAJg");
	this.shape_112.setTransform(791.2579,410.9792);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AEdAyIhlgZQhIgUh0gMIgKgBQhZAIgpAJQirAmgRgYQgOgaB1gWQBjgVB4gFIAHABQA6AFBnAXQBnAXArAUQAqATgRAIQgJAEgOAAQgKAAgLgCg");
	this.shape_113.setTransform(791.2579,410.9792);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(1,1,1).p("AiPADQirAmgQgYQgOgZB1gYQBjgUB3gEIAIABQA6AHBmAaQBmAaArAVQApAVgRAIQgRAGgbgGIhkgdQhIgVhzgQQgIgCgCABQhZAIgpAIg");
	this.shape_114.setTransform(791.135,411.5065);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AEcA2IhkgdQhIgVhzgQIgKgBQhZAIgpAIQirAmgQgYQgOgZB1gYQBjgUB3gEIAIABQA6AHBmAaQBmAaArAVQApAVgRAIQgJADgMAAQgKAAgNgDg");
	this.shape_115.setTransform(791.135,411.5065);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1,1,1).p("AiNgBQirAlgRgYQgOgaB2gYQBjgVB3gCIAHABQA6AIBmAeQBmAdApAXQAoAXgRAGQgSAGgagHIhjggQhIgYhygTQgHgCgBAAQhZAJgpAJg");
	this.shape_116.setTransform(790.9768,412.051);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AEaA6IhjggQhIgYhygTIgIgCQhZAJgpAJQirAlgRgYQgOgaB2gYQBjgVB3gCIAHABQA6AIBmAeQBmAdApAXQAoAXgRAGQgIADgKAAQgMAAgOgEg");
	this.shape_117.setTransform(790.9768,412.051);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1,1,1).p("AiMgGQirAlgQgYQgOgaB2gZQBjgVB3gBIAHABQA6ALBlAhQBkAgApAYQAoAYgSAGQgSAFgagIQgagHhIgcQhGgahygXQgIgDAAABQhZAJgpAJg");
	this.shape_118.setTransform(790.8171,412.562);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AEYA+QgagHhIgcQhGgahygXQgIgDAAABQhZAJgpAJQirAlgQgYQgOgaB2gZQBjgVB3gBIAHABQA6ALBlAhQBkAgApAYQAoAYgSAGQgHACgJAAQgMAAgQgFg");
	this.shape_119.setTransform(790.8171,412.562);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1,1,1).p("AiUAVQirAmgRgYQgOgbB1gRQBigSB3gMIAFAAQA7gHBpAEQBqAEAtALQAtAMgPAKQgPAJgcAAQgbAAhMgFQhMgGhzAJIgPABQhZAJgpAJg");
	this.shape_120.setTransform(791.6624,409.7533);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AlQAjQgOgbB1gRQBigSB3gMIAFAAQA7gHBpAEQBqAEAtALQAtAMgPAKQgPAJgcAAQgbAAhMgFQhMgGhzAJIgPABQhZAJgpAJQhpAXgvAAQgdAAgHgJg");
	this.shape_121.setTransform(791.6624,409.7533);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1,1,1).p("AiUAVQirAmgRgYQgOgbB1gRQBigSB3gMIAFAAQA7gGBpAEQBqAEAtAMQAtAMgPAKQgPAJgcAAQgbAAhMgGQhMgGhzAIIgPABQhZAJgpAJg");
	this.shape_122.setTransform(791.6624,409.7845);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AlQAjQgOgbB1gRQBigSB3gMIAFAAQA7gGBpAEQBqAEAtAMQAtAMgPAKQgPAJgcAAQgbAAhMgGQhMgGhzAIIgPABQhZAJgpAJQhpAXgvAAQgdAAgHgJg");
	this.shape_123.setTransform(791.6624,409.7845);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1,1,1).p("AiUAUQirAmgQgYQgOgaB0gRQBjgTB3gLIAFgBQA6gGBqAFQBqAGAtAMQAtAMgQAKQgPAIgcABIhngIQhLgFh0AHIgPABQhZAIgpAJg");
	this.shape_124.setTransform(791.6485,409.8009);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AlPAiQgOgaB0gRQBjgTB3gLIAFgBQA6gGBqAFQBqAGAtAMQAtAMgQAKQgPAIgcABIhngIQhLgFh0AHIgPABQhZAIgpAJQhpAYgvAAQgdAAgGgKg");
	this.shape_125.setTransform(791.6485,409.8009);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1,1,1).p("AiUAUQirAmgQgYQgOgaB0gSQBjgSB3gLIAFgBQA7gFBpAFQBqAGAtANQAtAMgQAJQgPAKgcAAIhngIQhMgHhzAHIgPABQhZAIgpAJg");
	this.shape_126.setTransform(791.6485,409.8395);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AlPAiQgOgaB0gSQBjgSB3gLIAFgBQA7gFBpAFQBqAGAtANQAtAMgQAJQgPAKgcAAIhngIQhMgHhzAHIgPABQhZAIgpAJQhpAXgvAAQgdAAgGgJg");
	this.shape_127.setTransform(791.6485,409.8395);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(1,1,1).p("AiUAUQirAmgRgYQgUglFUglIAGAAQA6gFBpAGQBqAHAtAMQAtANgPAJQgRAJgbAAQgbAAhMgJQhLgGh0AFIgOABQhZAJgpAJg");
	this.shape_128.setTransform(791.668,409.8509);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AlQAiQgUglFUglIAGAAQA6gFBpAGQBqAHAtAMQAtANgPAJQgRAJgbAAQgbAAhMgJQhLgGh0AFIgOABQhZAJgpAJQhpAXgvAAQgdAAgHgJg");
	this.shape_129.setTransform(791.668,409.8509);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(1,1,1).p("AiUATQirAmgQgYQgWgoFWghIAGgBQA6gDBpAJQBqAKAtAOQAsANgQAKQgQAJgbgBIhngMQhLgJh0ACIgOABQhZAIgpAJg");
	this.shape_130.setTransform(791.6201,409.927);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AlPAhQgWgoFWghIAGgBQA6gDBpAJQBqAKAtAOQAsANgQAKQgQAJgbgBIhngMQhLgJh0ACIgOABQhZAIgpAJQhpAYguAAQgeAAgGgKg");
	this.shape_131.setTransform(791.6201,409.927);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(1,1,1).p("AiTATQirAmgRgYQgOgbB1gTQBigTB4gJIAGAAQA6gBBpAMQBpANAtAPQArAOgPAJQgRAJgbgCQgcgChLgNQhLgMhzAAIgNAAQhZAJgpAJg");
	this.shape_132.setTransform(791.5535,409.9812);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AlPAhQgOgbB1gTQBigTB4gJIAGAAQA6gBBpAMQBpANAtAPQArAOgPAJQgRAJgbgCQgcgChLgNQhLgMhzAAIgNAAQhZAJgpAJQhpAXgvAAQgdAAgHgJg");
	this.shape_133.setTransform(791.5535,409.9812);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(1,1,1).p("AiSATQirAmgRgYQgOgbB1gTQBigUB4gIIAGAAQA7ABBoAPQBpAQAsAPQArAQgQAJQgQAJgcgDQgbgDhLgPQhKgOh0gEIgMAAQhZAJgpAJg");
	this.shape_134.setTransform(791.4919,409.9895);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AlOAhQgOgbB1gTQBigUB4gIIAGAAQA7ABBoAPQBpAQAsAPQArAQgQAJQgQAJgcgDQgbgDhLgPQhKgOh0gEIgMAAQhZAJgpAJQhpAXgvAAQgeAAgGgJg");
	this.shape_135.setTransform(791.4919,409.9895);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(1,1,1).p("AiSAQQirAmgQgYQgOgaB1gVQBigUB4gGIAGAAQA7ACBoASQBoATAsARQArASgRAIQgRAHgbgDIhmgVQhJgPh0gHIgMAAQhZAHgpAJg");
	this.shape_136.setTransform(791.416,410.2179);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AEfArIhmgVQhJgPh0gHIgMAAQhZAHgpAJQirAmgQgYQgOgaB1gVQBigUB4gGIAGAAQA7ACBoASQBoATAsARQArASgRAIQgMAFgRAAIgPgBg");
	this.shape_137.setTransform(791.416,410.2179);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(1,1,1).p("AiRAMQirAmgQgYQgOgaB1gWQBjgUB3gGIAHABQA6AEBoAVQBnAWArASQArATgRAIQgRAHgbgFQgbgEhKgTQhKgShzgKQgIgBgDAAQhZAIgpAJg");
	this.shape_138.setTransform(791.3283,410.688);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AEeAvQgbgEhKgTQhKgShzgKQgIgBgDAAQhZAIgpAJQirAmgQgYQgOgaB1gWQBjgUB3gGIAHABQA6AEBoAVQBnAWArASQArATgRAIQgLAEgOAAQgJAAgKgCg");
	this.shape_139.setTransform(791.3283,410.688);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(1,1,1).p("AiQAHQirAmgQgYQgOgZB1gXQBjgVB3gEIAHABQA7AFBnAYQBnAYAqAUQAqAVgRAHQgRAGgcgEIhkgbQhIgVh0gMIgKgBQhZAIgpAIg");
	this.shape_140.setTransform(791.2201,411.1464);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AEcA0IhkgbQhIgVh0gMIgKgBQhZAIgpAIQirAmgQgYQgOgZB1gXQBjgVB3gEIAHABQA7AFBnAYQBnAYAqAUQAqAVgRAHQgKADgNAAQgKAAgMgBg");
	this.shape_141.setTransform(791.2201,411.1464);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(1,1,1).p("AiOACQirAmgRgYQgOgZB2gYQBjgVB3gDIAHABQA7AHBmAbQBmAbAqAWQAoAVgQAHQgSAGgbgGIhjgdQhIgXhzgQQgIgCgBABQhZAIgpAIg");
	this.shape_142.setTransform(791.0893,411.6315);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AEbA3IhjgdQhIgXhzgQIgJgBQhZAIgpAIQirAmgRgYQgOgZB2gYQBjgVB3gDIAHABQA7AHBmAbQBmAbAqAWQAoAVgQAHQgKADgLAAQgLAAgNgDg");
	this.shape_143.setTransform(791.0893,411.6315);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(1,1,1).p("AiNgCQirAlgRgYQgOgZB2gYQBjgWB3gCIAHABQA7AJBlAeQBmAeAoAXQApAWgRAHQgSAFgbgGIhighQhIgYhygUQgHgCgBABQhZAIgpAJg");
	this.shape_144.setTransform(790.9518,412.101);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AEZA7IhighQhIgYhygUIgIgBQhZAIgpAJQirAlgRgYQgOgZB2gYQBjgWB3gCIAHABQA7AJBlAeQBmAeAoAXQApAWgRAHQgIADgKAAQgMAAgPgEg");
	this.shape_145.setTransform(790.9518,412.101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100}]}).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).wait(1));

	// Каркас_25
	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(1,1,1).p("AlNgkQg/gEgXgLQgWgLBPgGQBRgFCKACQA/AAA8AFQBEAFA+ALQB1AUBsAsQBtAtgXAKQgWAMhIgcQhHgchggXQhcgWhigFIgJAAIingGg");
	this.shape_146.setTransform(787.5772,444.3751);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AFHA1QhHgchggXQhcgWhigFIgJAAIingGIh/gFQg/gEgXgLQgWgLBPgGQBRgFCKACQA/AAA8AFQBEAFA+ALQB1AUBsAsQBtAtgXAKQgHAEgKAAQgaAAgzgUg");
	this.shape_147.setTransform(787.5772,444.3751);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(1,1,1).p("AlLgpQg/gEgXgLQgXgLBQgGQBQgFCLACQA/AAA8AFQBEAGA+ANQBzAXBrAuQBsAwgXAKQgWALhIgeQhGgehfgZQhcgXhhgIIgJAAIingGg");
	this.shape_148.setTransform(787.4287,444.8955);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AFFA4QhGgehfgZQhcgXhhgIIgJAAIingGIh+gFQg/gEgXgLQgXgLBQgGQBQgFCLACQA/AAA8AFQBEAGA+ANQBzAXBrAuQBsAwgXAKQgGADgJAAQgaAAg1gWg");
	this.shape_149.setTransform(787.4287,444.8955);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(1,1,1).p("AlKgvQg/gDgXgMQgWgLBPgFQBRgFCKABQA/AAA9AFQBEAIA9APQBzAZBqAyQBqAygWAKQgXAKhHggQhFgfhfgcQhbgahhgJIgIgBIingGg");
	this.shape_150.setTransform(787.2731,445.4282);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AFEA7QhFgfhfgcQhbgahhgJIgIgBIingGIh/gFQg/gDgXgMQgWgLBPgFQBRgFCKABQA/AAA9AFQBEAIA9APQBzAZBqAyQBqAygWAKQgGACgIAAQgaAAg2gYg");
	this.shape_151.setTransform(787.2731,445.4282);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(1,1,1).p("AlIg0Qg/gEgXgLQgWgLBPgGQBRgFCKACQA/AAA9AFQBEAIA9ASQByAcBpA0QBpA1gXAJQgXAJhGghQhFghhegdQhagdhggMIgIAAIingGg");
	this.shape_152.setTransform(787.0835,445.9541);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AFDA+QhFghhegdQhagdhggMIgIAAIingGIh/gFQg/gEgXgLQgWgLBPgGQBRgFCKACQA/AAA9AFQBEAIA9ASQByAcBpA0QBpA1gXAJQgFACgHAAQgaAAg3gag");
	this.shape_153.setTransform(787.0835,445.9541);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(1,1,1).p("AlGg5Qg/gEgXgLQgXgLBQgGQBQgFCLACQA/AAA9AFQBDAJA+AUQBwAfBoA3QBoA3gXAJQgYAIhFgiQhEgjhdggQhagfhfgOIgIAAIingGg");
	this.shape_154.setTransform(786.9176,446.4667);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AFBBCQhEgjhdggQhagfhfgOIgIAAIingGIh+gFQg/gEgXgLQgXgLBQgGQBQgFCLACQA/AAA9AFQBDAJA+AUQBwAfBoA3QBoA3gXAJQgFACgGAAQgbAAg3gcg");
	this.shape_155.setTransform(786.9176,446.4667);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(1,1,1).p("AlEg+Qg/gEgXgLQgXgLBQgGQBQgFCLACQA/AAA9AFQBDAKA9AXQBwAiBmA4QBnA7gYAIQgXAHhEgkQhEgkhcgiQhYgihfgQIgIAAIingGg");
	this.shape_156.setTransform(786.7036,446.9973);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AFABFQhEgkhcgiQhYgihfgQIgIAAIingGIh+gFQg/gEgXgLQgXgLBQgGQBQgFCLACQA/AAA9AFQBDAKA9AXQBwAiBmA4QBnA7gYAIIgJABQgZAAg5geg");
	this.shape_157.setTransform(786.7036,446.9973);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(1,1,1).p("AlChEQg/gDgXgMQgWgLBPgFQBRgFCKABQA/AAA+AGQBDAKA8AaQBvAkBlA7QBlA9gYAIQgXAHhEgmQhCgmhbgkQhYgkhegTIgHAAIingGg");
	this.shape_158.setTransform(786.4745,447.5121);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AE+BIQhCgmhbgkQhYgkhegTIgHAAIingGIh/gFQg/gDgXgMQgWgLBPgFQBRgFCKABQA/AAA+AGQBDAKA8AaQBvAkBlA7QBlA9gYAIIgIABQgZAAg6ggg");
	this.shape_159.setTransform(786.4745,447.5121);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(1,1,1).p("AlAhJQg/gDgXgMQgWgLBPgFQBRgFCKABQA/AAA+AGQBDALA8AcQBuAnBjA+QBjBAgXAGQgYAGhCgnQhBgnhbgnQhWgmhegVIgHAAIingGg");
	this.shape_160.setTransform(786.2522,448.0227);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AE9BLQhBgnhbgnQhWgmhegVIgHAAIingGIh/gFQg/gDgXgMQgWgLBPgFQBRgFCKABQA/AAA+AGQBDALA8AcQBuAnBjA+QBjBAgXAGIgHABQgaAAg5gig");
	this.shape_161.setTransform(786.2522,448.0227);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(1,1,1).p("Ak9hOQg/gDgXgMQgXgLBQgFQBQgFCLABQA/AAA9AGQBEAMA7AeQBtAqBiBAQBhBCgYAGQgYAGhBgpQhAgphagpQhVgnhdgYIgHAAIingGg");
	this.shape_162.setTransform(786.0139,448.521);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AE7BOQhAgphagpQhVgnhdgYIgHAAIingGIh+gFQg/gDgXgMQgXgLBQgFQBQgFCLABQA/AAA9AGQBEAMA7AeQBtAqBiBAQBhBCgYAGIgGABQgaAAg5gkg");
	this.shape_163.setTransform(786.0139,448.521);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(1,1,1).p("Ak7hTQg/gDgXgMQgWgLBPgFQBRgFCKABQA/AAA+AGQBDANA7AhQBsAsBgBDQBgBDgYAGQgZAGhAgrQg/gqhYgrQhVgrhcgZIgGAAIingGg");
	this.shape_164.setTransform(785.7668,449.0142);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AE5BRQg/gqhYgrQhVgrhcgZIgGAAIingGIh/gFQg/gDgXgMQgWgLBPgFQBRgFCKABQA/AAA+AGQBDANA7AhQBsAsBgBDQBgBDgYAGIgGABQgaAAg5gmg");
	this.shape_165.setTransform(785.7668,449.0142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_147},{t:this.shape_146}]}).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).wait(1));

	// Каркас_27
	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(1,1,1).p("AkshiQg8gUgTgRQgUgRBPAQQBPAQCFAlQBaAZBMAaIBHAaQBnAnBdA6QBdA6g0gEQg0gDgsgcQgsgbhKgjQgzgXg+gWIg7gTIifgwg");
	this.shape_166.setTransform(765.5926,473.9971);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AFuCRQg0gDgsgcQgsgbhKgjQgzgXg+gWIg7gTIifgwIh5gmQg8gUgTgRQgUgRBPAQQBPAQCFAlQBaAZBMAaIBHAaQBnAnBdA6QBXA2gpAAIgFAAg");
	this.shape_167.setTransform(765.5926,473.9971);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(1,1,1).p("AkphqQg8gTgTgSQgTgRBPAQQBPAQCFAlQBZAZBNAbQAlAOAhAPQBlAsBaA+QBaA9gzgFQgzgGgsgdQgrgehHgmQgygZg9gYIg6gTIifgxg");
	this.shape_168.setTransform(765.2192,474.7309);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AFqCYQgzgGgsgdQgrgehHgmQgygZg9gYIg6gTIifgxIh6gmQg8gTgTgSQgTgRBPAQQBPAQCFAlQBZAZBNAbQAlAOAhAPQBlAsBaA+QBUA5gmAAIgHgBg");
	this.shape_169.setTransform(765.2192,474.7309);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(1,1,1).p("AklhxQg8gUgTgRQgTgRBPAQQBPAQCFAlQBZAZBNAbQAkAOAhASQBjAxBYBCQBWBCgzgIQgzgJgqgfQgpgghFgpQgxgbg7gaQgcgLgegJIifgwg");
	this.shape_170.setTransform(764.8028,475.4754);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AFlCfQgzgJgqgfQgpgghFgpQgxgbg7gaQgcgLgegJIifgwIh6gmQg8gUgTgRQgTgRBPAQQBPAQCFAlQBZAZBNAbQAkAOAhASQBjAxBYBCQBOA7giAAIgJgBg");
	this.shape_171.setTransform(764.8028,475.4754);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(1,1,1).p("Akgh4Qg8gUgTgRQgUgRBPAQQBPAQCFAlQBaAZBNAbQAkAPAgAVQBhA1BUBGQBTBGgygKQgygLgpghQgogihDgsQgvgeg6gdQgcgMgegHIifgwg");
	this.shape_172.setTransform(764.3586,476.1996);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AFhCmQgygLgpgiQgoghhDgsQgvgeg6gdQgcgMgegHIifgwIh5gnQg8gTgTgRQgUgRBPAQQBPAPCFAmQBaAZBNAbQAkAPAgAVQBhA1BUBGQBJA9geAAIgKgBg");
	this.shape_173.setTransform(764.3586,476.1996);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(1,1,1).p("Akbh/Qg8gUgTgRQgUgRBPAQQBPAQCFAlQBaAZBOAbQAjARAfAXQBeA5BRBKQBQBKgygMQgygOgngjQgmgjhBgwQguggg4gfQgbgMgegHIifgwg");
	this.shape_174.setTransform(763.8804,476.8963);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AFcCtQgygOgngjQgmgjhBgwQguggg4gfQgbgMgegHIifgwIh5gmQg8gUgTgRQgUgRBPAQQBPAQCFAlQBaAZBOAbQAjARAfAXQBeA5BRBKQBFA/gcAAIgLgBg");
	this.shape_175.setTransform(763.8804,476.8963);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(1,1,1).p("AkWiHQg8gTgTgSQgUgRBPAQQBPAQCFAlQBZAZBPAcQAjARAeAaQBbA+BNBOQBNBNgygOQgxgQglgmQgkgkg/gzQgsgig2giQgbgNgfgFIiegxg");
	this.shape_176.setTransform(763.3543,477.6014);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AFWCzQgxgQglgmQgkgkg/gzQgsgig2giQgbgNgfgFIiegxIh5gmQg8gTgTgSQgUgRBPAQQBPAQCFAlQBZAZBPAcQAjARAeAaQBbA+BNBOQBBBBgZAAQgFAAgIgCg");
	this.shape_177.setTransform(763.3543,477.6014);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(1,1,1).p("AkRiNQg8gUgTgRQgTgRBPAQQBPAQCFAlQBYAZBQAcQAiASAdAcQBZBCBJBRQBJBSgxgRQgxgSgjgnQgjgng8g1Qgqgkg0glQgbgNgegFIiegwg");
	this.shape_178.setTransform(762.816,478.266);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AFRC5QgxgSgjgnQgjgng8g1Qgqgkg0glQgbgNgegFIiegwIh6gmQg8gUgTgRQgTgRBPAQQBPAQCFAlQBYAZBQAcQAiASAdAcQBZBCBJBRQA8BEgXAAQgFAAgIgDg");
	this.shape_179.setTransform(762.816,478.266);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(1,1,1).p("AkLiTQg8gUgTgRQgTgRBPAQQBPAQCFAlQBYAZBQAcQAiATAcAfQBVBGBFBUQBFBVgwgTQgwgUghgpQghgpg5g4QgpglgxgnQgagOgfgEIiegwg");
	this.shape_180.setTransform(762.2295,478.8941);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AFLC/QgwgUghgpQghgpg5g4QgpglgxgnQgagOgfgEIiegwIh6gmQg8gUgTgRQgTgRBPAQQBPAQCFAlQBYAZBQAcQAiATAcAfQBVBGBFBUQA4BFgVAAQgFAAgJgDg");
	this.shape_181.setTransform(762.2295,478.8941);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(1,1,1).p("AkFiZQg8gUgTgRQgTgRBPAQQBPAQCFAlQBYAZBRAdQAhATAaAhQBSBKBBBYQBBBYgvgWQgvgWgfgrQgfgqg3g6QgngogvgoQgZgPgfgDIiegwg");
	this.shape_182.setTransform(761.6226,479.4982);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AFFDEQgvgWgfgrQgfgqg3g6QgngogvgoQgZgPgfgDIiegwIh6gmQg8gUgTgRQgTgRBPAQQBPAQCFAlQBYAZBRAdQAhATAaAhQBSBKBBBYQA0BGgUAAQgFAAgJgEg");
	this.shape_183.setTransform(761.6226,479.4982);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(1,1,1).p("Aj/ifQg8gTgTgSQgTgRBPAQQBPAQCFAlQBYAZBRAeQAhATAZAkQBOBOA9BaQA9BagugXQgugYgdgsQgdgrg1g9QgkgpgtgrQgZgPgfgCIiegxg");
	this.shape_184.setTransform(761.0208,480.0462);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AE/DJQgugYgdgsQgdgrg1g9QgkgpgtgrQgZgPgfgCIiegxIh6gmQg8gTgTgSQgTgRBPAQQBPAQCFAlQBYAZBRAeQAhATAZAkQBOBOA9BaQAwBIgTAAQgFAAgJgFg");
	this.shape_185.setTransform(761.0208,480.0462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_167},{t:this.shape_166}]}).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).wait(1));

	// носик
	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhsgGQAIgtBhAAQA2AAAMACQAlAIAIAjQAHAdgpABQgtACgBAIQgEASgSAAQgSgBgGgRQgDgIgwAAQgsgBAFgfg");
	this.shape_186.setTransform(625.9,395.5507);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AAGA0QgSgBgGgRQgDgIgxAAQgqgBAFgfQAHgtBhAAQA2AAAMACQAlAIAIAjQAHAdgpABQgtACgCAIQgDASgSAAIAAAAg");
	this.shape_187.setTransform(625.9,395.5507);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_187},{t:this.shape_186}]}).wait(130));

	// зрачки
	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(1,1,1).p("AJRiyQAqgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg3ggQg6gigPhJQgPhKAchJQAbhHAwgYgApXi8QAqgEAmBAQASAdAIAeQAKAhgCAiQgFBGgZA4QgeBAgrAAQgtAAgfgrQgdgpgIhAQgGgwAWg9QAGgPAIgQQAkhQAkgIg");
	this.shape_188.setTransform(620.1875,353.4786);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AJCCrQg6gigPhJQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkIACBtQgEBXgdAUQgRALgUAAQgaAAgegSgAqYCRQgdgpgIhAQgGgwAWg9IAOgfQAkhQAkgIQAqgEAmBAQASAdAIAeQAKAhgCAiQgFBGgZA4QgeBAgrAAQgtAAgfgrg");
	this.shape_189.setTransform(620.1875,353.4786);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(1,1,1).p("AIBA2QgPhKAchJQAbhHAwgYQApgDAkA6QAfAxAAAkQAAASACBbQgDBXgeAUQgmAZg2ggQg7gigOhJgArFAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_190.setTransform(622.8629,351.515);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AqgCRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAJKChQg7gigOhJQgPhKAchJQAbhHAwgYQApgDAkA6QAfAxAAAkIACBtQgDBXgeAUQgQALgVAAQgZAAgegSg");
	this.shape_191.setTransform(622.8629,351.515);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(1,1,1).p("AIIAxQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgArNAuQgGgwAXg9QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAhQgEBHgaA4QgeBAgrAAQgtAAgfgrQgdgpgIhAg");
	this.shape_192.setTransform(625.5629,349.065);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AqoCXQgdgpgIhAQgGgwAXg9QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAhQgEBHgaA4QgeBAgrAAQgtAAgfgrgAJRCcQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRAMgUAAQgZAAgfgSg");
	this.shape_193.setTransform(625.5629,349.065);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(1,1,1).p("AIQAsQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgArUAzQgGgxAXg8QAFgPAIgQQAkhQAkgIQAqgEAmBAQASAdAJAeQAJAhgCAhQgFBHgZA4QgeBAgrAAQgtAAgfgrQgdgpgIhAg");
	this.shape_194.setTransform(628.2379,346.615);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AqvCcQgdgpgIhAQgGgxAXg8QAFgPAIgQQAkhQAkgIQAqgEAmBAQASAdAJAeQAJAhgCAhQgFBHgZA4QgeBAgrAAQgtAAgfgrgAJZCXQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRAMgUAAQgaAAgegSg");
	this.shape_195.setTransform(628.2379,346.615);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(1,1,1).p("AIYAnQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjQAAASACBcQgDBXgeATQgmAag2ggQg7gigOhJgArcA4QgGgwAXg8QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAgQgEBHgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_196.setTransform(630.9379,344.19);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("Aq3ChQgdgogIhBQgGgwAXg8QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAgQgEBHgaA4QgeBBgrAAQgtAAgfgsgAJhCSQg7gigOhJQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjIACBuQgDBXgeATQgRALgUAAQgZAAgegRg");
	this.shape_197.setTransform(630.9379,344.19);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(1,1,1).p("AIfAhQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg3ggQg6gigPhJgArkA+QgGgxAXg8QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAhQgEBHgaA4QgeBAgrAAQgtAAgfgrQgdgpgIhAg");
	this.shape_198.setTransform(633.6129,341.74);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("Aq/CnQgdgpgIhAQgGgxAXg8QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAhQgEBHgaA4QgeBAgrAAQgtAAgfgrgAJoCMQg6gigPhJQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkIACBtQgEBXgdAUQgRALgUAAQgZAAgfgSg");
	this.shape_199.setTransform(633.6129,341.74);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(1,1,1).p("AInAcQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgArrBDQgGgxAXg8QAFgPAIgQQAkhQAkgIQAqgEAmBAQASAdAJAeQAJAhgCAhQgFBHgZA4QgeBAgrAAQgtAAgfgrQgdgpgIhAg");
	this.shape_200.setTransform(636.2879,339.315);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("ArGCsQgdgpgIhAQgGgxAXg8QAFgPAIgQQAkhQAkgIQAqgEAmBAQASAdAJAeQAJAhgCAhQgFBHgZA4QgeBAgrAAQgtAAgfgrgAJwCHQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRAMgUAAQgaAAgegSg");
	this.shape_201.setTransform(636.2879,339.315);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(1,1,1).p("AIvAXQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjQAAASACBcQgDBXgeATQgmAag2ggQg7gigOhJgArzBIQgGgwAXg8QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAgQgEBHgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_202.setTransform(638.9879,336.84);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("ArOCxQgdgogIhBQgGgwAXg8QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAgQgEBHgaA4QgeBBgrAAQgtAAgfgsgAJ4CCQg7gigOhJQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjIACBuQgDBXgeATQgRALgUAAQgZAAgegRg");
	this.shape_203.setTransform(638.9879,336.84);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(1,1,1).p("AKOjhQAqgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg3ggQg6gigPhJQgPhKAchJQAbhHAwgYgAqUiWQAqgEAmA/QASAeAIAeQAJAggCAhQgEBHgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBQgGgwAXg8QAGgQAHgQQAlhPAkgIg");
	this.shape_204.setTransform(641.6629,334.415);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("ArWC2QgdgogIhBQgGgwAXg8QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAggCAhQgEBHgaA4QgeBBgrAAQgtAAgfgsgAJ/B8Qg6gigPhJQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkIACBtQgEBXgdAUQgRALgUAAQgZAAgfgSg");
	this.shape_205.setTransform(641.6629,334.415);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(1,1,1).p("AI2ARQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg3ggQg6gigPhJgAr7BNQgGgwAXg8QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAggCAhQgEBHgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_206.setTransform(641.6629,335.715);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(1,1,1).p("AI2AXQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAr7BIQgGgwAXg8QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAgQgEBHgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_207.setTransform(630.4629,324.09);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("ArWCxQgdgogIhBQgGgwAXg8QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAgQgEBHgaA4QgeBBgrAAQgtAAgfgsgAJ/CCQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRALgUAAQgZAAgfgRg");
	this.shape_208.setTransform(630.4629,324.09);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(1,1,1).p("AI2AcQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAr7BDQgGgxAXg8QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAhQgEBHgaA4QgeBAgrAAQgtAAgfgrQgdgpgIhAg");
	this.shape_209.setTransform(629.2629,323.565);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("ArWCsQgdgpgIhAQgGgxAXg8QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAhQgEBHgaA4QgeBAgrAAQgtAAgfgrgAJ/CHQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRAMgUAAQgZAAgfgSg");
	this.shape_210.setTransform(629.2629,323.565);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(1,1,1).p("AI2AhQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg3ggQg6gigPhJgAr7A9QgGgwAXg8QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAgQgEBHgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_211.setTransform(628.0129,323.015);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("ArWCmQgdgogIhBQgGgwAXg8QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAgQgEBHgaA4QgeBBgrAAQgtAAgfgsgAJ/CMQg6gigPhJQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkIACBtQgEBXgdAUQgRALgUAAQgZAAgfgSg");
	this.shape_212.setTransform(628.0129,323.015);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(1,1,1).p("AI2AnQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAr7A4QgGgwAXg8QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAgQgEBHgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_213.setTransform(626.8129,322.49);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("ArWChQgdgogIhBQgGgwAXg8QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAgQgEBHgaA4QgeBBgrAAQgtAAgfgsgAJ/CSQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRALgUAAQgZAAgfgRg");
	this.shape_214.setTransform(626.8129,322.49);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(1,1,1).p("AI2AsQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAr7AzQgGgxAXg8QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAhQgEBHgaA4QgeBAgrAAQgtAAgfgrQgdgpgIhAg");
	this.shape_215.setTransform(625.6129,321.965);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("ArWCcQgdgpgIhAQgGgxAXg8QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAhQgEBHgaA4QgeBAgrAAQgtAAgfgrgAJ/CXQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRAMgUAAQgZAAgfgSg");
	this.shape_216.setTransform(625.6129,321.965);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(1,1,1).p("AI2AxQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg3ggQg6gigPhJgAr7AuQgGgwAXg9QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAhQgEBHgaA4QgeBAgrAAQgtAAgfgrQgdgpgIhAg");
	this.shape_217.setTransform(624.4129,321.44);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("ArWCXQgdgpgIhAQgGgwAXg9QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAhQgEBHgaA4QgeBAgrAAQgtAAgfgrgAJ/CcQg6gigPhJQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkIACBtQgEBXgdAUQgRALgUAAQgZAAgfgSg");
	this.shape_218.setTransform(624.4129,321.44);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(1,1,1).p("AI2A3QgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAr7AoQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_219.setTransform(623.1629,320.8881);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("ArWCRQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsgAJ/CiQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRALgUAAQgZAAgfgRg");
	this.shape_220.setTransform(623.1629,320.8881);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(1,1,1).p("AKOiyQAqgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg3ggQg6gigPhJQgPhKAchJQAbhHAwgYgAqUi8QAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIg");
	this.shape_221.setTransform(621.9629,319.9036);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AJ/CrQg6gigPhJQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkIACBtQgEBXgdAUQgRALgUAAQgZAAgfgSgArWCQQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsg");
	this.shape_222.setTransform(621.9629,319.9036);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(1,1,1).p("AJABAQgPhKAchJQAbhHAwgYQApgDAkA6QAfAxAAAkQAAASACBbQgDBXgeAUQgmAZg2ggQg7gigOhJgAsEAnQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_223.setTransform(615.8129,320.1536);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AKJCrQg7gigOhJQgPhKAchJQAbhHAwgYQApgDAkA6QAfAxAAAkIACBtQgDBXgeAUQgQALgVAAQgZAAgegSgArfCQQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsg");
	this.shape_224.setTransform(615.8129,320.1536);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(1,1,1).p("AJKBAQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjQAAASACBcQgDBXgeATQgmAag2ggQg7gigOhJgAsOAoQgGgwAXg9QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAiQgEBGgaA4QgeBAgrAAQgtAAgfgrQgdgpgIhAg");
	this.shape_225.setTransform(609.6879,320.4036);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AKTCrQg7gigOhJQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjIACBuQgDBXgeATQgRAMgUAAQgZAAgegSgArpCRQgdgpgIhAQgGgwAXg9QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAiQgEBGgaA4QgeBAgrAAQgtAAgfgrg");
	this.shape_226.setTransform(609.6879,320.4036);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(1,1,1).p("AJTBAQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAsYAoQgGgwAXg9QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAiQgEBGgaA4QgeBAgrAAQgtAAgfgrQgdgpgIhAg");
	this.shape_227.setTransform(603.5129,320.6536);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AKcCrQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRAMgUAAQgZAAgfgSgArzCRQgdgpgIhAQgGgwAXg9QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAiQgEBGgaA4QgeBAgrAAQgtAAgfgrg");
	this.shape_228.setTransform(603.5129,320.6536);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(1,1,1).p("AhrAoQgGgvAXg9QAGgQAHgQQAlhPAkgIQApgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgsAAgfgsQgdgogIhBg");
	this.shape_229.setTransform(527.9061,320.8881);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AhGCRQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQApgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgsAAgfgsg");
	this.shape_230.setTransform(527.9061,320.8881);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(1,1,1).p("AhgA7QgPhKAchJQAbhHAwgYQApgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg2ggQg6gigPhJg");
	this.shape_231.setTransform(667.5134,321.3305);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgXCmQg6gigPhJQgPhKAchJQAbhHAwgYQApgDAkA6QAfAxAAAkIACBtQgEBXgdAUQgRALgUAAQgZAAgegSg");
	this.shape_232.setTransform(667.5134,321.3305);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(1,1,1).p("AJgA+QgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg3ggQg6gigPhJgAslAoQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_233.setTransform(595.6129,325.1881);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AsACRQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsgAKpCpQg6gigPhJQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkIACBtQgEBXgdAUQgRALgUAAQgZAAgfgSg");
	this.shape_234.setTransform(595.6129,325.1881);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(1,1,1).p("AJkA9QgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjQAAASACBcQgDBXgeATQgmAag2ggQg7gigOhJgAsoAoQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_235.setTransform(593.8879,329.4881);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AsDCRQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsgAKtCoQg7gigOhJQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjIACBuQgDBXgeATQgRALgUAAQgZAAgegRg");
	this.shape_236.setTransform(593.8879,329.4881);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(1,1,1).p("AJnA7QgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg3ggQg6gigPhJgAssAoQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_237.setTransform(592.1629,333.7881);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AsHCRQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsgAKwCmQg6gigPhJQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkIACBtQgEBXgdAUQgRALgUAAQgZAAgfgSg");
	this.shape_238.setTransform(592.1629,333.7881);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(1,1,1).p("AJrA6QgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjQAAASACBcQgDBXgeATQgmAag2ggQg7gigOhJgAsvAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_239.setTransform(590.4129,338.0381);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AsKCRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAK0ClQg7gigOhJQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjIACBuQgDBXgeATQgQALgVAAQgZAAgegRg");
	this.shape_240.setTransform(590.4129,338.0381);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(1,1,1).p("AJuA4QgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg3ggQg6gigPhJgAsyAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_241.setTransform(588.6879,342.3381);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AsNCRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAK3CjQg6gigPhJQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkIACBtQgEBXgdAUQgRALgUAAQgaAAgegSg");
	this.shape_242.setTransform(588.6879,342.3381);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(1,1,1).p("ALKi7QApgEAkA6QAfAyAAAjQAAASACBcQgDBXgeATQgmAag2ggQg7gigOhJQgPhLAchJQAbhGAwgYgArPi7QAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIg");
	this.shape_243.setTransform(586.9379,346.6381);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AsRCRQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsgAK7CiQg7gigOhJQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjIACBuQgDBXgeATQgRALgUAAQgZAAgegRg");
	this.shape_244.setTransform(586.9379,346.6381);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(1,1,1).p("AJuA3QgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAszAoQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_245.setTransform(587.2629,349.6381);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AsOCRQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsgAK3CiQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRALgUAAQgZAAgfgRg");
	this.shape_246.setTransform(587.2629,349.6381);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(1,1,1).p("AJrA3QgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjQAAASACBcQgDBXgeATQgmAag2ggQg7gigOhJgAsvAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_247.setTransform(587.6129,352.6381);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AsKCRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAK0CiQg7gigOhJQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjIACBuQgDBXgeATQgQALgVAAQgZAAgegRg");
	this.shape_248.setTransform(587.6129,352.6381);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(1,1,1).p("AJoA3QgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjQAAASACBcQgDBXgeATQgmAag2ggQg7gigOhJgAssAoQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_249.setTransform(587.9379,355.6381);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AsHCRQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsgAKxCiQg7gigOhJQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjIACBuQgDBXgeATQgRALgUAAQgZAAgegRg");
	this.shape_250.setTransform(587.9379,355.6381);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(1,1,1).p("AJkA3QgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAsoAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_251.setTransform(588.2879,358.6381);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AsDCRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAKtCiQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRALgUAAQgaAAgegRg");
	this.shape_252.setTransform(588.2879,358.6381);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(1,1,1).p("AJhA3QgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjQAAASACBcQgDBXgeATQgmAag2ggQg7gigOhJgAslAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_253.setTransform(588.6129,361.6381);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AsACRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAKqCiQg7gigOhJQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjIACBuQgDBXgeATQgQALgVAAQgZAAgegRg");
	this.shape_254.setTransform(588.6129,361.6381);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(1,1,1).p("AJdA3QgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAsiAoQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_255.setTransform(588.9629,364.6381);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("Ar9CRQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsgAKmCiQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRALgUAAQgZAAgfgRg");
	this.shape_256.setTransform(588.9629,364.6381);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(1,1,1).p("AKyi7QAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJQgPhLAchJQAbhGAwgYgAq4i7QAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIg");
	this.shape_257.setTransform(589.2879,367.6381);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("Ar5CRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAKjCiQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRALgUAAQgaAAgegRg");
	this.shape_258.setTransform(589.2879,367.6381);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(1,1,1).p("AJdA3QgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAshAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_259.setTransform(588.9879,365.3881);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("Ar8CRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAKmCiQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRALgUAAQgaAAgegRg");
	this.shape_260.setTransform(588.9879,365.3881);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(1,1,1).p("AJgA3QgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAskAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_261.setTransform(588.6879,363.1881);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("Ar/CRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAKpCiQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRALgUAAQgaAAgegRg");
	this.shape_262.setTransform(588.6879,363.1881);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(1,1,1).p("AJjA3QgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAsnAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_263.setTransform(588.3879,360.9381);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AsCCRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAKsCiQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRALgUAAQgaAAgegRg");
	this.shape_264.setTransform(588.3879,360.9381);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(1,1,1).p("AJmA3QgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAsqAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_265.setTransform(588.0879,358.7381);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AsFCRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAKvCiQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRALgUAAQgaAAgegRg");
	this.shape_266.setTransform(588.0879,358.7381);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(1,1,1).p("AJpA3QgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAstAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_267.setTransform(587.7879,356.4881);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AsICRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAKyCiQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRALgUAAQgaAAgegRg");
	this.shape_268.setTransform(587.7879,356.4881);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(1,1,1).p("AJsA3QgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAswAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_269.setTransform(587.4879,354.2881);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AsLCRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAK1CiQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRALgUAAQgaAAgegRg");
	this.shape_270.setTransform(587.4879,354.2881);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(1,1,1).p("ALHi7QAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJQgPhLAchJQAbhGAwgYgArNi7QAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIg");
	this.shape_271.setTransform(587.1879,352.0381);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AsOCRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAK4CiQg6gigPhJQgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjIACBuQgEBXgdATQgRALgUAAQgaAAgegRg");
	this.shape_272.setTransform(587.1879,352.0381);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(1,1,1).p("AJvA3QgPhLAchJQAbhGAwgYQAqgEAkA6QAfAyAAAjQAAASACBcQgEBXgdATQgmAag3ggQg6gigPhJgAszAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_273.setTransform(587.1879,352.0381);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(1,1,1).p("AJlA3QgPhKAchJQAbhHAwgYQApgDAkA6QAfAxAAAkQAAASACBbQgDBXgeAUQgmAZg2ggQg7gigOhJgAspAoQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_274.setTransform(590.1879,352.1881);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AsECRQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsgAKuCiQg7gigOhJQgPhKAchJQAbhHAwgYQApgDAkA6QAfAxAAAkIACBtQgDBXgeAUQgRALgUAAQgZAAgegSg");
	this.shape_275.setTransform(590.1879,352.1881);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(1,1,1).p("AJaA5QgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjQAAASACBcQgDBXgeATQgmAag2ggQg7gigOhJgAseAoQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_276.setTransform(593.1879,352.2881);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("Ar5CRQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsgAKjCkQg7gigOhJQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjIACBuQgDBXgeATQgRALgUAAQgZAAgegRg");
	this.shape_277.setTransform(593.1879,352.2881);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(1,1,1).p("AJPA5QgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg3ggQg6gigPhJgAsTAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_278.setTransform(596.1879,352.4381);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AruCRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAKYCkQg6gigPhJQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkIACBtQgEBXgdAUQgRALgUAAQgaAAgegSg");
	this.shape_279.setTransform(596.1879,352.4381);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(1,1,1).p("AJEA6QgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg3ggQg6gigPhJgAsIAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_280.setTransform(599.1879,352.5381);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("ArjCRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAKNClQg6gigPhJQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkIACBtQgEBXgdAUQgRALgUAAQgaAAgegSg");
	this.shape_281.setTransform(599.1879,352.5381);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(1,1,1).p("AI6A7QgPhKAchJQAbhHAwgYQApgDAkA6QAfAxAAAkQAAASACBbQgDBXgeAUQgmAZg2ggQg7gigOhJgAr+AoQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_282.setTransform(602.1879,352.6881);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("ArZCRQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsgAKDCmQg7gigOhJQgPhKAchJQAbhHAwgYQApgDAkA6QAfAxAAAkIACBtQgDBXgeAUQgRALgUAAQgZAAgegSg");
	this.shape_283.setTransform(602.1879,352.6881);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(1,1,1).p("AIvA8QgPhKAchJQAbhHAwgYQApgDAkA6QAfAxAAAkQAAASACBbQgDBXgeAUQgmAZg2ggQg7gigOhJgArzAoQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_284.setTransform(605.1879,352.7881);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("ArOCRQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsgAJ4CnQg7gigOhJQgPhKAchJQAbhHAwgYQApgDAkA6QAfAxAAAkIACBtQgDBXgeAUQgRALgUAAQgZAAgegSg");
	this.shape_285.setTransform(605.1879,352.7881);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(1,1,1).p("AIkA9QgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg3ggQg6gigPhJgAroAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_286.setTransform(608.1879,352.9381);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("ArDCRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAJtCoQg6gigPhJQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkIACBtQgEBXgdAUQgRALgUAAQgaAAgegSg");
	this.shape_287.setTransform(608.1879,352.9381);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(1,1,1).p("AIZA+QgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkQAAASACBbQgEBXgdAUQgmAZg3ggQg6gigPhJgArdAoQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_288.setTransform(611.1879,353.0381);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("Aq4CRQgdgogIhBQgGgvAXg9QAFgQAIgQQAkhPAkgIQAqgEAmA/QASAeAJAeQAJAhgCAhQgFBGgZA4QgeBBgrAAQgtAAgfgsgAJiCpQg6gigPhJQgPhKAchJQAbhHAwgYQAqgDAkA6QAfAxAAAkIACBtQgEBXgdAUQgRALgUAAQgaAAgegSg");
	this.shape_289.setTransform(611.1879,353.0381);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(1,1,1).p("AIPA/QgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjQAAASACBcQgDBXgeATQgmAag2ggQg7gigOhJgArTAoQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsQgdgogIhBg");
	this.shape_290.setTransform(614.1879,353.1881);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AquCRQgdgogIhBQgGgvAXg9QAGgQAHgQQAlhPAkgIQAqgEAmA/QASAeAIAeQAJAhgCAhQgEBGgaA4QgeBBgrAAQgtAAgfgsgAJYCqQg7gigOhJQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjIACBuQgDBXgeATQgRALgUAAQgZAAgegRg");
	this.shape_291.setTransform(614.1879,353.1881);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(1,1,1).p("AIEBAQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjQAAASACBcQgDBXgeATQgmAag2ggQg7gigOhJgArIAoQgGgwAXg9QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAiQgEBGgaA4QgeBAgrAAQgtAAgfgrQgdgpgIhAg");
	this.shape_292.setTransform(617.1879,353.3036);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AJNCrQg7gigOhJQgPhLAchJQAbhGAwgYQApgEAkA6QAfAyAAAjIACBuQgDBXgeATQgRAMgUAAQgZAAgegSgAqjCRQgdgpgIhAQgGgwAXg9QAGgPAHgQQAlhQAkgIQAqgEAmBAQASAdAIAeQAJAhgCAiQgEBGgaA4QgeBAgrAAQgtAAgfgrg");
	this.shape_293.setTransform(617.1879,353.3036);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_189},{t:this.shape_188}]}).to({state:[{t:this.shape_189},{t:this.shape_188}]},44).to({state:[{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_205,p:{y:334.415,x:641.6629}},{t:this.shape_204,p:{y:334.415,x:641.6629}}]},1).to({state:[{t:this.shape_205,p:{y:335.715,x:641.6629}},{t:this.shape_206,p:{y:335.715,x:641.6629}}]},1).to({state:[{t:this.shape_205,p:{y:336.965,x:641.6629}},{t:this.shape_206,p:{y:336.965,x:641.6629}}]},1).to({state:[{t:this.shape_205,p:{y:338.265,x:641.6629}},{t:this.shape_204,p:{y:338.265,x:641.6629}}]},1).to({state:[{t:this.shape_205,p:{y:338.265,x:641.6629}},{t:this.shape_206,p:{y:338.265,x:641.6629}}]},1).to({state:[{t:this.shape_205,p:{y:338.265,x:641.6629}},{t:this.shape_204,p:{y:338.265,x:641.6629}}]},1).to({state:[{t:this.shape_205,p:{y:335.515,x:639.6629}},{t:this.shape_206,p:{y:335.515,x:639.6629}}]},1).to({state:[{t:this.shape_205,p:{y:332.815,x:637.6629}},{t:this.shape_206,p:{y:332.815,x:637.6629}}]},1).to({state:[{t:this.shape_205,p:{y:330.065,x:635.6629}},{t:this.shape_206,p:{y:330.065,x:635.6629}}]},1).to({state:[{t:this.shape_205,p:{y:327.365,x:633.6629}},{t:this.shape_206,p:{y:327.365,x:633.6629}}]},1).to({state:[{t:this.shape_205,p:{y:324.615,x:631.6629}},{t:this.shape_204,p:{y:324.615,x:631.6629}}]},1).to({state:[{t:this.shape_208},{t:this.shape_207}]},1).to({state:[{t:this.shape_210},{t:this.shape_209}]},1).to({state:[{t:this.shape_212},{t:this.shape_211}]},1).to({state:[{t:this.shape_214},{t:this.shape_213}]},1).to({state:[{t:this.shape_216},{t:this.shape_215}]},1).to({state:[{t:this.shape_218},{t:this.shape_217}]},1).to({state:[{t:this.shape_220},{t:this.shape_219}]},1).to({state:[{t:this.shape_222},{t:this.shape_221}]},1).to({state:[{t:this.shape_224},{t:this.shape_223}]},1).to({state:[{t:this.shape_226},{t:this.shape_225}]},1).to({state:[{t:this.shape_228},{t:this.shape_227}]},1).to({state:[{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229}]},1).to({state:[{t:this.shape_234},{t:this.shape_233}]},1).to({state:[{t:this.shape_236},{t:this.shape_235}]},1).to({state:[{t:this.shape_238},{t:this.shape_237}]},1).to({state:[{t:this.shape_240},{t:this.shape_239}]},1).to({state:[{t:this.shape_242},{t:this.shape_241}]},1).to({state:[{t:this.shape_244},{t:this.shape_243}]},1).to({state:[{t:this.shape_246},{t:this.shape_245}]},1).to({state:[{t:this.shape_248},{t:this.shape_247}]},1).to({state:[{t:this.shape_250},{t:this.shape_249}]},1).to({state:[{t:this.shape_252},{t:this.shape_251}]},1).to({state:[{t:this.shape_254},{t:this.shape_253}]},1).to({state:[{t:this.shape_256},{t:this.shape_255}]},1).to({state:[{t:this.shape_258},{t:this.shape_257}]},1).to({state:[{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_262},{t:this.shape_261}]},1).to({state:[{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_266},{t:this.shape_265}]},1).to({state:[{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_270},{t:this.shape_269}]},1).to({state:[{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_272},{t:this.shape_273}]},1).to({state:[{t:this.shape_272},{t:this.shape_273}]},1).to({state:[{t:this.shape_272},{t:this.shape_273}]},1).to({state:[{t:this.shape_272},{t:this.shape_273}]},1).to({state:[{t:this.shape_272},{t:this.shape_273}]},1).to({state:[{t:this.shape_272},{t:this.shape_273}]},1).to({state:[{t:this.shape_272},{t:this.shape_273}]},1).to({state:[{t:this.shape_272},{t:this.shape_273}]},1).to({state:[{t:this.shape_272},{t:this.shape_273}]},1).to({state:[{t:this.shape_272},{t:this.shape_273}]},1).to({state:[{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_275},{t:this.shape_274}]},1).to({state:[{t:this.shape_277},{t:this.shape_276}]},1).to({state:[{t:this.shape_279},{t:this.shape_278}]},1).to({state:[{t:this.shape_281},{t:this.shape_280}]},1).to({state:[{t:this.shape_283},{t:this.shape_282}]},1).to({state:[{t:this.shape_285},{t:this.shape_284}]},1).to({state:[{t:this.shape_287},{t:this.shape_286}]},1).to({state:[{t:this.shape_289},{t:this.shape_288}]},1).to({state:[{t:this.shape_291},{t:this.shape_290}]},1).to({state:[{t:this.shape_293},{t:this.shape_292}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).wait(1));

	// глаз_правый_copy
	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgUAAQAUABAVAA");
	this.shape_294.setTransform(551.3875,401.875);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AAnHzQgVABgUgCIgggDQh9gPhchAIgXgSQgsgkghgtQhGhhgWiNQgijUCTi3QBChTBYgvQBGgnBIgKIApgEIABAAQBMAEBPApQBQAqA/BJQCUClgEDoQgEDthtBrQhYBXikAJIgpABIgFAAg");
	this.shape_295.setTransform(549.5838,352);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AAnG8QgVAAgTgBIgggDQh+gNhcg6IgXgQQgsgfghgpQhGhVgWh+Qgii9CTiiQBChJBYgrQBGgjBIgIIApgDIABAAQBMADBPAkQBQAmA/BAQCUCTgEDPQgEDThtBfQhYBNikAIIgpABIgFAAg");
	this.shape_296.setTransform(549.5838,352.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AAnGGIgogBIgggDQh+gLhcgzIgXgOQgsgcghgjQhGhLgWhuQgiimCTiOQBChBBYglQBGgeBIgIIApgDIABAAQBMADBPAgQBQAhA/A4QCUCBgEC1QgEC6htBTQhYBEikAHIgpABIgFAAg");
	this.shape_297.setTransform(549.5838,352.775);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AAnFPIgogBIgggCQh+gKhcgsIgXgMQgsgXghgfQhGhAgWhfQgiiOCTh6QBCg4BYggQBGgaBIgGIApgDIABAAQBMADBPAbQBQAcA/AxQCUBvgECbQgECfhtBIQhYA6ikAGIgpABIgFAAg");
	this.shape_298.setTransform(549.5838,353.175);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AAnEYIgogBIgggBQh+gJhcgkIgXgKQgsgUghgZQhGg2gWhPQgih3CThnQBCguBYgbQBGgVBIgGIApgCIABAAQBMACBPAYQBQAXA/ApQCUBcgECBQgECGhtA8QhYAwikAFIgpABIgFAAg");
	this.shape_299.setTransform(549.5838,353.55);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AAnDhIgogBIgggBQh+gHhcgdIgXgIQgsgQghgVQhGgqgWhBQgihfCThSQBCglBYgVQBGgSBIgFIApgBIABAAQBMACBPASQBQATA/AgQCUBLgEBoQgEBrhtAwQhYAnikAEIgpABIgFAAg");
	this.shape_300.setTransform(549.5838,353.95);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AAnCqIgoAAIgggBQh+gFhcgWIgXgGQgsgNghgPQhGghgWgwQgihICTg+QBCgcBYgQQBGgNBIgEIApgBIABAAQBMABBPAOQBQAPA/AYQCUA4gEBPQgEBRhtAkQhYAeikADIgpAAIgFAAg");
	this.shape_301.setTransform(549.5838,354.325);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AAnBzIgoAAIgggBQh+gDhcgPIgXgEQgsgIghgLQhGgWgWghQgigwCTgqQBCgTBYgLQBGgJBIgCIApgBIABAAQBMABBPAJQBQAKA/ARQCUAmgEA1QgEA2htAZQhYAUikACIgpAAIgFAAg");
	this.shape_302.setTransform(549.5838,354.725);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AAsA9IgFAAIgoAAIgggBQh+gChcgHIgXgDQgsgEghgGQhGgLgWgRQgigZCTgWQBCgKBYgGQBGgFBIgBIApgBIABAAQBMABBPAFQBQAFA/AJQCUAUgEAcQgEAchtANQhYALikABg");
	this.shape_303.setTransform(549.5838,355.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgUAAQAUAAAUAA");
	this.shape_304.setTransform(551.4,356.05);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AAsAFIgFAAIgoAAIggAAIjagBIgXAAIhNAAQhGgCgWgBQgigCCTgCICagBICOAAIApAAIABAAICbAAICPABQCUACgEACQgEAChtABIj8ABg");
	this.shape_305.setTransform(549.5838,355.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AAnHzQgVABgTgCIgggDQh+gPhchAIgXgSQgsgkghgtQhGhhgWiNQgijUCTi3QBChTBYgvQBGgnBIgJIApgFIABAAQBMAEBPApQBQAqA/BJQCUClgEDoQgEDthtBrQhYBXikAJIgpABIgFAAg");
	this.shape_306.setTransform(549.5838,352);
	this.shape_306._off = true;

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AAnBDIgoAAIggAAQh+gChcgJIgXgCQgsgFghgGQhGgNgWgTQgigcCTgZQBCgLBYgGQBGgFBIgCIApAAIABAAQBMAABPAGQBQAFA/AKQCUAWgEAfQgEAghtAOQhYAMikABIgpAAIgFAAg");
	this.shape_307.setTransform(549.5838,355.075);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AAnCBIgogBIgggBQh+gDhcgRIgXgFQgsgIghgNQhGgYgWglQgig2CTgvQBCgVBYgNQBGgJBIgDIApgBIABAAQBMABBPAKQBQALA/ATQCUArgEA7QgEA+htAbQhYAWikACIgpABIgFAAg");
	this.shape_308.setTransform(549.5838,354.65);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AAnC/IgogBIgggBQh+gFhcgZIgXgHQgsgOghgRQhGglgWg2QgihQCThGQBCgfBYgTQBGgOBIgEIApgCIABAAQBMACBPAQQBQAQA/AbQCUA/gEBZQgEBahtApQhYAhikADIgpABIgFAAg");
	this.shape_309.setTransform(549.5838,354.175);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AAnD8IgoAAIgggBQh+gIhcghIgXgJQgsgSghgXQhGgwgWhIQgihrCThcQBCgqBYgYQBGgTBIgGIApgCIABAAQBMACBPAWQBQAVA/AkQCUBUgEB0QgEB5htA2QhYArikAFIgpAAIgFAAg");
	this.shape_310.setTransform(549.5838,353.75);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AAnE6IgogBIgggCQh+gJhcgpIgXgLQgsgWghgdQhGg8gWhZQgiiGCThyQBCg0BYgfQBGgYBIgGIApgCIABAAQBMACBPAaQBQAaA/AuQCUBogECSQgECVhtBDQhYA3ikAFIgpABIgFAAg");
	this.shape_311.setTransform(549.5838,353.325);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AAnF4QgVAAgTgCIgggCQh+gLhcgxIgXgNQgsgbghgiQhGhIgWhrQgiigCTiJQBCg+BYgkQBGgdBIgHIApgDIABAAQBMADBPAfQBQAfA/A2QCUB9gECuQgEC0htBQQhYBBikAGIgpACIgFAAg");
	this.shape_312.setTransform(549.5838,352.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AAnG2IgogBIgggDQh+gNhcg5IgXgPQgsggghgnQhGhVgWh8Qgii6CTifQBChJBYgqQBGgiBIgIIApgEIABAAQBMAEBPAkQBQAlA/A/QCUCRgEDLQgEDQhtBeQhYBMikAIIgpABIgFAAg");
	this.shape_313.setTransform(549.5838,352.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_295},{t:this.shape_294}]}).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_305},{t:this.shape_304}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_305},{t:this.shape_304}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_306).wait(19).to({_off:false},0).wait(15).to({_off:true},1).wait(95));

	// глаз_правый
	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgHnyQBVABBSAyQBPAxA7BTQCEC2geDUQgUCOg/BfQgdAugoAkQgKAJgLAJQhsBTidAAQiwAAhZhgQhihrgEjuQgDjoCFimQA5hIBIgpQBHgqBEgDg");
	this.shape_314.setTransform(689.5567,352);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AkvGSQhihrgEjtQgDjoCFilQA5hJBIgqQBHgpBEgEQBVACBSAzQBPAvA7BTQCEC3geDUQgUCOg/BgQgdAtgoAkIgVASQhsBTidAAQiwABhZhig");
	this.shape_315.setTransform(689.5567,352);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUAzQgChjAqhXQAihbBFhMQA/hDA/giQAngWAngKQAbgHAcgBQBQACBPAsQAZAOAWARQAwAkAoAxQAiArAYAtQAzBSAEBZQAAAxgLArQgEAWgGAUQgOA2gYAuQgIAQgIAPQgMAUgOASQgdApgnAfQgKAJgLAHQhkBIiOADQgGAAgFAAQinAAhXhWQg1g0gbhVQgehIgChfg");
	this.shape_316.setTransform(689.5224,352.475);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgmG8QinAAhXhWQg1g0gbhVQgehIgChfIAAgDQgChjAqhXQAihbBFhMQA/hDA/giQAngWAngKQAbgHAcgBQBQACBPAsQAZAOAWARQAwAkAoAxQAiArAYAtQAzBSAEBZQAAAxgLArQgEAWgGAUQgOA2gYAuIgQAfQgMAUgOASQgdApgnAfIgVAQQhkBIiOADIgLAAg");
	this.shape_317.setTransform(689.5224,352.475);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUAtQgChXA1hMQAlhQBEhCQA+g7A9geQAlgSAlgJQAagHAZgBQBOACBLAnQAYAMAWAPQAvAfAmAsQAjAlAZAnQA5BIAEBOQgDArgOAmQgGASgGASQgRAwgZAoQgIAOgJANQgMASgOAPQgeAkgmAbQgKAIgKAGQhhBAiGACQgGAAgFAAQieAAhUhMQg2gtgchKQgng/gChTg");
	this.shape_318.setTransform(689.5214,352.925);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgnGFQieAAhUhMQg2gtgchKQgng/gChTIAAgDQgChXA1hMQAlhQBEhCQA+g7A9geQAlgSAlgJQAagHAZgBQBOACBLAnQAYAMAWAPQAvAfAmAsQAjAlAZAnQA5BIAEBOQgDArgOAmIgMAkQgRAwgZAoIgRAbQgMASgOAPQgeAkgmAbIgUAOQhhBAiGACIgLAAg");
	this.shape_319.setTransform(689.5214,352.925);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUAnQgChLBAhBQAohFBEg5QA8gyA6gZQAkgQAkgIQAYgGAYAAQBKABBHAhQAXALAVANQAuAaAmAmQAjAgAZAhQBBA+ADBCQgFAmgSAgQgHAQgIAPQgSApgbAjQgJAMgJALQgMAPgPAOQgdAeglAYQgKAGgKAGQhdA2iAACQgFAAgFAAQiUAAhShBQg2gngfhAQgvg1gChIg");
	this.shape_320.setTransform(689.522,353.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgoFNQiUABhShBQg2gngfhAQgvg2gChHIAAgDQgChKBAhBQAohFBEg4QA8gzA6gaQAkgPAkgIQAYgFAYgCQBKACBHAhQAXALAVANQAuAaAmAmQAjAgAZAhQBBA+ADBCQgFAlgSAhQgHAQgIAPQgSApgbAjIgSAWQgMAQgPAOQgdAdglAZIgUALQhdA3iAABIgKAAg");
	this.shape_321.setTransform(689.522,353.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUAgQgDg+BMg2QAqg6BEgvQA7gqA4gVQAigOAigGQAXgEAXgBQBGABBEAcQAVAIAVALQAsAWAmAfQAjAbAaAcQBIA0ACA3QgIAfgVAbQgIAOgJAMQgUAigdAdQgJAKgKAJQgNANgOALQgeAZgkAUQgKAFgKAFQhZAth4ACQgFAAgEAAQiMAAhPg2Qg3ggggg2Qg4gsgCg8g");
	this.shape_322.setTransform(689.521,353.875);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgoEWQiMAAhPg2Qg3ggggg2Qg4gsgCg8IAAgCQgDg+BMg2QAqg6BEgvQA7gqA4gVQAigOAigGQAXgEAXgBQBGABBEAcQAVAIAVALQAsAWAmAfQAjAbAaAcQBIA0ACA3QgIAfgVAbQgIAOgJAMQgUAigdAdIgTATQgNANgOALQgeAZgkAUIgUAKQhZAth4ACIgJAAg");
	this.shape_323.setTransform(689.521,353.875);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUAaQgDgyBYgrQAsguBDgmQA7giA1gRQAhgKAfgGQAXgDAVgBQBCABBAAWQAVAHATAJQAsASAlAZQAiAVAcAWQBOAqADAtQgLAYgaAWQgIAKgKAKQgWAcggAXQgJAIgJAHQgOAKgPAJQgdAVgkAPQgJAFgKADQhWAlhwABQgFAAgEAAQiCAAhOgrQg3gaghgrQhAgkgDgwg");
	this.shape_324.setTransform(689.5465,354.325);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgpDfQiCAAhOgrQg3gaghgrQhAgkgDgwIAAgBQgDgyBYgrQAsguBDgmQA7giA1gRQAhgKAfgGQAXgDAVgBQBCABBAAWQAVAHATAJQAsASAlAZQAiAVAcAWQBOAqADAtQgLAYgaAWIgSAUQgWAcggAXIgSAPQgOAKgPAJQgdAVgkAPIgTAIQhWAlhwABIgJAAg");
	this.shape_325.setTransform(689.5465,354.325);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUATQgDglBjghQAugiBEgcQA5gZAzgOQAfgIAegDQAVgDATgBQA/ABA8ARQAUAFATAGQAqAOAkASQAjARAcAQQBWAfACAiQgOATgdAQQgJAIgLAIQgZAUghASQgJAFgKAFQgOAIgPAHQgdAPgjAMQgJADgKADQhSAbhqACQgEAAgEAAQh5AAhLghQg4gTgighQhJgbgDgjg");
	this.shape_326.setTransform(689.5456,354.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgqCnQh5ABhLghQg4gUgiggQhJgagDgkIAAgBQgDgmBjghQAugiBEgcQA5gZAzgNQAfgIAegFQAVgCATgBQA/ABA8ARQAUAFATAGQAqAOAkATQAjAQAcARQBWAeACAjQgOARgdARIgUAPQgZAVghASIgTALQgOAHgPAHQgdAPgjAMIgTAGQhSAchqAAIgIAAg");
	this.shape_327.setTransform(689.5456,354.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUANQgDgZBugWQAxgXBDgTQA4gRAxgIQAdgGAcgCQATgCATAAQA7AAA5ALQASAEASAEQApAJAkAMQAjALAdAMQBdAVABAWQgQAMghALQgKAGgNAFQgaANgjAMQgKAEgKADQgOAFgQAFQgdAKgiAIQgJACgJACQhPAShiABQgEAAgDAAQhwAAhJgWQg4gNglgVQhRgSgDgZg");
	this.shape_328.setTransform(689.546,355.275);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgqBwQhwAAhJgWQg4gNglgVQhRgSgDgZIAAAAQgDgZBugWQAxgXBDgTQA4gRAxgIQAdgGAcgCIAmgCQA7AAA5ALIAkAIQApAJAkAMQAjALAdAMQBdAVABAWQgQAMghALIgXALQgaANgjAMIgUAHIgeAKQgdAKgiAIIgSAEQhPAShiABIgHAAg");
	this.shape_329.setTransform(689.546,355.275);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUAHQgEgMB6gMQA0gMBDgJQA2gIAvgFQAbgCAagCQASgBASAAQA3AAA1AGQARACASACQAoAEAjAHQAjAFAdAGQBkALABALQgTAGgkAGQgMACgNADQgcAHglAGQgKABgLACQgPADgPACQgdAFgiAEQgIABgKABQhKAKhbAAQgEAAgDAAQhnAAhGgLQg5gHgmgKQhagJgDgNg");
	this.shape_330.setTransform(689.5451,355.725);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgrA5QhnAAhGgLQg5gHgmgKQhagJgDgNQgEgMB6gMQA0gMBDgJQA2gIAvgFIA1gEIAkgBQA3AAA1AGIAjAEQAoAEAjAHIBAALQBkALABALQgTAGgkAGIgZAFQgcAHglAGIgVADIgeAFQgdAFgiAEIgSACQhKAKhbAAIgHAAg");
	this.shape_331.setTransform(689.5451,355.725);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgGgBQBUAABSAAQBPABA8AAQBrAAAAAAIgGAAQgUAAg+ABQgeAAgnAAQgLAAgLAAQhsAAidAAQiwAAhYAAQhjAAgDgBQgEAACFAAQA6gBBIAAQBGAABFAAg");
	this.shape_332.setTransform(689.5455,356.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AkuABQhjAAgDgBICBAAICCgBICLAAICmAAICLABIBrAAIgGAAIhSABIhFAAIgWAAIkJAAIkIAAg");
	this.shape_333.setTransform(689.5455,356.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmVA6QgDjoCFimQA5hIBIgpQBHgqBEgDQBVABBSAyQBPAxA7BTQCEC2geDUQgUCOg/BfQgdAugoAkQiBBlidAAQiwAAhZhgQhihrgEjug");
	this.shape_334.setTransform(689.5567,352);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AkvGSQhihrgEjtQgDjoCFilQA5hJBIgqQBHgpBEgEQBVACBSAzQBPAvA7BTQCEC3geDUQgUCNg/BhQgdAtgoAkQiBBlidAAQiwABhZhig");
	this.shape_335.setTransform(689.5567,352);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUAHQgDgNB4gNQAzgNBDgLQA3gJAvgFQAbgDAbgCQARgBATAAQA3ABA1AGQASACARACQApAFAjAHQAjAHAdAGQBjAMABANQgSAGgkAHQgMADgNADQgcAHglAHQgKACgKACQgPADgQACQgdAGghAFQgJABgJABQhLAKhcABQgEAAgDAAQhoAAhHgNQg4gHgmgMQhZgKgDgOg");
	this.shape_336.setTransform(689.5463,355.675);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgrBAQhoAAhHgNQg4gHgmgMQhZgKgDgOIAAgBQgDgNB4gNQAzgNBDgLQA3gJAvgFIA2gFIAkgBQA3ABA1AGIAjAEQApAFAjAHIBAANQBjAMABANQgSAGgkAHIgZAGQgcAHglAHIgUAEIgfAFQgdAGghAFIgSACQhLAKhcABIgHAAg");
	this.shape_337.setTransform(689.5463,355.675);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUAPQgDgcBrgZQAxgaBDgVQA4gTAygJQAdgGAdgDQATgCATgBQA8ABA6AMQASAEATAFQApAKAkAOQAjAMAcANQBbAXACAaQgQANgfANQgLAGgMAFQgZAQgjANQgKAEgKAEQgOAGgPAFQgdAMgjAIQgJADgJACQhPAVhlAAQgDAAgEAAQhyAAhKgYQg4gPgkgYQhPgUgDgbg");
	this.shape_338.setTransform(689.5459,355.15);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AgqB+QhyAAhKgYQg4gPgkgYQhPgUgDgcIAAgBQgDgbBrgZQAxgaBDgVQA4gTAygJQAdgHAdgCQATgCATgBQA8ABA6AMIAlAJQApAKAkAOQAjAMAcAMQBbAYACAaQgQANgfANIgXALQgZAPgjANIgUAJIgdALQgdAMgjAIIgSAEQhPAWhlAAIgHAAg");
	this.shape_339.setTransform(689.5459,355.15);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUAWQgDgqBfglQAtgnBEggQA5gcA0gOQAggJAegFQAWgDAUAAQBAABA+ASQAUAGATAHQArAPAkAVQAjATAcASQBTAjACAmQgNAVgbASQgKAJgKAJQgYAXggATQgKAHgJAGQgOAJgPAHQgdARgjAOQgKADgJADQhUAfhsABQgEAAgEAAQh9AAhMgkQg3gWgjgkQhFgegDgpg");
	this.shape_340.setTransform(689.5468,354.625);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AgpC8Qh9AAhMgkQg3gWgjgkQhFgegDgpIAAgBQgDgqBfglQAtgnBEggQA5gcA0gOQAggJAegFQAWgDAUAAQBAABA+ASIAnANQArAPAkAVQAjATAcASQBTAjACAmQgNAVgbASIgUASQgYAXggATIgTANIgdAQQgdARgjAOIgTAGQhUAfhsABIgIAAg");
	this.shape_341.setTransform(689.5468,354.625);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUAdQgDg4BSgxQArg0BEgqQA7gmA2gTQAigMAggGQAXgEAWgBQBEABBCAZQAVAIAUAKQAsAUAlAcQAjAYAbAZQBLAvADAyQgKAbgXAZQgIAMgKALQgVAfgeAaQgJAJgKAIQgNALgPALQgdAWgkASQgKAFgKAEQhXAph1ABQgEAAgFAAQiGAAhPgwQg3gdgggwQg8gpgDg2g");
	this.shape_342.setTransform(689.5463,354.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AgpD7QiGgBhPgwQg3gdgggwQg8gpgDg2IAAgBQgDg4BSgxQArgzBEgrQA7glA2gUQAigMAggFQAXgFAWgBQBEABBCAZQAVAJAUAJQAsAUAlAcQAjAZAbAZQBLAuADAyQgKAbgXAZQgIAMgKALQgVAfgeAaIgTARIgcAWQgdAXgkARIgUAJQhXAph1ACIgJAAg");
	this.shape_343.setTransform(689.5463,354.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUAkQgChGBEg9QAphABEg1QA8gwA5gYQAjgPAjgHQAYgFAYgBQBIACBGAfQAWAJAVANQAtAZAmAjQAjAeAaAfQBDA6ADA/QgGAigUAfQgGAPgJAOQgTAmgcAhQgIALgKAKQgMAOgPANQgdAdglAWQgKAGgKAFQhcAzh8ACQgFAAgFAAQiRAAhRg9Qg3gkgeg8QgzgzgChDg");
	this.shape_344.setTransform(689.5222,353.575);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgoE5QiRAAhRg9Qg3gkgeg8QgzgzgChDIAAgCQgChGBEg9QAphABEg1QA8gwA5gYQAjgPAjgHQAYgFAYgBQBIACBGAfQAWAJAVANQAtAZAmAjQAjAeAaAfQBDA6ADA/QgGAigUAfQgGAPgJAOQgTAmgcAhIgSAVQgMAOgPANQgdAdglAWIgUALQhcAzh8ACIgKAAg");
	this.shape_345.setTransform(689.5222,353.575);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUArQgChUA4hIQAlhOBFhAQA9g5A8gcQAlgSAlgJQAagGAYgBQBNABBKAmQAYAMAVAPQAvAeAnApQAiAkAZAmQA8BGADBLQgDApgQAkQgFATgHAQQgRAvgaAmQgIAOgJAMQgMASgPAPQgdAigmAaQgKAIgKAGQhgA9iFACQgFAAgFAAQicAAhThJQg2gsgdhIQgpg8gChQg");
	this.shape_346.setTransform(689.5216,353.05);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgnF3QicAAhThJQg2gsgdhIQgpg7gChRIAAgDQgChTA4hJQAlhOBFg/QA9g5A8gdQAlgSAlgJQAagGAYgBQBNACBKAlQAYAMAVAPQAvAeAnAqQAiAkAZAlQA8BGADBKQgDAqgQAlQgFASgHARQgRAtgaAnIgRAaQgMASgPAPQgdAigmAaIgUAOQhgA9iFACIgKAAg");
	this.shape_347.setTransform(689.5216,353.05);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUAzQgChiArhWQAjhaBEhKQA/hCA/giQAngVAngKQAbgHAbgBQBQACBOArQAZAOAXARQAvAjAoAxQAiAqAZAsQAzBRAEBXQgBAxgLAqQgEAVgGAUQgPA2gXAtQgIAQgJAOQgMAUgNASQgeAogmAfQgLAIgKAIQhkBHiNACQgGAAgFAAQimAAhWhVQg2gygbhUQgfhHgCheg");
	this.shape_348.setTransform(689.5225,352.525);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgmG1QimAAhWhVQg2gygbhUQgfhHgCheIAAgCQgChiArhWQAjhaBEhKQA/hCA/giQAngVAngKQAbgHAbgBQBQACBOArQAZAOAXARQAvAjAoAxQAiAqAZAsQAzBRAEBXQgBAxgLAqQgEAVgGAUQgPA2gXAtIgRAeQgMAUgNASQgeAogmAfIgVAQQhkBHiNACIgLAAg");
	this.shape_349.setTransform(689.5225,352.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_315},{t:this.shape_314}]}).to({state:[{t:this.shape_317},{t:this.shape_316}]},1).to({state:[{t:this.shape_319},{t:this.shape_318}]},1).to({state:[{t:this.shape_321},{t:this.shape_320}]},1).to({state:[{t:this.shape_323},{t:this.shape_322}]},1).to({state:[{t:this.shape_325},{t:this.shape_324}]},1).to({state:[{t:this.shape_327},{t:this.shape_326}]},1).to({state:[{t:this.shape_329},{t:this.shape_328}]},1).to({state:[{t:this.shape_331},{t:this.shape_330}]},1).to({state:[{t:this.shape_333},{t:this.shape_332}]},1).to({state:[{t:this.shape_331},{t:this.shape_330}]},1).to({state:[{t:this.shape_329},{t:this.shape_328}]},1).to({state:[{t:this.shape_327},{t:this.shape_326}]},1).to({state:[{t:this.shape_325},{t:this.shape_324}]},1).to({state:[{t:this.shape_323},{t:this.shape_322}]},1).to({state:[{t:this.shape_321},{t:this.shape_320}]},1).to({state:[{t:this.shape_319},{t:this.shape_318}]},1).to({state:[{t:this.shape_317},{t:this.shape_316}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_317},{t:this.shape_316}]},1).to({state:[{t:this.shape_319},{t:this.shape_318}]},1).to({state:[{t:this.shape_321},{t:this.shape_320}]},1).to({state:[{t:this.shape_323},{t:this.shape_322}]},1).to({state:[{t:this.shape_325},{t:this.shape_324}]},1).to({state:[{t:this.shape_327},{t:this.shape_326}]},1).to({state:[{t:this.shape_329},{t:this.shape_328}]},1).to({state:[{t:this.shape_331},{t:this.shape_330}]},1).to({state:[{t:this.shape_333},{t:this.shape_332}]},1).to({state:[{t:this.shape_337},{t:this.shape_336}]},1).to({state:[{t:this.shape_339},{t:this.shape_338}]},1).to({state:[{t:this.shape_341},{t:this.shape_340}]},1).to({state:[{t:this.shape_343},{t:this.shape_342}]},1).to({state:[{t:this.shape_345},{t:this.shape_344}]},1).to({state:[{t:this.shape_347},{t:this.shape_346}]},1).to({state:[{t:this.shape_349},{t:this.shape_348}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).wait(1));

	// Каркас_5
	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(1,1,1).p("AiJ4nQBUgdB6ACQBvgCBQAGQAiACAMgCQAagGAMgUQAKgPAEgVQAGgbBulVQB0loAsh6QAxiHBajqQBdjBCYgqQCGAACwHHQBHC5A1C9QA0CzAYB3IACAJQAYB4ASCNIANBoIACAUIAEAiIADAgIANCMQANCgACBqQACCHgdCQQgVCBgBAzQA1DhAGDpQAMHKjRDEQisChh9BUQjtCkhWADIg6ATIgLAEQgPAHgIALQgTAaANB0QAPB+A1FTQAwEoA1D3QAxDKB8FaQBiE5AMEMMgrxgAFQAei6B6kVQBmj4BRisQH3xjAqh1QAuh7ADgbIACgTIgBgSQgFghgigJQgkgLiMhIQg4gghBgrQh9hVh7h7Qhyh6g+ibQhLjcANjrIAOifQAFhNgJgqQgBgCABAAIgShJQgYhqgXjNQgEgsgCgxQgCgpAAgqQgCjFAmj5QAnjnBhkVQGTxPDdgKQBPgEEELsQBDC/B5FjQBSDjAiBFg");
	this.shape_350.setTransform(601.2801,401.7492);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("EgZgAxpQAei6B6kVQBmj4BRisQH3xjAqh1QAuh7ADgbIACgTIgBgSQgFghgigJQgkgLiMhIQg4gghBgrQh9hVh7h7Qhyh6g+ibQhLjcANjrIAOifQAFhNgJgqIAAgCIgShJQgYhqgXjNIgGhdQgCgpAAgqQgCjFAmj5QAnjnBhkVQGTxPDdgKQBPgEEELsQBDC/B5FjQBSDjAiBFIALATQBUgdB6ACQBvgCBQAGQAiACAMgCQAagGAMgUQAKgPAEgVQAGgbBulVQB0loAsh6QAxiHBajqQBdjBCYgqQCGAACwHHQBHC5A1C9QA0CzAYB3IACAJQAYB4ASCNIANBoIACAUIAEAiIADAgIANCMQANCgACBqQACCHgdCQQgVCBgBAzQA1DhAGDpQAMHKjRDEQisChh9BUQjtCkhWADIg6ATIgLAEQgPAHgIALQgTAaANB0QAPB+A1FTQAwEoA1D3QAxDKB8FaQBiE5AMEMg");
	this.shape_351.setTransform(601.2801,401.7492);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(1,1,1).p("AiJ4nQBTgdB6ABQBwgCBQAHQAiABALgBQAbgGALgUQALgQAEgVQAGgeBjlNQBplkAph5QAuiIBVjtQBYjCCXguQCGgCC6HDQBLC2A6C9QA4CxAbB2IACAKQAaB3AVCNIAQBnIADAUIAEAiIAGApIAOCMQAOCgADBpQADCHgfCSQgWCDgCA0QA2DgAGDpQALHKjQDEQitCih8BTQjuClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAOB+A2FUQAwEnA1D3QAxDKB8FaQBiE5ANEMMgrxgAEQAdi6B6kVQBmj5BRirQH3xkAqh0QAth8AEgaIACgTIgBgSQgFghgjgKQgkgKiMhJQg4gghAgqQlPjihZkEQhMjcAOjrQAKhwgBgyQAGhMgJgrIAAgCIgRhIQgXhrgXjMIgGheIgBhTQgBjFAqj/QAqjmBkkUQGjxKDcgHQBPgDD6LwQBADABtFdQBRDjAjBFg");
	this.shape_352.setTransform(601.3301,401.7744);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("EgZfAxpQAdi6B6kVQBmj5BRirQH3xkAqh0QAth8AEgaIACgTIgBgSQgFghgjgKQgkgKiMhJQg4gghAgqQlPjihZkEQhMjcAOjrQAKhwgBgyQAGhMgJgrIAAgCIgRhIQgXhrgXjMIgGheIgBhTQgBjFAqj/QAqjmBkkUQGjxKDcgHQBPgDD6LwQBADABtFdQBRDjAjBFIALATQBTgdB6ABQBwgCBQAHQAiABALgBQAbgGALgUQALgQAEgVQAGgeBjlNQBplkAph5QAuiIBVjtQBYjCCXguQCGgCC6HDQBLC2A6C9QA4CxAbB2IACAKQAaB3AVCNIAQBnIADAUIAEAiIAGApIAOCMQAOCgADBpQADCHgfCSQgWCDgCA0QA2DgAGDpQALHKjQDEQitCih8BTQjuClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAOB+A2FUQAwEnA1D3QAxDKB8FaQBiE5ANEMg");
	this.shape_353.setTransform(601.3301,401.7744);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(1,1,1).p("AiJ4nQBTgdB6ABQBvgCBQAGQAiACAMgCQAagGAMgUQAKgPAEgVIBflmQBJkPA7jKQAriJBPjuQBVjFCVgxQCGgFDEG/QBPC0A+C7QA8CwAeB2IACAJQAdB4AZCLIARBnIAEAUIAFAiIAJAxIAOCMQAPCfAEBqQAFCHghCUQgXCFgCA0QA1DhAGDpQAMHKjRDEQisChh9BUQjtCkhWADIg6ASIgKAFQgRAHgHAKQgTAbANB0QAPB+A2FTQAwEoA1D2QAxDLB8FZQBiE5ANEMUgD0AABgn9gAEQAdi7B6kUQBmj5BRirQH2xkAqh0QAth8AFgbIACgTIgCgRQgFgigigJQgkgLiMhIQg4gghBgrQlPjihZkDQhLjcANjrQAKhxgEg0QAGhNgIgrQgBgBAAgBIgQhIQgXhrgWjMIgFheIgBhTQAAjFAukEQAtjmBokTQGxxEDdgEQBPgBDvLyQA+DBBfFWQBRDkAjBFg");
	this.shape_354.setTransform(601.3551,401.836);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("EgZfAxpQAdi7B6kUQBmj5BRirQH2xkAqh0QAth8AFgbIACgTIgCgRQgFgigigJQgkgLiMhIQg4gghBgrQlPjihZkDQhLjcANjrQAKhxgEg0QAGhNgIgrIgBgCIgQhIQgXhrgWjMIgFheIgBhTQAAjFAukEQAtjmBokTQGxxEDdgEQBPgBDvLyQA+DBBfFWQBRDkAjBFIAMATQBTgdB6ABQBvgCBQAGQAiACAMgCQAagGAMgUQAKgPAEgVIBflmQBJkPA7jKQAriJBPjuQBVjFCVgxQCGgFDEG/QBPC0A+C7QA8CwAeB2IACAJQAdB4AZCLIARBnIAEAUIAFAiIAJAxIAOCMQAPCfAEBqQAFCHghCUQgXCFgCA0QA1DhAGDpQAMHKjRDEQisChh9BUQjtCkhWADIg6ASIgKAFQgRAHgHAKQgTAbANB0QAPB+A2FTQAwEoA1D2QAxDLB8FZQBiE5ANEMIjeAAMgoTgADg");
	this.shape_355.setTransform(601.3551,401.836);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(1,1,1).p("AiJ4oQBTgdB6ABQBvgCBQAGQAiABAMgBQAagGAMgUQAKgQAEgVIBUlfQBBkLA2jJQAoiKBKjwQBPjHCVg0QCGgJDOG7QBTCyBDC6QA/CuAgB1IADAKQAgB2AbCLIAUBnIAEAUIAGAiIALA5IAQCMQARCfAEBpQAGCIgjCWQgYCGgCA1QA1DhAGDpQAMHKjRDEQisChh9BTQjtClhWADIg6ASIgKAFQgRAHgHAKQgTAbANBzQAPB+A2FUQAwEnA1D3QAxDKB9FaQBiE5AMEMMgrxgADQAei6B5kVQBnj4BQisQH2xkAqh0QAth8AFgaIACgTIgCgSQgFgigigJQgkgLiMhIQg4gghBgrQh9hUh7h8Qhyh6g+ibQhLjcANjrQAKhxgIg3QAHhNgJgrQAAgBAAgBQgHgagJguQgXhrgVjNIgEhdQgCgpABgqQACjFAxkLQAwjkBskSQHAw+DdgBQBPAADlL1QA8DCBSFQQBRDjAiBFg");
	this.shape_356.setTransform(601.3801,401.925);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("EgZfAxoQAei6B5kVQBnj4BQisQH2xkAqh0QAth8AFgaIACgTIgCgSQgFgigigJQgkgLiMhIQg4gghBgrQh9hUh7h8Qhyh6g+ibQhLjcANjrQAKhxgIg3QAHhNgJgrIAAgCQgHgagJguQgXhrgVjNIgEhdQgCgpABgqQACjFAxkLQAwjkBskSQHAw+DdgBQBPAADlL1QA8DCBSFQQBRDjAiBFIAMATQBTgdB6ABQBvgCBQAGQAiABAMgBQAagGAMgUQAKgQAEgVIBUlfQBBkLA2jJQAoiKBKjwQBPjHCVg0QCGgJDOG7QBTCyBDC6QA/CuAgB1IADAKQAgB2AbCLIAUBnIAEAUIAGAiIALA5IAQCMQARCfAEBpQAGCIgjCWQgYCGgCA1QA1DhAGDpQAMHKjRDEQisChh9BTQjtClhWADIg6ASIgKAFQgRAHgHAKQgTAbANBzQAPB+A2FUQAwEnA1D3QAxDKB9FaQBiE5AMEMg");
	this.shape_357.setTransform(601.3801,401.925);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(1,1,1).p("AiK4oQBTgdB6AAQBwgCBQAGQAiACALgCQAbgGALgUQALgPAEgVIBJlaQA5kHAxjIQAkiKBFjyQBLjICTg4QCGgMDYG2QBXCxBHC4QBECtAiB0IADAJQAiB2AfCKIAXBmIAEAUIAHAiQADAPALAyIARCMQASCfAFBpQAGCHgkCZQgZCIgDA2QA2DgAGDpQALHKjQDEQitCih9BTQjtCkhVADIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAOB+A2FTQAxEoA1D2QAxDLB9FZQBiE5AMEMI2kAAI1NgCQAei6B5kVQBmj5BRirQH2xkAqh0QAth9AEgaIACgTIgBgSQgFghgjgKQgkgKiMhIQg4gghAgrQh+hVh7h7Qhyh7g9ibQhMjcAOjrQAKhwgMg7QAHhMgIgrIgBgCIgQhJQgVhrgUjMIgEheIgBhTQADjFA1kQQAzjlBwkPQHPw5DcADQBPABDcL4QA4DDBFFIQBRDkAjBFg");
	this.shape_358.setTransform(601.4051,401.9997);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("EgESAxpI1NgBQAei6B5kVQBmj5BRirQH2xkAqh0QAth9AEgaIACgTIgBgSQgFghgjgKQgkgKiMhJQg4gfhAgrQh+hVh7h7Qhyh7g9ibQhMjcAOjrQAKhwgMg7QAHhNgIgqIgBgCIgQhJQgVhrgUjNIgEhdIgBhTQADjFA1kQQAzjlBwkPQHPw5DcADQBPABDcL4QA4DDBFFIQBRDkAjBFIALATQBTgeB6ABQBwgCBQAGQAiACALgCQAbgGALgUQALgPAEgWIBJlZQA5kHAxjIQAkiKBFjyQBLjICTg4QCGgMDYG2QBXCxBHC4QBECtAiBzIADAKQAiB2AfCKIAXBmIAEATIAHAjIAOBBIARCMQASCfAFBpQAGCHgkCZQgZCIgDA1QA2DhAGDpQALHKjQDEQitCih9BTQjtCkhVADIg6ATIgLAEQgQAHgHALQgUAaAOB0QAOB+A2FTQAxEoA1D2QAxDKB9FaQBiE5AMELg");
	this.shape_359.setTransform(601.4051,401.9997);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(1,1,1).p("AiK4pQBTgdB6AAQBvgDBQAGQAiACAMgCQAagGAMgUQAKgPAEgVIBAlTQAwkCArjHQAiiMA/jzQBGjKCSg7QCGgPDiGxQBbCvBLC2QBICrAlB0IADAJQAlB1AiCKIAYBlIAFATIAIAiIARBKIASCLQATCfAGBpQAHCHglCbQgaCKgDA2QA1DhAGDpQAMHKjRDEQisChh9BTQjtClhWADQgqAMgQAGIgKAFQgRAHgHAKQgTAbANBzQAPB+A2FUQAwEnA2D2QAxDLB9FZQBiE5AMEMUgDzAABgn+gACQAei7B5kUQBmj5BRisQH2xjAph1QAth7AFgbIACgTIgCgSQgFghgigKQgkgKiMhJQg4gghBgqQh9hVh7h8Qhyh6g+ibQhLjcANjrQAKhxgPg+QAHhMgIgrIAAgCIgQhJQgVhqgTjNIgEheQgBgpABgqQADjFA6kWQA3jkBzkNQHdwyDdAFQBPABDRL8QA1DDA5FCQBRDkAjBEg");
	this.shape_360.setTransform(601.4557,402.1188);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("EgZfAxnQAei7B5kUQBmj5BRisQH2xjAph1QAth7AFgbIACgTIgCgSQgFghgigKQgkgKiMhJQg4gghBgqQh9hVh7h8Qhyh6g+ibQhLjcANjrQAKhxgPg+QAHhMgIgrIAAgCIgQhJQgVhqgTjNIgEheQgBgpABgqQADjFA6kWQA3jkBzkNQHdwyDdAFQBPABDRL8QA1DDA5FCQBRDkAjBEIALAUQBTgdB6AAQBvgDBQAGQAiACAMgCQAagGAMgUQAKgPAEgVIBAlTQAwkCArjHQAiiMA/jzQBGjKCSg7QCGgPDiGxQBbCvBLC2QBICrAlB0IADAJQAlB1AiCKIAYBlIAFATIAIAiIARBKIASCLQATCfAGBpQAHCHglCbQgaCKgDA2QA1DhAGDpQAMHKjRDEQisChh9BTQjtClhWADQgqAMgQAGIgKAFQgRAHgHAKQgTAbANBzQAPB+A2FUQAwEnA2D2QAxDLB9FZQBiE5AMEMIoyAAMgi/gABg");
	this.shape_361.setTransform(601.4557,402.1188);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(1,1,1).p("AiL4qQBugnEeANQAiABAMgBQAagGAMgUQAKgQAEgVIA2lMQAoj+AmjGQAeiMA6j1QBBjLCRg/QCFgRDsGrQBfCtBPC0QBMCqAoBzIADAJQAnB0AmCJIAbBlIAFATIAIAiQAEAQARBBIATCMQAUCeAHBpQAICHgmCdQgbCMgEA3QA1DgAGDpQAMHKjRDEQisCih9BSQjtClhWADIg6ASIgKAFQgRAHgHALQgTAaANBzQAPB+A2FUQAxEnA1D3QAxDKB9FZQBiE6ANELI2lABI1MgBQAei7B5kVQBmj4BQisQH2xkAph0QAth8AFgaIACgTIgCgTQgFghgigJQgkgLiMhIQg4gghBgrQh9hUh7h8Qhyh6g+icQhLjcANjrQAKhwgShBQAHhNgIgrIAAgCIgPhIQgVhrgSjNQgCgtgBgxQgCgpACgqQAEjFA+kbQA6jjB2kNQHtwrDcAIQBPADDGL+QAaBjAFB1QAOB7AyCsQBRDkAjBEg");
	this.shape_362.setTransform(601.5769,402.272);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("EgZfAxmQAei7B5kVQBmj4BQisQH2xkAph0QAth8AFgaIACgTIgCgTQgFghgigJQgkgLiMhIQg4gghBgrQh9hUh7h8Qhyh6g+icQhLjcANjrQAKhwgShBQAHhNgIgrIAAgCIgPhIQgVhrgSjNIgDheQgCgpACgqQAEjFA+kbQA6jjB2kNQHtwrDcAIQBPADDGL+QAaBjAFB1QAOB7AyCsQBRDkAjBEIALAUQBugnEeANQAiABAMgBQAagGAMgUQAKgQAEgVIA2lMQAoj+AmjGQAeiMA6j1QBBjLCRg/QCFgRDsGrQBfCtBPC0QBMCqAoBzIADAJQAnB0AmCJIAbBlIAFATIAIAiIAVBRIATCMQAUCeAHBpQAICHgmCdQgbCMgEA3QA1DgAGDpQAMHKjRDEQisCih9BSQjtClhWADIg6ASIgKAFQgRAHgHALQgTAaANBzQAPB+A2FUQAxEnA1D3QAxDKB9FZQBiE6ANELI2lABg");
	this.shape_363.setTransform(601.5769,402.272);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(1,1,1).p("AiM4rQBTgeB6AAQBvgDBQAGQAiABALgBQAbgGALgUQALgQAEgUQAFgWAmkwQAhj5AhjFQAbiNA0j1QA9jNCPhCQCFgVD1GmQBjCrBTCyQBQCpAqBxIAEAJQApBzApCIIAdBlIAGATIAJAhIAYBaIAUCLQAVCeAIBpQAJCHgoCgQgbCNgFA3QA2DhAGDpQALHKjQDEQitChh9BTQjtClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAwEoA2D2QAxDKB9FZQBiE6ANELMgrxAABQAei7B5kVQBmj4BQisQAHgPEYp5QDnoLAZhFQAth9AEgaIACgTIgBgSQgFghgjgKQgkgKiMhJQg4gghAgqQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgXhEQAJhNgIgrIgBgCIgOhIQgVhrgRjNQgCgtgBgxIABhTQAFjFBDkhQA9jhB6kLQH6wlDcALQBPAEC8MBQAYBigCByQAKB4AwCsQBRDjAiBFg");
	this.shape_364.setTransform(601.7162,402.4188);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("EgXJAqVQBmj4BQisIEfqIQDnoLAZhFQAth9AEgaIACgTIgBgSQgFghgjgKQgkgKiMhJQg4gghAgqQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgXhEQAJhNgIgrIgBgCIgOhIQgVhrgRjNIgDheIABhTQAFjFBDkhQA9jhB6kLQH6wlDcALQBPAEC8MBQAYBigCByQAKB4AwCsQBRDjAiBFIAMAUQBTgeB6AAQBvgDBQAGQAiABALgBQAbgGALgUQALgQAEgUQAFgWAmkwQAhj5AhjFQAbiNA0j1QA9jNCPhCQCFgVD1GmQBjCrBTCyQBQCpAqBxIAEAJQApBzApCIIAdBlIAGATIAJAhIAYBaIAUCLQAVCeAIBpQAJCHgoCgQgbCNgFA3QA2DhAGDpQALHKjQDEQitChh9BTQjtClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAwEoA2D2QAxDKB9FZQBiE6ANELMgrxAABQAei7B5kVg");
	this.shape_365.setTransform(601.7162,402.4188);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(1,1,1).p("AiL4qQBTgdB6AAQBvgEBQAGQAiACALgCQAbgFALgUQALgQAEgVIA1lMQApj+AmjGQAeiMA6j1QBCjLCQg/QCFgRDrGrQBgCtBPC0QBLCqAoBzIAEAJQAnB0AlCJIAbBlIAFATIAJAiQADAQARBBIATCMQAVCeAGBpQAJCHgnCdQgbCMgEA3QA2DgAGDpQALHKjQDEQitCih9BSQjtClhVADIg6ASIgLAFQgQAHgHAKQgUAbAOBzQAPB+A2FUQAwEnA2D2QAxDLB9FZQBiE5ANEMI2kABI1NgBQAei6B5kVQBmj5BQirQH1xkAqh1QAth8AEgaIACgTIgBgSQgFgigjgJQgkgLiMhIQg4gghAgrQh+hUh7h8Qhyh7g9ibQhMjcAOjrQAKhxgThBQAHhMgHgrQgBgCAAAAIgPhJQgVhrgSjNIgDhdIAAhTQAFjFA+kcQA6jiB2kNQHtwrDcAIQBPADDGL/QAaBiAFB1QAOB7AyCsQBRDkAiBFg");
	this.shape_366.setTransform(601.6269,402.272);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("EgZfAxmQAei6B5kVQBmj5BQirQH1xkAqh1QAth8AEgaIACgTIgBgSQgFgigjgJQgkgLiMhIQg4gghAgrQh+hUh7h8Qhyh7g9ibQhMjcAOjrQAKhxgThBQAHhMgHgrIgBgCIgPhJQgVhrgSjNIgDhdIAAhTQAFjFA+kcQA6jiB2kNQHtwrDcAIQBPADDGL/QAaBiAFB1QAOB7AyCsQBRDkAiBFIAMATQBTgdB6AAQBvgEBQAGQAiACALgCQAbgFALgUQALgQAEgVIA1lMQApj+AmjGQAeiMA6j1QBCjLCQg/QCFgRDrGrQBgCtBPC0QBLCqAoBzIAEAJQAnB0AlCJIAbBlIAFATIAJAiQADAQARBBIATCMQAVCeAGBpQAJCHgnCdQgbCMgEA3QA2DgAGDpQALHKjQDEQitCih9BSQjtClhVADIg6ASIgLAFQgQAHgHAKQgUAbAOBzQAPB+A2FUQAwEnA2D2QAxDLB9FZQBiE5ANEMI2kABg");
	this.shape_367.setTransform(601.6269,402.272);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(1,1,1).p("AiK4oQBTgdB6gBQBvgDBQAGQAiACALgCQAbgGALgUQALgPAEgVIA/lTQAxkDArjHQAiiMA/jzQBGjKCTg6QCFgPDhGxQBcCvBLC2QBHCrAmB0IADAJQAlB1AiCKIAYBlIAFAUIAIAiQADAPAOA6IASCLQATCfAFBpQAICHglCbQgaCKgEA2QA2DhAGDpQALHKjQDEQitChh9BTQjtClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAwEoA2D2QAxDKB9FZQBjE6AMELMgrxAABQAei7B5kUQBmj5BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhJQg4gghAgqQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgQg+QAHhNgIgrIAAgCIgQhIQgVhrgTjNQgDgtAAgxQgCgoACgrQADjEA6kWQA3jkBzkOQHfwxDcAFQBPACDQL8QA2DDA4FCQBRDjAiBFg");
	this.shape_368.setTransform(601.5132,402.1486);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("EgXHAqZQBmj5BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhJQg4gghAgqQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgQg+QAHhNgIgrIAAgCIgQhIQgVhrgTjNQgDgtAAgxQgCgoACgrQADjEA6kWQA3jkBzkOQHfwxDcAFQBPACDQL8QA2DDA4FCQBRDjAiBFIAMAUQBTgdB6gBQBvgDBQAGQAiACALgCQAbgGALgUQALgPAEgVIA/lTQAxkDArjHQAiiMA/jzQBGjKCTg6QCFgPDhGxQBcCvBLC2QBHCrAmB0IADAJQAlB1AiCKIAYBlIAFAUIAIAiIARBJIASCLQATCfAFBpQAICHglCbQgaCKgEA2QA2DhAGDpQALHKjQDEQitChh9BTQjtClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAwEoA2D2QAxDKB9FZQBjE6AMELMgrxAABQAei7B5kUg");
	this.shape_369.setTransform(601.5132,402.1486);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(1,1,1).p("AiK4nQBvgnEdAMQAiACALgCQAbgGALgUQALgPAEgVIBKlaQA4kGAxjIQAliLBFjyQBLjICTg4QCGgMDXG2QBYCxBGC4QBECuAjB0IADAJQAiB1AfCLIAWBmIAEAUIAHAiQADAQALAxIARCMQARCfAGBpQAGCHgkCZQgZCIgDA1QA2DhAGDpQALHKjQDEQitChh9BTQjtClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAwEoA2D2QAxDKB9FZQBjE6AMELMgrxAABQAei7B5kUQBmj5BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhJQg4gghAgqQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgNg7QAIhNgJgrQgBgBABgBIgQhIQgWhrgUjNIgEhdQgBgpABgrQADjEA2kRQA0jkBvkPQHRw4DcADQBPAADaL5QA5DDBEFJQBRDkAiBEg");
	this.shape_370.setTransform(601.5051,402.0246);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("EgXHAqaQBmj5BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhJQg4gghAgqQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgNg7QAIhNgJgrIAAgCIgQhIQgWhrgUjNIgEhdQgBgpABgrQADjEA2kRQA0jkBvkPQHRw4DcADQBPAADaL5QA5DDBEFJQBRDkAiBEIAMAUQBvgnEdAMQAiACALgCQAbgGALgUQALgPAEgVIBKlaQA4kGAxjIQAliLBFjyQBLjICTg4QCGgMDXG2QBYCxBGC4QBECuAjB0IADAJQAiB1AfCLIAWBmIAEAUIAHAiQADAQALAxIARCMQARCfAGBpQAGCHgkCZQgZCIgDA1QA2DhAGDpQALHKjQDEQitChh9BTQjtClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAwEoA2D2QAxDKB9FZQBjE6AMELMgrxAABQAei7B5kUg");
	this.shape_371.setTransform(601.5051,402.0246);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(1,1,1).p("AiK4mQBvgnEdAMQAiACALgCQAbgGALgUQALgPAEgVIBUlgQBBkLA2jIQAoiLBKjvQBQjHCVg0QCFgIDOG6QBTCzBDC5QA/CvAgB1IADAJQAfB3AcCLIAUBmIAEAUIAGAiIALA5IAQCMQAQCfAFBqQAFCHgiCWQgYCGgDA1QA2DhAGDpQALHKjQDEQitCih9BSQjtClhVACIg6ATIgLAFQgQAHgHAKQgUAbAOBzQAPB+A2FUQAxEnA1D2QAxDLB9FZQBjE5AMEMMgrxAABQAei7B5kVQBmj4BQisQH1xkAqh1QAth7AEgbIACgUIgBgSQgFghgjgJQgkgLiMhIQg4gghAgrQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgJg4QAHhNgJgrQgBgBABgBQgHgagKguQgVhrgVjNQgDgsgCgxIAAhTQABjFAykLQAxjlBskRQHCw9DdgBQBPAADkL2QA7DCBRFQQBRDkAiBEg");
	this.shape_372.setTransform(601.5051,401.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("EgXHAqbQBmj4BQitQH1xkAqh0QAth7AEgbIACgUIgBgSQgFghgjgJQgkgLiMhJQg4gfhAgrQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgJg4QAHhMgJgsIAAgCIgRhIQgVhqgVjNQgDgtgCgxIAAhTQABjFAykLQAxjlBskQQHCw+DdgBQBPAADkL2QA7DCBRFQQBRDkAiBEIAMAUQBvgnEdAMQAiACALgCQAbgFALgVQALgPAEgVIBUlgQBBkLA2jIQAoiKBKjwQBQjHCVg0QCFgJDOG7QBTCzBDC5QA/CvAgB1IADAKQAfB2AcCLIAUBnIAEAUIAGAiIALA5IAQCLQAQCgAFBpQAFCHgiCXQgYCFgDA1QA2DhAGDpQALHKjQDEQitChh9BTQjtClhVADIg6ASIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FUQAxEnA1D2QAxDKB9FaQBjE5AMELMgrxAABQAei6B5kVg");
	this.shape_373.setTransform(601.5051,401.9);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(1,1,1).p("AiK4lQBTgdB6AAQBvgEBQAGQAiACALgCQAbgGALgUQALgPAEgVIBfllQBJkQA8jJQAriJBPjuQBVjFCWgxQCFgFDEG/QBPC1A+C6QA8CxAdB1IACAKQAdB3AZCMIARBnIADATIAGAjIAIAwIAPCMQAPCgAEBpQAECHghCUQgXCFgCA0QA2DhAGDpQALHKjQDEQitChh9BTQjtClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAxEoA1D2QAxDKB9FZQBjE6AMELI2kACI1NgBQAei6B5kVQBmj5BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhJQg4gfhAgrQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgGg1QAGhNgIgrIgBgCIgQhIQgXhrgVjMQgDgtgCgxQgCgpABgqQAAjFAvkFQAujmBokSQG1xDDcgEQBPAADuLyQA9DBBfFXQBQDkAjBEg");
	this.shape_374.setTransform(601.5051,401.825);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("EgZeAxrQAei6B5kVQBmj5BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhJQg4gfhAgrQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgGg1QAGhNgIgrIgBgCIgQhIQgXhrgVjMQgDgtgCgxQgCgpABgqQAAjFAvkFQAujmBokSQG1xDDcgEQBPAADuLyQA9DBBfFXQBQDkAjBEIALAUQBTgdB6AAQBvgEBQAGQAiACALgCQAbgGALgUQALgPAEgVIBfllQBJkQA8jJQAriJBPjuQBVjFCWgxQCFgFDEG/QBPC1A+C6QA8CxAdB1IACAKQAdB3AZCMIARBnIADATIAGAjIAIAwIAPCMQAPCgAEBpQAECHghCUQgXCFgCA0QA2DhAGDpQALHKjQDEQitChh9BTQjtClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAxEoA1D2QAxDKB9FZQBjE6AMELI2kACg");
	this.shape_375.setTransform(601.5051,401.825);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(1,1,1).p("AiK4kQBTgdB6AAQBvgEBQAGQAiACALgCQAbgGALgUQALgPAEgVQAGgeBjlNQBqlkAph5QAuiIBVjsQBZjDCXgtQCGgDC5HEQBLC2A6C9QA4CxAaB2IADAKQAZB3AWCNIAPBnIADAUIAEAiIAGApIAOCMQANCgADBpQAECHgfCSQgWCDgCAzQA2DhAGDpQALHKjQDEQitChh9BTQjtCkhVADIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAxEoA1D2QAxDKB9FZQBjE6ANELMgrxAACQAdi7B5kVQBmj5BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhIQg4gghAgrQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgCgyQAGhNgJgrIgBgCIgQhIQgXhrgXjMIgFheIgBhTQgBjFArj/QArjmBlkUQGlxJDdgGQBPgCD4LvQA/DBBsFdQBQDkAjBEg");
	this.shape_376.setTransform(601.5301,401.7497);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("EgXHAqcQBmj4BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhIQg4gghAgrQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgCgyQAGhNgJgrIgBgCIgQhJQgXhqgXjMIgFhfIgBhSQgBjFArj/QArjmBlkUQGlxJDdgGQBPgCD4LvQA/DBBsFdQBQDkAjBEIALAUQBTgdB6gBQBvgDBQAGQAiABALgBQAbgGALgUQALgQAEgUQAGgeBjlNQBqlkAph6QAuiHBVjsQBZjDCXguQCGgCC5HDQBLC3A6C9QA4CxAaB2IADAJQAZB4AWCMIAPBoIADAUIAEAiIAGAoIAOCNQANCgADBoQAECIgfCSQgWCDgCAzQA2DhAGDpQALHKjQDDQitCih9BTQjtCkhVADIg6ATIgLAEQgQAIgHAKQgUAbAOByQAPB/A2FTQAxEoA1D1QAxDLB9FZQBjE6ANELMgrxAACQAdi7B5kWg");
	this.shape_377.setTransform(601.5301,401.7497);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(1,1,1).p("AiK4jQBTgdB6gBQBvgDBQAGQAiABALgBQAbgGALgUQALgPAEgVQAGgcBulUQB1loAsh6QAxiHBbjqQBdjBCYgpQCGAACvHHQBGC5A2C9QA0CzAXB3IACAJQAYB4ASCNIAMBoIADAUIAEAiIADAgIAMCNQANCgACBpQADCHgeCQQgVCBgBAzQA2DgAGDpQALHKjQDEQitCih9BSQjtClhVADIg6ASIgLAFQgQAHgHAKQgUAbAOBzQAPB+A2FUQAxEnA1D2QAxDLB9FZQBjE5ANEMMgrxAABQAdi7B5kUQBmj5BQisQH1xkAqh0QAth9AEgaIACgTIgBgSQgFgigjgJQgkgLiMhIQg4gghAgqQh+hVh7h8Qhyh7g9ibQhMjcAOjrQAKhxABgvQAGhNgJgrIgBgCIgRhIQgYhqgXjNIgFhdQgCgpAAgrQgBjEAnj6QAojnBhkUQGYxPDcgJQBPgDEBLsQBCDAB5FkQBQDjAjBFg");
	this.shape_378.setTransform(601.5301,401.6992);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("EgXHAqeQBmj5BQisQH1xkAqh0QAth9AEgaIACgTIgBgSQgFgigjgJQgkgLiMhIQg4gghAgqQh+hVh7h8Qhyh7g9ibQhMjcAOjrQAKhxABgvQAGhNgJgrIgBgCIgRhIQgYhqgXjNIgFhdQgCgpAAgrQgBjEAnj6QAojnBhkUQGYxPDcgJQBPgDEBLsIC7IkQBQDjAjBFIALAUQBTgdB6gBQBvgDBQAGQAiABALgBQAbgGALgUQALgPAEgVQAGgcBulUQB1loAsh6QAxiHBbjqQBdjBCYgpQCGAACvHHQBGC5A2C9QA0CzAXB3IACAJQAYB4ASCNIAMBoIADAUIAEAiIADAgIAMCNQANCgACBpQADCHgeCQQgVCBgBAzQA2DgAGDpQALHKjQDEQitCih9BSQjtClhVADIg6ASIgLAFQgQAHgHAKQgUAbAOBzQAPB+A2FUQAxEnA1D2QAxDLB9FZQBjE5ANEMMgrxAABQAdi7B5kUg");
	this.shape_379.setTransform(601.5301,401.6992);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(1,1,1).p("AiL4qQBTgdB6AAQBvgEBQAGQAiACALgCQAbgFALgUQALgQAEgVIA0lMQAoj8AljGQAeiNA4j0QBCjMCQg/QCFgSDtGrQBgCsBPC1QBNCpAoBzIADAJQAoBzAlCKIAbBkIAGAUIAIAhQAEAQARBDIATCLQAVCfAGBpQAJCGgnCeQgbCMgEA3QA2DgAGDpQALHKjQDEQitCih9BSQjtClhVADIg6ASIgLAFQgQAHgHAKQgUAbAOBzQAPB+A2FUQAwEnA2D2QAxDLB9FZQBiE5ANEMI2kABI1NgBQAei6B5kVQBmj5BQisQH1xjAqh1QAth8AEgaIACgTIgBgSQgFgigjgJQgkgLiMhIQg4gghAgrQh+hUh7h8Qhyh7g9ibQhMjcAOjrQAKhxgUhBQAIhMgIgrIAAgDIgPhIQgVhrgSjNQgCgtgBgxIAAhTQAFjEA+kdQA7jiB3kNQHuwqDcAJQBPADDFL+QAZBjAFB1QANB6AyCsQBRDkAiBFg");
	this.shape_380.setTransform(601.6269,402.2962);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("EgZfAxmQAei6B5kVQBmj5BQisQH1xjAqh1QAth8AEgaIACgTIgBgSQgFgigjgJQgkgLiMhIQg4gghAgrQh+hUh7h8Qhyh7g9ibQhMjcAOjrQAKhxgUhBQAIhMgIgrIAAgDIgPhIQgVhrgSjNIgDheIAAhTQAFjEA+kdQA7jiB3kNQHuwqDcAJQBPADDFL+QAZBjAFB1QANB6AyCsQBRDkAiBFIAMATQBTgdB6AAQBvgEBQAGQAiACALgCQAbgFALgUQALgQAEgVIA0lMQAoj8AljGQAeiNA4j0QBCjMCQg/QCFgSDtGrQBgCsBPC1QBNCpAoBzIADAJQAoBzAlCKIAbBkIAGAUIAIAhIAVBTIATCLQAVCfAGBpQAJCGgnCeQgbCMgEA3QA2DgAGDpQALHKjQDEQitCih9BSQjtClhVADIg6ASIgLAFQgQAHgHAKQgUAbAOBzQAPB+A2FUQAwEnA2D2QAxDLB9FZQBiE5ANEMI2kABg");
	this.shape_381.setTransform(601.6269,402.2962);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(1,1,1).p("AiK4pQBTgdB6AAQBvgEBQAGQAiACALgBQAbgGALgUQALgQAEgVIA9lRQAukBAqjHQAhiMA+j0QBFjKCSg8QCFgPDkGvQBdCvBLC1QBJCsAmBzIADAJQAmB1AjCJIAZBmIAFATIAIAiQADAPAOA9IATCLQATCfAGBpQAHCHglCbQgaCLgEA2QA2DgAGDpQALHKjQDEQitCih9BSQjtClhVADIg6ASIgLAFQgQAHgHAKQgUAbAOBzQAPB+A2FUQAwEnA2D2QAxDLB9FZQBiE5ANEMMgrxAABQAei7B5kVQBmj5BQirQH1xkAqh1QAth8AEgaIACgTIgBgSQgFgigjgJQgkgLiMhIQg4gghAgrQh+hUh7h8Qhyh7g9ibQhMjcAOjrQAKhxgRg+QAIhNgIgrQgBgCAAAAQgGgbgJgtQgVhrgTjNQgCgtgBgxQgCgoACgrQADjFA7kXQA4jjB0kOQHiwwDdAGQBPADDNL8QAbBiAKB4QASB8AzCtQBRDkAiBFg");
	this.shape_382.setTransform(601.5382,402.173);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("EgXHAqYQBmj5BQirQH1xkAqh1QAth8AEgaIACgTIgBgSQgFgigjgJQgkgLiMhIQg4gghAgrQh+hUh7h8Qhyh7g9ibQhMjcAOjrQAKhxgRg+QAIhNgIgrIgBgCIgPhIQgVhrgTjNIgDheQgCgoACgrQADjFA7kXQA4jjB0kOQHiwwDdAGQBPADDNL8QAbBiAKB4QASB8AzCtQBRDkAiBFIAMATQBTgdB6AAQBvgEBQAGQAiACALgBQAbgGALgUQALgQAEgVIA9lRQAukBAqjHQAhiMA+j0QBFjKCSg8QCFgPDkGvQBdCvBLC1QBJCsAmBzIADAJQAmB1AjCJIAZBmIAFATIAIAiIARBMIATCLQATCfAGBpQAHCHglCbQgaCLgEA2QA2DgAGDpQALHKjQDEQitCih9BSQjtClhVADIg6ASIgLAFQgQAHgHAKQgUAbAOBzQAPB+A2FUQAwEnA2D2QAxDLB9FZQBiE5ANEMMgrxAABQAei7B5kVg");
	this.shape_383.setTransform(601.5382,402.173);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(1,1,1).p("AiK4nQBvgnEdAMQAiACALgCQAbgGALgUQALgPAEgVIBGlXQA1kFAvjIQAkiLBCjyQBKjJCTg5QCFgNDcG0QBYCwBIC3QBGCtAjB0IADAJQAkB1AgCLIAXBmIAEATIAHAiIAQBFIARCLQASCfAFBpQAHCHgkCaQgZCJgEA1QA2DhAGDpQALHKjQDEQitChh9BTQjtClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAwEoA2D2QAxDKB9FZQBjE6AMELMgrxAABQAei7B5kUQBmj5BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhJQg4gghAgqQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgOg8QAHhNgIgrQgBgBABgBIgQhIQgWhrgTjNQgCgtgCgxQgBgoABgrQADjFA3kSQA2jkBwkPQHWw1DdADQBPACDWL6QA3DDBAFGQBRDjAiBFg");
	this.shape_384.setTransform(601.5051,402.0496);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("EgXHAqaQBmj5BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhJQg4gghAgqQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgOg8QAHhNgIgrIAAgCIgQhIQgWhrgTjNIgEheQgBgoABgrQADjFA3kSQA2jkBwkPQHWw1DdADQBPABDWL7QA3DCBAFHQBRDjAiBFIAMAUQBvgnEdAMQAiACALgCQAbgGALgUQALgPAEgVIBGlXQA1kFAvjJQAkiKBCjyQBKjJCTg5QCFgNDcGzQBYCxBIC3QBGCtAjB0IADAJQAkB1AgCLIAXBmIAEATIAHAiIAQBFIARCLQASCfAFBpQAHCHgkCaQgZCJgEA1QA2DhAGDpQALHKjQDEQitChh9BTQjtClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAwEoA2D2QAxDKB9FZQBjE6AMELMgrxAABQAei7B5kUg");
	this.shape_385.setTransform(601.5051,402.0496);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(1,1,1).p("AiK4mQBvgnEdAMQAiACALgCQAbgGALgUQALgPAEgVIBPldQA9kJAzjIQAniKBHjxQBNjICUg1QCGgLDTG4QBVCyBFC5QBCCuAhB1IACAJQAhB2AdCLIAVBmIAEAUIAHAiIANA9IAQCMQARCgAFBoQAFCHgiCYQgZCHgDA1QA2DhAGDpQALHKjQDEQitChh9BTQjtClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAwEoA2D2QAxDKB9FZQBjE6AMELMgrxAABQAei6B5kVQBmj5BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhJQg4gfhAgrQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgLg6QAHhMgIgrQgBgCAAAAIgQhJQgWhqgUjNIgEheIgBhTQADjFAzkNQAzjlBukQQHJw6DdAAQBPAADfL4QA5DDBLFMQBRDkAiBEg");
	this.shape_386.setTransform(601.5051,401.95);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("EgXHAqaQBmj4BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFgigjgJQgkgKiMhJQg4gfhAgrQh+hVh7h8Qhyh7g9iaQhMjdAOjrQAKhwgLg6QAHhNgIgqIgBgCIgQhJQgWhrgUjMIgEheIgBhUQADjEAzkOQAzjkBukQQHJw6DdAAQBPAADfL4QA5DCBLFNQBRDjAiBFIAMAUQBvgoEdANQAiABALgBQAbgGALgUQALgQAEgUIBPldQA9kJAzjIQAniKBHjyQBNjHCUg2QCGgKDTG4QBVCyBFC5QBCCuAhB0IACAKQAhB2AdCLIAVBmIAEAUIAHAiIANA9IAQCMQARCgAFBoQAFCHgiCYQgZCHgDA1QA2DgAGDqQALHKjQDDQitCih9BTQjtCkhVADIg6ASIgLAFQgQAIgHAKQgUAbAOByQAPB/A2FTQAwEoA2D1QAxDLB9FZQBjE5AMEMMgrxAABQAei6B5kWg");
	this.shape_387.setTransform(601.5051,401.95);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(1,1,1).p("AiK4mQBTgdB6AAQBvgDBQAGQAiABALgBQAbgGALgUQALgQAEgVIBYlhQBEkNA4jJQAqiKBMjvQBRjGCVgzQCGgHDKG8QBSC0BAC6QA/CvAfB1IACAKQAeB2AbCMIATBmIAEAUIAGAiIAJA2IAQCMQAQCfAEBqQAFCHgiCWQgXCFgDA1QA2DgAGDpQALHKjQDEQitCih9BSQjtClhVADIg6ASIgLAFQgQAHgHAKQgUAbAOBzQAPB+A2FUQAxEnA1D2QAxDLB9FZQBjE5AMEMMgrxAABQAei7B5kVQBmj4BQisQH1xkAqh1QAth7AEgbIACgTIgBgSQgFgigjgJQgkgLiMhIQg4gghAgrQh+hUh7h8Qhyh7g9ibQhMjcAOjrQAKhxgIg3QAHhMgJgrQgBgCABAAIgRhIQgWhrgVjNQgDgtgBgxQgCgoABgrQABjFAxkIQAvjmBrkRQG9xADdgBQBPAADnL0QA8DCBWFSQBRDkAjBFg");
	this.shape_388.setTransform(601.5051,401.875);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("EgXHAqbQBmj4BQisQH1xkAqh1QAth7AEgbIACgTIgBgSQgFgigjgJQgkgLiMhIQg4gghAgrQh+hUh7h8Qhyh7g9ibQhMjcAOjrQAKhxgIg3QAHhMgJgrIAAgCIgRhIQgWhrgVjNQgDgtgBgxQgCgoABgrQABjFAxkIQAvjmBrkRQG9xADdgBQBPAADnL0QA8DCBWFSQBRDkAjBFIALATQBTgdB6AAQBvgDBQAGQAiABALgBQAbgGALgUQALgQAEgVIBYlhQBEkNA4jJQAqiKBMjvQBRjGCVgzQCGgHDKG8QBSC0BAC6QA/CvAfB1IACAKQAeB2AbCMIATBmIAEAUIAGAiIAJA2IAQCMQAQCfAEBqQAFCHgiCWQgXCFgDA1QA2DgAGDpQALHKjQDEQitCih9BSQjtClhVADIg6ASIgLAFQgQAHgHAKQgUAbAOBzQAPB+A2FUQAxEnA1D2QAxDLB9FZQBjE5AMEMMgrxAABQAei7B5kVg");
	this.shape_389.setTransform(601.5051,401.875);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(1,1,1).p("AiK4lQBTgdB6AAQBvgEBQAGQAiACALgCQAbgGALgUQALgPAEgVIBhlnQBjliAmh4QAsiJBRjtQBVjECWgwQCGgFDBHAQBOC2A9C7QA7CwAcB2IADAKQAcB2AXCNIARBnIAEATIAFAjIAHAvIAPCLQAPCgADBpQAECIggCTQgXCEgCA0QA2DhAGDpQALHKjQDEQitChh9BTQjtClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAxEoA1D2QAxDKB9FZQBjE6AMELI2kACI1NgBQAei6B5kVQBmj5BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhIQg4gghAgrQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgFg1QAHhMgJgrQgBgCAAAAIgQhIQgXhrgWjNQgDgtgCgwIgBhUQAAjEAukEQAtjmBokSQGwxFDdgEQBPgCDwLzQA+DBBiFYQBQDkAjBEg");
	this.shape_390.setTransform(601.5051,401.8247);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("EgZeAxrQAei6B5kVQBmj5BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhIQg4gghAgrQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgFg1QAHhMgJgrIgBgCIgQhIQgXhrgWjNQgDgtgCgwIgBhUQAAjEAukEQAtjmBokSQGwxFDdgEQBPgCDwLzQA+DBBiFYQBQDkAjBEIALAUQBTgdB6AAQBvgEBQAGQAiACALgCQAbgGALgUQALgPAEgVIBhlnQBjliAmh4QAsiJBRjtQBVjECWgwQCGgFDBHAQBOC2A9C7QA7CwAcB2IADAKQAcB2AXCNIARBnIAEATIAFAjIAHAvIAPCLQAPCgADBpQAECIggCTQgXCEgCA0QA2DhAGDpQALHKjQDEQitChh9BTQjtClhVACIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAxEoA1D2QAxDKB9FZQBjE6AMELI2kACg");
	this.shape_391.setTransform(601.5051,401.8247);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(1,1,1).p("AiK4kQBTgdB6AAQBvgEBQAGQAiACALgCQAbgGALgUQALgPAEgVQAGgeBllOQBrlkAph5QAviIBWjsQBZjDCXgsQCGgDC4HEQBKC3A6C8QA3CyAaB2IACAKQAaB4AVCMIAOBnIADAUIAFAjIAFAnIAOCMQANCgADBpQADCIgeCRQgWCDgCAzQA2DhAGDpQALHKjQDEQitChh9BTQjtCkhVADIg6ATIgLAEQgQAIgHAKQgUAbAOBzQAPB+A2FTQAxEoA1D2QAxDKB9FZQBjE6ANELMgrxAACQAdi7B5kVQBmj5BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhIQg4gghAgrQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgCgyQAGhNgJgrQgBgBABgBIgRhIQgXhqgXjNQgDgtgCgxQgCgoABgrQgBjFAqj+QAqjmBlkUQGlxKDcgGQBPgCD5LvQBADABtFeQBQDkAjBEg");
	this.shape_392.setTransform(601.5301,401.7497);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("EgXHAqcQBmj4BQisQH1xkAqh0QAth8AEgbIACgTIgBgSQgFghgjgKQgkgKiMhIQg4gghAgrQh+hVh7h8Qhyh6g9ibQhMjcAOjsQAKhwgCgyQAGhNgJgrIAAgCIgRhIQgXhrgXjMQgDgtgCgxQgCgoABgrQgBjFAqj+QAqjmBlkUQGlxKDcgGQBPgCD5LuQBADBBtFeQBQDkAjBEIALAUQBTgdB6gBQBvgDBQAGQAiABALgBQAbgGALgUQALgQAEgUQAGgeBllOQBrllAph5QAviIBWjrQBZjDCXgtQCGgCC4HEQBKC3A6C8QA3CyAaB2IACAKQAaB4AVCMIAOBnIADAUIAFAjIAFAnIAOCMQANCgADBpQADCIgeCRQgWCDgCAzQA2DhAGDpQALHKjQDDQitCih9BTQjtCkhVADIg6ATIgLAEQgQAIgHAKQgUAbAOByQAPB/A2FTQAxEoA1D1QAxDLB9FZQBjE6ANELMgrxAACQAdi7B5kWg");
	this.shape_393.setTransform(601.5301,401.7497);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_351},{t:this.shape_350}]}).to({state:[{t:this.shape_353},{t:this.shape_352}]},1).to({state:[{t:this.shape_355},{t:this.shape_354}]},1).to({state:[{t:this.shape_357},{t:this.shape_356}]},1).to({state:[{t:this.shape_359},{t:this.shape_358}]},1).to({state:[{t:this.shape_361},{t:this.shape_360}]},1).to({state:[{t:this.shape_363},{t:this.shape_362}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_369},{t:this.shape_368}]},1).to({state:[{t:this.shape_371},{t:this.shape_370}]},1).to({state:[{t:this.shape_373},{t:this.shape_372}]},1).to({state:[{t:this.shape_375},{t:this.shape_374}]},1).to({state:[{t:this.shape_377},{t:this.shape_376}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_377},{t:this.shape_376}]},1).to({state:[{t:this.shape_375},{t:this.shape_374}]},1).to({state:[{t:this.shape_373},{t:this.shape_372}]},1).to({state:[{t:this.shape_371},{t:this.shape_370}]},1).to({state:[{t:this.shape_369},{t:this.shape_368}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_369},{t:this.shape_368}]},1).to({state:[{t:this.shape_371},{t:this.shape_370}]},1).to({state:[{t:this.shape_373},{t:this.shape_372}]},1).to({state:[{t:this.shape_375},{t:this.shape_374}]},1).to({state:[{t:this.shape_377},{t:this.shape_376}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_377},{t:this.shape_376}]},1).to({state:[{t:this.shape_375},{t:this.shape_374}]},1).to({state:[{t:this.shape_373},{t:this.shape_372}]},1).to({state:[{t:this.shape_371},{t:this.shape_370}]},1).to({state:[{t:this.shape_369},{t:this.shape_368}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_369},{t:this.shape_368}]},1).to({state:[{t:this.shape_371},{t:this.shape_370}]},1).to({state:[{t:this.shape_373},{t:this.shape_372}]},1).to({state:[{t:this.shape_375},{t:this.shape_374}]},1).to({state:[{t:this.shape_377},{t:this.shape_376}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_377},{t:this.shape_376}]},1).to({state:[{t:this.shape_375},{t:this.shape_374}]},1).to({state:[{t:this.shape_373},{t:this.shape_372}]},1).to({state:[{t:this.shape_371},{t:this.shape_370}]},1).to({state:[{t:this.shape_369},{t:this.shape_368}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_381},{t:this.shape_380}]},1).to({state:[{t:this.shape_383},{t:this.shape_382}]},1).to({state:[{t:this.shape_385},{t:this.shape_384}]},1).to({state:[{t:this.shape_387},{t:this.shape_386}]},1).to({state:[{t:this.shape_389},{t:this.shape_388}]},1).to({state:[{t:this.shape_391},{t:this.shape_390}]},1).to({state:[{t:this.shape_393},{t:this.shape_392}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).wait(1));

	// ГЛАЗА
	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#FFFFFF").ss(1,1,1).p("AL1ntQBWACBSAyQBPAwA7BTQCEC2geDVQgUCOg/BfQgdAugoAjQgKAKgLAIQhsBUieAAQiwAAhZhhQhihrgEjtQgDjoCFimQA5hIBIgqQBHgpBEgEgAq/n3QDNgPCBCXQBDBOAkBtQAdBXAJBpQAUDphrB+QhuCCjogDQjggEiDhyQh1hlgiizQgNhFANhPQADgSAEgTQAXhoA5hZQCIjWDtgLg");
	this.shape_394.setTransform(613.0782,351.4074);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AHNGYQhihrgEjtQgDjoCFimQA5hIBIgqQBHgpBEgEQBWACBSAyQBPAwA7BTQCEC2geDVQgUCOg/BfQgdAugoAjIgVASQhsBUieAAQiwAAhZhhgAqRHyQjggEiDhyQh1hlgiizQgNhFANhPIAHglQAXhoA5hZQCIjWDtgLQDNgPCBCXQBDBOAkBtQAdBXAJBpQAUDphrB+QhrB/jfAAIgMAAg");
	this.shape_395.setTransform(613.0782,351.4074);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_395},{t:this.shape_394}]}).wait(130));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(345.1,288.6,1163.9,432.29999999999995);
// library properties:
lib.properties = {
	id: '804ABE9A9722E14E96EE9667C310A7DC',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/6 задание_atlas_1.png", id:"6 задание_atlas_1"}
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
an.compositions['804ABE9A9722E14E96EE9667C310A7DC'] = {
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