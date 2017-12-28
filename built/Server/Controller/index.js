/**
 *
 * index.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/22
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../dao/index");
exports.counter = 1;
console.log('import ', exports.counter);
function counterADD() {
    index_1.counterADD();
    console.log(index_1.counter);
}
exports.counterADD = counterADD;
//# sourceMappingURL=index.js.map