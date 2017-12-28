/**
 *
 * ContentContainer.scss 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2016/12/10
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./content.scss");
const antd_1 = require("antd");
const Option = antd_1.Select.Option;
const hu_babylon_1 = require("../../asset/imgs/hu.babylon");
const BABYLON = require("babylonjs");
require("babylonjs-loaders");
class ContentContainer extends react_1.PureComponent {
    constructor(props) {
        super(props);
        console.log('ContentContainer ' + 'constructor' + arguments);
        this.state = {
            month: 1,
            actived: false
        };
    }
    componentDidMount() {
        var engine = new BABYLON.Engine(this.canvas, true);
        var scene = new BABYLON.Scene(engine);
        //3D球体
        // Add a camera to the scene and attach it to the canvas
        var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 3, Math.PI / 3, 20, BABYLON.Vector3.Zero(), scene);
        // camera.setPosition(new BABYLON.Vector3(-0.5,0,0));
        camera.attachControl(this.canvas, true);
        scene.ambientColor = new BABYLON.Color3(1, 1, 1);
        // Add lights to the scene
        // var light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1, 1, 0), scene);
        var light1 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 10, 0), scene);
        light1.diffuse = new BABYLON.Color3(1, 0, 0);
        light1.specular = new BABYLON.Color3(0.5, 1, 0);
        // light1.intensity=1; //灯光强度
        light1.range = 100;
        // light1.groundColor = new BABYLON.Color3(0.5, 0, 0.8);
        var redMat = new BABYLON.StandardMaterial("redMat", scene);
        redMat.ambientColor = new BABYLON.Color3(1, 0, 0);
        redMat.diffuseColor = new BABYLON.Color3(0, 0.3, 0.5);
        var greenMat = new BABYLON.StandardMaterial("greenMat", scene);
        greenMat.ambientColor = new BABYLON.Color3(0, 1, 0);
        greenMat.diffuseColor = new BABYLON.Color3(0, 0.5, 0.6);
        // greenMat.wireframe=true; //查看网格
        // greenMat.emissiveColor=new BABYLON.Color3(0,1,1);
        var yellowMat = new BABYLON.StandardMaterial("redMat", scene);
        yellowMat.ambientColor = new BABYLON.Color3(1, 0.7, 0);
        yellowMat.diffuseColor = new BABYLON.Color3(0.8, 0, 0.4);
        var blueMat = new BABYLON.StandardMaterial("redMat", scene);
        blueMat.ambientColor = new BABYLON.Color3(0, 0, 1);
        blueMat.diffuseColor = new BABYLON.Color3(0.8, 0.5, 0);
        var purpleMat = new BABYLON.StandardMaterial("redMat", scene);
        purpleMat.ambientColor = new BABYLON.Color3(1, 0, 1);
        purpleMat.diffuseColor = new BABYLON.Color3(0, 1, 1);
        var groundColor = new BABYLON.StandardMaterial("redMat", scene);
        // groundColor.ambientColor = new BABYLON.Color3(0.8, 0.5, 0.8);
        groundColor.emissiveColor = new BABYLON.Color3(0.2, 0.5, 0.2);
        //  var sphere0 = BABYLON.MeshBuilder.CreateSphere("sphere0", {diameter:2,diameterX:2,updatable:true}, scene);
        //      sphere0.position.x=4;
        //      sphere0.material=yellowMat;
        //      sphere0.actionManager = new BABYLON.ActionManager(scene);
        //
        //      //Animation
        //  var animationBox = new BABYLON.Animation("myAnimation", "scaling.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
        //  var keys = [];
        // //At the animation key 0, the value of scaling is "1"
        //  keys.push({
        //      frame: 0,
        //      value: 1
        //  });
        //  //At the animation key 20, the value of scaling is "0.2"
        //  keys.push({
        //      frame: 20,
        //      value: 0.2
        //  });
        //  //At the animation key 100, the value of scaling is "1"
        //  keys.push({
        //      frame: 100,
        //      value: 1
        //  });
        //
        // //  var keys = [];
        // //  keys.push({
        // //      frame: 0,
        // //      value: BABYLON.Vector3.Zero(),
        // //      outTangent: new BABYLON.Vector3(1, 0, 0)
        // //  });
        // //
        // //  keys.push({
        // //      frame: 20,
        // //      inTangent: new BABYLON.Vector3(1, 0, 0),
        // //      value: new BABYLON.Vector3(1, 1, 1),
        // //      outTangent: new BABYLON.Vector3(-1, 0, 0)
        // //  });
        // //
        // //  keys.push({
        // //      frame: 100,
        // //      inTangent: new BABYLON.Vector3(-1, 0, 0),
        // //      value: BABYLON.Vector3.Zero()
        // //  });
        //
        //  animationBox.setKeys(keys);
        //  sphere0.animations = [];
        //  sphere0.animations.push(animationBox);
        //  scene.beginAnimation(sphere0, 0, 100, true);
        // const assetManager = new BABYLON.AssetsManager(scene);
        // const huLoader = assetManager.addMeshTask("huLoaderTask","","/assets/imgs/","hu.babylon");
        // huLoader.onSuccess=function (meshes) {
        //
        // }
        var sphere0;
        const loader = new BABYLON.AssetsManager(scene);
        console.log(hu_babylon_1.default);
        const myTask = loader.addMeshTask('objload', '', '/assets/imgs/', 'hu.babylon');
        loader.onFinish = () => {
            engine.runRenderLoop(function () {
                scene.render();
            });
        };
        loader.onTaskErrorObservable.add(function (task) {
            console.log('task failed', task.errorObject.message, task.errorObject.exception);
        });
        myTask.onSuccess = (task) => {
            sphere0 = task.loadedMeshes[0]; // Property 'loadedMeshes' does not exist on type 'IAssetTask'
            sphere0.position.x = 6;
            sphere0.scaling.x = .1;
            sphere0.scaling.y = .1;
            sphere0.scaling.z = .1;
            sphere0.isPickable = true; //是否可被点击
            sphere0.material = yellowMat;
            sphere0.actionManager = new BABYLON.ActionManager(scene);
            sphere0.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                window.alert(1);
                sphere0.puse();
            }));
        };
        myTask.onError = function (task, message, exception) {
            console.log(message, exception);
        };
        loader.load();
        var sphere1 = BABYLON.MeshBuilder.CreateSphere("sphere1", { diameter: 2, diameterX: 2, updatable: true }, scene);
        sphere1.material = redMat;
        sphere1.actionManager = new BABYLON.ActionManager(scene);
        sphere1.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, light1, "diffuse", new BABYLON.Color3(1, 0, 0), 1000));
        // var condition1 = new BABYLON.PredicateCondition(sphere1.actionManager, function () {
        //     return light1.diffuse.equals(BABYLON.Color3.Red());
        // });
        sphere1.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, camera, "alpha", 0, 500));
        var sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere2", { diameter: 2, diameterX: 2, updatable: true }, scene);
        sphere2.material = blueMat;
        sphere2.position.x = -4;
        sphere2.actionManager = new BABYLON.ActionManager(scene);
        sphere2.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, light1, "diffuse", new BABYLON.Color3(0, 0, 1), 1000));
        var sphere3 = BABYLON.MeshBuilder.CreateSphere("sphere3", { diameter: 2, diameterX: 2, updatable: true }, scene);
        sphere3.material = purpleMat;
        sphere3.position.y = -3;
        sphere3.actionManager = new BABYLON.ActionManager(scene);
        sphere3.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, light1, "diffuse", new BABYLON.Color3(1, 0, 1), 1000));
        var sphere4 = BABYLON.MeshBuilder.CreateSphere("sphere4", { diameter: 2, diameterX: 2, updatable: true }, scene);
        sphere4.material = greenMat;
        sphere4.position.y = 3;
        sphere4.actionManager = new BABYLON.ActionManager(scene);
        sphere4.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, light1, "diffuse", new BABYLON.Color3(0, 1, 0), 1000));
        var myGround = BABYLON.MeshBuilder.CreateGround('myGround', { width: 20, height: 15, subdivisions: 10 }, scene);
        myGround.position.y = -1;
        myGround.material = groundColor;
        // var alpha=0;
        // var bata=0;
        // scene.beforeRender=function(){
        //     sphere0.position=new BABYLON.Vector3(10*Math.sin(alpha),0,10*Math.cos(alpha));
        //     sphere2.position=new BABYLON.Vector3(5*Math.sin(bata),0,-5*Math.cos(bata));
        //     // sphere3.position=new BABYLON.Vector3(0,10*Math.sin(alpha),-10*Math.cos(alpha));
        //     // sphere4.position=new BABYLON.Vector3(0,5*Math.sin(bata),5*Math.cos(bata));
        //     alpha +=0.01;
        //     bata +=0.03
        // }
        engine.runRenderLoop(function () {
            scene.render();
        });
    }
    render() {
        const config1 = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 300
            },
            title: {
                text: '一月份用电分布'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                            name: '一号楼',
                            y: 10
                        }, {
                            name: '二号楼',
                            y: 20,
                            sliced: true,
                            selected: true
                        }, {
                            name: '三号楼',
                            y: 30
                        }, {
                            name: '四号楼',
                            y: 10
                        }, {
                            name: '实验室',
                            y: 20
                        }, {
                            name: '厨房',
                            y: 10
                        }]
                }]
        };
        const config2 = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 300
            },
            title: {
                text: '二月份用电分布'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                            name: '一号楼',
                            y: 15
                        }, {
                            name: '二号楼',
                            y: 15,
                            sliced: true,
                            selected: true
                        }, {
                            name: '三号楼',
                            y: 15
                        }, {
                            name: '四号楼',
                            y: 15
                        }, {
                            name: '实验室',
                            y: 15
                        }, {
                            name: '厨房',
                            y: 25
                        }]
                }]
        };
        const config3 = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 300
            },
            title: {
                text: '三月份用电分布'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                            name: '一号楼',
                            y: 56.33
                        }, {
                            name: '二号楼',
                            y: 24.03,
                            sliced: true,
                            selected: true
                        }, {
                            name: '三号楼',
                            y: 10.38
                        }, {
                            name: '四号楼',
                            y: 4.77
                        }, {
                            name: '实验室',
                            y: 0.91
                        }, {
                            name: '厨房',
                            y: 0.2
                        }]
                }]
        };
        const configArr = [config1, config2, config3];
        const lineconfig = {
            chart: {
                type: 'spline',
                height: 300
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    formatter: function () {
                        return this.value + '°';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                    name: '二号楼',
                    marker: {
                        symbol: 'square'
                    },
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
                            y: 26.5,
                            marker: {
                                symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                            }
                        }, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: '一号楼',
                    marker: {
                        symbol: 'diamond'
                    },
                    data: [{
                            y: 3.9,
                            marker: {
                                symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
                            }
                        }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }]
        };
        const dconfing = {
            chart: {
                renderTo: 'container',
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    depth: 50,
                    viewDistance: 25
                }
            },
            title: {
                text: '年度用电分布'
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            series: [{
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                }]
        };
        let _ = this;
        return (react_1.default.createElement("div", { className: "nfe-container" },
            react_1.default.createElement("div", { className: "nfe-container-header" },
                react_1.default.createElement(antd_1.Row, null,
                    react_1.default.createElement(antd_1.Col, { span: 12, offset: 2 },
                        react_1.default.createElement("span", null, "\u7CBE\u51C6\u6797\u4E1A\u5317\u4EAC\u5E02\u91CD\u70B9\u5B9E\u9A8C\u5BA4")),
                    react_1.default.createElement(antd_1.Col, { span: 10 },
                        "   ",
                        react_1.default.createElement("div", { className: "header-menu" },
                            react_1.default.createElement("div", { className: "header-menu-col" },
                                react_1.default.createElement("div", null, "\u80E1\u620E")),
                            react_1.default.createElement("div", { className: "header-menu-col" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement(antd_1.Icon, { type: "user" }))),
                            react_1.default.createElement("div", { className: "header-menu-col" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement(antd_1.Icon, { type: "setting" }))))))),
            react_1.default.createElement("div", { className: "nfe-container-content" },
                react_1.default.createElement("div", { className: "babylon_content" },
                    react_1.default.createElement("canvas", { style: { width: '1400px', height: '800px' }, "touch-action": "none", ref: (item) => this.canvas = item })),
                react_1.default.createElement("br", null))));
    }
}
ContentContainer.displayName = 'ContentContainer';
exports.default = ContentContainer;
//# sourceMappingURL=ContentContainer.js.map