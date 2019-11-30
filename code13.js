gdjs.CompleteCode = {};
gdjs.CompleteCode.GDElfmanObjects1= [];
gdjs.CompleteCode.GDElfmanObjects2= [];
gdjs.CompleteCode.GDGOObjects1= [];
gdjs.CompleteCode.GDGOObjects2= [];
gdjs.CompleteCode.GDInfoObjects1= [];
gdjs.CompleteCode.GDInfoObjects2= [];
gdjs.CompleteCode.GDInfo2Objects1= [];
gdjs.CompleteCode.GDInfo2Objects2= [];
gdjs.CompleteCode.GDCompleteFXObjects1= [];
gdjs.CompleteCode.GDCompleteFXObjects2= [];
gdjs.CompleteCode.GDRankObjects1= [];
gdjs.CompleteCode.GDRankObjects2= [];

gdjs.CompleteCode.conditionTrue_0 = {val:false};
gdjs.CompleteCode.condition0IsTrue_0 = {val:false};
gdjs.CompleteCode.condition1IsTrue_0 = {val:false};
gdjs.CompleteCode.condition2IsTrue_0 = {val:false};
gdjs.CompleteCode.conditionTrue_1 = {val:false};
gdjs.CompleteCode.condition0IsTrue_1 = {val:false};
gdjs.CompleteCode.condition1IsTrue_1 = {val:false};
gdjs.CompleteCode.condition2IsTrue_1 = {val:false};


gdjs.CompleteCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
gdjs.CompleteCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
gdjs.CompleteCode.GDInfoObjects1.createFrom(runtimeScene.getObjects("Info"));
gdjs.CompleteCode.GDInfo2Objects1.createFrom(runtimeScene.getObjects("Info2"));
{for(var i = 0, len = gdjs.CompleteCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDInfoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CompleteCode.GDInfo2Objects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDInfo2Objects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "1");
}{for(var i = 0, len = gdjs.CompleteCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDInfoObjects1[i].setString("Final Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "MysticSkiesComplete.mp3", false, 100, 1);
}}

}


{

gdjs.CompleteCode.GDGOObjects1.createFrom(runtimeScene.getObjects("GO"));

gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CompleteCode.GDGOObjects1.length;i<l;++i) {
    if ( gdjs.CompleteCode.GDGOObjects1[i].getY() < 135 ) {
        gdjs.CompleteCode.condition0IsTrue_0.val = true;
        gdjs.CompleteCode.GDGOObjects1[k] = gdjs.CompleteCode.GDGOObjects1[i];
        ++k;
    }
}
gdjs.CompleteCode.GDGOObjects1.length = k;}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CompleteCode.GDGOObjects1 */
{for(var i = 0, len = gdjs.CompleteCode.GDGOObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDGOObjects1[i].addForce(0, 200, 0);
}
}}

}


{

gdjs.CompleteCode.GDGOObjects1.createFrom(runtimeScene.getObjects("GO"));

gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CompleteCode.GDGOObjects1.length;i<l;++i) {
    if ( gdjs.CompleteCode.GDGOObjects1[i].getY() > 134 ) {
        gdjs.CompleteCode.condition0IsTrue_0.val = true;
        gdjs.CompleteCode.GDGOObjects1[k] = gdjs.CompleteCode.GDGOObjects1[i];
        ++k;
    }
}
gdjs.CompleteCode.GDGOObjects1.length = k;}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
gdjs.CompleteCode.GDInfoObjects1.createFrom(runtimeScene.getObjects("Info"));
gdjs.CompleteCode.GDInfo2Objects1.createFrom(runtimeScene.getObjects("Info2"));
{for(var i = 0, len = gdjs.CompleteCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDInfoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CompleteCode.GDInfo2Objects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDInfo2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CompleteCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDInfoObjects1[i].setTextAlignment("center");
}
}}

}


{

gdjs.CompleteCode.GDInfo2Objects1.createFrom(runtimeScene.getObjects("Info2"));

gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.CompleteCode.GDInfo2Objects1.length;i<l;++i) {
    if ( gdjs.CompleteCode.GDInfo2Objects1[i].isVisible() ) {
        gdjs.CompleteCode.condition0IsTrue_1.val = true;
        gdjs.CompleteCode.GDInfo2Objects1[k] = gdjs.CompleteCode.GDInfo2Objects1[i];
        ++k;
    }
}
gdjs.CompleteCode.GDInfo2Objects1.length = k;}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


