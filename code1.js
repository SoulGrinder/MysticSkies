gdjs.TitleCode = {};
gdjs.TitleCode.GDTitleTextObjects1= [];
gdjs.TitleCode.GDTitleTextObjects2= [];
gdjs.TitleCode.GDInfo1Objects1= [];
gdjs.TitleCode.GDInfo1Objects2= [];
gdjs.TitleCode.GDBGObjects1= [];
gdjs.TitleCode.GDBGObjects2= [];
gdjs.TitleCode.GDAirshipObjects1= [];
gdjs.TitleCode.GDAirshipObjects2= [];
gdjs.TitleCode.GDEnemy3Objects1= [];
gdjs.TitleCode.GDEnemy3Objects2= [];
gdjs.TitleCode.GDCloudsObjects1= [];
gdjs.TitleCode.GDCloudsObjects2= [];
gdjs.TitleCode.GDVignetteObjects1= [];
gdjs.TitleCode.GDVignetteObjects2= [];
gdjs.TitleCode.GDBestScoreObjects1= [];
gdjs.TitleCode.GDBestScoreObjects2= [];
gdjs.TitleCode.GDLastScoreObjects1= [];
gdjs.TitleCode.GDLastScoreObjects2= [];
gdjs.TitleCode.GDTitleObjects1= [];
gdjs.TitleCode.GDTitleObjects2= [];

gdjs.TitleCode.conditionTrue_0 = {val:false};
gdjs.TitleCode.condition0IsTrue_0 = {val:false};
gdjs.TitleCode.condition1IsTrue_0 = {val:false};
gdjs.TitleCode.condition2IsTrue_0 = {val:false};
gdjs.TitleCode.conditionTrue_1 = {val:false};
gdjs.TitleCode.condition0IsTrue_1 = {val:false};
gdjs.TitleCode.condition1IsTrue_1 = {val:false};
gdjs.TitleCode.condition2IsTrue_1 = {val:false};


gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDEnemy3Objects1Objects = Hashtable.newFrom({"Enemy3": gdjs.TitleCode.GDEnemy3Objects1});gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDEnemy3Objects1Objects = Hashtable.newFrom({"Enemy3": gdjs.TitleCode.GDEnemy3Objects1});gdjs.TitleCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.TitleCode.GDBestScoreObjects1.createFrom(runtimeScene.getObjects("BestScore"));
gdjs.TitleCode.GDInfo1Objects1.createFrom(runtimeScene.getObjects("Info1"));
gdjs.TitleCode.GDLastScoreObjects1.createFrom(runtimeScene.getObjects("LastScore"));
{for(var i = 0, len = gdjs.TitleCode.GDInfo1Objects1.length ;i < len;++i) {
    gdjs.TitleCode.GDInfo1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.TitleCode.GDBestScoreObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBestScoreObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TitleCode.GDLastScoreObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDLastScoreObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TitleCode.GDLastScoreObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDLastScoreObjects1[i].setString("Last Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}{for(var i = 0, len = gdjs.TitleCode.GDBestScoreObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBestScoreObjects1[i].setString("Best Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(37)));
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "MysticSkiesTheme.mp3", true, 80, 1);
}}

}


{


{
}

}


{


{
gdjs.TitleCode.GDAirshipObjects1.createFrom(runtimeScene.getObjects("Airship"));
gdjs.TitleCode.GDBGObjects1.createFrom(runtimeScene.getObjects("BG"));
gdjs.TitleCode.GDCloudsObjects1.createFrom(runtimeScene.getObjects("Clouds"));
gdjs.TitleCode.GDEnemy3Objects1.createFrom(runtimeScene.getObjects("Enemy3"));
{for(var i = 0, len = gdjs.TitleCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBGObjects1[i].setXOffset(gdjs.TitleCode.GDBGObjects1[i].getXOffset() + (1));
}
}{for(var i = 0, len = gdjs.TitleCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBGObjects1[i].setYOffset(gdjs.TitleCode.GDBGObjects1[i].getYOffset() + (2));
}
}{for(var i = 0, len = gdjs.TitleCode.GDCloudsObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCloudsObjects1[i].setXOffset(gdjs.TitleCode.GDCloudsObjects1[i].getXOffset() + (4));
}
}{for(var i = 0, len = gdjs.TitleCode.GDCloudsObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCloudsObjects1[i].setYOffset(gdjs.TitleCode.GDCloudsObjects1[i].getYOffset() + (1));
}
}{for(var i = 0, len = gdjs.TitleCode.GDAirshipObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDAirshipObjects1[i].addForce(80, 0, 0);
}
}{for(var i = 0, len = gdjs.TitleCode.GDEnemy3Objects1.length ;i < len;++i) {
    gdjs.TitleCode.GDEnemy3Objects1[i].addForce(80, 0, 0);
}
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(37));
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition1IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8104572);
}
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
gdjs.TitleCode.GDBestScoreObjects1.createFrom(runtimeScene.getObjects("BestScore"));
{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)));
}{for(var i = 0, len = gdjs.TitleCode.GDBestScoreObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBestScoreObjects1[i].setString("Best Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(37)));
}
}}

}


