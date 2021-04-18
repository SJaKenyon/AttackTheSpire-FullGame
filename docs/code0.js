gdjs.SplashScreenCode = {};
gdjs.SplashScreenCode.GDcastleObjects1= [];
gdjs.SplashScreenCode.GDcastleObjects2= [];
gdjs.SplashScreenCode.GDtitle2Objects1= [];
gdjs.SplashScreenCode.GDtitle2Objects2= [];
gdjs.SplashScreenCode.GDtitleObjects1= [];
gdjs.SplashScreenCode.GDtitleObjects2= [];
gdjs.SplashScreenCode.GDplayObjects1= [];
gdjs.SplashScreenCode.GDplayObjects2= [];
gdjs.SplashScreenCode.GDsettingsObjects1= [];
gdjs.SplashScreenCode.GDsettingsObjects2= [];
gdjs.SplashScreenCode.GDinfoObjects1= [];
gdjs.SplashScreenCode.GDinfoObjects2= [];
gdjs.SplashScreenCode.GDhorseObjects1= [];
gdjs.SplashScreenCode.GDhorseObjects2= [];

gdjs.SplashScreenCode.conditionTrue_0 = {val:false};
gdjs.SplashScreenCode.condition0IsTrue_0 = {val:false};
gdjs.SplashScreenCode.condition1IsTrue_0 = {val:false};
gdjs.SplashScreenCode.condition2IsTrue_0 = {val:false};
gdjs.SplashScreenCode.conditionTrue_1 = {val:false};
gdjs.SplashScreenCode.condition0IsTrue_1 = {val:false};
gdjs.SplashScreenCode.condition1IsTrue_1 = {val:false};
gdjs.SplashScreenCode.condition2IsTrue_1 = {val:false};


gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.SplashScreenCode.GDplayObjects1});gdjs.SplashScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.SplashScreenCode.GDplayObjects1});gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDinfoObjects1Objects = Hashtable.newFrom({"info": gdjs.SplashScreenCode.GDinfoObjects1});gdjs.SplashScreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}}

}


};gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDinfoObjects1Objects = Hashtable.newFrom({"info": gdjs.SplashScreenCode.GDinfoObjects1});gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDsettingsObjects1Objects = Hashtable.newFrom({"settings": gdjs.SplashScreenCode.GDsettingsObjects1});gdjs.SplashScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


};gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDsettingsObjects1Objects = Hashtable.newFrom({"settings": gdjs.SplashScreenCode.GDsettingsObjects1});gdjs.SplashScreenCode.eventsList3 = function(runtimeScene) {

{


gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
gdjs.SplashScreenCode.condition1IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.SplashScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.SplashScreenCode.conditionTrue_1 = gdjs.SplashScreenCode.condition1IsTrue_0;
gdjs.SplashScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10713300);
}
}}
if (gdjs.SplashScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 0);
}}

}


{


gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
gdjs.SplashScreenCode.condition1IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if ( gdjs.SplashScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.SplashScreenCode.conditionTrue_1 = gdjs.SplashScreenCode.condition1IsTrue_0;
gdjs.SplashScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10714132);
}
}}
if (gdjs.SplashScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/SoundEffects/background/POL-chamber-of-secrets-short.wav", 1, true, 70, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.SplashScreenCode.GDplayObjects1);

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDplayObjects1Objects, runtimeScene, true, false);
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashScreenCode.GDplayObjects1 */
{for(var i = 0, len = gdjs.SplashScreenCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDplayObjects1[i].setColor("133;3;19");
}
}
{ //Subevents
gdjs.SplashScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.SplashScreenCode.GDplayObjects1);

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDplayObjects1Objects, runtimeScene, true, true);
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashScreenCode.GDplayObjects1 */
{for(var i = 0, len = gdjs.SplashScreenCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDplayObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("info"), gdjs.SplashScreenCode.GDinfoObjects1);

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDinfoObjects1Objects, runtimeScene, true, false);
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashScreenCode.GDinfoObjects1 */
{for(var i = 0, len = gdjs.SplashScreenCode.GDinfoObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDinfoObjects1[i].setColor("133;3;19");
}
}
{ //Subevents
gdjs.SplashScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("info"), gdjs.SplashScreenCode.GDinfoObjects1);

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDinfoObjects1Objects, runtimeScene, true, true);
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashScreenCode.GDinfoObjects1 */
{for(var i = 0, len = gdjs.SplashScreenCode.GDinfoObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDinfoObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.SplashScreenCode.GDsettingsObjects1);

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDsettingsObjects1Objects, runtimeScene, true, false);
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashScreenCode.GDsettingsObjects1 */
{for(var i = 0, len = gdjs.SplashScreenCode.GDsettingsObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDsettingsObjects1[i].setColor("133;3;19");
}
}
{ //Subevents
gdjs.SplashScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.SplashScreenCode.GDsettingsObjects1);

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SplashScreenCode.mapOfGDgdjs_46SplashScreenCode_46GDsettingsObjects1Objects, runtimeScene, true, true);
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashScreenCode.GDsettingsObjects1 */
{for(var i = 0, len = gdjs.SplashScreenCode.GDsettingsObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDsettingsObjects1[i].setColor("255;255;255");
}
}}

}


{


{
}

}


};

gdjs.SplashScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashScreenCode.GDcastleObjects1.length = 0;
gdjs.SplashScreenCode.GDcastleObjects2.length = 0;
gdjs.SplashScreenCode.GDtitle2Objects1.length = 0;
gdjs.SplashScreenCode.GDtitle2Objects2.length = 0;
gdjs.SplashScreenCode.GDtitleObjects1.length = 0;
gdjs.SplashScreenCode.GDtitleObjects2.length = 0;
gdjs.SplashScreenCode.GDplayObjects1.length = 0;
gdjs.SplashScreenCode.GDplayObjects2.length = 0;
gdjs.SplashScreenCode.GDsettingsObjects1.length = 0;
gdjs.SplashScreenCode.GDsettingsObjects2.length = 0;
gdjs.SplashScreenCode.GDinfoObjects1.length = 0;
gdjs.SplashScreenCode.GDinfoObjects2.length = 0;
gdjs.SplashScreenCode.GDhorseObjects1.length = 0;
gdjs.SplashScreenCode.GDhorseObjects2.length = 0;

gdjs.SplashScreenCode.eventsList3(runtimeScene);
return;

}

gdjs['SplashScreenCode'] = gdjs.SplashScreenCode;
