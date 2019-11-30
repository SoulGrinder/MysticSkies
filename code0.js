gdjs.SGCode = {};
gdjs.SGCode.GDSGObjects1= [];
gdjs.SGCode.GDSGObjects2= [];
gdjs.SGCode.GDIntroTextObjects1= [];
gdjs.SGCode.GDIntroTextObjects2= [];
gdjs.SGCode.GDPresentsObjects1= [];
gdjs.SGCode.GDPresentsObjects2= [];

gdjs.SGCode.conditionTrue_0 = {val:false};
gdjs.SGCode.condition0IsTrue_0 = {val:false};
gdjs.SGCode.condition1IsTrue_0 = {val:false};
gdjs.SGCode.condition2IsTrue_0 = {val:false};
gdjs.SGCode.conditionTrue_1 = {val:false};
gdjs.SGCode.condition0IsTrue_1 = {val:false};
gdjs.SGCode.condition1IsTrue_1 = {val:false};
gdjs.SGCode.condition2IsTrue_1 = {val:false};


gdjs.SGCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.SGCode.condition0IsTrue_0.val = false;
{
gdjs.SGCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SGCode.condition0IsTrue_0.val) {
gdjs.SGCode.GDPresentsObjects1.createFrom(runtimeScene.getObjects("Presents"));
gdjs.SGCode.GDSGObjects1.createFrom(runtimeScene.getObjects("SG"));
{for(var i = 0, len = gdjs.SGCode.GDSGObjects1.length ;i < len;++i) {
    gdjs.SGCode.GDSGObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.SGCode.GDPresentsObjects1.length ;i < len;++i) {
    gdjs.SGCode.GDPresentsObjects1[i].setOpacity(0);
}
}{gdjs.VariablesContainer.badVariable.setNumber(0);
}{gdjs.VariablesContainer.badVariable.setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "SGTheme.wav", false, 28, 1.33);
}{gdjs.evtTools.storage.loadJSONFileFromStorage("Best");
}{gdjs.evtTools.storage.readNumberFromJSONFile("Best", "Scores", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}


{

gdjs.SGCode.GDSGObjects1.createFrom(runtimeScene.getObjects("SG"));

gdjs.SGCode.condition0IsTrue_0.val = false;
{
{gdjs.SGCode.conditionTrue_1 = gdjs.SGCode.condition0IsTrue_0;
gdjs.SGCode.condition0IsTrue_1.val = false;
gdjs.SGCode.condition1IsTrue_1.val = false;
{
gdjs.SGCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(gdjs.VariablesContainer.badVariable) == 0;
}if ( gdjs.SGCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.SGCode.GDSGObjects1.length;i<l;++i) {
    if ( gdjs.SGCode.GDSGObjects1[i].getOpacity() < 255 ) {
        gdjs.SGCode.condition1IsTrue_1.val = true;
        gdjs.SGCode.GDSGObjects1[k] = gdjs.SGCode.GDSGObjects1[i];
        ++k;
    }
}
gdjs.SGCode.GDSGObjects1.length = k;}}
gdjs.SGCode.conditionTrue_1.val = true && gdjs.SGCode.condition0IsTrue_1.val && gdjs.SGCode.condition1IsTrue_1.val;
}
}if (gdjs.SGCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SGCode.GDSGObjects1 */
{for(var i = 0, len = gdjs.SGCode.GDSGObjects1.length ;i < len;++i) {
    gdjs.SGCode.GDSGObjects1[i].setOpacity(gdjs.SGCode.GDSGObjects1[i].getOpacity() + (3));
}
}}

}


{

gdjs.SGCode.GDSGObjects1.createFrom(runtimeScene.getObjects("SG"));

gdjs.SGCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SGCode.GDSGObjects1.length;i<l;++i) {
    if ( gdjs.SGCode.GDSGObjects1[i].getOpacity() == 255 ) {
        gdjs.SGCode.condition0IsTrue_0.val = true;
        gdjs.SGCode.GDSGObjects1[k] = gdjs.SGCode.GDSGObjects1[i];
        ++k;
    }
}
gdjs.SGCode.GDSGObjects1.length = k;}if (gdjs.SGCode.condition0IsTrue_0.val) {
gdjs.SGCode.GDPresentsObjects1.createFrom(runtimeScene.getObjects("Presents"));
/* Reuse gdjs.SGCode.GDSGObjects1 */
{for(var i = 0, len = gdjs.SGCode.GDSGObjects1.length ;i < len;++i) {
    gdjs.SGCode.GDSGObjects1[i].addForce(0, -(500), 0);
}
}{for(var i = 0, len = gdjs.SGCode.GDPresentsObjects1.length ;i < len;++i) {
    gdjs.SGCode.GDPresentsObjects1[i].setOpacity(gdjs.SGCode.GDPresentsObjects1[i].getOpacity() + (2.5));
}
}}

}


{

gdjs.SGCode.GDPresentsObjects1.createFrom(runtimeScene.getObjects("Presents"));

gdjs.SGCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SGCode.GDPresentsObjects1.length;i<l;++i) {
    if ( gdjs.SGCode.GDPresentsObjects1[i].getOpacity() == 255 ) {
        gdjs.SGCode.condition0IsTrue_0.val = true;
        gdjs.SGCode.GDPresentsObjects1[k] = gdjs.SGCode.GDPresentsObjects1[i];
        ++k;
    }
}
gdjs.SGCode.GDPresentsObjects1.length = k;}if (gdjs.SGCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


}; //End of gdjs.SGCode.eventsList0xb5aa0


gdjs.SGCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SGCode.GDSGObjects1.length = 0;
gdjs.SGCode.GDSGObjects2.length = 0;
gdjs.SGCode.GDIntroTextObjects1.length = 0;
gdjs.SGCode.GDIntroTextObjects2.length = 0;
gdjs.SGCode.GDPresentsObjects1.length = 0;
gdjs.SGCode.GDPresentsObjects2.length = 0;

gdjs.SGCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['SGCode'] = gdjs.SGCode;