{

gdjs.CompleteCode.GDInfoObjects1.createFrom(runtimeScene.getObjects("Info"));

gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CompleteCode.GDInfoObjects1.length;i<l;++i) {
    if ( gdjs.CompleteCode.GDInfoObjects1[i].getX() < -(200) ) {
        gdjs.CompleteCode.condition0IsTrue_0.val = true;
        gdjs.CompleteCode.GDInfoObjects1[k] = gdjs.CompleteCode.GDInfoObjects1[i];
        ++k;
    }
}
gdjs.CompleteCode.GDInfoObjects1.length = k;}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
gdjs.CompleteCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 1500;
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9003956);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 17:  Beginner");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 1499;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 3000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9004812);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 16:  Novice");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 2999;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 6000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9005708);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 15:  Amateur");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 5999;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 9000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9006604);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 14:  Average");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 8999;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 12000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9007500);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 13:  Capable");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 11999;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 15000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9008396);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 12:  Competent");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 14999;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 18000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9009292);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 11:  Good");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 17999;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 21000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9010188);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 10:  Adept");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 20999;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 24000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9011084);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 9:  Skilled");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 23999;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 27000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9011980);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 8:  Expert");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 29999;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 33000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9012876);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 7:  Professional");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 32999;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 36000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9013772);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 6:  Great");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 35999;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 39000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9014668);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 5:  Amazing");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 38999;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 42000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9015564);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 4:  Super");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 41999;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 45000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9016460);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 3:  Fantastic");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
gdjs.CompleteCode.condition1IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 44999;
}if ( gdjs.CompleteCode.condition0IsTrue_1.val ) {
{
gdjs.CompleteCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 48000;
}}
gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val && gdjs.CompleteCode.condition1IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9017356);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 2:  Amazing");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition0IsTrue_0;
gdjs.CompleteCode.condition0IsTrue_1.val = false;
{
gdjs.CompleteCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 47999;
}gdjs.CompleteCode.conditionTrue_1.val = true && gdjs.CompleteCode.condition0IsTrue_1.val;
}
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9018124);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.CompleteCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDRankObjects1[i].setString("Rank 1:  Grand Master");
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
gdjs.CompleteCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 40, "1");
}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
gdjs.CompleteCode.GDElfmanObjects1.createFrom(runtimeScene.getObjects("Elfman"));
{for(var i = 0, len = gdjs.CompleteCode.GDElfmanObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDElfmanObjects1[i].setScale(gdjs.CompleteCode.GDElfmanObjects1[i].getScale() + (0.1));
}
}{for(var i = 0, len = gdjs.CompleteCode.GDElfmanObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDElfmanObjects1[i].addForce(-(60), -(30), 0);
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
gdjs.CompleteCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 45, "1");
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9019324);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
gdjs.CompleteCode.GDCompleteFXObjects1.createFrom(runtimeScene.getObjects("CompleteFX"));
gdjs.CompleteCode.GDInfo2Objects1.createFrom(runtimeScene.getObjects("Info2"));
{for(var i = 0, len = gdjs.CompleteCode.GDInfo2Objects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDInfo2Objects1[i].setColor("6;0;218");
}
}{for(var i = 0, len = gdjs.CompleteCode.GDCompleteFXObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDCompleteFXObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
gdjs.CompleteCode.condition1IsTrue_0.val = false;
{
gdjs.CompleteCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 53, "1");
}if ( gdjs.CompleteCode.condition0IsTrue_0.val ) {
{
{gdjs.CompleteCode.conditionTrue_1 = gdjs.CompleteCode.condition1IsTrue_0;
gdjs.CompleteCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9020028);
}
}}
if (gdjs.CompleteCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


}; //End of gdjs.CompleteCode.eventsList0xb5aa0


gdjs.CompleteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CompleteCode.GDElfmanObjects1.length = 0;
gdjs.CompleteCode.GDElfmanObjects2.length = 0;
gdjs.CompleteCode.GDGOObjects1.length = 0;
gdjs.CompleteCode.GDGOObjects2.length = 0;
gdjs.CompleteCode.GDInfoObjects1.length = 0;
gdjs.CompleteCode.GDInfoObjects2.length = 0;
gdjs.CompleteCode.GDInfo2Objects1.length = 0;
gdjs.CompleteCode.GDInfo2Objects2.length = 0;
gdjs.CompleteCode.GDCompleteFXObjects1.length = 0;
gdjs.CompleteCode.GDCompleteFXObjects2.length = 0;
gdjs.CompleteCode.GDRankObjects1.length = 0;
gdjs.CompleteCode.GDRankObjects2.length = 0;

gdjs.CompleteCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['CompleteCode'] = gdjs.CompleteCode;
