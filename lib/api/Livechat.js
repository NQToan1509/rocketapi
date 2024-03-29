"use strict";
/**
 * @module ApiLivechat
 * Provides a client for making requests with Livechat Rocket.Chat's REST API
 */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __importDefault(require("./api"));
var ApiLivechat = /** @class */ (function (_super) {
    __extends(ApiLivechat, _super);
    function ApiLivechat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.credentials = {};
        return _this;
    }
    ApiLivechat.prototype.login = function (guest) { return this.grantVisitor(guest); };
    ApiLivechat.prototype.config = function (params) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.get('livechat/config', params, false)];
                case 1: return [2 /*return*/, (_a.sent()).config];
            }
        }); });
    };
    ApiLivechat.prototype.room = function (params) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.get('livechat/room', __assign({ token: this.credentials.token }, params), false)];
                case 1: return [2 /*return*/, (_a.sent()).room];
            }
        }); });
    };
     ApiLivechat.prototype.updateDepartment = function (_a) {
        var {rid,departmentId} = _a;
        return this.post('livechat/student.updateDepartment', { rid: rid,departmentId:departmentId, token: this.credentials.token }, false);
    };
    ApiLivechat.prototype.closeChat = function (_a) {
        var rid = _a.rid;
        return this.post('livechat/room.close', { rid: rid, token: this.credentials.token }, false);
    };
    ApiLivechat.prototype.cancelChat = function (_a) {
        var rid = _a.rid;
        return this.post('livechat/room.cancel', { rid: rid, token: this.credentials.token }, false);
    };
    ApiLivechat.prototype.shareScreen = function (_a) {
        var rid = _a.rid, messageType = _a.messageType;
        return this.post('livechat/room.shareScreen', { rid: rid, token: this.credentials.token, messageType: messageType }, false);
    };
    ApiLivechat.prototype.transferChat = function (_a) {
        var rid = _a.rid, department = _a.department;
        return (this.post('livechat/room.transfer', { rid: rid, token: this.credentials.token, department: department }, false));
    };
    ApiLivechat.prototype.chatSurvey = function (survey) { return (this.post('livechat/room.survey', { rid: survey.rid, token: this.credentials.token, data: survey.data }, false)); };
    ApiLivechat.prototype.visitor = function () { return this.get("livechat/visitor/" + this.credentials.token); };
    ApiLivechat.prototype.grantVisitor = function (guest) {
        return __awaiter(this, void 0, void 0, function () {
            var visitor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('livechat/visitor', guest, false)];
                    case 1:
                        visitor = (_a.sent()).visitor;
                        this.credentials = {
                            token: visitor.token
                        };
                        return [2 /*return*/, visitor];
                }
            });
        });
    };
    ApiLivechat.prototype.deleteVisitor = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.del("livechat/visitor/" + this.credentials.token)];
                case 1: return [2 /*return*/, (_a.sent()).visitor];
            }
        }); });
    };
    ApiLivechat.prototype.updateVisitorStatus = function (status) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.post("livechat/visitor.status", { token: this.credentials.token, status: status })];
                case 1: return [2 /*return*/, (_a.sent()).status];
            }
        }); });
    };
    ApiLivechat.prototype.updateCallStatus = function (callStatus, rid, callId) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.post("livechat/visitor.callStatus", { token: this.credentials.token, callStatus: callStatus, rid: rid, callId: callId })];
                case 1: return [2 /*return*/, (_a.sent()).callStatus];
            }
        }); });
    };
    ApiLivechat.prototype.nextAgent = function (department) {
        if (department === void 0) { department = ''; }
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.get("livechat/agent.next/" + this.credentials.token, { department: department })];
                case 1: return [2 /*return*/, (_a.sent()).agent];
            }
        }); });
    };
    ApiLivechat.prototype.agent = function (_a) {
        var rid = _a.rid;
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, this.get("livechat/agent.info/" + rid + "/" + this.credentials.token)];
                case 1: return [2 /*return*/, (_b.sent()).agent];
            }
        }); });
    };
    ApiLivechat.prototype.student = function (_a) {
        var { email, name, isHannah, department,rid } = _a;
        
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2 /*return*/, this.get("livechat/student/"+ email + "/"+rid+"/" + this.credentials.token)];
        }); });
    };
    ApiLivechat.prototype.getMentorSubject = function (_a) {
        
        
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2 /*return*/, this.get("livechat/student.getUser/"+_a)];
        }); });
    };
