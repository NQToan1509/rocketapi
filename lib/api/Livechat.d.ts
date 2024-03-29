/**
 * @module ApiLivechat
 * Provides a client for making requests with Livechat Rocket.Chat's REST API
 */
import { ILivechatTokenAPI, ILivechatRoomCredentialAPI, ILivechatRoomSurveyAPI, INewLivechatGuestAPI, INewLivechatMessageAPI, ILivechatRoomMessagesAPI, INewLivechatNavigationAPI, INewLivechatCustomFieldAPI, INewLivechatOfflineMessageAPI, INewLivechatCustomFieldsAPI, ILivechatRoom, INewLivechatRoomCredentialAPI, ILivechatUploadAPI } from '../../interfaces';
import ApiBase from './api';
export default class ApiLivechat extends ApiBase {
    credentials: ILivechatRoomCredentialAPI;
    login(guest: INewLivechatGuestAPI | any): Promise<any>;
    config(params?: ILivechatTokenAPI): Promise<any>;
    room(params?: INewLivechatRoomCredentialAPI): Promise<any>;
    closeChat({ rid }: ILivechatRoom): Promise<any>;
    cancelChat({ rid }: ILivechatRoom): Promise<any>;
    shareScreen({ rid, messageType }: any): Promise<any>;
    transferChat({ rid, department }: ILivechatRoom): Promise<any>;
    chatSurvey(survey: ILivechatRoomSurveyAPI): Promise<any>;
    visitor(): Promise<any>;
    grantVisitor(guest: INewLivechatGuestAPI): Promise<any>;
    deleteVisitor(): Promise<any>;
    updateVisitorStatus(status: string): Promise<any>;
    updateCallStatus(callStatus: string, rid: string, callId: string): Promise<any>;
    nextAgent(department?: string): Promise<any>;
    agent({ rid }: any): Promise<any>;
    updateDepartment({ rid,departmentId }: any): Promise<any>;
    student({ name, email, isHannah, department }: any): Promise<any>;
    getMentorSubject(departmentId?:any): Promise<any>;
    findMentorFunix({departmentId, rid, agents}:any): Promise<any>;
    addblock({ checkAddBlock, rid }:any): Promise<any>;
    message(id: string, params: ILivechatRoom): Promise<any>;
    sendMessage(message: INewLivechatMessageAPI): Promise<any>;
    editMessage(id: string, message: INewLivechatMessageAPI): Promise<any>;
    deleteMessage(id: string, { rid }: ILivechatRoom): Promise<any>;
    loadMessages(rid: string, params?: ILivechatRoomMessagesAPI): Promise<any>;
    sendOfflineMessage(message: INewLivechatOfflineMessageAPI): Promise<any>;
    sendVisitorNavigation(page: INewLivechatNavigationAPI): Promise<any>;
    requestTranscript(email: string, { rid }: ILivechatRoom): Promise<any>;
    videoCall({ rid }: ILivechatRoom): Promise<any>;
    sendCustomField(field: INewLivechatCustomFieldAPI): Promise<any>;
    sendCustomFields(fields: INewLivechatCustomFieldsAPI): Promise<any>;
    uploadFile(params: ILivechatUploadAPI): Promise<any>;
    hangding(params: any): Promise<any>
}
