"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
    * @module LivechatDriver
    * Provides high-level helpers for Livechat connection, method calls, subscriptions.
    */
var Livechat_1 = __importDefault(require("../api/Livechat"));
var drivers_1 = require("../drivers");
var log_1 = require("../log");
var LivechatClient = /** @class */ (function (_super) {
    __extends(LivechatClient, _super);
    function LivechatClient(_a) {
        var logger = _a.logger, allPublic = _a.allPublic, rooms = _a.rooms, integrationId = _a.integrationId, _b = _a.protocol, protocol = _b === void 0 ? drivers_1.Protocols.DDP : _b, config = __rest(_a, ["logger", "allPublic", "rooms", "integrationId", "protocol"]);
        var _this = _super.call(this, __assign({ logger: logger }, config)) || this;
        _this.livechatStream = 'stream-livechat-room';
        _this.userId = '';
        _this.logger = log_1.logger;
        _this.socket = Promise.resolve();
        _this.import(protocol, config);
        return _this;
    }
    LivechatClient.prototype.import = function (protocol, config) {
        var _this = this;
        switch (protocol) {
            // case Protocols.MQTT:
            //   this.socket = import(/* webpackChunkName: 'mqtttest' */ '../drivers/mqtt').then(({ MQTTDriver }) => new MQTTDriver({ logger: this.logger, ...config }))
            //   break
            case drivers_1.Protocols.DDP:
                this.socket = Promise.resolve().then(function () { return __importStar(require(/* webpackChunkName: 'ddptest' */ '../drivers/ddp')); }).then(function (_a) {
                    var DDPDriver = _a.DDPDriver;
                    return new DDPDriver(__assign({ logger: _this.logger }, config));
                });
                break;
            default:
                throw new Error("Invalid Protocol: " + protocol + ", valids: " + Object.keys(drivers_1.Protocols).join());
        }
    };
    LivechatClient.prototype.connect = function (options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.socket];
                    case 1: return [2 /*return*/, (_a.sent()).connect(options).then(function () { return (_this.setUpConnection()); })];
                }
            });
        });
    };
    LivechatClient.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.socket];
                case 1: return [2 /*return*/, (_a.sent()).disconnect()];
            }
        }); });
    };
    LivechatClient.prototype.unsubscribe = function (subscription) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.socket];
                case 1: return [2 /*return*/, (_a.sent()).unsubscribe(subscription)];
            }
        }); });
    };
    LivechatClient.prototype.unsubscribeAll = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.socket];
                case 1: return [2 /*return*/, (_a.sent()).unsubscribeAll()];
            }
        }); });
    };
    LivechatClient.prototype.subscribeNotifyAll = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.socket];
                case 1: return [2 /*return*/, (_a.sent()).subscribeNotifyAll()];
            }
        }); });
    };
    LivechatClient.prototype.subscribeLoggedNotify = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.socket];
                case 1: return [2 /*return*/, (_a.sent()).subscribeLoggedNotify()];
            }
        }); });
    };
    LivechatClient.prototype.subscribeNotifyUser = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.socket];
                case 1: return [2 /*return*/, (_a.sent()).subscribeNotifyUser()];
            }
        }); });
    };
    LivechatClient.prototype.onMessage = function (cb) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.socket];
                case 1: return [2 /*return*/, (_a.sent()).onMessage(cb)];
            }
        }); });
    };
    LivechatClient.prototype.onTyping = function (cb) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.socket];
                case 1: return [2 /*return*/, (_a.sent()).onTyping(cb)];
            }
        }); });
    };
    LivechatClient.prototype.onAgentChange = function (rid, cb) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.subscribe(this.livechatStream, rid)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.onStreamData(this.livechatStream, function (_a) {
                                var _b = __read(_a.fields.args, 1), _c = _b[0], type = _c.type, data = _c.data;
                            if (type === 'agentData') {
                                    cb(data);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };

    LivechatClient.prototype.onMentorAction = function (rid, cb) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.subscribe(this.livechatStream, rid)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.onStreamData(this.livechatStream, function (_a) {
                                var _b = __read(_a.fields.args, 1), _c = _b[0], type = _c.type, data = _c.data;
                            if (type === 'mentorAccept' || type === 'mentorBusy') {
                                    cb(data);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //onMentorAccept
     LivechatClient.prototype.onMentorAccept = function (menthos,cb) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.socket];
                case 1: return [2 /*return*/, (_a.sent()).onMentorAccept(menthos,cb)];
            }
        }); });
    };

    LivechatClient.prototype.onAgentStatusChange = function (rid, cb) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.subscribe(this.livechatStream, rid)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.onStreamData(this.livechatStream, function (_a) {
                                var _b = __read(_a.fields.args, 1), _c = _b[0], type = _c.type, status = _c.status;
                                if (type === 'agentStatus') {
                                    cb(status);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LivechatClient.prototype.onQueuePositionChange = function (rid, cb) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.subscribe(this.livechatStream, rid)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.onStreamData(this.livechatStream, function (_a) {
                                var _b = __read(_a.fields.args, 1), _c = _b[0], type = _c.type, data = _c.data;
                                if (type === 'queueData') {
                                    cb(data);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LivechatClient.prototype.onVisitorChange = function (rid, cb) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.subscribe(this.livechatStream, rid)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.onStreamData(this.livechatStream, function (_a) {
                                var _b = __read(_a.fields.args, 1), _c = _b[0], type = _c.type, visitor = _c.visitor;
                                if (type === 'visitorData') {
                                    cb(visitor);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LivechatClient.prototype.notifyVisitorTyping = function (rid, username, typing) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.socket];
                    case 1: return [2 /*return*/, (_a.sent()).notifyVisitorTyping(rid, username, typing, this.credentials.token)];
                }
            });
        });
    };
    LivechatClient.prototype.notifyCallDeclined = function (rid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.socket];
                    case 1: return [2 /*return*/, (_a.sent()).notifyCallDeclined(rid)];
                }
            });
        });
    };
    LivechatClient.prototype.subscribe = function (topic, eventName) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = this.credentials.token;
                        return [4 /*yield*/, this.socket];
                    case 1: return [2 /*return*/, (_a.sent()).subscribe(topic, eventName, { token: token, visitorToken: token })];
                }
            });
        });
    };
    LivechatClient.prototype.subscribeRoom = function (rid) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = this.credentials.token;
                        return [4 /*yield*/, this.socket];
                    case 1: return [2 /*return*/, (_a.sent()).subscribeRoom(rid, { token: token, visitorToken: token })];
                }
            });
        });
    };
    LivechatClient.prototype.onStreamData = function (event, cb) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.socket];
                    case 1: return [2 /*return*/, (_a.sent()).onStreamData(event, cb)];
                }
            });
        });
    };
    LivechatClient.prototype.setUpConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = this.credentials.token;
                        return [4 /*yield*/, this.socket];
                    case 1: return [2 /*return*/, (_a.sent()).methodCall('livechat:setUpConnection', { token: token })];
                }
            });
        });
    };
    return LivechatClient;
}(Livechat_1.default));
exports.default = LivechatClient;
//# sourceMappingURL=Livechat.js.map