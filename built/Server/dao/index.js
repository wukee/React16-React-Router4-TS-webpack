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
const server_1 = require("../server");
function bar() {
    console.log('bar');
    if (Math.random() > 0.5) {
        server_1.foo();
    }
}
exports.bar = bar;
//# sourceMappingURL=index.js.map