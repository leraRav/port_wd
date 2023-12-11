(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"8.2 задание без кнопки_atlas_1", frames: [[1736,0,254,205],[0,278,983,110],[985,278,983,110],[0,390,243,155],[490,390,231,155],[1422,390,218,155],[723,390,231,155],[0,0,1734,137],[245,390,243,155],[956,390,231,155],[1642,390,218,155],[1189,390,231,155],[0,139,1734,137],[1970,207,46,86],[1862,478,84,86],[1948,478,84,86],[200,547,84,86],[1862,390,122,86],[0,547,198,86]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_40 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["8.2 задание без кнопки_atlas_1"]);
	this.gotoAndStop(18);
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
	this.instance = new lib.CachedBmp_40();
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-1.5,-1.5,127,102.5), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,0,3).p("AhxgHIA2DFADAAtQhaBFhvA2QgaALgYALAA3hcQg7AjhPAlQgQAGgOAHQhEAOgLACQgyAKg0AEQAAAaAGBRQAGBJAEAkQAYABAdgFQARgCAegHQA8gNA7gXADAAtQA1giAkg3QAjg4gziIIi/AYQAUA3gGAZQgGAYgbAQg");
	this.shape.setTransform(28.2475,76.9411);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.1,1,0,3,true).p("Ag8EBQhLgJgdg5QgUg+gRgOQgLgJgHgLQgGgMgDgFQgJgMgmAHQgWAFgMgeQgLgbALgaQAMgeAhACQAqACBkBJQg+hxAQhfQAThqBCAJQA3AHAGBgQACAtABAQQACAbAJgDQAIgEALgiQAWg/ACgFQAihXA5AnQA2AmgiA5QgSAbgDAhQgEAgALgDQAKgDATgRQATgRAjgNQBCgUAYBAQAbBFgrAZQghATgngJQgKgDAFAYQALA6ABAAQAMBbhIAQQhdAVguADQgvAFgmgLg");
	this.shape_1.setTransform(40.4613,26.4553);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("AkWDuQgEgkgGhJQgGhRAAgaQA0gEAygKIBPgQIA2DFQg7AXg8ANIgvAJQgYAEgUAAIgJAAgAA3hdQAbgQAGgYQAGgZgUg3IC/gYQAzCIgjA4QgkA3g1Aig");
	this.shape_2.setTransform(28.2475,77.0091);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiYg3IAegOQBPgkA7gkICJCLQhaBDhuA2IgzAXg");
	this.shape_3.setTransform(32.1,81.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8EBQhLgJgdg5QgUg+gRgOQgLgJgHgLQgGgMgDgFQgJgMgmAHQgWAFgMgeQgLgbALgaQAMgeAhACQAqACBkBJQg+hxAQhfQAThqBCAJQA3AHAGBgIADA9QACAbAJgDQAIgEALgiIAYhEQAihXA5AnQA2AmgiA5QgSAbgDAhQgEAgALgDQAKgDATgRQATgRAjgNQBCgUAYBAQAbBFgrAZQghATgngJQgKgDAFAYIAMA6QAMBbhIAQQhdAVguADIgaACQggAAgbgIg");
	this.shape_4.setTransform(40.4613,26.4553);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-2.7,-1,75.7,103.3), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,0,3).p("AiSgYIA0DVACfBqQhaAthwAbQgaAGgZAFAiSgYQhQgDgNgBQhMgEglgJQAAAiAIBdQAJBgAFALQA/AHAwAAQBBAAA8gLAAwhVQhGAmhaARQgRADgRADACfBqQApgVAkgYQA9gqA0hsIiuhpQgXAlgvAkQgbAUgeAQg");
	this.shape.setTransform(33.1171,66.473);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.1,1,0,3,true).p("AjOCbQg1g1AMg/QAWg8gFgWQgDgNACgNQADgNAAgGQAAgQgigRQgUgKAIgeQAJgdAYgOQAcgQAaAWQAfAbAiB3QAViABHhAQBQhIAuAvQAnAng2BQQgbAlgJANQgPAWAKADQAJADAegUQA4glAEgCQBRgwAUBCQAUA/g+AZQgeAKgXAWQgXAYAKAEQAKAEAagCQAZgCAjALQBBAZgVBCQgWBHgygGQglgFgZggQgGgIgLAWQgaA1AAAAQguBPhCggQhWgogngaQgogagYggg");
	this.shape_1.setTransform(71.1726,28.8518);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("AlIC+QgEgKgKhhQgIhdAAgiQAlAJBNAFIBcADIA1DWQg9ALhAgBQgxABg/gIgAAyhYQAegQAbgUQAwgkAWglICuBpQg0Bsg8AqQglAZgpAUg");
	this.shape_2.setTransform(32.9,66.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiYhMIAjgGQBZgRBGgmIBvC/QhaAthwAcIgyALg");
	this.shape_3.setTransform(33.7,71.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.996)").s().p("AgREXQhWgogngaQgogagYggQg1g1AMg/QAWg8gFgWQgDgNACgNQADgNAAgGQAAgQgigRQgUgKAIgeQAJgdAYgOQAcgQAaAWQAfAbAiB3QAViABHhAQBQhIAuAvQAnAng2BQIgkAyQgPAWAKADQAJADAegUIA8gnQBRgwAUBCQAUA/g+AZQgeAKgXAWQgXAYAKAEQAKAEAagCQAZgCAjALQBBAZgVBCQgWBHgygGQglgFgZggQgGgIgLAWIgaA1QghA4gsABQgRAAgSgKg");
	this.shape_4.setTransform(71.1726,28.8518);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-3.7,-1,103.60000000000001,89), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,2,0,3).p("AFvjQIAAiPIDEAAIAACPgACCjQIAAiPIDtAAACCFgIAAioIAAjFIjtAAIj1AAIAAjDIAAiPID1AAIDtAAAIzgNIjEAAIAAjDIjtAAIjtAAIj1AAIjSAAIAAiPIDSAAAFvC4IAAjFIjtAAIAAjDAIzC4IjEAAIjtAAIjtAAIj1AAIAAjFIjSAAIAAjDAIzgNIAADFIAACoIjEAAIAAioAIzjQIAADDAFvFgIjtAAIjtAAIj1AAIjSAAIAAioIAAjFAhrjQIAAiPAhrC4IAAjFIAAjDAhrFgIAAioAlgFgIAAioIjSAA");
	this.shape.setTransform(87.25,60.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,2,0,3).p("Atu2YIbdAAIAAWzIibAAIAAJXI22AAIAAo/IiMAAgAkuj1IB4AAIAACUIh4AAgAh1j1IB4AAIAACUIh4AAgAliFsQAAAJhqgsIgeBGQBwAkgJAJQghAhgvAAQgvAAghghQghghAAgvQAAgvAhghQAhghAvAAQAvAAAhAhQAhAhAAAvgAgvFsQAAAvggAhQghAhgvAAQgwAAggghQghghAAgvQAAgOA3AdQAbAOAbARIA4g0QgVgbgRgbQgig1AUAAQAvAAAhAhQAgAhAAAvgADxj1IB5AAIAACUIh5AAgAA8j1IB5AAIAACUIh5AAgAArFsQAAAvAhAhQAhAhAvAAQAvAAAhghQAhghAAgvQAAgOg3AdQgbAOgbARIg4g0QAVgbARgbQAig1gUAAQgvAAghAhQghAhAAAvgAFcFsQAAAJBrgsIAeBGQhwAkAIAJQAhAhAvAAQAvAAAhghQAhghAAgvQAAgvghghQghghgvAAQgvAAghAhQghAhAAAvgAg6LzIB4AAIAAELIh4AAgABITnQAAAggXAXQgXAXggAAQggAAgYgXQgWgXAAggQAAghAWgXQAYgXAgAAQAgAAAXAXQAXAXAAAhgACwTnQAABKg1A0Qg0A0hJAAQhKAAg0g0Qg0g0AAhKQAAhKA0g1QA0g0BKAAQBJAAA0A0QA1A1AABKg");
	this.shape_1.setTransform(87.85,143.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("ArhQGIAAo/IiNAAIAA3MIbcAAIAAWzIiaAAIAAJYgAHkMjQhvAkAIAJQAhAgAvAAQAvAAAhggQAhgiAAguQAAgwghggQghgigvAAQgvAAghAiQghAgAAAwQAAAJBqgsgABMKwQghAgAAAwQAAAuAhAiQAhAgAvAAQAvAAAhggQAhgiAAguQAAgOg3AcQgbAPgcARIg3g1QAVgaARgbQAhg1gTgBQgvAAghAigAkRMAQAAAuAiAiQAgAgAwAAQAuAAAiggQAggiAAguQAAgwggggQgigiguAAQgUABAhA1QASAbAVAaIg4A1QgcgRgbgPQglgTgMAAQgGAAAAAFgAojKwQghAgAAAwQAAAuAhAiQAhAgAvAAQAvAAAhggQAJgJhwgkIAdhGQBrAsAAgJQAAgwghggQghgigvAAQgvAAghAigADxExIB5AAIAAiTIh5AAgAA7ExIB6AAIAAiTIh6AAgAh1ExIB4AAIAAiTIh4AAgAkuExIB4AAIAAiTIh4AAgAo4p8IAADCIAADGIAACpIDTAAID0AAIDsAAIDuAAIDEAAIAAipIAAjGIAAjCIAAiPIjEAAIjuAAIjsAAIj0AAIjTAAg");
	this.shape_2.setTransform(87.85,102.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.996)").s().p("Ag6TTQgXgWAAghQAAghAXgWQAXgYAgAAQAgAAAXAYQAXAWAAAhQAAAhgXAWQgXAYggAAQggAAgXgYgAg3OzIAAkLIB4AAIAAELgAGAFxQgIgJBwgkIgehGQhrAsABgJQAAgvAgghQAighAuAAQAwAAAgAhQAiAhAAAvQAAAvgiAhQggAhgwAAQguAAgighgABQFxQgighABgvQgBgvAighQAhghAuAAQAUAAghA2QgSAbgUAaIA3A0QAbgRAcgOQA3gcAAANQAAAvgiAhQggAhgwAAQguAAghghgAjsFxQghghAAgvQAAgNA3AcQAbAOAcARIA3g0QgVgagRgbQgig2AUAAQAvAAAhAhQAhAhAAAvQAAAvghAhQghAhgvAAQgvAAghghgAogFxQggghAAgvQAAgvAgghQAighAuAAQAwAAAgAhQAhAhABAvQAAAJhrgsIgeBGQBwAkgJAJQggAhgwAAQguAAgighgAD1isIAAiUIB4AAIAACUgAA/isIAAiUIB5AAIAACUgAhyisIAAiUIB4AAIAACUgAkrisIAAiUIB5AAIAACUgAFsoqIAAioIAAjGIAAjDIjtAAIAAiPIDtAAIAACPIAAiPIDFAAIAACPIjFAAIDFAAIAADDIjFAAIDFAAIAADGIjFAAIDFAAIAACogAB/oqIAAioIDtAAIAACogAhuoqIAAioIDtAAIAACogAlioqIAAioIjSAAIAAjGIAAjDIDSAAIjSAAIAAiPIDSAAID0AAIAACPIAAiPIDtAAIAACPIjtAAIDtAAIAADDIDtAAIAADGIjtAAIAAjGIjtAAIAAjDIj0AAIAAiPIAACPIAADDIjSAAIDSAAIAADGIAAjGID0AAIDtAAIAADGIjtAAIAAjGIAADGIj0AAID0AAIAACogAo0oqIAAioIDSAAIAACogAB/rSgAhurSgAo0rSgAB/uYIAAjDIDtAAIAADDgAB/uYgAhuuYIj0AAIAAjDID0AAIAADDgAB/xbgAB/xbgAFszqg");
	this.shape_3.setTransform(87.5,150.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-1.5,-1.5,178.7,289.7), null);