{

gdjs.TitleCode.GDAirshipObjects1.createFrom(runtimeScene.getObjects("Airship"));
gdjs.TitleCode.GDEnemy3Objects1.createFrom(runtimeScene.getObjects("Enemy3"));

gdjs.TitleCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition0IsTrue_0;
gdjs.TitleCode.condition0IsTrue_1.val = false;
gdjs.TitleCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDAirshipObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDAirshipObjects1[i].getX() > 120 ) {
        gdjs.TitleCode.condition0IsTrue_1.val = true;
        gdjs.TitleCode.GDAirshipObjects1[k] = gdjs.TitleCode.GDAirshipObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDAirshipObjects1.length = k;}if ( gdjs.TitleCode.condition0IsTrue_1.val ) {
{
gdjs.TitleCode.condition1IsTrue_1.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDEnemy3Objects1Objects) == 0;
}}
gdjs.TitleCode.conditionTrue_1.val = true && gdjs.TitleCode.condition0IsTrue_1.val && gdjs.TitleCode.condition1IsTrue_1.val;
}
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDAirshipObjects1 */
/* Reuse gdjs.TitleCode.GDEnemy3Objects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDEnemy3Objects1Objects, -(90), (( gdjs.TitleCode.GDAirshipObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDAirshipObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.TitleCode.GDEnemy3Objects1.length ;i < len;++i) {
    gdjs.TitleCode.GDEnemy3Objects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.TitleCode.GDEnemy3Objects1.length ;i < len;++i) {
    gdjs.TitleCode.GDEnemy3Objects1[i].setZOrder(2);
}
}}

}


{

gdjs.TitleCode.GDAirshipObjects1.createFrom(runtimeScene.getObjects("Airship"));

gdjs.TitleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDAirshipObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDAirshipObjects1[i].getX() > 830 ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDAirshipObjects1[k] = gdjs.TitleCode.GDAirshipObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDAirshipObjects1.length = k;}if (gdjs.TitleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDAirshipObjects1 */
{for(var i = 0, len = gdjs.TitleCode.GDAirshipObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDAirshipObjects1[i].setPosition(-(60),gdjs.randomInRange(60, 350));
}
}}

}


{

gdjs.TitleCode.GDEnemy3Objects1.createFrom(runtimeScene.getObjects("Enemy3"));

gdjs.TitleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDEnemy3Objects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDEnemy3Objects1[i].getX() > 830 ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDEnemy3Objects1[k] = gdjs.TitleCode.GDEnemy3Objects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDEnemy3Objects1.length = k;}if (gdjs.TitleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDEnemy3Objects1 */
{for(var i = 0, len = gdjs.TitleCode.GDEnemy3Objects1.length ;i < len;++i) {
    gdjs.TitleCode.GDEnemy3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.TitleCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));

gdjs.TitleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDTitleObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDTitleObjects1[i].getY() > 110 ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDTitleObjects1[k] = gdjs.TitleCode.GDTitleObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDTitleObjects1.length = k;}if (gdjs.TitleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDTitleObjects1 */
{for(var i = 0, len = gdjs.TitleCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDTitleObjects1[i].addForce(0, -(250), 0);
}
}}

}


{

gdjs.TitleCode.GDInfo1Objects1.createFrom(runtimeScene.getObjects("Info1"));
gdjs.TitleCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));

gdjs.TitleCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition0IsTrue_0;
gdjs.TitleCode.condition0IsTrue_1.val = false;
gdjs.TitleCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDTitleObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDTitleObjects1[i].getY() < 111 ) {
        gdjs.TitleCode.condition0IsTrue_1.val = true;
        gdjs.TitleCode.GDTitleObjects1[k] = gdjs.TitleCode.GDTitleObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDTitleObjects1.length = k;}if ( gdjs.TitleCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDInfo1Objects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDInfo1Objects1[i].getScaleX() > 1 ) {
        gdjs.TitleCode.condition1IsTrue_1.val = true;
        gdjs.TitleCode.GDInfo1Objects1[k] = gdjs.TitleCode.GDInfo1Objects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDInfo1Objects1.length = k;}}
gdjs.TitleCode.conditionTrue_1.val = true && gdjs.TitleCode.condition0IsTrue_1.val && gdjs.TitleCode.condition1IsTrue_1.val;
}
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDInfo1Objects1 */
{for(var i = 0, len = gdjs.TitleCode.GDInfo1Objects1.length ;i < len;++i) {
    gdjs.TitleCode.GDInfo1Objects1[i].setScale(gdjs.TitleCode.GDInfo1Objects1[i].getScale() - (0.05));
}
}}

}


