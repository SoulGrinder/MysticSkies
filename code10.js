gdjs.TipsCode = {};
gdjs.TipsCode.GDTipObjects1= [];
gdjs.TipsCode.GDTipObjects2= [];
gdjs.TipsCode.GDInfo2Objects1= [];
gdjs.TipsCode.GDInfo2Objects2= [];
gdjs.TipsCode.GDTitleObjects1= [];
gdjs.TipsCode.GDTitleObjects2= [];

gdjs.TipsCode.conditionTrue_0 = {val:false};
gdjs.TipsCode.condition0IsTrue_0 = {val:false};
gdjs.TipsCode.condition1IsTrue_0 = {val:false};
gdjs.TipsCode.condition2IsTrue_0 = {val:false};
gdjs.TipsCode.condition3IsTrue_0 = {val:false};
gdjs.TipsCode.conditionTrue_1 = {val:false};
gdjs.TipsCode.condition0IsTrue_1 = {val:false};
gdjs.TipsCode.condition1IsTrue_1 = {val:false};
gdjs.TipsCode.condition2IsTrue_1 = {val:false};
gdjs.TipsCode.condition3IsTrue_1 = {val:false};


gdjs.TipsCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.TipsCode.condition0IsTrue_0.val = false;
{
gdjs.TipsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TipsCode.condition0IsTrue_0.val) {
gdjs.TipsCode.GDInfo2Objects1.createFrom(runtimeScene.getObjects("Info2"));
gdjs.TipsCode.GDTipObjects1.createFrom(runtimeScene.getObjects("Tip"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "1");
}{for(var i = 0, len = gdjs.TipsCode.GDTipObjects1.length ;i < len;++i) {
    gdjs.TipsCode.GDTipObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TipsCode.GDInfo2Objects1.length ;i < len;++i) {
    gdjs.TipsCode.GDInfo2Objects1[i].hide();
}
}}

}


{

gdjs.TipsCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));

gdjs.TipsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TipsCode.GDTitleObjects1.length;i<l;++i) {
    if ( gdjs.TipsCode.GDTitleObjects1[i].getY() < 60 ) {
        gdjs.TipsCode.condition0IsTrue_0.val = true;
        gdjs.TipsCode.GDTitleObjects1[k] = gdjs.TipsCode.GDTitleObjects1[i];
        ++k;
    }
}
gdjs.TipsCode.GDTitleObjects1.length = k;}if (gdjs.TipsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TipsCode.GDTitleObjects1 */
{for(var i = 0, len = gdjs.TipsCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.TipsCode.GDTitleObjects1[i].addForce(0, 120, 0);
}
}}

}


{


gdjs.TipsCode.condition0IsTrue_0.val = false;
{
gdjs.TipsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "1");
}if (gdjs.TipsCode.condition0IsTrue_0.val) {
gdjs.TipsCode.GDTipObjects1.createFrom(runtimeScene.getObjects("Tip"));
{for(var i = 0, len = gdjs.TipsCode.GDTipObjects1.length ;i < len;++i) {
    gdjs.TipsCode.GDTipObjects1[i].hide(false);
}
}}

}


{


gdjs.TipsCode.condition0IsTrue_0.val = false;
{
gdjs.TipsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "1");
}if (gdjs.TipsCode.condition0IsTrue_0.val) {
gdjs.TipsCode.GDInfo2Objects1.createFrom(runtimeScene.getObjects("Info2"));
{for(var i = 0, len = gdjs.TipsCode.GDInfo2Objects1.length ;i < len;++i) {
    gdjs.TipsCode.GDInfo2Objects1[i].hide(false);
}
}}

}


{

gdjs.TipsCode.GDInfo2Objects1.createFrom(runtimeScene.getObjects("Info2"));

gdjs.TipsCode.condition0IsTrue_0.val = false;
{
{gdjs.TipsCode.conditionTrue_1 = gdjs.TipsCode.condition0IsTrue_0;
gdjs.TipsCode.condition0IsTrue_1.val = false;
gdjs.TipsCode.condition1IsTrue_1.val = false;
gdjs.TipsCode.condition2IsTrue_1.val = false;
{
gdjs.TipsCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.TipsCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.TipsCode.GDInfo2Objects1.length;i<l;++i) {
    if ( gdjs.TipsCode.GDInfo2Objects1[i].isVisible() ) {
        gdjs.TipsCode.condition1IsTrue_1.val = true;
        gdjs.TipsCode.GDInfo2Objects1[k] = gdjs.TipsCode.GDInfo2Objects1[i];
        ++k;
    }
}
gdjs.TipsCode.GDInfo2Objects1.length = k;}if ( gdjs.TipsCode.condition1IsTrue_1.val ) {
{
gdjs.TipsCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(52)) == 1;
}}
}
gdjs.TipsCode.conditionTrue_1.val = true && gdjs.TipsCode.condition0IsTrue_1.val && gdjs.TipsCode.condition1IsTrue_1.val && gdjs.TipsCode.condition2IsTrue_1.val;
}
}if (gdjs.TipsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


{

gdjs.TipsCode.GDInfo2Objects1.createFrom(runtimeScene.getObjects("Info2"));

gdjs.TipsCode.condition0IsTrue_0.val = false;
{
{gdjs.TipsCode.conditionTrue_1 = gdjs.TipsCode.condition0IsTrue_0;
gdjs.TipsCode.condition0IsTrue_1.val = false;
gdjs.TipsCode.condition1IsTrue_1.val = false;
gdjs.TipsCode.condition2IsTrue_1.val = false;
{
gdjs.TipsCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.TipsCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.TipsCode.GDInfo2Objects1.length;i<l;++i) {
    if ( gdjs.TipsCode.GDInfo2Objects1[i].isVisible() ) {
        gdjs.TipsCode.condition1IsTrue_1.val = true;
        gdjs.TipsCode.GDInfo2Objects1[k] = gdjs.TipsCode.GDInfo2Objects1[i];
        ++k;
    }
}
gdjs.TipsCode.GDInfo2Objects1.length = k;}if ( gdjs.TipsCode.condition1IsTrue_1.val ) {
{
gdjs.TipsCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(52)) == 2;
}}
}
gdjs.TipsCode.conditionTrue_1.val = true && gdjs.TipsCode.condition0IsTrue_1.val && gdjs.TipsCode.condition1IsTrue_1.val && gdjs.TipsCode.condition2IsTrue_1.val;
}
}if (gdjs.TipsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inn", false);
}}

}


}; //End of gdjs.TipsCode.eventsList0xb5aa0


gdjs.TipsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TipsCode.GDTipObjects1.length = 0;
gdjs.TipsCode.GDTipObjects2.length = 0;
gdjs.TipsCode.GDInfo2Objects1.length = 0;
gdjs.TipsCode.GDInfo2Objects2.length = 0;
gdjs.TipsCode.GDTitleObjects1.length = 0;
gdjs.TipsCode.GDTitleObjects2.length = 0;

gdjs.TipsCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['TipsCode'] = gdjs.TipsCode;