(lib.рукамашет = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1___копия
	this.instance = new lib.Символ2();
	this.instance.setTransform(-0.95,-42.5,1,1,0,0,0,48.5,44);

	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(-14.45,-45.5,1,1,0,0,0,35,51.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:47.6,x:-1.85},0).wait(2).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({regX:34.7,x:-14.75},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.1,-97.6,103.6,103.3);


(lib.меттатонтело = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(0.05,-143.35,1,1,0,0,0,87.9,143.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:87.8,rotation:-1.4076,x:-0.05,y:-143.3},0).wait(1).to({rotation:-2.8153,x:0},0).wait(1).to({rotation:-4.2229,x:-0.05},0).wait(1).to({rotation:-2.8153,x:0},0).wait(1).to({rotation:-1.4076,x:-0.05},0).wait(1).to({rotation:0,y:-143.35},0).wait(1).to({rotation:1.4076},0).wait(1).to({rotation:2.8153,y:-143.3},0).wait(1).to({rotation:4.2229,y:-143.35},0).wait(1).to({rotation:2.8153,y:-143.3},0).wait(1).to({rotation:1.4076,y:-143.35},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.7,-294.8,199.5,297.1);


(lib.руки = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.instance = new lib.Символ4();
	this.instance.setTransform(-81.85,-49.55,1,1,0,0,0,62,49.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-50.75},0).wait(1).to({y:-51.95},0).wait(1).to({y:-53.2},0).wait(1).to({y:-54.4},0).wait(1).to({y:-55.65},0).wait(1).to({y:-56.85},0).wait(1).to({y:-58.05},0).wait(1).to({y:-59.3},0).wait(1).to({y:-60.5},0).wait(1).to({y:-61.75},0).wait(1).to({y:-60.6},0).wait(1).to({y:-59.5},0).wait(1).to({y:-58.4},0).wait(1).to({y:-57.3},0).wait(1).to({y:-56.2},0).wait(1).to({y:-55.05},0).wait(1).to({y:-53.95},0).wait(1).to({y:-52.85},0).wait(1).to({y:-51.75},0).wait(1).to({y:-50.65},0).wait(1).to({y:-49.55},0).wait(1).to({y:-50.65},0).wait(1).to({y:-51.75},0).wait(1).to({y:-52.85},0).wait(1).to({y:-53.95},0).wait(1).to({y:-55.05},0).wait(1).to({y:-56.2},0).wait(1).to({y:-57.3},0).wait(1).to({y:-58.4},0).wait(1).to({y:-59.5},0).wait(1).to({y:-60.6},0).wait(1).to({y:-61.75},0).wait(1).to({y:-60.5},0).wait(1).to({y:-59.3},0).wait(1).to({y:-58.05},0).wait(1).to({y:-56.85},0).wait(1).to({y:-55.65},0).wait(1).to({y:-54.4},0).wait(1).to({y:-53.2},0).wait(1).to({y:-51.95},0).wait(1).to({y:-50.75},0).wait(1).to({y:-49.55},0).wait(1));

	// Слой_1
	this.instance_1 = new lib.рукамашет("synched",0);
	this.instance_1.setTransform(120.35,-113.4,1,1,0,0,0,-1,-42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-1.8,regY:-45.5,x:119.55,y:-117.5,startPosition:1},0).wait(1).to({y:-118.7,startPosition:2},0).wait(1).to({y:-119.95,startPosition:3},0).wait(1).to({y:-121.15,startPosition:4},0).wait(1).to({y:-122.4,startPosition:5},0).wait(1).to({y:-123.6,startPosition:6},0).wait(1).to({y:-124.8,startPosition:7},0).wait(1).to({y:-126.05,startPosition:0},0).wait(1).to({y:-127.25,startPosition:1},0).wait(1).to({y:-128.5,startPosition:2},0).wait(1).to({y:-127.35,startPosition:3},0).wait(1).to({y:-126.25,startPosition:4},0).wait(1).to({y:-125.15,startPosition:5},0).wait(1).to({y:-124.05,startPosition:6},0).wait(1).to({y:-122.95,startPosition:7},0).wait(1).to({y:-121.8,startPosition:0},0).wait(1).to({y:-120.7,startPosition:1},0).wait(1).to({y:-119.6,startPosition:2},0).wait(1).to({y:-118.5,startPosition:3},0).wait(1).to({y:-117.4,startPosition:4},0).wait(1).to({y:-116.3,startPosition:5},0).wait(1).to({y:-117.4,startPosition:6},0).wait(1).to({y:-118.5,startPosition:7},0).wait(1).to({y:-119.6,startPosition:0},0).wait(1).to({y:-120.7,startPosition:1},0).wait(1).to({y:-121.8,startPosition:2},0).wait(1).to({y:-122.95,startPosition:3},0).wait(1).to({y:-124.05,startPosition:4},0).wait(1).to({y:-125.15,startPosition:5},0).wait(1).to({y:-126.25,startPosition:6},0).wait(1).to({y:-127.35,startPosition:7},0).wait(1).to({y:-128.5,startPosition:0},0).wait(1).to({y:-127.25,startPosition:1},0).wait(1).to({y:-126.05,startPosition:2},0).wait(1).to({y:-124.8,startPosition:3},0).wait(1).to({y:-123.6,startPosition:4},0).wait(1).to({y:-122.4,startPosition:5},0).wait(1).to({y:-121.15,startPosition:6},0).wait(1).to({y:-119.95,startPosition:7},0).wait(1).to({y:-118.7,startPosition:0},0).wait(1).to({y:-117.5,startPosition:1},0).wait(1).to({y:-116.3,startPosition:2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.3,-179.4,317.1,181.1);


// stage content:
(lib._82заданиебезкнопки = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.streamSoundSymbolsList[0] = [{id:"TobyRadiationFoxUndertaleOSTMetalCrusherMettatonsBattleThemewwwlightaudioru",startFrame:0,endFrame:265,loop:1,offset:0},{id:"звукпечатитекстаm4aonlineaudioconvertcom",startFrame:0,endFrame:28,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("звукпечатитекстаm4aonlineaudioconvertcom",0);
		this.InsertIntoSoundStreamData(soundInstance,0,28,1);
		var soundInstance = playSound("TobyRadiationFoxUndertaleOSTMetalCrusherMettatonsBattleThemewwwlightaudioru",0);
		this.InsertIntoSoundStreamData(soundInstance,0,265,1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(265));

	// обе_руки
	this.instance = new lib.руки("synched",0);
	this.instance.setTransform(623.1,205.35,1,1,0,0,0,12.5,-77.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(265));

	// метатон
	this.instance_1 = new lib.меттатонтело("synched",0);
	this.instance_1.setTransform(594.65,215.7,1,1,0,0,0,0,-143.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(265));

	// красное_здоровье___копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F9EA2F").ss(1,2,0,3).p("AmViTIMsAAIAAEnIssAAg");
	this.shape.setTransform(618.8,602.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9EA2F").s().p("AmVCUIAAknIMrAAIAAEng");
	this.shape_1.setTransform(618.8,602.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(265));

	// красное_здоровье
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F51A06").ss(1,2,0,3).p("AmViTIMsAAIAAEnIssAAg");
	this.shape_2.setTransform(618.8,602.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(236,30,1,0.996)").s().p("AmVCUIAAknIMrAAIAAEng");
	this.shape_3.setTransform(618.8,602.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(265));

	// худ
	this.instance_2 = new lib.CachedBmp_27();
	this.instance_2.setTransform(733.7,580.3,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_26();
	this.instance_3.setTransform(773.25,580.3,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_25();
	this.instance_4.setTransform(676.35,580.3,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_24();
	this.instance_5.setTransform(527.1,580.3,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_23();
	this.instance_6.setTransform(387.7,580.3,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_22();
	this.instance_7.setTransform(207.8,578.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(265));

	// кнопки
	this.instance_8 = new lib.CachedBmp_32();
	this.instance_8.setTransform(478.95,623.65,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_31();
	this.instance_9.setTransform(946.8,623.65,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_30();
	this.instance_10.setTransform(720.55,623.65,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_29();
	this.instance_11.setTransform(244.9,623.65,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_28();
	this.instance_12.setTransform(208.05,629.6,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_37();
	this.instance_13.setTransform(478.95,623.65,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_36();
	this.instance_14.setTransform(946.8,623.65,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_35();
	this.instance_15.setTransform(720.55,623.65,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_34();
	this.instance_16.setTransform(244.9,623.65,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_33();
	this.instance_17.setTransform(208.05,629.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]},44).wait(221));

	// Слой_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_18 = new cjs.Graphics().p("AgyEmIAApLIBlAAIAAJLg");
	var mask_graphics_19 = new cjs.Graphics().p("Ak6EmIAApLIJ2AAIAAJLg");
	var mask_graphics_20 = new cjs.Graphics().p("ApDEmIAApLISHAAIAAJLg");
	var mask_graphics_21 = new cjs.Graphics().p("AtLEmIAApLIaXAAIAAJLg");
	var mask_graphics_22 = new cjs.Graphics().p("AxTEmIAApLMAinAAAIAAJLg");
	var mask_graphics_23 = new cjs.Graphics().p("A1cEmIAApLMAq4AAAIAAJLg");
	var mask_graphics_24 = new cjs.Graphics().p("A5kEmIAApLMAzJAAAIAAJLg");
	var mask_graphics_25 = new cjs.Graphics().p("A9sEmIAApLMA7ZAAAIAAJLg");
	var mask_graphics_26 = new cjs.Graphics().p("Egh0AEmIAApLMBDpAAAIAAJLg");
	var mask_graphics_27 = new cjs.Graphics().p("Egl9AEmIAApLMBL6AAAIAAJLg");
	var mask_graphics_28 = new cjs.Graphics().p("EgqFAEmIAApLMBULAAAIAAJLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:233.175,y:440.525}).wait(1).to({graphics:mask_graphics_19,x:259.75,y:440.525}).wait(1).to({graphics:mask_graphics_20,x:286.325,y:440.525}).wait(1).to({graphics:mask_graphics_21,x:312.9,y:440.525}).wait(1).to({graphics:mask_graphics_22,x:339.475,y:440.525}).wait(1).to({graphics:mask_graphics_23,x:366.05,y:440.525}).wait(1).to({graphics:mask_graphics_24,x:392.575,y:440.525}).wait(1).to({graphics:mask_graphics_25,x:419.15,y:440.525}).wait(1).to({graphics:mask_graphics_26,x:445.725,y:440.525}).wait(1).to({graphics:mask_graphics_27,x:472.3,y:440.525}).wait(1).to({graphics:mask_graphics_28,x:498.875,y:440.525}).wait(1).to({graphics:null,x:0,y:0}).wait(236));

	// МЕТТАТОН_АТАКУЕТ
	this.instance_18 = new lib.CachedBmp_38();
	this.instance_18.setTransform(242.6,407.1,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_39();
	this.instance_19.setTransform(242.6,407.1,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_18,this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},18).to({state:[{t:this.instance_19}]},26).wait(221));

	// окошко
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(8,2,0,3).p("EhCwgOiMCFhAAAIAAdFMiFhAAAg");
	this.shape_4.setTransform(640.875,472.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EhCwAOjIAA9FMCFhAAAIAAdFg");
	this.shape_5.setTransform(640.875,472.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},44).wait(221));

	// зеленое
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5B7464").ss(2,1,1).p("EAwDgbsIXaAAIAAbrIAAbuI3aAAIAA7ugAXrgBIAA7rIYYAAAXrgBIYYAAIXaAAAXrbtIAA7uEAwDAbtI4YAAI4NAAI3RAAIAA7uIXRAAIAA7rIYNAAA3zgBIAA7rIXRAAEgvtgABIAA7rIX6AAEgvtgABIX6AAEgvtAbtIAA7uAgibtIAA7uIYNAAA3zbtI36AAI3vAAIAA7uIXvAAEhHcgABIAA7rIXvAA");
	this.shape_6.setTransform(639.6,189.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(265));

	// черный_фон
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("EhSNA4gIx2AAMAAAhw/MDIHAAAMAAABw/I2dAAg");
	this.shape_7.setTransform(640.4,359.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.996)").s().p("EBNnA4gIAAwVMif0AAAIAAQVIx1AAMAAAhw/MDIGAAAMAAABw/gEBNnA4gMif0AAAIAAwVMCf0AAAIAAQVg");
	this.shape_8.setTransform(640.4,359.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(265));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(639.1,357.1,642.6999999999999,365.19999999999993);
// library properties:
lib.properties = {
	id: '8067755DB2FE534EB2B5159B3B8143FD',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/8.2 задание без кнопки_atlas_1.png", id:"8.2 задание без кнопки_atlas_1"},
		{src:"sounds/звукпечатитекстаm4aonlineaudioconvertcom.mp3", id:"звукпечатитекстаm4aonlineaudioconvertcom"},
		{src:"sounds/TobyRadiationFoxUndertaleOSTMetalCrusherMettatonsBattleThemewwwlightaudioru.mp3", id:"TobyRadiationFoxUndertaleOSTMetalCrusherMettatonsBattleThemewwwlightaudioru"}
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
an.compositions['8067755DB2FE534EB2B5159B3B8143FD'] = {
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