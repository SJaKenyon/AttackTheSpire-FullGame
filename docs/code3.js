gdjs.SettingsCode = {};
gdjs.SettingsCode.GDcastleObjects1= [];
gdjs.SettingsCode.GDcastleObjects2= [];
gdjs.SettingsCode.GDdifficultyObjects1= [];
gdjs.SettingsCode.GDdifficultyObjects2= [];
gdjs.SettingsCode.GDsoundObjects1= [];
gdjs.SettingsCode.GDsoundObjects2= [];
gdjs.SettingsCode.GDdifficulty1Objects1= [];
gdjs.SettingsCode.GDdifficulty1Objects2= [];
gdjs.SettingsCode.GDbackObjects1= [];
gdjs.SettingsCode.GDbackObjects2= [];
gdjs.SettingsCode.GDglobalsoundObjects1= [];
gdjs.SettingsCode.GDglobalsoundObjects2= [];
gdjs.SettingsCode.GDgloablsooundtitleObjects1= [];
gdjs.SettingsCode.GDgloablsooundtitleObjects2= [];
gdjs.SettingsCode.GDmuteObjects1= [];
gdjs.SettingsCode.GDmuteObjects2= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};
gdjs.SettingsCode.condition2IsTrue_0 = {val:false};
gdjs.SettingsCode.conditionTrue_1 = {val:false};
gdjs.SettingsCode.condition0IsTrue_1 = {val:false};
gdjs.SettingsCode.condition1IsTrue_1 = {val:false};
gdjs.SettingsCode.condition2IsTrue_1 = {val:false};


gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDdifficultyObjects1Objects = Hashtable.newFrom({"difficulty": gdjs.SettingsCode.GDdifficultyObjects1});gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11023644);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDdifficultyObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDdifficultyObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDdifficultyObjects1[i].returnVariable(gdjs.SettingsCode.GDdifficultyObjects1[i].getVariables().getFromIndex(0)).setNumber(1 - (gdjs.RuntimeObject.getVariableNumber(gdjs.SettingsCode.GDdifficultyObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDglobalsoundObjects1Objects = Hashtable.newFrom({"globalsound": gdjs.SettingsCode.GDglobalsoundObjects1});gdjs.SettingsCode.eventsList1 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11025332);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDglobalsoundObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDglobalsoundObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDglobalsoundObjects1[i].returnVariable(gdjs.SettingsCode.GDglobalsoundObjects1[i].getVariables().getFromIndex(0)).setNumber(1 - (gdjs.RuntimeObject.getVariableNumber(gdjs.SettingsCode.GDglobalsoundObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDglobalsoundObjects1Objects = Hashtable.newFrom({"globalsound": gdjs.SettingsCode.GDglobalsoundObjects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDdifficultyObjects1Objects = Hashtable.newFrom({"difficulty": gdjs.SettingsCode.GDdifficultyObjects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmuteObjects1Objects = Hashtable.newFrom({"mute": gdjs.SettingsCode.GDmuteObjects1});gdjs.SettingsCode.eventsList2 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11028436);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDmuteObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDmuteObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDmuteObjects1[i].returnVariable(gdjs.SettingsCode.GDmuteObjects1[i].getVariables().getFromIndex(0)).setNumber(1 - (gdjs.RuntimeObject.getVariableNumber(gdjs.SettingsCode.GDmuteObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmuteObjects1Objects = Hashtable.newFrom({"mute": gdjs.SettingsCode.GDmuteObjects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.SettingsCode.GDbackObjects1});gdjs.SettingsCode.eventsList3 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SplashScreen", false);
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.SettingsCode.GDbackObjects1});gdjs.SettingsCode.eventsList4 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11020820);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/SoundEffects/background/POL-chamber-of-secrets-short.wav", 1, true, 70, 1);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11021804);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("difficulty"), gdjs.SettingsCode.GDdifficultyObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDdifficultyObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDdifficultyObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDdifficultyObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDdifficultyObjects1[i].setColor("133;3;19");
}
}
{ //Subevents
gdjs.SettingsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("globalsound"), gdjs.SettingsCode.GDglobalsoundObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDglobalsoundObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDglobalsoundObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDglobalsoundObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDglobalsoundObjects1[i].setColor("133;3;19");
}
}
{ //Subevents
gdjs.SettingsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("globalsound"), gdjs.SettingsCode.GDglobalsoundObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDglobalsoundObjects1Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDglobalsoundObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDglobalsoundObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDglobalsoundObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("difficulty"), gdjs.SettingsCode.GDdifficultyObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDdifficultyObjects1Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDdifficultyObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDdifficultyObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDdifficultyObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mute"), gdjs.SettingsCode.GDmuteObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmuteObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDmuteObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDmuteObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDmuteObjects1[i].setColor("133;3;19");
}
}
{ //Subevents
gdjs.SettingsCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("mute"), gdjs.SettingsCode.GDmuteObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmuteObjects1Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDmuteObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDmuteObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDmuteObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.SettingsCode.GDbackObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDbackObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDbackObjects1[i].setColor("133;3;19");
}
}
{ //Subevents
gdjs.SettingsCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.SettingsCode.GDbackObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackObjects1Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDbackObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDbackObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("difficulty"), gdjs.SettingsCode.GDdifficultyObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDdifficultyObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDdifficultyObjects1[i].getVariableNumber(gdjs.SettingsCode.GDdifficultyObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDdifficultyObjects1[k] = gdjs.SettingsCode.GDdifficultyObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDdifficultyObjects1.length = k;}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11031908);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDdifficultyObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDdifficultyObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDdifficultyObjects1[i].setString("normal");
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("difficulty"), gdjs.SettingsCode.GDdifficultyObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDdifficultyObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDdifficultyObjects1[i].getVariableNumber(gdjs.SettingsCode.GDdifficultyObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDdifficultyObjects1[k] = gdjs.SettingsCode.GDdifficultyObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDdifficultyObjects1.length = k;}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11032956);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDdifficultyObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDdifficultyObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDdifficultyObjects1[i].setString("high");
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mute"), gdjs.SettingsCode.GDmuteObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDmuteObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDmuteObjects1[i].getVariableNumber(gdjs.SettingsCode.GDmuteObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDmuteObjects1[k] = gdjs.SettingsCode.GDmuteObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDmuteObjects1.length = k;}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11034044);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDmuteObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDmuteObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDmuteObjects1[i].setString("no");
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mute"), gdjs.SettingsCode.GDmuteObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDmuteObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDmuteObjects1[i].getVariableNumber(gdjs.SettingsCode.GDmuteObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDmuteObjects1[k] = gdjs.SettingsCode.GDmuteObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDmuteObjects1.length = k;}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11035076);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDmuteObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDmuteObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDmuteObjects1[i].setString("yes");
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("globalsound"), gdjs.SettingsCode.GDglobalsoundObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDglobalsoundObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDglobalsoundObjects1[i].getVariableNumber(gdjs.SettingsCode.GDglobalsoundObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDglobalsoundObjects1[k] = gdjs.SettingsCode.GDglobalsoundObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDglobalsoundObjects1.length = k;}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11036460);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDglobalsoundObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDglobalsoundObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDglobalsoundObjects1[i].setString("high");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("globalsound"), gdjs.SettingsCode.GDglobalsoundObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDglobalsoundObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDglobalsoundObjects1[i].getVariableNumber(gdjs.SettingsCode.GDglobalsoundObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDglobalsoundObjects1[k] = gdjs.SettingsCode.GDglobalsoundObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDglobalsoundObjects1.length = k;}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11037380);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDglobalsoundObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDglobalsoundObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDglobalsoundObjects1[i].setString("low");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 30);
}}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDcastleObjects1.length = 0;
gdjs.SettingsCode.GDcastleObjects2.length = 0;
gdjs.SettingsCode.GDdifficultyObjects1.length = 0;
gdjs.SettingsCode.GDdifficultyObjects2.length = 0;
gdjs.SettingsCode.GDsoundObjects1.length = 0;
gdjs.SettingsCode.GDsoundObjects2.length = 0;
gdjs.SettingsCode.GDdifficulty1Objects1.length = 0;
gdjs.SettingsCode.GDdifficulty1Objects2.length = 0;
gdjs.SettingsCode.GDbackObjects1.length = 0;
gdjs.SettingsCode.GDbackObjects2.length = 0;
gdjs.SettingsCode.GDglobalsoundObjects1.length = 0;
gdjs.SettingsCode.GDglobalsoundObjects2.length = 0;
gdjs.SettingsCode.GDgloablsooundtitleObjects1.length = 0;
gdjs.SettingsCode.GDgloablsooundtitleObjects2.length = 0;
gdjs.SettingsCode.GDmuteObjects1.length = 0;
gdjs.SettingsCode.GDmuteObjects2.length = 0;

gdjs.SettingsCode.eventsList4(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
