(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"8.1 задание_atlas_1", frames: [[0,1871,1515,128],[1202,0,662,644],[0,0,1200,1200],[0,1202,973,667]]},
		{name:"8.1 задание_atlas_2", frames: [[0,130,664,154],[0,0,1299,128],[666,130,551,128],[666,260,362,128],[442,286,185,128],[0,286,303,128],[1301,0,372,336],[1675,0,121,408],[1798,0,121,346],[1030,260,136,240],[305,286,135,240]]}
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



(lib.CachedBmp_47 = function() {
	this.initialize(ss["8.1 задание_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["8.1 задание_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["8.1 задание_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["8.1 задание_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["8.1 задание_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["8.1 задание_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["8.1 задание_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.звездафрейм1анимации = function() {
	this.initialize(ss["8.1 задание_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.звездафрейм2анимации = function() {
	this.initialize(ss["8.1 задание_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.копье2 = function() {
	this.initialize(ss["8.1 задание_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.копьевоткнутое = function() {
	this.initialize(ss["8.1 задание_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.сердце = function() {
	this.initialize(ss["8.1 задание_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.тропаандертейл = function() {
	this.initialize(img.тропаандертейл);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6144,479);


(lib.фриск1фреймходьбы = function() {
	this.initialize(ss["8.1 задание_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.фриск2фреймходьбы = function() {
	this.initialize(ss["8.1 задание_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ядро = function() {
	this.initialize(ss["8.1 задание_atlas_1"]);
	this.gotoAndStop(3);
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


(lib.фриск = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.фриск1фреймходьбы();
	this.instance.setTransform(-35.15,-124.05,0.5169,0.5169);

	this.instance_1 = new lib.фриск2фреймходьбы();
	this.instance_1.setTransform(-35,-118,0.5169,0.4915);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-124,70.30000000000001,124);


(lib.сохранение = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.звездафрейм1анимации();
	this.instance.setTransform(-37,-72,0.1116,0.1116);

	this.instance_1 = new lib.звездафрейм2анимации();
	this.instance_1.setTransform(-20.95,-54.9,0.1116,0.1116);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1}]},4).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-72,73.9,71.9);


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.копьевоткнутое();
	this.instance.setTransform(0,0,0.7272,0.7272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,88,251.6), null);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.копье2();
	this.instance.setTransform(0,0,0.7272,0.7272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,88,296.7), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ядро();
	this.instance.setTransform(0,0,0.6272,0.6272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,610.3,418.3), null);


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
	this.instance = new lib.тропаандертейл();
	this.instance.setTransform(0,0,0.6199,0.6199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,3808.9,297), null);


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
	this.instance = new lib.сердце();
	this.instance.setTransform(-178.2,-19.75,0.0325,0.0325);

	this.instance_1 = new lib.CachedBmp_47();
	this.instance_1.setTransform(-124.75,-35.15,0.4172,0.4172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.2,-35.1,330.5,64.2);


(lib.копье = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ3();
	this.instance.setTransform(0,-794.25,1,1,0,0,0,44,148.3);

	this.instance_1 = new lib.копьевоткнутое();
	this.instance_1.setTransform(-44,-215,0.7272,0.6285);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-665.05},0).wait(1).to({y:-535.9},0).wait(1).to({y:-406.7},0).wait(1).to({y:-277.55},0).wait(1).to({y:-148.4},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-942.5,88,945);


(lib.Символ5 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-178.2,-35.1,330.5,64.2), null);


// stage content:
(lib._81задание = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [179];
	// timeline functions:
	this.frame_179 = function() {
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://undertale.com/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(61));

	// кнопка
	this.movieClip_1 = new lib.Символ5();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(402.2,394.75);
	this.movieClip_1._off = true;

	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(402.2,394.75,1.1984,1.1984);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(179).to({_off:false},0).to({_off:true,scaleX:1.1984,scaleY:1.1984,mode:"synched",startPosition:0},6).wait(24).to({_off:false,scaleX:1,scaleY:1,mode:"independent"},6).to({_off:true,scaleX:1.1984,scaleY:1.1984,mode:"synched",startPosition:0},6).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({_off:false},6).to({scaleX:1,scaleY:1},6).to({scaleX:1.1984,scaleY:1.1984},6).to({scaleX:1,scaleY:1},6).to({scaleX:1.1984,scaleY:1.1984},6).to({_off:true,scaleX:1,scaleY:1,mode:"independent"},6).to({_off:false,scaleX:1.1984,scaleY:1.1984,mode:"synched",startPosition:0},6).to({scaleX:1,scaleY:1},6).to({scaleX:1.1984,scaleY:1.1984},6).to({scaleX:1,scaleY:1},6).wait(1));

	// текст
	this.instance_1 = new lib.CachedBmp_45();
	this.instance_1.setTransform(759.3,359.6,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_44();
	this.instance_2.setTransform(220.2,266.15,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_43();
	this.instance_3.setTransform(864.85,167,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_42();
	this.instance_4.setTransform(573.05,167,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_41();
	this.instance_5.setTransform(220.2,167,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},179).wait(61));

	// окошко_сохранения
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(9,2,0,3).p("EhNdgb4MCa7AAAMAAAA3yMia7AAAg");
	this.shape.setTransform(642.2,315.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EhNdAb5MAAAg3xMCa7AAAMAAAA3xg");
	this.shape_1.setTransform(642.2,315.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},179).wait(61));

	// маска (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_156 = new cjs.Graphics().p("AgzIVIAAwpIBnAAIAAQpg");
	var mask_graphics_157 = new cjs.Graphics().p("AorIVIAAwpIRXAAIAAQpg");
	var mask_graphics_158 = new cjs.Graphics().p("AwjIVIAAwpMAhHAAAIAAQpg");
	var mask_graphics_159 = new cjs.Graphics().p("A4bIVIAAwpMAw4AAAIAAQpg");
	var mask_graphics_160 = new cjs.Graphics().p("EggUAIVIAAwpMBApAAAIAAQpg");
	var mask_graphics_161 = new cjs.Graphics().p("EgoMAIVIAAwpMBQZAAAIAAQpg");
	var mask_graphics_162 = new cjs.Graphics().p("EgwEAIVIAAwpMBgJAAAIAAQpg");
	var mask_graphics_163 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_164 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_165 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_166 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_167 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_168 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_169 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_170 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_171 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_172 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_173 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_174 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_175 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_176 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_177 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");
	var mask_graphics_178 = new cjs.Graphics().p("Eg39AIVIAAwpMBv6AAAIAAQpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(156).to({graphics:mask_graphics_156,x:87.975,y:528.825}).wait(1).to({graphics:mask_graphics_157,x:139.4,y:528.825}).wait(1).to({graphics:mask_graphics_158,x:190.875,y:528.825}).wait(1).to({graphics:mask_graphics_159,x:242.3,y:528.825}).wait(1).to({graphics:mask_graphics_160,x:293.775,y:528.825}).wait(1).to({graphics:mask_graphics_161,x:345.2,y:528.825}).wait(1).to({graphics:mask_graphics_162,x:396.675,y:528.825}).wait(1).to({graphics:mask_graphics_163,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_164,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_165,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_166,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_167,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_168,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_169,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_170,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_171,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_172,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_173,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_174,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_175,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_176,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_177,x:448.1,y:528.825}).wait(1).to({graphics:mask_graphics_178,x:448.1,y:528.825}).wait(1).to({graphics:null,x:0,y:0}).wait(61));

	// текст
	this.instance_6 = new lib.CachedBmp_46();
	this.instance_6.setTransform(101.9,489.35,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(156).to({_off:false},0).to({_off:true},23).wait(61));

	// окошко_сообщения
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(9,2,0,3).p("EhbFgStMC2KAAAMAAAAlbMi2KAAAg");
	this.shape_2.setTransform(642.1,578.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("EhbFASuMAAAglbMC2LAAAMAAAAlbg");
	this.shape_3.setTransform(642.1,578.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},156).to({state:[]},23).wait(61));

	// копье___копия___копия
	this.instance_7 = new lib.копье("synched",0);
	this.instance_7.setTransform(588.7,390.1,1,1,0,0,0,0,-148.3);
	this.instance_7._off = true;

	this.instance_8 = new lib.Символ4();
	this.instance_8.setTransform(471,401.8,1,1,0,0,0,44,125.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(57).to({_off:false},0).wait(1).to({regY:-470,x:569,y:66.15,startPosition:1},0).wait(1).to({x:549.35,y:63.95,startPosition:2},0).wait(1).to({x:529.7,y:61.75,startPosition:3},0).wait(1).to({x:510.05,y:59.5,startPosition:4},0).wait(1).to({x:490.4,y:57.3,startPosition:5},0).wait(1).to({x:470.75,y:55.1,startPosition:6},0).to({_off:true},1).wait(176));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({_off:false},0).wait(1).to({x:459.55},0).wait(1).to({x:448.15},0).wait(1).to({x:436.7},0).wait(1).to({x:425.3},0).wait(1).to({x:413.85},0).wait(1).to({x:402.45},0).wait(1).to({x:391},0).wait(1).to({x:379.6},0).wait(1).to({x:368.15},0).wait(1).to({x:356.75},0).wait(1).to({x:345.3},0).wait(1).to({x:333.9},0).wait(1).to({x:322.45},0).wait(1).to({x:311.05},0).wait(1).to({x:299.6},0).wait(1).to({x:288.2},0).wait(1).to({x:276.8},0).wait(1).to({x:265.35},0).wait(1).to({x:253.95},0).wait(1).to({x:242.5},0).wait(1).to({x:231.1},0).wait(1).to({x:219.65},0).wait(1).to({x:208.25},0).wait(1).to({x:196.8},0).wait(1).to({x:185.4},0).wait(1).to({x:173.95},0).wait(1).to({x:162.55},0).wait(1).to({x:151.1},0).wait(1).to({x:139.7},0).wait(1).to({x:128.25},0).wait(1).to({x:116.85},0).wait(1).to({x:105.4},0).wait(1).to({x:94},0).wait(1).to({x:82.6},0).wait(1).to({x:71.15},0).wait(1).to({x:59.75},0).wait(1).to({x:48.3},0).wait(1).to({x:36.95},0).wait(1).to({x:25.5},0).wait(1).to({x:14.1},0).wait(1).to({x:2.65},0).wait(1).to({x:-8.75},0).wait(1).to({x:-20.2},0).wait(1).to({x:-31.6},0).wait(1).to({x:-43.05},0).wait(1).to({x:-54.45},0).wait(1).to({x:-65.9},0).wait(1).to({x:-77.3},0).wait(1).to({x:-88.75},0).to({_off:true},1).wait(126));

	// копье___копия
	this.instance_9 = new lib.копье("synched",0);
	this.instance_9.setTransform(588.7,390.1,1,1,0,0,0,0,-148.3);
	this.instance_9._off = true;

	this.instance_10 = new lib.Символ4();
	this.instance_10.setTransform(471,401.8,1,1,0,0,0,44,125.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(38).to({_off:false},0).wait(1).to({regY:-470,x:569,y:66.15,startPosition:1},0).wait(1).to({x:549.35,y:63.95,startPosition:2},0).wait(1).to({x:529.7,y:61.75,startPosition:3},0).wait(1).to({x:510.05,y:59.5,startPosition:4},0).wait(1).to({x:490.4,y:57.3,startPosition:5},0).wait(1).to({x:470.75,y:55.1,startPosition:6},0).to({_off:true},1).wait(195));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(45).to({_off:false},0).wait(1).to({x:459.55},0).wait(1).to({x:448.15},0).wait(1).to({x:436.7},0).wait(1).to({x:425.3},0).wait(1).to({x:413.85},0).wait(1).to({x:402.45},0).wait(1).to({x:391},0).wait(1).to({x:379.6},0).wait(1).to({x:368.15},0).wait(1).to({x:356.75},0).wait(1).to({x:345.3},0).wait(1).to({x:333.9},0).wait(1).to({x:322.45},0).wait(1).to({x:311.05},0).wait(1).to({x:299.6},0).wait(1).to({x:288.2},0).wait(1).to({x:276.8},0).wait(1).to({x:265.35},0).wait(1).to({x:253.95},0).wait(1).to({x:242.5},0).wait(1).to({x:231.1},0).wait(1).to({x:219.65},0).wait(1).to({x:208.25},0).wait(1).to({x:196.8},0).wait(1).to({x:185.4},0).wait(1).to({x:173.95},0).wait(1).to({x:162.55},0).wait(1).to({x:151.1},0).wait(1).to({x:139.7},0).wait(1).to({x:128.25},0).wait(1).to({x:116.85},0).wait(1).to({x:105.4},0).wait(1).to({x:94},0).wait(1).to({x:82.6},0).wait(1).to({x:71.15},0).wait(1).to({x:59.75},0).wait(1).to({x:48.3},0).wait(1).to({x:36.95},0).wait(1).to({x:25.5},0).wait(1).to({x:14.1},0).wait(1).to({x:2.65},0).wait(1).to({x:-8.75},0).wait(1).to({x:-20.2},0).wait(1).to({x:-31.6},0).wait(1).to({x:-43.05},0).wait(1).to({x:-54.45},0).wait(1).to({x:-65.9},0).wait(1).to({x:-77.3},0).wait(1).to({x:-88.75},0).to({_off:true},1).wait(145));

	// копье
	this.instance_11 = new lib.копье("synched",0);
	this.instance_11.setTransform(588.7,390.1,1,1,0,0,0,0,-148.3);
	this.instance_11._off = true;

	this.instance_12 = new lib.Символ4();
	this.instance_12.setTransform(471,401.8,1,1,0,0,0,44,125.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({_off:false},0).wait(1).to({regY:-470,x:569,y:66.15,startPosition:1},0).wait(1).to({x:549.35,y:63.95,startPosition:2},0).wait(1).to({x:529.7,y:61.75,startPosition:3},0).wait(1).to({x:510.05,y:59.5,startPosition:4},0).wait(1).to({x:490.4,y:57.3,startPosition:5},0).wait(1).to({x:470.75,y:55.1,startPosition:6},0).to({_off:true},1).wait(214));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(26).to({_off:false},0).wait(1).to({x:459.55},0).wait(1).to({x:448.15},0).wait(1).to({x:436.7},0).wait(1).to({x:425.3},0).wait(1).to({x:413.85},0).wait(1).to({x:402.45},0).wait(1).to({x:391},0).wait(1).to({x:379.6},0).wait(1).to({x:368.15},0).wait(1).to({x:356.75},0).wait(1).to({x:345.3},0).wait(1).to({x:333.9},0).wait(1).to({x:322.45},0).wait(1).to({x:311.05},0).wait(1).to({x:299.6},0).wait(1).to({x:288.2},0).wait(1).to({x:276.8},0).wait(1).to({x:265.35},0).wait(1).to({x:253.95},0).wait(1).to({x:242.5},0).wait(1).to({x:231.1},0).wait(1).to({x:219.65},0).wait(1).to({x:208.25},0).wait(1).to({x:196.8},0).wait(1).to({x:185.4},0).wait(1).to({x:173.95},0).wait(1).to({x:162.55},0).wait(1).to({x:151.1},0).wait(1).to({x:139.7},0).wait(1).to({x:128.25},0).wait(1).to({x:116.85},0).wait(1).to({x:105.4},0).wait(1).to({x:94},0).wait(1).to({x:82.6},0).wait(1).to({x:71.15},0).wait(1).to({x:59.75},0).wait(1).to({x:48.3},0).wait(1).to({x:36.95},0).wait(1).to({x:25.5},0).wait(1).to({x:14.1},0).wait(1).to({x:2.65},0).wait(1).to({x:-8.75},0).wait(1).to({x:-20.2},0).wait(1).to({x:-31.6},0).wait(1).to({x:-43.05},0).wait(1).to({x:-54.45},0).wait(1).to({x:-65.9},0).wait(1).to({x:-77.3},0).wait(1).to({x:-88.75},0).to({_off:true},1).wait(164));

	// фриск
	this.instance_13 = new lib.фриск("synched",11);
	this.instance_13.setTransform(640,467.95,1,1,0,0,0,0,-62.1);

	this.instance_14 = new lib.фриск1фреймходьбы();
	this.instance_14.setTransform(924,406,0.5169,0.5169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_13}]},120).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(120).to({startPosition:3},0).wait(1).to({regY:-62,x:652.75,y:468.05,startPosition:4},0).wait(1).to({x:665.5,startPosition:5},0).wait(1).to({x:678.25,startPosition:6},0).wait(1).to({x:691.05,startPosition:7},0).wait(1).to({x:703.8,startPosition:8},0).wait(1).to({x:716.55,startPosition:9},0).wait(1).to({x:729.35,startPosition:10},0).wait(1).to({x:742.1,startPosition:11},0).wait(1).to({x:754.85,startPosition:12},0).wait(1).to({x:767.65,startPosition:13},0).wait(1).to({x:780.4,startPosition:14},0).wait(1).to({x:793.15,startPosition:15},0).wait(1).to({x:805.95,startPosition:0},0).wait(1).to({x:818.7,startPosition:1},0).wait(1).to({x:831.45,startPosition:2},0).wait(1).to({x:844.25,startPosition:3},0).wait(1).to({x:857,startPosition:4},0).wait(1).to({x:869.75,startPosition:5},0).wait(1).to({x:882.55,startPosition:6},0).wait(1).to({x:895.3,startPosition:7},0).wait(1).to({x:908.05,startPosition:8},0).wait(1).to({x:920.85,startPosition:9},0).wait(1).to({x:933.6,startPosition:10},0).wait(1).to({x:946.35,startPosition:11},0).wait(1).to({x:959.15,startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).to({_off:true},1).wait(92));

	// сохранение
	this.instance_15 = new lib.сохранение("synched",0);
	this.instance_15.setTransform(1540.5,485.9,1,1,0,0,0,0,-36);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(75).to({_off:false},0).wait(1).to({regX:-0.1,regY:-36.1,x:1529.7,y:485.8,startPosition:1},0).wait(1).to({x:1519.05,startPosition:2},0).wait(1).to({x:1508.4,startPosition:3},0).wait(1).to({x:1497.75,startPosition:4},0).wait(1).to({x:1487.1,startPosition:5},0).wait(1).to({x:1476.45,startPosition:6},0).wait(1).to({x:1465.8,startPosition:7},0).wait(1).to({x:1455.1,startPosition:8},0).wait(1).to({x:1444.45,startPosition:9},0).wait(1).to({x:1433.8,startPosition:10},0).wait(1).to({x:1423.15,startPosition:11},0).wait(1).to({x:1412.5,startPosition:12},0).wait(1).to({x:1401.85,startPosition:13},0).wait(1).to({x:1391.2,startPosition:0},0).wait(1).to({x:1380.55,startPosition:1},0).wait(1).to({x:1369.85,startPosition:2},0).wait(1).to({x:1359.2,startPosition:3},0).wait(1).to({x:1348.55,startPosition:4},0).wait(1).to({x:1337.9,startPosition:5},0).wait(1).to({x:1327.25,startPosition:6},0).wait(1).to({x:1316.6,startPosition:7},0).wait(1).to({x:1305.95,startPosition:8},0).wait(1).to({x:1295.25,startPosition:9},0).wait(1).to({x:1284.6,startPosition:10},0).wait(1).to({x:1273.95,startPosition:11},0).wait(1).to({x:1263.3,startPosition:12},0).wait(1).to({x:1252.65,startPosition:13},0).wait(1).to({x:1242,startPosition:0},0).wait(1).to({x:1231.35,startPosition:1},0).wait(1).to({x:1220.7,startPosition:2},0).wait(1).to({x:1210,startPosition:3},0).wait(1).to({x:1199.35,startPosition:4},0).wait(1).to({x:1188.7,startPosition:5},0).wait(1).to({x:1178.05,startPosition:6},0).wait(1).to({x:1167.4,startPosition:7},0).wait(1).to({x:1156.75,startPosition:8},0).wait(1).to({x:1146.1,startPosition:9},0).wait(1).to({x:1135.4,startPosition:10},0).wait(1).to({x:1124.75,startPosition:11},0).wait(1).to({x:1114.1,startPosition:12},0).wait(1).to({x:1103.45,startPosition:13},0).wait(1).to({x:1092.8,startPosition:0},0).wait(1).to({x:1082.15,startPosition:1},0).wait(1).to({x:1071.5,startPosition:2},0).wait(1).to({x:1060.85,startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1));

	// тропа
	this.instance_16 = new lib.Символ1();
	this.instance_16.setTransform(1904.5,571.5,1,1,0,0,0,1904.5,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:1904.4,x:1893.7},0).wait(1).to({x:1882.95},0).wait(1).to({x:1872.25},0).wait(1).to({x:1861.5},0).wait(1).to({x:1850.8},0).wait(1).to({x:1840.05},0).wait(1).to({x:1829.35},0).wait(1).to({x:1818.6},0).wait(1).to({x:1807.9},0).wait(1).to({x:1797.15},0).wait(1).to({x:1786.45},0).wait(1).to({x:1775.7},0).wait(1).to({x:1765},0).wait(1).to({x:1754.25},0).wait(1).to({x:1743.55},0).wait(1).to({x:1732.8},0).wait(1).to({x:1722.1},0).wait(1).to({x:1711.35},0).wait(1).to({x:1700.65},0).wait(1).to({x:1689.9},0).wait(1).to({x:1679.2},0).wait(1).to({x:1668.45},0).wait(1).to({x:1657.75},0).wait(1).to({x:1647},0).wait(1).to({x:1636.3},0).wait(1).to({x:1625.55},0).wait(1).to({x:1614.85},0).wait(1).to({x:1604.1},0).wait(1).to({x:1593.4},0).wait(1).to({x:1582.65},0).wait(1).to({x:1571.9},0).wait(1).to({x:1561.2},0).wait(1).to({x:1550.45},0).wait(1).to({x:1539.75},0).wait(1).to({x:1529},0).wait(1).to({x:1518.3},0).wait(1).to({x:1507.55},0).wait(1).to({x:1496.85},0).wait(1).to({x:1486.1},0).wait(1).to({x:1475.4},0).wait(1).to({x:1464.65},0).wait(1).to({x:1453.95},0).wait(1).to({x:1443.2},0).wait(1).to({x:1432.5},0).wait(1).to({x:1421.75},0).wait(1).to({x:1411.05},0).wait(1).to({x:1400.3},0).wait(1).to({x:1389.6},0).wait(1).to({x:1378.85},0).wait(1).to({x:1368.15},0).wait(1).to({x:1357.4},0).wait(1).to({x:1346.7},0).wait(1).to({x:1335.95},0).wait(1).to({x:1325.25},0).wait(1).to({x:1314.5},0).wait(1).to({x:1303.8},0).wait(1).to({x:1293.05},0).wait(1).to({x:1282.35},0).wait(1).to({x:1271.6},0).wait(1).to({x:1260.85},0).wait(1).to({x:1250.15},0).wait(1).to({x:1239.4},0).wait(1).to({x:1228.7},0).wait(1).to({x:1217.95},0).wait(1).to({x:1207.25},0).wait(1).to({x:1196.5},0).wait(1).to({x:1185.8},0).wait(1).to({x:1175.05},0).wait(1).to({x:1164.35},0).wait(1).to({x:1153.6},0).wait(1).to({x:1142.9},0).wait(1).to({x:1132.15},0).wait(1).to({x:1121.45},0).wait(1).to({x:1110.7},0).wait(1).to({x:1100},0).wait(1).to({x:1089.25},0).wait(1).to({x:1078.55},0).wait(1).to({x:1067.8},0).wait(1).to({x:1057.1},0).wait(1).to({x:1046.35},0).wait(1).to({x:1035.65},0).wait(1).to({x:1024.9},0).wait(1).to({x:1014.2},0).wait(1).to({x:1003.45},0).wait(1).to({x:992.75},0).wait(1).to({x:982},0).wait(1).to({x:971.3},0).wait(1).to({x:960.55},0).wait(1).to({x:949.85},0).wait(1).to({x:939.1},0).wait(1).to({x:928.35},0).wait(1).to({x:917.65},0).wait(1).to({x:906.9},0).wait(1).to({x:896.2},0).wait(1).to({x:885.45},0).wait(1).to({x:874.75},0).wait(1).to({x:864},0).wait(1).to({x:853.3},0).wait(1).to({x:842.55},0).wait(1).to({x:831.85},0).wait(1).to({x:821.1},0).wait(1).to({x:810.4},0).wait(1).to({x:799.65},0).wait(1).to({x:788.95},0).wait(1).to({x:778.2},0).wait(1).to({x:767.5},0).wait(1).to({x:756.75},0).wait(1).to({x:746.05},0).wait(1).to({x:735.3},0).wait(1).to({x:724.6},0).wait(1).to({x:713.85},0).wait(1).to({x:703.15},0).wait(1).to({x:692.4},0).wait(1).to({x:681.7},0).wait(1).to({x:670.95},0).wait(1).to({x:660.25},0).wait(1).to({x:649.5},0).wait(1).to({x:638.8},0).wait(1).to({x:628.05},0).wait(1).to({x:617.3},0).wait(120));

	// ядро
	this.instance_17 = new lib.Символ2();
	this.instance_17.setTransform(837.35,209.2,1,1,0,0,0,305.1,209.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({x:834.7},0).wait(1).to({x:832.1},0).wait(1).to({x:829.5},0).wait(1).to({x:826.9},0).wait(1).to({x:824.3},0).wait(1).to({x:821.65},0).wait(1).to({x:819.05},0).wait(1).to({x:816.45},0).wait(1).to({x:813.85},0).wait(1).to({x:811.25},0).wait(1).to({x:808.65},0).wait(1).to({x:806},0).wait(1).to({x:803.4},0).wait(1).to({x:800.8},0).wait(1).to({x:798.2},0).wait(1).to({x:795.6},0).wait(1).to({x:793},0).wait(1).to({x:790.35},0).wait(1).to({x:787.75},0).wait(1).to({x:785.15},0).wait(1).to({x:782.55},0).wait(1).to({x:779.95},0).wait(1).to({x:777.3},0).wait(1).to({x:774.7},0).wait(1).to({x:772.1},0).wait(1).to({x:769.5},0).wait(1).to({x:766.9},0).wait(1).to({x:764.3},0).wait(1).to({x:761.65},0).wait(1).to({x:759.05},0).wait(1).to({x:756.45},0).wait(1).to({x:753.85},0).wait(1).to({x:751.25},0).wait(1).to({x:748.65},0).wait(1).to({x:746},0).wait(1).to({x:743.4},0).wait(1).to({x:740.8},0).wait(1).to({x:738.2},0).wait(1).to({x:735.6},0).wait(1).to({x:733},0).wait(1).to({x:730.35},0).wait(1).to({x:727.75},0).wait(1).to({x:725.15},0).wait(1).to({x:722.55},0).wait(1).to({x:719.95},0).wait(1).to({x:717.3},0).wait(1).to({x:714.7},0).wait(1).to({x:712.1},0).wait(1).to({x:709.5},0).wait(1).to({x:706.9},0).wait(1).to({x:704.3},0).wait(1).to({x:701.65},0).wait(1).to({x:699.05},0).wait(1).to({x:696.45},0).wait(1).to({x:693.85},0).wait(1).to({x:691.25},0).wait(1).to({x:688.65},0).wait(1).to({x:686},0).wait(1).to({x:683.4},0).wait(1).to({x:680.8},0).wait(1).to({x:678.2},0).wait(1).to({x:675.6},0).wait(1).to({x:672.95},0).wait(1).to({x:670.35},0).wait(1).to({x:667.75},0).wait(1).to({x:665.15},0).wait(1).to({x:662.55},0).wait(1).to({x:659.95},0).wait(1).to({x:657.3},0).wait(1).to({x:654.7},0).wait(1).to({x:652.1},0).wait(1).to({x:649.5},0).wait(1).to({x:646.9},0).wait(1).to({x:644.3},0).wait(1).to({x:641.65},0).wait(1).to({x:639.05},0).wait(1).to({x:636.45},0).wait(1).to({x:633.85},0).wait(1).to({x:631.25},0).wait(1).to({x:628.65},0).wait(1).to({x:626},0).wait(1).to({x:623.4},0).wait(1).to({x:620.8},0).wait(1).to({x:618.2},0).wait(1).to({x:615.6},0).wait(1).to({x:612.95},0).wait(1).to({x:610.35},0).wait(1).to({x:607.75},0).wait(1).to({x:605.15},0).wait(1).to({x:602.55},0).wait(1).to({x:599.95},0).wait(1).to({x:597.3},0).wait(1).to({x:594.7},0).wait(1).to({x:592.1},0).wait(1).to({x:589.5},0).wait(1).to({x:586.9},0).wait(1).to({x:584.3},0).wait(1).to({x:581.65},0).wait(1).to({x:579.05},0).wait(1).to({x:576.45},0).wait(1).to({x:573.85},0).wait(1).to({x:571.25},0).wait(1).to({x:568.6},0).wait(1).to({x:566},0).wait(1).to({x:563.4},0).wait(1).to({x:560.8},0).wait(1).to({x:558.2},0).wait(1).to({x:555.6},0).wait(1).to({x:552.95},0).wait(1).to({x:550.35},0).wait(1).to({x:547.75},0).wait(1).to({x:545.15},0).wait(1).to({x:542.55},0).wait(1).to({x:539.95},0).wait(1).to({x:537.3},0).wait(1).to({x:534.7},0).wait(1).to({x:532.1},0).wait(1).to({x:529.5},0).wait(1).to({x:526.9},0).wait(1).to({x:524.3},0).wait(120));

	// черный
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Ehj6g4KMDH1AAAMAAABwVMjH1AAAg");
	this.shape_4.setTransform(639.925,359.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("Ehj6A4LMAAAhwVMDH1AAAMAAABwVg");
	this.shape_5.setTransform(639.925,359.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(240));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-647.1,-44.1,4456,764.6);
// library properties:
lib.properties = {
	id: '45A2557C92D4BE4495E2A5C665A301C2',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/тропаандертейл_.png", id:"тропаандертейл"},
		{src:"images/8.1 задание_atlas_1.png", id:"8.1 задание_atlas_1"},
		{src:"images/8.1 задание_atlas_2.png", id:"8.1 задание_atlas_2"}
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
an.compositions['45A2557C92D4BE4495E2A5C665A301C2'] = {
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