// addBlockTime  getMentorSubject
    ApiLivechat.prototype.findMentorFunix = function (params) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2 /*return*/, this.post("livechat/startFindMentor",{ token: this.credentials.token,departmentId:params.departmentId,rid:params.rid,agents:params.agents })];
        }); });
    };
    ApiLivechat.prototype.addblockfunix = function (params) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2 /*return*/, this.post("livechat/addBlockFunix",{ token: this.credentials.token,checkAddBlock:params.checkAddBlock,rid:params.rid })];
        }); });
    };
    // ApiLivechat.prototype.createRoomfunix = function (_a) {
    //     var {departmentId} = _a;
    //     return __awaiter(this, void 0, void 0, function () {
    //         return __generator(this, function (_b) {
    //             return [2 /*return*/, this.get("livechat/mentor.createRoom/" + departmentId + "/" + this.credentials.token)];
    //         });
    //     });
    // };

    ApiLivechat.prototype.message = function (id, params) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.get("livechat/message/" + id, __assign({ token: this.credentials.token }, params))];
                case 1: return [2 /*return*/, (_a.sent()).message];
            }
        }); });
    };
    ApiLivechat.prototype.sendMessage = function (message) { return (this.post('livechat/message', __assign({}, message, { token: this.credentials.token }), false)); };
    ApiLivechat.prototype.editMessage = function (id, message) { return (this.put("livechat/message/" + id, message, false)); };
    ApiLivechat.prototype.deleteMessage = function (id, _a) {
        var rid = _a.rid;
        return (this.del("livechat/message/" + id, { rid: rid, token: this.credentials.token }, false));
    };
    ApiLivechat.prototype.loadMessages = function (rid, params) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.get("livechat/messages.history/" + rid, __assign({}, params, { token: this.credentials.token }), false)];
                case 1: return [2 /*return*/, (_a.sent()).messages];
            }
        }); });
    };
    ApiLivechat.prototype.sendOfflineMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.post('livechat/offline.message', __assign({}, message), false)];
                case 1: return [2 /*return*/, (_a.sent()).message];
            }
        }); });
    };
    ApiLivechat.prototype.sendVisitorNavigation = function (page) { return (this.post('livechat/page.visited', __assign({}, page), false)); };
    ApiLivechat.prototype.requestTranscript = function (email, _a) {
        var rid = _a.rid;
        return (this.post('livechat/transcript', { token: this.credentials.token, rid: rid, email: email }, false));
    };
    ApiLivechat.prototype.videoCall = function (_a) {
        var rid = _a.rid;
        return this.get("livechat/video.call/" + this.credentials.token, { rid: rid }, false);
    };
    ApiLivechat.prototype.sendCustomField = function (field) { return this.post('livechat/custom.field', field, false); };
    ApiLivechat.prototype.sendCustomFields = function (fields) { return this.post('livechat/custom.fields', fields, false); };

    // hangding  
    ApiLivechat.prototype.hangding = function (params) {
         console.log('params uploadt',params)
        var formData = new FormData();
        var headersNeededForUpload = {
            'x-visitor-token': this.credentials.token
        };
        if (typeof params.file !== 'string') {
            formData.append('file', params.file[0]);
            
        }
        formData.append('data',JSON.stringify( params.data));
         
        return this.post("livechat/hangingQuestion", formData, false, undefined, { customHeaders: headersNeededForUpload });
    };

    ApiLivechat.prototype.uploadFile = function (params) {
        var formData = new FormData();
        var headersNeededForUpload = {
            'x-visitor-token': this.credentials.token
        };
        formData.append('file', params.file);
        return this.post("livechat/upload/" + params.rid, formData, false, undefined, { customHeaders: headersNeededForUpload });
    };
    return ApiLivechat;
}(api_1.default));
exports.default = ApiLivechat;
//# sourceMappingURL=Livechat.js.map