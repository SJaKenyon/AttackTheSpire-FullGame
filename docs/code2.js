gdjs.InstructionsCode = {};
gdjs.InstructionsCode.GDcastleObjects1= [];
gdjs.InstructionsCode.GDcastleObjects2= [];
gdjs.InstructionsCode.GDtipsObjects1= [];
gdjs.InstructionsCode.GDtipsObjects2= [];
gdjs.InstructionsCode.GDPlayerObjects1= [];
gdjs.InstructionsCode.GDPlayerObjects2= [];
gdjs.InstructionsCode.GDBlackMaskObjects1= [];
gdjs.InstructionsCode.GDBlackMaskObjects2= [];
gdjs.InstructionsCode.GDbackObjects1= [];
gdjs.InstructionsCode.GDbackObjects2= [];
gdjs.InstructionsCode.GDplayercontrols2Objects1= [];
gdjs.InstructionsCode.GDplayercontrols2Objects2= [];
gdjs.InstructionsCode.GDplayertips2Objects1= [];
gdjs.InstructionsCode.GDplayertips2Objects2= [];
gdjs.InstructionsCode.GDplayertipsObjects1= [];
gdjs.InstructionsCode.GDplayertipsObjects2= [];

gdjs.InstructionsCode.conditionTrue_0 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_0 = {val:false};
gdjs.InstructionsCode.conditionTrue_1 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_1 = {val:false};


gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.InstructionsCode.GDbackObjects1});gdjs.InstructionsCode.eventsList0 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SplashScreen", false);
}}

}


};gdjs.InstructionsCode.eventsList1 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition1IsTrue_0;
gdjs.InstructionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10952820);
}
}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 0);
}}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition1IsTrue_0;
gdjs.InstructionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10953436);
}
}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/SoundEffects/background/POL-chamber-of-secrets-short.wav", 1, true, 70, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.InstructionsCode.GDbackObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDbackObjects1Objects, runtimeScene, true, false);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InstructionsCode.GDbackObjects1 */
{for(var i = 0, len = gdjs.InstructionsCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDbackObjects1[i].setColor("133;3;19");
}
}
{ //Subevents
gdjs.InstructionsCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionsCode.GDcastleObjects1.length = 0;
gdjs.InstructionsCode.GDcastleObjects2.length = 0;
gdjs.InstructionsCode.GDtipsObjects1.length = 0;
gdjs.InstructionsCode.GDtipsObjects2.length = 0;
gdjs.InstructionsCode.GDPlayerObjects1.length = 0;
gdjs.InstructionsCode.GDPlayerObjects2.length = 0;
gdjs.InstructionsCode.GDBlackMaskObjects1.length = 0;
gdjs.InstructionsCode.GDBlackMaskObjects2.length = 0;
gdjs.InstructionsCode.GDbackObjects1.length = 0;
gdjs.InstructionsCode.GDbackObjects2.length = 0;
gdjs.InstructionsCode.GDplayercontrols2Objects1.length = 0;
gdjs.InstructionsCode.GDplayercontrols2Objects2.length = 0;
gdjs.InstructionsCode.GDplayertips2Objects1.length = 0;
gdjs.InstructionsCode.GDplayertips2Objects2.length = 0;
gdjs.InstructionsCode.GDplayertipsObjects1.length = 0;
gdjs.InstructionsCode.GDplayertipsObjects2.length = 0;

gdjs.InstructionsCode.eventsList1(runtimeScene);
return;

}

gdjs['InstructionsCode'] = gdjs.InstructionsCode;
