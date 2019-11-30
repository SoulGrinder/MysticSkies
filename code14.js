gdjs.GameOverCode = {};
gdjs.GameOverCode.GDGOObjects1= [];
gdjs.GameOverCode.GDGOObjects2= [];
gdjs.GameOverCode.GDInfoObjects1= [];
gdjs.GameOverCode.GDInfoObjects2= [];
gdjs.GameOverCode.GDInfo2Objects1= [];
gdjs.GameOverCode.GDInfo2Objects2= [];
gdjs.GameOverCode.GDRankObjects1= [];
gdjs.GameOverCode.GDRankObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};


gdjs.GameOverCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDInfoObjects1.createFrom(runtimeScene.getObjects("Info"));
gdjs.GameOverCode.GDInfo2Objects1.createFrom(runtimeScene.getObjects("Info2"));
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(37)));
}{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)));
}{for(var i = 0, len = gdjs.GameOverCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDInfoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDInfo2Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDInfo2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "1");
}{for(var i = 0, len = gdjs.GameOverCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDInfoObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)));
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "MysticSkiesGO.mp3", false, 80, 1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Best", "Scores", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(37)));
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 1500;
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9025492);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 17:  Beginner");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 1499;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 3000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9026396);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 16:  Novice");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 2999;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 6000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9027316);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 15:  Amateur");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 5999;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 9000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9028212);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 14:  Average");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 8999;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 12000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9029068);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 13:  Capable");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 11999;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 15000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9029964);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 12:  Competent");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 14999;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 18000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9030860);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 11:  Good");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 17999;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 21000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9031756);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 10:  Adept");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 20999;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 24000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9032788);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 9:  Skilled");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 23999;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 27000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9033684);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 8:  Expert");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 29999;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 33000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9034580);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 7:  Professional");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 32999;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 36000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9035476);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 6:  Great");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 35999;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 39000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9036372);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 5:  Amazing");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 38999;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 42000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9037268);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 4:  Super");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 41999;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 45000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9038164);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 3:  Fantastic");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 44999;
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 48000;
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9039060);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 2:  Amazing");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 47999;
}gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val;
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9039828);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].setString("Rank 1:  Grand Master");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)) == "Eaten alive by a sky beast";
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9040540);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDInfoObjects1.createFrom(runtimeScene.getObjects("Info"));
{for(var i = 0, len = gdjs.GameOverCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDInfoObjects1[i].setX(145);
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)) == "Knocked out of the sky";
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9041172);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDInfoObjects1.createFrom(runtimeScene.getObjects("Info"));
{for(var i = 0, len = gdjs.GameOverCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDInfoObjects1[i].setX(175);
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(51)) == 1;
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9041740);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDInfoObjects1.createFrom(runtimeScene.getObjects("Info"));
{for(var i = 0, len = gdjs.GameOverCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDInfoObjects1[i].setX(149);
}
}}

}


{

gdjs.GameOverCode.GDGOObjects1.createFrom(runtimeScene.getObjects("GO"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDGOObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDGOObjects1[i].getY() < 135 ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDGOObjects1[k] = gdjs.GameOverCode.GDGOObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDGOObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDGOObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDGOObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDGOObjects1[i].addForce(0, 200, 0);
}
}}

}


{

gdjs.GameOverCode.GDGOObjects1.createFrom(runtimeScene.getObjects("GO"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDGOObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDGOObjects1[i].getY() > 134 ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDGOObjects1[k] = gdjs.GameOverCode.GDGOObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDGOObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDInfoObjects1.createFrom(runtimeScene.getObjects("Info"));
gdjs.GameOverCode.GDRankObjects1.createFrom(runtimeScene.getObjects("Rank"));
{for(var i = 0, len = gdjs.GameOverCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDInfoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDRankObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRankObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDInfoObjects1[i].setTextAlignment("center");
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.GameOverCode.condition0IsTrue_1.val ) {
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "1");
}}
gdjs.GameOverCode.conditionTrue_1.val = true && gdjs.GameOverCode.condition0IsTrue_1.val && gdjs.GameOverCode.condition1IsTrue_1.val;
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "1");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9044132);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.GameOverCode.GDInfo2Objects1.createFrom(runtimeScene.getObjects("Info2"));
{for(var i = 0, len = gdjs.GameOverCode.GDInfo2Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDInfo2Objects1[i].hide(false);
}
}}

}


{

gdjs.GameOverCode.GDInfoObjects1.createFrom(runtimeScene.getObjects("Info"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDInfoObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDInfoObjects1[i].getX() < -(200) ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDInfoObjects1[k] = gdjs.GameOverCode.GDInfoObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDInfoObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


}; //End of gdjs.GameOverCode.eventsList0xb5aa0


gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGOObjects1.length = 0;
gdjs.GameOverCode.GDGOObjects2.length = 0;
gdjs.GameOverCode.GDInfoObjects1.length = 0;
gdjs.GameOverCode.GDInfoObjects2.length = 0;
gdjs.GameOverCode.GDInfo2Objects1.length = 0;
gdjs.GameOverCode.GDInfo2Objects2.length = 0;
gdjs.GameOverCode.GDRankObjects1.length = 0;
gdjs.GameOverCode.GDRankObjects2.length = 0;

gdjs.GameOverCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['GameOverCode'] = gdjs.GameOverCode;