{

gdjs.TitleCode.GDInfo1Objects1.createFrom(runtimeScene.getObjects("Info1"));
gdjs.TitleCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));

gdjs.TitleCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition0IsTrue_0;
gdjs.TitleCode.condition0IsTrue_1.val = false;
gdjs.TitleCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDTitleObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDTitleObjects1[i].getY() < 111 ) {
        gdjs.TitleCode.condition0IsTrue_1.val = true;
        gdjs.TitleCode.GDTitleObjects1[k] = gdjs.TitleCode.GDTitleObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDTitleObjects1.length = k;}if ( gdjs.TitleCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDInfo1Objects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDInfo1Objects1[i].getOpacity() < 255 ) {
        gdjs.TitleCode.condition1IsTrue_1.val = true;
        gdjs.TitleCode.GDInfo1Objects1[k] = gdjs.TitleCode.GDInfo1Objects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDInfo1Objects1.length = k;}}
gdjs.TitleCode.conditionTrue_1.val = true && gdjs.TitleCode.condition0IsTrue_1.val && gdjs.TitleCode.condition1IsTrue_1.val;
}
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDInfo1Objects1 */
{for(var i = 0, len = gdjs.TitleCode.GDInfo1Objects1.length ;i < len;++i) {
    gdjs.TitleCode.GDInfo1Objects1[i].setOpacity(gdjs.TitleCode.GDInfo1Objects1[i].getOpacity() + (3));
}
}}

}


{

gdjs.TitleCode.GDInfo1Objects1.createFrom(runtimeScene.getObjects("Info1"));

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDInfo1Objects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDInfo1Objects1[i].getOpacity() < 255 ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDInfo1Objects1[k] = gdjs.TitleCode.GDInfo1Objects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDInfo1Objects1.length = k;}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition1IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8109116);
}
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
gdjs.TitleCode.GDBestScoreObjects1.createFrom(runtimeScene.getObjects("BestScore"));
gdjs.TitleCode.GDLastScoreObjects1.createFrom(runtimeScene.getObjects("LastScore"));
{for(var i = 0, len = gdjs.TitleCode.GDLastScoreObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDLastScoreObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDBestScoreObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBestScoreObjects1[i].hide(false);
}
}}

}


{

gdjs.TitleCode.GDInfo1Objects1.createFrom(runtimeScene.getObjects("Info1"));

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition0IsTrue_0;
gdjs.TitleCode.condition0IsTrue_1.val = false;
gdjs.TitleCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDInfo1Objects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDInfo1Objects1[i].getOpacity() > 150 ) {
        gdjs.TitleCode.condition0IsTrue_1.val = true;
        gdjs.TitleCode.GDInfo1Objects1[k] = gdjs.TitleCode.GDInfo1Objects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDInfo1Objects1.length = k;}if ( gdjs.TitleCode.condition0IsTrue_1.val ) {
{
gdjs.TitleCode.condition1IsTrue_1.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}}
gdjs.TitleCode.conditionTrue_1.val = true && gdjs.TitleCode.condition0IsTrue_1.val && gdjs.TitleCode.condition1IsTrue_1.val;
}
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition1IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8110020);
}
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}}

}


}; //End of gdjs.TitleCode.eventsList0xb5aa0


gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDTitleTextObjects1.length = 0;
gdjs.TitleCode.GDTitleTextObjects2.length = 0;
gdjs.TitleCode.GDInfo1Objects1.length = 0;
gdjs.TitleCode.GDInfo1Objects2.length = 0;
gdjs.TitleCode.GDBGObjects1.length = 0;
gdjs.TitleCode.GDBGObjects2.length = 0;
gdjs.TitleCode.GDAirshipObjects1.length = 0;
gdjs.TitleCode.GDAirshipObjects2.length = 0;
gdjs.TitleCode.GDEnemy3Objects1.length = 0;
gdjs.TitleCode.GDEnemy3Objects2.length = 0;
gdjs.TitleCode.GDCloudsObjects1.length = 0;
gdjs.TitleCode.GDCloudsObjects2.length = 0;
gdjs.TitleCode.GDVignetteObjects1.length = 0;
gdjs.TitleCode.GDVignetteObjects2.length = 0;
gdjs.TitleCode.GDBestScoreObjects1.length = 0;
gdjs.TitleCode.GDBestScoreObjects2.length = 0;
gdjs.TitleCode.GDLastScoreObjects1.length = 0;
gdjs.TitleCode.GDLastScoreObjects2.length = 0;
gdjs.TitleCode.GDTitleObjects1.length = 0;
gdjs.TitleCode.GDTitleObjects2.length = 0;

gdjs.TitleCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['TitleCode'] = gdjs.TitleCode;
